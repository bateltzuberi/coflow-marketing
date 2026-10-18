"use client";

import { useEffect } from "react";

import { SITE } from "@/lib/site";

// Counts two steps of the sign-up funnel for /admin/traffic in the Studio:
// a visit to a page here, and a tap on a link to the Studio sign-up.
//
// Anonymous by design: no cookie, nothing about the person. The Studio's POST
// /api/funnel stores the step, the page, where the visitor came from
// (utm_source, else the site that linked her), the language, and a random
// visit id made for this tab (sessionStorage, gone when the tab closes) so a
// person counts ONCE per step: browsing three pages is one visit, tapping Join
// twice is one tap. The id rides on the sign-up link (cf_v) so the Studio's
// form count is the same person.
//
// The source rides along on the sign-up link (utm_source / utm_campaign), so
// the Studio's own "form opened" count knows it too.

const ENDPOINT = `${SITE.studioAppUrl}/api/funnel`;

function source(search: string, referrer: string): string {
  const utm = new URLSearchParams(search).get("utm_source")?.trim().toLowerCase();
  if (utm) return utm.slice(0, 80);
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "").toLowerCase();
    if (!host || host.endsWith("coflow.social")) return "direct";
    if (/(^|\.)instagram\.com$/.test(host)) return "instagram";
    if (/(^|\.)facebook\.com$/.test(host) || host === "fb.me") return "facebook";
    if (/(^|\.)google\./.test(host)) return "google";
    return host.slice(0, 80);
  } catch {
    return "direct";
  }
}

// Instagram / Facebook / TikTok open links in their own browser, where Apple
// Pay and Google sign-in don't work; the funnel is split by it. Same list as
// the Studio's src/lib/billing/in-app-browser.ts.
const IN_APP = /\b(Instagram|FBAN|FBAV|FB_IAB|FBIOS|Messenger|TikTok|musical_ly|BytedanceWebview|Line\/|Snapchat|Pinterest)\b/i;

function send(body: Record<string, string | boolean | null>) {
  try {
    navigator.sendBeacon?.(ENDPOINT, JSON.stringify({ ...body, inApp: IN_APP.test(navigator.userAgent) }));
  } catch {
    // A lost count is never worth an error on the page.
  }
}

export function FunnelBeacon({ locale }: { locale: "he" | "en" }) {
  useEffect(() => {
    // Where she came from is decided on the first page of the visit and kept
    // for the rest of it, so a click through to /guides still counts as
    // Instagram. sessionStorage only; gone when the tab closes.
    let src = source(window.location.search, document.referrer);
    let campaign = new URLSearchParams(window.location.search).get("utm_campaign");
    try {
      const kept = sessionStorage.getItem("cf_src");
      if (kept && src === "direct") {
        const parsed = JSON.parse(kept) as { src: string; campaign: string | null };
        src = parsed.src;
        campaign = campaign ?? parsed.campaign;
      } else {
        sessionStorage.setItem("cf_src", JSON.stringify({ src, campaign }));
      }
    } catch {
      // Private mode or blocked storage: count with what this page knows.
    }

    // Once per tab per step.
    let visitId = "";
    const once = (step: string) => {
      try {
        if (sessionStorage.getItem(`cf_sent_${step}`)) return false;
        sessionStorage.setItem(`cf_sent_${step}`, "1");
      } catch {
        // No storage: count anyway.
      }
      return true;
    };
    try {
      visitId = sessionStorage.getItem("cf_v") ?? crypto.randomUUID();
      sessionStorage.setItem("cf_v", visitId);
    } catch {
      visitId = crypto.randomUUID();
    }

    if (once("visit")) send({ step: "visit", path: window.location.pathname, source: src, campaign, locale, visitId });

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || !/^\/(join|signup)\b/.test(a.href.slice(SITE.studioAppUrl.length)) || !a.href.startsWith(SITE.studioAppUrl)) return;
      if (once("join_click")) send({ step: "join_click", path: window.location.pathname, source: src, campaign, locale, visitId });
      try {
        const url = new URL(a.href);
        if (!url.searchParams.has("utm_source")) url.searchParams.set("utm_source", src);
        if (campaign && !url.searchParams.has("utm_campaign")) url.searchParams.set("utm_campaign", campaign);
        url.searchParams.set("cf_v", visitId);
        a.href = url.toString();
      } catch {
        // Leave the link as it was.
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [locale]);

  return null;
}
