import type { PageServerLoad } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import { ACTIVE_CATEGORIES, servicesInCategory } from '$lib/content';
import { graph, collectionPageNode, breadcrumbNode, itemListNode, organizationNode } from '$lib/seo/jsonld';

const TITLE = { th: 'หมวดหมู่บริการภาครัฐ', en: 'Government service categories' };
const DESC = {
	th: 'เลือกดูบริการออนไลน์ของหน่วยงานรัฐไทยตามหมวดหมู่ ตั้งแต่สาธารณูปโภค ภาษี ธุรกิจ ที่ดิน ไปจนถึงกฎหมายและภัยพิบัติ พร้อมคำอธิบายและลิงก์ทางการ',
	en: 'Browse Thai government online services by category — utilities, tax, business, land, law, hazards and more — each with a plain-language explanation and an official link.'
};

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	const url = localizeHref('/categories', locale);
	return {
		title: L(TITLE, locale),
		description: L(DESC, locale),
		categories: ACTIVE_CATEGORIES.map((c) => ({
			slug: c.slug,
			name: c.name,
			blurb: c.blurb,
			icon: c.icon,
			count: servicesInCategory(c.slug).length
		})),
		jsonld: graph([
			organizationNode(locale),
			collectionPageNode({ url, name: L(TITLE, locale), description: L(DESC, locale), locale }),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{ name: L(TITLE, locale), url }
			]),
			itemListNode(
				ACTIVE_CATEGORIES.map((c) => ({
					name: L(c.name, locale),
					url: localizeHref(`/categories/${c.slug}`, locale)
				})),
				L(TITLE, locale)
			)
		])
	};
};
