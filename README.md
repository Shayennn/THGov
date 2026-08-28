# ThaiGov.co — สารบัญบริการภาครัฐไทย

An independent, static directory of Thai government online services. It exists
because a surprising number of Thai government systems cannot be found on
Google — some block every crawler in their own `robots.txt`, others refuse
automated requests entirely — so citizens searching for a real service land on
scrapers, lookalike sites and outdated summaries instead.

ThaiGov.co describes each service in the words people actually search with, in Thai
and English, then links straight to the agency's official site. It collects no
personal data, takes no payments and has no login.

> **ThaiGov.co is not a government website** and is not affiliated with any agency it
> lists. Every transaction happens on the agency's own site.

## Stack

- **SvelteKit 2 + Svelte 5**, fully prerendered with `@sveltejs/adapter-static`
- **Zero runtime dependencies** — the output is plain HTML, CSS and a small JS bundle
- **Self-hosted [Prompt](https://fonts.google.com/specimen/Prompt)** (SIL OFL 1.1), Thai + Latin subsets only
- Deployed to **Cloudflare Workers** static assets at [www.thaigov.co](https://www.thaigov.co)

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
| `main` / `master` | Standalone bilingual coming-soon page | `https://www.thaigov.co`                  | Yes     |
| any other branch  | The full directory                    | `https://<branch>-thaigov.phitchawat.workers.dev` | **No** |

Preview deployments carry the full site while production still serves the
holding page, so they are deliberately locked down: every page gets
`noindex, follow` and `robots.txt` disallows everything. An indexed preview
would compete with `www.thaigov.co` for its own content.

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
npm run audit:robots -- --no-browser          # curl stage only, skip the browser re-check
npm run sync:crawl                            # push results into the service pages
npm run sync:crawl -- --check                 # fail if any page has drifted

node scripts/audit-browser.mjs example.go.th  # the browser stage on its own
```

The network sweep is a plain bash + curl script (`scripts/audit.sh`) so a few
hundred domains finish quickly; `scripts/audit-robots.mjs` classifies its TSV
output and regenerates `src/lib/content/audit.ts`. Each domain gets three
requests: `/robots.txt` and `/` with a full desktop-Chrome profile (redirects
followed), then `/` again as Googlebot.

**Sending only a Chrome `User-Agent` string is not enough.** WAFs fingerprint the
whole request, so a bare curl still reads as a bot and you will record blocks
that are not there. The sweep sends the client hints, `Accept-Language` and
`Sec-Fetch-*` headers a real Chrome navigation sends, then classifies by the
*mechanism* doing the refusing — because these are not equivalent:

**Headers are still not enough for every site.** curl runs no JavaScript, carries
no browser TLS fingerprint, and reports a dead domain, a refused connection and
an expired certificate with the same silent failure. So every host the sweep
leaves refused or unreachable goes through a second stage,
`scripts/audit-browser.mjs`, which drives headless Chromium via Playwright: it
waits out self-reloading interstitials, retries once without certificate
verification and once over plain HTTP when — and only when — that is what stands
in the way, and records which of those steps got in. Where the browser is served,
`robots.txt` is fetched over that same connection, so the verdict comes from the
file rather than from what curl was allowed to see. `chromeStatus` in `audit.ts`
records that stage; `null` means it was not needed.

| Kind | What it means |
| ---- | ------------- |
| `robots-disallow-all` | `robots.txt` disallows everything for Googlebot |
| `googlebot-exception` | `robots.txt` blocks all crawlers, then exempts Googlebot alone |
| `js-challenge` | Cloudflare managed challenge; browsers and verified crawlers pass, archives and AI assistants do not |
| `waf-rule` | A firewall block page, even for a full browser profile |
| `origin-403` | The origin server itself refuses |
| `ua-spoof-guard` | 403 only to a self-declared Googlebot; a browser is served normally |
| `redirect-loop` | Redirects to itself past the limit — usually a cookie or session challenge |
| `browser-only` | Refuses ordinary clients but serves a real Chromium; `robots.txt` read through it does not block |
| `tls-invalid` | Answers only once certificate verification is switched off |
| `http-only` | No working HTTPS at all; reachable over plain HTTP |
| `dns-failure` | The domain name does not resolve, for curl and Chromium alike |
| `connection-failed` | No connection accepted, for curl and Chromium alike |
| `server-error` | The server answers, with a 5xx of its own |

Those roll up into six verdicts:

| Verdict        | Meaning                                                                        |
| -------------- | ------------------------------------------------------------------------------ |
| `blocked`      | The site's own `robots.txt` disallows everything for Googlebot. Authoritative.  |
| `waf-blocked`  | Refused a full browser profile **and** headless Chromium. Still not proof that Google is blocked. |
| `partial`      | Some paths disallowed, a JavaScript challenge, a Google-only exemption, anti-spoofing, or served to a real browser and nothing else. |
| `none`         | No `robots.txt`, which conventionally permits crawling.                        |
| `allowed`      | Fully crawlable.                                                               |
| `unknown`      | No connection at all, with the failure named by the kind.                      |

Two limits are stated on the report page itself rather than hidden here: a
refusal aimed at one machine is not evidence about the real Googlebot, which
crawls from Google's own IP ranges and verifies itself by reverse DNS; and some
sites tighten their limits as repeated requests arrive from the same address, so
a few domains land differently between runs. Only `robots.txt` content is
reproducible by anyone, so only that produces a `blocked` verdict.

`npm run sync:crawl` rewrites the `crawl` block of every service page from the
audit, so page copy cannot drift from the measured data.

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
