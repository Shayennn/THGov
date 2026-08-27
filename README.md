# THGov — สารบัญบริการภาครัฐไทย

An independent, static directory of Thai government online services. It exists
because a surprising number of Thai government systems cannot be found on
Google — some block every crawler in their own `robots.txt`, others refuse
automated requests entirely — so citizens searching for a real service land on
scrapers, lookalike sites and outdated summaries instead.

THGov describes each service in the words people actually search with, in Thai
and English, then links straight to the agency's official site. It collects no
personal data, takes no payments and has no login.

> **THGov is not a government website** and is not affiliated with any agency it
> lists. Every transaction happens on the agency's own site.

## Stack

- **SvelteKit 2 + Svelte 5**, fully prerendered with `@sveltejs/adapter-static`
- **Zero runtime dependencies** — the output is plain HTML, CSS and a small JS bundle
- **Self-hosted [Prompt](https://fonts.google.com/specimen/Prompt)** (SIL OFL 1.1), Thai + Latin subsets only
- Deployed to **Cloudflare Workers** static assets at [www.thgov.co](https://www.thgov.co)

## Getting started

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # full static build into build/
npm run preview      # serve the built output
npm run check        # svelte-check type pass
```

## Build

`npm run build` does everything — Cloudflare Pages needs no extra configuration
beyond the build command and the `build` output directory:

1. Resolves the origin and indexing policy for the branch being built
2. Loads the content registry (via esbuild, so build scripts and the app share one source of truth)
3. Generates the favicon, PWA icons and `favicon.ico`
4. Renders an Open Graph image per page with [satori](https://github.com/vercel/satori) + [resvg](https://github.com/yisibl/resvg-js)
5. Runs `vite build` (prerenders every route in both languages)
6. Writes `robots.txt` for the target environment
7. Replaces the SPA-shell `404.html` with the prerendered 404 page
8. Verifies every page has a `<title>`, meta description, canonical, `hreflang`, JSON-LD and an `<h1>` — and fails the build if any is missing

### Branch behaviour

The build reads the CI branch (`WORKERS_CI_BRANCH`, or `CF_PAGES_BRANCH`) and
decides both what to build and which origin to build it for:

| Branch            | Output                                | Origin                                  | Indexed |
| ----------------- | ------------------------------------- | --------------------------------------- | ------- |
| `main` / `master` | Standalone bilingual coming-soon page | `https://www.thgov.co`                  | Yes     |
| any other branch  | The full directory                    | `https://<branch>-thgov.phitchawat.workers.dev` | **No** |

Preview deployments carry the full site while production still serves the
holding page, so they are deliberately locked down: every page gets
`noindex, follow` and `robots.txt` disallows everything. An indexed preview
would compete with `www.thgov.co` for its own content.

Canonicals are always self-referential — a preview points at the preview
origin, never at production, which serves different content.

Override locally with `SITE_MODE=full` or `SITE_MODE=coming-soon`, or use
`npm run build:full` / `npm run build:coming-soon`. Set `PUBLIC_SITE_URL`
explicitly to override the derived origin.

### Deployment (Cloudflare Workers)

The site ships as a static assets Worker — there is no Worker script. The
`assets` block in `wrangler.jsonc` points at `build/` and configures
`html_handling` to match SvelteKit's `trailingSlash: 'never'`, plus
`not_found_handling: "404-page"` so unknown paths get the prerendered
bilingual 404 with a real 404 status.

| Setting        | Value                          |
| -------------- | ------------------------------ |
| Build command  | `npm run build`                |
| Deploy command | `npx wrangler versions upload` |
| Node version   | 20 or newer                    |

Deploy from a terminal with `npm run deploy` (uploads a version) or
`npm run deploy:live` (uploads and activates it).

## Adding a page

Adding a service is one file. Drop it into `src/lib/content/services/` exporting
a `Service`, and it is automatically registered, routed at `/services/<slug>`
(and `/en/services/<slug>`), added to the sitemap and the search index, given an
Open Graph image, and linked from its category and agency pages.

```ts
// src/lib/content/services/my-service.ts
import type { Service } from '../types';

export const service: Service = {
  slug: 'my-service',
  name: { th: '…', en: '…' },
  shortName: { th: '…', en: '…' },
  url: 'https://example.go.th/',
  agency: 'dbd',            // a slug from content/agencies.ts
  categories: ['business'], // slugs from content/categories.ts
  summary: { th: '…', en: '…' },
  deck: { th: '…', en: '…' },
  keywords: { th: ['…'], en: ['…'] },
  features: [], steps: [], faq: [], body: [],
  crawl: { host: 'example.go.th', verdict: 'allowed', status: 200, checkedAt: '2026-08-28' },
  priority: 50,
  updated: '2026-08-28'
};
```

Guides work the same way in `src/lib/content/guides/`. Categories, agencies and
the static legal pages live in `categories.ts`, `agencies.ts` and `pages.ts`.

Every user-facing string is a `{ th, en }` pair — the type system will not let
you ship a page in one language.

## Internationalisation

Thai is the default and lives at the root; English is prefixed:

```
/services/mea-eservice        → Thai
/en/services/mea-eservice     → English
```

Both are prerendered as separate HTML files with reciprocal `hreflang`
alternates and `x-default` pointing at Thai. UI chrome strings live in
`src/lib/i18n/ui.ts`.

## The robots audit

`/robots-report` is generated from a real sweep of Thai government domains.
Reproduce or refresh it:

```bash
npm run audit:robots                          # sweep build-assets/domains.txt, rewrite audit.ts
npm run audit:robots -- example.go.th         # dry run for specific domains
npm run audit:robots -- --limit 20
```

For each domain it requests `/robots.txt` and `/` as Googlebot, then `/` as a
desktop browser, following redirects on `robots.txt` up to five hops.

Verdicts are deliberately conservative:

| Verdict        | Meaning                                                                        |
| -------------- | ------------------------------------------------------------------------------ |
| `blocked`      | The site's own `robots.txt` disallows everything for Googlebot. Authoritative.  |
| `waf-blocked`  | Our audit host was refused (403 to every user-agent) or trapped in a redirect loop. **Not** proof that Google is blocked. |
| `partial`      | Some paths disallowed — or a 403 shown only to a self-declared Googlebot while a browser is served normally (ordinary anti-spoofing). |
| `none`         | No `robots.txt`, which conventionally permits crawling.                        |
| `allowed`      | Fully crawlable.                                                               |
| `unknown`      | No response from the audit host.                                               |

The distinction matters: a 403 from one machine is not evidence about the real
Googlebot, which crawls from Google's own IP ranges and verifies itself by
reverse DNS. Only `robots.txt` content is reproducible by anyone, so only that
produces a `blocked` verdict.

## Accessibility

Built to the Thai Government Website Standard (WCAG 2.1 AA): three text sizes, a
light/dark/high-contrast mode, preferences applied before first paint so nothing
flashes, full keyboard operation, a skip link, correct landmarks and heading
order, and respect for `prefers-reduced-motion`. Every page is real prerendered
HTML and remains readable with JavaScript disabled.

## Licence

Content written for this project is published under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Source code is MIT.
Agency names and their own material remain the property of their owners; no
agency logos or branding assets are included in this repository.
