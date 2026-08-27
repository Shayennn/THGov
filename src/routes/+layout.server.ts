import type { LayoutServerLoad } from './$types';
import { ACTIVE_CATEGORIES, STATS } from '$lib/content';

/**
 * Chrome data every page needs. Loading it on the server keeps the content
 * registry out of the client bundle entirely — the footer gets six small
 * objects instead of pulling in every service body.
 */
export const load: LayoutServerLoad = () => ({
	footerCategories: ACTIVE_CATEGORIES.slice(0, 6).map((c) => ({ slug: c.slug, name: c.name })),
	stats: {
		services: STATS.services,
		agencies: STATS.agencies,
		blocked: STATS.blocked,
		guides: STATS.guides,
		categories: STATS.categories
	}
});
