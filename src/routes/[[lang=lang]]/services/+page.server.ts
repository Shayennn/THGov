import type { PageServerLoad } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import { SERVICES, ACTIVE_CATEGORIES, HARD_TO_FIND } from '$lib/content';
import { toServiceSummary } from '$lib/content/dto';
import {
	graph,
	collectionPageNode,
	breadcrumbNode,
	itemListNode,
	organizationNode
} from '$lib/seo/jsonld';

const TITLE = { th: 'บริการภาครัฐไทยทั้งหมด', en: 'All Thai government services' };
const DESC = {
	th: 'รวมบริการออนไลน์ของหน่วยงานราชการไทยทั้งหมดที่ ThaiGov.co รวบรวมไว้ พร้อมสถานะการค้นเจอบน Google คำอธิบายภาษาไทย และลิงก์ตรงไปยังเว็บไซต์ทางการ',
	en: 'Every Thai government online service indexed by ThaiGov.co, with its search-engine visibility status, a plain-language explanation and a direct link to the official website.'
};

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	const url = localizeHref('/services', locale);

	return {
		title: L(TITLE, locale),
		description: L(DESC, locale),
		services: SERVICES.map(toServiceSummary),
		categories: ACTIVE_CATEGORIES.map((c) => ({ slug: c.slug, name: c.name })),
		hardToFind: HARD_TO_FIND,
		jsonld: graph([
			organizationNode(locale),
			collectionPageNode({ url, name: L(TITLE, locale), description: L(DESC, locale), locale }),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{ name: L(TITLE, locale), url }
			]),
			itemListNode(
				SERVICES.map((s) => ({
					name: L(s.shortName, locale),
					url: localizeHref(`/services/${s.slug}`, locale)
				})),
				L(TITLE, locale)
			)
		])
	};
};
