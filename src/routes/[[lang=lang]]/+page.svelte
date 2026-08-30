<script lang="ts">
	import Seo from '$lib/seo/Seo.svelte';
	import MeshBackdrop from '$lib/components/MeshBackdrop.svelte';
	import SearchBox from '$lib/components/SearchBox.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import CrawlBadge from '$lib/components/CrawlBadge.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { SITE } from '$lib/site';
	import { t, lc, href } from '$lib/i18n/t';
	import { formatNumber } from '$lib/i18n';

	let { data } = $props();

	const featured = $derived(data.featured);
	const hidden = $derived(data.hidden);
	const guides = $derived(data.guides);
	const categories = $derived(data.categories);

	const stats = $derived([
		{ value: data.stats.services, label: t('home.stats.services'), icon: 'doc' },
		{ value: data.stats.agencies, label: t('home.stats.agencies'), icon: 'building' },
		{ value: data.stats.blocked, label: t('home.stats.blocked'), icon: 'lock' },
		{ value: data.auditTotal, label: t('home.stats.audited'), icon: 'robot' }
	]);

	const how = [
		{
			icon: 'search',
			title: { th: 'ค้นหาด้วยคำที่คุณใช้จริง', en: 'Search in the words you actually use' },
			text: {
				th: 'ไม่ต้องรู้ชื่อระบบราชการ พิมพ์ว่า “เช็คค่าไฟ” หรือ “งบการเงินบริษัท” ก็เจอบริการที่ถูกต้อง',
				en: 'You do not need to know the official system name. Type “check my electricity bill” or “company financials” and land on the right service.'
			}
		},
		{
			icon: 'doc',
			title: { th: 'อ่านสรุปที่เข้าใจได้', en: 'Read a summary that makes sense' },
			text: {
				th: 'แต่ละหน้าอธิบายว่าบริการนั้นทำอะไรได้ ใครใช้ได้ ต้องเตรียมอะไร และมีขั้นตอนอย่างไร',
				en: 'Every page explains what the service does, who can use it, what to prepare and the order of the steps.'
			}
		},
		{
			icon: 'external',
			title: { th: 'ไปยังเว็บไซต์ทางการโดยตรง', en: 'Go straight to the official site' },
			text: {
				th: 'เราไม่รับข้อมูลส่วนบุคคลและไม่รับชำระเงิน ทุกธุรกรรมเกิดขึ้นบนเว็บไซต์ของหน่วยงานเท่านั้น',
				en: 'We take no personal data and no payments. Every transaction happens on the agency’s own website.'
			}
		}
	];
</script>

<Seo
	title={SITE.shortName}
	description={lc(SITE.description)}
	path="/"
	locale={data.locale}
	image="/og/home.png"
	jsonld={data.jsonld}
	keywords={data.locale === 'th'
		? ['บริการภาครัฐ', 'เว็บไซต์ราชการ', 'e-service ภาครัฐ', 'ติดต่อราชการออนไลน์', 'รวมเว็บไซต์ราชการไทย']
		: ['Thai government services', 'Thailand e-service', 'government website directory Thailand']}
/>

<section class="hero">
	<MeshBackdrop />
	<div class="container hero-inner">
		<p class="badge">
			<span class="dot" aria-hidden="true"></span>
			{t('home.heroBadge')}
		</p>

		<h1>
			{lc({ th: 'บริการภาครัฐไทย', en: 'Thai government services,' })}
			<span class="gradient-text"
				>{lc({ th: 'ที่ Google หาไม่เจอ', en: 'that Google cannot find' })}</span
			>
		</h1>

		<p class="lede hero-lede">{lc(SITE.description)}</p>

		<div class="hero-search"><SearchBox /></div>

		<div class="quick">
			<span class="quick-label">{lc({ th: 'ยอดค้นหา', en: 'Popular' })}</span>
			{#each featured.slice(0, 4) as s (s.slug)}
				<a class="chip" href={href(`/services/${s.slug}`)}>{lc(s.shortName)}</a>
			{/each}
		</div>

		<dl class="stats">
			{#each stats as stat (stat.label)}
				<div class="stat">
					<dt>
						<Icon name={stat.icon} size={15} />
						{stat.label}
					</dt>
					<dd>{formatNumber(stat.value, data.locale)}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<section class="section hidden-band">
	<div class="container">
		<header class="band-head">
			<div>
				<p class="eyebrow"><Icon name="lock" size={14} />{t('home.hidden')}</p>
				<h2>{lc({ th: 'เมื่อหน่วยงานปิดประตูใส่เครื่องมือค้นหา', en: 'When an agency shuts the door on search engines' })}</h2>
				<p class="lede">{t('home.hiddenLead')}</p>
			</div>
			<a class="btn btn-ghost" href={href('/robots-report')}>
				{lc({ th: 'ดูรายงานฉบับเต็ม', en: 'Read the full report' })}
				<Icon name="arrow" size={15} />
			</a>
		</header>

		<div class="grid grid-2 band-grid">
			{#each hidden as s (s.slug)}
				<a class="card blocked-card" href={href(`/services/${s.slug}`)}>
					<div class="bc-head">
						<CrawlBadge verdict={s.verdict} size="sm" />
						<span class="host mono">{s.crawlHost}</span>
					</div>
					<h3>{lc(s.shortName)}</h3>
					<p>{lc(s.summary)}</p>
					{#if s.snippet}
						<pre class="snippet scroll-x">{s.snippet}</pre>
					{/if}
					<span class="more">
						{#if lc(s.agencyAbbr)}{lc(s.agencyAbbr)} ·{/if}
						{t('cta.detail')}
						<Icon name="arrow" size={15} />
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<header class="sec-head">
			<h2>{t('home.featured')}</h2>
			<a class="more-link" href={href('/services')}>
				{t('cta.all')}<Icon name="arrow" size={15} />
			</a>
		</header>
		<div class="grid grid-3">
			{#each featured as s (s.slug)}
				<ServiceCard service={s} />
			{/each}
		</div>
	</div>
</section>

<section class="section how">
	<div class="container">
		<header class="sec-head center">
			<h2>{lc({ th: 'พอร์ทัลนี้ทำงานอย่างไร', en: 'How this portal works' })}</h2>
			<p class="lede">
				{lc({
					th: 'ThaiGov.co ไม่ได้ทำหน้าที่แทนหน่วยงานรัฐ แต่ทำหน้าที่เป็นป้ายบอกทางที่ค้นเจอได้ ระหว่างคำที่ประชาชนใช้ค้นหา กับระบบราชการที่มีอยู่จริง',
					en: 'ThaiGov.co does not stand in for any agency. It is a findable signpost between the words people search for and the systems that already exist.'
				})}
			</p>
		</header>
		<div class="grid grid-3">
			{#each how as step, i (i)}
				<div class="card how-card">
					<span class="how-icon"><Icon name={step.icon} size={20} /></span>
					<h3>{lc(step.title)}</h3>
					<p>{lc(step.text)}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section cats">
	<div class="container">
		<header class="sec-head">
			<h2>{t('home.browse')}</h2>
			<a class="more-link" href={href('/categories')}>
				{t('cta.all')}<Icon name="arrow" size={15} />
			</a>
		</header>
		<div class="grid grid-4">
			{#each categories as c (c.slug)}
				<a class="card cat-card" href={href(`/categories/${c.slug}`)}>
					<Icon name={c.icon} size={22} class="cat-icon" />
					<h3>{lc(c.name)}</h3>
					<p>{lc(c.blurb)}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

{#if guides.length}
	<section class="section">
		<div class="container">
			<header class="sec-head">
				<h2>{t('home.guides')}</h2>
				<a class="more-link" href={href('/guides')}>
					{t('cta.all')}<Icon name="arrow" size={15} />
				</a>
			</header>
			<div class="grid grid-3">
				{#each guides as g (g.slug)}
					<a class="card" href={href(`/guides/${g.slug}`)}>
						<span class="chip">
							<Icon name="clock" size={12} />
							{t('label.readingTime', { n: g.minutes })}
						</span>
						<h3 class="g-title">{lc(g.title)}</h3>
						<p class="g-sum">{lc(g.deck)}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>
{/if}

<section class="section-tight trust">
	<div class="container">
		<div class="trust-inner">
			<Icon name="shield" size={22} class="trust-icon" />
			<p>{t('disclaimer.long')}</p>
			<a class="btn btn-ghost" href={href('/about')}>{t('footer.about')}</a>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		padding-block: clamp(3rem, 9vw, 7rem) clamp(3rem, 7vw, 5.5rem);
		overflow: hidden;
		border-bottom: 1px solid var(--line);
	}
	.hero-inner {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.4rem 0.95rem;
		border-radius: var(--r-pill);
		border: 1px solid var(--line-strong);
		background: var(--surface-glass);
		backdrop-filter: blur(8px);
		font-size: var(--fs-xs);
		font-weight: 500;
		color: var(--text-muted);
	}
	.dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--brand);
		box-shadow: 0 0 0 3px rgba(240, 82, 35, 0.18);
	}
	h1 {
		margin-top: 1.35rem;
		font-size: var(--fs-display);
		font-weight: 600;
		line-height: 1.15;
		max-width: 18ch;
	}
	.hero-lede {
		margin-top: 1.25rem;
		max-width: 58ch;
		text-align: center;
	}
	.hero-search {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 2rem;
	}
	.quick {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		margin-top: 1.15rem;
	}
	.quick-label {
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
		gap: 1rem;
		width: 100%;
		max-width: 52rem;
		margin: clamp(2.5rem, 5vw, 3.75rem) auto 0;
		padding-top: 1.75rem;
		border-top: 1px solid var(--line);
	}
	.stat {
		text-align: center;
	}
	.stat dt {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	.stat dd {
		margin: 0.3rem 0 0;
		font-size: clamp(1.6rem, 1.2rem + 1.6vw, 2.4rem);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.02em;
		background: var(--accent-gradient);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.sec-head {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
	}
	.sec-head h2 {
		font-size: var(--fs-h2);
	}
	.sec-head.center {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
	.sec-head.center .lede {
		text-align: center;
	}
	.more-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: var(--fs-sm);
		color: var(--brand-deep);
		text-decoration: none;
		font-weight: 500;
	}
	.more-link:hover {
		gap: 0.65rem;
	}

	.hidden-band {
		background: var(--bg-alt);
		border-block: 1px solid var(--line);
	}
	.band-head {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1.25rem;
		margin-bottom: clamp(1.75rem, 3vw, 2.5rem);
	}
	.band-head h2 {
		font-size: var(--fs-h2);
		margin: 0.5rem 0 0.75rem;
		max-width: 20ch;
	}
	.blocked-card {
		gap: 0.65rem;
	}
	.bc-head {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		flex-wrap: wrap;
	}
	.host {
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	.blocked-card h3 {
		font-size: var(--fs-h4);
	}
	.blocked-card p {
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
	}
	.snippet {
		padding: 0.7rem 0.85rem;
		background: var(--bg-sunken);
		border: 1px solid var(--line);
		border-radius: var(--r-sm);
		font-family: var(--font-mono);
		font-size: 0.72rem;
		line-height: 1.55;
		color: var(--danger);
		white-space: pre;
		margin: 0;
	}
	.more {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-top: auto;
		font-size: var(--fs-xs);
		color: var(--brand);
		font-weight: 500;
	}

	.how {
		background: var(--bg-alt);
		border-block: 1px solid var(--line);
	}
	.how-card {
		align-items: flex-start;
	}
	.how-icon {
		display: grid;
		place-items: center;
		width: 2.6rem;
		height: 2.6rem;
		border-radius: var(--r);
		background: var(--accent-gradient);
		color: #fff;
		box-shadow: var(--sh-glow);
	}
	.how-card h3 {
		font-size: var(--fs-h4);
	}
	.how-card p {
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.75;
	}

	.cat-card {
		gap: 0.5rem;
		color: var(--text);
	}
	:global(.cat-card .cat-icon) {
		color: var(--brand);
	}
	.cat-card h3 {
		font-size: var(--fs-md);
		font-weight: 600;
	}
	.cat-card p {
		font-size: var(--fs-xs);
		color: var(--text-muted);
		line-height: 1.65;
	}

	.g-title {
		font-size: var(--fs-h4);
		line-height: 1.4;
	}
	.g-sum {
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
	}

	.trust {
		background: var(--bg-sunken);
	}
	.trust-inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem 1.5rem;
		padding: 1.25rem 1.5rem;
		border: 1px solid var(--line);
		border-radius: var(--r-lg);
		background: var(--surface);
	}
	.trust-inner p {
		flex: 1;
		/* A flat 16rem floor is wider than a small phone at the largest text
		   setting; min() keeps the wrap behaviour without forcing overflow. */
		min-width: min(16rem, 100%);
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
	}
	:global(.trust-icon) {
		flex: none;
		color: var(--brand);
	}

	:global(html.color-mode-contrast) .stat dd {
		background: none;
		color: var(--brand);
	}
	:global(html.color-mode-contrast) .how-icon {
		background: var(--brand);
		color: #000;
		box-shadow: none;
	}
</style>
