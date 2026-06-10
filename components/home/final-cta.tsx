import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";
import { wizardUrlFor } from "@/lib/site";

/**
 * Closing CTA. Restates the promise and fires the one primary action a last
 * time. Same destination as every other primary button (reinforcement, not a
 * competing choice).
 */
export function FinalCta({ t, locale }: { t: Dictionary["finalCta"]; locale: Locale }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="card-xl bg-bridge-soft border border-line rounded-[32px] p-10 md:p-16 max-w-3xl mx-auto text-center">
          <h2 className="font-display-h2 text-[28px] md:text-[40px]">{t.title}</h2>
          <p className="mt-4 text-[16px] md:text-[18px] text-ink-700">{t.sub}</p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a href={wizardUrlFor(locale)} className="btn btn-lime">
              {t.cta}
            </a>
            <p className="text-[13px] text-ink-500">{t.micro}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
