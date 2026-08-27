#!/usr/bin/env node
/**
 * One command builds the whole site, so Cloudflare Pages needs no extra setup:
 *
 *   npm run build
 *
 * Steps: generate icons -> generate Open Graph images -> vite build -> verify.
 *
 * Branch behaviour (Cloudflare sets CF_PAGES_BRANCH automatically):
 *   main / master  -> a standalone "coming soon" page
 *   anything else  -> the full directory
 * Override locally with SITE_MODE=coming-soon | full.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadContent } from './lib/content-loader.mjs';
import { renderOg, STATUS_COLOR } from './lib/og.mjs';
import { generateIcons } from './lib/icons.mjs';
import { buildComingSoon } from './lib/coming-soon.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(ROOT);

const STATIC = path.join(ROOT, 'static');
const BUILD = path.join(ROOT, 'build');

const branch = process.env.CF_PAGES_BRANCH || '';
const mode =
	process.env.SITE_MODE ||
	(branch === 'main' || branch === 'master' ? 'coming-soon' : 'full');

const t0 = Date.now();
const step = (msg) => console.log(`\x1b[36m▸\x1b[0m ${msg}`);
const done = (msg) => console.log(`\x1b[32m✓\x1b[0m ${msg}`);

function run(cmd, args) {
	return new Promise((resolve, reject) => {
		const child = spawn(cmd, args, { stdio: 'inherit', shell: process.platform === 'win32' });
		child.on('exit', (code) =>
			code === 0 ? resolve() : reject(new Error(`${cmd} ${args.join(' ')} exited with ${code}`))
		);
		child.on('error', reject);
	});
}

const L = (v, locale = 'th') => (typeof v === 'string' ? v : (v?.[locale] ?? v?.th ?? v?.en ?? ''));

async function generateOgImages(content) {
	const ogDir = path.join(STATIC, 'og');
	fs.rmSync(ogDir, { recursive: true, force: true });
	fs.mkdirSync(ogDir, { recursive: true });

	const { SERVICES, GUIDES, CATEGORIES, AGENCIES, PAGES, AUDIT_COUNTS, AUDIT_TOTAL } = content;

	const agencyName = (slug) => {
		const a = AGENCIES.find((x) => x.slug === slug);
		return a ? `${L(a.name)} · ${L(a.abbr)}` : '';
	};

	const jobs = [
		{
			out: path.join(ogDir, 'default.png'),
			spec: {
				title: 'ค้นหาบริการภาครัฐไทย ที่ Google หาไม่เจอ',
				subtitle: 'สารบัญอิสระ · ลิงก์ตรงไปยังเว็บไซต์ทางการ'
			}
		},
		{
			out: path.join(ogDir, 'home.png'),
			spec: {
				title: 'บริการภาครัฐไทย ที่ Google หาไม่เจอ',
				subtitle: `${SERVICES.length} บริการ · ${AGENCIES.length} หน่วยงาน · ตรวจสอบแล้ว ${AUDIT_TOTAL} โดเมน`
			}
		},
		{
			out: path.join(ogDir, 'robots-report.png'),
			spec: {
				eyebrow: 'รายงานการตรวจสอบ',
				title: 'เว็บไซต์ภาครัฐไทยกี่แห่ง ที่ปิดกั้นเครื่องมือค้นหา',
				subtitle: `ตรวจสอบ ${AUDIT_TOTAL} โดเมน · พบปิดกั้นทั้งเว็บไซต์ ${AUDIT_COUNTS.blocked ?? 0} แห่ง`,
				badge: 'AUDIT',
				badgeColor: '#ff7b83'
			}
		}
	];

	for (const s of SERVICES) {
		jobs.push({
			out: path.join(ogDir, 'services', `${s.slug}.png`),
			spec: {
				eyebrow: agencyName(s.agency),
				title: L(s.shortName),
				subtitle: L(s.deck).slice(0, 110),
				badge:
					s.crawl.verdict === 'blocked'
						? 'BLOCKED'
						: s.crawl.verdict === 'waf-blocked'
							? 'HARD TO FIND'
							: null,
				badgeColor: STATUS_COLOR[s.crawl.verdict]
			}
		});
	}

	for (const g of GUIDES) {
		jobs.push({
			out: path.join(ogDir, 'guides', `${g.slug}.png`),
			spec: { eyebrow: 'คู่มือการใช้งาน', title: L(g.title), subtitle: L(g.deck).slice(0, 110) }
		});
	}

	for (const c of CATEGORIES) {
		jobs.push({
			out: path.join(ogDir, 'categories', `${c.slug}.png`),
			spec: { eyebrow: 'หมวดหมู่', title: L(c.name), subtitle: L(c.blurb).slice(0, 110) }
		});
	}

	for (const a of AGENCIES) {
		jobs.push({
			out: path.join(ogDir, 'agencies', `${a.slug}.png`),
			spec: { eyebrow: L(a.ministry) || 'หน่วยงานภาครัฐ', title: L(a.name), subtitle: L(a.blurb).slice(0, 110) }
		});
	}

	for (const key of Object.keys(PAGES)) {
		const p = PAGES[key];
		jobs.push({
			out: path.join(ogDir, 'pages', `${p.slug}.png`),
			spec: { title: L(p.title), subtitle: L(p.deck).slice(0, 110) }
		});
	}

	let bytes = 0;
	for (const job of jobs) bytes += await renderOg(job.spec, job.out);
	return { count: jobs.length, kb: Math.round(bytes / 1024) };
}

function verifyBuild(content) {
	const problems = [];
	const pages = [];

	const walk = (dir) => {
		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) walk(full);
			else if (entry.name.endsWith('.html')) pages.push(full);
		}
	};
	if (!fs.existsSync(BUILD)) return { problems: ['build/ was not created'], pages: 0 };
	walk(BUILD);

	for (const file of pages) {
		const html = fs.readFileSync(file, 'utf8');
		const rel = path.relative(BUILD, file);
		if (rel === '404.html') continue;
		if (rel === 'not-found.html' || rel.startsWith('not-found/')) continue;
		if (!/<title>[^<]{5,}<\/title>/.test(html)) problems.push(`${rel}: missing or empty <title>`);
		if (!/<meta name="description" content="[^"]{40,}"/.test(html))
			problems.push(`${rel}: missing or short meta description`);
		if (!/<link rel="canonical"/.test(html)) problems.push(`${rel}: missing canonical`);
		if (!/hreflang="th-TH"/.test(html)) problems.push(`${rel}: missing Thai hreflang`);
		if (!/application\/ld\+json/.test(html)) problems.push(`${rel}: missing JSON-LD`);
		if (!/<h1[\s>]/.test(html)) problems.push(`${rel}: missing <h1>`);
	}

	for (const required of ['robots.txt', 'sitemap.xml', 'search-index.json', 'favicon.svg', 'og/default.png']) {
		if (!fs.existsSync(path.join(BUILD, required))) problems.push(`missing ${required}`);
	}

	// Every service must have the OG image its <meta> tag points at.
	for (const s of content.SERVICES) {
		const og = path.join(BUILD, 'og', 'services', `${s.slug}.png`);
		if (!fs.existsSync(og)) problems.push(`missing OG image for service ${s.slug}`);
	}

	return { problems, pages: pages.length };
}

async function main() {
	console.log(`\nTHGov build — mode: \x1b[1m${mode}\x1b[0m${branch ? ` (branch: ${branch})` : ''}\n`);

	if (mode === 'coming-soon') {
		step('Generating icons');
		generateIcons(STATIC);
		done('icons');

		step('Building coming-soon page');
		const n = await buildComingSoon({ root: ROOT, staticDir: STATIC, buildDir: BUILD });
		done(`coming-soon page (${n} files)`);
		console.log(`\n\x1b[32mBuild complete\x1b[0m in ${((Date.now() - t0) / 1000).toFixed(1)}s → build/\n`);
		return;
	}

	step('Loading content registry');
	const content = await loadContent();
	done(
		`${content.SERVICES.length} services · ${content.GUIDES.length} guides · ${content.CATEGORIES.length} categories · ${content.AGENCIES.length} agencies`
	);

	step('Generating icons');
	const icons = generateIcons(STATIC);
	done(`${icons} icon files`);

	step('Rendering Open Graph images');
	const og = await generateOgImages(content);
	done(`${og.count} OG images (${og.kb} KB)`);

	step('Building SvelteKit site');
	await run('npx', ['vite', 'build']);

	step('Installing the static 404 page');
	const notFound = path.join(BUILD, 'not-found.html');
	if (fs.existsSync(notFound)) {
		// adapter-static writes an empty SPA shell to 404.html; replace it with a
		// prerendered page so an unknown URL shows content without waiting for JS.
		fs.copyFileSync(notFound, path.join(BUILD, '404.html'));
		fs.rmSync(notFound);
		fs.rmSync(path.join(BUILD, 'not-found'), { recursive: true, force: true });
		done('404.html');
	} else {
		console.warn('  ! not-found.html was not prerendered; 404.html left as the SPA shell');
	}

	step('Verifying output');
	const { problems, pages } = verifyBuild(content);
	if (problems.length) {
		console.error(`\n\x1b[31m✗ ${problems.length} problem(s):\x1b[0m`);
		for (const p of problems.slice(0, 40)) console.error(`  - ${p}`);
		if (problems.length > 40) console.error(`  … and ${problems.length - 40} more`);
		process.exit(1);
	}
	done(`${pages} pages, all with title, description, canonical, hreflang, JSON-LD and an h1`);

	console.log(`\n\x1b[32mBuild complete\x1b[0m in ${((Date.now() - t0) / 1000).toFixed(1)}s → build/\n`);
}

main().catch((err) => {
	console.error('\n\x1b[31mBuild failed:\x1b[0m', err.message);
	process.exit(1);
});
