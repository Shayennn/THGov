<script lang="ts">
	import Seo from '$lib/seo/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import Blocks from '$lib/components/Blocks.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { lc, href, t } from '$lib/i18n/t';

	let { data } = $props();
	const category = $derived(data.category);
	const items = $derived(data.services);
	const others = $derived(data.others);
</script>

<Seo
	title={data.title}
	description={data.description}
	path="/categories/{data.category.slug}"
	locale={data.locale}
	jsonld={data.jsonld}
/>

<div class="container head">
	<Breadcrumbs
		crumbs={[
			{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
			{ name: lc({ th: 'หมวดหมู่', en: 'Categories' }), url: href('/categories') },
			{ name: data.title, url: href(`/categories/${data.category.slug}`) }
		]}
	/>
	<div class="title">
		<span class="ic"><Icon name={category.icon} size={22} /></span>
		<h1>{data.title}</h1>
	</div>
	<p class="lede">{data.description}</p>
	<hr class="rule" />
</div>

<div class="container intro prose">
	<Blocks body={category.intro} />
</div>

<div class="container list">
	<h2>{items.length} {t('label.services')}</h2>
	<div class="grid grid-3">
		{#each items as s (s.slug)}
			<ServiceCard service={s} />
		{/each}
	</div>
</div>

<div class="container others">
	<h2>{t('home.browse')}</h2>
	<div class="cluster">
		{#each others as c (c.slug)}
			<a class="chip" href={href(`/categories/${c.slug}`)}>
				<Icon name={c.icon} size={12} />{lc(c.name)}
			</a>
		{/each}
	</div>
</div>

<style>
	.head {
		padding-block: clamp(2rem, 5vw, 3.5rem) 0;
	}
	.title {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		margin: 1rem 0;
	}
	.ic {
		flex: none;
		display: grid;
		place-items: center;
		width: 2.9rem;
		height: 2.9rem;
		border-radius: var(--r);
		background: var(--accent-gradient);
		color: #fff;
		box-shadow: var(--sh-glow);
	}
	h1 {
		font-size: var(--fs-h1);
	}
	.rule {
		margin-top: 1.75rem;
	}
	.intro {
		padding-block: clamp(2rem, 4vw, 2.75rem) 0;
	}
	.list {
		padding-block: clamp(2.5rem, 5vw, 3.5rem) 0;
	}
	.list h2,
	.others h2 {
		font-size: var(--fs-h2);
		margin-bottom: 1.5rem;
	}
	.others {
		padding-block: clamp(2.5rem, 5vw, 3.5rem) clamp(3rem, 7vw, 5rem);
	}
	:global(html.color-mode-contrast) .ic {
		background: var(--brand);
		color: #000;
		box-shadow: none;
	}
</style>
