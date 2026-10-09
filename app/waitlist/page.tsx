import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";
import { JsonLd, breadcrumbsJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

// Where "אין לך קוד?" lands.
//
// The home page is the door and it only opens with a code, which leaves most
// visitors with nothing to do. This page gives them the one thing they can do:
// the Studio's waitlist form, embedded — so the details land in the CRM with
// every other contact instead of in a mailbox.

export const metadata = buildMetadata({
  title: "הרשמה לקופלו",
  description:
    "קופלו נפתחת בהדרגה. נרשמים לרשימת ההמתנה, ואנחנו שולחים הזמנה כשמגיע התור שלך.",
  path: "/waitlist",
});

export default async function WaitlistPage() {
  const locale = await getLocale();
  const t = getDict(locale).waitlist;

  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Waitlist", path: "/waitlist" },
        ])}
      />
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
              <a href="/#price" className="font-bold text-ink-900 underline underline-offset-4">
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
