import type { LocalizedString } from '$lib/i18n';

/** Canonical origin. Override at build time with PUBLIC_SITE_URL (no trailing slash). */
export const SITE_URL: string = (
	import.meta.env.PUBLIC_SITE_URL || 'https://thgov.pages.dev'
).replace(/\/+$/, '');

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
	contactEmail: 'hello@thgov.pages.dev',
	repo: 'https://github.com/Shayennn/THGov',
	locales: ['th', 'en'] as const,
	defaultLocale: 'th' as const,
	themeColor: '#F05223',
	/** Last dataset-wide robots.txt sweep. */
	lastAudit: '2026-08-28'
};

export const OG_DEFAULT = '/og/default.png';
