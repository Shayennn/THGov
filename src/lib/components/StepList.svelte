<script lang="ts">
	import type { Step } from '$lib/content/types';
	import { lc, t } from '$lib/i18n/t';

	let { steps, title = '' }: { steps: Step[]; title?: string } = $props();
</script>

{#if steps.length}
	<section class="steps" aria-labelledby="steps-title">
		<h2 id="steps-title">{title || t('label.steps')}</h2>
		<ol>
			{#each steps as step, i (i)}
				<li id="step-{i + 1}">
					<span class="num" aria-hidden="true">{i + 1}</span>
					<div>
						<h3>{lc(step.title)}</h3>
						<p>{lc(step.text)}</p>
					</div>
				</li>
			{/each}
		</ol>
	</section>
{/if}

<style>
	.steps h2 {
		font-size: var(--fs-h2);
		margin-bottom: 1.75rem;
	}
	ol {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0;
	}
	li {
		display: flex;
		gap: 1.1rem;
		padding-bottom: 1.6rem;
		position: relative;
		scroll-margin-top: 6rem;
	}
	li:not(:last-child)::before {
		content: '';
		position: absolute;
		inset-inline-start: 1.1rem;
		top: 2.5rem;
		bottom: 0;
		width: 2px;
		background: linear-gradient(var(--line), transparent);
	}
	.num {
		flex: none;
		display: grid;
		place-items: center;
		width: 2.2rem;
		height: 2.2rem;
		border-radius: 50%;
		background: var(--accent-gradient);
		color: #fff;
		font-size: var(--fs-sm);
		font-weight: 600;
		box-shadow: var(--sh-glow);
	}
	h3 {
		font-size: var(--fs-h4);
		font-weight: 600;
		margin-bottom: 0.35rem;
		line-height: 1.4;
	}
	p {
		color: var(--text-muted);
		line-height: 1.78;
		max-width: 64ch;
	}
	:global(html.color-mode-contrast) .num {
		background: var(--brand);
		color: #000;
		box-shadow: none;
	}
</style>
