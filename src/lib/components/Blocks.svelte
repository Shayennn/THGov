<script lang="ts">
	import type { Block } from '$lib/content/types';
	import { headingId } from '$lib/content/blocks';
	import { lc } from '$lib/i18n/t';
	import Icon from './Icon.svelte';

	let { body }: { body: Block[] } = $props();

	const calloutIcon: Record<string, string> = {
		info: 'globe',
		warn: 'alert',
		success: 'check',
		danger: 'shield'
	};
</script>

{#each body as block, i (i)}
	{#if block.type === 'p'}
		<p>{lc(block.text)}</p>
	{:else if block.type === 'h2'}
		<h2 id={headingId(block, i)}>{lc(block.text)}</h2>
	{:else if block.type === 'h3'}
		<h3 id={headingId(block, i)}>{lc(block.text)}</h3>
	{:else if block.type === 'ul'}
		<ul>
			{#each block.items as item, j (j)}
				<li>{lc(item)}</li>
			{/each}
		</ul>
	{:else if block.type === 'ol'}
		<ol>
			{#each block.items as item, j (j)}
				<li>{lc(item)}</li>
			{/each}
		</ol>
	{:else if block.type === 'callout'}
		<aside class="callout callout-{block.tone}">
			<Icon name={calloutIcon[block.tone] ?? 'globe'} size={18} class="c-icon" />
			<div>
				{#if block.title}<strong>{lc(block.title)}</strong>{/if}
				<p>{lc(block.text)}</p>
			</div>
		</aside>
	{:else if block.type === 'table'}
		<figure class="table-wrap">
			<div class="scroll-x">
				<table>
					<thead>
						<tr>
							{#each block.head as cell, j (j)}
								<th scope="col">{lc(cell)}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each block.rows as row, r (r)}
							<tr>
								{#each row as cell, c (c)}
									{#if c === 0}
										<th scope="row">{lc(cell)}</th>
									{:else}
										<td>{lc(cell)}</td>
									{/if}
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			{#if block.caption}<figcaption>{lc(block.caption)}</figcaption>{/if}
		</figure>
	{:else if block.type === 'code'}
		<figure class="code-wrap">
			<pre class="scroll-x"><code>{block.text}</code></pre>
			{#if block.caption}<figcaption>{lc(block.caption)}</figcaption>{/if}
		</figure>
	{:else if block.type === 'quote'}
		<blockquote>
			<p>{lc(block.text)}</p>
			{#if block.cite}<cite>{lc(block.cite)}</cite>{/if}
		</blockquote>
	{/if}
{/each}

<style>
	.table-wrap,
	.code-wrap {
		margin-block: 1.6em;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--fs-sm);
		min-width: 34rem;
	}
	th,
	td {
		padding: 0.7rem 0.9rem;
		text-align: start;
		border-bottom: 1px solid var(--line);
		vertical-align: top;
		line-height: 1.6;
	}
	thead th {
		font-weight: 600;
		color: var(--text);
		border-bottom: 2px solid var(--line-strong);
		white-space: nowrap;
	}
	tbody th {
		font-weight: 500;
		color: var(--text);
	}
	tbody td {
		color: var(--text-muted);
	}
	tbody tr:last-child th,
	tbody tr:last-child td {
		border-bottom: 0;
	}
	figcaption {
		margin-top: 0.6rem;
		font-size: var(--fs-xs);
		color: var(--text-faint);
	}
	pre {
		padding: 1rem 1.15rem;
		background: var(--bg-sunken);
		border: 1px solid var(--line);
		border-radius: var(--r);
		font-family: var(--font-mono);
		font-size: var(--fs-sm);
		line-height: 1.65;
		white-space: pre;
	}
	blockquote {
		padding-inline-start: 1.1rem;
		border-inline-start: 3px solid var(--brand);
	}
	blockquote p {
		font-size: var(--fs-lg);
		font-style: italic;
		color: var(--text);
	}
	cite {
		display: block;
		margin-top: 0.5rem;
		font-size: var(--fs-sm);
		font-style: normal;
		color: var(--text-faint);
	}
</style>
