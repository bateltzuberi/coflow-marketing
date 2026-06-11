import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";
import { TheInfiniteGrid } from "@/components/ui/the-infinite-grid";
import { SITE } from "@/lib/site";
import { HandleForm } from "./handle-form";

/**
 * Hero. The diagnosis field lives here, on the page, so she pastes her link
 * and starts without bouncing to another page first. id="start" so every
 * other CTA on the site can scroll back to it.
 */
export function Hero({ t, locale }: { t: Dictionary["hero"]; locale: Locale }) {
  return (
    <section id="start" className="relative overflow-hidden isolate scroll-mt-24">
      <TheInfiniteGrid />
      <div className="relative container-page pt-16 md:pt-24 lg:pt-28 pb-16 md:pb-20">
        <h1 className="font-display text-center mx-auto max-w-[1000px] text-[38px] sm:text-[54px] md:text-[64px] lg:text-[72px] leading-[1.06]">
          {t.title}
        </h1>

        <p className="mt-7 mx-auto max-w-[640px] text-center text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
          {t.sub}
        </p>

        <p className="mt-6 text-center text-[15px] font-semibold text-ink-900">{t.promise}</p>

        <div className="mt-5">
          <HandleForm
            placeholder={t.inputPlaceholder}
            cta={t.inputCta}
            startUrl={SITE.wizardUrl}
            locale={locale}
          />
          <p className="mt-4 text-center text-[13px] text-ink-500">{t.secondary}</p>
        </div>
      </div>
    </section>
  );
}
