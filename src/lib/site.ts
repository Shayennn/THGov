import type { LocalizedString } from '$lib/i18n';

/**
 * Canonical origin for this build. `scripts/build.mjs` sets PUBLIC_SITE_URL from
 * the branch: production is www.thgov.co, and a preview branch gets its own
 * `<branch>-thgov.phitchawat.workers.dev` origin so canonicals are always
 * self-referential rather than pointing at a site serving different content.
 */
export const SITE_URL: string = (
	import.meta.env.PUBLIC_SITE_URL || 'https://www.thgov.co'
).replace(/\/+$/, '');

/**
 * True on preview deployments. Previews carry the full site while production
 * still serves the holding page, so they must never be indexed — an indexed
 * preview would compete with www.thgov.co for its own content.
 */
export const IS_PREVIEW: boolean = import.meta.env.PUBLIC_IS_PREVIEW === 'true';

export const SITE = {
	url: SITE_URL,
	shortName: 'THGov',
	name: {
		th: 'THGov — สารบัญบริการภาครัฐไทย',
		en: 'THGov — Thai Government Services Directory'
	} satisfies LocalizedString,
	tagline: {
		th: 'ค้นหาบริการออนไลน์ของหน่วยงานรัฐไทย แล้วไปยังเว็บไซต์ทางการโดยตรง',
		en: 'Find Thai government online services, then go straight to the official website'
	} satisfies LocalizedString,
	description: {
		th: 'สารบัญอิสระที่รวบรวมบริการออนไลน์ของหน่วยงานราชการไทยไว้ในที่เดียว พร้อมคำอธิบายภาษาไทย ขั้นตอนการใช้งาน และลิงก์ตรงไปยังเว็บไซต์ทางการ ครอบคลุมบริการที่ค้นหาใน Google ไม่เจอเพราะถูกปิดกั้นด้วย robots.txt',
		en: 'An independent directory of Thai government online services, with plain-language explanations, step-by-step guides and direct links to the official websites — including services that never appear in Google because their robots.txt blocks crawlers.'
	} satisfies LocalizedString,
	/** Editorial contact shown in the footer & JSON-LD. */
	contactEmail: 'hello@thgov.co',
	repo: 'https://github.com/Shayennn/THGov',
	prodUrl: 'https://www.thgov.co',
	locales: ['th', 'en'] as const,
	defaultLocale: 'th' as const,
	themeColor: '#F05223',
	/** Last dataset-wide robots.txt sweep. */
	lastAudit: '2026-08-28'
};

export const OG_DEFAULT = '/og/default.png';
