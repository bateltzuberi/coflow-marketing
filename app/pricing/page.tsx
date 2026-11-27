import { redirect } from "next/navigation";

// There is no separate pricing page: the three plans are on the home page
// (#price, read from the Studio), so /pricing sends people there.
export default function PricingPage() {
  redirect("/");
}
