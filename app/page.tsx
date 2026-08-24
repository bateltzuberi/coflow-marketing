import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { InviteForm } from "@/components/join/invite-form";
import { TheInfiniteGrid } from "@/components/ui/the-infinite-grid";
import { JsonLd, organizationJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

// The home page IS the door.
//
// While the launch is invite-only, coflow.social opens on registration: a code
// field, the price, and what the subscription buys. The free Instagram
// diagnosis still exists — it moved to /diagnosis, on its own URL, and is
// reached from the nav.
//
// Indexed (unlike the old /join): this is the front door of the site now, so
// it has to be findable even while the product behind it is closed.

export const metadata = buildMetadata({
  title: "Coflow — כניסה עם קוד הזמנה",
  description:
    "Coflow נפתחת לקבוצה סגורה. ההרשמה בשלב הזה היא עם קוד הזמנה בלבד — €14 לחודש, בלי תקופת ניסיון.",
  path: "/",
});

export default async function Home() {
  const locale = await getLocale();
  const t = getDict(locale).join;

  return (
    <>
      <JsonLd data={organizationJsonLd()} />
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
            <p className="mt-6 mx-auto max-w-[620px] text-center text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
              {t.sub}
            </p>
            <p className="mt-5 text-center text-[15px] font-semibold text-ink-900">
              {t.inviteNote}
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

        {/* The messages. Each is a position you could disagree with, followed
            by the thing in the product that makes it true. A claim without its
            mechanism is a slogan; a mechanism without its claim is a feature
            list. Both were wrong here before. */}
        <section className="section">
          <div className="container-page">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display-h2 text-[24px] md:text-[34px] text-center">
                {t.messagesTitle}
              </h2>
              <div className="mt-10 space-y-5">
                {t.messages.map((m) => (
                  <div
                    key={m.claim}
                    className="rounded-[18px] border border-line bg-surface p-6 md:p-8"
                  >
                    <h3 className="text-[20px] md:text-[24px] font-bold leading-snug text-ink-900">
                      {m.claim}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.65] text-ink-700">
                      {m.body}
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
