<script lang="ts">
	/** Ambient gradient mesh + fine grid. Purely decorative; hidden in high-contrast mode. */
	let { variant = 'default' }: { variant?: 'default' | 'deep' } = $props();
</script>

<div class="mesh" class:deep={variant === 'deep'} aria-hidden="true">
	<span class="blob b1"></span>
	<span class="blob b2"></span>
	<span class="blob b3"></span>
	<span class="grid"></span>
</div>

<style>
	.mesh {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
		z-index: 0;
	}
	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(70px);
		opacity: 0.9;
	}
	.b1 {
		width: 46vw;
		height: 46vw;
		max-width: 620px;
		max-height: 620px;
		top: -18%;
		right: -8%;
		background: var(--mesh-1);
	}
	.b2 {
		width: 38vw;
		height: 38vw;
		max-width: 520px;
		max-height: 520px;
		bottom: -22%;
		left: -10%;
		background: var(--mesh-3);
	}
	.b3 {
		width: 30vw;
		height: 30vw;
		max-width: 420px;
		max-height: 420px;
		top: 28%;
		left: 42%;
		background: var(--mesh-2);
	}
	.grid {
		position: absolute;
		inset: 0;
		background-image: linear-gradient(var(--line) 1px, transparent 1px),
			linear-gradient(90deg, var(--line) 1px, transparent 1px);
		background-size: 64px 64px;
		opacity: 0.4;
		mask-image: radial-gradient(ellipse 90% 70% at 50% 20%, #000 20%, transparent 78%);
		-webkit-mask-image: radial-gradient(ellipse 90% 70% at 50% 20%, #000 20%, transparent 78%);
	}
	.deep .grid {
		background-size: 40px 40px;
		opacity: 0.28;
	}
	:global(html.color-mode-contrast) .mesh {
		display: none;
	}
</style>
