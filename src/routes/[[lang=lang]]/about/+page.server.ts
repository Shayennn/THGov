import type { PageServerLoad } from './$types';
import { PAGES } from '$lib/content/pages';
import { staticPageData } from '$lib/seo/staticPage';
import { isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	return staticPageData(PAGES.about, locale);
};
