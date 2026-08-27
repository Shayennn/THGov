import fs from 'node:fs';
import path from 'node:path';
import { renderOg } from './og.mjs';
import { markSvg } from './mark.mjs';

const SITE_URL = (process.env.PUBLIC_SITE_URL || 'https://www.thgov.co').replace(/\/+$/, '');

const PAGE = `<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>THGov — สารบัญบริการภาครัฐไทย | เร็ว ๆ นี้</title>
<meta name="description" content="THGov กำลังจะเปิดให้บริการ — สารบัญอิสระที่รวบรวมบริการออนไลน์ของหน่วยงานรัฐไทย พร้อมคำอธิบายภาษาไทยและลิงก์ตรงไปยังเว็บไซต์ทางการ">
<link rel="canonical" href="__SITE__/">
<link rel="alternate" hreflang="th-TH" href="__SITE__/">
<link rel="alternate" hreflang="en" href="__SITE__/">
<link rel="alternate" hreflang="x-default" href="__SITE__/">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="alternate icon" href="/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<meta name="theme-color" content="#0b0820">
<meta name="robots" content="index, follow">
<meta property="og:type" content="website">
<meta property="og:site_name" content="THGov">
<meta property="og:title" content="THGov — สารบัญบริการภาครัฐไทย">
<meta property="og:description" content="ค้นหาบริการออนไลน์ของหน่วยงานรัฐไทย แล้วไปยังเว็บไซต์ทางการโดยตรง — เปิดให้บริการเร็ว ๆ นี้">
<meta property="og:url" content="__SITE__/">
<meta property="og:image" content="__SITE__/og/coming-soon.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="th_TH">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="THGov — สารบัญบริการภาครัฐไทย">
<meta name="twitter:description" content="ค้นหาบริการออนไลน์ของหน่วยงานรัฐไทย แล้วไปยังเว็บไซต์ทางการโดยตรง">
<meta name="twitter:image" content="__SITE__/og/coming-soon.png">
<link rel="preload" href="/fonts/prompt-thai-600.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/fonts/prompt.css">
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebSite","name":"THGov — สารบัญบริการภาครัฐไทย","alternateName":"THGov","url":"__SITE__/","inLanguage":["th-TH","en"],"description":"สารบัญอิสระที่รวบรวมบริการออนไลน์ของหน่วยงานราชการไทยไว้ในที่เดียว พร้อมลิงก์ตรงไปยังเว็บไซต์ทางการ","publisher":{"@type":"Organization","name":"THGov","url":"__SITE__/"}}
</script>
<style>
*,*::before,*::after{box-sizing:border-box}
*{margin:0}
:root{
--brand:#f05223;--brand2:#ee9b20;--ink:#0b0820;--text:#f6f5ff;--muted:#a6a3c4;--line:#262246;
--font:'Prompt',-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans Thai',sans-serif;
color-scheme:dark;
}
html{-webkit-text-size-adjust:100%}
body{
min-height:100svh;display:flex;flex-direction:column;font-family:var(--font);
background:var(--ink);color:var(--text);line-height:1.75;-webkit-font-smoothing:antialiased;
overflow-x:hidden;position:relative;
}
.mesh{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden}
.mesh span{position:absolute;border-radius:50%;filter:blur(80px)}
.b1{width:56vw;height:56vw;max-width:700px;max-height:700px;top:-20%;right:-10%;background:rgba(240,82,35,.26)}
.b2{width:44vw;height:44vw;max-width:560px;max-height:560px;bottom:-24%;left:-12%;background:rgba(16,115,184,.24)}
.grid{position:fixed;inset:0;z-index:0;pointer-events:none;
background-image:linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px);
background-size:56px 56px;opacity:.5;
-webkit-mask-image:radial-gradient(ellipse 80% 65% at 50% 30%,#000 15%,transparent 75%);
mask-image:radial-gradient(ellipse 80% 65% at 50% 30%,#000 15%,transparent 75%)}
.wrap{position:relative;z-index:1;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
text-align:center;padding:clamp(2rem,6vw,4rem) clamp(1.25rem,5vw,2rem);max-width:52rem;margin-inline:auto}
.mark{display:flex;align-items:center;gap:.7rem;margin-bottom:2.25rem}
.mark svg{border-radius:11px;box-shadow:0 8px 32px rgba(240,82,35,.3)}
.mark b{font-size:1.35rem;font-weight:600;letter-spacing:-.02em}
.pill{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem 1rem;border:1px solid var(--line);
border-radius:999px;font-size:.8rem;color:var(--muted);background:rgba(20,17,48,.6);backdrop-filter:blur(8px)}
.dot{width:7px;height:7px;border-radius:50%;background:var(--brand);box-shadow:0 0 0 3px rgba(240,82,35,.2);
animation:pulse 2.4s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
h1{margin:1.5rem 0 0;font-size:clamp(2.1rem,1.3rem+3.6vw,4rem);font-weight:600;line-height:1.2;letter-spacing:-.02em;text-wrap:balance}
.grad{background:linear-gradient(96deg,#f05223,#ee9b20);-webkit-background-clip:text;background-clip:text;color:transparent}
.lede{margin-top:1.35rem;font-size:clamp(1rem,.95rem+.35vw,1.2rem);color:var(--muted);max-width:44ch;text-wrap:pretty}
.rule{width:84px;height:4px;border-radius:999px;background:linear-gradient(90deg,#f05223,#ee9b20);border:0;margin:2.25rem 0}
.facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(8.5rem,1fr));gap:1.25rem;width:100%;max-width:34rem}
.fact b{display:block;font-size:clamp(1.5rem,1.2rem+1.2vw,2.1rem);font-weight:600;line-height:1.1;
background:linear-gradient(96deg,#f05223,#ee9b20);-webkit-background-clip:text;background-clip:text;color:transparent}
.fact span{font-size:.78rem;color:var(--muted)}
.actions{display:flex;flex-wrap:wrap;gap:.75rem;justify-content:center;margin-top:2.5rem}
.btn{display:inline-flex;align-items:center;gap:.5rem;padding:.8rem 1.6rem;border-radius:999px;
font-size:.9rem;font-weight:500;text-decoration:none;border:1.5px solid var(--line);color:var(--text);transition:.25s}
.btn:hover{border-color:var(--brand);color:var(--brand);transform:translateY(-1px)}
.btn-p{background:linear-gradient(96deg,#f05223,#ee9b20);border-color:transparent;color:#fff;
box-shadow:0 8px 32px rgba(240,82,35,.28)}
.btn-p:hover{color:#fff;box-shadow:0 12px 40px rgba(240,82,35,.4)}
footer{position:relative;z-index:1;padding:1.5rem;text-align:center;font-size:.75rem;color:var(--muted);
border-top:1px solid var(--line)}
.lang{position:fixed;top:1rem;right:1rem;z-index:2;display:flex;gap:.15rem;padding:.2rem;
background:rgba(20,17,48,.7);backdrop-filter:blur(8px);border:1px solid var(--line);border-radius:999px}
.lang button{padding:.3rem .7rem;border:0;background:none;color:var(--muted);font:inherit;font-size:.75rem;
border-radius:999px;cursor:pointer}
.lang button[aria-pressed=true]{background:rgba(255,255,255,.08);color:var(--brand);font-weight:500}
/* Scoped to the body: the switcher also sets lang on <html>, and an
   unscoped [lang=en] would hide the whole document for anyone whose
   browser is not Thai. */
body [lang=en]{display:none}
html[data-lang=en] [lang=th]{display:none}
html[data-lang=en] [lang=en]{display:revert}
:focus-visible{outline:3px solid #6cb6f5;outline-offset:2px;border-radius:4px}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>
</head>
<body>
<div class="mesh" aria-hidden="true"><span class="b1"></span><span class="b2"></span></div>
<div class="grid" aria-hidden="true"></div>

<div class="lang" role="group" aria-label="ภาษา / Language">
<button type="button" data-set="th" aria-pressed="true">ไทย</button>
<button type="button" data-set="en" aria-pressed="false">EN</button>
</div>

<main class="wrap">
<div class="mark">
__MARK__
<b>THGov</b>
</div>

<p class="pill"><span class="dot" aria-hidden="true"></span>
<span lang="th">กำลังจะเปิดให้บริการ</span><span lang="en">Launching soon</span></p>

<h1>
<span lang="th">บริการภาครัฐไทย <span class="grad">ที่ Google หาไม่เจอ</span></span>
<span lang="en">Thai government services <span class="grad">that Google cannot find</span></span>
</h1>

<p class="lede">
<span lang="th">เรากำลังรวบรวมบริการออนไลน์ของหน่วยงานรัฐไทย เขียนคำอธิบายด้วยภาษาที่คนใช้จริง แล้วส่งคุณไปยังเว็บไซต์ทางการโดยตรง</span>
<span lang="en">We are cataloguing Thailand’s government online services, explaining each one in the words people actually use, and sending you straight to the official site.</span>
</p>

<hr class="rule">

<div class="facts">
<div class="fact"><b>__SERVICES__</b><span lang="th">บริการที่รวบรวม</span><span lang="en">services indexed</span></div>
<div class="fact"><b>__DOMAINS__</b><span lang="th">โดเมนที่ตรวจสอบ</span><span lang="en">domains audited</span></div>
<div class="fact"><b>__BLOCKED__</b><span lang="th">เว็บไซต์ที่ปิดกั้นเครื่องมือค้นหา</span><span lang="en">sites blocking search engines</span></div>
</div>

<div class="actions">
<a class="btn btn-p" href="__REPO__" rel="noopener noreferrer">
<span lang="th">ดูความคืบหน้าบน GitHub</span><span lang="en">Follow progress on GitHub</span>
</a>
</div>
</main>

<footer>
<p>
<span lang="th">THGov เป็นสารบัญอิสระ ไม่ใช่เว็บไซต์ของทางราชการ และไม่มีความเกี่ยวข้องกับหน่วยงานที่กล่าวถึง</span>
<span lang="en">THGov is an independent directory. It is not a government website and is not affiliated with the agencies it lists.</span>
</p>
</footer>

<script>
(function(){
	var d=document.documentElement;
	function set(l){
		d.setAttribute('data-lang',l);
		d.lang = l==='en' ? 'en' : 'th';
		document.querySelectorAll('.lang button').forEach(function(b){
			b.setAttribute('aria-pressed', String(b.dataset.set===l));
		});
		try{localStorage.setItem('thgov:lang',l)}catch(e){}
	}
	var stored=null;
	try{stored=localStorage.getItem('thgov:lang')}catch(e){}
	if(!stored && !/^th\\b/i.test(navigator.language||'')) stored='en';
	set(stored==='en'?'en':'th');
	document.querySelectorAll('.lang button').forEach(function(b){
		b.addEventListener('click',function(){set(b.dataset.set)});
	});
})();
</script>
</body>
</html>
`;

function copyDir(from, to) {
	if (!fs.existsSync(from)) return 0;
	fs.mkdirSync(to, { recursive: true });
	let n = 0;
	for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
		const src = path.join(from, entry.name);
		const dst = path.join(to, entry.name);
		if (entry.isDirectory()) n += copyDir(src, dst);
		else {
			fs.copyFileSync(src, dst);
			n++;
		}
	}
	return n;
}

/** Builds the standalone holding page served from the production branch. */
export async function buildComingSoon({ root, staticDir, buildDir }) {
	fs.rmSync(buildDir, { recursive: true, force: true });
	fs.mkdirSync(buildDir, { recursive: true });

	let files = 0;
	files += copyDir(path.join(staticDir, 'fonts'), path.join(buildDir, 'fonts'));
	files += copyDir(path.join(staticDir, 'icons'), path.join(buildDir, 'icons'));
	for (const f of ['favicon.svg', 'favicon.ico', 'manifest.webmanifest', '_headers']) {
		const src = path.join(staticDir, f);
		if (fs.existsSync(src)) {
			fs.copyFileSync(src, path.join(buildDir, f));
			files++;
		}
	}

	// Counts come from the real content registry, so the holding page never lies.
	let services = 0;
	let domains = 0;
	let blocked = 0;
	try {
		const { loadContent } = await import('./content-loader.mjs');
		const c = await loadContent();
		services = c.SERVICES.length;
		domains = c.AUDIT_TOTAL;
		blocked = c.AUDIT_COUNTS.blocked ?? 0;
	} catch {
		/* content not buildable yet — fall through with zeroes */
	}

	// The holding page ships as one self-contained file, so the mark is
	// inlined from the same source the icons are generated from.
	const html = PAGE.replaceAll('__MARK__', markSvg({ size: 34 }).replace('<svg ', '<svg aria-hidden="true" '))
		.replaceAll('__SITE__', SITE_URL)
		.replaceAll('__REPO__', 'https://github.com/Shayennn/THGov')
		.replaceAll('__SERVICES__', String(services))
		.replaceAll('__DOMAINS__', String(domains))
		.replaceAll('__BLOCKED__', String(blocked));

	fs.writeFileSync(path.join(buildDir, 'index.html'), html);
	fs.writeFileSync(path.join(buildDir, '404.html'), html);
	files += 2;

	fs.writeFileSync(
		path.join(buildDir, 'robots.txt'),
		`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
	);
	const today = new Date(Date.now()).toISOString().slice(0, 10);
	fs.writeFileSync(
		path.join(buildDir, 'sitemap.xml'),
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\t<url>\n\t\t<loc>${SITE_URL}/</loc>\n\t\t<lastmod>${today}</lastmod>\n\t\t<changefreq>daily</changefreq>\n\t\t<priority>1.0</priority>\n\t</url>\n</urlset>\n`
	);
	files += 2;

	await renderOg(
		{
			eyebrow: 'กำลังจะเปิดให้บริการ · Launching soon',
			title: 'บริการภาครัฐไทย ที่ Google หาไม่เจอ',
			subtitle: 'สารบัญอิสระ · ลิงก์ตรงไปยังเว็บไซต์ทางการ'
		},
		path.join(buildDir, 'og', 'coming-soon.png')
	);
	files++;

	return files;
}
