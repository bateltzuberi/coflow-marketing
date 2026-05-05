import Link from "next/link";
import { CoflowMark } from "./coflow-mark";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";
import { SITE } from "@/lib/site";

export async function Nav() {
  const locale = await getLocale();
  const t = getDict(locale).nav;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur supports-[backdrop-filter]:bg-paper/65">
      <div className="container-page flex h-16 md:h-[72px] items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="coflow home" className="no-underline shrink-0">
            <CoflowMark size={30} />
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
            <Link href="/#surfaces" className="text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors">
              {t.features}
            </Link>
            <Link href="/#pricing" className="text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors">
              {t.pricing}
            </Link>
            <Link href="/blog" className="text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors">
              {t.blog}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/agencies"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-lavender-deep hover:text-lavender-ink transition-colors px-3 py-2"
          >
            <span className="dot dot-lavender" aria-hidden="true" />
            {t.forAgencies}
          </Link>
          <a
            href={`${SITE.appUrl}/login`}
            className="hidden lg:inline-flex text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors px-3 py-2"
          >
            {t.signIn}
          </a>
          <Link href="/#waitlist" className="btn btn-lime btn-sm">
            {t.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
