import { redirect } from "next/navigation";

// Pricing is intentionally off the public site for the Instagram-only MVP:
// the read is free, and the paid model for the system is still being built.
// Until there's a real price to show, send /pricing to the product explainer
// (which is honest: the read is free, the system is a paid product).
export default function PricingPage() {
  redirect("/how-it-works");
}
