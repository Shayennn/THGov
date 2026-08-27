<script lang="ts">
	import Seo from '$lib/seo/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import OutboundLink from '$lib/components/OutboundLink.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { lc, href, t } from '$lib/i18n/t';

	let { data } = $props();
	const agency = $derived(data.agency);
	const items = $derived(data.services);
</script>

<Seo
	title={data.title}
	description={data.description}
	path="/agencies/{data.agency.slug}"
	locale={data.locale}
	jsonld={data.jsonld}
/>

<div class="container head">
	<Breadcrumbs
		crumbs={[
			{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
			{ name: lc({ th: 'หน่วยงาน', en: 'Agencies' }), url: href('/agencies') },
			{ name: data.title, url: href(`/agencies/${data.agency.slug}`) }
		]}
	/>
	<p class="abbr">{lc(agency.abbr)}</p>
	<h1>{data.title}</h1>
	{#if agency.ministry}
		<p class="min"><Icon name="building" size={14} />{lc(agency.ministry)}</p>
	{/if}
	<p class="lede">{data.description}</p>
	<div class="cta"><OutboundLink url={agency.site} label={t('label.official')} /></div>
	<hr class="rule" />
</div>

<div class="container list">
	<h2>{items.length} {t('label.services')}</h2>
	<div class="grid grid-3">
		{#each items as s (s.slug)}
			<ServiceCard service={s} />
		{/each}
	</div>
</div>

<style>
	.head {
		padding-block: clamp(2rem, 5vw, 3.5rem) 0;
	}
	.abbr {
		display: inline-flex;
		margin-top: 1.15rem;
		padding: 0.25rem 0.75rem;
		border-radius: var(--r-pill);
		background: var(--accent-gradient);
		color: #fff;
		font-size: var(--fs-xs);
		font-weight: 600;
	}
	h1 {
		font-size: var(--fs-h1);
		margin: 0.85rem 0 0.6rem;
		max-width: 24ch;
	}
	.min {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: var(--fs-sm);
		color: var(--text-faint);
		margin-bottom: 0.9rem;
	}
	.cta {
		margin-top: 1.6rem;
	}
	.rule {
		margin-top: 2rem;
	}
	.list {
		padding-block: clamp(2.5rem, 5vw, 3.5rem) clamp(3rem, 7vw, 5rem);
	}
	.list h2 {
		font-size: var(--fs-h2);
		margin-bottom: 1.5rem;
	}
	:global(html.color-mode-contrast) .abbr {
		background: var(--brand);
		color: #000;
	}
</style>
