import type { LocalizedString } from '$lib/i18n';

/** How discoverable a site is to search engines, as measured by our own audit. */
export type CrawlVerdict =
	| 'blocked' // robots.txt: User-agent: * → Disallow: /
	| 'waf-blocked' // server answers 403 to crawler user-agents
	| 'partial' // some paths disallowed
	| 'allowed' // fully crawlable
	| 'none' // no robots.txt at all
	| 'unknown';

/** The mechanism behind a verdict — see scripts/audit-robots.mjs. */
export type CrawlKind =
	| 'robots-disallow-all'
	| 'googlebot-exception'
	| 'js-challenge'
	| 'waf-rule'
	| 'origin-403'
	| 'ua-spoof-guard'
	| 'redirect-loop'
	| 'no-robots'
	| 'html-not-robots'
	| 'unreachable'
	| 'partial'
	| 'allowed';

export interface CrawlAudit {
	/** Host we actually requested robots.txt from. */
	host: string;
	verdict: CrawlVerdict;
	/** How the verdict was reached. Populated by `npm run sync:crawl`. */
	kind?: CrawlKind;
	/** HTTP status returned for /robots.txt. */
	status: number | null;
	/** Verbatim excerpt of the relevant robots.txt group, for transparency. */
	snippet?: string;
	checkedAt: string; // ISO date
	note?: LocalizedString;
}

/** Content blocks — the vocabulary every page body is written in. */
export type Block =
	| { type: 'p'; text: LocalizedString }
	| { type: 'h2' | 'h3'; text: LocalizedString; id?: string }
	| { type: 'ul' | 'ol'; items: LocalizedString[] }
	| { type: 'callout'; tone: 'info' | 'warn' | 'success' | 'danger'; title?: LocalizedString; text: LocalizedString }
	| { type: 'table'; caption?: LocalizedString; head: LocalizedString[]; rows: LocalizedString[][] }
	| { type: 'code'; lang?: string; text: string; caption?: LocalizedString }
	| { type: 'quote'; text: LocalizedString; cite?: LocalizedString };

export interface Feature {
	icon: string; // key into the Icon component
	title: LocalizedString;
	text: LocalizedString;
}

export interface Step {
	title: LocalizedString;
	text: LocalizedString;
}

export interface Faq {
	q: LocalizedString;
	a: LocalizedString;
}

export interface Agency {
	slug: string;
	name: LocalizedString;
	abbr: LocalizedString;
	ministry?: LocalizedString;
	site: string;
	blurb: LocalizedString;
}

export interface Category {
	slug: string;
	name: LocalizedString;
	/** Short line used on cards and as the meta description seed. */
	blurb: LocalizedString;
	icon: string;
	/** Longer, page-specific intro so the category page is not thin content. */
	intro: Block[];
}

export interface Service {
	slug: string;
	/** Page H1 / primary entity name. */
	name: LocalizedString;
	/** Short label for cards, breadcrumbs and nav. */
	shortName: LocalizedString;
	/** The official destination we send people to. */
	url: string;
	/** Extra official entry points worth listing. */
	altUrls?: { label: LocalizedString; url: string }[];
	agency: string; // Agency.slug
	categories: string[]; // Category.slug[]
	/** <meta name="description"> — 140–165 chars ideally. */
	summary: LocalizedString;
	/** One-sentence hero deck under the H1. */
	deck: LocalizedString;
	keywords: { th: string[]; en: string[] };
	features: Feature[];
	steps: Step[];
	faq: Faq[];
	body: Block[];
	crawl: CrawlAudit;
	/** Higher = more prominent on the home page. */
	priority: number;
	updated: string; // ISO date
	related?: string[]; // Service.slug[]
}

export interface Guide {
	slug: string;
	title: LocalizedString;
	deck: LocalizedString;
	summary: LocalizedString;
	keywords: { th: string[]; en: string[] };
	/** Services this guide walks through — powers cross-linking both ways. */
	services: string[];
	steps: Step[];
	body: Block[];
	faq: Faq[];
	updated: string;
	minutes: number;
}
