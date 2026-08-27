<script lang="ts">
	import { page } from '$app/state';
	import { replaceState } from '$app/navigation';
	import { base } from '$app/paths';
	import Seo from '$lib/seo/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import CrawlBadge from '$lib/components/CrawlBadge.svelte';
	import { search, type IndexEntry } from '$lib/search';
	import { lc, href, t } from '$lib/i18n/t';
	import type { CrawlVerdict } from '$lib/content/types';

	let { data } = $props();

	let query = $state('');
	let items = $state<IndexEntry[]>([]);
	let loaded = $state(false);
	let input = $state<HTMLInputElement | null>(null);

	// Seed from ?q= on first client render.
	$effect(() => {
		const q = page.url.searchParams.get('q') ?? '';
		if (q && !query) query = q;
	});

	$effect(() => {
		let cancelled = false;
		fetch(`${base}/search-index.json`)
			.then((r) => r.json())
			.then((json: { items: IndexEntry[] }) => {
				if (cancelled) return;
				items = json.items;
				loaded = true;
			})
			.catch(() => {
				loaded = true;
			});
		return () => {
			cancelled = true;
		};
	});

	const results = $derived(loaded ? search(items, query, data.locale) : []);

	function onInput(value: string) {
		query = value;
		const url = new URL(page.url);
		if (value.trim()) url.searchParams.set('q', value.trim());
		else url.searchParams.delete('q');
		replaceState(url, page.state);
	}
</script>

<Seo
	title={data.title}
	description={data.description}
	path="/search"
	locale={data.locale}
	jsonld={data.jsonld}
	noindex={Boolean(query)}
/>

<div class="container head">
	<Breadcrumbs
		crumbs={[
			{ name: lc({ th: 'หน้าแรก', en: 'Home' }), url: href('/') },
			{ name: data.title, url: href('/search') }
		]}
	/>
	<h1>{data.title}</h1>
	<p class="lede">{data.description}</p>

	<div class="field">
		<Icon name="search" size={20} class="fi" />
		<label class="visually-hidden" for="q">{t('search.label')}</label>
		<input
			id="q"
			bind:this={input}
			type="search"
			value={query}
			oninput={(e) => onInput((e.currentTarget as HTMLInputElement).value)}
			placeholder={t('search.placeholder')}
			autocomplete="off"
			enterkeyhint="search"
		/>
		{#if query}
			<button
				class="clear"
				type="button"
				onclick={() => {
					onInput('');
					input?.focus();
				}}
			>
				<Icon name="close" size={16} />
				<span class="visually-hidden">{t('search.clear')}</span>
			</button>
		{/if}
	</div>

	{#if !query}
		<div class="suggest">
			<span class="s-label">{t('home.browse')}</span>
			{#each data.categories as c (c.slug)}
				<a class="chip" href={href(`/categories/${c.slug}`)}>
					<Icon name={c.icon} size={12} />{lc(c.name)}
				</a>
			{/each}
		</div>
	{/if}
</div>

<div class="container results">
	{#if query}
		<p class="count" aria-live="polite">
			{loaded ? t('search.count', { n: results.length }) : t('search.hint')}
		</p>
		{#if results.length}
			<ul class="hits">
				{#each results as r (r.kind + r.slug)}
					{@const l = r[data.locale]}
					<li>
						<a href={href(r.path)}>
							<div class="hit-head">
								<h2>{l.title}</h2>
								{#if r.kind === 'service'}
									<CrawlBadge verdict={r.verdict as CrawlVerdict} size="sm" />
								{:else}
									<span class="chip">{t('nav.guides')}</span>
								{/if}
							</div>
							<p>{l.summary}</p>
							<div class="hit-foot">
								{#if l.agencyAbbr}<span>{l.agencyAbbr}</span>{/if}
								{#if r.host}<span class="mono">{r.host}</span>{/if}
							</div>
						</a>
					</li>
				{/each}
			</ul>
		{:else if loaded}
			<p class="empty">{t('search.noResults')}</p>
		{/if}
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
	.field {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		max-width: 40rem;
		margin-top: 1.75rem;
		padding: 0.35rem 0.9rem;
		background: var(--surface);
		border: 1px solid var(--line-strong);
		border-radius: var(--r-pill);
		box-shadow: var(--sh-sm);
	}
	.field:focus-within {
		border-color: var(--brand);
		box-shadow: var(--sh-glow);
	}
	:global(.field .fi) {
		flex: none;
		color: var(--text-faint);
	}
	.field input {
		flex: 1;
		min-width: 0;
		border: 0;
		background: none;
		outline: none;
		padding-block: 0.75rem;
		font-size: var(--fs-md);
	}
	.clear {
		flex: none;
		display: grid;
		place-items: center;
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 50%;
		color: var(--text-faint);
	}
	.clear:hover {
		color: var(--brand);
		background: var(--bg-alt);
	}
	.suggest {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		margin-top: 1.5rem;
	}
	.s-label {
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	.results {
		padding-block: clamp(1.5rem, 3vw, 2.5rem) clamp(3rem, 7vw, 5rem);
		min-height: 40vh;
	}
	.count {
		font-size: var(--fs-sm);
		color: var(--text-faint);
		margin-bottom: 1.25rem;
	}
	.hits {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.85rem;
		max-width: 52rem;
	}
	.hits a {
		display: block;
		padding: 1.1rem 1.25rem;
		border: 1px solid var(--line);
		border-radius: var(--r);
		background: var(--surface);
		text-decoration: none;
		color: var(--text);
		transition: border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
	}
	.hits a:hover {
		border-color: var(--line-glow);
		box-shadow: var(--sh-sm);
	}
	.hit-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.75rem;
	}
	.hit-head h2 {
		font-size: var(--fs-md);
		font-weight: 600;
		line-height: 1.45;
	}
	.hits p {
		margin-top: 0.4rem;
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
	}
	.hit-foot {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
		margin-top: 0.6rem;
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	.empty {
		padding: 2.5rem 0;
		color: var(--text-muted);
	}
</style>
