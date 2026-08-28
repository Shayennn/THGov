#!/usr/bin/env node
/**
 * Re-runs the crawler-accessibility audit behind /robots-report and rewrites
 * src/lib/content/audit.ts.
 *
 *   npm run audit:robots            # audit every domain in build-assets/domains.txt
 *   npm run audit:robots -- --limit 20
 *   npm run audit:robots -- example.go.th other.go.th
 *
 * The network sweep is a plain bash + curl script (scripts/audit.sh) so a few
 * hundred domains finish quickly; this file classifies its TSV output and
 * regenerates the TypeScript dataset. For each domain audit.sh does:
 *   1. GET /robots.txt with a full desktop-Chrome request profile, following up
 *      to five redirects. robots.txt is user-agent independent, so we fetch it
 *      however we can and then apply Google's own matching rules to the file.
 *   2. GET / with the same Chrome profile.
 *   3. GET / with Googlebot's user-agent.
 *
 * curl cannot settle every host: it does not run JavaScript, does not present a
 * browser's TLS fingerprint, and reports a dead domain, a refused connection and
 * an expired certificate with the same silent failure. Every host the sweep
 * leaves refused or unresolved therefore goes through a second stage in
 * scripts/audit-browser.mjs, which drives headless Chromium — the engine
 * Googlebot renders with — and, where it gets in, reads robots.txt over that
 * same connection. A verdict never rests on curl alone.
 *
 * Sending only a Chrome User-Agent string is not enough: WAFs fingerprint the
 * whole request, so a bare curl still reads as a bot. We send the client hints,
 * fetch-metadata and Accept headers a real browser sends, then classify by the
 * *type* of refusal, because these are not equivalent:
 *
 *   - A Cloudflare managed challenge ("cf-mitigated: challenge") is passed by
 *     real browsers and by verified search-engine crawlers, which Cloudflare
 *     allowlists. It blocks non-JS clients: archivers, monitors, AI assistants.
 *   - A hard WAF rule or an origin 403 refuses everything not on an allowlist,
 *     and may well refuse Googlebot too.
 *
 * Only robots.txt content produces a "blocked" verdict, because that file is
 * public and identical for every requester — anyone can reproduce it. A refusal
 * aimed at this machine is reported as exactly that, never as a claim about
 * what the genuine Googlebot receives.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { browserSweep } from './audit-browser.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src/lib/content/audit.ts');
const DOMAIN_FILE = path.join(ROOT, 'build-assets/domains.txt');

const args = process.argv.slice(2);
const limitFlag = args.indexOf('--limit');
const limit = limitFlag >= 0 ? Number(args[limitFlag + 1]) : Infinity;
const explicit = args.filter((a) => /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(a));
const skipBrowser = args.includes('--no-browser');
const CONCURRENCY = 12;
const TIMEOUT_MS = 30_000;

function domains() {
	if (explicit.length) return explicit;
	const list = fs
		.readFileSync(DOMAIN_FILE, 'utf8')
		.split('\n')
		.map((l) => l.trim())
		.filter((l) => l && !l.startsWith('#') && /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(l));
	return [...new Set(list)].slice(0, limit);
}

/**
 * Name the mechanism doing the refusing. The distinction is the whole point: a
 * JavaScript challenge and a hard block have very different consequences for
 * whether a search engine can see the site.
 */
function describeRefusal(row) {
	const title = row.title || '';
	const server = (row.server || '').toLowerCase();

	if ((row.mitigated || '').toLowerCase().includes('challenge') || /just a moment/i.test(title))
		return { kind: 'js-challenge', detail: 'Cloudflare managed challenge (JavaScript interstitial)' };
	if (/attention required/i.test(title))
		return { kind: 'waf-rule', detail: 'Cloudflare WAF rule (hard block)' };
	if (/block response/i.test(title))
		return { kind: 'waf-rule', detail: 'F5 BIG-IP ASM block page' };
	if (/incapsula|imperva/i.test(title))
		return { kind: 'waf-rule', detail: 'Imperva / Incapsula block' };
	if (server.includes('cloudflare'))
		return { kind: 'waf-rule', detail: 'Cloudflare edge refusal' };
	return {
		kind: 'origin-403',
		detail: row.server ? `origin refused (server: ${row.server})` : 'origin refused the request'
	};
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

/** Some WAFs answer 200 with an HTML interstitial rather than an error status. */
function interstitial(txt) {
	if (/incapsula|_Incapsula_Resource|imperva/i.test(txt.slice(0, 2000)))
		return 'Imperva / Incapsula interstitial served with a 200 status';
	if (/just a moment|cf-browser-verification|challenge-platform/i.test(txt.slice(0, 4000)))
		return 'Cloudflare challenge interstitial served with a 200 status';
	if (/attention required/i.test(txt.slice(0, 2000)))
		return 'Cloudflare WAF block page served with a 200 status';
	return null;
}

function classifyRobots(txt, fallbackSnippet) {
	const inter = interstitial(txt);
	if (inter)
		return {
			verdict: 'waf-blocked',
			kind: 'waf-rule',
			snippet: `GET /robots.txt  ->  200, but the body is a block page\n(${inter})`,
			googlebotRule: false
		};

	if (/<html|<!doctype/i.test(txt.slice(0, 400)))
		return { verdict: 'none', kind: 'html-not-robots', snippet: fallbackSnippet, googlebotRule: false };

	const snippet = txt.trim().split(/\r?\n/).slice(0, 10).join('\n').slice(0, 320);
	const groups = parseGroups(txt);
	const match = groupFor(groups, 'googlebot');
	if (!match) return { verdict: 'allowed', kind: 'allowed', snippet, googlebotRule: false };

	const dis = match.g.rules.filter((r) => r[0] === 'disallow').map((r) => r[1]);
	const allow = match.g.rules.filter((r) => r[0] === 'allow').map((r) => r[1]);

	// Does the catch-all group shut everything else out?
	const star = groups.find((g) => g.agents.includes('*'));
	const starBlocksAll =
		Boolean(star) &&
		star.rules.filter((r) => r[0] === 'disallow').map((r) => r[1]).includes('/') &&
		!star.rules.filter((r) => r[0] === 'allow').map((r) => r[1]).includes('/');

	if (dis.includes('/') && !allow.includes('/'))
		return allow.length
			? { verdict: 'partial', kind: 'partial', snippet, googlebotRule: match.specific }
			: { verdict: 'blocked', kind: 'robots-disallow-all', snippet, googlebotRule: match.specific };

	if (dis.filter(Boolean).length)
		return { verdict: 'partial', kind: 'partial', snippet, googlebotRule: match.specific };

	// Googlebot is explicitly exempted from a site-wide block: Google may crawl,
	// but every other engine, archiver and AI assistant is refused. That is a
	// materially different situation from an open site, so do not call it open.
	if (match.specific && starBlocksAll)
		return { verdict: 'partial', kind: 'googlebot-exception', snippet, googlebotRule: true };

	return { verdict: 'allowed', kind: 'allowed', snippet, googlebotRule: match.specific };
}

/**
 * Verdict from a robots.txt fetch, whichever stage obtained it. Only reached
 * with a status the caller has already decided is a real answer about the file.
 */
function robotsVerdict(status, body) {
	if (status === 404)
		return {
			verdict: 'none',
			kind: 'no-robots',
			snippet: 'GET /robots.txt  ->  HTTP 404 Not Found',
			googlebotRule: false
		};
	if (status === 200 && (body || '').trim())
		return classifyRobots(
			body,
			'GET /robots.txt  ->  200, but an HTML page was served instead of a robots.txt'
		);
	return {
		verdict: 'none',
		kind: 'no-robots',
		snippet: `GET /robots.txt  ->  ${status ?? 'no response'}`,
		googlebotRule: false
	};
}

/** Classify one TSV row emitted by scripts/audit.sh. */
function auditOne(row) {
	const { host, robotsStatus: rc, browserStatus: hb, homeStatus: hg } = row;
	const base = {
		host,
		robotsStatus: rc === 'LOOP' ? null : rc,
		homeStatus: hg === 'LOOP' ? null : hg,
		browserStatus: hb === 'LOOP' ? null : hb,
		chromeStatus: null,
		googlebotRule: false
	};
	const refused = (code) => code === 403 || code === 401 || code === 429;

	// A request that never stops redirecting is a finding, not a failed probe:
	// no crawler can reach content behind an unresolvable redirect chain.
	if (hb === 'LOOP' || rc === 'LOOP' || hg === 'LOOP')
		return {
			...base,
			verdict: 'waf-blocked',
			kind: 'redirect-loop',
			snippet:
				`Full desktop-Chrome request profile\n  GET /            ->  redirects to itself, still looping after 5 hops\n` +
				`  GET /robots.txt  ->  ${rc === 'LOOP' ? 'same loop' : (rc ?? 'no response')}\n` +
				`Typically a cookie or session challenge that a crawler cannot complete.`
		};

	// A full browser profile being refused is the strongest signal available.
	if (refused(hb)) {
		const r = describeRefusal(row);
		return {
			...base,
			// A JavaScript challenge is passed by real browsers and by verified
			// crawlers, so it is a barrier to everything else — not a site block.
			verdict: r.kind === 'js-challenge' ? 'partial' : 'waf-blocked',
			kind: r.kind,
			snippet:
				`Full desktop-Chrome request profile\n  GET /  ->  ${hb}  (${r.detail})\n` +
				`Googlebot user-agent\n  GET /  ->  ${hg ?? 'no response'}\n` +
				`GET /robots.txt  ->  ${rc ?? 'no response'}`
		};
	}

	// The browser got through but a self-declared Googlebot did not: ordinary
	// anti-spoofing, since the real Googlebot proves itself by reverse DNS.
	if (refused(hg) && hb !== null)
		return {
			...base,
			verdict: 'partial',
			kind: 'ua-spoof-guard',
			snippet:
				`Full desktop-Chrome request profile\n  GET /  ->  ${hb}  (served normally)\n` +
				`Googlebot user-agent\n  GET /  ->  ${hg}  (refused)`
		};

	if (rc === 404 || (rc === 200 && row.robotsBody.trim()))
		return { ...base, ...robotsVerdict(rc, row.robotsBody) };

	if (rc !== null && rc >= 300 && rc < 400)
		return {
			...base,
			verdict: 'waf-blocked',
			kind: 'redirect-loop',
			snippet: `GET /robots.txt  ->  HTTP ${rc}, still redirecting after 5 hops`
		};

	if (hb !== null && hb >= 200 && hb < 400)
		return {
			...base,
			verdict: 'none',
			kind: 'no-robots',
			snippet: `GET /  ->  ${hb} (site reachable)\nGET /robots.txt  ->  ${rc ?? 'no response'}`
		};

	if (rc !== null && rc >= 500)
		return { ...base, verdict: 'unknown', kind: 'unreachable', snippet: `GET /robots.txt  ->  HTTP ${rc}` };

	return { ...base, verdict: 'unknown', kind: 'unreachable', snippet: 'No response from the audit host' };
}

/** Kinds where the sweep was refused outright, rather than left unanswered. */
const REFUSAL_KINDS = new Set(['waf-rule', 'origin-403', 'js-challenge', 'redirect-loop']);

/** Kinds where curl never got a usable answer, so Chromium gets a turn. */
const NEEDS_BROWSER = new Set([
	'waf-rule',
	'origin-403',
	'js-challenge',
	'redirect-loop',
	'unreachable'
]);

/** Name the network-level failure curl could only report as "no response". */
function failureKind(err) {
	if (err === 'ERR_NAME_NOT_RESOLVED') return 'dns-failure';
	if (/^ERR_(CERT_|SSL|BAD_SSL)/.test(err)) return 'tls-invalid';
	if (/^ERR_(CONNECTION_|ADDRESS_UNREACHABLE|TIMED_OUT|EMPTY_RESPONSE)/.test(err))
		return 'connection-failed';
	return 'unreachable';
}

/**
 * Fold a Chromium probe into the curl verdict for the same host.
 *
 * robots.txt still decides the verdict wherever the browser could read it — the
 * file is public and reproducible, and that does not change with the client
 * that fetched it. What the browser adds is everything curl could not settle:
 * whether a refusal survives a real browser engine, and, when it does not,
 * that the site is serving browsers while shutting out every other agent.
 */
function reclassify(row, b) {
	const chrome = (lines) => `${row.snippet}\n\nHeadless Chromium (real browser engine)\n${lines}`;

	// The server is up and answering with its own failure — worth saying plainly,
	// and not something to read a crawling policy out of.
	if (b.outcome === 'error')
		return {
			...row,
			chromeStatus: b.status,
			verdict: 'unknown',
			kind: 'server-error',
			snippet: chrome(
				`  GET /  ->  ${b.status}  (the server's own error page` +
					`${b.scheme === 'http' ? ', over plain http:// — no working HTTPS' : ''}` +
					`${b.insecure ? ', past a certificate that does not validate' : ''})`
			)
		};

	if (b.outcome === 'unreachable')
		return {
			...row,
			verdict: 'unknown',
			kind: failureKind(b.error),
			snippet: chrome(`  GET /  ->  no connection (${b.error})`)
		};

	// Refused a real browser too: the sweep's reading holds, with better evidence.
	if (b.outcome === 'barrier') {
		const kind =
			b.barrier === 'js-challenge'
				? 'js-challenge'
				: row.kind === 'origin-403'
					? 'origin-403'
					: 'waf-rule';
		return {
			...row,
			chromeStatus: b.status,
			// Cloudflare exempts the crawlers it has verified, so a challenge our
			// browser could not clear still is not evidence that Google is refused.
			verdict: kind === 'js-challenge' ? 'partial' : 'waf-blocked',
			kind,
			snippet: chrome(
				`  GET /  ->  ${b.status ?? 'no status'}  (${
					kind === 'js-challenge'
						? `still held at the ${b.barrierDetail} after 20s`
						: `refused: ${b.barrierDetail}`
				})`
			)
		};
	}

	// The browser is served. robots.txt read over that same connection decides.
	const rob = robotsVerdict(b.robotsStatus, b.robotsBody || '');
	let { verdict, kind } = rob;
	const openRobots = verdict === 'allowed' || verdict === 'none';

	/**
	 * With robots.txt open, the mechanism worth naming is how the site treats
	 * clients that are not a browser. Each of these keeps people's ordinary
	 * browsers working while archivers, monitors and AI assistants are refused,
	 * so none of them is an open site.
	 */
	if (openRobots) {
		if (row.kind === 'js-challenge') {
			kind = 'js-challenge';
			verdict = 'partial';
		} else if (b.scheme === 'http') {
			kind = 'http-only';
		} else if (b.insecure) {
			kind = 'tls-invalid';
			verdict = 'partial';
		} else if (REFUSAL_KINDS.has(row.kind)) {
			// Only where the sweep was actually refused. A host that merely failed
			// to answer curl may have been slow rather than selective, and that is
			// not something to call a policy.
			kind = 'browser-only';
			verdict = 'partial';
		}
	} else if (b.insecure && verdict !== 'blocked') {
		verdict = 'partial';
	}

	const transport = b.scheme === 'http'
		? `  (no working HTTPS: ${b.httpsError}; served over plain http://)\n`
		: b.insecure
			? `  (certificate rejected: ${b.certError}; retried with verification off)\n`
			: '';

	// classifyRobots falls back to a bare status line, which the line above
	// already carries; only append what actually adds something.
	const robotsDetail = rob.snippet.startsWith('GET /robots.txt') ? '' : `\n\n${rob.snippet}`;

	return {
		...row,
		chromeStatus: b.status,
		verdict,
		kind,
		googlebotRule: rob.googlebotRule,
		snippet: chrome(
			`  GET /  ->  ${b.status}  (served normally)\n${transport}` +
				`  GET /robots.txt  ->  ${b.robotsStatus ?? 'no response'}${robotsDetail}`
		)
	};
}

/** Run the bash sweep and parse its TSV into rows. */
function sweep(hosts) {
	const script = path.join(ROOT, 'scripts/audit.sh');
	const args = hosts ? ['--hosts', ...hosts] : [DOMAIN_FILE, String(CONCURRENCY)];
	// Invoked through bash rather than directly, so the sweep runs from a fresh
	// checkout whether or not the executable bit survived.
	const out = execFileSync('bash', [script, ...args], {
		encoding: 'utf8',
		maxBuffer: 64 * 1024 * 1024,
		stdio: ['ignore', 'pipe', 'inherit']
	});

	// 'LOOP' marks curl exit 47 (redirect limit exceeded).
	const num = (v) => (v === 'LOOP' ? 'LOOP' : v === '000' || v === '' ? null : Number(v));
	return out
		.split('\n')
		.filter((l) => l && !l.startsWith('#'))
		.map((line) => {
			const [host, rc, bc, gc, server, mitigated, robotsFile, title] = line.split('\t');
			let robotsBody = '';
			try {
				robotsBody = fs.readFileSync(robotsFile, 'utf8').slice(0, 200_000);
			} catch {
				/* the sweep may not have written a body */
			}
			return {
				host,
				robotsStatus: num(rc),
				browserStatus: num(bc),
				homeStatus: num(gc),
				server: server || '',
				mitigated: mitigated || '',
				title: title || '',
				robotsBody
			};
		})
		.filter((r) => r.host);
}

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');

const HEADER = `import type { CrawlVerdict } from './types';

/**
 * GENERATED FILE — do not edit by hand. Regenerate with \`npm run audit:robots\`.
 *
 * A sweep of Thai government and state-enterprise domains from a single audit
 * host. For each domain we request /robots.txt and / with a full desktop-Chrome
 * request profile — the client hints, fetch-metadata and Accept headers a real
 * browser sends, not merely a Chrome user-agent string, because WAFs fingerprint
 * the whole request — and then / again with Googlebot's user-agent.
 *
 * Any host that leaves refused or unreachable is then re-probed with headless
 * Chromium, which runs the challenge JavaScript, presents a browser's TLS
 * fingerprint, and names the exact network failure. Where it gets in, robots.txt
 * is read over that same connection, so the verdict rests on the file rather
 * than on what curl was allowed to see. \`chromeStatus\` records that stage.
 *
 * Verdicts are deliberately conservative:
 *   'blocked'     robots.txt itself disallows everything for Googlebot. This is
 *                 authoritative: the file is public and identical for everyone.
 *   'waf-blocked' both a full browser request profile and headless Chromium were
 *                 refused outright. NOT proof that the genuine Googlebot is too.
 *   'partial'     some paths disallowed; or a Cloudflare JavaScript challenge,
 *                 which real browsers and verified crawlers pass while archivers
 *                 and AI assistants do not; or a 403 shown only to a
 *                 self-declared Googlebot while a browser is served normally; or
 *                 a site that answers a real browser and nothing else.
 *   'unknown'     no connection at all, with the failure named by \`kind\`.
 */
export type AuditKind =
	| 'robots-disallow-all'
	| 'googlebot-exception'
	| 'js-challenge'
	| 'waf-rule'
	| 'origin-403'
	| 'ua-spoof-guard'
	| 'redirect-loop'
	| 'browser-only'
	| 'tls-invalid'
	| 'http-only'
	| 'no-robots'
	| 'html-not-robots'
	| 'dns-failure'
	| 'connection-failed'
	| 'server-error'
	| 'unreachable'
	| 'partial'
	| 'allowed';

export interface AuditRow {
	host: string;
	verdict: CrawlVerdict;
	kind: AuditKind;
	/** HTTP status for /robots.txt with a browser profile, redirects followed. */
	robotsStatus: number | null;
	/** HTTP status for / with Googlebot's user-agent. */
	homeStatus: number | null;
	/** HTTP status for / with a full desktop-Chrome request profile. */
	browserStatus: number | null;
	/** HTTP status headless Chromium got for /, or null if that stage was not needed. */
	chromeStatus: number | null;
	/** True when robots.txt carries a Googlebot-specific group overriding \`*\`. */
	googlebotRule: boolean;
	snippet: string;
}
`;

async function main() {
	const hosts = domains();
	const date = new Date(Date.now()).toISOString().slice(0, 10);
	console.log(`Sweeping ${hosts.length} domains with scripts/audit.sh…\n`);

	const rows = sweep(explicit.length ? hosts : null).map(auditOne);

	// Second stage: whatever curl could not settle goes to a real browser.
	const pending = rows.filter((r) => NEEDS_BROWSER.has(r.kind));
	if (pending.length && !skipBrowser) {
		console.log(`\nRe-checking ${pending.length} unsettled host(s) with headless Chromium…`);
		const byHost = new Map();
		for (const b of await browserSweep(pending.map((r) => r.host), {
			onResult: (b, i, n) =>
				console.log(
					`  [${String(i).padStart(3)}/${n}] ${b.host.padEnd(34)} ${b.outcome}` +
						`${b.status ? ` ${b.status}` : ''}${b.barrier ? ` (${b.barrier})` : ''}` +
						`${b.error ? ` ${b.error}` : ''}${b.insecure ? ' [cert ignored]' : ''}` +
						`${b.scheme === 'http' ? ' [http]' : ''}`
				)
		}))
			byHost.set(b.host, b);

		for (let i = 0; i < rows.length; i++) {
			const b = byHost.get(rows[i].host);
			if (b) rows[i] = reclassify(rows[i], b);
		}
	}

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
		for (const r of rows)
			console.log(
				`  ${r.verdict.padEnd(13)} ${r.kind.padEnd(20)} ${r.host}\n${r.snippet.replace(/^/gm, '      ')}\n`
			);
		console.log('\nDry run for explicit domains — audit.ts was not rewritten.');
		return;
	}

	const body = rows
		.map(
			(r) =>
				`\t{ host: '${r.host}', verdict: '${r.verdict}', kind: '${r.kind}', robotsStatus: ${r.robotsStatus ?? 'null'}, homeStatus: ${r.homeStatus ?? 'null'}, browserStatus: ${r.browserStatus ?? 'null'}, chromeStatus: ${r.chromeStatus ?? 'null'}, googlebotRule: ${Boolean(r.googlebotRule)}, snippet: '${esc(r.snippet)}' }`
		)
		.join(',\n');

	fs.writeFileSync(
		OUT,
		`${HEADER}
export const AUDIT_DATE = '${date}';
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
	console.log('verdicts', counts);
	console.log('kinds   ', kinds);
	console.log('\nBlocked by their own robots.txt:');
	rows.filter((r) => r.verdict === 'blocked').forEach((r) => console.log('  ', r.host));
	console.log('\nBehind a JavaScript challenge (browsers pass, other bots do not):');
	rows.filter((r) => r.kind === 'js-challenge').forEach((r) => console.log('  ', r.host));
	console.log('\nGooglebot explicitly exempted from a site-wide block:');
	rows.filter((r) => r.kind === 'googlebot-exception').forEach((r) => console.log('  ', r.host));
	console.log('\nHard-refused a full browser profile and headless Chromium alike:');
	rows.filter((r) => r.verdict === 'waf-blocked').forEach((r) => console.log('  ', r.host, `(${r.kind})`));
	console.log('\nServe a real browser but refuse every other client:');
	rows.filter((r) => r.kind === 'browser-only').forEach((r) => console.log('  ', r.host));
	console.log('\nReachable only past a certificate error, or only over plain HTTP:');
	rows
		.filter((r) => r.kind === 'tls-invalid' || r.kind === 'http-only')
		.forEach((r) => console.log('  ', r.host, `(${r.kind})`));
	console.log('\nNo connection at all, by failure:');
	rows
		.filter((r) => ['dns-failure', 'connection-failed', 'unreachable'].includes(r.kind))
		.forEach((r) => console.log('  ', r.host, `(${r.kind})`));
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
