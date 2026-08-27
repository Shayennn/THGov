<script lang="ts">
	/**
	 * The THGov mark: a magnifying glass held over Thailand — the country as it
	 * really is on a map, not a symbol of one — with a question mark under the
	 * lens, and three dots for the question mark's dot because the confusion
	 * belongs to everyone, not one person. It deliberately borrows nothing from
	 * any government emblem.
	 *
	 * The same geometry lives in `scripts/lib/mark.mjs`, which draws the favicon,
	 * the app icons, the Open Graph cards and the holding page. Change both.
	 */
	interface Props {
		size?: number;
		showText?: boolean;
	}
	let { size = 30, showText = true }: Props = $props();

	/**
	 * Thailand from Natural Earth 1:50m, projected equirectangular with x scaled
	 * by cos(13.5°N) so the proportions are true, simplified to 188 points and
	 * normalised to a 54.36 x 100 box. Placed at height 23 in the 32-unit tile.
	 */
	const THAILAND =
		'M18.1 0.7 L18.2 1.2 L19.4 0.3 L20.7 1.7 L20.8 2.3 L19.9 4.5 L20 5.3 L20.6 5.9 L22.2 6.2 L23.6 5.5 L25.2 5.9 L25.1 7.4 L25.7 9.8 L24.9 12.2 L24.1 13.4 L24.8 14.4 L24.8 15.4 L23.2 19.2 L23.6 19.5 L24.9 19.8 L28.4 17.1 L28.9 16.2 L30.1 15.8 L31.1 15 L34 16.6 L34.8 17.6 L35.7 16.8 L37.3 16.2 L38 14.9 L38.7 14.5 L38.9 13.6 L40.2 13.6 L42.2 14.2 L43.2 14.2 L46.4 18.4 L48.4 20 L48.9 21.1 L48.5 23.9 L49 26.8 L50.5 28.8 L52.8 30 L52.8 31.1 L54.4 32.2 L53.4 35 L53.7 37.1 L53.3 39.9 L50.6 41.9 L50.2 41.7 L50 41 L48.7 40.5 L43.5 41 L40.9 40.6 L38.3 41.2 L36.4 42.5 L35.2 44.5 L34 45.7 L34 46.2 L32.5 46.6 L32.6 48.3 L33.5 50.1 L33.7 52.4 L35.4 54.1 L35.1 55.2 L35.3 56.4 L36.6 59 L34.3 55.6 L34 56.2 L32.7 55.3 L32.1 54.3 L31.9 54.7 L30.6 53.4 L29.3 52.6 L28.6 52.3 L26.8 52.8 L23.2 52.5 L22.9 52.1 L23.6 47.3 L21.2 46.4 L20.8 46.7 L18.8 46.9 L17.4 47.8 L17.2 48.6 L17.9 49.9 L17 52.3 L17.2 55.8 L14.8 60.6 L13.9 64.5 L11.8 68.3 L11.8 72.3 L12.6 74.5 L12.4 75.5 L13.3 75.8 L15.4 75.1 L16.2 75.3 L17.2 80 L18.1 81.1 L18.3 80.6 L19.1 82.2 L20.9 89.2 L20.2 88.9 L19.8 87.1 L19.1 87 L19.4 85.9 L19 85.5 L18.3 85.9 L18.3 86.7 L20.1 89.5 L21.1 89.6 L24 91.7 L25.8 91.4 L27.1 91.7 L29.1 94.3 L31.1 95.9 L29.6 98.7 L28.3 99 L27.5 98.2 L25.5 99 L24.6 100 L23.7 99.1 L24.3 97.8 L24.2 95.9 L23 95.9 L22.2 94.4 L21.4 94.5 L19.5 93.8 L19 92.9 L18.4 93 L18.1 94.5 L15.3 91.6 L15.4 90.1 L14.3 89.3 L14.6 88.4 L13.1 88.3 L12.4 86.6 L11.9 85.9 L11.2 85.9 L11 84.8 L9.3 83.6 L8.7 82.3 L7.9 81.7 L7.4 81.9 L6.9 82.8 L6.5 82.8 L5.7 81.2 L5.7 78.8 L9 68.1 L9.1 66 L11.9 63 L14.7 58.5 L13.7 55.7 L13.4 53.3 L12.1 52 L11.5 50 L11.8 48.6 L11.6 45.4 L10.3 43.1 L7.9 41 L5.7 37.9 L5.5 36.8 L5.4 35.3 L7.8 34.2 L8 29.6 L9.5 28.7 L10 27.5 L9.6 27.1 L8.5 27.7 L7.3 25 L7 23.3 L2.2 17.8 L2.4 16.8 L1.7 14.4 L0.5 14 L0 12.9 L0.9 13 L2.5 12.4 L2.2 10.1 L2.8 8.8 L2.9 6.5 L4.2 4.6 L6.6 5 L10.1 4.4 L11.2 2.2 L12.9 2.3 L13.9 1.9 L13.7 0.4 L15.4 0.7 L16.6 0 L18.1 0.7 Z';

	/**
	 * Both instances on a page (header and footer) need distinct gradient ids,
	 * or the second one references the first one's <defs>.
	 */
	const uid = $props.id();
</script>

<span class="logo">
	<svg
		width={size}
		height={size}
		viewBox="0 0 32 32"
		aria-hidden="true"
		focusable="false"
		class="mark"
	>
		<defs>
			<linearGradient id="thgov-{uid}" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="var(--brand)" />
				<stop offset="100%" stop-color="var(--brand-2)" />
			</linearGradient>
		</defs>
		<rect x="1.5" y="1.5" width="29" height="29" rx="9" fill="url(#thgov-{uid})" />

		<g transform="translate(4.449,4.5) scale(0.23)"><path d={THAILAND} fill="#fff" /></g>

		<!-- The glass is stroked twice: once in the tile's own gradient at a wider
		     width, which cuts a gap out of the coastline underneath, then in white.
		     That keeps the lens readable over the map without a third colour. -->
		<g fill="none" stroke="url(#thgov-{uid})" stroke-linecap="round">
			<circle cx="19.7" cy="14.6" r="6.5" stroke-width="3.8" />
			<path d="M24.3 19.2 L26.63 21.53" stroke-width="4.4" />
		</g>
		<g fill="none" stroke="#fff" stroke-linecap="round">
			<circle cx="19.7" cy="14.6" r="6.5" stroke-width="2" />
			<path d="M24.3 19.2 L26.63 21.53" stroke-width="2.6" />
		</g>

		<g transform="translate(19.7 13.9) scale(0.92)">
			<path
				d="M-2.75 -2.6a2.85 2.85 0 1 1 3.55 2.95 v1.75"
				fill="none"
				stroke="#fff"
				stroke-width="2.065"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</g>
		<g fill="#fff">
			<circle cx="17.8" cy="18.2" r="0.8" />
			<circle cx="19.8" cy="18.2" r="0.8" />
			<circle cx="21.8" cy="18.2" r="0.8" />
		</g>
	</svg>
	{#if showText}
		<span class="word">
			<strong>THGov</strong>
		</span>
	{/if}
</span>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
	}
	.mark {
		flex: none;
		border-radius: 9px;
		box-shadow: var(--sh-glow);
	}
	.word {
		font-size: 1.15rem;
		letter-spacing: -0.02em;
		line-height: 1;
		white-space: nowrap;
		/* Prompt's ascent-to-descent box is taller than its cap height and sits
		   off-centre within it, so centring the *box* against the mark leaves the
		   capitals riding high. Trim the box to cap height and baseline where the
		   browser can, and shift by the same amount where it cannot. */
		transform: translateY(0.023em);
	}
	@supports (text-box: trim-both cap alphabetic) {
		.word {
			text-box: trim-both cap alphabetic;
			transform: none;
		}
	}
	.word strong {
		font-weight: 600;
	}
	:global(html.color-mode-contrast) .mark {
		box-shadow: none;
	}
</style>
