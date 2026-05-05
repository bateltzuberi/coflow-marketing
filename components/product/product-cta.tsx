import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";

type ProductCtaCopy = {
  eyebrow: string;
  title: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export function ProductCta({
  tone,
  source,
  secondaryHref,
  t,
}: {
  tone: "studio" | "agencies";
  source: string;
  secondaryHref: string;
  t: ProductCtaCopy;
}) {
  const isAgencies = tone === "agencies";
  const surfaceClass = isAgencies
    ? "bg-lavender-tint border border-lavender-deep/20"
    : "bg-lime-tint border border-lime-deep/25";
  const accentInk = isAgencies ? "text-lavender-ink" : "text-lime-ink";
  const ctaSecondaryClass = isAgencies
    ? "text-lavender-ink hover:text-lavender-deep"
    : "text-lime-ink hover:text-lime-deep";

  return (
    <section id="waitlist" className="section">
      <div className="container-page">
        <div
          className={`relative overflow-hidden ${surfaceClass} p-10 md:p-14 text-center`}
          style={{ borderRadius: "var(--radius-large)" }}
        >
          <p className={`font-mono-label ${accentInk}`} lang="en">
            {t.eyebrow}
          </p>
          <h2 className={`font-display-h2 mt-4 text-[28px] md:text-[40px] mx-auto max-w-2xl ${accentInk}`}>
            {t.title}
          </h2>
          <p className={`mt-4 mx-auto max-w-xl text-[16px] leading-[1.6] ${accentInk}/85`}>
            {t.body}
          </p>

          <div className="mt-8 mx-auto max-w-md">
            <WaitlistForm source={source} />
          </div>

          <div className="mt-6">
            <Link href={secondaryHref} className={`text-[14px] font-semibold transition-colors ${ctaSecondaryClass}`}>
              {t.ctaSecondary} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
