import Link from "next/link";
import { localizedPath } from "@/lib/locale-path";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { getLocale } from "@/lib/locale";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

// Bilingual, in the site's look, and linking only to pages that exist (it used
// to send people to /#waitlist and /vs/planable, neither of which does).
const COPY = {
  he: { title: "את העמוד הזה לא מצאנו", sub: "אולי הוא עבר מקום, ואולי לא היה כאן אף פעם.", home: "לדף הבית", join: "להרשמה" },
  en: { title: "We couldn't find that page", sub: "It may have moved, or never existed.", home: "Back home", join: "Sign up" },
} as const;

export default async function NotFound() {
  const locale = await getLocale();
  const t = COPY[locale];
  return (
    <>
      <Nav />
      <section className="mx-auto max-w-2xl px-6 py-28 text-center">
        <p className="font-mono-label">404</p>
        <h1 className="mt-6 font-black text-[40px] md:text-[56px] leading-[1] tracking-[-0.03em] text-ink-900">{t.title}</h1>
        <p className="mt-4 text-[18px] text-ink-700">{t.sub}</p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link href={localizedPath("/", locale)} className="btn btn-lime btn-sm">{t.home}</Link>
          <Link href={localizedPath("/waitlist", locale)} className="btn btn-ghost btn-sm">{t.join}</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
