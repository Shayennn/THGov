<script lang="ts">
	import Seo from '$lib/seo/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Blocks from '$lib/components/Blocks.svelte';
	import StepList from '$lib/components/StepList.svelte';
	import FaqList from '$lib/components/FaqList.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import Toc from '$lib/components/Toc.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { lc, href, t } from '$lib/i18n/t';
	import { formatDate } from '$lib/i18n';

	let { data } = $props();
	const guide = $derived(data.guide);
	const toc = $derived(data.toc);
	const services = $derived(data.services);
</script>

<Seo
	title={data.title}
	description={data.description}
	path="/guides/{data.guide.slug}"
	locale={data.locale}
	jsonld={data.jsonld}
	keywords={guide.keywords[data.locale]}
	ogType="article"
	modifiedTime={guide.updated}
	publishedTime={guide.updated}
/>

<div class="container head">
	<Breadcrumbs
		crumbs={[
			{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
			{ name: lc({ th: 'คู่มือการใช้งาน', en: 'Guides' }), url: href('/guides') },
			{ name: data.title, url: href(`/guides/${data.guide.slug}`) }
		]}
	/>
	<p class="meta">
		<span class="chip"><Icon name="clock" size={12} />{t('label.readingTime', { n: guide.minutes })}</span>
		<span class="date">{t('label.updated')}: {formatDate(guide.updated, data.locale)}</span>
	</p>
	<h1>{data.title}</h1>
	<p class="lede">{lc(guide.deck)}</p>
	<hr class="rule" />
</div>

<div class="container body">
	<aside class="rail no-print">
		<div class="rail-inner"><Toc headings={toc} /></div>
	</aside>
	<div class="main">
		<div class="prose"><Blocks body={guide.body} /></div>
		<StepList steps={guide.steps} />
		<FaqList faq={guide.faq} />
		{#if services.length}
			<section class="rel">
				<h2>{t('label.related')}</h2>
				<div class="grid grid-2">
					{#each services as s (s.slug)}
						<ServiceCard service={s} compact />
					{/each}
				</div>
			</section>
		{/if}
	</div>
</div>

<style>
	.head {
		padding-block: clamp(2rem, 5vw, 3.5rem) 0;
	}
	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem;
		margin-top: 1.15rem;
	}
	.date {
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	h1 {
		font-size: var(--fs-h1);
		margin: 0.9rem 0 1rem;
		max-width: 22ch;
	}
	.rule {
		margin-top: 1.75rem;
	}
	.body {
		display: grid;
		gap: clamp(2rem, 5vw, 3.5rem);
		padding-block: clamp(2rem, 4vw, 3rem) clamp(3rem, 8vw, 5.5rem);
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
	}
	.rel h2 {
		font-size: var(--fs-h2);
		margin-bottom: 1.5rem;
	}
	@media (min-width: 68rem) {
		.body {
			grid-template-columns: 16.5rem minmax(0, 1fr);
		}
		.rail {
			display: block;
		}
	}
</style>
