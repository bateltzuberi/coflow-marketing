import { LegalPage } from "@/components/legal-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "תנאי שימוש",
  description: "תנאי השימוש בקופלו (Coflow).",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage doc="terms" />;
}
