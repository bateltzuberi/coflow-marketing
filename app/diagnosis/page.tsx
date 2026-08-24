import { redirect } from "next/navigation";

// The free Instagram diagnosis is not a public entry point any more.
//
// While the launch is invite-only it was a way around the code: anyone could
// walk the diagnosis funnel straight into a Studio signup without ever being
// invited. The read still exists — it lives INSIDE the product, for people who
// paid to be there. This route stays only so shared links don't 404.
export default function DiagnosisPage() {
  redirect("/");
}
