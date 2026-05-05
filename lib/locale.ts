import "server-only";
import { cookies, headers } from "next/headers";

export type Locale = "he" | "en";

export const SUPPORTED_LOCALES = ["he", "en"] as const;
export const DEFAULT_LOCALE: Locale = "he";
export const LOCALE_COOKIE = "locale";

function pickFromAcceptLanguage(accept: string | null): Locale | null {
  if (!accept) return null;
  // accept-language: "he-IL,he;q=0.9,en;q=0.8"
  const tags = accept
    .split(",")
    .map((part) => {
      const [tag, q] = part.split(";");
      const quality = q?.match(/q=([\d.]+)/)?.[1];
      return { tag: tag.trim().toLowerCase(), q: quality ? parseFloat(quality) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { tag } of tags) {
    if (tag.startsWith("he")) return "he";
    if (tag.startsWith("en")) return "en";
  }
  return null;
}

function pickFromCountry(country: string | null): Locale | null {
  if (!country) return null;
  return country.toUpperCase() === "IL" ? "he" : "en";
}

/**
 * Resolve the visitor's locale on the server.
 * Order: cookie → Accept-Language → geo (Netlify country) → default (he).
 * Reading cookies/headers opts the route into dynamic rendering, which
 * is what we want — the home page personalises by locale on every request.
 */
export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  if (fromCookie === "he" || fromCookie === "en") return fromCookie;

  const h = await headers();
  const fromAccept = pickFromAcceptLanguage(h.get("accept-language"));
  if (fromAccept) return fromAccept;

  // Netlify exposes the visitor country in `x-country` (some setups also
  // forward `x-nf-country`). Cloudflare uses `cf-ipcountry`. Try them all.
  const country =
    h.get("x-country") ||
    h.get("x-nf-country") ||
    h.get("cf-ipcountry") ||
    null;
  const fromCountry = pickFromCountry(country);
  if (fromCountry) return fromCountry;

  return DEFAULT_LOCALE;
}

export function dirFor(locale: Locale): "rtl" | "ltr" {
  return locale === "he" ? "rtl" : "ltr";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "he" ? "en" : "he";
}
