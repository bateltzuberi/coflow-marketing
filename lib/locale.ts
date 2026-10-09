import "server-only";
import { headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_HEADER, type Locale } from "./locale-path";
export { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "./locale-path";
export const LOCALE_COOKIE = "locale";
export async function getLocale(): Promise<Locale> {
  const locale = (await headers()).get(LOCALE_HEADER);
  return locale === "he" || locale === "en" ? locale : DEFAULT_LOCALE;
}
export function dirFor(locale: Locale): "rtl" | "ltr" { return locale === "he" ? "rtl" : "ltr"; }
export function otherLocale(locale: Locale): Locale { return locale === "he" ? "en" : "he"; }
