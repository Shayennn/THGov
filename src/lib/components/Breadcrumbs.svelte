<script lang="ts">
	import Icon from './Icon.svelte';
	import { t } from '$lib/i18n/t';

	interface Crumb {
		name: string;
		url: string;
	}
	let { crumbs }: { crumbs: Crumb[] } = $props();
</script>

<nav class="crumbs" aria-label={t('label.breadcrumb')}>
	<ol>
		{#each crumbs as crumb, i (crumb.url)}
			<li>
				{#if i < crumbs.length - 1}
					<a href={crumb.url}>{crumb.name}</a>
					<Icon name="arrow" size={13} class="sep" />
				{:else}
					<span aria-current="page">{crumb.name}</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	.crumbs {
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	ol {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}
	a {
		color: var(--text-muted);
		text-decoration: none;
	}
	a:hover {
		color: var(--brand);
	}
	span[aria-current] {
		color: var(--text);
		font-weight: 500;
	}
	:global(.crumbs .sep) {
		opacity: 0.45;
		flex: none;
	}
</style>
