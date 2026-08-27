import type { Block } from './types';
import { L, type Locale } from '$lib/i18n';

/** Stable anchor id for a heading block — shared by the renderer and the ToC. */
export function headingId(block: Extract<Block, { type: 'h2' | 'h3' }>, index: number): string {
	return block.id ?? `s${index + 1}`;
}

export interface Heading {
	id: string;
	level: 2 | 3;
	text: string;
}

export function headings(body: Block[], locale: Locale): Heading[] {
	return body
		.map((b, i) => ({ b, i }))
		.filter(({ b }) => b.type === 'h2' || b.type === 'h3')
		.map(({ b, i }) => {
			const h = b as Extract<Block, { type: 'h2' | 'h3' }>;
			return { id: headingId(h, i), level: h.type === 'h2' ? (2 as const) : (3 as const), text: L(h.text, locale) };
		});
}

/** Rough word count used for reading-time estimates and content QA. */
export function wordCount(body: Block[], locale: Locale): number {
	let text = '';
	for (const b of body) {
		if (b.type === 'p' || b.type === 'h2' || b.type === 'h3' || b.type === 'quote') {
			text += ' ' + L(b.text, locale);
		} else if (b.type === 'ul' || b.type === 'ol') {
			text += ' ' + b.items.map((i) => L(i, locale)).join(' ');
		} else if (b.type === 'callout') {
			text += ' ' + L(b.text, locale);
		} else if (b.type === 'table') {
			text += ' ' + b.rows.flat().map((c) => L(c, locale)).join(' ');
		}
	}
	// Thai has no inter-word spaces; approximate by character count instead.
	const thaiChars = (text.match(/[฀-๿]/g) ?? []).length;
	const latinWords = text.split(/\s+/).filter((w) => /[a-zA-Z0-9]/.test(w)).length;
	return Math.round(thaiChars / 5) + latinWords;
}

export function readingMinutes(body: Block[], locale: Locale): number {
	return Math.max(1, Math.round(wordCount(body, locale) / 200));
}
