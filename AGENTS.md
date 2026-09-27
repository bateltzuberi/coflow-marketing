<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Coflow design system

This repo is the **Coflow marketing site** at the apex `coflow.social`. It is the only marketing
site for the whole product family — individual products do NOT get their own site.

**The product app is `bateltzuberi/shebossit-cms`** (`/Users/bateltzuberi/shebossit-cms`): one deploy
serves both `studio.coflow.social` and `agency.coflow.social`. `/Users/bateltzuberi/sma/` is the
**retired** standalone agency app, merged into `shebossit-cms` long ago — never read it for current
behaviour, and there is no `app.coflow.social`.

## Where the design truth lives

`app/globals.css` in this repo. Read it before any UI work.

The external design bundle this file used to point at
(`…/Dropbox/…/עיצוב/coflow-upgrade/project/global_guidelines.html`, `tokens.css`,
`marketing_brief.html`, …) **is not on the machine any more** — the whole folder is gone, so nobody,
local or cloud, can read it. If it turns up, commit it into this repo under `design/` instead of
linking a path outside it. Until then `app/globals.css` is the source of truth, not a fallback.

## The rules

1. **Two brand colours: yellow `#FBEEB9` and blue `#4054F7`**, joined by the bridge gradient
   `linear-gradient(135deg, #FBEEB9 0%, #4054F7 100%)` (`--gradient-bridge`). Use the gradient on
   **one** hero element per page — a single word, a CTA, or one tile. The rest of the page is
   neutral with accents drawn from both colours.
   ⚠️ The variables are still **named** `--color-lavender-*` and `--color-lime-*` from a dead
   lavender/lime palette. The names lie; the values are the yellow and the blue. Read the value.
2. **Light mode only.** Paper `#fafaf7`, surface `#ffffff`, ink-900 `#1a1a1c`. No dark variants.
3. **Bilingual He+En with RTL default.** Heebo (he, headings 700), Geist (en, headings 600),
   JetBrains Mono (technical labels). Inline English inside Hebrew copy: wrap in `<span class="en">`
   so the font-family switches.
4. **Spacing scale only** from `{4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96}`. No inline hex — only
   `var(--token)`.

Read `README.md` for what this site actually contains: five real pages, everything else redirects.
