import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { InviteForm } from "@/components/join/invite-form";
import { TheInfiniteGrid } from "@/components/ui/the-infinite-grid";
import { buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

// /join — the invite-only launch door.
//
// The rest of the site sells the free diagnosis. This page sells the product
// itself to people who were handed a code: one field, one price, one button.
// noindex on purpose — it isn't for search traffic, it's for the list.

export const metadata = buildMetadata({
  title: "כניסה עם קוד",
  description:
    "Coflow נפתחת לקבוצה סגורה. הכניסה בשלב הזה היא עם קוד הזמנה בלבד.",
  path: "/join",
  noindex: true,
});

export default async function JoinPage() {
  const locale = await getLocale();
  const t = getDict(locale).join;

  return (
    <>
      <Nav />
      <main>
        {/* Hero — the code field, above everything else. Someone who already
            has a code should not have to scroll to use it. */}
        <section className="relative overflow-hidden isolate">
          <TheInfiniteGrid />
          <div className="relative container-page pt-16 md:pt-24 lg:pt-28 pb-14 md:pb-20">
            <p className="text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-500">
              {t.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-center mx-auto max-w-[900px] text-[36px] sm:text-[50px] md:text-[60px] leading-[1.07]">
              {t.title}
            </h1>
            <p className="mt-6 mx-auto max-w-[600px] text-center text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
              {t.sub}
            </p>

            <div className="mt-8">
              <InviteForm t={t} locale={locale} />
            </div>

            <p className="mt-6 text-center text-[13px] text-ink-500">
              {t.noCodeLabel}{" "}
              <a href="/contact" className="font-medium text-ink-900 underline underline-offset-4">
                {t.noCodeCta}
              </a>
            </p>
          </div>
        </section>

        {/* What the subscription actually buys. Four concrete things, not
            adjectives — she is deciding whether €14 is worth it. */}
        <section className="section">
          <div className="container-page">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display-h2 text-[24px] md:text-[34px] text-center">
                {t.includesTitle}
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {t.includes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[18px] border border-line bg-surface p-6"
                  >
                    <h3 className="text-[17px] font-semibold text-ink-900">{item.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-[1.6] text-ink-700">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why it's closed — answers the obvious question instead of leaving
            it to feel like artificial scarcity. */}
        <section className="section">
          <div className="container-page">
            <div className="max-w-2xl mx-auto rounded-[28px] bg-lavender-tint border border-lavender-deep/20 p-8 md:p-12">
              <h2 className="font-display-h2 text-[22px] md:text-[30px] text-lavender-ink">
                {t.whyTitle}
              </h2>
              <p className="mt-4 text-[16px] md:text-[17px] leading-[1.6] text-lavender-ink/85">
                {t.whyBody}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
