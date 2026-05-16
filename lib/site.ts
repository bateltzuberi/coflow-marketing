export const SITE = {
  name: "Coflow",
  tagline: "See how your brand looks from the outside.",
  url: "https://coflow.social",
  // Single app login URL (legacy). studioAppUrl is the canonical entry
  // point now — login + /start (the wizard) both live there.
  appUrl: "https://studio.coflow.social",
  studioAppUrl: "https://studio.coflow.social",
  // Wizard entry — the marketing CTA across the site points here.
  wizardUrl: "https://studio.coflow.social/start",
  description:
    "Coflow runs a brand-analysis wizard that reads your existing presence (site, podcast, socials) and hands back a strategic profile in ~7 minutes. Then you step into the Studio that runs podcast, newsletter, social and analytics from one place.",
  ogImage: "/og/default.png",
  twitter: "@coflow",
} as const;

// Positioning copy used across the site. The product is live and free
// for one brand; the agency tier ships later (intentionally not exposed
// on the public site).
export const POSITIONING = {
  status: "Free · one brand",
  scarcityLine: "Free for your first brand, forever.",
  ctaPrimary: "Run my analysis",
  ctaSecondary: "See what's in the Studio",
} as const;

export const FEATURES = [
  {
    slug: "brand-analysis",
    name: "Brand analysis",
    h1: "See how your brand looks from the outside",
    short: "Paste your links. The system reads your presence and hands back a strategic analysis in ~7 minutes.",
  },
  {
    slug: "content-calendar",
    name: "Content calendar",
    h1: "A calm content calendar for your whole brand",
    short: "One calendar across podcast, newsletter, and social. Drafts, scheduled, published — on one screen.",
  },
  {
    slug: "podcast",
    name: "Podcast",
    h1: "Plan, publish, and grow your podcast inside one Studio",
    short: "Episode planning, guest management, auto descriptions and chapters across every platform.",
  },
  {
    slug: "newsletter",
    name: "Newsletter",
    h1: "Write, schedule, and measure your newsletter",
    short: "Write, schedule, send. Opens and clicks flow into your unified analytics.",
  },
  {
    slug: "analytics",
    name: "Unified analytics",
    h1: "One analytics view across every channel you run",
    short: "Podcast, newsletter, social — one timeline. See the journey from idea to click.",
  },
] as const;
