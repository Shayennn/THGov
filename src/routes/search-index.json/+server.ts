import type { RequestHandler } from './$types';
import { SERVICES, GUIDES, getAgency, getCategory } from '$lib/content';
import { L, LOCALES } from '$lib/i18n';

export const prerender = true;

/**
 * A deliberately small index (no body prose) so the search page stays fast.
 * Regenerated automatically whenever a content file is added.
 */
export const GET: RequestHandler = async () => {
	const services = SERVICES.map((s) => {
		const agency = getAgency(s.agency);
		return {
			kind: 'service' as const,
			slug: s.slug,
			path: `/services/${s.slug}`,
			verdict: s.crawl.verdict,
			host: (() => {
				try {
					return new URL(s.url).host;
				} catch {
					return '';
				}
			})(),
			categories: s.categories,
			th: {
				title: L(s.shortName, 'th'),
				full: L(s.name, 'th'),
				summary: L(s.summary, 'th'),
				agency: agency ? L(agency.name, 'th') : '',
				agencyAbbr: agency ? L(agency.abbr, 'th') : '',
				cats: s.categories.map((c) => L(getCategory(c)?.name, 'th')).filter(Boolean),
				keywords: s.keywords.th
			},
			en: {
				title: L(s.shortName, 'en'),
				full: L(s.name, 'en'),
				summary: L(s.summary, 'en'),
				agency: agency ? L(agency.name, 'en') : '',
				agencyAbbr: agency ? L(agency.abbr, 'en') : '',
				cats: s.categories.map((c) => L(getCategory(c)?.name, 'en')).filter(Boolean),
				keywords: s.keywords.en
			}
		};
	});

	const guides = GUIDES.map((g) => ({
		kind: 'guide' as const,
		slug: g.slug,
		path: `/guides/${g.slug}`,
		verdict: 'allowed' as const,
		host: '',
		categories: [] as string[],
		th: {
			title: L(g.title, 'th'),
			full: L(g.title, 'th'),
			summary: L(g.summary, 'th'),
			agency: '',
			agencyAbbr: '',
			cats: [] as string[],
			keywords: g.keywords.th
		},
		en: {
			title: L(g.title, 'en'),
			full: L(g.title, 'en'),
			summary: L(g.summary, 'en'),
			agency: '',
			agencyAbbr: '',
			cats: [] as string[],
			keywords: g.keywords.en
		}
	}));

	return new Response(JSON.stringify({ locales: LOCALES, items: [...services, ...guides] }), {
		headers: {
			'content-type': 'application/json; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};
