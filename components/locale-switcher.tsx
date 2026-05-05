import { setLocale } from "@/app/actions";
import { otherLocale, type Locale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

/**
 * Plain-form locale switch. Server action sets the cookie and
 * revalidates, so it works even with JS disabled.
 */
export function LocaleSwitcher({ locale }: { locale: Locale }) {
  const t = getDict(locale).footer;
  const next = otherLocale(locale);
  return (
    <form action={setLocale}>
      <input type="hidden" name="locale" value={next} />
      <button
        type="submit"
        aria-label={t.langSwitcherAria}
        className="font-mono-label text-white/60 hover:text-white transition"
        lang={next}
      >
        {t.langSwitcher}
      </button>
    </form>
  );
}
