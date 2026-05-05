"use client";

import { useState } from "react";

type Role = "agency" | "freelancer" | "manager" | "other";

type Strings = {
  placeholder: string;
  submit: string;
  submitting: string;
  sourceLabel: string;
  sources: { agency: string; freelancer: string; manager: string; other: string };
  successTitle: string;
  /** Use the literal token `{email}` to interpolate the user's address. */
  successBody: string;
  errorFallback: string;
  privacy: string;
};

const DEFAULT_STRINGS: Strings = {
  placeholder: "you@agency.com",
  submit: "Request early access",
  submitting: "Saving…",
  sourceLabel: "Who are you?",
  sources: {
    agency: "I run an agency",
    freelancer: "I'm a freelancer",
    manager: "I'm a social media manager",
    other: "Something else",
  },
  successTitle: "— You're on the list —",
  successBody: "Welcome in. We'll email {email} the week your invite opens.",
  errorFallback: "Could not save your spot.",
  privacy: "No spam. No card. We email only when your invite opens.",
};

export function WaitlistForm({
  source,
  compact = false,
  strings: stringsProp,
}: {
  source?: string;
  compact?: boolean;
  strings?: Partial<Strings>;
}) {
  const t: Strings = { ...DEFAULT_STRINGS, ...stringsProp, sources: { ...DEFAULT_STRINGS.sources, ...(stringsProp?.sources ?? {}) } };
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role | "">("");
  // Honeypot — must stay empty. Bots that auto-fill every field will
  // trip it and the server will silently drop their submissions.
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role: role || undefined, source, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? t.errorFallback);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.errorFallback);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mx-auto max-w-md rounded-[20px] border border-lime-deep/30 p-6 bg-lime-tint text-lime-ink"
      >
        <p className="font-mono-label" style={{ color: "inherit", opacity: 0.8 }}>
          {t.successTitle}
        </p>
        <p className="mt-2 text-base font-semibold leading-snug">
          {t.successBody.replace("{email}", email)}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`mx-auto w-full ${compact ? "max-w-md" : "max-w-xl"} flex flex-col gap-3`}
    >
      {/* Honeypot — invisible to humans, irresistible to bots. */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", insetInlineStart: "-9999px", width: 1, height: 1, overflow: "hidden", opacity: 0 }}
      >
        <label htmlFor={`wl-company-${source ?? "x"}`}>Company (leave empty)</label>
        <input
          id={`wl-company-${source ?? "x"}`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <label className="sr-only" htmlFor={`wl-email-${source ?? "x"}`}>Email</label>
        <input
          id={`wl-email-${source ?? "x"}`}
          name="email"
          type="email"
          required
          inputMode="email"
          autoComplete="email"
          placeholder={t.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-h-12 rounded-[14px] border border-line-strong bg-white px-4 text-[15px] outline-none transition placeholder:text-ink-500 focus:border-ink-900 focus:shadow-[0_0_0_3px_rgba(204,184,245,0.35)]"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-ink min-h-12 disabled:opacity-60"
        >
          {status === "submitting" ? t.submitting : t.submit}
        </button>
      </div>

      {!compact && (
        <fieldset className="flex flex-wrap gap-2 justify-center" aria-label={t.sourceLabel}>
          <legend className="sr-only">{t.sourceLabel}</legend>
          {(Object.keys(t.sources) as Role[]).map((r) => {
            const active = role === r;
            return (
              <button
                key={r}
                type="button"
                onClick={() => setRole(active ? "" : r)}
                aria-pressed={active}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition border ${
                  active
                    ? "border-ink-900 bg-ink-900 text-white"
                    : "border-line-strong bg-white text-ink-700 hover:border-ink-900"
                }`}
              >
                {t.sources[r]}
              </button>
            );
          })}
        </fieldset>
      )}

      {error && (
        <p role="alert" className="text-sm text-center text-danger">
          {error}
        </p>
      )}

      <p className="text-center text-[11px] text-ink-500">{t.privacy}</p>
    </form>
  );
}
