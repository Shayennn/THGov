import type { PageServerLoad } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import { ACTIVE_CATEGORIES } from '$lib/content';
import { graph, webPageNode, breadcrumbNode, organizationNode, websiteNode } from '$lib/seo/jsonld';

const TITLE = { th: 'ค้นหาบริการภาครัฐไทย', en: 'Search Thai government services' };
const DESC = {
	th: 'ค้นหาบริการออนไลน์ของหน่วยงานรัฐไทยด้วยคำที่คุณใช้จริง เช่น เช็คค่าไฟ ต่อภาษีรถ ตรวจสอบบริษัท หรือยื่นภาษี แล้วไปยังเว็บไซต์ทางการได้ทันที',
	en: 'Search Thai government online services using everyday words — check a bill, renew road tax, look up a company, file tax — and go straight to the official site.'
};

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	const url = localizeHref('/search', locale);
	return {
		title: L(TITLE, locale),
		description: L(DESC, locale),
		categories: ACTIVE_CATEGORIES.map((c) => ({ slug: c.slug, name: c.name, icon: c.icon })),
		jsonld: graph([
			organizationNode(locale),
			websiteNode(locale),
			webPageNode({ url, name: L(TITLE, locale), description: L(DESC, locale), locale }),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{ name: L(TITLE, locale), url }
			])
		])
	};
};
