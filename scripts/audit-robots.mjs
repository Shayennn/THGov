#!/usr/bin/env node
/**
 * Re-runs the crawler-accessibility audit behind /robots-report and rewrites
 * src/lib/content/audit.ts.
 *
 *   npm run audit:robots            # audit every domain in build-assets/domains.txt
 *   npm run audit:robots -- --limit 20
 *   npm run audit:robots -- example.go.th other.go.th
 *
 * Method, for each domain:
 *   1. GET /robots.txt  as Googlebot
 *   2. GET /            as Googlebot
 *   3. GET /            as a desktop browser
 *   4. If robots.txt answered with a redirect, follow up to five hops.
 *
 * Verdicts stay deliberately conservative. Only robots.txt content produces a
 * "blocked" verdict, because that file is public and identical for every
 * requester — anyone can reproduce it. A 403 to this machine proves only that
 * this machine was refused, so it never becomes a claim about Googlebot.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src/lib/content/audit.ts');
const DOMAIN_FILE = path.join(ROOT, 'build-assets/domains.txt');

const UA_BOT = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const UA_BROWSER =
	'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

const args = process.argv.slice(2);
const limitFlag = args.indexOf('--limit');
const limit = limitFlag >= 0 ? Number(args[limitFlag + 1]) : Infinity;
const explicit = args.filter((a) => /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(a));
const CONCURRENCY = 8;
const TIMEOUT_MS = 25_000;

function domains() {
	if (explicit.length) return explicit;
	const list = fs
		.readFileSync(DOMAIN_FILE, 'utf8')
		.split('\n')
		.map((l) => l.trim())
		.filter((l) => l && !l.startsWith('#') && /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(l));
	return [...new Set(list)].slice(0, limit);
}

async function req(url, ua, { follow = false } = {}) {
	const ctl = new AbortController();
	const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
	try {
		const res = await fetch(url, {
			headers: { 'user-agent': ua, accept: '*/*' },
			redirect: follow ? 'follow' : 'manual',
			signal: ctl.signal
		});
		const body = res.headers.get('content-type')?.includes('text') || follow ? await res.text() : '';
		return { status: res.status, body, finalUrl: res.url };
	} catch {
		return { status: null, body: '', finalUrl: '' };
	} finally {
		clearTimeout(timer);
	}
}

function parseGroups(txt) {
	const lines = txt.split(/\r?\n/).map((l) => l.replace(/#.*$/, '').trim()).filter(Boolean);
	const groups = [];
	let cur = null;
	let lastUA = false;
	for (const l of lines) {
		const m = l.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
		if (!m) continue;
		const k = m[1].toLowerCase();
		const v = m[2].trim();
		if (k === 'user-agent') {
			if (!lastUA || !cur) {
				cur = { agents: [], rules: [] };
				groups.push(cur);
			}
			cur.agents.push(v.toLowerCase());
			lastUA = true;
		} else {
			if (!cur) continue;
			cur.rules.push([k, v]);
			lastUA = false;
		}
	}
	return groups;
}

/** Google applies the most specific matching user-agent group, not the first. */
function groupFor(groups, ua) {
	const exact = groups.find((g) => g.agents.includes(ua));
	if (exact) return { g: exact, specific: true };
	const star = groups.find((g) => g.agents.includes('*'));
	return star ? { g: star, specific: false } : null;
}

function classifyRobots(txt, fallbackSnippet) {
	if (/<html|<!doctype/i.test(txt.slice(0, 400)))
		return { verdict: 'none', kind: 'html-not-robots', snippet: fallbackSnippet, googlebotRule: false };

	const snippet = txt.trim().split(/\r?\n/).slice(0, 10).join('\n').slice(0, 320);
	const match = groupFor(parseGroups(txt), 'googlebot');
	if (!match) return { verdict: 'allowed', kind: 'allowed', snippet, googlebotRule: false };

	const dis = match.g.rules.filter((r) => r[0] === 'disallow').map((r) => r[1]);
	const allow = match.g.rules.filter((r) => r[0] === 'allow').map((r) => r[1]);

	if (dis.includes('/') && !allow.includes('/')) {
		return allow.length
			? { verdict: 'partial', kind: 'partial', snippet, googlebotRule: match.specific }
			: { verdict: 'blocked', kind: 'robots-disallow-all', snippet, googlebotRule: match.specific };
	}
	if (dis.filter(Boolean).length)
		return { verdict: 'partial', kind: 'partial', snippet, googlebotRule: match.specific };
	return { verdict: 'allowed', kind: 'allowed', snippet, googlebotRule: match.specific };
}

async function auditOne(host) {
	const robots = await req(`https://${host}/robots.txt`, UA_BOT);
	const homeBot = await req(`https://${host}/`, UA_BOT);
	const homeBrowser = await req(`https://${host}/`, UA_BROWSER);

	const rc = robots.status;
	const hg = homeBot.status;
	const hb = homeBrowser.status;
	const base = { host, robotsStatus: rc, homeStatus: hg, browserStatus: hb, googlebotRule: false };

	if (rc === 403 || hg === 403) {
		const uaOnly = hg === 403 && hb !== null && hb !== 403;
		return {
			...base,
			verdict: uaOnly ? 'partial' : 'waf-blocked',
			kind: uaOnly ? 'ua-spoof-guard' : 'blanket-403',
			snippet:
				`User-Agent: Googlebot/2.1\n  GET /robots.txt  ->  ${rc ?? 'no response'}\n  GET /            ->  ${hg ?? 'no response'}\n` +
				`User-Agent: Chrome\n  GET /            ->  ${hb ?? 'no response'}`
		};
	}
	if (rc === 404)
		return { ...base, verdict: 'none', kind: 'no-robots', snippet: 'GET /robots.txt  ->  HTTP 404 Not Found' };

	if (rc === 200) return { ...base, ...classifyRobots(robots.body, 'GET /robots.txt  ->  200, but an HTML page was served') };

	if (rc !== null && rc >= 300 && rc < 400) {
		const followed = await req(`https://${host}/robots.txt`, UA_BOT, { follow: true });
		if (followed.status === null || (followed.status >= 300 && followed.status < 400))
			return {
				...base,
				verdict: 'waf-blocked',
				kind: 'redirect-loop',
				snippet: `GET /robots.txt  ->  HTTP ${rc}, still redirecting after 5 hops`
			};
		if (followed.status === 404)
			return {
				...base,
				verdict: 'none',
				kind: 'no-robots',
				snippet: `GET /robots.txt  ->  HTTP ${rc} -> ${followed.finalUrl} -> 404`
			};
		if (followed.status === 200)
			return {
				...base,
				...classifyRobots(
					followed.body,
					`GET /robots.txt  ->  HTTP ${rc} -> ${followed.finalUrl}\n(served an HTML page, not a robots.txt)`
				)
			};
	}

	if (rc !== null && rc >= 500)
		return { ...base, verdict: 'unknown', kind: 'unreachable', snippet: `GET /robots.txt  ->  HTTP ${rc}` };

	return { ...base, verdict: 'unknown', kind: 'unreachable', snippet: 'No response from the audit host' };
}

async function pool(items, worker, size) {
	const out = new Array(items.length);
	let i = 0;
	await Promise.all(
		Array.from({ length: Math.min(size, items.length) }, async () => {
			while (i < items.length) {
				const idx = i++;
				out[idx] = await worker(items[idx], idx);
			}
		})
	);
	return out;
}

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');

async function main() {
	const hosts = domains();
	const date = new Date(Date.now()).toISOString().slice(0, 10);
	console.log(`Auditing ${hosts.length} domains at concurrency ${CONCURRENCY}…\n`);

	let done = 0;
	const rows = await pool(
		hosts,
		async (host) => {
			const row = await auditOne(host);
			done++;
			if (done % 10 === 0 || done === hosts.length) process.stdout.write(`  ${done}/${hosts.length}\r`);
			return row;
		},
		CONCURRENCY
	);

	const order = { blocked: 0, 'waf-blocked': 1, partial: 2, none: 3, allowed: 4, unknown: 5 };
	rows.sort((a, b) => order[a.verdict] - order[b.verdict] || a.host.localeCompare(b.host));

	const counts = {};
	const kinds = {};
	for (const r of rows) {
		counts[r.verdict] = (counts[r.verdict] || 0) + 1;
		kinds[r.kind] = (kinds[r.kind] || 0) + 1;
	}

	if (explicit.length) {
		console.log('\n');
		for (const r of rows) console.log(`  ${r.verdict.padEnd(13)} ${r.host}  (${r.kind})`);
		console.log('\nDry run for explicit domains — audit.ts was not rewritten.');
		return;
	}

	const body = rows
		.map(
			(r) =>
				`\t{ host: '${r.host}', verdict: '${r.verdict}', kind: '${r.kind}', robotsStatus: ${r.robotsStatus ?? 'null'}, homeStatus: ${r.homeStatus ?? 'null'}, browserStatus: ${r.browserStatus ?? 'null'}, googlebotRule: ${Boolean(r.googlebotRule)}, snippet: '${esc(r.snippet)}' }`
		)
		.join(',\n');

	const existing = fs.readFileSync(OUT, 'utf8');
	const header = existing.slice(0, existing.indexOf('export const AUDIT_DATE'));

	fs.writeFileSync(
		OUT,
		`${header}export const AUDIT_DATE = '${date}';
export const AUDIT_ROWS: AuditRow[] = [
${body}
];

export const AUDIT_COUNTS: Record<string, number> = ${JSON.stringify(counts)};
export const AUDIT_KINDS: Record<string, number> = ${JSON.stringify(kinds)};
export const AUDIT_TOTAL = ${rows.length};

export function auditByVerdict(verdict: CrawlVerdict): AuditRow[] {
	return AUDIT_ROWS.filter((r) => r.verdict === verdict);
}
export function auditByKind(kind: AuditKind): AuditRow[] {
	return AUDIT_ROWS.filter((r) => r.kind === kind);
}
export function auditFor(host: string): AuditRow | undefined {
	return AUDIT_ROWS.find((r) => r.host === host);
}
`
	);

	console.log(`\n\nWrote ${OUT}`);
	console.log('counts', counts);
	console.log('\nBlocked by their own robots.txt:');
	rows.filter((r) => r.verdict === 'blocked').forEach((r) => console.log('  ', r.host));
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
