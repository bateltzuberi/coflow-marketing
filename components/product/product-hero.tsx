import Link from "next/link";
import { TheInfiniteGrid } from "@/components/ui/the-infinite-grid";

type ProductHeroCopy = {
  eyebrow: string;
  titleA: string;
  titleB: string;
  titleC: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  caption: string;
};

export function ProductHero({
  tone,
  ctaPrimaryHref,
  ctaSecondaryHref,
  t,
}: {
  tone: "studio" | "agencies";
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
  t: ProductHeroCopy;
}) {
  const isAgencies = tone === "agencies";
  const btnClass = isAgencies ? "btn btn-lavender" : "btn btn-lime";
  const dotClass = isAgencies ? "dot dot-lime" : "dot dot-lavender";
  const secondaryAccent = isAgencies
    ? "text-lime-ink hover:text-lime-deep"
    : "text-lavender-deep hover:text-lavender-ink";
  const titleAccentClass = isAgencies ? "text-lavender-ink" : "text-lime-ink";

  return (
    <section className="relative overflow-hidden isolate">
      <TheInfiniteGrid />
      <div className="relative container-page pt-16 md:pt-24 lg:pt-28 pb-16 md:pb-20">
        <p className="font-mono-label text-center" lang="en">
          {t.eyebrow}
        </p>

        <h1 className="font-display mt-6 text-center mx-auto max-w-[1100px] text-[44px] sm:text-[64px] md:text-[80px] lg:text-[92px]">
          <span className="block">{t.titleA}</span>
          <span className="block">{t.titleB}</span>
          <span className={`block ${titleAccentClass}`}>{t.titleC}</span>
        </h1>

        <p className="mt-7 mx-auto max-w-[640px] text-center text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
          {t.subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={ctaPrimaryHref} className={`${btnClass} w-full sm:w-auto`}>
            {t.ctaPrimary} →
          </Link>
          <Link
            href={ctaSecondaryHref}
            className={`text-[14px] font-semibold transition-colors inline-flex items-center gap-1.5 ${secondaryAccent}`}
          >
            <span className={dotClass} aria-hidden="true" />
            {t.ctaSecondary} →
          </Link>
        </div>

        <p className="mt-5 text-center text-[13px] text-ink-500">{t.caption}</p>
      </div>
    </section>
  );
}
