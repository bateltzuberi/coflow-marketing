import Link from "next/link";
import { localizedPath, type Locale } from "@/lib/locale-path";
import { SOLUTION_SLUGS, GUIDE_SLUGS, getSolution, discoveryLabels } from "@/lib/discovery-content";
import { getGuide } from "@/lib/guide-content";

export function DiscoveryLinks({ locale, home = false }: { locale: Locale; home?: boolean }) {
  const t = discoveryLabels[locale];
  return <section className={home ? "discovery-home hm-wrap" : "max-w-4xl mx-auto"}>
    <h2 className="text-[28px] md:text-[40px] font-bold leading-tight">{t.solutions}</h2>
    {home && <p className="mt-6 text-[18px] leading-relaxed text-ink-700">{locale === "he" ? "קופלו היא מערכת לניהול מותג עם AI. המוצרים, הדפים, הפניות והלקוחות שלך נמצאים באותה סביבת עבודה. מערכת הקורסים נבנית כחלק ממנה." : "Coflow is an AI brand-management system. Your offers, pages, enquiries and clients share one workspace. Course building is being developed within it."}</p>}
    <ul className="mt-8 grid sm:grid-cols-2 gap-6">{SOLUTION_SLUGS.map(slug => {
      const page = getSolution(slug, locale)!;
      return <li key={slug} className="rounded-card border border-line bg-surface p-8">
        <h3 className="text-[22px] font-bold"><Link className="underline underline-offset-4" href={localizedPath(`/solutions/${slug}`, locale)}>{page.title}</Link></h3>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-700">{page.description}</p>
      </li>;
    })}</ul>
    <h2 className="mt-16 text-[28px] font-bold">{t.guides}</h2>
    <ul className="mt-6 space-y-4">{GUIDE_SLUGS.map(slug => <li key={slug}><Link className="text-[18px] underline underline-offset-4" href={localizedPath(`/guides/${slug}`, locale)}>{getGuide(slug, locale)!.title}</Link></li>)}</ul>
  </section>;
}
