import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import { ACTIVE_CATEGORIES, getCategory, servicesInCategory } from '$lib/content';
import { toServiceSummary } from '$lib/content/dto';
import { graph, collectionPageNode, breadcrumbNode, itemListNode, organizationNode } from '$lib/seo/jsonld';

export const entries: EntryGenerator = () => [
	...ACTIVE_CATEGORIES.map((c) => ({ slug: c.slug })),
	...ACTIVE_CATEGORIES.map((c) => ({ lang: 'en', slug: c.slug }))
];

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	const category = getCategory(params.slug);
	if (!category) error(404, 'Category not found');

	const items = servicesInCategory(category.slug);
	const url = localizeHref(`/categories/${category.slug}`, locale);
	const name = L(category.name, locale);
	const description = L(category.blurb, locale);

	return {
		title: name,
		description,
		category: { slug: category.slug, name: category.name, icon: category.icon, intro: category.intro },
		services: items.map(toServiceSummary),
		others: ACTIVE_CATEGORIES.filter((c) => c.slug !== category.slug)
			.slice(0, 6)
			.map((c) => ({ slug: c.slug, name: c.name, icon: c.icon })),
		jsonld: graph([
			organizationNode(locale),
			collectionPageNode({ url, name, description, locale }),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{ name: locale === 'th' ? 'หมวดหมู่' : 'Categories', url: localizeHref('/categories', locale) },
				{ name, url }
			]),
			itemListNode(
				items.map((s) => ({
					name: L(s.shortName, locale),
					url: localizeHref(`/services/${s.slug}`, locale)
				})),
				name
			)
		])
	};
};
