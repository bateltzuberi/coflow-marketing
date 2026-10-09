import { discoveryLabels } from "@/lib/discovery-content";
import { localizedPath } from "@/lib/locale-path";
import Link from "next/link";
import { CoflowMark } from "./coflow-mark";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";
import { SITE } from "@/lib/site";

// The header of every page other than home, in the home page's look: the
// wordmark, a quiet link to the Academy and to sign in, and one cream
// "Join" that goes to the waitlist (joining = signing up and waiting for an
// invite).
export async function Nav() {
  const locale = await getLocale();
  const t = getDict(locale).nav;

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70">
      <div className="container-page flex h-16 md:h-[76px] items-center justify-between gap-4">
        <Link href={localizedPath("/", locale)} aria-label="coflow home" className="no-underline shrink-0">
          <CoflowMark size={34} showWordmark tone="blue" />
        </Link>

        <div className="flex items-center gap-1 md:gap-3">
          <Link href={localizedPath("/solutions", locale)} className="hidden md:inline-flex text-[15px] font-bold text-ink-700 px-3 py-2">{discoveryLabels[locale].solutions}</Link>
          <Link
            href={localizedPath("/academy", locale)}
            className="hidden sm:inline-flex text-[15px] font-bold text-ink-700 hover:text-ink-900 transition-colors px-3 py-2"
          >
            {t.academy}
          </Link>
          <a
            href={`${SITE.studioAppUrl}/login`}
            className="inline-flex text-[15px] font-bold text-ink-700 hover:text-ink-900 transition-colors px-3 py-2"
          >
            {t.signIn}
          </a>
          <Link href={localizedPath("/waitlist", locale)} className="btn btn-lime btn-sm">
            {t.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
