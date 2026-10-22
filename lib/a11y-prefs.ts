// A visitor's accessibility choices on coflow.social — the menu behind the
// accessibility button (components/accessibility-menu.tsx). Ported from the
// studio's public pages (shebossit-cms src/lib/public-page/a11y-prefs.ts) —
// one behaviour for every Coflow page a visitor reads.
//
// Not an overlay: nothing here scans or rewrites the page. Each choice is one
// attribute on <html>, and A11Y_CSS below draws it. The page itself is built
// accessible (real headings, labels, focus rings, the reading direction); the
// menu only lets a visitor push the look further than the owner's design does.
//
// Stored in the visitor's own browser, per site, never sent anywhere.

export const A11Y_STORAGE_KEY = "coflow-a11y";

/** Text size steps, as a zoom of the whole page: 100%, 115%, 130%, 150%.
 *  A zoom, not a root font-size — some blocks set their text in px, and a
 *  root font-size would leave exactly those small. */
export const TEXT_STEPS = [1, 1.15, 1.3, 1.5] as const;

export type A11yPrefs = {
  /** Index into TEXT_STEPS. */
  text: number;
  contrast: boolean;
  motion: boolean;
  links: boolean;
  font: boolean;
  spacing: boolean;
};

export type A11yToggle = Exclude<keyof A11yPrefs, "text">;

export const A11Y_TOGGLES: readonly A11yToggle[] = ["contrast", "motion", "links", "font", "spacing"];

export const DEFAULT_PREFS: A11yPrefs = {
  text: 0,
  contrast: false,
  motion: false,
  links: false,
  font: false,
  spacing: false,
};

/** Whatever the browser kept — or nothing, or junk — as a whole set of choices. */
export function parsePrefs(raw: string | null | undefined): A11yPrefs {
  if (!raw) return { ...DEFAULT_PREFS };
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return { ...DEFAULT_PREFS };
  }
  if (!data || typeof data !== "object") return { ...DEFAULT_PREFS };
  const d = data as Record<string, unknown>;
  const text = typeof d.text === "number" && Number.isInteger(d.text) ? clampStep(d.text) : 0;
  const prefs: A11yPrefs = { ...DEFAULT_PREFS, text };
  for (const key of A11Y_TOGGLES) prefs[key] = d[key] === true;
  return prefs;
}

export function clampStep(step: number): number {
  return Math.max(0, Math.min(TEXT_STEPS.length - 1, step));
}

export function isDefault(prefs: A11yPrefs): boolean {
  return prefs.text === 0 && A11Y_TOGGLES.every((key) => !prefs[key]);
}

/** The attributes on <html> that A11Y_CSS reads. Absent = off. */
export function prefAttributes(prefs: A11yPrefs): Record<string, string | null> {
  return {
    "data-a11y-text": prefs.text > 0 ? String(prefs.text) : null,
    "data-a11y-contrast": prefs.contrast ? "" : null,
    "data-a11y-motion": prefs.motion ? "" : null,
    "data-a11y-links": prefs.links ? "" : null,
    "data-a11y-font": prefs.font ? "" : null,
    "data-a11y-spacing": prefs.spacing ? "" : null,
  };
}

// The menu itself ([data-a11y-menu]) keeps its own look in every mode, so the
// way back is always where the visitor left it. Colours are the app's tokens:
// the high-contrast mode is the plainest black on white there is.
const NOT_MENU = ":not([data-a11y-menu], [data-a11y-menu] *)";

export const A11Y_CSS = [
  ...TEXT_STEPS.slice(1).map((zoom, i) => `html[data-a11y-text="${i + 1}"] body { zoom: ${zoom} }`),
  // The menu keeps its own size: zooms multiply, so it takes the inverse —
  // at 150% the panel would otherwise be wider than a phone.
  ...TEXT_STEPS.slice(1).map(
    (zoom, i) => `html[data-a11y-text="${i + 1}"] [data-a11y-menu] { zoom: ${Number((1 / zoom).toFixed(4))} }`,
  ),
  // Spacing and font are INHERITED, so leaving the menu out of their rules is
  // not enough — its root would pick them up from the page around it.
  `[data-a11y-menu] { letter-spacing: normal !important; word-spacing: normal !important; line-height: 1.5 !important }`,
  // High contrast: every surface white, every text black, gradients and
  // shadows gone, buttons outlined. Pictures and video stay as they are.
  `html[data-a11y-contrast] body *${NOT_MENU}:not(img, video, iframe, svg, svg *) {
    background-color: var(--color-surface) !important; background-image: none !important;
    color: var(--color-ink-900) !important; border-color: var(--color-ink-900) !important;
    box-shadow: none !important; text-shadow: none !important }`,
  `html[data-a11y-contrast] body { background: var(--color-surface) !important }`,
  `html[data-a11y-contrast] :is(a, button, [role="button"])${NOT_MENU} { box-shadow: inset 0 0 0 2px var(--color-ink-900) !important }`,
  `html[data-a11y-contrast] svg${NOT_MENU} { color: var(--color-ink-900) !important }`,
  // No motion: animations and transitions stop, scrolling strips stand still,
  // blocks waiting to fade in are simply there.
  `html[data-a11y-motion] *, html[data-a11y-motion] *::before, html[data-a11y-motion] *::after {
    animation: none !important; transition: none !important; scroll-behavior: auto !important }`,
  `html[data-a11y-motion] [data-reveal] { opacity: 1 !important; transform: none !important }`,
  `html[data-a11y-links] a${NOT_MENU} { text-decoration: underline !important; text-underline-offset: 3px !important; text-decoration-thickness: 2px !important }`,
  // A plain face that has Hebrew and Latin letters both.
  `html[data-a11y-font] body *${NOT_MENU} { font-family: Arial, Helvetica, sans-serif !important }`,
  // WCAG 1.4.12 text-spacing values, slightly over: line 1.75, letters 0.12em, words 0.16em.
  `html[data-a11y-spacing] body *${NOT_MENU} { line-height: 1.75 !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important }`,
].join("\n");
