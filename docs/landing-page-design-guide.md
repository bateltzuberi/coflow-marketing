# Landing page design guide (coflow.social)

> Sign-up is open since 2026-10-13: no invite codes, no waitlist. Every "Join" button goes to
> `signupUrlFor(locale, "")` (the Studio /signup page, €24 a month). Never add a code field or a
> waitlist form back without Batel asking.

Read this before changing any page on coflow.social. It exists because a change once added a
block of different-looking content to the end of the home page, after the price, in another
font and another style. This file is how that does not happen again.

Code truth beats this file. Tokens: `app/globals.css` (all pages) and `app/home.css` (home only).
Product claims: `PRODUCT.md`. How to talk to Batel: `WORKING-WITH-BATEL.md`.

---

## 1. The page map. Put each thing on its own page

| Page | Job | File |
|---|---|---|
| `/` (home) | One story, ends at the price. Nothing else. | `app/page.tsx`, `app/home.css`, `lib/home-copy.ts` |
| `/guides` | What you can build + the guides. All explanatory and SEO content goes here. | `app/[locale]/guides/page.tsx` |
| `/guides/[slug]`, `/solutions/[slug]` | One article or one solution each | `components/discovery-page.tsx`, `lib/guide-content.ts`, `lib/discovery-content.ts` |
| `/academy` | Help centre | `app/academy/page.tsx` |

`app/[locale]/…/page.tsx` files re-export the page in `app/…`. The URL decides the language
(`/he/…`, `/en/…`). Edit the real page, not the re-export.

## 2. Home page contract (do not break)

Order is fixed: **dock → top bar → hero → three sections (sales, marketing, clients) → price →
footer.**

- **The page ends at the price.** The price tile (€24, butter yellow) is the last content block.
  Nothing goes between the price and the footer. Nothing goes after it.
- Do not add blocks, link lists, SEO text, FAQs or "what you can build" to the home page.
  They go on `/guides` (or a new page), and the home page links there from the footer only.
- Do not add a section by copying a class from another page. The home page is built only from
  `hm-` classes in `app/home.css`. New home content, if Batel ever asks for it, is a new `hm-`
  section built like the existing ones (`hm-sec` > `hm-row` > `hm-copy` + `hm-vis`), with its
  words in `lib/home-copy.ts`.
- Home is one picture, not a document. Sections have a short heading, one lead line, and a
  drawn product screen. No headings of 28px with grey paragraph text underneath.

## 3. Every other page: how it is built

Use the same skeleton on every non-home page:

```
<Nav />
<main>
  band      py-16 md:py-20, background var(--color-surface-2), centred h1 + one sentence
  section   .section pt-0 > .container-page > h2.font-display-h2 + grid of cards
</main>
<Footer />
```

Reference implementations: `app/academy/page.tsx` (index) and `app/[locale]/guides/page.tsx`.

- Page title: `h1.font-display`, `text-[32px] sm:text-[46px] md:text-[56px]`.
- Section heading: `h2.font-display-h2`, `text-[24px] md:text-[30px]`, `mb-6`.
- Card: `rounded-[24px] bg-surface border border-line p-6 md:p-7`. Title 19/21px bold, body 15px
  `text-ink-700`, `leading-[1.6]`. The title is the link.
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-5`.
- Article pages are `max-w-3xl`, body 18px, and are built by `DiscoveryPage`. Do not hand-build
  an article page.
- Exactly one `<h1>` per page.

## 4. Colour

- Light mode only. No dark variants.
- Paper `#fffdf9`, surface `#ffffff`, oat/band `#f7f2eb`, line `#ece4d8`, text cocoa `#3a2e28`,
  secondary text `#6e6058`.
- Two brand colours: butter yellow `#FBEEB9` (buttons, price tile, highlights) and blue `#4054F7`
  (the Coflow logo and "Coflow noticed" moments only). The gradient bridge goes on at most one
  element per page.
- The main button is cream with cocoa text (`.btn btn-lime`, round). **Never a black button,
  never a blue button.**
- Pink `#F29CC3` is the focus ring and "now" accent on home. Sage, apricot and brick are small
  status badges only.
- Use variables (`var(--color-…)`, `var(--hm-…)`). No new hex values in components.
- The variables named `lavender` and `lime` are old names. The values are yellow and blue. Read
  the value.

## 5. Type

- Hebrew: Heebo. Home headings weight 900, other headings 700-800, tight tracking.
- English: Red Hat Display on the home page, Geist elsewhere. Technical labels: JetBrains Mono
  (`.font-mono-label`).
- English words inside Hebrew text: `<span class="en">`.
- One font family per page. If a block looks like it has a different font, it is wrong.

## 6. Spacing and shape

- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96. Page width `.container-page`
  (1200px, 24px side padding, 32px from `md`).
- Home page section rhythm (160px / 180px, 104px / 112px on phones) is set in `home.css`.
  Leave it.
- Radii: cards 24px, buttons pill or 14px, price tile 40px.

## 7. Language

- Every string exists in Hebrew and English. Hebrew is written in Hebrew, not translated from
  English. Hebrew copy addresses a woman (לשון נקבה).
- RTL is the default. Use logical properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`,
  `insetInlineStart`), not left/right.
- Copy for a page lives in a content file (`lib/*-content.ts`, `lib/home-copy.ts`), never inline
  in a component.

## 8. Copy rules (settled)

- The category line is hers: **מערכת לניהול מותג עם AI**.
- Course building is **in development**. Say so. Coflow opens gradually, by invitation.
- No AI-sounding copy: no em-dashes for effect, no slogans, no "not theory, real examples".
- No number goes into copy until someone has opened the source it came from.
- Product facts come from `PRODUCT.md` and the product code, not from what we wish were true.

## 9. Before you say "done"

1. `npm run build` passes.
2. Open the page in a browser, on a phone width and a laptop width, in Hebrew and in English.
   Look at the bottom of the page and at the seam between each pair of sections.
3. Home ends at the price. The footer follows it directly.
4. One `<h1>`. All text in both languages. No new hex values. No new fonts.
5. `node --experimental-strip-types tests/discovery-smoke.mjs` passes (after a build).
6. Say what you changed in three lines. Do not merge: Batel approves the merge, because a merge
   to `main` is a production deploy.

---

## Paste this into ChatGPT (custom instructions or the first message)

```
You are working on the Coflow marketing site (coflow.social, repo coflow-marketing, Next.js,
Hebrew first, RTL). Before any change, read docs/landing-page-design-guide.md in the repo and
follow it exactly.

Hard rules:
1. The home page ends at the price tile. Never add a block after the price or between the price
   and the footer. Explanatory, SEO and "what you can build" content goes on /guides.
2. Build new pages from the existing skeleton (cream band + white cards, see
   app/[locale]/guides/page.tsx). Never invent a new style, font, colour or layout.
3. Home page sections use only hm- classes from app/home.css.
4. Colours only from the tokens. Buttons are cream with cocoa text. No black or blue buttons.
5. Every string in Hebrew and English, written natively, in a content file, not inside the
   component. RTL logical properties only.
6. One h1 per page. Run the build and look at the page in a browser on phone and laptop widths
   before you say it is done.
7. If you are unsure where something belongs, ask. Do not put it at the bottom of the home page.
```
