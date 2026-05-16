import type { Locale } from "@/lib/locale";
import { SITE } from "@/lib/site";

/**
 * Closing CTA at the bottom of the home page. Mirrors the wizard CTA
 * up top — same destination, fresh framing — so the page bookends
 * around the same call-to-action.
 */
export function StartCta({ locale }: { locale: Locale }) {
  const copy = locale === "he"
    ? {
        title: "מוכנה לראות את הניתוח שלך?",
        body: "מדביקות לינקים, מקבלות בחזרה תמונה חדה של איך המותג שלך נראה מבחוץ. כ-7 דקות, בחינם.",
        cta: "להתחיל את הניתוח",
        caption: "בלי כרטיס · המותג הראשון חינם לתמיד",
      }
    : {
        title: "Ready to see your analysis?",
        body: "Paste your links and get a clear read of how your brand looks from the outside. About 7 minutes, free.",
        cta: "Run my analysis",
        caption: "No card · First brand free, forever",
      };

  return (
    <section id="waitlist" className="section">
      <div className="container-page">
        <div className="card-xl bg-bridge-soft border border-line rounded-[32px] p-10 md:p-16 max-w-3xl mx-auto text-center">
          <h2 className="font-display-h2 text-[28px] md:text-[40px]">
            {copy.title}
          </h2>
          <p className="mt-4 text-[16px] text-ink-700 max-w-md mx-auto">
            {copy.body}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a href={SITE.wizardUrl} className="btn btn-lime">
              {copy.cta} →
            </a>
            <p className="text-[13px] text-ink-500">{copy.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
