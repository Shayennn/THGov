import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import { ACTIVE_AGENCIES, getAgency, servicesForAgency } from '$lib/content';
import { toServiceSummary } from '$lib/content/dto';
import {
	graph,
	collectionPageNode,
	breadcrumbNode,
	itemListNode,
	agencyNode,
	organizationNode
} from '$lib/seo/jsonld';

export const entries: EntryGenerator = () => [
	...ACTIVE_AGENCIES.map((a) => ({ slug: a.slug })),
	...ACTIVE_AGENCIES.map((a) => ({ lang: 'en', slug: a.slug }))
];

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	const agency = getAgency(params.slug);
	if (!agency) error(404, 'Agency not found');

	const items = servicesForAgency(agency.slug);
	const url = localizeHref(`/agencies/${agency.slug}`, locale);
	const name = L(agency.name, locale);
	const description = L(agency.blurb, locale);

	return {
		title: name,
		description,
		agency,
		services: items.map(toServiceSummary),
		jsonld: graph([
			organizationNode(locale),
			collectionPageNode({ url, name, description, locale }),
			agencyNode(agency, locale),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{ name: locale === 'th' ? 'หน่วยงาน' : 'Agencies', url: localizeHref('/agencies', locale) },
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
