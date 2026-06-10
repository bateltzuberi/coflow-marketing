import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";

/**
 * One line that there's a real system after the free read, plus the ONLY
 * secondary action on the page: a quiet text link to How it works. Never a
 * second button competing with the primary CTA.
 */
export function Bridge({ t }: { t: Dictionary["bridge"] }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[17px] md:text-[19px] leading-[1.6] text-ink-700">{t.text}</p>
          <Link
            href="/how-it-works"
            className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-lavender-deep hover:text-lavender-ink transition-colors"
          >
            <span className="dot dot-lavender" aria-hidden="true" />
            {t.linkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
