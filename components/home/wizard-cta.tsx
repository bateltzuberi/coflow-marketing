import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";
import { wizardUrlFor } from "@/lib/site";

/**
 * Wizard CTA band — the funnel's centerpiece. Sits right after the hero
 * so the first thing the user reads after the headline is what the
 * analysis actually delivers. Lavender-tinted background to lift it off
 * the lime-dominant rest of the page and signal "this is the wizard
 * surface."
 *
 * Primary CTA points to the live wizard at studio.coflow.social/start.
 * No client-side state — the wizard owns its own flow.
 */
export function WizardCta({ t, locale }: { t: Dictionary["wizard"]; locale: Locale }) {
  return (
    <section id="wizard" className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[32px] bg-lavender-tint border border-lavender-deep/20 p-10 md:p-16">
          {/* Soft lavender blob, mirrors the old agency-band styling so
              the section sits in the page rhythm the design was built for. */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -end-24 w-72 h-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(204, 184, 245, 0.6), transparent 70%)" }}
          />

          <div className="relative max-w-[1000px] mx-auto">
            <div className="text-center">
              <p className="font-mono-label" lang="en" style={{ color: "var(--color-lavender-ink)", opacity: 0.7 }}>
                {t.eyebrow}
              </p>
              <h2 className="font-display-h2 mt-3 text-[28px] md:text-[40px] text-lavender-ink">
                {t.title}
              </h2>
              <p className="mt-4 text-[16px] md:text-[17px] leading-[1.6] text-lavender-ink/85 max-w-[640px] mx-auto">
                {t.subtitle}
              </p>
            </div>

            <ul className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.bullets.map((b) => (
                <li
                  key={b.title}
                  className="rounded-[20px] bg-white/65 border border-lavender-deep/15 p-5 md:p-6"
                >
                  <h3 className="text-[16px] md:text-[17px] font-bold text-lavender-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-[14px] md:text-[15px] leading-[1.6] text-lavender-ink/85">
                    {b.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-3">
              <a href={wizardUrlFor(locale)} className="btn btn-lavender">
                {t.cta} →
              </a>
              <p className="text-[13px] text-lavender-ink/65">{t.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
