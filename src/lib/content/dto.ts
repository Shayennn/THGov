import type { Service, Guide, CrawlVerdict } from './types';
import type { LocalizedString } from '$lib/i18n';
import { getAgency } from './agencies';

/**
 * Listing pages only need a card's worth of each service. Keeping a narrow
 * shape here means index pages serialise ~600 bytes per service instead of the
 * whole article body, which keeps the payload small on the pages people are
 * most likely to land on from search.
 */
export interface ServiceSummary {
	slug: string;
	name: LocalizedString;
	shortName: LocalizedString;
	summary: LocalizedString;
	url: string;
	host: string;
	agency: string;
	agencyAbbr: LocalizedString;
	categories: string[];
	verdict: CrawlVerdict;
	crawlHost: string;
	priority: number;
}

export interface GuideSummary {
	slug: string;
	title: LocalizedString;
	deck: LocalizedString;
	minutes: number;
}

function hostOf(url: string): string {
	try {
		return new URL(url).host;
	} catch {
		return '';
	}
}

export function toServiceSummary(s: Service): ServiceSummary {
	const agency = getAgency(s.agency);
	return {
		slug: s.slug,
		name: s.name,
		shortName: s.shortName,
		summary: s.summary,
		url: s.url,
		host: hostOf(s.url),
		agency: s.agency,
		agencyAbbr: agency?.abbr ?? { th: '', en: '' },
		categories: s.categories,
		verdict: s.crawl.verdict,
		crawlHost: s.crawl.host,
		priority: s.priority
	};
}

export function toGuideSummary(g: Guide): GuideSummary {
	return { slug: g.slug, title: g.title, deck: g.deck, minutes: g.minutes };
}
