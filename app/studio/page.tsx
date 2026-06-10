import { redirect } from "next/navigation";

// The old multi-platform "Studio" page is retired for the Instagram-only MVP.
// Its job (explaining the product) moved to /how-it-works. Redirect so old
// links and any indexed URLs land on the right page.
export default function StudioPage() {
  redirect("/how-it-works");
}
