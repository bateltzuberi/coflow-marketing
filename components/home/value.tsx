import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";
import { wizardUrlFor } from "@/lib/site";

/**
 * What the free read gives her. Three concrete outcomes, then the primary
 * CTA again (same single action). Grounding line kills the "generic AI" fear.
 */
export function Value({ t, locale }: { t: Dictionary["value"]; locale: Locale }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-mono-label" lang="en">{t.eyebrow}</p>
          <h2 className="font-display-h2 mt-4 text-[28px] md:text-[44px]">{t.title}</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
          {t.items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-[24px] bg-surface border border-line p-7 md:p-8"
            >
              <span
                className="inline-flex items-center justify-center size-8 rounded-full text-sm font-bold mb-4"
                style={{ backgroundColor: "var(--color-lime)", color: "var(--color-lime-ink)" }}
              >
                {i + 1}
              </span>
              <h3 className="text-[17px] md:text-[18px] font-bold text-ink-900 leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] md:text-[15px] leading-[1.6] text-ink-700">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] text-ink-500 max-w-md">{t.grounding}</p>
          <a href={wizardUrlFor(locale)} className="btn btn-lime">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
