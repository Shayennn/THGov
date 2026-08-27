import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { markSvg } from './mark.mjs';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const FONT_DIR = path.join(ROOT, 'build-assets/fonts');

const fonts = [
	{ name: 'Prompt', data: fs.readFileSync(path.join(FONT_DIR, 'Prompt-Regular.ttf')), weight: 400, style: 'normal' },
	{ name: 'Prompt', data: fs.readFileSync(path.join(FONT_DIR, 'Prompt-SemiBold.ttf')), weight: 600, style: 'normal' }
];

/**
 * Satori draws no SVG of its own, so the mark rides in as an image. The data
 * URI has to be percent-encoded: a raw '#' would terminate it early.
 */
const MARK_DATA_URI = `data:image/svg+xml,${encodeURIComponent(markSvg({ size: 52 }))}`;

const W = 1200;
const H = 630;

/**
 * Thai has no spaces between words, so the layout engine will break a line at an
 * arbitrary character. Pre-wrapping ourselves keeps titles readable: break on
 * spaces where they exist, otherwise fall back to a character budget.
 */
function wrap(text, maxChars, maxLines) {
	const words = String(text).split(' ');
	const lines = [];
	let line = '';

	const pushChunked = (chunk) => {
		let rest = chunk;
		while (rest.length > maxChars) {
			lines.push(rest.slice(0, maxChars));
			rest = rest.slice(maxChars);
		}
		return rest;
	};

	for (const word of words) {
		const candidate = line ? `${line} ${word}` : word;
		if (candidate.length <= maxChars) {
			line = candidate;
			continue;
		}
		if (line) lines.push(line);
		line = word.length > maxChars ? pushChunked(word) : word;
	}
	if (line) lines.push(line);

	if (lines.length > maxLines) {
		const kept = lines.slice(0, maxLines);
		kept[maxLines - 1] = kept[maxLines - 1].replace(/\s+\S*$/, '') + '…';
		return kept;
	}
	return lines;
}

const el = (type, style, children) => ({ type, props: { style, children } });
const text = (value, style) => el('div', { display: 'flex', ...style }, value);
// Satori reads src/width/height off props, not off style, so images cannot go
// through `el`.
const img = (src, size) => ({ type: 'img', props: { src, width: size, height: size } });

const STATUS_COLOR = {
	blocked: '#ff7b83',
	'waf-blocked': '#ffb03f',
	partial: '#ffb03f',
	allowed: '#4bd6ab',
	none: '#a6a3c4',
	unknown: '#a6a3c4'
};

function card({ eyebrow, title, subtitle, badge, badgeColor }) {
	const lines = wrap(title, title.length > 60 ? 34 : 30, 3);
	const size = lines.length >= 3 ? 58 : lines.length === 2 ? 66 : 74;

	return el(
		'div',
		{
			width: `${W}px`,
			height: `${H}px`,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			padding: '68px 76px',
			background: '#0b0820',
			backgroundImage:
				'radial-gradient(900px 520px at 92% -12%, rgba(240,82,35,0.34), transparent 62%), radial-gradient(760px 480px at -8% 108%, rgba(16,115,184,0.30), transparent 62%)',
			color: '#f6f5ff',
			fontFamily: 'Prompt'
		},
		[
			// header row: mark + wordmark, optional status badge
			el('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, [
				el('div', { display: 'flex', alignItems: 'center', gap: '18px' }, [
					img(MARK_DATA_URI, 52),
					text('THGov', { fontSize: '31px', fontWeight: 600, letterSpacing: '-0.01em' })
				]),
				badge
					? el(
							'div',
							{
								display: 'flex',
								padding: '10px 22px',
								borderRadius: '999px',
								border: `2px solid ${badgeColor || '#ffb03f'}`,
								color: badgeColor || '#ffb03f',
								fontSize: '24px',
								fontWeight: 600
							},
							badge
						)
					: el('div', { display: 'flex' }, '')
			]),

			// body
			el('div', { display: 'flex', flexDirection: 'column' }, [
				eyebrow
					? text(eyebrow, {
							fontSize: '26px',
							color: '#ee9b20',
							fontWeight: 600,
							letterSpacing: '0.04em',
							marginBottom: '20px'
						})
					: el('div', { display: 'flex' }, ''),
				el(
					'div',
					{ display: 'flex', flexDirection: 'column' },
					lines.map((l) =>
						text(l, { fontSize: `${size}px`, fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.015em' })
					)
				)
			]),

			// footer
			el('div', { display: 'flex', flexDirection: 'column', gap: '14px' }, [
				el('div', {
					display: 'flex',
					width: '110px',
					height: '6px',
					borderRadius: '999px',
					background: 'linear-gradient(90deg, #f05223 0%, #ee9b20 100%)'
				}),
				text(subtitle || 'สารบัญบริการภาครัฐไทย · Thai Government Services Directory', {
					fontSize: '27px',
					color: '#a6a3c4',
					lineHeight: 1.45
				})
			])
		]
	);
}

export async function renderOg(spec, outPath) {
	const svg = await satori(card(spec), { width: W, height: H, fonts });
	const png = new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng();
	fs.mkdirSync(path.dirname(outPath), { recursive: true });
	fs.writeFileSync(outPath, png);
	return png.length;
}

export { STATUS_COLOR, wrap };
