import { Resvg } from '@resvg/resvg-js';
import { markSvg } from './mark.mjs';
import fs from 'node:fs';
import path from 'node:path';

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
