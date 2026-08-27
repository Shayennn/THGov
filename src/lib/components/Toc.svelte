<script lang="ts">
	import type { Heading } from '$lib/content/blocks';
	import { t } from '$lib/i18n/t';

	let { headings }: { headings: Heading[] } = $props();
	let activeId = $state('');

	$effect(() => {
		if (!headings.length) return;
		const targets = headings
			.map((h) => document.getElementById(h.id))
			.filter((el): el is HTMLElement => Boolean(el));
		if (!targets.length) return;

		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
						break;
					}
				}
			},
			{ rootMargin: '-90px 0px -70% 0px', threshold: 0 }
		);
		targets.forEach((el) => io.observe(el));
		return () => io.disconnect();
	});
</script>

{#if headings.length > 2}
	<nav class="toc no-print" aria-labelledby="toc-title">
		<h2 id="toc-title">{t('label.onThisPage')}</h2>
		<ol>
			{#each headings as h (h.id)}
				<li class:sub={h.level === 3} class:active={activeId === h.id}>
					<a href="#{h.id}" aria-current={activeId === h.id ? 'true' : undefined}>{h.text}</a>
				</li>
			{/each}
		</ol>
	</nav>
{/if}

<style>
	.toc {
		font-size: var(--fs-sm);
	}
	h2 {
		font-size: var(--fs-xs);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-faint);
		margin-bottom: 0.75rem;
	}
	ol {
		list-style: none;
		padding: 0;
		margin: 0;
		border-inline-start: 1px solid var(--line);
	}
	li {
		padding-inline-start: 0.9rem;
		margin-inline-start: -1px;
		border-inline-start: 2px solid transparent;
	}
	li + li {
		margin-top: 0.55rem;
	}
	li.sub {
		padding-inline-start: 1.6rem;
	}
	li.active {
		border-inline-start-color: var(--brand);
	}
	a {
		color: var(--text-muted);
		text-decoration: none;
		line-height: 1.5;
		display: block;
	}
	a:hover {
		color: var(--brand);
	}
	li.active a {
		color: var(--text);
		font-weight: 500;
	}
</style>
