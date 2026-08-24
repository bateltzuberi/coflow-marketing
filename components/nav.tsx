import Link from "next/link";
import { CoflowMark } from "./coflow-mark";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";
import { DIAGNOSIS_PATH, JOIN_PATH, SITE } from "@/lib/site";

export async function Nav() {
  const locale = await getLocale();
  const t = getDict(locale).nav;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur supports-[backdrop-filter]:bg-paper/65">
      <div className="container-page flex h-16 md:h-[72px] items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="coflow home" className="no-underline shrink-0">
            <CoflowMark size={30} tone="ink" />
          </Link>

          {/* One quiet secondary link. The primary action lives in the
              lime button on the right; nav stays out of its way. */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-7">
            <Link href="/how-it-works" className="text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors">
              {t.howItWorks}
            </Link>
            {/* The free diagnosis. It used to be the home page; now it's the
                secondary path, for someone who isn't ready to register. */}
            <Link href={DIAGNOSIS_PATH} className="text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors">
              {t.diagnosis}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={`${SITE.studioAppUrl}/login`}
            className="hidden sm:inline-flex text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors px-3 py-2"
          >
            {t.signIn}
          </a>
          {/* The primary action is now REGISTERING, not the diagnosis — the
              launch is invite-only and the home page is where that happens. */}
          <Link href={JOIN_PATH} className="btn btn-lime btn-sm">
            {t.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
