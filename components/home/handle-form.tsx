"use client";

import { useState } from "react";

/**
 * The paste-your-link field, on the page itself (not a button to another
 * page). On submit it sends her to the app's diagnosis flow, carrying her
 * handle + locale so she doesn't re-type. The app reads ?ig= to prefill.
 */
export function HandleForm({
  placeholder,
  cta,
  startUrl,
  locale,
}: {
  placeholder: string;
  cta: string;
  startUrl: string;
  locale: "he" | "en";
}) {
  const [handle, setHandle] = useState("");

  function go(e: React.FormEvent) {
    e.preventDefault();
    const url = new URL(startUrl);
    url.searchParams.set("lang", locale);
    const h = handle.trim();
    if (h) url.searchParams.set("ig", h);
    window.location.href = url.toString();
  }

  return (
    <form
      onSubmit={go}
      className="mx-auto flex w-full max-w-xl flex-col sm:flex-row items-stretch gap-2.5"
    >
      <input
        type="text"
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
        placeholder={placeholder}
        dir="ltr"
        aria-label={placeholder}
        className="flex-1 rounded-[14px] border border-line bg-white px-5 py-3.5 text-[15px] text-ink-900 outline-none transition focus:border-lime-deep placeholder:text-ink-500 text-start"
      />
      <button type="submit" className="btn btn-lime whitespace-nowrap">
        {cta}
      </button>
    </form>
  );
}
