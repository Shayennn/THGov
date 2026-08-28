/**
 * The ThaiGov mark, in one place. `scripts/lib/icons.mjs`, `scripts/lib/og.mjs`
 * and `scripts/lib/coming-soon.mjs` all render from here; the Svelte component
 * `src/lib/components/Logo.svelte` carries the same geometry inline so the
 * header does not need a build step to draw itself. Change both together.
 *
 * What it means: a magnifying glass held over Thailand — the country as it
 * actually is on a map, not a symbol — with a question mark under the lens and
 * three dots for its dot, because the confusion is not one person's.
 * Thailand + looking + confusion + everyone.
 */

/**
 * Thailand's coastline and land borders, from Natural Earth 1:50m, projected
 * equirectangular with the x axis scaled by cos(13.5°N) so the country keeps
 * its true proportions, then simplified (Douglas–Peucker) to 188 points and
 * normalised to a 54.36 x 100 box.
 */
export const THAILAND_PATH =
	'M18.1 0.7 L18.2 1.2 L19.4 0.3 L20.7 1.7 L20.8 2.3 L19.9 4.5 L20 5.3 L20.6 5.9 L22.2 6.2 L23.6 5.5 L25.2 5.9 L25.1 7.4 L25.7 9.8 L24.9 12.2 L24.1 13.4 L24.8 14.4 L24.8 15.4 L23.2 19.2 L23.6 19.5 L24.9 19.8 L28.4 17.1 L28.9 16.2 L30.1 15.8 L31.1 15 L34 16.6 L34.8 17.6 L35.7 16.8 L37.3 16.2 L38 14.9 L38.7 14.5 L38.9 13.6 L40.2 13.6 L42.2 14.2 L43.2 14.2 L46.4 18.4 L48.4 20 L48.9 21.1 L48.5 23.9 L49 26.8 L50.5 28.8 L52.8 30 L52.8 31.1 L54.4 32.2 L53.4 35 L53.7 37.1 L53.3 39.9 L50.6 41.9 L50.2 41.7 L50 41 L48.7 40.5 L43.5 41 L40.9 40.6 L38.3 41.2 L36.4 42.5 L35.2 44.5 L34 45.7 L34 46.2 L32.5 46.6 L32.6 48.3 L33.5 50.1 L33.7 52.4 L35.4 54.1 L35.1 55.2 L35.3 56.4 L36.6 59 L34.3 55.6 L34 56.2 L32.7 55.3 L32.1 54.3 L31.9 54.7 L30.6 53.4 L29.3 52.6 L28.6 52.3 L26.8 52.8 L23.2 52.5 L22.9 52.1 L23.6 47.3 L21.2 46.4 L20.8 46.7 L18.8 46.9 L17.4 47.8 L17.2 48.6 L17.9 49.9 L17 52.3 L17.2 55.8 L14.8 60.6 L13.9 64.5 L11.8 68.3 L11.8 72.3 L12.6 74.5 L12.4 75.5 L13.3 75.8 L15.4 75.1 L16.2 75.3 L17.2 80 L18.1 81.1 L18.3 80.6 L19.1 82.2 L20.9 89.2 L20.2 88.9 L19.8 87.1 L19.1 87 L19.4 85.9 L19 85.5 L18.3 85.9 L18.3 86.7 L20.1 89.5 L21.1 89.6 L24 91.7 L25.8 91.4 L27.1 91.7 L29.1 94.3 L31.1 95.9 L29.6 98.7 L28.3 99 L27.5 98.2 L25.5 99 L24.6 100 L23.7 99.1 L24.3 97.8 L24.2 95.9 L23 95.9 L22.2 94.4 L21.4 94.5 L19.5 93.8 L19 92.9 L18.4 93 L18.1 94.5 L15.3 91.6 L15.4 90.1 L14.3 89.3 L14.6 88.4 L13.1 88.3 L12.4 86.6 L11.9 85.9 L11.2 85.9 L11 84.8 L9.3 83.6 L8.7 82.3 L7.9 81.7 L7.4 81.9 L6.9 82.8 L6.5 82.8 L5.7 81.2 L5.7 78.8 L9 68.1 L9.1 66 L11.9 63 L14.7 58.5 L13.7 55.7 L13.4 53.3 L12.1 52 L11.5 50 L11.8 48.6 L11.6 45.4 L10.3 43.1 L7.9 41 L5.7 37.9 L5.5 36.8 L5.4 35.3 L7.8 34.2 L8 29.6 L9.5 28.7 L10 27.5 L9.6 27.1 L8.5 27.7 L7.3 25 L7 23.3 L2.2 17.8 L2.4 16.8 L1.7 14.4 L0.5 14 L0 12.9 L0.9 13 L2.5 12.4 L2.2 10.1 L2.8 8.8 L2.9 6.5 L4.2 4.6 L6.6 5 L10.1 4.4 L11.2 2.2 L12.9 2.3 L13.9 1.9 L13.7 0.4 L15.4 0.7 L16.6 0 L18.1 0.7 Z';

/** The path's own coordinate space, before it is placed in the 32x32 tile. */
export const THAILAND_BOX = { width: 54.36, height: 100 };

/** Brand gradient stops, matching --brand / --brand-2 in src/app.css. */
export const BRAND = { from: '#F05223', to: '#EE9B20' };

/**
 * Geometry of the mark inside a 32x32 tile. The glass is drawn twice: once in
 * the tile's own gradient at a wider stroke, which knocks a gap out of the map
 * underneath, then again in white. That keeps the lens legible where it
 * crosses the coastline without introducing a third colour.
 */
export const MARK = {
	tile: { x: 1.5, y: 1.5, size: 29, radius: 9 },
	map: { height: 23, cx: 10.7, cy: 16 },
	lens: { cx: 19.7, cy: 14.6, r: 7.1, ring: 2, gap: 0.9 },
	// Anchored on the lens edge at 45 degrees, so it follows the lens radius.
	handle: { from: [24.72, 19.62], to: [27.05, 21.95], width: 2.6 },
	// Sits low in the lens on purpose: the bowl of the question mark reaches
	// further above its origin than the stem reaches below, so an origin on the
	// lens centre would push the bowl into the ring.
	query: { cx: 19.7, cy: 15.55, scale: 0.88, width: 1.9 },
	dots: { cx: 19.7, cy: 19.45, r: 0.7, gap: 1.85 }
};

const f = (n) => Number(n.toFixed(3));

/** The map, translated and scaled into the 32x32 tile. */
export function mapGroup(fill = '#fff') {
	const { height, cx, cy } = MARK.map;
	const s = height / THAILAND_BOX.height;
	const x = cx - (THAILAND_BOX.width * s) / 2;
	const y = cy - height / 2;
	return `<g transform="translate(${f(x)},${f(y)}) scale(${f(s)})"><path d="${THAILAND_PATH}" fill="${fill}"/></g>`;
}

/** The magnifying glass, its question mark and the three dots. */
export function glassGroup(gradientId) {
	const { lens, handle, query, dots } = MARK;
	const [hx1, hy1] = handle.from;
	const [hx2, hy2] = handle.to;
	const line = `M${hx1} ${hy1} L${hx2} ${hy2}`;
	const stroke = (colour, extra) => `<g fill="none" stroke="${colour}" stroke-linecap="round">
		<circle cx="${lens.cx}" cy="${lens.cy}" r="${lens.r}" stroke-width="${f(lens.ring + extra)}"/>
		<path d="${line}" stroke-width="${f(handle.width + extra)}"/>
	</g>`;
	const dot = (i) =>
		`<circle cx="${f(dots.cx + (i - 1) * dots.gap)}" cy="${dots.cy}" r="${dots.r}"/>`;

	return `${stroke(`url(#${gradientId})`, lens.gap * 2)}
	${stroke('#fff', 0)}
	<g transform="translate(${query.cx} ${query.cy}) scale(${query.scale})">
		<path d="M-2.75 -2.6a2.85 2.85 0 1 1 3.55 2.95 v1.75" fill="none" stroke="#fff" stroke-width="${f(query.width / query.scale)}" stroke-linecap="round" stroke-linejoin="round"/>
	</g>
	<g fill="#fff">${dot(0)}${dot(1)}${dot(2)}</g>`;
}

/**
 * A standalone SVG of the mark.
 *
 * @param {{ size?: number, padding?: number, background?: string | null }} opts
 *   `padding` insets the tile inside the canvas — maskable icons need that safe
 *   zone because the platform may crop the artwork to a circle.
 */
export function markSvg({ size = 512, padding = 0, background = null } = {}) {
	const id = 'thaigov-mark';
	// The tile is authored in a 32-unit box; padding is expressed in canvas
	// units, so convert it before insetting.
	const inset = (padding / size) * 32;
	const scale = (32 - inset * 2) / 32;
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32">
	<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
		<stop offset="0%" stop-color="${BRAND.from}"/><stop offset="100%" stop-color="${BRAND.to}"/>
	</linearGradient></defs>
	${background ? `<rect width="32" height="32" fill="${background}"/>` : ''}
	<g transform="translate(${f(inset)},${f(inset)}) scale(${f(scale)})">
		<rect x="${MARK.tile.x}" y="${MARK.tile.y}" width="${MARK.tile.size}" height="${MARK.tile.size}" rx="${MARK.tile.radius}" fill="url(#${id})"/>
		${mapGroup()}
		${glassGroup(id)}
	</g>
</svg>`;
}
