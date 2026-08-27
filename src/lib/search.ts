import type { Locale } from '$lib/i18n';

export interface IndexEntryLocale {
	title: string;
	full: string;
	summary: string;
	agency: string;
	agencyAbbr: string;
	cats: string[];
	keywords: string[];
}

export interface IndexEntry {
	kind: 'service' | 'guide';
	slug: string;
	path: string;
	verdict: string;
	host: string;
	categories: string[];
	th: IndexEntryLocale;
	en: IndexEntryLocale;
}

export interface SearchIndex {
	items: IndexEntry[];
}

function normalise(s: string): string {
	return s
		.toLowerCase()
		.normalize('NFC')
		.replace(/[​‌‍]/g, '')
		.trim();
}

/**
 * Scores by field weight. Thai has no word boundaries, so substring matching is
 * the right primitive here — a tokeniser would need a dictionary we do not ship.
 */
export function scoreEntry(entry: IndexEntry, query: string, locale: Locale): number {
	const q = normalise(query);
	if (!q) return 0;
	const l = entry[locale];
	const other = entry[locale === 'th' ? 'en' : 'th'];

	const fields: [string, number][] = [
		[l.title, 12],
		[l.full, 9],
		[l.agencyAbbr, 8],
		[l.keywords.join(' '), 7],
		[l.agency, 5],
		[l.summary, 4],
		[l.cats.join(' '), 3],
		[entry.host, 3],
		[other.title, 2],
		[other.keywords.join(' '), 1]
	];

	let score = 0;
	for (const [text, weight] of fields) {
		if (!text) continue;
		const t = normalise(text);
		if (t === q) score += weight * 3;
		else if (t.startsWith(q)) score += weight * 2;
		else if (t.includes(q)) score += weight;
	}
	return score;
}

export function search(items: IndexEntry[], query: string, locale: Locale): IndexEntry[] {
	const q = query.trim();
	if (!q) return [];
	return items
		.map((entry) => ({ entry, score: scoreEntry(entry, q, locale) }))
		.filter((r) => r.score > 0)
		.sort((a, b) => b.score - a.score || a.entry.slug.localeCompare(b.entry.slug))
		.map((r) => r.entry);
}
