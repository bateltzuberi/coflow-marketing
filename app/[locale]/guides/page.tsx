import Link from "next/link";
import { getLocale } from "@/lib/locale";
import { localizedPath } from "@/lib/locale-path";
import { GUIDE_SLUGS, SOLUTION_SLUGS, discoveryLabels, getSolution } from "@/lib/discovery-content";
import { getGuide } from "@/lib/guide-content";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { buildMetadata } from "@/lib/seo";

// The one page that explains what can be built in Coflow and how to choose.
// It follows the Academy index: a cream band, then white cards on paper. The
// home page ends at the price and holds none of this.

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ title: locale === "he" ? "מדריכים לקורסים ולמשפכים" : "Course and funnel guides", description: locale === "he" ? "מדריכים מעשיים לבחירת מערכת קורסים ולבניית משפך מכירה, עם דוגמאות ובדיקות לפני השקה." : "Practical guides to choosing a course platform and building a sales funnel, with examples and pre-launch checks.", path: "/guides", locale });
}

export default async function Guides() {
  const locale = await getLocale();
  const t = discoveryLabels[locale];
  const he = locale === "he";
  return (
    <>
      <Nav />
      <main>
        <section className="py-16 md:py-20" style={{ background: "var(--color-surface-2)" }}>
          <div className="container-page">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-display text-[32px] sm:text-[46px] md:text-[56px] leading-[1.1]">
                {he ? "מדריכים לעסק הדיגיטלי שלך" : "Guides for your digital business"}
              </h1>
              <p className="mt-5 text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
                {he ? "קופלו היא מערכת לניהול מותג עם AI. המוצרים, הדפים, הפניות והלקוחות שלך נמצאים באותה סביבת עבודה. מערכת הקורסים נבנית כחלק ממנה." : "Coflow is an AI brand-management system. Your offers, pages, enquiries and clients share one workspace. Course building is being developed within it."}
              </p>
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-page">
            <h2 className="font-display-h2 text-[24px] md:text-[30px] mb-6">{t.solutions}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SOLUTION_SLUGS.map((slug) => {
                const page = getSolution(slug, locale)!;
                return (
                  <li key={slug} className="rounded-[24px] bg-surface border border-line p-6 md:p-7">
                    <h3 className="text-[19px] md:text-[21px] font-bold text-ink-900 leading-snug">
                      <Link href={localizedPath(`/solutions/${slug}`, locale)}>{page.title}</Link>
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.6] text-ink-700">{page.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-page">
            <h2 className="font-display-h2 text-[24px] md:text-[30px] mb-6">{t.guides}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {GUIDE_SLUGS.map((slug) => {
                const page = getGuide(slug, locale)!;
                return (
                  <li key={slug} className="rounded-[24px] bg-surface border border-line p-6 md:p-7">
                    <h3 className="text-[19px] md:text-[21px] font-bold text-ink-900 leading-snug">
                      <Link href={localizedPath(`/guides/${slug}`, locale)}>{page.title}</Link>
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.6] text-ink-700">{page.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
