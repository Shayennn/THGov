#!/usr/bin/env node
/**
 * Rewrites the `crawl` block of every service content file from the measured
 * audit in src/lib/content/audit.ts, so page copy can never drift from the data.
 *
 *   npm run sync:crawl            # apply
 *   npm run sync:crawl -- --check # report drift and exit non-zero
 *
 * Run it after `npm run audit:robots`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SERVICES_DIR = path.join(ROOT, 'src/lib/content/services');
const AUDIT = path.join(ROOT, 'src/lib/content/audit.ts');
const checkOnly = process.argv.includes('--check');

const auditSrc = fs.readFileSync(AUDIT, 'utf8');
const AUDIT_DATE = auditSrc.match(/export const AUDIT_DATE = '([^']+)'/)?.[1] ?? '';

const rows = new Map();
for (const m of auditSrc.matchAll(
	/\{ host: '([^']+)', verdict: '([^']+)', kind: '([^']+)', robotsStatus: ([^,]+), homeStatus: ([^,]+), browserStatus: ([^,]+), googlebotRule: (\w+), snippet: '((?:[^'\\]|\\.)*)' \}/g
)) {
	rows.set(m[1], {
		host: m[1],
		verdict: m[2],
		kind: m[3],
		robotsStatus: m[4] === 'null' ? null : Number(m[4]),
		homeStatus: m[5] === 'null' ? null : Number(m[5]),
		browserStatus: m[6] === 'null' ? null : Number(m[6]),
		snippet: m[8]
	});
}

/**
 * One note per refusal mechanism. Each says what was measured, what it does and
 * does not imply, and — where the honest answer is "we cannot tell" — says so.
 */
const NOTES = {
	'robots-disallow-all': () => ({
		th: 'ไฟล์ robots.txt ของเว็บไซต์นี้สั่งห้ามเครื่องมือค้นหาทุกตัวเก็บข้อมูลทุกหน้า และไม่มีข้อยกเว้นให้ Googlebot นี่เป็นหลักฐานที่หนักแน่นที่สุด เพราะไฟล์ robots.txt เป็นสาธารณะและให้ผลเหมือนกันกับทุกคนที่เรียกดู ใครก็ตรวจสอบซ้ำได้',
		en: 'This site’s robots.txt instructs every crawler not to fetch any page, with no exception for Googlebot. This is the strongest form of evidence available, because robots.txt is public and identical for every requester — anyone can reproduce the check.'
	}),
	'googlebot-exception': () => ({
		th: 'ไฟล์ robots.txt ปิดกั้นบอตทุกตัวเป็นค่าเริ่มต้น แต่เขียนข้อยกเว้นให้ Googlebot เข้าถึงได้ เว็บไซต์จึงยังค้นเจอผ่าน Google ได้ตามปกติ ขณะที่เครื่องมือค้นหาอื่น บริการเก็บถาวรเว็บ และผู้ช่วย AI ที่ประชาชนเริ่มใช้ค้นหาบริการภาครัฐ ถูกปฏิเสธทั้งหมด',
		en: 'The robots.txt blocks every crawler by default but writes an explicit exception for Googlebot. The site therefore remains findable through Google, while other search engines, web-archiving services and the AI assistants people increasingly use to look up government services are all refused.'
	}),
	'js-challenge': () => ({
		th: 'เมื่อเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ เซิร์ฟเวอร์ตอบกลับด้วยหน้าท้าทายของ Cloudflare ที่ต้องประมวลผลจาวาสคริปต์ก่อนจึงจะผ่านได้ เบราว์เซอร์จริงผ่านได้ และบอตของเครื่องมือค้นหาที่ Cloudflare ยืนยันตัวตนแล้วมักได้รับการยกเว้น เราจึงไม่สรุปว่า Google ถูกปิดกั้น แต่สิ่งที่ปิดกั้นแน่นอนคือเครื่องมือที่ไม่ประมวลผลจาวาสคริปต์ ทั้งบริการเก็บถาวรเว็บ เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI',
		en: 'Requested with a full browser profile, the server answers with a Cloudflare challenge that must be solved by running JavaScript. Real browsers pass it, and search-engine crawlers Cloudflare has verified are normally exempted — so we do not conclude that Google is blocked. What is certainly blocked is anything that does not execute JavaScript: web archives, third-party monitoring, and AI assistants.'
	}),
	'waf-rule': () => ({
		th: 'แม้จะเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ ทั้งส่วนหัวการระบุตัวตนเบราว์เซอร์ ภาษา และ fetch metadata ครบถ้วน เซิร์ฟเวอร์ก็ยังปฏิเสธคำขอด้วยหน้าบล็อกของระบบไฟร์วอลล์ การปิดกั้นลักษณะนี้มักกรองทราฟฟิกจากศูนย์ข้อมูลเป็นวงกว้าง เราจึงยืนยันนโยบายที่แท้จริงของเว็บไซต์จากภายนอกไม่ได้ และไม่สรุปว่า Googlebot ตัวจริงถูกปิดกั้นด้วยหรือไม่',
		en: 'Even with a full browser request profile — complete client hints, language and fetch-metadata headers — the server refuses with a firewall block page. Blocks shaped like this usually filter datacentre traffic broadly, so the site’s real policy cannot be verified from outside, and we draw no conclusion about whether the genuine Googlebot is refused too.'
	}),
	'origin-403': () => ({
		th: 'เซิร์ฟเวอร์ต้นทางปฏิเสธคำขอด้วยรหัส 403 แม้จะเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ การปฏิเสธเกิดที่ตัวเซิร์ฟเวอร์เอง ไม่ใช่ที่ระบบป้องกันด้านหน้า เราจึงอ่านนโยบายของเว็บไซต์จากภายนอกไม่ได้ และไม่สรุปแทนว่าเครื่องมือค้นหาเข้าถึงได้หรือไม่',
		en: 'The origin server itself answers 403 even to a full browser request profile — the refusal comes from the server rather than an edge protection layer. We therefore cannot read the site’s policy from outside, and make no claim either way about what search engines receive.'
	}),
	'ua-spoof-guard': () => ({
		th: 'เว็บไซต์นี้ตอบกลับตามปกติเมื่อเรียกด้วยโปรไฟล์คำขอแบบเบราว์เซอร์เต็มรูปแบบ แต่ปฏิเสธคำขอที่ประกาศตัวเองว่าเป็น Googlebot ซึ่งเป็นพฤติกรรมมาตรฐานของระบบป้องกันบอตปลอม เพราะใครก็ปลอมชื่อ Googlebot ได้ Googlebot ตัวจริงมาจากช่วงไอพีของ Google และยืนยันตัวตนด้วยการตรวจสอบ DNS ย้อนกลับ จึงน่าจะเข้าถึงเว็บไซต์นี้ได้ตามปกติ',
		en: 'This site responds normally to a full browser request profile but refuses requests that announce themselves as Googlebot — standard protection against forged crawlers, since anyone can claim that name. The genuine Googlebot comes from Google’s own IP ranges and verifies itself by reverse DNS, so it is likely to be served normally.'
	}),
	'redirect-loop': () => ({
		th: 'ทุกคำขอไปยังโดเมนนี้ถูกเปลี่ยนเส้นทางกลับมายังที่อยู่เดิมซ้ำไปเรื่อย ๆ จนเกินขีดจำกัดการเปลี่ยนเส้นทาง ทั้งเมื่อเรียกด้วยเบราว์เซอร์เต็มรูปแบบและเมื่อระบุตัวเป็น Googlebot ลักษณะนี้เกิดจากระบบที่บังคับให้มีเซสชันหรือคุกกี้ก่อนจึงจะแสดงเนื้อหา ผลคือแม้แต่ไฟล์ robots.txt ก็อ่านไม่ได้ และเครื่องมือค้นหาที่ไม่จำลองเบราว์เซอร์เต็มรูปแบบจะเก็บเนื้อหาหน้าใดไม่ได้เลย',
		en: 'Every request to this domain is redirected back to the same address, repeating past the redirect limit — with a full browser profile and with a Googlebot user-agent alike. The pattern is characteristic of a system requiring a session or cookie before serving content. Even robots.txt cannot be read, and any crawler that does not emulate a full browser captures no page content at all.'
	}),
	partial: (r) => ({
		th: `ไฟล์ robots.txt ปิดกั้นบางเส้นทางไว้ แต่ไม่ได้ปิดกั้นทั้งเว็บไซต์ หน้าเนื้อหาทั่วไปจึงยังถูกจัดทำดัชนีได้ ส่วนบริการที่ต้องเข้าสู่ระบบยังไม่ปรากฏในผลการค้นหาตามปกติของระบบที่ต้องยืนยันตัวตน${r.googlebotRule ? ' และไฟล์นี้มีกฎเฉพาะสำหรับบอตของ Google แยกจากกฎทั่วไป' : ''}`,
		en: `The robots.txt closes some paths but does not block the site as a whole, so ordinary content pages remain indexable. Services behind a sign-in still do not appear in search results, as is normal for authenticated systems.${r.googlebotRule ? ' The file also carries rules aimed specifically at Google’s crawlers.' : ''}`
	}),
	allowed: () => ({
		th: 'ไฟล์ robots.txt อนุญาตให้เครื่องมือค้นหาเก็บข้อมูลได้ทั้งเว็บไซต์ อย่างไรก็ตาม บริการที่ต้องเข้าสู่ระบบยังคงไม่ปรากฏในผลการค้นหา ซึ่งเป็นเรื่องปกติของระบบที่ต้องยืนยันตัวตน',
		en: 'The robots.txt permits crawling across the whole site. Services behind a sign-in still do not appear in search results, which is normal for authenticated systems.'
	}),
	'no-robots': () => ({
		th: 'เว็บไซต์นี้ไม่มีไฟล์ robots.txt ซึ่งตามมาตรฐานถือว่าอนุญาตให้เครื่องมือค้นหาเก็บข้อมูลได้ทั้งหมด แต่เนื้อหาที่อยู่หลังการเข้าสู่ระบบยังคงไม่ปรากฏในผลการค้นหาอยู่ดี',
		en: 'The site serves no robots.txt, which by convention means crawling is permitted throughout. Content behind a sign-in still never appears in search results.'
	}),
	'html-not-robots': () => ({
		th: 'คำขอไฟล์ robots.txt ได้รับการตอบกลับด้วยหน้าเว็บ HTML แทนที่จะเป็นไฟล์ข้อความตามมาตรฐาน เครื่องมือค้นหาจะตีความว่าไม่มีไฟล์ robots.txt และเก็บข้อมูลได้ตามปกติ',
		en: 'A request for robots.txt returns an HTML page rather than the expected text file. Crawlers treat that as no robots.txt at all and proceed to crawl normally.'
	}),
	unreachable: () => ({
		th: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์จากเครื่องที่ใช้ตรวจสอบได้ในช่วงเวลาที่ตรวจ จึงยังสรุปสถานะการเข้าถึงของเครื่องมือค้นหาไม่ได้',
		en: 'The audit host could not reach the server at the time of checking, so its crawl status remains unconfirmed.'
	})
};

function buildCrawlBlock(row) {
	const note = (NOTES[row.kind] ?? NOTES.unreachable)(row);
	const status = row.browserStatus ?? row.homeStatus ?? row.robotsStatus;
	const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
	return `\tcrawl: {
\t\thost: '${row.host}',
\t\tverdict: '${row.verdict}',
\t\tkind: '${row.kind}',
\t\tstatus: ${status ?? 'null'},
\t\tsnippet: '${row.snippet}',
\t\tcheckedAt: '${AUDIT_DATE}',
\t\tnote: {
\t\t\tth: '${esc(note.th)}',
\t\t\ten: '${esc(note.en)}'
\t\t}
\t},
`;
}

const files = fs.readdirSync(SERVICES_DIR).filter((f) => f.endsWith('.ts'));
let changed = 0;
const drift = [];

for (const file of files) {
	const p = path.join(SERVICES_DIR, file);
	const src = fs.readFileSync(p, 'utf8');
	const block = src.match(/\tcrawl: \{[\s\S]*?\n\t\},\n/);
	if (!block) {
		console.warn(`  ! ${file}: no crawl block found`);
		continue;
	}
	const host = block[0].match(/host: '([^']+)'/)?.[1];
	const row = rows.get(host);
	if (!row) {
		console.warn(`  ! ${file}: host ${host} is not in the audit — leaving as is`);
		continue;
	}

	const next = buildCrawlBlock(row);
	if (next === block[0]) continue;

	const before = block[0].match(/verdict: '([^']+)'/)?.[1];
	drift.push(`${file.replace('.ts', '')}: ${before} -> ${row.verdict} (${row.kind})`);
	changed++;
	if (!checkOnly) fs.writeFileSync(p, src.slice(0, block.index) + next + src.slice(block.index + block[0].length));
}

for (const d of drift) console.log('  ' + d);

if (checkOnly) {
	console.log(`\n${changed} file(s) out of sync with the audit.`);
	process.exit(changed ? 1 : 0);
}
console.log(`\nUpdated ${changed} of ${files.length} service files from the audit (${AUDIT_DATE}).`);
