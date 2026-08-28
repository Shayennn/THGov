<script lang="ts">
	import Logo from './Logo.svelte';
	import Icon from './Icon.svelte';
	import { t, href, lc } from '$lib/i18n/t';
	import { currentLocale } from '$lib/i18n/t';
	import { formatDate } from '$lib/i18n';
	import { SITE } from '$lib/site';
	import { page } from '$app/state';

	const year = 2026;
	const topCategories = $derived(page.data.footerCategories ?? []);
	const serviceCount = $derived(page.data.stats?.services ?? 0);
</script>

<footer class="colophon no-print">
	<div class="container">
		<div class="top">
			<div class="about">
				<Logo size={34} />
				<p class="tagline">{lc(SITE.tagline)}</p>
				<p class="disclaimer">{t('disclaimer.short')}</p>
				<a class="repo" href={SITE.repo} rel="noopener noreferrer" target="_blank">
					<Icon name="external" size={15} />
					{t('footer.source')}
				</a>
			</div>

			<nav class="col" aria-labelledby="f-explore">
				<h2 id="f-explore">{t('footer.explore')}</h2>
				<a href={href('/services')}>{t('nav.services')}</a>
				<a href={href('/categories')}>{t('nav.categories')}</a>
				<a href={href('/agencies')}>{t('nav.agencies')}</a>
				<a href={href('/guides')}>{t('nav.guides')}</a>
				<a href={href('/robots-report')}>{t('nav.report')}</a>
				<a href={href('/search')}>{t('nav.search')}</a>
			</nav>

			<nav class="col" aria-labelledby="f-cats">
				<h2 id="f-cats">{t('nav.categories')}</h2>
				{#each topCategories as c (c.slug)}
					<a href={href(`/categories/${c.slug}`)}>{lc(c.name)}</a>
				{/each}
			</nav>

			<nav class="col" aria-labelledby="f-legal">
				<h2 id="f-legal">{t('footer.legal')}</h2>
				<a href={href('/about')}>{t('footer.about')}</a>
				<a href={href('/privacy')}>{t('footer.privacy')}</a>
				<a href={href('/terms')}>{t('footer.terms')}</a>
				<a href={href('/accessibility')}>{t('footer.accessibility')}</a>
			</nav>
		</div>

		<p class="notice">{t('disclaimer.long')}</p>

		<div class="bottom">
			<p>
				&copy; {year} ThaiGov.co · {t('footer.rights')}
			</p>
			<p class="meta">
				{t('footer.updated')}: {formatDate(SITE.lastAudit, currentLocale())} ·
				{serviceCount}
				{t('label.services')}
			</p>
		</div>
	</div>
</footer>

<style>
	.colophon {
		margin-top: auto;
		padding-block: clamp(2.5rem, 6vw, 4.5rem) 2rem;
		background: var(--bg-alt);
		border-top: 1px solid var(--line);
		font-size: var(--fs-sm);
	}
	.top {
		display: grid;
		gap: clamp(1.75rem, 4vw, 3rem);
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr));
	}
	.about {
		grid-column: span 1;
		max-width: 26rem;
	}
	.tagline {
		margin-top: 0.9rem;
		color: var(--text-muted);
		line-height: 1.65;
	}
	.disclaimer {
		margin-top: 0.7rem;
		color: var(--text-faint);
		font-size: var(--fs-xs);
		line-height: 1.6;
	}
	.repo {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-top: 0.9rem;
		color: var(--text-muted);
		text-decoration: none;
	}
	.repo:hover {
		color: var(--brand);
	}
	.col {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}
	.col h2 {
		font-size: var(--fs-xs);
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-faint);
		margin-bottom: 0.3rem;
	}
	.col a {
		color: var(--text-muted);
		text-decoration: none;
		width: fit-content;
	}
	.col a:hover {
		color: var(--brand);
	}
	.notice {
		margin-top: clamp(2rem, 4vw, 3rem);
		padding: 1rem 1.15rem;
		border: 1px solid var(--line);
		border-left: 3px solid var(--brand);
		border-radius: var(--r);
		background: var(--surface);
		color: var(--text-muted);
		font-size: var(--fs-xs);
		line-height: 1.7;
	}
	.bottom {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.5rem;
		justify-content: space-between;
		margin-top: 1.75rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--line);
		color: var(--text-faint);
		font-size: var(--fs-xs);
	}
	.meta {
		text-align: end;
	}
	@media (min-width: 60rem) {
		.top {
			grid-template-columns: 1.6fr 1fr 1fr 1fr;
		}
	}
</style>
