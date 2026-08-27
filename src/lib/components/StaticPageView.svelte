<script lang="ts">
	import type { StaticPage } from '$lib/content/pages';
	import Breadcrumbs from './Breadcrumbs.svelte';
	import Blocks from './Blocks.svelte';
	import Toc from './Toc.svelte';
	import type { Heading } from '$lib/content/blocks';
	import { lc, href, t, currentLocale } from '$lib/i18n/t';
	import { formatDate } from '$lib/i18n';

	let { page, toc }: { page: StaticPage; toc: Heading[] } = $props();
</script>

<div class="container head">
	<Breadcrumbs
		crumbs={[
			{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
			{ name: lc(page.title), url: href(`/${page.slug}`) }
		]}
	/>
	<h1>{lc(page.title)}</h1>
	<p class="lede">{lc(page.deck)}</p>
	<hr class="rule" />
</div>

<div class="container body">
	<aside class="rail no-print">
		<div class="rail-inner"><Toc headings={toc} /></div>
	</aside>
	<div class="prose">
		<Blocks body={page.body} />
		<p class="updated">
			{t('label.updated')}: {formatDate(page.updated, currentLocale())}
		</p>
	</div>
</div>

<style>
	.head {
		padding-block: clamp(2rem, 5vw, 3.5rem) 0;
	}
	h1 {
		font-size: var(--fs-h1);
		margin: 0.9rem 0 1rem;
		max-width: 20ch;
	}
	.rule {
		margin-top: 1.75rem;
	}
	.body {
		display: grid;
		gap: clamp(2rem, 5vw, 3.5rem);
		padding-block: clamp(2rem, 4vw, 3rem) clamp(3rem, 8vw, 5.5rem);
	}
	.rail {
		display: none;
	}
	.rail-inner {
		position: sticky;
		top: 5.75rem;
	}
	.updated {
		margin-top: 3rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--line);
		font-size: var(--fs-xs);
		color: var(--text-faint);
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
