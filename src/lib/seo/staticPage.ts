import type { StaticPage } from '$lib/content/pages';
import { L, localizeHref, type Locale } from '$lib/i18n';
import { headings } from '$lib/content/blocks';
import { graph, webPageNode, breadcrumbNode, organizationNode } from './jsonld';

/** Shared load payload for the About / Privacy / Terms / Accessibility routes. */
export function staticPageData(page: StaticPage, locale: Locale) {
	const url = localizeHref(`/${page.slug}`, locale);
	return {
		locale,
		page,
		toc: headings(page.body, locale),
		title: L(page.title, locale),
		description: L(page.summary, locale),
		jsonld: graph([
			organizationNode(locale),
			webPageNode({
				url,
				name: L(page.title, locale),
				description: L(page.summary, locale),
				locale,
				updated: page.updated
			}),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{ name: L(page.title, locale), url }
			])
		])
	};
}
