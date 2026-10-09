import { getLocale } from "@/lib/locale";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { DiscoveryLinks } from "@/components/discovery-links";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({ title: locale === "he" ? "קורסים, משפכים ו-CRM עם AI" : "Courses, funnels and CRM with AI", description: locale === "he" ? "הכירי את הפתרונות של קופלו: קורסים דיגיטליים, משפכים, ניהול לקוחות וניהול מותג עם AI." : "Explore Coflow: digital courses, sales funnels, CRM and AI brand management.", path: "/solutions", locale });
}
export default async function Solutions() {
  const locale = await getLocale();
  return <><Nav /><main className="container-page py-16 md:py-24"><h1 className="max-w-4xl mx-auto font-display text-[40px] md:text-[56px] mb-16">{locale === "he" ? "העסק שלך בקופלו" : "Your business in Coflow"}</h1><DiscoveryLinks locale={locale} /></main><Footer /></>;
}
