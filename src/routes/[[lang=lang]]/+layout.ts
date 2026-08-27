import type { LayoutLoad } from './$types';
import { DEFAULT_LOCALE, isLocale, type Locale } from '$lib/i18n';

export const load: LayoutLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	return { locale };
};
