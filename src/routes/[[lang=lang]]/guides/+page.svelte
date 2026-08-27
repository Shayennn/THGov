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
	path="/guides"
	locale={data.locale}
	jsonld={data.jsonld}
/>

<div class="container head">
	<Breadcrumbs
		crumbs={[
			{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
			{ name: data.title, url: href('/guides') }
		]}
	/>
	<h1>{data.title}</h1>
	<p class="lede">{data.description}</p>
	<hr class="rule" />
</div>

<div class="container list">
	{#if data.guides.length}
		<div class="grid grid-2">
			{#each data.guides as g (g.slug)}
				<a class="card g" href={href(`/guides/${g.slug}`)}>
					<span class="chip"><Icon name="clock" size={12} />{t('label.readingTime', { n: g.minutes })}</span>
					<h2>{lc(g.title)}</h2>
					<p>{lc(g.deck)}</p>
					<span class="more">{t('cta.detail')}<Icon name="arrow" size={15} /></span>
				</a>
			{/each}
		</div>
	{:else}
		<p class="empty">{lc({ th: 'กำลังจัดทำคู่มือ โปรดกลับมาใหม่เร็ว ๆ นี้', en: 'Guides are being written — check back soon.' })}</p>
	{/if}
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
	.g {
		color: var(--text);
	}
	.g h2 {
		font-size: var(--fs-h3);
		line-height: 1.35;
	}
	.g p {
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
	}
	.more {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-top: auto;
		font-size: var(--fs-xs);
		font-weight: 500;
		color: var(--brand);
	}
	.empty {
		padding: 3rem 1rem;
		text-align: center;
		color: var(--text-muted);
	}
</style>
