import Link from "next/link";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { JsonLd, breadcrumbsJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/seo";
import { localizedPath, type Locale } from "@/lib/locale-path";
import { discoveryLabels, SOLUTION_SLUGS, getSolution, type DiscoveryPage as PageCopy } from "@/lib/discovery-content";
import type { GuidePage } from "@/lib/guide-content";

export function DiscoveryPage({ page, path, locale, guide = false }: {
  page: PageCopy | GuidePage; path: string; locale: Locale; guide?: boolean;
}) {
  const t = discoveryLabels[locale];
  const extras = page as GuidePage;
  return <>
    <JsonLd data={webPageJsonLd(page.title, page.description, path, locale)} />
    <JsonLd data={breadcrumbsJsonLd([
      { name: t.home, path: "/" },
      { name: guide ? t.guides : t.solutions, path: guide ? "/guides" : "/solutions" },
      { name: page.title, path },
    ], locale)} />
    <JsonLd data={faqJsonLd(page.faqs)} />
    <Nav />
    <main className="container-page py-16 md:py-24">
      <article className="max-w-3xl mx-auto">
        <p className="font-mono-label">{guide ? t.guides : t.solutions}</p>
        <h1 className="font-display mt-6 text-[40px] md:text-[56px] leading-tight">{page.title}</h1>
        <p className="mt-8 text-[20px] leading-relaxed text-ink-700">{page.intro}</p>
        {page.sections.map(section => <section key={section.title} className="mt-16">
          <h2 className="text-[28px] md:text-[32px] font-bold leading-tight">{section.title}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph} className="mt-6 text-[18px] leading-relaxed text-ink-700">{paragraph}</p>)}
          {section.steps && <ol className="mt-8 list-decimal ps-6 space-y-4 text-[18px] leading-relaxed">{section.steps.map(step => <li key={step}>{step}</li>)}</ol>}
        </section>)}
        {extras.comparison && <section className="mt-16">
          <h2 className="text-[28px] font-bold">{locale === "he" ? "המערכות לפי תהליך העבודה" : "Platforms by workflow"}</h2>
          <div className="mt-8 overflow-x-auto rounded-card border border-line" tabIndex={0} role="region" aria-label={locale === "he" ? "השוואת מערכות" : "Platform comparison"}>
            <table className="w-full text-start text-[15px] leading-relaxed">
              <thead className="bg-surface-2"><tr>{(locale === "he" ? ["מערכת", "הכיוון", "מה לבדוק"] : ["Platform", "Focus", "What to check"]).map(h => <th scope="col" key={h} className="p-6 text-start">{h}</th>)}</tr></thead>
              <tbody>{extras.comparison.map(row => <tr key={row.name} className="border-t border-line"><th scope="row" className="p-6 text-start">{row.name}</th><td className="p-6">{row.focus}</td><td className="p-6">{row.check}</td></tr>)}</tbody>
            </table>
          </div>
        </section>}
        {extras.sources && <section className="mt-8 text-[15px] text-ink-700">
          <p>{locale === "he" ? "נבדק ב-9.10.2026 לפי עמודי המוצרים הרשמיים. תנאים ויכולות עשויים להשתנות." : "Checked on 9 October 2026 against official product pages. Terms and capabilities may change."}</p>
          <ul className="mt-4 flex flex-wrap gap-6">{extras.sources.map(source => <li key={source.url}><a href={source.url} className="underline underline-offset-4">{source.name}</a></li>)}</ul>
        </section>}
        <section className="mt-16">
          <h2 className="text-[28px] font-bold">{t.faq}</h2>
          <div className="mt-8 space-y-8">{page.faqs.map(f => <div key={f.q}><h3 className="text-[20px] font-bold">{f.q}</h3><p className="mt-4 text-[18px] leading-relaxed text-ink-700">{f.a}</p></div>)}</div>
        </section>
        <section className="mt-16 rounded-card bg-surface-2 p-8">
          <p className="text-[18px] leading-relaxed">{t.availability}</p>
          <Link href={localizedPath("/waitlist", locale)} className="btn btn-lime mt-6">{t.join}</Link>
          {page.academy && <p className="mt-6"><Link href={localizedPath(`/academy/${page.academy}`, locale)} className="underline underline-offset-4">{t.academy}</Link></p>}
        </section>
        <aside className="mt-16" aria-label={t.related}>
          <h2 className="text-[24px] font-bold">{t.related}</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">{SOLUTION_SLUGS.filter(slug => path !== `/solutions/${slug}`).map(slug => <li key={slug}><Link className="underline underline-offset-4" href={localizedPath(`/solutions/${slug}`, locale)}>{getSolution(slug, locale)!.title}</Link></li>)}</ul>
        </aside>
      </article>
    </main>
    <Footer />
  </>;
}
