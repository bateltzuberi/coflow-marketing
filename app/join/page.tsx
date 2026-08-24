import { redirect } from "next/navigation";

// /join was the invite door for about an hour before the door moved to the
// home page. The URL was already shared, so it redirects rather than 404s.
export default function JoinPage() {
  redirect("/");
}
