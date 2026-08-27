import type { Service, Guide, CrawlVerdict } from './types';
import { CATEGORIES, CATEGORY_BY_SLUG, getCategory } from './categories';
import { AGENCIES, AGENCY_BY_SLUG, getAgency } from './agencies';

export * from './types';
export { CATEGORIES, CATEGORY_BY_SLUG, getCategory, AGENCIES, AGENCY_BY_SLUG, getAgency };

/**
 * Adding a page is one file: drop `my-service.ts` into `content/services/`
 * exporting `const service: Service`, and it is registered, routed, added to
 * the sitemap, the search index and the OG-image build automatically.
 */
const serviceModules = import.meta.glob<{ service: Service }>('./services/*.ts', {
	eager: true
});
const guideModules = import.meta.glob<{ guide: Guide }>('./guides/*.ts', { eager: true });

function collect<T>(mods: Record<string, unknown>, key: string): T[] {
	return Object.keys(mods)
		.sort()
		.map((path) => (mods[path] as Record<string, T>)[key])
		.filter(Boolean);
}

export const SERVICES: Service[] = collect<Service>(serviceModules, 'service').sort(
	(a, b) => b.priority - a.priority || a.slug.localeCompare(b.slug)
);

export const GUIDES: Guide[] = collect<Guide>(guideModules, 'guide').sort((a, b) =>
	a.slug.localeCompare(b.slug)
);

export const SERVICE_BY_SLUG: Record<string, Service> = Object.fromEntries(
	SERVICES.map((s) => [s.slug, s])
);
export const GUIDE_BY_SLUG: Record<string, Guide> = Object.fromEntries(
	GUIDES.map((g) => [g.slug, g])
);

export function getService(slug: string): Service | undefined {
	return SERVICE_BY_SLUG[slug];
}
export function getGuide(slug: string): Guide | undefined {
	return GUIDE_BY_SLUG[slug];
}

export function servicesInCategory(categorySlug: string): Service[] {
	return SERVICES.filter((s) => s.categories.includes(categorySlug));
}

export function servicesForAgency(agencySlug: string): Service[] {
	return SERVICES.filter((s) => s.agency === agencySlug);
}

export function guidesForService(serviceSlug: string): Guide[] {
	return GUIDES.filter((g) => g.services.includes(serviceSlug));
}

/** Categories that actually have at least one service — never link to an empty page. */
export const ACTIVE_CATEGORIES = CATEGORIES.filter((c) => servicesInCategory(c.slug).length > 0);

/** Agencies that actually own at least one service. */
export const ACTIVE_AGENCIES = AGENCIES.filter((a) => servicesForAgency(a.slug).length > 0);

/** A site is "hard to find" when crawlers are refused outright. */
export const HARD_TO_FIND: CrawlVerdict[] = ['blocked', 'waf-blocked'];

export function isHardToFind(s: Service): boolean {
	return HARD_TO_FIND.includes(s.crawl.verdict);
}

export const BLOCKED_SERVICES: Service[] = SERVICES.filter(isHardToFind);

/**
 * Resolve `related` slugs to real services, filling the gap with same-category
 * neighbours so every page has onward links even before cross-links are curated.
 */
export function relatedServices(s: Service, limit = 3): Service[] {
	const out: Service[] = [];
	const seen = new Set([s.slug]);

	for (const slug of s.related ?? []) {
		const svc = SERVICE_BY_SLUG[slug];
		if (svc && !seen.has(svc.slug)) {
			out.push(svc);
			seen.add(svc.slug);
		}
	}
	if (out.length < limit) {
		for (const svc of SERVICES) {
			if (out.length >= limit) break;
			if (seen.has(svc.slug)) continue;
			if (svc.categories.some((c) => s.categories.includes(c))) {
				out.push(svc);
				seen.add(svc.slug);
			}
		}
	}
	return out.slice(0, limit);
}

export const STATS = {
	get services() {
		return SERVICES.length;
	},
	get agencies() {
		return ACTIVE_AGENCIES.length;
	},
	get blocked() {
		return BLOCKED_SERVICES.length;
	},
	get categories() {
		return ACTIVE_CATEGORIES.length;
	},
	get guides() {
		return GUIDES.length;
	}
};
