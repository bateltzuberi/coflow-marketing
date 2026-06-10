import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";
import { TheInfiniteGrid } from "@/components/ui/the-infinite-grid";
import { wizardUrlFor } from "@/lib/site";

export function Hero({ t, locale }: { t: Dictionary["hero"]; locale: Locale }) {
  return (
    <section className="relative overflow-hidden isolate">
      <TheInfiniteGrid />
      <div className="relative container-page pt-16 md:pt-24 lg:pt-28 pb-16 md:pb-20">
        <p className="font-mono-label text-center" lang="en">{t.eyebrow}</p>

        <h1 className="font-display mt-6 text-center mx-auto max-w-[1100px] text-[44px] sm:text-[64px] md:text-[80px] lg:text-[92px]">
          <span className="block">{t.titleA}</span>
          <span className="block">{t.titleB}</span>
          <span className="block text-bridge">{t.titleC}</span>
        </h1>

        <p className="mt-7 mx-auto max-w-[640px] text-center text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
          {t.subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={wizardUrlFor(locale)} className="btn btn-lime w-full sm:w-auto">
            {t.cta} →
          </a>
          <Link
            href="/#surfaces"
            className="text-[14px] font-semibold text-lavender-deep hover:text-lavender-ink transition-colors inline-flex items-center gap-1.5"
          >
            <span className="dot dot-lavender" aria-hidden="true" />
            {t.ctaSecondary} →
          </Link>
        </div>

        <p className="mt-5 text-center text-[13px] text-ink-500">{t.caption}</p>

        <div className="mt-16 md:mt-20">
          <StudioDashboard
            label={t.visualLabel}
            caption={t.visualCaption}
            metric={t.visualMetric}
          />
        </div>
      </div>
    </section>
  );
}

/** Single Studio dashboard placeholder — lime-accented, no split. */
function StudioDashboard({
  label,
  caption,
  metric,
}: {
  label: string;
  caption: string;
  metric: string;
}) {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="rounded-[28px] border border-line bg-white shadow-soft p-3">
        <div className="rounded-[22px] border border-lime-deep/25 bg-lime-tint p-5 md:p-6">
          <div className="flex items-center justify-between">
            <span className="chip chip-lime" lang="en">
              <span className="dot dot-lime" aria-hidden="true" /> {label}
            </span>
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-ink-300" />
              <span className="w-2 h-2 rounded-full bg-ink-300" />
              <span className="w-2 h-2 rounded-full bg-ink-300" />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-7 gap-2" aria-hidden="true">
            {Array.from({ length: 7 }).map((_, col) => (
              <div key={col} className="flex flex-col gap-2">
                {Array.from({ length: 5 }).map((_, row) => {
                  const filled = (col + row) % 3 === 0;
                  const highlight = col === 3 && row === 1;
                  return (
                    <div
                      key={row}
                      className={`h-7 rounded-[8px] ${
                        filled ? "bg-lime" : "bg-ink-300/25"
                      } ${highlight ? "ring-2 ring-offset-1 ring-ink-900/15" : ""}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-[13px] font-medium text-lime-ink">{caption}</p>
            <span className="text-[11px] font-mono-label text-lime-ink" aria-hidden="true">
              {metric}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
