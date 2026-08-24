export const SITE = {
  name: "Coflow",
  tagline: "Your whole brand in one place.",
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
    "Coflow is an AI brand-management system: one place that runs your whole personal brand, from strategy, voice and brand kit through content for Instagram, podcast, newsletter and YouTube, a shared calendar and board, and on to products, funnels, a CRM and one dashboard.",
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
