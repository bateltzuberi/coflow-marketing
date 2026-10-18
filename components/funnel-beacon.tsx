"use client";

import { useEffect } from "react";

import { SITE } from "@/lib/site";

// Counts two steps of the sign-up funnel for /admin/traffic in the Studio:
// a visit to a page here, and a tap on a link to the Studio sign-up.
//
// Anonymous by design: no cookie, no stored id, nothing about the person. The
// Studio's POST /api/funnel stores the step, the page, where the visitor came
// from (utm_source, else the site that linked her) and the language.
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

function send(body: Record<string, string | null>) {
  try {
    navigator.sendBeacon?.(ENDPOINT, JSON.stringify(body));
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

    send({ step: "visit", path: window.location.pathname, source: src, campaign, locale });

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || !a.href.startsWith(`${SITE.studioAppUrl}/signup`)) return;
      send({ step: "join_click", path: window.location.pathname, source: src, campaign, locale });
      try {
        const url = new URL(a.href);
        if (!url.searchParams.has("utm_source")) url.searchParams.set("utm_source", src);
        if (campaign && !url.searchParams.has("utm_campaign")) url.searchParams.set("utm_campaign", campaign);
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
