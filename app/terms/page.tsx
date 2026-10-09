import { getLocale } from "@/lib/locale";
import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  return buildMetadata({
    title: locale === "he" ? "תנאי שימוש" : "Terms of use",
    description: locale === "he" ? "תנאי השימוש בקופלו (Coflow)." : "Terms of use for Coflow.",
    path: "/terms", locale,
  });
}

export default function TermsPage() {
  return <LegalPage doc="terms" />;
}
