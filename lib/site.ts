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
    "Coflow scans your existing presence — site, podcast, socials — and hands back a strategic brand analysis in 2 minutes. From there, sharpening your messaging is the work we do together at your pace, inside the Studio that runs podcast, newsletter, social and analytics from one place.",
  ogImage: "/og/default.png",
  twitter: "@coflow",
} as const;

// Invite-only launch (2026-08). Signup lives in the Studio app at /signup and
// needs a code; the code is validated here first (server-side, see
// app/join/actions.ts) so a wrong code fails on THIS page instead of bouncing
// the visitor to an app screen that rejects them.
export const JOIN_PATH = "/join";

// The Studio signup screen, carrying the validated code + the language she was
// reading the site in. The code in the URL is a convenience only — the Studio
// revalidates it server-side before creating anything.
export function signupUrlFor(locale: "he" | "en", code: string): string {
  const url = new URL(`${SITE.studioAppUrl}/signup`);
  url.searchParams.set("lang", locale);
  if (code) url.searchParams.set("code", code);
  return url.toString();
}

// Wizard entry carrying the visitor's current language across to the app.
// The Studio app reads `?lang=` and locks it for the whole onboarding flow,
// so the language someone is browsing this marketing site in is the language
// the /start flow opens in (no more English landing → Hebrew onboarding).
export function wizardUrlFor(locale: "he" | "en"): string {
  return `${SITE.wizardUrl}?lang=${locale}`;
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
