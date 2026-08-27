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
	path="/categories"
	locale={data.locale}
	jsonld={data.jsonld}
/>

<div class="container head">
	<Breadcrumbs
		crumbs={[
			{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
			{ name: data.title, url: href('/categories') }
		]}
	/>
	<h1>{data.title}</h1>
	<p class="lede">{data.description}</p>
	<hr class="rule" />
</div>

<div class="container list">
	<div class="grid grid-2">
		{#each data.categories as c (c.slug)}
			<a class="card cat" href={href(`/categories/${c.slug}`)}>
				<span class="ic"><Icon name={c.icon} size={20} /></span>
				<h2>{lc(c.name)}</h2>
				<p>{lc(c.blurb)}</p>
				<span class="count">{c.count} {t('label.services')}</span>
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
	.cat {
		color: var(--text);
	}
	.ic {
		display: grid;
		place-items: center;
		width: 2.6rem;
		height: 2.6rem;
		border-radius: var(--r);
		background: var(--accent-gradient);
		color: #fff;
		box-shadow: var(--sh-glow);
	}
	.cat h2 {
		font-size: var(--fs-h3);
	}
	.cat p {
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
	}
	.count {
		margin-top: auto;
		font-size: var(--fs-xs);
		color: var(--brand);
		font-weight: 500;
	}
	:global(html.color-mode-contrast) .ic {
		background: var(--brand);
		color: #000;
		box-shadow: none;
	}
</style>
