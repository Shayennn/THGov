import type { ParamMatcher } from '@sveltejs/kit';

/**
 * Matches only the non-default locale prefix. Thai lives at the site root, so
 * `/services` is Thai and `/en/services` is English — and `services` itself is
 * never mistaken for a locale segment.
 */
export const match: ParamMatcher = (param) => param === 'en';
