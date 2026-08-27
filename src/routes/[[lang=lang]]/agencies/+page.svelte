<script lang="ts">
	import Seo from '$lib/seo/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { lc, href, t } from '$lib/i18n/t';

	let { data } = $props();
</script>

<Seo
	title={data.title}
	description={data.description}
	path="/agencies"
	locale={data.locale}
	jsonld={data.jsonld}
/>

<div class="container head">
	<Breadcrumbs
		crumbs={[
			{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
			{ name: data.title, url: href('/agencies') }
		]}
	/>
	<h1>{data.title}</h1>
	<p class="lede">{data.description}</p>
	<hr class="rule" />
</div>

<div class="container list">
	<div class="grid grid-2">
		{#each data.agencies as a (a.slug)}
			<a class="card ag" href={href(`/agencies/${a.slug}`)}>
				<div class="ag-head">
					<span class="abbr">{lc(a.abbr)}</span>
					<span class="count">{a.count} {t('label.services')}</span>
				</div>
				<h2>{lc(a.name)}</h2>
				{#if a.ministry}<p class="min"><Icon name="building" size={13} />{lc(a.ministry)}</p>{/if}
				<p class="blurb">{lc(a.blurb)}</p>
			</a>
		{/each}
	</div>
</div>

<style>
	.head {
		padding-block: clamp(2rem, 5vw, 3.5rem) 0;
	}
	h1 {
		font-size: var(--fs-h1);
		margin: 0.9rem 0 1rem;
	}
	.rule {
		margin-top: 1.75rem;
	}
	.list {
		padding-block: clamp(2rem, 4vw, 3rem) clamp(3rem, 7vw, 5rem);
	}
	.ag {
		color: var(--text);
		gap: 0.55rem;
	}
	.ag-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}
	.abbr {
		display: inline-flex;
		padding: 0.2rem 0.65rem;
		border-radius: var(--r-pill);
		background: var(--accent-gradient);
		color: #fff;
		font-size: var(--fs-xs);
		font-weight: 600;
	}
	.count {
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	.ag h2 {
		font-size: var(--fs-h4);
		line-height: 1.4;
	}
	.min {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	.blurb {
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
	}
	:global(html.color-mode-contrast) .abbr {
		background: var(--brand);
		color: #000;
	}
</style>
