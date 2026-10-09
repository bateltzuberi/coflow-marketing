> Current marketing direction, confirmed by Batel on 9 October 2026: AI brand management connecting offers, digital courses, funnels and CRM. Course building remains in development. Organic-content revenue attribution is no longer the product promise. The earlier attribution descriptions below are historical and must not be used as current marketing claims. Verify feature availability before writing copy.

# What Coflow actually is

Read this before writing a word of copy. Everything here is read off the product code in
`bateltzuberi/shebossit-cms`, not from memory — re-check it there before claiming anything new
(`src/lib/platforms/catalog.ts`, `src/components/chrome-copy.ts`, `src/app/brand-profile/`,
`src/lib/billing/tiers.ts`). Checked 2026-09-27.

## In one line

Coflow is a system for running **one personal brand end to end**: it works out what the brand
stands for, then writes the content, then tracks what that content sells.

It is not a social scheduler, not an agency PM tool, and not "AI that writes posts". Those
descriptions have all been written about it and all of them undersell it.

## The two surfaces (same codebase, one deploy)

| Surface | Who is in it | Address |
|---|---|---|
| **Studio** | the person who owns the brand | `studio.coflow.social` |
| **Agency** | an agency running brands for its clients — it creates a Studio workspace per client, produces the work, and the client approves it | `agency.coflow.social` |

**The site today sells the Studio only.** The agency surface exists in the product and has no page
on this site. Whether to market it is Batel's call — do not decide it in copy, and do not invent an
agency pitch because the subdomain exists.

## What a subscriber gets (the real screen list)

Top-level areas, in the app's own words: **דשבורד ראשי · פרופיל מותג · לוח תוכן · מוצרים · משימות ·
משפכים · CRM**.

1. **Brand profile** — diagnosis, strategy, voice, brand kit, gallery, notepad. This is the core:
   everything downstream is generated from it, not from a prompt.
2. **Platforms.** Four are switched on: **Instagram, podcast, newsletter, YouTube**. Each gets its
   own anchors, references, templates, board, content creation and analytics.
3. **Content calendar** — one board and calendar across every platform.
4. **The business side** — products, funnels (landing pages + email sequences), CRM, tasks, and a
   dashboard that rolls the numbers up.

## How it actually works (the chain — this is the product)

Nothing here is a prompt box. Each step feeds the next, and that chain is the reason the output
sounds like the person instead of like AI:

1. **Diagnosis → strategy → voice → brand kit.** What the brand is about, who it is for, what it
   claims, how it sounds, what it looks like. Stored once, in the brand profile.
2. **Anchors, per platform.** An anchor is what she wants to be known for. Each platform gets its
   own anchors, because what works in a carousel is not what works in an episode.
3. **References.** Real posts she points at as "like this". The system reads them and derives the
   structure — it does not follow rules someone typed.
4. **Templates.** A design built off those references, in her branding.
5. **Content creation.** Hook, copy, slide breakdown, media picked from her own gallery, laid into
   the template. A carousel, a reel, a newsletter issue, an episode script.
6. **The board and the calendar.** One place, every platform.
7. **Products, funnels, CRM.** The content ends in something for sale: landing pages, email
   sequences, a pipeline, and links that are tracked back.
8. **The dashboard.** What was published, what it did, what it sold.

The short way to say it: **it defines what the brand is about, writes the content off that
definition, and tracks what the content sold.** Steps 1-2 are what nobody else does, and they are
why step 5 is not slop.

## Words

Hebrew is primary and written in לשון נקבה; English mirrors it. Use the product's own plain names
for things (פרופיל מותג, עוגן, רפרנס, טמפלט, לוח תוכן) — they are literal, and the app uses them on
its own screens. No motivational copy, no "unleash / transform / 10x", no invented feature names,
no claims with a number in them unless the number was checked at its source.

## What must NOT be claimed

- **Only those four platforms.** TikTok, X, LinkedIn, Facebook, Threads, Pinterest and blog are
  `coming_soon` in `ENABLED_PLATFORM_KINDS` — hard off, not "in beta". Never list them.
- **Not every per-platform section is real.** Some (`analytics`, `library`, `settings`, `episodes`,
  `distribution`, `monetization`, `marketing`) fall back to `_PlaceholderPage` for some platforms —
  analytics is real for Instagram, newsletter and YouTube, a placeholder for podcast. Check before
  describing a section.
- **No free trial and no free diagnosis.** The Instagram diagnosis is inside the paid product now.
- **No agency marketing claims** — see above.

## Commercial state

Invite-only. The home page takes a code, then hands off to signup in the Studio.
**€24/month, no trial** (`PRO_PRICE_EUR`, and the same number in `lib/dictionary.ts` here — if you
change one, change both). The price someone joins at is theirs permanently, so several prices bill
at once; never write "was €14, now €24" as an upgrade story.
