<script lang="ts">
	import { goto } from '$app/navigation';
	import Icon from './Icon.svelte';
	import { t, href } from '$lib/i18n/t';

	let { value = $bindable('') }: { value?: string } = $props();

	function submit(e: SubmitEvent) {
		e.preventDefault();
		const q = value.trim();
		goto(href('/search') + (q ? `?q=${encodeURIComponent(q)}` : ''), { keepFocus: true });
	}
</script>

<form class="searchbox" role="search" onsubmit={submit}>
	<label class="visually-hidden" for="thgov-q">{t('search.label')}</label>
	<Icon name="search" size={19} class="icon" />
	<input
		id="thgov-q"
		type="search"
		bind:value
		placeholder={t('search.placeholder')}
		autocomplete="off"
		enterkeyhint="search"
	/>
	<button type="submit" class="go">{t('search.submit')}</button>
</form>

<style>
	.searchbox {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		width: 100%;
		max-width: 38rem;
		padding: 0.45rem 0.45rem 0.45rem 1.1rem;
		background: var(--surface);
		border: 1px solid var(--line-strong);
		border-radius: var(--r-pill);
		box-shadow: var(--sh-md);
		transition: border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease);
	}
	.searchbox:focus-within {
		border-color: var(--brand);
		box-shadow: var(--sh-glow);
	}
	:global(.searchbox .icon) {
		flex: none;
		color: var(--text-faint);
	}
	input {
		flex: 1;
		min-width: 0;
		border: 0;
		background: none;
		padding-block: 0.6rem;
		font-size: var(--fs-md);
		outline: none;
	}
	input::-webkit-search-cancel-button {
		cursor: pointer;
	}
	.go {
		flex: none;
		padding: 0.6rem 1.35rem;
		border-radius: var(--r-pill);
		background: var(--accent-gradient);
		color: #fff;
		font-size: var(--fs-sm);
		font-weight: 500;
		transition: box-shadow var(--dur) var(--ease);
	}
	.go:hover {
		box-shadow: var(--sh-glow);
	}
	@media (max-width: 30rem) {
		.go {
			padding-inline: 1rem;
		}
	}
	:global(html.color-mode-contrast) .go {
		background: var(--brand);
		color: #000;
	}
</style>
