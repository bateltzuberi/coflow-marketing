import { redirect } from "next/navigation";

// The old "Studio" page is retired: its job — explaining the product — moved
// to /how-it-works, which is where the four platforms are described. Redirect
// so old links and any indexed URLs land on the right page.
// (This used to say "retired for the Instagram-only MVP". That MVP is over:
// Instagram, podcast, newsletter and YouTube are all live in the product.)
export default function StudioPage() {
  redirect("/how-it-works");
}
