<script lang="ts">
	import Seo from '$lib/seo/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Blocks from '$lib/components/Blocks.svelte';
	import Toc from '$lib/components/Toc.svelte';
	import FaqList from '$lib/components/FaqList.svelte';
	import StepList from '$lib/components/StepList.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import CrawlBadge from '$lib/components/CrawlBadge.svelte';
	import OutboundLink from '$lib/components/OutboundLink.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import MeshBackdrop from '$lib/components/MeshBackdrop.svelte';
	import { t, lc, href } from '$lib/i18n/t';
	import { formatDate } from '$lib/i18n';

	let { data } = $props();

	const service = $derived(data.service);
	const agency = $derived(data.agency);
	const toc = $derived(data.toc);
	const related = $derived(data.related);
	const guides = $derived(data.guides);

	/**
	 * Show the access notice whenever something meaningfully stands between a
	 * crawler and this service — including the cases that are not outright
	 * blocks, like a JavaScript challenge or a Google-only exemption.
	 */
	const NOTABLE_KINDS = [
		'robots-disallow-all',
		'googlebot-exception',
		'js-challenge',
		'waf-rule',
		'origin-403',
		'redirect-loop',
		'browser-only',
		'tls-invalid'
	];
	const notable = $derived(
		service.crawl.verdict === 'blocked' ||
			service.crawl.verdict === 'waf-blocked' ||
			NOTABLE_KINDS.includes(service.crawl.kind ?? '')
	);
	const kindLabel = $derived(
		service.crawl.kind ? t(`kind.${service.crawl.kind}` as never) : ''
	);
	const EXPLAIN = {
		'js-challenge': 'crawl.jsChallengeExplain',
		'googlebot-exception': 'crawl.googlebotOnlyExplain',
		'browser-only': 'crawl.browserOnlyExplain',
		'tls-invalid': 'crawl.tlsInvalidExplain'
	} as const;
	const headline = $derived(
		EXPLAIN[service.crawl.kind as keyof typeof EXPLAIN]
			? t(EXPLAIN[service.crawl.kind as keyof typeof EXPLAIN])
			: service.crawl.verdict === 'blocked'
				? t('crawl.blockedExplain')
				: t('crawl.wafExplain')
	);
	const host = $derived(
		(() => {
			try {
				return new URL(service.url).host;
			} catch {
				return service.url;
			}
		})()
	);
</script>

<Seo
	title={lc(service.name)}
	description={lc(service.summary)}
	path="/services/{service.slug}"
	locale={data.locale}
	image="/og/services/{service.slug}.png"
	imageAlt={lc(service.shortName)}
	jsonld={data.jsonld}
	keywords={service.keywords[data.locale]}
	ogType="article"
	modifiedTime={service.updated}
/>

<article>
	<header class="hero">
		<MeshBackdrop variant="deep" />
		<div class="container hero-inner">
			<Breadcrumbs
				crumbs={[
					{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
					{ name: lc({ th: 'บริการภาครัฐ', en: 'Services' }), url: href('/services') },
					{ name: lc(service.shortName), url: href(`/services/${service.slug}`) }
				]}
			/>

			<div class="tags">
				<CrawlBadge verdict={service.crawl.verdict} />
				{#each data.categories as cat (cat.slug)}
					<a class="chip" href={href(`/categories/${cat.slug}`)}>
						<Icon name={cat.icon} size={12} />{lc(cat.name)}
					</a>
				{/each}
			</div>

			<h1>{lc(service.name)}</h1>
			<p class="lede">{lc(service.deck)}</p>

			<div class="cta cluster">
				<OutboundLink url={service.url} large />
				{#if agency}
					<a class="btn btn-ghost" href={href(`/agencies/${agency.slug}`)}>
						<Icon name="building" size={15} />
						{lc(agency.abbr)}
					</a>
				{/if}
			</div>
			<p class="dest mono">{host}</p>
		</div>
	</header>

	<div class="container body-grid">
		<aside class="rail no-print">
			<div class="rail-inner">
				<dl class="facts">
					<dt>{t('label.agency')}</dt>
					<dd>
						{#if agency}
							<a href={href(`/agencies/${agency.slug}`)}>{lc(agency.name)}</a>
							{#if agency.ministry}<span class="ministry">{lc(agency.ministry)}</span>{/if}
						{/if}
					</dd>

					<dt>{t('label.official')}</dt>
					<dd>
						<a href={service.url} target="_blank" rel="noopener noreferrer external" class="mono"
							>{host}</a
						>
					</dd>

					<dt>{t('crawl.title')}</dt>
					<dd><CrawlBadge verdict={service.crawl.verdict} size="sm" /></dd>

					<dt>{t('label.updated')}</dt>
					<dd>{formatDate(service.updated, data.locale)}</dd>
				</dl>

				<Toc headings={toc} />
			</div>
		</aside>

		<div class="main">
			{#if notable}
				<aside class="crawl-notice" class:soft={service.crawl.verdict === 'partial'}>
					<div class="cn-head">
						<Icon name={service.crawl.verdict === 'blocked' ? 'lock' : 'shield'} size={19} />
						<h2>
							{service.crawl.verdict === 'blocked'
								? t('crawl.blocked')
								: service.crawl.verdict === 'partial'
									? kindLabel
									: t('crawl.waf')}
						</h2>
						{#if service.crawl.kind && service.crawl.verdict !== 'partial'}
							<span class="cn-kind">{kindLabel}</span>
						{/if}
					</div>
					<p>{headline}</p>
					{#if service.crawl.note}
						<p class="cn-note">{lc(service.crawl.note)}</p>
					{/if}
					{#if service.crawl.snippet}
						<figure>
							<figcaption>
								{t('crawl.robotsSnippet')} · <span class="mono">{service.crawl.host}</span>
							</figcaption>
							<pre class="scroll-x">{service.crawl.snippet}</pre>
						</figure>
					{/if}
					<p class="cn-date">
						{t('crawl.checkedOn', { date: formatDate(service.crawl.checkedAt, data.locale) })}
					</p>
				</aside>
			{/if}

			{#if service.features.length}
				<section class="features" aria-labelledby="features-title">
					<h2 id="features-title">{t('label.features')}</h2>
					<ul class="feature-grid">
						{#each service.features as f, i (i)}
							<li class="feature">
								<span class="f-icon"><Icon name={f.icon} size={18} /></span>
								<div>
									<h3>{lc(f.title)}</h3>
									<p>{lc(f.text)}</p>
								</div>
							</li>
						{/each}
					</ul>
				</section>
			{/if}

			<div class="prose">
				<Blocks body={service.body} />
			</div>

			<StepList steps={service.steps} />

			<div class="mid-cta">
				<div>
					<h2>{t('cta.open')}</h2>
					<p>{t('disclaimer.leaving')} — <span class="mono">{host}</span></p>
				</div>
				<OutboundLink url={service.url} large />
			</div>

			{#if service.altUrls?.length}
				<section class="alts" aria-labelledby="alt-title">
					<h2 id="alt-title">{lc({ th: 'ช่องทางทางการอื่น', en: 'Other official channels' })}</h2>
					<ul>
						{#each service.altUrls as alt, i (i)}
							<li>
								<a href={alt.url} target="_blank" rel="noopener noreferrer external">
									<Icon name="external" size={15} />
									{lc(alt.label)}
								</a>
							</li>
						{/each}
					</ul>
				</section>
			{/if}

			<FaqList faq={service.faq} />

			{#if guides.length}
				<section class="related" aria-labelledby="guides-title">
					<h2 id="guides-title">{t('nav.guides')}</h2>
					<div class="grid grid-2">
						{#each guides as g (g.slug)}
							<a class="card" href={href(`/guides/${g.slug}`)}>
								<h3>{lc(g.title)}</h3>
								<p>{lc(g.deck)}</p>
							</a>
						{/each}
					</div>
				</section>
			{/if}

			{#if related.length}
				<section class="related" aria-labelledby="related-title">
					<h2 id="related-title">{t('label.related')}</h2>
					<div class="grid grid-2">
						{#each related as r (r.slug)}
							<ServiceCard service={r} compact />
						{/each}
					</div>
				</section>
			{/if}
		</div>
	</div>
</article>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		padding-block: clamp(1.75rem, 4vw, 2.75rem) clamp(2rem, 5vw, 3.25rem);
		border-bottom: 1px solid var(--line);
	}
	.hero-inner {
		position: relative;
		z-index: 1;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		margin-top: 1.15rem;
	}
	h1 {
		font-size: var(--fs-h1);
		margin: 1rem 0 0.85rem;
		max-width: 22ch;
	}
	.cta {
		margin-top: 1.75rem;
	}
	.dest {
		margin-top: 0.75rem;
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}

	.body-grid {
		display: grid;
		gap: clamp(2rem, 5vw, 3.5rem);
		padding-block: clamp(2.25rem, 5vw, 3.5rem) clamp(3rem, 8vw, 5.5rem);
	}
	/* Grid items default to min-width:auto, which lets a wide child (a table at
	   its 34rem minimum) push the whole column past the viewport instead of
	   scrolling inside its own .scroll-x wrapper. */
	.main {
		min-width: 0;
	}
	/* Sections rendered by child components carry their own scoping class, not
	   this page's, so the stack rule has to reach past Svelte's style scoping. */
	.main > :global(* + *) {
		margin-top: clamp(2.5rem, 5vw, 3.75rem);
	}

	.rail {
		display: none;
	}
	.rail-inner {
		position: sticky;
		top: 5.75rem;
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
	}
	.facts {
		display: grid;
		gap: 0.15rem;
		font-size: var(--fs-sm);
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--line);
	}
	.facts dt {
		font-size: var(--fs-xs);
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text-faint);
		margin-top: 0.9rem;
	}
	.facts dt:first-child {
		margin-top: 0;
	}
	.facts dd {
		margin: 0;
		color: var(--text-muted);
		line-height: 1.55;
		word-break: break-word;
	}
	.facts a {
		color: var(--text);
		text-decoration: none;
	}
	.facts a:hover {
		color: var(--brand);
	}
	.ministry {
		display: block;
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}

	.crawl-notice {
		padding: clamp(1.15rem, 2.5vw, 1.6rem);
		border: 1px solid var(--line);
		border-inline-start: 4px solid var(--danger);
		border-radius: var(--r);
		background: var(--danger-bg);
	}
	/* A challenge or a Google-only exemption is a caveat, not an outright block. */
	.crawl-notice.soft {
		border-inline-start-color: var(--warn);
		background: var(--warn-bg);
	}
	.crawl-notice.soft .cn-head {
		color: var(--warn);
	}
	.cn-head {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--danger);
		flex-wrap: wrap;
	}
	.cn-kind {
		font-size: var(--fs-xs);
		font-weight: 500;
		padding: 0.15rem 0.55rem;
		border-radius: var(--r-pill);
		border: 1px solid currentColor;
		opacity: 0.85;
	}
	.cn-head h2 {
		font-size: var(--fs-h4);
		font-weight: 600;
	}
	.crawl-notice p {
		margin-top: 0.75rem;
		font-size: var(--fs-sm);
		line-height: 1.75;
		color: var(--text);
	}
	.cn-note {
		color: var(--text-muted) !important;
	}
	.crawl-notice figure {
		margin: 1rem 0 0;
	}
	.crawl-notice figcaption {
		font-size: var(--fs-xs);
		color: var(--text-muted);
		margin-bottom: 0.35rem;
	}
	.crawl-notice pre {
		padding: 0.8rem 0.95rem;
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: var(--r-sm);
		font-family: var(--font-mono);
		font-size: 0.76rem;
		line-height: 1.6;
		white-space: pre;
		margin: 0;
	}
	.cn-date {
		font-size: var(--fs-xs) !important;
		color: var(--text-faint) !important;
	}

	.features h2,
	.alts h2,
	.related h2 {
		font-size: var(--fs-h2);
		margin-bottom: 1.5rem;
	}
	.feature-grid {
		display: grid;
		gap: 1.1rem;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 17rem), 1fr));
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.feature {
		display: flex;
		gap: 0.85rem;
		padding: 1.05rem 1.15rem;
		border: 1px solid var(--line);
		border-radius: var(--r);
		background: var(--surface);
	}
	.f-icon {
		flex: none;
		display: grid;
		place-items: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: var(--r-sm);
		background: var(--blue-pale);
		color: var(--brand-deep);
	}
	.feature h3 {
		font-size: var(--fs-md);
		font-weight: 600;
		margin-bottom: 0.25rem;
		line-height: 1.4;
	}
	.feature p {
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
	}

	.mid-cta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
		padding: clamp(1.35rem, 3vw, 2rem);
		border-radius: var(--r-lg);
		background: var(--bg-alt);
		border: 1px solid var(--line);
	}
	.mid-cta h2 {
		font-size: var(--fs-h3);
	}
	.mid-cta p {
		margin-top: 0.4rem;
		font-size: var(--fs-sm);
		color: var(--text-muted);
	}

	.alts ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.6rem;
	}
	.alts a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--brand-deep);
		text-decoration: none;
		font-size: var(--fs-sm);
	}
	.alts a:hover {
		text-decoration: underline;
	}

	.related .card h3 {
		font-size: var(--fs-h4);
	}
	.related .card p {
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
	}

	@media (min-width: 68rem) {
		.body-grid {
			grid-template-columns: 16.5rem minmax(0, 1fr);
		}
		.rail {
			display: block;
		}
	}
</style>
