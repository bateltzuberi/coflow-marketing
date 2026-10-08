import { redirect } from "next/navigation";

// /how-it-works is retired (2026-10-08): it explained the old product (brand
// profile, content anchors) and the home page now shows the product itself.
// Redirect so shared and indexed links land somewhere real.
export default function HowItWorksPage() {
  redirect("/");
}
