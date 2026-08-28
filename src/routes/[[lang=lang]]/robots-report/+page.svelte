<script lang="ts">
	import Seo from '$lib/seo/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import CrawlBadge from '$lib/components/CrawlBadge.svelte';
	import { lc, href, t } from '$lib/i18n/t';
	import { formatDate, formatNumber } from '$lib/i18n';
	import type { CrawlVerdict } from '$lib/content/types';

	let { data } = $props();

	let filter = $state<'all' | CrawlVerdict>('all');
	let q = $state('');

	const serviceByHost = $derived(data.serviceByHost);

	const rows = $derived(
		data.rows.filter((r) => {
			if (filter !== 'all' && r.verdict !== filter) return false;
			if (q && !r.host.includes(q.trim().toLowerCase())) return false;
			return true;
		})
	);

	const buckets: { key: 'all' | CrawlVerdict; label: { th: string; en: string } }[] = [
		{ key: 'all', label: { th: 'ทั้งหมด', en: 'All' } },
		{ key: 'blocked', label: { th: 'ปิดกั้นทั้งเว็บไซต์', en: 'Blocked site-wide' } },
		{ key: 'waf-blocked', label: { th: 'ปฏิเสธการตรวจสอบ', en: 'Refused our check' } },
		{ key: 'partial', label: { th: 'ปิดกั้นบางส่วน', en: 'Partial' } },
		{ key: 'none', label: { th: 'ไม่มี robots.txt', en: 'No robots.txt' } },
		{ key: 'allowed', label: { th: 'เปิดทั้งหมด', en: 'Fully open' } },
		{ key: 'unknown', label: { th: 'ตรวจสอบไม่ได้', en: 'Unverified' } }
	];

	const blocked = $derived(data.evidence);
	const challenge = $derived(data.challengeCount);
	const hardBlock = $derived(data.hardBlockCount);
	const googlebotOnly = $derived(data.googlebotOnlyCount);
	const browserOnly = $derived(data.browserOnlyCount);

	function count(key: 'all' | CrawlVerdict): number {
		return key === 'all' ? data.total : (data.counts[key] ?? 0);
	}
</script>

<Seo
	title={data.title}
	description={data.description}
	path="/robots-report"
	locale={data.locale}
	jsonld={data.jsonld}
	ogType="article"
	modifiedTime={data.date}
	image="/og/robots-report.png"
/>

<div class="container head">
	<Breadcrumbs
		crumbs={[
			{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
			{ name: lc({ th: 'รายงานการเข้าถึง', en: 'Access report' }), url: href('/robots-report') }
		]}
	/>
	<p class="eyebrow"><Icon name="robot" size={14} />{lc({ th: 'รายงานการตรวจสอบ', en: 'Audit report' })}</p>
	<h1>{data.title}</h1>
	<p class="lede">{data.description}</p>
	<p class="stamp">
		{lc({ th: 'ตรวจสอบเมื่อ', en: 'Audited on' })}
		{formatDate(data.date, data.locale)} ·
		{formatNumber(data.total, data.locale)}
		{lc({ th: 'โดเมน', en: 'domains' })}
	</p>
	<hr class="rule" />
</div>

<div class="container prose intro">
	<h2 id="why">{lc({ th: 'ทำไมเรื่องนี้ถึงสำคัญ', en: 'Why this matters' })}</h2>
	<p>
		{lc({
			th: 'เมื่อประชาชนต้องการติดต่อราชการ สิ่งแรกที่เกือบทุกคนทำคือค้นหาใน Google ถ้าเว็บไซต์ของหน่วยงานไม่ปรากฏในผลการค้นหา ผลที่ตามมาไม่ใช่แค่ความไม่สะดวก แต่คือช่องว่างที่เว็บไซต์ปลอมและมิจฉาชีพเข้ามาแทนที่ได้ เพราะเว็บไซต์เหล่านั้นยินดีให้ Google เก็บข้อมูลเต็มที่',
			en: 'When someone needs to deal with a government agency, almost everyone starts by searching Google. If the agency’s site does not appear, the consequence is not merely inconvenience — it is a gap that impostor sites and scammers fill, because those sites are only too happy to be indexed.'
		})}
	</p>
	<p>
		{lc({
			th: 'ไฟล์ robots.txt เป็นไฟล์ข้อความสั้น ๆ ที่วางไว้ที่รากของเว็บไซต์ ใช้บอกบอตของเครื่องมือค้นหาว่าหน้าไหนเก็บข้อมูลได้บ้าง หากไฟล์นี้ระบุว่า Disallow: / ในกลุ่ม User-agent: * แปลว่าเว็บไซต์นั้นขอไม่ให้บอตใด ๆ เก็บข้อมูลทุกหน้า ซึ่งในทางปฏิบัติเท่ากับหายไปจากผลการค้นหา',
			en: 'A robots.txt is a short text file at a site’s root that tells crawlers which pages they may fetch. If it declares `Disallow: /` under `User-agent: *`, the site is asking every crawler to stay away from every page — which in practice means disappearing from search results.'
		})}
	</p>

	<h2 id="method">{t('crawl.method')}</h2>
	<p>
		{lc({
			th: 'เรารวบรวมรายชื่อโดเมนของหน่วยงานรัฐและรัฐวิสาหกิจไทย แล้วเรียกไฟล์ robots.txt และหน้าแรกของแต่ละโดเมนด้วย User-Agent ของ Googlebot จากนั้นเรียกหน้าแรกซ้ำอีกครั้งด้วย User-Agent ของเบราว์เซอร์ทั่วไป เพื่อแยกแยะสองสถานการณ์ที่ต่างกันมาก',
			en: 'We assembled a list of Thai government and state-enterprise domains, then requested each one’s robots.txt and homepage with Googlebot’s user-agent, and requested the homepage again with an ordinary browser user-agent — to separate two very different situations.'
		})}
	</p>
	<p>
		{lc({
			th: 'โดเมนใดที่การเรียกแบบแรกถูกปฏิเสธหรือเชื่อมต่อไม่ได้ เราจะตรวจซ้ำด้วยเบราว์เซอร์ Chromium จริงแบบไม่มีหน้าจอ ซึ่งประมวลผลจาวาสคริปต์ได้และมีลายนิ้วมือการเชื่อมต่อแบบเบราว์เซอร์จริง เพราะการปฏิเสธจำนวนมากเกิดจากข้อจำกัดของเครื่องมือที่ใช้ตรวจ ไม่ใช่นโยบายของเว็บไซต์ เมื่อเบราว์เซอร์เข้าถึงได้ เราจะอ่านไฟล์ robots.txt ผ่านช่องทางเดียวกันนั้น และตัดสินจากไฟล์จริงแทนการเดา',
			en: 'Any domain that refuses the first pass, or that we cannot connect to at all, is checked again with a real headless Chromium — a browser that runs JavaScript and carries a browser’s connection fingerprint — because a large share of refusals are a limitation of the measuring tool rather than a policy of the site. Where the browser gets in, we read robots.txt over that same connection and judge from the file instead of guessing.'
		})}
	</p>
	<ul>
		<li>
			{lc({
				th: 'เว็บไซต์ที่ประกาศปิดกั้นใน robots.txt เอง — เป็นหลักฐานที่ชัดเจนและใครก็ตรวจซ้ำได้ เพราะไฟล์นี้เป็นสาธารณะและไม่ขึ้นกับผู้เรียก',
				en: 'Sites that declare the block in their own robots.txt — hard evidence anyone can reproduce, because that file is public and identical for every requester.'
			})}
		</li>
		<li>
			{lc({
				th: 'เว็บไซต์ที่ปฏิเสธคำขอของเรา แม้เมื่อเปิดด้วยเบราว์เซอร์จริง — กรณีนี้สรุปไม่ได้ว่าปิดกั้น Google จริงหรือไม่ เพราะอาจเป็นการกรองทราฟฟิกจากศูนย์ข้อมูลตามปกติ',
				en: 'Sites that refused us even through a real browser — from which we cannot conclude that Google itself is blocked, since this is often ordinary datacentre-traffic filtering.'
			})}
		</li>
		<li>
			{lc({
				th: 'เว็บไซต์ที่ตอบกลับเฉพาะเบราว์เซอร์จริง — คนทั่วไปใช้งานได้ตามปกติ แต่บริการเก็บถาวรเว็บ เครื่องมือตรวจสอบ และผู้ช่วย AI ที่ไม่ประมวลผลจาวาสคริปต์ เข้าไม่ถึงเนื้อหาเลย',
				en: 'Sites that answer only a real browser — ordinary visitors are unaffected, while web archives, monitoring tools and AI assistants that do not run JavaScript reach nothing at all.'
			})}
		</li>
	</ul>

	<aside class="callout callout-warn">
		<Icon name="alert" size={18} class="c-icon" />
		<div>
			<strong>{lc({ th: 'ข้อจำกัดที่เราระบุไว้อย่างตรงไปตรงมา', en: 'A limitation we state plainly' })}</strong>
			<p>
				{lc({
					th: 'การตรวจสอบทั้งหมดทำจากเครื่องเดียวในช่วงเวลาเดียว แม้จะตรวจซ้ำด้วยเบราว์เซอร์จริงแล้วก็ตาม Googlebot ตัวจริงมาจากช่วงไอพีของ Google และยืนยันตัวตนด้วยการตรวจสอบ DNS ย้อนกลับ ดังนั้นผลลัพธ์ 403 ที่เราได้รับจึงไม่ใช่ข้อพิสูจน์ว่า Google เข้าไม่ได้ เราจึงแยกหมวด “ปิดกั้นทั้งเว็บไซต์” ซึ่งพิสูจน์ได้จาก robots.txt ออกจากหมวด “ปฏิเสธการตรวจสอบ” อย่างชัดเจน',
					en: 'Every check ran from a single host at a single point in time, second-stage browser pass included. The real Googlebot comes from Google’s IP ranges and verifies itself by reverse DNS, so a 403 to us is not proof that Google is shut out. That is why we keep “blocked site-wide”, which robots.txt proves, strictly separate from “refused our check”.'
				})}
			</p>
		</div>
	</aside>
</div>

<div class="container findings">
	<h2 id="findings">{lc({ th: 'สิ่งที่พบ', en: 'What we found' })}</h2>

	<div class="grid grid-3 summary">
		<div class="card stat-card danger">
			<span class="big">{formatNumber(blocked.length, data.locale)}</span>
			<h3>{lc({ th: 'ปิดกั้นเครื่องมือค้นหาทั้งเว็บไซต์', en: 'Block search engines site-wide' })}</h3>
			<p>
				{lc({
					th: 'ประกาศไว้ในไฟล์ robots.txt ของเว็บไซต์เอง เป็นหลักฐานที่ใครก็ตรวจซ้ำได้',
					en: 'Declared in the site’s own robots.txt — evidence anyone can reproduce.'
				})}
			</p>
		</div>
		<div class="card stat-card warn">
			<span class="big">{formatNumber(hardBlock, data.locale)}</span>
			<h3>{lc({ th: 'ปฏิเสธแม้แต่เบราว์เซอร์จริง', en: 'Refuse even a real browser' })}</h3>
			<p>
				{lc({
					th: 'ตอบกลับด้วยหน้าบล็อก แม้เปิดด้วยเบราว์เซอร์ Chromium จริงที่ประมวลผลจาวาสคริปต์',
					en: 'A block page even to a real Chromium browser running the page’s JavaScript.'
				})}
			</p>
		</div>
		<div class="card stat-card info">
			<span class="big">{formatNumber(challenge, data.locale)}</span>
			<h3>{lc({ th: 'ต้องผ่านการตรวจสอบด้วยจาวาสคริปต์', en: 'Sit behind a JavaScript challenge' })}</h3>
			<p>
				{lc({
					th: 'เบราว์เซอร์และบอตที่ยืนยันตัวตนแล้วผ่านได้ แต่บริการเก็บถาวรและผู้ช่วย AI เข้าไม่ได้',
					en: 'Browsers and verified crawlers pass; archives and AI assistants do not.'
				})}
			</p>
		</div>
	</div>

	{#if googlebotOnly}
		<aside class="callout callout-info gb-note">
			<Icon name="robot" size={18} class="c-icon" />
			<div>
				<strong>{lc({ th: 'กรณีพิเศษ: เปิดให้เฉพาะ Google', en: 'A special case: open to Google alone' })}</strong>
				<p>
					{lc({
						th: 'มีเว็บไซต์ที่ปิดกั้นบอตทุกตัวใน robots.txt แล้วเขียนข้อยกเว้นให้ Googlebot โดยเฉพาะ เว็บไซต์เหล่านี้ยังค้นเจอผ่าน Google ได้ แต่เครื่องมือค้นหาอื่น บริการเก็บถาวรเว็บ และผู้ช่วย AI ถูกปฏิเสธทั้งหมด แปลว่าผูกการเข้าถึงข้อมูลสาธารณะไว้กับบริษัทเดียว',
						en: 'One site blocks every crawler in robots.txt and then writes an exception for Googlebot alone. It stays findable through Google while every other search engine, web archive and AI assistant is refused — which ties access to public information to a single company.'
					})}
				</p>
			</div>
		</aside>
	{/if}

	{#if browserOnly}
		<aside class="callout callout-info gb-note">
			<Icon name="shield" size={18} class="c-icon" />
			<div>
				<strong>
					{lc({ th: 'เปิดให้เฉพาะเบราว์เซอร์จริง', en: 'Open to real browsers only' })}
				</strong>
				<p>
					{lc({
						th: `เว็บไซต์ ${formatNumber(browserOnly, data.locale)} แห่งปฏิเสธคำขอจากโปรแกรมทั่วไป แต่ตอบกลับตามปกติเมื่อเปิดด้วยเบราว์เซอร์ Chromium จริง เราจึงอ่านไฟล์ robots.txt ของเว็บไซต์เหล่านี้ได้และยืนยันว่าไฟล์ไม่ได้ปิดกั้นเครื่องมือค้นหา ประชาชนที่เปิดผ่านเบราว์เซอร์ใช้งานได้ตามปกติ แต่บริการเก็บถาวรเว็บ เครื่องมือตรวจสอบภายนอก และผู้ช่วย AI เข้าไม่ถึงเนื้อหาเลย`,
						en: `${formatNumber(browserOnly, data.locale)} sites refuse ordinary clients but answer a real Chromium browser normally — which let us read their robots.txt and confirm that the file itself does not shut crawlers out. People browsing them are unaffected, while web archives, third-party monitoring and AI assistants reach nothing at all.`
					})}
				</p>
			</div>
		</aside>
	{/if}

	{#if blocked.length}
		<section class="evidence">
			<h3>{lc({ th: 'หลักฐาน: เว็บไซต์ที่ปิดกั้นทั้งเว็บไซต์', en: 'Evidence: sites blocked site-wide' })}</h3>
			<div class="grid grid-2">
				{#each blocked as row (row.host)}
					<div class="card ev">
						<div class="ev-head">
							<span class="mono host">{row.host}</span>
							<CrawlBadge verdict={row.verdict} size="sm" />
						</div>
						<pre class="scroll-x">{row.snippet}</pre>
						{#if serviceByHost[row.host]}
							<a class="ev-link" href={href(`/services/${serviceByHost[row.host]}`)}>
								{t('cta.detail')}<Icon name="arrow" size={14} />
							</a>
						{/if}
					</div>
				{/each}
			</div>
		</section>
	{/if}
</div>

<div class="container table-section">
	<h2 id="data">{lc({ th: 'ข้อมูลทั้งหมด', en: 'The full dataset' })}</h2>

	<div class="controls no-print">
		<div class="chips scroll-x" role="group">
			{#each buckets as b (b.key)}
				<button class="chip" class:on={filter === b.key} onclick={() => (filter = b.key)}>
					{lc(b.label)} ({formatNumber(count(b.key), data.locale)})
				</button>
			{/each}
		</div>
		<label class="find">
			<Icon name="search" size={15} />
			<span class="visually-hidden">{lc({ th: 'กรองตามชื่อโดเมน', en: 'Filter by domain' })}</span>
			<input type="search" bind:value={q} placeholder={lc({ th: 'กรองโดเมน…', en: 'Filter domains…' })} />
		</label>
	</div>

	<p class="count" aria-live="polite">
		{formatNumber(rows.length, data.locale)} / {formatNumber(data.total, data.locale)}
	</p>

	<div class="scroll-x">
		<table>
			<thead>
				<tr>
					<th scope="col">{lc({ th: 'โดเมน', en: 'Domain' })}</th>
					<th scope="col">{lc({ th: 'สถานะ', en: 'Status' })}</th>
					<th scope="col">robots.txt</th>
					<th scope="col">{lc({ th: 'หน้าแรก', en: 'Homepage' })}</th>
				</tr>
			</thead>
			<tbody>
				{#each rows as row (row.host)}
					<tr>
						<th scope="row" class="mono">
							{#if serviceByHost[row.host]}
								<a href={href(`/services/${serviceByHost[row.host]}`)}>{row.host}</a>
							{:else}
								{row.host}
							{/if}
						</th>
						<td><CrawlBadge verdict={row.verdict} size="sm" /></td>
						<td class="mono num">{row.robotsStatus ?? '—'}</td>
						<td class="mono num">{row.homeStatus ?? '—'}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	{#if !rows.length}
		<p class="empty">{t('search.noResults')}</p>
	{/if}
</div>

<div class="container prose outro">
	<h2 id="what-agencies-can-do">{lc({ th: 'สิ่งที่หน่วยงานทำได้', en: 'What an agency can do about it' })}</h2>
	<p>
		{lc({
			th: 'ในหลายกรณี การปิดกั้นไม่ได้เกิดจากนโยบาย แต่เกิดจากค่าตั้งต้นที่ติดมากับระบบ เช่น ไฟล์ robots.txt ที่คัดลอกมาจากสภาพแวดล้อมทดสอบแล้วลืมแก้ตอนขึ้นระบบจริง หรือกฎของไฟร์วอลล์ที่กันบอตทั้งหมดโดยไม่ได้ยกเว้นเครื่องมือค้นหา การแก้ไขมักใช้เวลาไม่นาน',
			en: 'In many cases the block is not policy but a default that came along for the ride — a robots.txt copied from a staging environment and never changed at launch, or a firewall rule that bars all bots without carving out search engines. The fix is often quick.'
		})}
	</p>
	<ul>
		<li>
			{lc({
				th: 'ตรวจสอบว่าไฟล์ robots.txt บนระบบจริงไม่มีบรรทัด Disallow: / ค้างอยู่จากสภาพแวดล้อมทดสอบ',
				en: 'Check that production robots.txt has not inherited a `Disallow: /` from staging.'
			})}
		</li>
		<li>
			{lc({
				th: 'หากต้องปิดกั้นบอตด้วยเหตุผลด้านความปลอดภัย ให้ยกเว้นเครื่องมือค้นหาหลักที่ยืนยันตัวตนได้ด้วยการตรวจสอบ DNS ย้อนกลับ แทนการกันทั้งหมด',
				en: 'If bot filtering is needed for security, allow the major search engines that verify by reverse DNS rather than blocking everything.'
			})}
		</li>
		<li>
			{lc({
				th: 'เพิ่มไฟล์ sitemap.xml และประกาศไว้ใน robots.txt เพื่อช่วยให้เครื่องมือค้นหาเก็บข้อมูลได้ครบถ้วนขึ้น',
				en: 'Publish a sitemap.xml and declare it in robots.txt so crawlers can find everything.'
			})}
		</li>
		<li>
			{lc({
				th: 'ตรวจสอบผลด้วย Google Search Console ซึ่งแสดงให้เห็นโดยตรงว่าหน้าใดถูกกันไว้ด้วยเหตุผลอะไร',
				en: 'Verify in Google Search Console, which shows directly which pages are excluded and why.'
			})}
		</li>
	</ul>
	<p>
		{lc({
			th: 'หากคุณเป็นเจ้าหน้าที่ของหน่วยงานที่ปรากฏในรายงานนี้ และได้แก้ไขการตั้งค่าแล้ว โปรดแจ้งเรา เราจะตรวจสอบซ้ำและปรับปรุงข้อมูลให้ตรงกับความเป็นจริง',
			en: 'If you work for an agency listed here and the configuration has since changed, tell us — we will re-run the check and update the record.'
		})}
	</p>
</div>

<style>
	.head {
		padding-block: clamp(2rem, 5vw, 3.5rem) 0;
	}
	.eyebrow {
		margin-top: 1.15rem;
	}
	h1 {
		font-size: var(--fs-h1);
		margin: 0.75rem 0 1rem;
		max-width: 20ch;
	}
	.stamp {
		margin-top: 1rem;
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	.rule {
		margin-top: 1.75rem;
	}
	.intro,
	.outro {
		padding-block: clamp(2rem, 4vw, 3rem);
	}
	.findings,
	.table-section {
		padding-block: clamp(1.5rem, 3vw, 2.5rem);
	}
	.findings h2,
	.table-section h2 {
		font-size: var(--fs-h2);
		margin-bottom: 1.75rem;
		scroll-margin-top: 6rem;
	}
	.summary {
		margin-bottom: 3rem;
	}
	.stat-card .big {
		font-size: clamp(2.2rem, 1.6rem + 2vw, 3.2rem);
		font-weight: 600;
		line-height: 1;
	}
	.stat-card h3 {
		font-size: var(--fs-md);
		font-weight: 600;
		line-height: 1.45;
	}
	.stat-card p {
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
	}
	.stat-card.danger .big {
		color: var(--danger);
	}
	.stat-card.warn .big {
		color: var(--warn);
	}
	.stat-card.info .big {
		color: var(--blue);
	}
	.gb-note {
		margin-bottom: 3rem;
	}
	.evidence h3 {
		font-size: var(--fs-h3);
		margin-bottom: 1.35rem;
	}
	.ev {
		gap: 0.7rem;
	}
	.ev-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		flex-wrap: wrap;
	}
	.host {
		font-size: var(--fs-sm);
		font-weight: 500;
	}
	.ev pre {
		margin: 0;
		padding: 0.8rem 0.95rem;
		background: var(--bg-sunken);
		border: 1px solid var(--line);
		border-radius: var(--r-sm);
		font-family: var(--font-mono);
		font-size: 0.74rem;
		line-height: 1.6;
		color: var(--danger);
		white-space: pre;
	}
	.ev-link {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: var(--fs-xs);
		font-weight: 500;
		color: var(--brand);
		text-decoration: none;
	}
	.controls {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1.25rem;
	}
	.chips {
		display: flex;
		gap: 0.4rem;
		padding-bottom: 0.35rem;
		flex: 1;
		min-width: 0;
	}
	.chip.on {
		background: var(--accent-gradient);
		border-color: transparent;
		color: #fff;
	}
	.find {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding: 0.4rem 0.85rem;
		border: 1px solid var(--line);
		border-radius: var(--r-pill);
		background: var(--surface);
		color: var(--text-faint);
	}
	.find input {
		border: 0;
		background: none;
		outline: none;
		font-size: var(--fs-sm);
		width: 9rem;
		color: var(--text);
	}
	.count {
		font-size: var(--fs-xs);
		color: var(--text-faint);
		margin-bottom: 0.85rem;
	}
	table {
		width: 100%;
		min-width: 34rem;
		border-collapse: collapse;
		font-size: var(--fs-sm);
	}
	th,
	td {
		padding: 0.6rem 0.9rem;
		text-align: start;
		border-bottom: 1px solid var(--line);
	}
	thead th {
		position: sticky;
		top: 0;
		background: var(--bg);
		font-weight: 600;
		border-bottom: 2px solid var(--line-strong);
		white-space: nowrap;
		z-index: 1;
	}
	tbody th {
		font-weight: 400;
		word-break: break-all;
	}
	tbody th a {
		color: var(--brand-deep);
		text-decoration: none;
	}
	tbody th a:hover {
		text-decoration: underline;
	}
	.num {
		color: var(--text-faint);
		text-align: end;
		white-space: nowrap;
	}
	.empty {
		padding: 2.5rem 0;
		text-align: center;
		color: var(--text-muted);
	}
	:global(html.color-mode-contrast) .chip.on {
		background: var(--brand);
		color: #000;
	}
</style>
