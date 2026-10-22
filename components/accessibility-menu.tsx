"use client";

// The accessibility button on every page of coflow.social, and the small menu
// it opens: text size, high contrast, no motion, underlined links, a plain
// font, wider text spacing. Each choice is an attribute on <html> drawn by
// A11Y_CSS (lib/a11y-prefs) — the page is never scanned or rewritten. The same
// menu the studio puts on every customer's public page.
//
// A11Y_CSS leaves the menu out of every mode, so the way back stays put. On the
// home page it rides above the dock while the dock is up (app/globals.css).

import { useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import {
  A11Y_CSS,
  A11Y_STORAGE_KEY,
  A11Y_TOGGLES,
  DEFAULT_PREFS,
  TEXT_STEPS,
  clampStep,
  isDefault,
  parsePrefs,
  prefAttributes,
  type A11yPrefs,
  type A11yToggle,
} from "@/lib/a11y-prefs";
import type { Locale } from "@/lib/locale";
import type { Dictionary } from "@/lib/dictionary";

// Line icons, drawn like the rest of the site's (lucide-style strokes).
const ICON = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
function Accessibility({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...ICON}>
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}
const Minus = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...ICON}><path d="M5 12h14" /></svg>
);
const Plus = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...ICON}><path d="M5 12h14M12 5v14" /></svg>
);
const X = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden {...ICON}><path d="M18 6 6 18M6 6l12 12" /></svg>
);

// The choices live in the browser (localStorage); where it is blocked (a
// private window) they live in memory for the visit.
let memory: string | null = null;
const listeners = new Set<() => void>();
function subscribePrefs(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}
function readPrefs(): string | null {
  try {
    return window.localStorage.getItem(A11Y_STORAGE_KEY);
  } catch {
    return memory;
  }
}
function writePrefs(next: A11yPrefs) {
  const value = isDefault(next) ? null : JSON.stringify(next);
  memory = value;
  try {
    if (value === null) window.localStorage.removeItem(A11Y_STORAGE_KEY);
    else window.localStorage.setItem(A11Y_STORAGE_KEY, value);
  } catch {
    // Not kept past this visit.
  }
  listeners.forEach((l) => l());
}

function apply(prefs: A11yPrefs) {
  const root = document.documentElement;
  for (const [name, value] of Object.entries(prefAttributes(prefs))) {
    if (value === null) root.removeAttribute(name);
    else root.setAttribute(name, value);
  }
  // An autoplaying video is motion too.
  if (prefs.motion) document.querySelectorAll("video").forEach((v) => v.pause());
}

export function AccessibilityMenu({
  lang,
  t,
  statementHref,
}: {
  lang: Locale;
  t: Dictionary["a11y"];
  /** Coflow's accessibility statement, in this language. */
  statementHref: string;
}) {
  // What this visitor chose last time on this site, read as an outside store
  // (like the dock's reduced-motion setting): the server draws the defaults.
  const raw = useSyncExternalStore(subscribePrefs, readPrefs, () => null);
  const prefs = useMemo(() => parsePrefs(raw), [raw]);
  useEffect(() => apply(prefs), [prefs]);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const update = useCallback((next: A11yPrefs) => writePrefs(next), []);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }, []);

  // Open: focus into the menu; Escape or a click elsewhere closes it.
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, close]);

  const percent = new Intl.NumberFormat(lang === "en" ? "en-US" : "he-IL", { style: "percent" }).format(TEXT_STEPS[prefs.text]);
  const toggle = (key: A11yToggle) => update({ ...prefs, [key]: !prefs[key] });
  const step = (by: number) => update({ ...prefs, text: clampStep(prefs.text + by) });

  return (
    <div
      ref={rootRef}
      data-a11y-menu=""
      dir={lang === "he" ? "rtl" : "ltr"}
      lang={lang}
      className="a11y-menu fixed end-4 bottom-4 z-40"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {/* React hoists this into <head>, once per page. */}
      <style href="coflow-a11y" precedence="default">
        {A11Y_CSS}
      </style>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="absolute bottom-full end-0 mb-2 w-72 max-w-[calc(100vw-32px)] rounded-2xl p-4"
          style={{
            background: "var(--color-surface)",
            color: "var(--color-ink-900)",
            boxShadow: "0 0 0 1px var(--color-line), 0 16px 40px -12px rgba(0,0,0,0.25)",
          }}
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 id={titleId} className="m-0 text-base font-semibold">
              {t.title}
            </h2>
            <button
              type="button"
              onClick={() => close(true)}
              aria-label={t.close}
              className="inline-flex size-8 items-center justify-center rounded-full hover:bg-[var(--color-surface-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-lime)]"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>

          <div className="flex items-center justify-between gap-2 py-2">
            <span className="text-sm">{t.textSize}</span>
            <div className="flex items-center gap-1">
              <StepButton label={t.smaller} disabled={prefs.text === 0} onClick={() => step(-1)}>
                <Minus className="size-4" aria-hidden />
              </StepButton>
              <span className="w-12 text-center text-sm tabular-nums" aria-live="polite">
                {percent}
              </span>
              <StepButton label={t.larger} disabled={prefs.text === TEXT_STEPS.length - 1} onClick={() => step(1)}>
                <Plus className="size-4" aria-hidden />
              </StepButton>
            </div>
          </div>

          {A11Y_TOGGLES.map((key) => (
            <div key={key} className="flex items-center justify-between gap-3 py-2">
              <span className="text-sm">{t.toggles[key]}</span>
              <Switch on={prefs[key]} label={t.toggles[key]} onToggle={() => toggle(key)} />
            </div>
          ))}

          <div className="mt-3 flex items-center justify-between gap-2 border-t pt-3" style={{ borderColor: "var(--color-line)" }}>
            <button
              type="button"
              onClick={() => update({ ...DEFAULT_PREFS })}
              disabled={isDefault(prefs)}
              className="rounded-lg px-2 py-1 text-sm font-medium underline-offset-2 hover:underline disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-lime)]"
            >
              {t.reset}
            </button>
            <a href={statementHref} className="text-sm underline underline-offset-2" style={{ color: "var(--color-ink-900)" }}>
              {t.statement}
            </a>
          </div>
        </div>
      )}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? close(true) : setOpen(true))}
        aria-label={t.open}
        aria-expanded={open}
        title={t.open}
        className="inline-flex size-12 items-center justify-center rounded-full shadow-lg transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-lime)]"
        style={{ background: "var(--color-ink-900)", color: "var(--color-surface)", boxShadow: "0 0 0 2px var(--color-surface), 0 8px 24px rgba(0,0,0,0.2)" }}
      >
        <Accessibility className="size-6" aria-hidden />
      </button>
    </div>
  );
}

function StepButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex size-8 items-center justify-center rounded-full border disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-lime)]"
      style={{ borderColor: "var(--color-line)" }}
    >
      {children}
    </button>
  );
}

/** The studio's track-and-knob switch. */
function Switch({ on, label, onToggle }: { on: boolean; label: string; onToggle: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onToggle}
      // The knob slides by translateX, which does not mirror — pin the track LTR.
      dir="ltr"
      className="cf-hit-24 relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-lime)]"
      style={{ backgroundColor: on ? "var(--color-ink-900)" : "var(--color-line)" }}
    >
      <span
        className="inline-block size-4 rounded-full transition-transform"
        style={{ background: "var(--color-surface)", transform: on ? "translateX(18px)" : "translateX(2px)" }}
      />
    </button>
  );
}
