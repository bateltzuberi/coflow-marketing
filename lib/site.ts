export const SITE = {
  name: "Coflow",
  tagline: "One studio for your personal brand.",
  url: "https://coflow.social",
  // Single app login URL (legacy). studioAppUrl is the canonical entry
  // point now — login + /start (the wizard) both live there.
  appUrl: "https://studio.coflow.social",
  studioAppUrl: "https://studio.coflow.social",
  // The Studio's diagnosis funnel. NOT a marketing CTA any more: while the
  // launch is invite-only it is a way around the code, and the app now
  // redirects anonymous visitors from it to /signup. Kept only so the constant
  // has one definition if it's ever needed again.
  wizardUrl: "https://studio.coflow.social/start",
  description:
    "Coflow is one studio for a personal brand: strategy and voice in one place, content anchors and content written from them for Instagram, podcast, newsletter and YouTube, a shared calendar and board, plus products, funnels, a CRM and one dashboard over all of it.",
  ogImage: "/og/default.png",
  twitter: "@coflow",
} as const;

// Invite-only launch (2026-08). Signup lives in the Studio app at /signup and
// needs a code; the code is validated here first (server-side, see
// app/join/actions.ts) so a wrong code fails on THIS page instead of bouncing
// the visitor to an app screen that rejects them.
// The invite door is the HOME page while the launch is invite-only.
// (/join still resolves — it redirects here — because the URL was shared.)
export const JOIN_PATH = "/";

// The Studio signup screen, carrying the validated code + the language she was
// reading the site in. The code in the URL is a convenience only — the Studio
// revalidates it server-side before creating anything.
export function signupUrlFor(locale: "he" | "en", code: string): string {
  const url = new URL(`${SITE.studioAppUrl}/signup`);
  url.searchParams.set("lang", locale);
  if (code) url.searchParams.set("code", code);
  return url.toString();
}

// Registration entry carrying the visitor's language across to the app. Every
// CTA on the site funnels here — the home page (the code field) is the door,
// and this is where "sign up" goes from the deeper pages.
export function signupEntryFor(locale: "he" | "en"): string {
  return `${SITE.studioAppUrl}/signup?lang=${locale}`;
}

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
    short: "Paste your links. The system scans your presence and hands back a strategic analysis in 2 minutes — then we sharpen the messaging together.",
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
