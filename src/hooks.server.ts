import type { Handle } from '@sveltejs/kit';
import { HTML_LANG, DEFAULT_LOCALE, isLocale } from '$lib/i18n';

/**
 * Stamps the correct `lang` attribute on <html> for every prerendered page.
 * `/en/...` renders as English; everything else is Thai.
 */
export const handle: Handle = async ({ event, resolve }) => {
	const seg = event.url.pathname.split('/')[1];
	const locale = isLocale(seg) ? seg : DEFAULT_LOCALE;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%thgov.lang%', HTML_LANG[locale])
	});
};
