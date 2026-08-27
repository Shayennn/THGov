import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

/** The THGov mark: a gradient rounded square with an abstract "signpost" glyph. */
function markSvg({ padding = 0, background = null } = {}) {
	const s = 512;
	const inset = padding;
	const size = s - inset * 2;
	const r = Math.round(size * 0.28);
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">
	<defs>
		<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0%" stop-color="#F05223"/>
			<stop offset="100%" stop-color="#EE9B20"/>
		</linearGradient>
	</defs>
	${background ? `<rect width="${s}" height="${s}" fill="${background}"/>` : ''}
	<rect x="${inset}" y="${inset}" width="${size}" height="${size}" rx="${r}" fill="url(#g)"/>
	<g transform="translate(${inset},${inset}) scale(${size / 512})">
		<circle cx="256" cy="136" r="34" fill="#fff"/>
		<path d="M144 208h224M256 208v190" stroke="#fff" stroke-width="46" stroke-linecap="round" fill="none"/>
	</g>
</svg>`;
}

function toPng(svg, width) {
	return new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();
}

/** Minimal ICO container wrapping a single PNG frame. */
function pngToIco(png, size) {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0);
	header.writeUInt16LE(1, 2);
	header.writeUInt16LE(1, 4);

	const entry = Buffer.alloc(16);
	entry.writeUInt8(size >= 256 ? 0 : size, 0);
	entry.writeUInt8(size >= 256 ? 0 : size, 1);
	entry.writeUInt8(0, 2);
	entry.writeUInt8(0, 3);
	entry.writeUInt16LE(1, 4);
	entry.writeUInt16LE(32, 6);
	entry.writeUInt32LE(png.length, 8);
	entry.writeUInt32LE(22, 12);

	return Buffer.concat([header, entry, png]);
}

export function generateIcons(staticDir) {
	const iconsDir = path.join(staticDir, 'icons');
	fs.mkdirSync(iconsDir, { recursive: true });

	const plain = markSvg();
	// Maskable icons need a safe zone: the platform may crop to a circle.
	const maskable = markSvg({ padding: 64, background: '#0b0820' });

	fs.writeFileSync(path.join(staticDir, 'favicon.svg'), plain);
	fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), toPng(plain, 192));
	fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), toPng(plain, 512));
	fs.writeFileSync(path.join(iconsDir, 'icon-maskable-512.png'), toPng(maskable, 512));
	fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.png'), toPng(markSvg({ padding: 26, background: '#ffffff' }), 180));
	fs.writeFileSync(path.join(staticDir, 'favicon.ico'), pngToIco(toPng(plain, 32), 32));

	return 6;
}
