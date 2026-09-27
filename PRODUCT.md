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
