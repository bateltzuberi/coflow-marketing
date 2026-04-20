import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <section className="mx-auto max-w-2xl px-6 py-28 text-center">
        <p className="font-mono-label">— 404 —</p>
        <h1 className="font-display mt-6 text-5xl text-[var(--app-ink)]">
          We couldn't find that page.
        </h1>
        <p className="mt-4 text-base text-[var(--app-muted)]">
          It may have moved, or never existed. Try the homepage or one of these.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link href="/" className="btn-primary min-h-11 text-sm">Back home</Link>
          <Link href="/#waitlist" className="btn-ghost min-h-11 text-sm">Join waitlist</Link>
          <Link href="/pricing" className="btn-ghost min-h-11 text-sm">Pricing</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
