import type { PageServerLoad } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import { SITE } from '$lib/site';
import { graph, websiteNode, organizationNode, webPageNode, itemListNode } from '$lib/seo/jsonld';
import { SERVICES, BLOCKED_SERVICES, ACTIVE_CATEGORIES, GUIDES } from '$lib/content';
import { toServiceSummary, toGuideSummary } from '$lib/content/dto';
import { AUDIT_TOTAL } from '$lib/content/audit';

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;

	const featured = SERVICES.slice(0, 6);
	const hidden = BLOCKED_SERVICES.slice(0, 4);

	const jsonld = graph([
		organizationNode(locale),
		websiteNode(locale),
		webPageNode({
			url: localizeHref('/', locale),
			name: L(SITE.name, locale),
			description: L(SITE.description, locale),
			locale,
			updated: SITE.lastAudit,
			image: '/og/home.png'
		}),
		itemListNode(
			SERVICES.slice(0, 12).map((s) => ({
				name: L(s.shortName, locale),
				url: localizeHref(`/services/${s.slug}`, locale)
			})),
			locale === 'th' ? 'บริการภาครัฐที่รวบรวมไว้' : 'Indexed government services'
		)
	]);

	return {
		jsonld,
		featured: featured.map(toServiceSummary),
		hidden: hidden.map((s) => ({
			...toServiceSummary(s),
			snippet: s.crawl.snippet ?? ''
		})),
		categories: ACTIVE_CATEGORIES.map((c) => ({
			slug: c.slug,
			name: c.name,
			blurb: c.blurb,
			icon: c.icon
		})),
		guides: GUIDES.slice(0, 3).map(toGuideSummary),
		auditTotal: AUDIT_TOTAL
	};
};
