export type Locale = "he" | "en";
export const SUPPORTED_LOCALES = ["he", "en"] as const;
export const DEFAULT_LOCALE: Locale = "he";
export const LOCALE_HEADER = "x-coflow-locale";
export const PATH_HEADER = "x-coflow-path";

export function localeFromPath(path: string): Locale | null {
  const first = path.split(/[/?#]/)[1];
  return first === "he" || first === "en" ? first : null;
}
export function withoutLocale(path: string): string {
  return localeFromPath(path) ? path.replace(/^\/(he|en)(?=\/|\?|#|$)/, "") || "/" : path;
}
export function localizedPath(path: string, locale: Locale): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const bare = withoutLocale(path).replace(/^\/(?=[?#])/, "");
  const pathname = bare.split(/[?#]/)[0];
  if (/\.[^/]+$/.test(pathname) || /^\/(api|_next)(\/|$)/.test(pathname)) return bare;
  return `/${locale}${bare === "/" ? "" : bare.startsWith("/") || bare.startsWith("?") || bare.startsWith("#") ? bare : `/${bare}`}`;
}
/** Old links always resolve to Hebrew; explicit URLs always determine language. */
export function localeRoute(path: string): { locale: Locale; path: string; redirect: string | null } {
  const locale = localeFromPath(path) ?? DEFAULT_LOCALE;
  const bare = withoutLocale(path);
  const aliases = ["/home", "/index", "/join", "/diagnosis", "/pricing", "/studio", "/how-it-works"];
  if (aliases.includes(bare)) return { locale, path: "/", redirect: localizedPath("/", locale) };
  return { locale, path: bare, redirect: localeFromPath(path) ? null : localizedPath(path, locale) };
}
