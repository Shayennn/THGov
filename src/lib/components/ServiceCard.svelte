<script lang="ts">
	import type { ServiceSummary } from '$lib/content/dto';
	import Icon from './Icon.svelte';
	import CrawlBadge from './CrawlBadge.svelte';
	import { lc, href } from '$lib/i18n/t';

	interface Props {
		service: ServiceSummary;
		compact?: boolean;
		showCrawl?: boolean;
	}
	let { service, compact = false, showCrawl = true }: Props = $props();
</script>

<a class="card svc" class:compact href={href(`/services/${service.slug}`)}>
	<div class="head">
		<h3>{lc(service.shortName)}</h3>
		{#if showCrawl}
			<CrawlBadge verdict={service.verdict} size="sm" />
		{/if}
	</div>

	<p class="summary">{lc(service.summary)}</p>

	<div class="foot">
		{#if lc(service.agencyAbbr)}
			<span class="agency">
				<Icon name="building" size={13} />
				{lc(service.agencyAbbr)}
			</span>
		{/if}
		{#if service.host}<span class="host mono">{service.host}</span>{/if}
		<Icon name="arrow" size={16} class="go" />
	</div>
</a>

<style>
	.svc {
		gap: 0.7rem;
		color: var(--text);
	}
	.head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.6rem;
	}
	h3 {
		font-size: var(--fs-h4);
		font-weight: 600;
		line-height: 1.35;
	}
	.summary {
		font-size: var(--fs-sm);
		color: var(--text-muted);
		line-height: 1.7;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.compact .summary {
		-webkit-line-clamp: 2;
		line-clamp: 2;
	}
	.foot {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		margin-top: auto;
		padding-top: 0.5rem;
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	.agency {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		white-space: nowrap;
	}
	.host {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		opacity: 0.75;
	}
	:global(.svc .go) {
		margin-inline-start: auto;
		flex: none;
		color: var(--brand);
		transition: transform var(--dur) var(--ease);
	}
	.svc:hover :global(.go) {
		transform: translateX(3px);
	}
</style>
