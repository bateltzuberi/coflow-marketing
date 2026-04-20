"use client";

import { useState } from "react";

type Role = "agency" | "freelancer" | "manager" | "other";

const ROLE_LABELS: Record<Role, string> = {
  agency: "I run an agency",
  freelancer: "I'm a freelancer",
  manager: "I'm a social media manager",
  other: "Something else",
};

export function WaitlistForm({
  source,
  placeholder = "you@agency.com",
  compact = false,
}: {
  source?: string;
  placeholder?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role | "">("");
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
        body: JSON.stringify({ email, role: role || undefined, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? "Could not save your spot.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not save your spot.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mx-auto max-w-md rounded-2xl border p-5 bg-[var(--app-success-bg,#E8EDE0)] text-[var(--app-success,#5E7248)]"
      >
        <p className="font-mono-label" style={{ color: "inherit" }}>
          — You're on the list —
        </p>
        <p className="mt-2 text-base font-semibold">
          Welcome in. We'll email {email} the week your invite opens.
        </p>
        <p className="mt-2 text-sm opacity-90">
          Invites roll out weekly, prioritised by use case. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`mx-auto w-full ${compact ? "max-w-md" : "max-w-xl"} flex flex-col gap-3`}
    >
      <div className="flex flex-col sm:flex-row gap-2">
        <label className="sr-only" htmlFor={`wl-email-${source ?? "x"}`}>
          Work email
        </label>
        <input
          id={`wl-email-${source ?? "x"}`}
          name="email"
          type="email"
          required
          inputMode="email"
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 min-h-12 rounded-xl border bg-white px-4 text-sm outline-none transition placeholder:text-[var(--app-muted-soft)]"
          style={{ borderColor: "var(--app-border-2)", color: "var(--app-ink)" }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--app-ink)";
            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232, 184, 74, 0.18)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--app-border-2)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary min-h-12 text-sm disabled:opacity-60"
        >
          {status === "submitting" ? "Saving…" : "Request early access"}
        </button>
      </div>

      {!compact && (
        <fieldset className="flex flex-wrap gap-2 justify-center" aria-label="Who are you?">
          <legend className="sr-only">What describes you best?</legend>
          {(Object.keys(ROLE_LABELS) as Role[]).map((r) => {
            const active = role === r;
            return (
              <button
                key={r}
                type="button"
                onClick={() => setRole(active ? "" : r)}
                aria-pressed={active}
                className="rounded-full px-3 py-1.5 text-xs font-medium transition border"
                style={{
                  borderColor: active ? "var(--app-ink)" : "var(--app-border-2)",
                  background: active ? "var(--app-ink)" : "#fff",
                  color: active ? "var(--app-bg)" : "var(--app-ink-soft)",
                }}
              >
                {ROLE_LABELS[r]}
              </button>
            );
          })}
        </fieldset>
      )}

      {error && (
        <p role="alert" className="text-sm text-center" style={{ color: "var(--app-danger)" }}>
          {error}
        </p>
      )}

      <p className="text-center text-[11px] text-[var(--app-muted)]">
        No spam. No card. We email only when your invite opens.
      </p>
    </form>
  );
}
