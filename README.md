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
/                       Home = the invite door. The launch is invite-only, so the home
                        page validates a code and hands off to the Studio signup.
/waitlist               No code? Leave an address here
/how-it-works           The product explained — the site's one real explainer
/academy                Help centre index
/academy/[area]         Help centre per area
```

Redirects (kept so shared and indexed links don't 404 — read the comment at the top of each file
for why it was retired):

```
/join        → /            the invite door moved to the home page
/diagnosis   → /            the free IG diagnosis is inside the product now, not a public entry
/pricing     → /how-it-works   no public price while the paid model is being built
/studio      → /how-it-works   the old multi-platform product page, retired for the IG-only MVP
```

`/features/*`, `/vs/*`, `/for/*` and `/blog` **do not exist and never shipped**. `lib/content.ts`
still holds the competitor/feature/persona copy those pages used — unused leftovers, not a live
data source. Live site-level data is `lib/site.ts`; help-centre content is `lib/academy.ts`.

Bilingual he/en: `lib/locale.ts` + `lib/dictionary.ts`, switched by `components/locale-switcher.tsx`.

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
