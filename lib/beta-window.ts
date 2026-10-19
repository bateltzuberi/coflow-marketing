// The beta sign-up window. Batel's decision (2026-10-19): open sign-up ends on
// Thursday 2026-10-22 at 20:00 Israel time and Coflow goes back to a waitlist.
//
// The Studio carries the same instant (shebossit-cms
// src/lib/invites/beta-window.ts) and is the gate that counts: from that moment
// its /join opens no checkout and sends the visitor to /waitlist here. This
// copy only decides what the site SHOWS — the countdown before, the waitlist
// after. To move the close, change both.

export const BETA_SIGNUP_CLOSES_AT = "2026-10-22T20:00:00+03:00";

export const BETA_CLOSES_AT_MS = Date.parse(BETA_SIGNUP_CLOSES_AT);

export function betaSignupOpen(now: number = Date.now()): boolean {
  return now < BETA_CLOSES_AT_MS;
}

/** Days / hours / minutes / seconds left, never below zero. */
export function timeLeft(now: number, closesAt: number = BETA_CLOSES_AT_MS) {
  const total = Math.max(0, Math.floor((closesAt - now) / 1000));
  return {
    total,
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}
