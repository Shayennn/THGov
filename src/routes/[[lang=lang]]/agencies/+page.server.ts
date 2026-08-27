import type { PageServerLoad } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import { ACTIVE_AGENCIES, servicesForAgency } from '$lib/content';
import { graph, collectionPageNode, breadcrumbNode, itemListNode, organizationNode } from '$lib/seo/jsonld';

const TITLE = { th: 'หน่วยงานภาครัฐไทย', en: 'Thai government agencies' };
const DESC = {
	th: 'รายชื่อหน่วยงานราชการและรัฐวิสาหกิจไทยที่เป็นเจ้าของบริการออนไลน์ในสารบัญนี้ พร้อมสังกัดกระทรวง ขอบเขตงาน และลิงก์ไปยังเว็บไซต์ทางการ',
	en: 'The Thai ministries, departments and state enterprises that own the online services in this directory — with their parent ministry, remit and official website.'
};

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	const url = localizeHref('/agencies', locale);
	return {
		title: L(TITLE, locale),
		description: L(DESC, locale),
		agencies: ACTIVE_AGENCIES.map((a) => ({
			slug: a.slug,
			name: a.name,
			abbr: a.abbr,
			ministry: a.ministry,
			blurb: a.blurb,
			count: servicesForAgency(a.slug).length
		})),
		jsonld: graph([
			organizationNode(locale),
			collectionPageNode({ url, name: L(TITLE, locale), description: L(DESC, locale), locale }),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{ name: L(TITLE, locale), url }
			]),
			itemListNode(
				ACTIVE_AGENCIES.map((a) => ({
					name: L(a.name, locale),
					url: localizeHref(`/agencies/${a.slug}`, locale)
				})),
				L(TITLE, locale)
			)
		])
	};
};
