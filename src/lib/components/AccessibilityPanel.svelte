<script lang="ts">
	import Icon from './Icon.svelte';
	import { t } from '$lib/i18n/t';

	type Size = 'sm' | 'md' | 'lg';
	type Mode = 'light' | 'dark' | 'contrast';

	let open = $state(false);
	let size = $state<Size>('md');
	let mode = $state<Mode>('light');
	let panel = $state<HTMLDivElement | null>(null);
	let trigger = $state<HTMLButtonElement | null>(null);

	$effect(() => {
		// Read what the pre-paint script in app.html already applied.
		const d = document.documentElement;
		const stored = localStorage.getItem('thgov:fontSize') as Size | null;
		size = stored && ['sm', 'md', 'lg'].includes(stored) ? stored : 'md';
		mode = d.classList.contains('color-mode-contrast')
			? 'contrast'
			: d.classList.contains('color-mode-dark')
				? 'dark'
				: 'light';
	});

	function applySize(next: Size) {
		size = next;
		const d = document.documentElement;
		d.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
		d.classList.add(`text-size-${next}`);
		try {
			localStorage.setItem('thgov:fontSize', next);
		} catch {
			/* storage blocked — the change still applies for this page view */
		}
	}

	function applyMode(next: Mode) {
		mode = next;
		const d = document.documentElement;
		d.classList.remove('color-mode-dark', 'color-mode-contrast');
		if (next === 'dark') d.classList.add('color-mode-dark');
		if (next === 'contrast') d.classList.add('color-mode-contrast');
		try {
			localStorage.setItem('thgov:colorMode', next);
		} catch {
			/* storage blocked */
		}
	}

	function reset() {
		applySize('md');
		applyMode('light');
		try {
			localStorage.removeItem('thgov:fontSize');
			localStorage.removeItem('thgov:colorMode');
		} catch {
			/* storage blocked */
		}
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && open) {
			open = false;
			trigger?.focus();
		}
	}

	function onPointerDown(e: PointerEvent) {
		if (!open) return;
		const target = e.target as Node;
		if (panel?.contains(target) || trigger?.contains(target)) return;
		open = false;
	}
</script>

<svelte:window on:keydown={onKeydown} on:pointerdown={onPointerDown} />

<div class="a11y">
	<button
		bind:this={trigger}
		class="trigger"
		type="button"
		aria-expanded={open}
		aria-controls="a11y-panel"
		onclick={() => (open = !open)}
	>
		<Icon name="text" size={17} />
		<span class="visually-hidden">{t('a11y.open')}</span>
	</button>

	{#if open}
		<div class="panel" id="a11y-panel" bind:this={panel}>
			<h2 class="title">{t('a11y.title')}</h2>

			<fieldset>
				<legend>{t('a11y.fontSize')}</legend>
				<div class="segmented" role="group">
					<button
						type="button"
						class:active={size === 'sm'}
						aria-pressed={size === 'sm'}
						onclick={() => applySize('sm')}>{t('a11y.fontSm')}</button
					>
					<button
						type="button"
						class:active={size === 'md'}
						aria-pressed={size === 'md'}
						onclick={() => applySize('md')}>{t('a11y.fontMd')}</button
					>
					<button
						type="button"
						class:active={size === 'lg'}
						aria-pressed={size === 'lg'}
						onclick={() => applySize('lg')}>{t('a11y.fontLg')}</button
					>
				</div>
			</fieldset>

			<fieldset>
				<legend>{t('a11y.colorMode')}</legend>
				<div class="segmented" role="group">
					<button
						type="button"
						class:active={mode === 'light'}
						aria-pressed={mode === 'light'}
						onclick={() => applyMode('light')}
					>
						<Icon name="sun" size={15} />{t('a11y.modeLight')}
					</button>
					<button
						type="button"
						class:active={mode === 'dark'}
						aria-pressed={mode === 'dark'}
						onclick={() => applyMode('dark')}
					>
						<Icon name="moon" size={15} />{t('a11y.modeDark')}
					</button>
					<button
						type="button"
						class:active={mode === 'contrast'}
						aria-pressed={mode === 'contrast'}
						onclick={() => applyMode('contrast')}
					>
						<Icon name="contrast" size={15} />{t('a11y.modeContrast')}
					</button>
				</div>
			</fieldset>

			<p class="note">{t('a11y.note')}</p>
			<button type="button" class="reset" onclick={reset}>{t('a11y.reset')}</button>
		</div>
	{/if}
</div>

<style>
	.a11y {
		position: relative;
	}
	.trigger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.35rem;
		height: 2.35rem;
		border-radius: var(--r-pill);
		border: 1px solid var(--line);
		color: var(--text-muted);
		background: var(--surface);
		transition: color var(--dur) var(--ease), border-color var(--dur) var(--ease);
	}
	.trigger:hover {
		color: var(--brand);
		border-color: var(--brand);
	}
	.panel {
		position: absolute;
		top: calc(100% + 0.6rem);
		right: 0;
		z-index: 60;
		width: min(19rem, calc(100vw - 2rem));
		padding: 1.1rem;
		background: var(--surface);
		border: 1px solid var(--line);
		border-radius: var(--r-lg);
		box-shadow: var(--sh-lg);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.title {
		font-size: var(--fs-sm);
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text-faint);
	}
	fieldset {
		border: 0;
		padding: 0;
		margin: 0;
	}
	legend {
		font-size: var(--fs-sm);
		font-weight: 500;
		margin-bottom: 0.45rem;
		padding: 0;
	}
	.segmented {
		display: flex;
		gap: 0.3rem;
		padding: 0.25rem;
		background: var(--bg-alt);
		border-radius: var(--r-pill);
	}
	.segmented button {
		flex: 1;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.3rem;
		padding: 0.4rem 0.3rem;
		font-size: var(--fs-xs);
		border-radius: var(--r-pill);
		color: var(--text-muted);
		transition: background-color var(--dur) var(--ease), color var(--dur) var(--ease);
	}
	.segmented button:hover {
		color: var(--text);
	}
	.segmented button.active {
		background: var(--surface);
		color: var(--brand);
		font-weight: 500;
		box-shadow: var(--sh-xs);
	}
	.note {
		font-size: var(--fs-xs);
		color: var(--text-faint);
		line-height: 1.6;
	}
	.reset {
		align-self: flex-start;
		font-size: var(--fs-xs);
		color: var(--text-muted);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}
	.reset:hover {
		color: var(--brand);
	}
	:global(html.color-mode-contrast) .segmented button.active {
		outline: 2px solid var(--brand);
	}
</style>
