import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd, breadcrumbsJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";
import { SITE } from "@/lib/site";
import { AcademyShotFigure } from "@/components/academy-shot";
import {
  academyLinkHref,
  academySide,
  articleSide,
  getAcademyArea,
  getAcademyAreas,
} from "@/lib/academy";

// coflow.social/academy/<area> — one area, every question answered in full.
//
// Nothing is collapsed here, unlike the in-app version. A stranger reading this
// page is not scanning a list of their own questions; they arrived on one
// question from a search result and want the answer visible, and a crawler
// should see the text rather than a closed accordion. The FAQPage JSON-LD is
// what can put these answers into the search result itself.

export async function generateStaticParams() {
  const areas = await getAcademyAreas();
  return areas.map((a) => ({ area: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: areaId } = await params;
  const area = await getAcademyArea(areaId);
  if (!area) return buildMetadata({ title: "Coflow Academy", description: "", path: "/academy", noindex: true });
  // Metadata is one fixed language per URL; English is the one search engines
  // index this site in, and the page body still follows the reader's locale.
  return buildMetadata({
    title: `${area.en.title} · Coflow Academy`,
    description: area.en.blurb,
    path: `/academy/${area.id}`,
  });
}

export default async function AcademyAreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: areaId } = await params;
  const area = await getAcademyArea(areaId);
  if (!area) notFound();

  const locale = await getLocale();
  const t = getDict(locale).academy;
  const side = academySide(area, locale);

  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Coflow Academy", path: "/academy" },
          { name: area.en.title, path: `/academy/${area.id}` },
        ])}
      />
      <JsonLd
        data={faqJsonLd(
          area.articles.map((article) => ({
            q: article.en.q,
            a: article.en.a.join(" "),
          })),
        )}
      />
      <Nav />
      <main>
        <section className="section">
          <div className="container-page">
            <div className="max-w-2xl mx-auto pt-8 md:pt-12">
              <Link
                href="/academy"
                className="font-mono-label text-ink-500 underline-offset-4 hover:underline"
              >
                {t.backToIndex}
              </Link>
              <h1 className="mt-4 font-display text-[30px] sm:text-[40px] md:text-[48px] leading-[1.1]">
                {side.title}
              </h1>
              <p className="mt-5 text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
                {side.intro}
              </p>

              {/* A table of contents, so a long page is still navigable and every
                  answer has an internal link pointing at it. */}
              <nav className="mt-8 rounded-[24px] bg-surface border border-line p-6">
                <p className="font-mono-label text-ink-500">{t.inThisArea}</p>
                <ul className="mt-3 space-y-1.5">
                  {area.articles.map((article) => (
                    <li key={article.id}>
                      <a
                        href={`#${article.id}`}
                        className="text-[15px] leading-[1.5] text-ink-700 underline-offset-4 hover:underline"
                      >
                        {articleSide(article, locale).q}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-page">
            <div className="max-w-2xl mx-auto space-y-8">
              {area.articles.map((article) => {
                const a = articleSide(article, locale);
                return (
                  <article key={article.id} id={article.id} className="scroll-mt-24">
                    <h2 className="text-[20px] md:text-[23px] font-bold text-ink-900 leading-snug">
                      {a.q}
                    </h2>
                    {article.asked && (
                      <p className="mt-2 font-mono-label text-ink-500">{t.askedBadge}</p>
                    )}
                    {a.a.map((paragraph, i) => (
                      <p
                        key={i}
                        className="mt-3 text-[16px] md:text-[17px] leading-[1.65] text-ink-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {a.steps && a.steps.length > 0 && (
                      <ol className="mt-4 space-y-3">
                        {a.steps.map((step, k) => (
                          <li key={k} className="flex gap-3">
                            <span
                              aria-hidden
                              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[12px] font-bold text-ink-900"
                            >
                              {k + 1}
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[16px] leading-[1.65] text-ink-700">
                                {step.text}
                              </span>
                              {step.link && (
                                <a
                                  href={academyLinkHref(step.link.href)}
                                  className="mt-1 inline-block text-[14px] text-ink-900 underline-offset-4 hover:underline"
                                >
                                  {step.link.label} →
                                </a>
                              )}
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {a.shots?.map((shot) => (
                      <AcademyShotFigure key={shot.src} shot={shot} />
                    ))}
                    {a.links && a.links.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {a.links.map((link) => (
                          <a
                            key={link.href}
                            href={academyLinkHref(link.href)}
                            className="btn btn-ghost btn-sm"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-page">
            <div className="max-w-2xl mx-auto rounded-[24px] bg-surface border border-line p-7 text-center">
              <h2 className="text-[19px] md:text-[21px] font-bold text-ink-900">{t.ctaTitle}</h2>
              <p className="mt-2 text-[15px] leading-[1.6] text-ink-700">{t.ctaBody}</p>
              <a className="btn btn-lime mt-5" href={SITE.studioAppUrl}>
                {t.ctaButton}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
