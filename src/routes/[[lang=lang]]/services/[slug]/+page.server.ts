import { error } from '@sveltejs/kit';
import type { PageServerLoad, EntryGenerator } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import {
	SERVICES,
	getService,
	getAgency,
	getCategory,
	relatedServices,
	guidesForService
} from '$lib/content';
import { toServiceSummary, toGuideSummary } from '$lib/content/dto';
import { headings } from '$lib/content/blocks';
import {
	graph,
	webPageNode,
	breadcrumbNode,
	governmentServiceNode,
	faqNode,
	howToNode,
	organizationNode
} from '$lib/seo/jsonld';

/** Prerender the Thai (unprefixed) and English variant of every service. */
export const entries: EntryGenerator = () => [
	...SERVICES.map((s) => ({ slug: s.slug })),
	...SERVICES.map((s) => ({ lang: 'en', slug: s.slug }))
];

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	const service = getService(params.slug);
	if (!service) error(404, 'Service not found');

	const agency = getAgency(service.agency);
	const path = `/services/${service.slug}`;
	const url = localizeHref(path, locale);
	const name = L(service.name, locale);
	const description = L(service.summary, locale);

	return {
		service,
		agency: agency
			? { slug: agency.slug, name: agency.name, abbr: agency.abbr, ministry: agency.ministry }
			: null,
		categories: service.categories
			.map((slug) => getCategory(slug))
			.filter((c) => Boolean(c))
			.map((c) => ({ slug: c!.slug, name: c!.name, icon: c!.icon })),
		related: relatedServices(service).map(toServiceSummary),
		guides: guidesForService(service.slug).map(toGuideSummary),
		toc: headings(service.body, locale),
		jsonld: graph([
			organizationNode(locale),
			webPageNode({
				url,
				name,
				description,
				locale,
				updated: service.updated,
				image: `/og/services/${service.slug}.png`
			}),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{
					name: locale === 'th' ? 'บริการภาครัฐ' : 'Services',
					url: localizeHref('/services', locale)
				},
				{ name: L(service.shortName, locale), url }
			]),
			governmentServiceNode(service, agency, locale),
			howToNode(
				locale === 'th'
					? `วิธีใช้ ${L(service.shortName, 'th')}`
					: `How to use ${L(service.shortName, 'en')}`,
				service.steps,
				locale,
				path
			),
			faqNode(service.faq, locale)
		])
	};
};
