<script lang="ts">
	import { page } from '$app/state';
	import Icon from '$lib/components/Icon.svelte';
	import { t, href } from '$lib/i18n/t';

	const is404 = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{is404 ? t('error.404.title') : t('error.generic.title')} | THGov</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<div class="container wrap">
	<p class="code">{page.status}</p>
	<h1>{is404 ? t('error.404.title') : t('error.generic.title')}</h1>
	<p class="lede">{is404 ? t('error.404.body') : page.error?.message}</p>
	<div class="cluster actions">
		<a class="btn btn-primary" href={href('/')}>{t('error.home')}</a>
		<a class="btn btn-ghost" href={href('/search')}>
			<Icon name="search" size={15} />{t('nav.search')}
		</a>
	</div>
</div>

<style>
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding-block: clamp(4rem, 12vw, 8rem);
	}
	.code {
		font-size: clamp(3.5rem, 10vw, 6rem);
		font-weight: 600;
		line-height: 1;
		background: var(--accent-gradient);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	h1 {
		font-size: var(--fs-h1);
		margin: 1rem 0;
	}
	.lede {
		text-align: center;
	}
	.actions {
		justify-content: center;
		margin-top: 2rem;
	}
	:global(html.color-mode-contrast) .code {
		background: none;
		color: var(--brand);
	}
</style>
