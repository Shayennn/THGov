<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { t } from '$lib/i18n/t';

	let { children } = $props();
</script>

<a class="skip-link" href="#main">{t('skip.content')}</a>

<div class="shell">
	<Header />
	<main id="main" tabindex="-1">
		{@render children?.()}
	</main>
	<Footer />
</div>

<style>
	.shell {
		display: flex;
		flex-direction: column;
		min-height: 100svh;
	}
	main {
		flex: 1;
		outline: none;
	}
</style>
