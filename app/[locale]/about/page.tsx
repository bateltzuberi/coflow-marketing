import Link from "next/link";
import { getLocale } from "@/lib/locale";
import { localizedPath } from "@/lib/locale-path";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { buildMetadata, JsonLd, webPageJsonLd, softwareApplicationJsonLd } from "@/lib/seo";

function copy(he: boolean) {
  return {
    title: he ? "מה היא קופלו" : "What is Coflow?",
    description: he ? "קופלו (Coflow) היא מערכת לניהול מותג עם AI של SheBossIt (Cyprus) Ltd, שמחברת מוצרים, שיווק, מכירות ולקוחות." : "Coflow is an AI brand-management system by SheBossIt (Cyprus) Ltd, connecting offers, marketing, sales and clients.",
    intro: he ? "קופלו היא מערכת לניהול מותג עם AI, לעסקים שמוכרים ידע ושירותים: קורסים, ליווי, פגישות וסדנאות. היא מחברת את המוצרים, התוכן, הדפים, הפניות והלקוחות באותה סביבת עבודה." : "Coflow is an AI brand-management system for businesses selling knowledge and services: courses, coaching, appointments and workshops. It brings offers, content, pages, enquiries and clients into one workspace.",
    context: he ? "פרופיל המותג שומר את הקהל, המסרים והקול שלך ומשמש את יצירת התוכן. המוצר מגדיר מה את מוכרת; הדפים והטפסים מובילים אליו, ואנשי הקשר והעסקאות נשמרים ב-CRM." : "The brand profile stores your audience, messages and voice and informs content creation. The offer defines what you sell; pages and forms lead towards it, while contacts and deals stay in your CRM.",
    stage: he ? "קופלו נפתחת בהדרגה ובהזמנה. מערכת הקורסים נמצאת בפיתוח. המחיר המוצג באתר הוא €24 לחודש; זמינות יכולות ותנאים מפורטים נבדקים לפני הצטרפות." : "Coflow opens gradually by invitation. Course building is in development. The price shown on this site is €24 per month; confirm feature availability and detailed terms before joining.",
  };
}
export async function generateMetadata() {
  const locale = await getLocale(); const t = copy(locale === "he");
  return buildMetadata({ title: t.title, description: t.description, path: "/about", locale });
}
export default async function About() {
  const locale = await getLocale(); const he = locale === "he"; const t = copy(he);
  return <><Nav /><JsonLd data={webPageJsonLd(t.title, t.description, "/about", locale, "AboutPage")} /><JsonLd data={softwareApplicationJsonLd(locale)} />
    <main className="container-page py-16 md:py-24"><article className="max-w-3xl mx-auto">
      <h1 className="font-display text-[40px] md:text-[56px]">{t.title}</h1>
      <p className="mt-8 text-[20px] leading-relaxed text-ink-700">{t.intro}</p>
      <h2 className="mt-16 text-[28px] font-bold">{he ? "העסק שמאחורי המותג" : "The business behind your brand"}</h2>
      <p className="mt-6 text-[18px] leading-relaxed text-ink-700">{t.context}</p>
      <h2 className="mt-16 text-[28px] font-bold">{he ? "הצטרפות וזמינות" : "Access and availability"}</h2>
      <p className="mt-6 text-[18px] leading-relaxed text-ink-700">{t.stage}</p>
      <Link className="btn btn-lime mt-8" href={localizedPath("/waitlist", locale)}>{he ? "להרשמה לרשימת ההמתנה" : "Join the waitlist"}</Link>
      <h2 className="mt-16 text-[28px] font-bold">{he ? "החברה" : "The company"}</h2>
      <p className="mt-6 text-[18px] leading-relaxed">{he ? "קופלו מופעלת על ידי SheBossIt (Cyprus) Ltd. פרטי החברה, ההתקשרות והשימוש במידע מופיעים במסמכים המשפטיים." : "Coflow is operated by SheBossIt (Cyprus) Ltd. Company, contact and data-use details are available in the legal documents."}</p>
      <p className="mt-6"><a href="mailto:contact@shebossit.com" className="underline underline-offset-4">contact@shebossit.com</a></p>
      <ul className="mt-6 flex flex-wrap gap-6"><li><Link className="underline" href={localizedPath("/terms", locale)}>{he ? "תנאי שימוש" : "Terms of use"}</Link></li><li><Link className="underline" href={localizedPath("/privacy", locale)}>{he ? "מדיניות פרטיות" : "Privacy policy"}</Link></li><li><Link className="underline" href={localizedPath("/solutions", locale)}>{he ? "מה אפשר לבנות" : "What you can build"}</Link></li></ul>
    </article></main><Footer /></>;
}
