"use client";

import { useState, useTransition } from "react";

import { verifyInviteCode } from "@/app/invite-actions";
import { signupUrlFor } from "@/lib/site";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";

/**
 * The invite code field, in the home page's look. Same check as the shared
 * InviteForm: the code is verified against the Studio first, so a wrong code
 * fails here instead of on an app screen, and a live one goes straight to the
 * Studio signup with the code filled in.
 */
export function HomeJoinForm({ t, locale }: { t: Dictionary["join"]; locale: Locale }) {
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
        setError(result.retired ? t.errRetired : t.errInvalid);
        return;
      }
      window.location.href = signupUrlFor(locale, value);
    });
  }

  return (
    <form onSubmit={submit} className="hm-join-form">
      <div className="hm-code">
        <input
          id="hm-invite-code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder={t.codePlaceholder}
          aria-label={t.codeLabel}
          aria-invalid={error ? true : undefined}
          autoComplete="one-time-code"
          dir="ltr"
        />
        <button type="submit" disabled={pending} className="hm-btn">
          {pending ? t.ctaLoading : t.cta}
        </button>
      </div>
      {error && (
        <p role="alert" className="hm-join-err">
          {error}
        </p>
      )}
    </form>
  );
}

/** "Have an invite code?": a quiet link that opens the code field. */
export function HaveCode({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="hm-have-code">
      {open ? (
        children
      ) : (
        <button type="button" className="hm-link-quiet" onClick={() => setOpen(true)}>
          {label}
        </button>
      )}
    </div>
  );
}
