"use client";

import { useState, useTransition } from "react";

import { verifyInviteCode } from "@/app/join/actions";
import { signupUrlFor } from "@/lib/site";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";

/**
 * The code field. Checks the code against the Studio (server action → Studio
 * API) and, when it's live, hands the visitor straight to the Studio signup
 * with the code prefilled. A wrong code fails HERE, on the page she's already
 * on, instead of bouncing her to an app screen that turns her away.
 */
export function InviteForm({
  t,
  locale,
}: {
  t: Dictionary["join"];
  locale: Locale;
}) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const value = code.trim().toUpperCase();
    if (!value) {
      setError(t.errEmpty);
      return;
    }
    startTransition(async () => {
      const result = await verifyInviteCode(value);
      if (result.error === "network") {
        setError(t.errNetwork);
        return;
      }
      if (!result.valid) {
        setError(t.errInvalid);
        return;
      }
      window.location.href = signupUrlFor(locale, value);
    });
  }

  return (
    <form onSubmit={submit} className="mx-auto w-full max-w-xl">
      <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder={t.codePlaceholder}
          aria-label={t.codeLabel}
          aria-invalid={error ? true : undefined}
          autoComplete="one-time-code"
          dir="ltr"
          className="flex-1 rounded-[14px] border border-line bg-white px-5 py-3.5 text-[15px] tracking-[0.08em] text-ink-900 outline-none transition focus:border-lime-deep placeholder:text-ink-500 placeholder:tracking-normal text-start"
        />
        <button type="submit" disabled={pending} className="btn btn-lime whitespace-nowrap disabled:opacity-60">
          {pending ? t.ctaLoading : t.cta}
        </button>
      </div>

      {error && (
        <p role="alert" className="mt-3 text-center text-[14px] text-ink-900">
          {error}
        </p>
      )}

      <p className="mt-4 text-center text-[13px] text-ink-500">{t.priceLine}</p>
    </form>
  );
}
