<script lang="ts">
	import { page } from '$app/state';
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import AccessibilityPanel from './AccessibilityPanel.svelte';
	import { t, href, currentLocale } from '$lib/i18n/t';
	import { LOCALES, localizeHref, stripLocale } from '$lib/i18n';

	let menuOpen = $state(false);

	const locale = $derived(currentLocale());
	const basePath = $derived(stripLocale(page.url.pathname));

	const links = $derived([
		{ path: '/services', key: 'nav.services' as const },
		{ path: '/categories', key: 'nav.categories' as const },
		{ path: '/agencies', key: 'nav.agencies' as const },
		{ path: '/guides', key: 'nav.guides' as const },
		{ path: '/robots-report', key: 'nav.report' as const },
		{ path: '/about', key: 'nav.about' as const }
	]);

	function isActive(path: string): boolean {
		return basePath === path || basePath.startsWith(path + '/');
	}

	$effect(() => {
		// Close the drawer on navigation.
		void page.url.pathname;
		menuOpen = false;
	});

	$effect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<header class="masthead no-print">
	<div class="container bar">
		<a class="brand" href={href('/')} aria-label="THGov">
			<Logo />
		</a>

		<nav class="desktop-nav" aria-label={t('nav.primary')}>
			{#each links as link (link.path)}
				<a
					href={href(link.path)}
					class="nav-link"
					class:active={isActive(link.path)}
					aria-current={isActive(link.path) ? 'page' : undefined}
				>
					{t(link.key)}
				</a>
			{/each}
		</nav>

		<div class="tools">
			<a class="tool" href={href('/search')} aria-label={t('nav.search')}>
				<Icon name="search" size={17} />
			</a>

			<div class="lang" role="group" aria-label={t('lang.switch')}>
				{#each LOCALES as l (l)}
					<a
						href={localizeHref(basePath, l)}
						class="lang-opt"
						class:active={l === locale}
						hreflang={l === 'th' ? 'th-TH' : 'en'}
						aria-current={l === locale ? 'true' : undefined}
						data-sveltekit-reload
					>
						{l === 'th' ? 'ไทย' : 'EN'}
					</a>
				{/each}
			</div>

			<AccessibilityPanel />

			<button
				class="burger"
				type="button"
				aria-expanded={menuOpen}
				aria-controls="mobile-nav"
				onclick={() => (menuOpen = !menuOpen)}
			>
				<Icon name={menuOpen ? 'close' : 'menu'} size={20} />
				<span class="visually-hidden">{menuOpen ? t('nav.close') : t('nav.menu')}</span>
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav class="mobile-nav" id="mobile-nav" aria-label={t('nav.primary')}>
			<a href={href('/')} class="m-link" class:active={basePath === '/'}>{t('nav.home')}</a>
			{#each links as link (link.path)}
				<a href={href(link.path)} class="m-link" class:active={isActive(link.path)}>
					{t(link.key)}
					<Icon name="arrow" size={16} />
				</a>
			{/each}
		</nav>
	{/if}
</header>

<style>
	.masthead {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--surface-glass);
		backdrop-filter: saturate(1.6) blur(14px);
		-webkit-backdrop-filter: saturate(1.6) blur(14px);
		border-bottom: 1px solid var(--line);
	}
	.bar {
		display: flex;
		align-items: center;
		gap: clamp(0.75rem, 2vw, 1.75rem);
		min-height: 4.25rem;
	}
	.brand {
		text-decoration: none;
		color: var(--text);
		flex: none;
	}
	.desktop-nav {
		display: none;
		align-items: center;
		gap: clamp(0.5rem, 1.4vw, 1.35rem);
		margin-inline-end: auto;
	}
	.nav-link {
		position: relative;
		font-size: var(--fs-sm);
		color: var(--text-muted);
		text-decoration: none;
		padding-block: 0.35rem;
		white-space: nowrap;
		transition: color var(--dur) var(--ease);
	}
	.nav-link::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -0.15rem;
		height: 2px;
		border-radius: 2px;
		background: var(--accent-gradient);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform var(--dur) var(--ease);
	}
	.nav-link:hover,
	.nav-link.active {
		color: var(--text);
	}
	.nav-link:hover::after,
	.nav-link.active::after {
		transform: scaleX(1);
	}
	.tools {
		display: flex;
		align-items: center;
		gap: 0.45rem;
		margin-inline-start: auto;
	}
	.tool {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.35rem;
		height: 2.35rem;
		border-radius: var(--r-pill);
		border: 1px solid var(--line);
		color: var(--text-muted);
		text-decoration: none;
		transition: color var(--dur) var(--ease), border-color var(--dur) var(--ease);
	}
	.tool:hover {
		color: var(--brand);
		border-color: var(--brand);
	}
	.lang {
		display: flex;
		gap: 0.15rem;
		padding: 0.2rem;
		background: var(--bg-alt);
		border-radius: var(--r-pill);
	}
	.lang-opt {
		padding: 0.28rem 0.62rem;
		font-size: var(--fs-xs);
		font-weight: 500;
		border-radius: var(--r-pill);
		color: var(--text-muted);
		text-decoration: none;
		line-height: 1.5;
		transition: background-color var(--dur) var(--ease), color var(--dur) var(--ease);
	}
	.lang-opt:hover {
		color: var(--text);
	}
	.lang-opt.active {
		background: var(--surface);
		color: var(--brand);
		box-shadow: var(--sh-xs);
	}
	.burger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.35rem;
		height: 2.35rem;
		border-radius: var(--r-pill);
		border: 1px solid var(--line);
		color: var(--text-muted);
	}
	.mobile-nav {
		display: flex;
		flex-direction: column;
		padding: 0.5rem clamp(1rem, 4vw, 2rem) 1.25rem;
		border-top: 1px solid var(--line);
		background: var(--surface);
	}
	.m-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.85rem 0.25rem;
		font-size: var(--fs-md);
		color: var(--text);
		text-decoration: none;
		border-bottom: 1px solid var(--line);
	}
	.m-link.active {
		color: var(--brand);
	}
	.m-link:last-child {
		border-bottom: 0;
	}

	@media (min-width: 62rem) {
		.desktop-nav {
			display: flex;
		}
		.burger {
			display: none;
		}
		.tools {
			margin-inline-start: 0;
		}
	}
	@media (max-width: 30rem) {
		.tool {
			display: none;
		}
	}
	:global(html.color-mode-contrast) .masthead {
		background: #000;
		backdrop-filter: none;
	}
</style>
