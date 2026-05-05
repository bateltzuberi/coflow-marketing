import { WaitlistForm } from "@/components/waitlist-form";
import type { Locale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

export function StartCta({ locale }: { locale: Locale }) {
  const t = getDict(locale).waitlist;
  const nav = getDict(locale).nav;

  return (
    <section id="waitlist" className="section">
      <div className="container-page">
        <div className="card-xl bg-bridge-soft border border-line rounded-[32px] p-10 md:p-16 max-w-3xl mx-auto text-center">
          <h2 className="font-display-h2 text-[28px] md:text-[40px]">
            {nav.cta}
          </h2>
          <p className="mt-4 text-[16px] text-ink-700 max-w-md mx-auto">
            {locale === "he"
              ? "השאירי אימייל. נשלח לך הזמנה ברגע שיש מקום במחזור הקרוב."
              : "Drop your email. We'll send you an invite the moment a spot opens in the next cohort."}
          </p>
          <div className="mt-8">
            <WaitlistForm
              source="home-cta"
              compact
              strings={{
                placeholder: t.placeholder,
                submit: t.submit,
                submitting: locale === "he" ? "שולחת…" : "Saving…",
                successTitle: t.success,
                successBody:
                  locale === "he"
                    ? "נכנסת. נשלח עדכון ל-{email} ברגע שמקום מתפנה."
                    : "You're in. We'll email {email} the moment a spot opens.",
                errorFallback: t.error,
                privacy: t.privacy,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
