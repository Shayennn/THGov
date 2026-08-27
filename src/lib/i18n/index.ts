export const LOCALES = ['th', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'th';

/** Every user-visible string in the codebase carries both languages. */
export type LocalizedString = { th: string; en: string };

export function isLocale(v: unknown): v is Locale {
	return typeof v === 'string' && (LOCALES as readonly string[]).includes(v);
}

/** Resolve a localized value, falling back to Thai then English. */
export function L(value: LocalizedString | string | undefined, locale: Locale): string {
	if (value == null) return '';
	if (typeof value === 'string') return value;
	return value[locale] || value.th || value.en || '';
}

/** BCP-47 tag used in <html lang>, hreflang and JSON-LD. */
export const HTML_LANG: Record<Locale, string> = { th: 'th-TH', en: 'en' };

/**
 * Build an href for a locale. Thai lives at the root (`/services`),
 * English is prefixed (`/en/services`). Always returns a trailing-slash-free path.
 */
export function localizeHref(path: string, locale: Locale): string {
	const clean = '/' + String(path ?? '').replace(/^\/+|\/+$/g, '');
	if (locale === DEFAULT_LOCALE) return clean === '/' ? '/' : clean;
	return clean === '/' ? '/en' : `/en${clean}`;
}

/** Strip the locale prefix from a pathname, returning the canonical Thai path. */
export function stripLocale(pathname: string): string {
	const p = pathname.replace(/\/+$/, '') || '/';
	if (p === '/en') return '/';
	if (p.startsWith('/en/')) return p.slice(3);
	return p;
}

/** The `lang` route param value for a locale (undefined = Thai / no prefix). */
export function langParam(locale: Locale): string | undefined {
	return locale === DEFAULT_LOCALE ? undefined : locale;
}

/** Thai-aware number formatting (Arabic numerals — Thai gov standard). */
export function formatNumber(n: number, locale: Locale): string {
	return new Intl.NumberFormat(locale === 'th' ? 'th-TH' : 'en-US').format(n);
}

/** Render an ISO date in the locale's conventional format (Buddhist era for Thai). */
export function formatDate(iso: string, locale: Locale): string {
	const d = new Date(iso + (iso.length === 10 ? 'T00:00:00Z' : ''));
	if (Number.isNaN(d.getTime())) return iso;
	return new Intl.DateTimeFormat(locale === 'th' ? 'th-TH-u-ca-buddhist' : 'en-GB', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	}).format(d);
}
