import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";

/**
 * Single mid-page mention of the agency tier. Studio is the home
 * page's main story; this band is the one place agencies show up in
 * full size on the home page (besides the nav link and pricing tier).
 */
export function AgencyBand({ t }: { t: Dictionary["agencyBand"] }) {
  return (
    <section id="for-agencies" className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[32px] bg-lavender-tint border border-lavender-deep/20 p-10 md:p-14">
          {/* Soft lavender blob */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -end-24 w-72 h-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(204, 184, 245, 0.6), transparent 70%)" }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
            <div className="max-w-[640px]">
              <p className="font-mono-label" lang="en" style={{ color: "var(--color-lavender-ink)", opacity: 0.7 }}>
                {t.eyebrow}
              </p>
              <h2 className="font-display-h2 mt-3 text-[28px] md:text-[36px] text-lavender-ink">
                {t.title}
              </h2>
              <p className="mt-4 text-[16px] md:text-[17px] leading-[1.6] text-lavender-ink/85">
                {t.body}
              </p>
            </div>
            <Link href="/agencies" className="btn btn-lavender shrink-0">
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
