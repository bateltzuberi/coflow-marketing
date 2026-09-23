import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd, breadcrumbsJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";
import { SITE } from "@/lib/site";
import { AcademySearch, type ApexSearchRow } from "@/components/academy-search";
import {
  academySide,
  articleSide,
  getAcademyPayload,
  totalQuestions,
} from "@/lib/academy";

// coflow.social/academy — the public help centre.
//
// It sits on the apex, not behind the app's login and not on a support
// subdomain, for three reasons: a person looking for an answer finds it on
// Google; a support reply can link it; and the authority it earns accrues to
// the domain the rest of the site is ranking on.
//
// The text comes from the product (lib/academy.ts). This page only frames it.

/** How many of an area's questions the index card shows before it hands over
 *  to the area page. */
const PREVIEW_QUESTIONS = 3;

export const metadata = buildMetadata({
  title: "Coflow Academy",
  description:
    "How Coflow works, area by area: products, funnels, brand profile, platforms, content anchors, CRM, tasks and measurement.",
  path: "/academy",
});

export default async function AcademyIndexPage() {
  const locale = await getLocale();
  const t = getDict(locale).academy;
  const { areas, synonyms } = await getAcademyPayload();

  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Coflow Academy", path: "/academy" },
        ])}
      />
      <Nav />
      <main>
        {/* The band: one question, the promise under it, and the size of the
            place. Help centres open this way for a reason — the visitor
            arrived with a question, not to admire a hero. */}
        <section className="py-16 md:py-20" style={{ background: "var(--color-lavender)" }}>
          <div className="container-page">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-display text-[32px] sm:text-[46px] md:text-[56px] leading-[1.1]">
                {t.heroQuestion}
              </h1>
              <p className="mt-5 text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
                {t.heroSub}
              </p>
              {areas.length > 0 && (
                <AcademySearch
                  rows={areas.flatMap((area): ApexSearchRow[] =>
                    area.articles.map((article) => ({
                      q: articleSide(article, locale).q,
                      href: `/academy/${area.id}#${article.id}`,
                      areaTitle: academySide(area, locale).title,
                    })),
                  )}
                  synonyms={synonyms}
                  placeholder={t.searchPlaceholder}
                  label={t.searchLabel}
                  noResults={t.searchNoResults}
                  noResultsHint={t.searchNoResultsHint}
                />
              )}
              {areas.length > 0 && (
                <p className="mt-5 font-mono-label text-ink-500">
                  {t.countLine
                    .replace("{areas}", String(areas.length))
                    .replace("{questions}", String(totalQuestions(areas)))}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-page">
            {areas.length === 0 ? (
              <div className="max-w-xl mx-auto rounded-[24px] bg-surface border border-line p-7 text-center">
                <h2 className="text-[19px] font-bold text-ink-900">{t.emptyTitle}</h2>
                <p className="mt-2 text-[15px] leading-[1.6] text-ink-700">{t.emptyBody}</p>
                <a className="btn btn-ghost btn-sm mt-5" href={SITE.studioAppUrl}>
                  {t.ctaButton}
                </a>
              </div>
            ) : (
              <>
                <h2 className="font-display-h2 text-[24px] md:text-[30px] mb-6">
                  {t.areasTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {areas.map((area) => {
                    const side = academySide(area, locale);
                    return (
                      <div
                        key={area.id}
                        className="rounded-[24px] bg-surface border border-line p-6 md:p-7"
                      >
                        <div className="flex items-center gap-3">
                          <span
                            aria-hidden
                            className="block h-9 w-9 shrink-0 rounded-[12px]"
                            style={{ background: area.color ?? "var(--color-line)" }}
                          />
                          <h3 className="text-[19px] md:text-[21px] font-bold text-ink-900 leading-snug">
                            <Link href={`/academy/${area.id}`}>{side.title}</Link>
                          </h3>
                        </div>
                        <p className="mt-3 text-[15px] leading-[1.6] text-ink-700">
                          {side.blurb}
                        </p>
                        {/* Questions are listed, not hidden behind the card: they
                            are what a person is searching for, and they are the
                            internal links that make the area pages findable. Only
                            the first few, though — fourteen full lists turn the
                            index into a ten-screen page nobody reads to the end. */}
                        <ul className="mt-4 space-y-1.5">
                          {area.articles.slice(0, PREVIEW_QUESTIONS).map((article) => (
                            <li key={article.id}>
                              <Link
                                href={`/academy/${area.id}#${article.id}`}
                                className="text-[14px] leading-[1.5] text-ink-700 underline-offset-4 hover:underline"
                              >
                                {articleSide(article, locale).q}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/academy/${area.id}`}
                          className="mt-4 inline-block font-mono-label text-ink-500 underline-offset-4 hover:underline"
                        >
                          {t.questionsCount.replace("{n}", String(area.articles.length))} ←
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>

        {areas.length > 0 && (
          <section className="section pt-0">
            <div className="container-page">
              <div className="max-w-2xl mx-auto rounded-[24px] bg-surface border border-line p-7 text-center">
                <h2 className="text-[19px] md:text-[21px] font-bold text-ink-900">
                  {t.ctaTitle}
                </h2>
                <p className="mt-2 text-[15px] leading-[1.6] text-ink-700">{t.ctaBody}</p>
                <a className="btn btn-lime mt-5" href={SITE.studioAppUrl}>
                  {t.ctaButton}
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
