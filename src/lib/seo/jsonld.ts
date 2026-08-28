import type { Service, Guide, Category, Agency } from '$lib/content/types';
import { L, localizeHref, HTML_LANG, type Locale } from '$lib/i18n';
import { SITE, SITE_URL } from '$lib/site';

type Node = Record<string, unknown>;

export const abs = (path: string): string =>
	path.startsWith('http') ? path : SITE_URL + (path.startsWith('/') ? path : '/' + path);

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/** The publisher of this directory. Deliberately typed as an Organization —
 *  ThaiGov.co is independent and must never present itself as a government body. */
export function organizationNode(locale: Locale): Node {
	return {
		'@type': 'Organization',
		'@id': ORG_ID,
		name: L(SITE.name, locale),
		alternateName: SITE.shortName,
		url: SITE_URL + '/',
		description: L(SITE.description, locale),
		email: SITE.contactEmail,
		sameAs: [SITE.repo],
		knowsLanguage: ['th-TH', 'en']
	};
}

export function websiteNode(locale: Locale): Node {
	return {
		'@type': 'WebSite',
		'@id': SITE_ID,
		url: SITE_URL + '/',
		name: L(SITE.name, locale),
		description: L(SITE.description, locale),
		inLanguage: HTML_LANG[locale],
		publisher: { '@id': ORG_ID },
		potentialAction: {
			'@type': 'SearchAction',
			target: {
				'@type': 'EntryPoint',
				urlTemplate: abs(localizeHref('/search', locale)) + '?q={search_term_string}'
			},
			'query-input': 'required name=search_term_string'
		}
	};
}

export interface Crumb {
	name: string;
	url: string;
}

export function breadcrumbNode(crumbs: Crumb[]): Node {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: crumbs.map((c, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: c.name,
			item: abs(c.url)
		}))
	};
}

export function webPageNode(opts: {
	url: string;
	name: string;
	description: string;
	locale: Locale;
	updated?: string;
	image?: string;
}): Node {
	return {
		'@type': 'WebPage',
		'@id': abs(opts.url) + '#webpage',
		url: abs(opts.url),
		name: opts.name,
		description: opts.description,
		inLanguage: HTML_LANG[opts.locale],
		isPartOf: { '@id': SITE_ID },
		...(opts.updated ? { dateModified: opts.updated } : {}),
		...(opts.image ? { primaryImageOfPage: abs(opts.image) } : {})
	};
}

/** The agency itself — a separate real-world entity from this directory. */
export function agencyNode(agency: Agency, locale: Locale): Node {
	return {
		'@type': 'GovernmentOrganization',
		'@id': agency.site + '#organization',
		name: L(agency.name, locale),
		alternateName: L(agency.abbr, locale),
		url: agency.site,
		description: L(agency.blurb, locale),
		...(agency.ministry ? { parentOrganization: { '@type': 'GovernmentOrganization', name: L(agency.ministry, locale) } } : {}),
		areaServed: { '@type': 'Country', name: 'Thailand' }
	};
}

export function governmentServiceNode(
	service: Service,
	agency: Agency | undefined,
	locale: Locale
): Node {
	return {
		'@type': 'GovernmentService',
		'@id': abs(localizeHref(`/services/${service.slug}`, locale)) + '#service',
		name: L(service.name, locale),
		alternateName: L(service.shortName, locale),
		description: L(service.summary, locale),
		serviceUrl: service.url,
		serviceType: L(service.shortName, locale),
		inLanguage: HTML_LANG[locale],
		areaServed: { '@type': 'Country', name: 'Thailand' },
		...(agency ? { provider: agencyNode(agency, locale) } : {}),
		availableChannel: {
			'@type': 'ServiceChannel',
			serviceUrl: service.url,
			name: L(service.shortName, locale),
			availableLanguage: [
				{ '@type': 'Language', name: 'Thai', alternateName: 'th' },
				{ '@type': 'Language', name: 'English', alternateName: 'en' }
			]
		}
	};
}

export function faqNode(
	items: { q: { th: string; en: string }; a: { th: string; en: string } }[],
	locale: Locale
): Node | null {
	if (!items?.length) return null;
	return {
		'@type': 'FAQPage',
		mainEntity: items.map((f) => ({
			'@type': 'Question',
			name: L(f.q, locale),
			acceptedAnswer: { '@type': 'Answer', text: L(f.a, locale) }
		}))
	};
}

export function howToNode(
	name: string,
	steps: { title: { th: string; en: string }; text: { th: string; en: string } }[],
	locale: Locale,
	url: string
): Node | null {
	if (!steps?.length) return null;
	return {
		'@type': 'HowTo',
		name,
		inLanguage: HTML_LANG[locale],
		step: steps.map((s, i) => ({
			'@type': 'HowToStep',
			position: i + 1,
			name: L(s.title, locale),
			text: L(s.text, locale),
			url: abs(url) + `#step-${i + 1}`
		}))
	};
}

export function itemListNode(
	items: { name: string; url: string }[],
	name: string
): Node {
	return {
		'@type': 'ItemList',
		name,
		numberOfItems: items.length,
		itemListElement: items.map((it, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: it.name,
			url: abs(it.url)
		}))
	};
}

export function collectionPageNode(opts: {
	url: string;
	name: string;
	description: string;
	locale: Locale;
}): Node {
	return {
		'@type': 'CollectionPage',
		'@id': abs(opts.url) + '#webpage',
		url: abs(opts.url),
		name: opts.name,
		description: opts.description,
		inLanguage: HTML_LANG[opts.locale],
		isPartOf: { '@id': SITE_ID }
	};
}

export function articleNode(guide: Guide, locale: Locale, url: string): Node {
	return {
		'@type': 'Article',
		'@id': abs(url) + '#article',
		headline: L(guide.title, locale),
		description: L(guide.summary, locale),
		inLanguage: HTML_LANG[locale],
		dateModified: guide.updated,
		datePublished: guide.updated,
		author: { '@id': ORG_ID },
		publisher: { '@id': ORG_ID },
		mainEntityOfPage: { '@id': abs(url) + '#webpage' },
		timeRequired: `PT${guide.minutes}M`
	};
}

/** Wrap nodes into a single @graph — one script tag per page. */
export function graph(nodes: (Node | null | undefined)[]): string {
	return JSON.stringify(
		{ '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) },
		null,
		0
	);
}

export type { Node };
export function categoryNodes(category: Category, locale: Locale, url: string): Node {
	return collectionPageNode({
		url,
		name: L(category.name, locale),
		description: L(category.blurb, locale),
		locale
	});
}
