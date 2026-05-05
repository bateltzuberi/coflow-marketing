<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Coflow design system

This repo is the **Coflow marketing site** at the apex `coflow.social` — the single marketing site for the whole Coflow product family (agencies at `/Users/bateltzuberi/sma/` and studio at `/Users/bateltzuberi/shebossit-cms/`). Individual products do NOT have their own marketing sites; everything funnels through here. Before any UI work, design tokens, color, type, layout, or component change:

1. **Read** `/Users/bateltzuberi/SheBossit Dropbox/Kasol Social/Mac/Downloads/עיצוב/coflow-upgrade/project/global_guidelines.html` top to bottom. It is the source of truth for tokens, type scale, spacing, components, motion, copy, and accessibility across all three properties.
2. **Marketing accent rule:** the gradient `linear-gradient(135deg, #ccb8f5 0%, #ddf3a0 100%)` (lavender → lime) is permitted on **one** hero element per page only — typically a single word, a CTA, or one tile. The rest of the page is neutral with accents drawn from **both** lavender and lime. The marketing site is the *only* surface where both colors coexist.
3. **Light mode only.** Paper `#fafaf7`, surface `#ffffff`, ink-900 `#1a1a1c`. No dark variants.
4. **Bilingual He+En with RTL default.** Heebo (he, headings 700), Geist (en, headings 600), JetBrains Mono (technical labels). Inline English in Hebrew copy: wrap in `<span class="en">` to switch font-family.
5. **Spacing scale only** from `{4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96}`. No hex inline — only `var(--token)`.

Bundle also contains `tokens.css`, `visual_identity.html`, `marketing_brief.html` (read this for marketing-specific guidance), `refinement_brief.html`, `product_mockups_v3.html`, per-property logo SVGs, and favicon sets. Read the bundle's `README.md` first.
