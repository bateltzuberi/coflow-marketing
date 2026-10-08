import { redirect } from "next/navigation";

// There is no separate pricing page because the price is on the home page:
// the launch is invite-only, so the door and the price are the same screen
// (€24/month, no trial — see `join.priceLine`). /pricing therefore sends
// people to the explainer rather than to a page that would repeat one line.
// (This used to say there was no public price yet. There is one.)
export default function PricingPage() {
  redirect("/");
}
