"use client";

import { useEffect, useState } from "react";

import { WaitlistForm } from "./waitlist-form";

// Every link to /he/waitlist or /en/waitlist on the site opens the waitlist
// form here, in a popup over the page, instead of leaving it. Without
// JavaScript the link still reaches the /waitlist page, which has the same form.
const WAITLIST_PATH = /^\/(he|en)\/waitlist\/?$/;

export function WaitlistPopup({
  locale,
  t,
}: {
  locale: "he" | "en";
  t: { title: string; sub: string; formTitle: string; close: string };
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || !WAITLIST_PATH.test(url.pathname)) return;
      // Already on the waitlist page: the form is right there.
      if (WAITLIST_PATH.test(window.location.pathname)) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-ink-900/40 backdrop-blur-sm p-0 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
      dir={locale === "he" ? "rtl" : "ltr"}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-popup-title"
        className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-[24px] sm:rounded-[24px] bg-paper px-6 pt-8 pb-6 shadow-xl"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t.close}
          className="absolute top-4 end-4 h-10 w-10 rounded-full text-[22px] leading-none text-ink-700 hover:bg-surface-2"
        >
          ×
        </button>
        <h2 id="waitlist-popup-title" className="text-center font-black text-[28px] leading-tight text-ink-900">
          {t.title}
        </h2>
        <p className="mt-3 text-center text-[16px] leading-[1.5] text-ink-700">{t.sub}</p>
        <div className="mt-6">
          <WaitlistForm title={t.formTitle} locale={locale} />
        </div>
      </div>
    </div>
  );
}
