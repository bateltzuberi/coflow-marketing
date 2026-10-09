import { headers } from "next/headers";
import { PATH_HEADER, localizedPath, type Locale } from "@/lib/locale-path";
import { getDict } from "@/lib/dictionary";

export async function LocaleSwitcher({ locale, className = "font-bold text-ink-700 hover:text-ink-900 transition" }: {
  locale: Locale; className?: string;
}) {
  const next = locale === "he" ? "en" : "he";
  const t = getDict(locale).footer;
  const path = (await headers()).get(PATH_HEADER) ?? "/";
  return <a href={localizedPath(path, next)} className={className} lang={next} hrefLang={next} aria-label={t.langSwitcherAria}>{t.langSwitcher}</a>;
}
