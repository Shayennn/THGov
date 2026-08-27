import { page } from '$app/state';
import { UI, type UIKey } from './ui';
import { L, DEFAULT_LOCALE, localizeHref, type Locale, type LocalizedString } from './index';

/** The locale of the page currently being rendered. */
export function currentLocale(): Locale {
	return ((page?.data as { locale?: Locale } | undefined)?.locale ?? DEFAULT_LOCALE) as Locale;
}

/** Look up a chrome string, with optional `{name}` interpolation. */
export function t(key: UIKey, vars?: Record<string, string | number>): string {
	let out = L(UI[key], currentLocale());
	if (vars) {
		for (const [k, v] of Object.entries(vars)) {
			out = out.split(`{${k}}`).join(String(v));
		}
	}
	return out;
}

/** Resolve a piece of localized content for the current page locale. */
export function lc(value: LocalizedString | string | undefined): string {
	return L(value, currentLocale());
}

/** Build an internal href in the current locale. */
export function href(path: string): string {
	return localizeHref(path, currentLocale());
}
