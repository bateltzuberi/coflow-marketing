import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "מדיניות פרטיות",
  description: "מדיניות הפרטיות של קופלו (Coflow): איזה מידע נאסף, למה, עם מי הוא משותף והזכויות שלך.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage doc="privacy" />;
}
