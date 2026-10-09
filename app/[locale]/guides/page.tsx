import Link from "next/link";
import { getLocale } from "@/lib/locale";
import { localizedPath } from "@/lib/locale-path";
import { GUIDE_SLUGS } from "@/lib/discovery-content";
import { getGuide } from "@/lib/guide-content";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ title: locale === "he" ? "מדריכים לקורסים ולמשפכים" : "Course and funnel guides", description: locale === "he" ? "מדריכים מעשיים לבחירת מערכת קורסים ולבניית משפך מכירה, עם דוגמאות ובדיקות לפני השקה." : "Practical guides to choosing a course platform and building a sales funnel, with examples and pre-launch checks.", path: "/guides", locale });
}
export default async function Guides() {
  const locale = await getLocale();
  return <><Nav /><main className="container-page py-16 md:py-24"><div className="max-w-3xl mx-auto"><h1 className="font-display text-[40px] md:text-[56px]">{locale === "he" ? "מדריכים לעסק הדיגיטלי שלך" : "Guides for your digital business"}</h1><ul className="mt-16 space-y-8">{GUIDE_SLUGS.map(slug => {
    const page = getGuide(slug, locale)!;
    return <li key={slug} className="rounded-card border border-line p-8"><h2 className="text-[24px] font-bold"><Link href={localizedPath(`/guides/${slug}`, locale)} className="underline underline-offset-4">{page.title}</Link></h2><p className="mt-4 text-[18px] leading-relaxed text-ink-700">{page.description}</p></li>;
  })}</ul></div></main><Footer /></>;
}
