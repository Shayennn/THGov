<script lang="ts">
	import Seo from '$lib/seo/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { t, lc, href } from '$lib/i18n/t';

	let { data } = $props();

	let activeCat = $state('all');
	let onlyHidden = $state(false);

	const filtered = $derived(
		data.services.filter((s) => {
			if (activeCat !== 'all' && !s.categories.includes(activeCat)) return false;
			if (onlyHidden && !data.hardToFind.includes(s.verdict)) return false;
			return true;
		})
	);
</script>

<Seo
	title={data.title}
	description={data.description}
	path="/services"
	locale={data.locale}
	jsonld={data.jsonld}
/>

<div class="container page-head">
	<Breadcrumbs
		crumbs={[
			{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
			{ name: data.title, url: href('/services') }
		]}
	/>
	<h1>{data.title}</h1>
	<p class="lede">{data.description}</p>
	<hr class="rule" />
</div>

<div class="container filters no-print">
	<div class="chips scroll-x" role="group" aria-label={t('label.category')}>
		<button class="chip" class:on={activeCat === 'all'} onclick={() => (activeCat = 'all')}>
			{lc({ th: 'ทั้งหมด', en: 'All' })} ({data.services.length})
		</button>
		{#each data.categories as c (c.slug)}
			<button class="chip" class:on={activeCat === c.slug} onclick={() => (activeCat = c.slug)}>
				{lc(c.name)}
			</button>
		{/each}
	</div>
	<label class="toggle">
		<input type="checkbox" bind:checked={onlyHidden} />
		<span><Icon name="lock" size={14} />{t('home.stats.blocked')}</span>
	</label>
</div>

<div class="container list">
	<p class="count" aria-live="polite">{t('search.count', { n: filtered.length })}</p>
	{#if filtered.length}
		<div class="grid grid-3">
			{#each filtered as s (s.slug)}
				<ServiceCard service={s} />
			{/each}
		</div>
	{:else}
		<p class="empty">{t('search.noResults')}</p>
	{/if}
</div>

<style>
	.page-head {
		padding-block: clamp(2rem, 5vw, 3.5rem) 1.5rem;
	}
	.page-head h1 {
		font-size: var(--fs-h1);
		margin: 0.9rem 0 1rem;
	}
	.rule {
		margin-top: 1.75rem;
	}
	.filters {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-block: 0.5rem 1.5rem;
	}
	.chips {
		display: flex;
		gap: 0.45rem;
		padding-bottom: 0.35rem;
		flex: 1;
		min-width: 0;
	}
	.chip.on {
		background: var(--accent-gradient);
		border-color: transparent;
		color: #fff;
	}
	.toggle {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		font-size: var(--fs-sm);
		color: var(--text-muted);
		cursor: pointer;
		white-space: nowrap;
	}
	.toggle span {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
	}
	.toggle input {
		width: 1.05rem;
		height: 1.05rem;
		accent-color: var(--brand);
	}
	.list {
		padding-bottom: clamp(3rem, 7vw, 5rem);
	}
	.count {
		font-size: var(--fs-sm);
		color: var(--text-faint);
		margin-bottom: 1.25rem;
	}
	.empty {
		padding: 3rem 1rem;
		text-align: center;
		color: var(--text-muted);
	}
	:global(html.color-mode-contrast) .chip.on {
		background: var(--brand);
		color: #000;
	}
</style>
