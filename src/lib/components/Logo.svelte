<script lang="ts">
	/** Wordmark for THGov itself. Purely typographic plus an abstract mark —
	 *  it deliberately borrows nothing from any government emblem. */
	interface Props {
		size?: number;
		showText?: boolean;
	}
	let { size = 30, showText = true }: Props = $props();
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
			<linearGradient id="thgov-mark" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stop-color="var(--brand)" />
				<stop offset="100%" stop-color="var(--brand-2)" />
			</linearGradient>
		</defs>
		<rect x="1.5" y="1.5" width="29" height="29" rx="9" fill="url(#thgov-mark)" />
		<path
			d="M9 12h14M16 12v11"
			stroke="#fff"
			stroke-width="2.6"
			stroke-linecap="round"
			fill="none"
		/>
		<circle cx="16" cy="8.5" r="1.9" fill="#fff" />
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
	}
	.word strong {
		font-weight: 600;
	}
	:global(html.color-mode-contrast) .mark {
		box-shadow: none;
	}
</style>
