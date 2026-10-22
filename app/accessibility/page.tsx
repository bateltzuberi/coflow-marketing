import { getLocale } from "@/lib/locale";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    title: locale === "he" ? "הצהרת נגישות" : "Accessibility statement",
    description:
      locale === "he"
        ? "הצהרת הנגישות של קופלו (Coflow): מה נעשה באתר, מה עוד לא מונגש במלואו ולמי פונים."
        : "Coflow accessibility statement: what the site does, what may not be fully accessible yet, and who to contact.",
    path: "/accessibility",
    locale,
  });
}

export default function AccessibilityPage() {
  return <LegalPage doc="accessibility" />;
}
