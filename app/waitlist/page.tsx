import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";
import { JsonLd, breadcrumbsJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";
import { JOIN_PATH } from "@/lib/site";

// Where "אין לך קוד?" lands.
//
// The home page is the door and it only opens with a code, which leaves most
// visitors with nothing to do. This page gives them the one thing they can do:
// the Studio's waitlist form, embedded — so the details land in the CRM with
// every other contact instead of in a mailbox.

export const metadata = buildMetadata({
  title: "Coflow — רשימת המתנה",
  description:
    "Coflow נפתחת לקבוצה סגורה וההרשמה היא עם קוד הזמנה. אין לך קוד? השאירי פרטים ברשימת ההמתנה ונעדכן אותך כשייפתח מקום.",
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
            <div className="max-w-2xl mx-auto text-center pt-8 md:pt-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                {t.eyebrow}
              </p>
              <h1 className="mt-4 font-display text-[32px] sm:text-[44px] md:text-[52px] leading-[1.1]">
                {t.title}
              </h1>
              <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
                {t.sub}
              </p>
            </div>

            {/* The form itself. It ships its own card, labels and success
                state, so the page around it adds width and nothing else — a
                second border here just draws a box inside a box. */}
            <div className="mt-8 md:mt-10 mx-auto w-full max-w-2xl">
              <WaitlistForm title={t.formTitle} />
            </div>

            <p className="mt-8 text-center text-[13px] text-ink-500">
              {t.backLabel}{" "}
              <a
                href={JOIN_PATH}
                className="font-medium text-ink-900 underline underline-offset-4"
              >
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
