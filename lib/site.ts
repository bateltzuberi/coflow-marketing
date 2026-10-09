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

// The waitlist form is a real CRM form in the Studio (studio.coflow.social/f/…),
// not a mailto: — someone who leaves details lands in the same contacts table
// as everyone else. It is embedded on /waitlist in an iframe that resizes
// itself off the form's `coflow-form-resize` postMessage.
// coflow.social's OWN copy of the waitlist form ("רשימת המתנה · coflow.social"), so these
// leads are told apart from the ones that come in through shebossit.co.il, which
// embeds the original. Same questions, product and list.
// One per language: a form's questions are stored text in one language, so
// the English page has its own copy ("Waitlist · coflow.social (English)").
// Same product and list, so every sign-up lands in one place.
export const WAITLIST_FORM_IDS = {
  he: "1a9f6927-25aa-46c0-b795-3784e29e3038",
  en: "ff0b4be5-2b20-4fc1-ac57-11a6326c66a8",
} as const;

export function formEmbedUrl(formId: string, locale: "he" | "en"): string {
  // ?lang tells the form which language to draw its own words in (errors, the
  // consent line, direction): inside our iframe it can't read the studio's
  // locale cookie.
  return `${SITE.studioAppUrl}/f/${formId}?lang=${locale}`;
}
