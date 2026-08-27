<script lang="ts">
	import Icon from './Icon.svelte';
	import { t } from '$lib/i18n/t';

	interface Props {
		url: string;
		label?: string;
		variant?: 'primary' | 'ghost';
		large?: boolean;
	}
	let { url, label = '', variant = 'primary', large = false }: Props = $props();

	const host = $derived(
		(() => {
			try {
				return new URL(url).host;
			} catch {
				return url;
			}
		})()
	);
</script>

<a
	class="btn btn-{variant}"
	class:btn-lg={large}
	href={url}
	target="_blank"
	rel="noopener noreferrer external"
>
	{label || t('cta.open')}
	<Icon name="external" size={large ? 17 : 15} />
	<span class="visually-hidden">({host})</span>
</a>
