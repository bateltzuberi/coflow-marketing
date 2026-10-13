export const SITE = {
  name: "Coflow",
  tagline: "The business behind your brand",
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
    "Coflow is an AI brand-management system connecting offers, marketing, sales and clients in one workspace.",
  // The share card, in the home page's design (public/og/home-{he,en}.png).
  // /og/default.png never existed, so every shared link went out with no image.
  ogImage: "/og/home-he.png",
  twitter: "@coflow",
} as const;

// Sign-up is open (2026-10-13). Every "Join" goes to the Studio at /signup, which
// takes an account and sends the visitor to the €24 checkout. No invite code.
// (/join and /waitlist still resolve because their URLs were shared.)
export const JOIN_PATH = "/";

// The Studio signup screen, carrying the language she was reading the site in.
// `code` is only for old links that still carry one; the Studio ignores it
// while sign-up is open.
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
