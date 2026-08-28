<script lang="ts">
	import type { Faq } from '$lib/content/types';
	import { lc, t } from '$lib/i18n/t';

	let { faq, title = '' }: { faq: Faq[]; title?: string } = $props();
</script>

{#if faq.length}
	<section class="faq" aria-labelledby="faq-title">
		<h2 id="faq-title">{title || t('label.faq')}</h2>
		<div class="items">
			{#each faq as item, i (i)}
				<details name="thaigov-faq">
					<summary>
						<span>{lc(item.q)}</span>
						<svg viewBox="0 0 24 24" aria-hidden="true" class="chev">
							<path
								d="m6 9 6 6 6-6"
								fill="none"
								stroke="currentColor"
								stroke-width="1.8"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</summary>
					<div class="answer"><p>{lc(item.a)}</p></div>
				</details>
			{/each}
		</div>
	</section>
{/if}

<style>
	.faq h2 {
		font-size: var(--fs-h2);
		margin-bottom: 1.5rem;
	}
	.items {
		border-top: 1px solid var(--line);
	}
	details {
		border-bottom: 1px solid var(--line);
	}
	summary {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.1rem 0.15rem;
		cursor: pointer;
		font-weight: 500;
		font-size: var(--fs-md);
		line-height: 1.55;
		list-style: none;
		transition: color var(--dur) var(--ease);
	}
	summary::-webkit-details-marker {
		display: none;
	}
	summary:hover {
		color: var(--brand);
	}
	.chev {
		flex: none;
		width: 20px;
		height: 20px;
		margin-top: 0.2rem;
		color: var(--text-faint);
		transition: transform var(--dur) var(--ease);
	}
	details[open] .chev {
		transform: rotate(180deg);
		color: var(--brand);
	}
	.answer {
		padding: 0 0.15rem 1.25rem;
	}
	.answer p {
		color: var(--text-muted);
		line-height: 1.8;
		max-width: 68ch;
	}
</style>
