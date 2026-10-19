import { redirect } from "next/navigation";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";
import { buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";
import { betaSignupOpen } from "@/lib/beta-window";
import { codeSignupUrl, planCardHref } from "@/lib/site";

// Where Join goes once the beta has closed (Thursday 2026-10-22, 20:00 Israel
// time). While sign-up is still open there is nothing to wait for, so the page
// sends the visitor on to the plan card — a temporary redirect, so it stops the
// moment the beta closes. The Studio's /join sends people here after the close.

export async function generateMetadata() {
  const locale = await getLocale();
  const t = getDict(locale).waitlist;
  return buildMetadata({ title: t.title, description: t.sub, path: "/waitlist", locale, noindex: true });
}

export default async function WaitlistPage() {
  const locale = await getLocale();
  if (betaSignupOpen()) redirect(planCardHref(locale));
  const t = getDict(locale).waitlist;

  return (
    <>
      <Nav />
      <main>
        <section className="section">
          <div className="container-page">
            <div className="max-w-3xl mx-auto text-center pt-8 md:pt-14">
              <h1 className="font-black text-[44px] sm:text-[60px] md:text-[76px] leading-[0.95] tracking-[-0.035em] text-ink-900">
                {t.title}
              </h1>
              <p className="mt-6 text-[18px] md:text-[21px] leading-[1.55] text-ink-700 max-w-[34em] mx-auto">
                {t.sub}
              </p>
            </div>

            {/* The form ships its own card, labels and thank-you state. */}
            <div className="mt-10 md:mt-12 mx-auto w-full max-w-xl">
              <WaitlistForm title={t.formTitle} locale={locale} />
            </div>

            <p className="mt-8 text-center text-[15px] text-ink-700">
              {t.backLabel}{" "}
              <a href={codeSignupUrl(locale)} className="font-bold text-ink-900 underline underline-offset-4">
                {t.backCta}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
