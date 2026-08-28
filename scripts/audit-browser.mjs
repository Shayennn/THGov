#!/usr/bin/env node
/**
 * Second stage of the crawler-accessibility audit: re-probe with a real
 * browser engine the hosts the curl sweep could not settle.
 *
 *   node scripts/audit-browser.mjs example.go.th other.go.th   # ad-hoc probe
 *
 * scripts/audit.sh sends the headers a Chrome navigation sends, but it is still
 * curl: no TLS fingerprint of a browser, no JavaScript, no cookie jar, no HTTP/2
 * frame ordering. A large share of the sweep's "server refused our check" and
 * "could not verify" rows are that gap rather than a property of the site, so a
 * verdict must not rest on curl alone. Here we drive headless Chromium — the
 * engine Googlebot itself renders with — and let it:
 *
 *   1. Complete a JavaScript challenge, which curl can never do.
 *   2. Present a browser TLS/HTTP fingerprint to WAFs that fingerprint one.
 *   3. Name the exact network failure behind curl's silent exit code — a dead
 *      DNS name, a refused connection and an expired certificate all look
 *      identical to the sweep, and are entirely different findings.
 *   4. Read robots.txt through that same connection once it is in, which turns
 *      an unverifiable host into an authoritative robots.txt verdict.
 *
 * We retry deliberately, one narrowing step at a time, and report which step
 * succeeded — a site reachable only with certificate checks disabled, or only
 * over plain HTTP, is a finding in itself, not a probe to be quietly upgraded.
 */
import { chromium } from 'playwright';

const NAV_TIMEOUT = 45_000;
const CHALLENGE_POLLS = 10;
const CHALLENGE_INTERVAL = 2_000;
export const BROWSER_CONCURRENCY = 4;

/** Chromium reports failures as `net::ERR_*`; that name is the useful part. */
function netError(err) {
	const m = String(err?.message || err).match(/net::([A-Z_]+)/);
	if (m) return m[1];
	if (/Timeout .* exceeded/i.test(String(err?.message))) return 'ERR_TIMED_OUT';
	return String(err?.message || err).split('\n')[0].slice(0, 120);
}

const CERT_ERRORS =
	/^ERR_(CERT_|SSL_|BAD_SSL|TLS13|QUIC_PROTOCOL_ERROR|HTTP2_INADEQUATE_TRANSPORT_SECURITY)/;
const CONNECT_ERRORS =
	/^ERR_(CONNECTION_|ADDRESS_UNREACHABLE|NETWORK_CHANGED|TIMED_OUT|EMPTY_RESPONSE|SOCKET_NOT_CONNECTED)/;

/**
 * A block or challenge page can arrive with any status, so match on content.
 * `pollable` marks the interstitials that reload themselves once their script
 * has run — those deserve the wait, and are only a block if they never clear.
 */
function pageBarrier(status, title, body) {
	const head = `${title}\n${body.slice(0, 4000)}`;
	if (/just a moment|checking your browser|cf-browser-verification|challenge-platform/i.test(head))
		return { kind: 'js-challenge', detail: 'Cloudflare challenge page', pollable: true };
	if (/attention required/i.test(head))
		return { kind: 'waf-rule', detail: 'Cloudflare WAF block page' };
	if (/incapsula|_Incapsula_Resource|imperva/i.test(head))
		return status === 200
			? { kind: 'waf-rule', detail: 'Imperva / Incapsula block page', pollable: true }
			: { kind: 'waf-rule', detail: 'Imperva / Incapsula block page' };
	if (/request unsuccessful|block response|access denied|forbidden/i.test(title) && status !== 200)
		return { kind: 'waf-rule', detail: title.trim() || 'block page' };
	if (status === 403 || status === 401 || status === 429)
		return { kind: 'waf-rule', detail: `HTTP ${status}` };
	return null;
}

/**
 * One navigation, with the challenge given time to clear. Chromium keeps the
 * status of the first document response even after a challenge redirects on, so
 * we track every document response and read the last one.
 */
async function navigate(ctx, url) {
	const page = await ctx.newPage();
	const docs = [];
	page.on('response', (r) => {
		if (r.request().resourceType() === 'document' && r.frame() === page.mainFrame()) docs.push(r);
	});
	try {
		await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT });
		let status = docs.length ? docs[docs.length - 1].status() : null;
		let title = await page.title().catch(() => '');
		let body = await page.content().catch(() => '');

		// A self-reloading interstitial needs the time it asks for; give it that
		// before calling the site refused.
		for (let i = 0; i < CHALLENGE_POLLS; i++) {
			if (!pageBarrier(status, title, body)?.pollable) break;
			await page.waitForTimeout(CHALLENGE_INTERVAL);
			status = docs.length ? docs[docs.length - 1].status() : status;
			title = await page.title().catch(() => title);
			body = await page.content().catch(() => body);
		}
		return { page, status, title, body, url: page.url() };
	} catch (err) {
		await page.close().catch(() => {});
		return { error: netError(err) };
	}
}

/** Fetch robots.txt over the connection the page just proved works. */
async function robotsVia(page, origin) {
	try {
		const res = await page.goto(`${origin}/robots.txt`, {
			waitUntil: 'domcontentloaded',
			timeout: NAV_TIMEOUT
		});
		return { status: res?.status() ?? null, body: (await res?.text()) ?? '' };
	} catch (err) {
		// Servers that mark robots.txt as an attachment abort the navigation;
		// the context's request client shares its cookies and still gets it.
		try {
			const res = await page.context().request.get(`${origin}/robots.txt`, { timeout: NAV_TIMEOUT });
			return { status: res.status(), body: await res.text() };
		} catch {
			return { status: null, body: '', error: netError(err) };
		}
	}
}

/**
 * Probe one host, narrowing the connection requirements only as far as needed
 * and recording how far we had to go.
 *
 * Returns { host, outcome, status, title, robotsStatus, robotsBody, scheme,
 *           insecure, error, barrier, barrierDetail }, where outcome is one of:
 *   'served'        a real browser is served real content
 *   'barrier'       a real browser is refused or held at a challenge page
 *   'error'         the server answered, with a 5xx of its own
 *   'unreachable'   no connection at all, with `error` naming the failure
 */
async function probeHost(browser, host, ua) {
	const attempt = async ({ scheme, ignoreHTTPSErrors }) => {
		const ctx = await browser.newContext({
			userAgent: ua,
			locale: 'th-TH',
			timezoneId: 'Asia/Bangkok',
			viewport: { width: 1366, height: 900 },
			ignoreHTTPSErrors,
			acceptDownloads: false
		});
		try {
			const nav = await navigate(ctx, `${scheme}://${host}/`);
			if (nav.error) return { error: nav.error };
			const barrier = pageBarrier(nav.status, nav.title, nav.body);
			const out = {
				scheme,
				insecure: ignoreHTTPSErrors,
				status: nav.status,
				title: (nav.title || '').trim().slice(0, 80),
				barrier: barrier?.kind ?? null,
				barrierDetail: barrier?.detail ?? null
			};
			if (barrier) return out;
			const robots = await robotsVia(nav.page, `${scheme}://${host}`);
			return { ...out, robotsStatus: robots.status, robotsBody: robots.body.slice(0, 200_000) };
		} finally {
			await ctx.close().catch(() => {});
		}
	};

	// Plain HTTPS first. Only if the certificate itself is the obstacle do we
	// retry without verification, and only if HTTPS is unavailable at all do we
	// fall back to HTTP — each step is recorded rather than smoothed over.
	let r = await attempt({ scheme: 'https', ignoreHTTPSErrors: false });
	if (r.error && CERT_ERRORS.test(r.error)) {
		const certError = r.error;
		const insecure = await attempt({ scheme: 'https', ignoreHTTPSErrors: true });
		if (!insecure.error) return { host, outcome: outcomeOf(insecure), ...insecure, certError };
		r = insecure.error === certError ? r : insecure;
	}
	if (r.error && (CERT_ERRORS.test(r.error) || CONNECT_ERRORS.test(r.error))) {
		const httpsError = r.error;
		const plain = await attempt({ scheme: 'http', ignoreHTTPSErrors: true });
		if (!plain.error) return { host, outcome: outcomeOf(plain), ...plain, httpsError };
	}
	if (r.error) return { host, outcome: 'unreachable', error: r.error };
	return { host, outcome: outcomeOf(r), ...r };
}

const outcomeOf = (r) =>
	r.barrier ? 'barrier' : r.status >= 500 ? 'error' : 'served';

/**
 * Drive `hosts` through Chromium, `BROWSER_CONCURRENCY` at a time. One browser
 * process, one fresh context per attempt, so no host inherits another's cookies.
 */
export async function browserSweep(hosts, { onResult, concurrency = BROWSER_CONCURRENCY } = {}) {
	if (!hosts.length) return [];
	const browser = await chromium.launch({
		args: ['--disable-blink-features=AutomationControlled']
	});
	// Headless Chromium announces itself in the UA string; a site refusing that
	// would tell us nothing about how it treats the browsers people use.
	const probe = await browser.newContext();
	const rawUA = await probe.newPage().then((p) => p.evaluate(() => navigator.userAgent));
	await probe.close();
	const ua = rawUA.replace('HeadlessChrome', 'Chrome');

	const queue = [...hosts];
	const results = [];
	const worker = async () => {
		for (let host = queue.shift(); host; host = queue.shift()) {
			let r;
			try {
				r = await probeHost(browser, host, ua);
			} catch (err) {
				r = { host, outcome: 'unreachable', error: netError(err) };
			}
			results.push(r);
			onResult?.(r, results.length, hosts.length);
		}
	};
	try {
		await Promise.all(Array.from({ length: Math.min(concurrency, hosts.length) }, worker));
	} finally {
		await browser.close().catch(() => {});
	}
	return results;
}

if (import.meta.url === `file://${process.argv[1]}`) {
	const hosts = process.argv.slice(2).filter((a) => /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(a));
	if (!hosts.length) {
		console.error('usage: node scripts/audit-browser.mjs host [host…]');
		process.exit(1);
	}
	const rows = await browserSweep(hosts, {
		onResult: (r, i, n) =>
			console.error(
				`  [${i}/${n}] ${r.host.padEnd(34)} ${r.outcome}` +
					`${r.status ? ` ${r.status}` : ''}${r.barrier ? ` (${r.barrier})` : ''}` +
					`${r.error ? ` ${r.error}` : ''}${r.insecure ? ' [cert ignored]' : ''}` +
					`${r.scheme === 'http' ? ' [http]' : ''}`
			)
	});
	console.log(JSON.stringify(rows.map((r) => ({ ...r, robotsBody: undefined })), null, 2));
}
