<script lang="ts">
	import { LOCALES, HTML_LANG, localizeHref, type Locale } from '$lib/i18n';
	import { SITE, SITE_URL, OG_DEFAULT, IS_PREVIEW } from '$lib/site';
	import { abs } from './jsonld';

	interface Props {
		/** Page title without the site suffix. */
		title: string;
		description: string;
		/** Canonical Thai path, e.g. `/services/mea-eservice`. Locale prefix is added. */
		path: string;
		locale: Locale;
		image?: string;
		imageAlt?: string;
		/** Pre-serialised JSON-LD @graph. */
		jsonld?: string;
		keywords?: string[];
		ogType?: 'website' | 'article';
		noindex?: boolean;
		publishedTime?: string;
		modifiedTime?: string;
	}

	let {
		title,
		description,
		path,
		locale,
		image = OG_DEFAULT,
		imageAlt = '',
		jsonld = '',
		keywords = [],
		ogType = 'website',
		noindex = false,
		publishedTime = '',
		modifiedTime = ''
	}: Props = $props();

	const siteName = $derived(locale === 'th' ? SITE.shortName : SITE.shortName);
	const fullTitle = $derived(
		title === siteName ? `${title} — ${locale === 'th' ? 'สารบัญบริการภาครัฐไทย' : 'Thai Government Services Directory'}` : `${title} | ${siteName}`
	);
	const canonical = $derived(abs(localizeHref(path, locale)));
	const ogImage = $derived(abs(image));
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	{#if keywords.length}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}

	<link rel="canonical" href={canonical} />
	{#each LOCALES as l (l)}
		<link rel="alternate" hreflang={HTML_LANG[l]} href={abs(localizeHref(path, l))} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={abs(localizeHref(path, 'th'))} />

	{#if noindex || IS_PREVIEW}
		<meta name="robots" content="noindex, follow" />
	{:else}
		<meta
			name="robots"
			content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
		/>
	{/if}

	<meta property="og:site_name" content={siteName} />
	<meta property="og:type" content={ogType} />
	<meta property="og:locale" content={locale === 'th' ? 'th_TH' : 'en_US'} />
	<meta
		property="og:locale:alternate"
		content={locale === 'th' ? 'en_US' : 'th_TH'}
	/>
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt || title} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={imageAlt || title} />

	{#if publishedTime}<meta property="article:published_time" content={publishedTime} />{/if}
	{#if modifiedTime}<meta property="article:modified_time" content={modifiedTime} />{/if}

	<link rel="sitemap" type="application/xml" href="{SITE_URL}/sitemap.xml" />

	{#if jsonld}
		{@html `<script type="application/ld+json">${jsonld.replace(/</g, '\\u003c')}</` + `script>`}
	{/if}
</svelte:head>
