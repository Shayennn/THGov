import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import { GUIDES, getGuide, getService } from '$lib/content';
import { toServiceSummary } from '$lib/content/dto';
import { headings } from '$lib/content/blocks';
import {
	graph,
	webPageNode,
	breadcrumbNode,
	articleNode,
	howToNode,
	faqNode,
	organizationNode
} from '$lib/seo/jsonld';

export const entries: EntryGenerator = () => [
	...GUIDES.map((g) => ({ slug: g.slug })),
	...GUIDES.map((g) => ({ lang: 'en', slug: g.slug }))
];

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	const guide = getGuide(params.slug);
	if (!guide) error(404, 'Guide not found');

	const path = `/guides/${guide.slug}`;
	const url = localizeHref(path, locale);
	const title = L(guide.title, locale);
	const description = L(guide.summary, locale);

	return {
		title,
		description,
		guide,
		toc: headings(guide.body, locale),
		services: guide.services
			.map((s) => getService(s))
			.filter((s) => Boolean(s))
			.map((s) => toServiceSummary(s!)),
		jsonld: graph([
			organizationNode(locale),
			webPageNode({ url, name: title, description, locale, updated: guide.updated }),
			articleNode(guide, locale, path),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{ name: locale === 'th' ? 'คู่มือการใช้งาน' : 'Guides', url: localizeHref('/guides', locale) },
				{ name: title, url }
			]),
			howToNode(title, guide.steps, locale, path),
			faqNode(guide.faq, locale)
		])
	};
};
