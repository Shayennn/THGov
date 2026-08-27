import type { PageServerLoad } from './$types';
import { L, localizeHref, isLocale, DEFAULT_LOCALE, type Locale } from '$lib/i18n';
import { GUIDES } from '$lib/content';
import { toGuideSummary } from '$lib/content/dto';
import { graph, collectionPageNode, breadcrumbNode, itemListNode, organizationNode } from '$lib/seo/jsonld';

const TITLE = { th: 'คู่มือใช้งานบริการภาครัฐ', en: 'Guides to Thai government services' };
const DESC = {
	th: 'คู่มือทีละขั้นตอนสำหรับเรื่องที่คนไทยต้องทำกับหน่วยงานรัฐบ่อยที่สุด เขียนด้วยภาษาที่เข้าใจง่าย พร้อมบอกว่าต้องเตรียมอะไรและทำที่ไหน',
	en: 'Step-by-step guides to the things people most often need from Thai government agencies — in plain language, with what to prepare and where to do it.'
};

export const load: PageServerLoad = ({ params }) => {
	const locale: Locale = isLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
	const url = localizeHref('/guides', locale);
	return {
		title: L(TITLE, locale),
		description: L(DESC, locale),
		guides: GUIDES.map(toGuideSummary),
		jsonld: graph([
			organizationNode(locale),
			collectionPageNode({ url, name: L(TITLE, locale), description: L(DESC, locale), locale }),
			breadcrumbNode([
				{ name: locale === 'th' ? 'หน้าแรก' : 'Home', url: localizeHref('/', locale) },
				{ name: L(TITLE, locale), url }
			]),
			itemListNode(
				GUIDES.map((g) => ({ name: L(g.title, locale), url: localizeHref(`/guides/${g.slug}`, locale) })),
				L(TITLE, locale)
			)
		])
	};
};
