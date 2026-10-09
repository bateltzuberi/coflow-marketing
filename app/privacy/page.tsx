import { getLocale } from "@/lib/locale";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    title: locale === "he" ? "מדיניות פרטיות" : "Privacy policy",
    description: locale === "he" ? "מדיניות הפרטיות של קופלו (Coflow): איזה מידע נאסף, למה, עם מי הוא משותף והזכויות שלך." : "Coflow privacy policy: information collected, how it is used and shared, and your rights.",
    path: "/privacy", locale,
  });
}

export default function PrivacyPage() {
  return <LegalPage doc="privacy" />;
}
