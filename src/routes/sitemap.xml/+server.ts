import type { RequestHandler } from './$types';
import { SERVICES, GUIDES, ACTIVE_CATEGORIES, ACTIVE_AGENCIES } from '$lib/content';
import { PAGE_SLUGS, PAGES } from '$lib/content/pages';
import { AUDIT_DATE } from '$lib/content/audit';
import { LOCALES, localizeHref, HTML_LANG } from '$lib/i18n';
import { SITE_URL, SITE } from '$lib/site';

export const prerender = true;

interface Entry {
	path: string;
	lastmod: string;
	changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
	priority: string;
}

const xmlEscape = (s: string) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: RequestHandler = async () => {
	const entries: Entry[] = [
		{ path: '/', lastmod: SITE.lastAudit, changefreq: 'weekly', priority: '1.0' },
		{ path: '/services', lastmod: SITE.lastAudit, changefreq: 'weekly', priority: '0.9' },
		{ path: '/categories', lastmod: SITE.lastAudit, changefreq: 'monthly', priority: '0.7' },
		{ path: '/agencies', lastmod: SITE.lastAudit, changefreq: 'monthly', priority: '0.7' },
		{ path: '/guides', lastmod: SITE.lastAudit, changefreq: 'weekly', priority: '0.7' },
		{ path: '/robots-report', lastmod: AUDIT_DATE, changefreq: 'monthly', priority: '0.9' },
		{ path: '/search', lastmod: SITE.lastAudit, changefreq: 'monthly', priority: '0.4' },
		...SERVICES.map((s) => ({
			path: `/services/${s.slug}`,
			lastmod: s.updated,
			changefreq: 'monthly' as const,
			priority: s.priority >= 90 ? '0.9' : '0.8'
		})),
		...GUIDES.map((g) => ({
			path: `/guides/${g.slug}`,
			lastmod: g.updated,
			changefreq: 'monthly' as const,
			priority: '0.7'
		})),
		...ACTIVE_CATEGORIES.map((c) => ({
			path: `/categories/${c.slug}`,
			lastmod: SITE.lastAudit,
			changefreq: 'monthly' as const,
			priority: '0.6'
		})),
		...ACTIVE_AGENCIES.map((a) => ({
			path: `/agencies/${a.slug}`,
			lastmod: SITE.lastAudit,
			changefreq: 'monthly' as const,
			priority: '0.6'
		})),
		...PAGE_SLUGS.map((slug) => ({
			path: `/${slug}`,
			lastmod: PAGES[slug].updated,
			changefreq: 'yearly' as const,
			priority: '0.3'
		}))
	];

	// One <url> per locale, each declaring the full set of hreflang alternates.
	const urls = entries
		.flatMap((entry) =>
			LOCALES.map((locale) => {
				const loc = SITE_URL + localizeHref(entry.path, locale);
				const alts = [
					...LOCALES.map(
						(l) =>
							`\t\t<xhtml:link rel="alternate" hreflang="${HTML_LANG[l]}" href="${xmlEscape(SITE_URL + localizeHref(entry.path, l))}" />`
					),
					`\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(SITE_URL + localizeHref(entry.path, 'th'))}" />`
				].join('\n');
				return `\t<url>
\t\t<loc>${xmlEscape(loc)}</loc>
\t\t<lastmod>${entry.lastmod}</lastmod>
\t\t<changefreq>${entry.changefreq}</changefreq>
\t\t<priority>${entry.priority}</priority>
${alts}
\t</url>`;
			})
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'content-type': 'application/xml; charset=utf-8',
			'cache-control': 'public, max-age=3600'
		}
	});
};
