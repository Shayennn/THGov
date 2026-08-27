<script lang="ts" module>
	import type { CrawlVerdict } from '$lib/content/types';
	import type { UIKey } from '$lib/i18n/ui';

	export const VERDICT_LABEL: Record<CrawlVerdict, UIKey> = {
		blocked: 'crawl.blocked',
		'waf-blocked': 'crawl.waf',
		partial: 'crawl.partial',
		allowed: 'crawl.allowed',
		none: 'crawl.none',
		unknown: 'crawl.unknown'
	};

	export const VERDICT_CLASS: Record<CrawlVerdict, string> = {
		blocked: 'chip-blocked',
		'waf-blocked': 'chip-blocked',
		partial: 'chip-partial',
		allowed: 'chip-allowed',
		none: 'chip-unknown',
		unknown: 'chip-unknown'
	};

	export const VERDICT_ICON: Record<CrawlVerdict, string> = {
		blocked: 'lock',
		'waf-blocked': 'shield',
		partial: 'filter',
		allowed: 'check',
		none: 'doc',
		unknown: 'alert'
	};
</script>

<script lang="ts">
	import Icon from './Icon.svelte';
	import { t } from '$lib/i18n/t';

	let { verdict, size = 'md' }: { verdict: CrawlVerdict; size?: 'sm' | 'md' } = $props();
</script>

<span class="chip {VERDICT_CLASS[verdict]}" class:sm={size === 'sm'}>
	<Icon name={VERDICT_ICON[verdict]} size={size === 'sm' ? 12 : 13} stroke={2} />
	{t(VERDICT_LABEL[verdict])}
</span>

<style>
	.sm {
		font-size: 0.7rem;
		padding: 0.18rem 0.5rem;
	}
</style>
