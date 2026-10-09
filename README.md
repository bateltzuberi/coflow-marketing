# Coflow — marketing site

The public site on the apex domain [`coflow.social`](https://coflow.social).
Netlify site `coflow-marketing` (id `8ad6a72a-2e9a-4597-82ad-b159d2e4a046`), built from `main`.

## The other repos (read this before you believe an old doc)

| What | Where | Lives at |
|---|---|---|
| This marketing site | `bateltzuberi/coflow-marketing` | `coflow.social` |
| **The product app** | **`bateltzuberi/shebossit-cms`** (`/Users/bateltzuberi/shebossit-cms`) | `studio.coflow.social` **and** `agency.coflow.social` — one deploy serves both |
| People's public pages proxy | `shebossit-cms` → `sites/coflow-website/` | `<username>.coflow.website` |
| `bateltzuberi/sma` | retired | nothing. It was the standalone agency app before it was merged into `shebossit-cms`. Do not read it for current behaviour. |

There is no `app.coflow.social`. Earlier versions of this README said there was.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, Netlify (`@netlify/plugin-nextjs`).
Supabase is used read/write only for the invite code + waitlist (`lib/supabase.ts`, `app/actions.ts`, `app/invite-actions.ts`) — no auth, no product data.

## Local dev

```bash
cd /Users/bateltzuberi/coflow-marketing
npm install
npm run dev
```

## Routes (all of them)

**Five real pages. Everything else is a redirect.**

```
/                       Home. Built from the new studio: the page is navigated by the
                        studio's dock, its "+" opens the six set-ups, and every "Join"
                        lands on the invite-code field (#join), which validates a code
                        and hands off to the Studio signup. Styles: app/home.css,
                        words: lib/home-copy.ts.
/waitlist               No code? Leave an address here
/how-it-works           The product explained — the site's one real explainer
/academy                Help centre index
/academy/[area]         Help centre per area
```

Redirects (kept so shared and indexed links don't 404 — read the comment at the top of each file
for why it was retired):

```
/join        → /he          the invite door is the Hebrew home page
/diagnosis   → /he          diagnosis is inside the product, not a public entry
/pricing     → /he          the price lives on the home page
/studio      → /he          the old product page was retired
```

`/features/*`, `/vs/*`, `/for/*` and `/blog` **do not exist and never shipped**. `lib/content.ts`
still holds the competitor/feature/persona copy those pages used — unused leftovers, not a live
data source. Live site-level data is `lib/site.ts`; help-centre content is `lib/academy.ts`.

Bilingual he/en: public URLs are `/he` and `/en`, with the same prefix on every page
(e.g. `/he/academy/forms` and `/en/academy/forms`). `proxy.ts` sets the request language
from the URL; cookies, geography and Accept-Language cannot change a page's language.
The localized route files share the existing page implementations. Internal links and
the language switcher preserve the selected language and destination page.

Unprefixed legacy page URLs permanently redirect (308) to Hebrew, preserving query strings.
Old aliases (`/home`, `/index`, `/join`, `/diagnosis`, `/pricing`, `/studio`, `/how-it-works`)
redirect to the home page in the selected language. Static assets, APIs, robots.txt and
sitemap.xml remain unprefixed. Each page has a self-canonical and reciprocal he/en
hreflang links; x-default is Hebrew. The sitemap lists both language versions.

Routing regression checks: `node --test lib/locale-path.test.mjs` (Node 22.18+).

## Brand

Tokens live in [`app/globals.css`](app/globals.css) — that file is the source of truth.

Paper `#fafaf7`, surface `#ffffff`, ink-900 `#1a1a1c`. Light mode only.
The two brand colours are **yellow `#FBEEB9`** and **blue `#4054F7`**, joined by the bridge gradient
`linear-gradient(135deg, #FBEEB9 0%, #4054F7 100%)` (`--gradient-bridge`).

⚠️ The CSS variables are still **named** `--color-lavender-*` and `--color-lime-*` from an older
palette. The names lie; the values are the yellow and the blue above. Read the value, never the name.

Heebo (Hebrew), Geist (English), JetBrains Mono (technical labels).

## SEO

Helpers in [`lib/seo.tsx`](lib/seo.tsx): `buildMetadata()`, `organizationJsonLd()`,
`softwareApplicationJsonLd()`, `breadcrumbsJsonLd()`, `faqJsonLd()`.

## Deploy

Netlify builds `main` automatically. `npm run build`, publish `.next`.
A merge to `main` is a production deploy of `coflow.social` — Batel approves the merge.

## Public discovery content

Solution pages are `/he|en/solutions/{digital-courses,sales-funnels,crm,ai-brand-management}`.
Guides are `/he|en/guides/{choose-course-platform,course-sales-funnel}`, with indexes and `/he|en/about`.
Content lives in `lib/discovery-content.ts` and `lib/guide-content.ts`. Update both languages together;
course availability is explicitly in development until a verified release.

Research, rationale and account-level follow-up: [SEO and AI discovery](docs/seo-ai-research.md).
Optional Netlify environment variables `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION`
render provider-issued verification values; obtain the real values from the owner's accounts.
Preview and branch deployments must remain noindex; production remains crawlable.

Verification: `npm run build`, `npm run lint`, `node --test lib/locale-path.test.mjs`,
and `node tests/discovery-smoke.mjs` after a build.
