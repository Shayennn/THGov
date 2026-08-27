import type { PageServerLoad } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import { AUDIT_ROWS, AUDIT_COUNTS, AUDIT_TOTAL, AUDIT_DATE } from '$lib/content/audit';
import { SERVICES } from '$lib/content';
import { graph, webPageNode, breadcrumbNode, organizationNode } from '$lib/seo/jsonld';

const TITLE = {
	th: 'รายงานการเข้าถึงเว็บไซต์ภาครัฐไทยโดยเครื่องมือค้นหา',
	en: 'How discoverable are Thai government websites? An access audit'
};
const DESC = {
	th: `ผลตรวจสอบไฟล์ robots.txt และการตอบสนองต่อบอตของเว็บไซต์ภาครัฐไทย ${AUDIT_TOTAL} โดเมน พบเว็บไซต์ที่ปิดกั้นเครื่องมือค้นหาทั้งเว็บไซต์ พร้อมหลักฐานและวิธีตรวจสอบซ้ำได้`,
	en: `An audit of robots.txt and crawler responses across ${AUDIT_TOTAL} Thai government domains, identifying sites that block search engines entirely — with the evidence and a method anyone can reproduce.`
};

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	const url = localizeHref('/robots-report', locale);

	// The table only renders host + status, so the verbose robots.txt snippets
	// are sent for the evidence cards alone rather than all 245 rows.
	const rows = AUDIT_ROWS.map((r) => ({
		host: r.host,
		verdict: r.verdict,
		kind: r.kind,
		robotsStatus: r.robotsStatus,
		homeStatus: r.homeStatus
	}));

	const evidence = AUDIT_ROWS.filter((r) => r.verdict === 'blocked').map((r) => ({
		host: r.host,
		verdict: r.verdict,
		snippet: r.snippet
	}));

	return {
		title: L(TITLE, locale),
		description: L(DESC, locale),
		counts: AUDIT_COUNTS,
		total: AUDIT_TOTAL,
		date: AUDIT_DATE,
		rows,
		evidence,
		uaGuardCount: AUDIT_ROWS.filter((r) => r.kind === 'ua-spoof-guard').length,
		blanketCount: AUDIT_ROWS.filter((r) => r.kind === 'blanket-403').length,
		serviceByHost: Object.fromEntries(SERVICES.map((s) => [s.crawl.host, s.slug])),
		jsonld: graph([
			organizationNode(locale),
			webPageNode({ url, name: L(TITLE, locale), description: L(DESC, locale), locale, updated: AUDIT_DATE }),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{ name: L(TITLE, locale), url }
			]),
			{
				'@type': 'Dataset',
				name: L(TITLE, locale),
				description: L(DESC, locale),
				license: 'https://creativecommons.org/licenses/by/4.0/',
				dateModified: AUDIT_DATE,
				isAccessibleForFree: true,
				variableMeasured: [
					'robots.txt directives',
					'HTTP status for Googlebot user-agent',
					'HTTP status for browser user-agent'
				]
			}
		])
	};
};
