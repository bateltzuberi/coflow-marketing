import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";
import { TheInfiniteGrid } from "@/components/ui/the-infinite-grid";
import { wizardUrlFor } from "@/lib/site";

/**
 * Hero. One promise, one button. The page sells the free read, so the hero
 * leads with the real pain and offers exactly one action (no competing
 * secondary button next to the primary CTA).
 *
 * TODO(design): drop a real, anonymized preview of the read in here — seeing
 * the output is the strongest thing we can show. Kept clean until that asset
 * exists rather than shipping a misleading mock.
 */
export function Hero({ t, locale }: { t: Dictionary["hero"]; locale: Locale }) {
  return (
    <section className="relative overflow-hidden isolate">
      <TheInfiniteGrid />
      <div className="relative container-page pt-16 md:pt-24 lg:pt-28 pb-16 md:pb-24">
        <p className="font-mono-label text-center" lang="en">{t.eyebrow}</p>

        <h1 className="font-display mt-6 text-center mx-auto max-w-[1000px] text-[40px] sm:text-[56px] md:text-[68px] lg:text-[76px] leading-[1.05]">
          {t.title}
        </h1>

        <p className="mt-7 mx-auto max-w-[660px] text-center text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
          {t.sub}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a href={wizardUrlFor(locale)} className="btn btn-lime w-full sm:w-auto">
            {t.cta}
          </a>
          <p className="text-center text-[13px] text-ink-500">{t.micro}</p>
        </div>
      </div>
    </section>
  );
}
