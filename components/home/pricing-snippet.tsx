import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/locale";
import { wizardUrlFor } from "@/lib/site";

export function PricingSnippet({ t, locale }: { t: Dictionary["pricing"]; locale: Locale }) {
  return (
    <section id="pricing" className="section">
      <div className="container-page">
        <div className="text-center mx-auto max-w-2xl">
          <p className="font-mono-label" lang="en">{t.eyebrow}</p>
          <h2 className="font-display-h2 mt-5 text-[34px] sm:text-[44px] md:text-[52px]">
            {t.title}
          </h2>
          <p className="mt-4 text-[17px] text-ink-700">{t.subtitle}</p>
        </div>

        {/* Single Studio tier centered. Agency tier returns when that
            product launches; until then we show one honest plan. */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 gap-5 max-w-md mx-auto">
          {t.tiers.map((tier) => (
            <Tier
              key={tier.product}
              tone={tier.product}
              chip={tier.chip}
              name={tier.name}
              price={tier.price}
              priceNote={tier.priceNote}
              perMonth={t.perMonth}
              bullets={tier.bullets}
              cta={tier.cta}
              featured={tier.featured}
              featuredLabel={t.featured}
              locale={locale}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-[14px] text-ink-500">
          {t.footnote}
          <Link href="/contact" className="link">{t.footnoteCta}</Link>
        </p>
      </div>
    </section>
  );
}

function Tier({
  tone,
  chip,
  name,
  price,
  priceNote,
  perMonth,
  bullets,
  cta,
  featured,
  featuredLabel,
  locale,
}: {
  tone: "studio" | "agencies";
  chip: string;
  name: string;
  price: string;
  priceNote: string;
  perMonth: string;
  bullets: readonly string[];
  cta: string;
  featured: boolean;
  featuredLabel: string;
  locale: Locale;
}) {
  const isStudio = tone === "studio";
  const chipClass = isStudio ? "chip chip-lime" : "chip chip-lavender";
  const btn = isStudio ? "btn btn-lime" : "btn btn-lavender";
  const checkColor = isStudio ? "text-lime-deep" : "text-lavender-deep";

  // Featured tier (Studio): thicker accent border + light tint backdrop +
  // a corner ribbon. The agency tier sits next to it as the upgrade.
  const surface = featured
    ? "bg-lime-tint/40 border-2 border-lime-deep/35"
    : "bg-surface border border-line";

  return (
    <div
      className={`${surface} relative p-8 md:p-10 flex flex-col`}
      style={{ borderRadius: "var(--radius-card-lg)" }}
    >
      {featured && (
        <span
          aria-hidden="true"
          className="absolute -top-3 start-8 chip chip-lime shadow-sm"
          style={{ background: "var(--color-lime)" }}
          lang="en"
        >
          ★ {featuredLabel}
        </span>
      )}

      <span className={chipClass} lang="en">{chip}</span>

      <h3 className="mt-5 text-[18px] font-bold text-ink-700" lang="en">{name}</h3>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display text-[48px] md:text-[56px] tabular-nums text-ink-900">{price}</span>
        <span className="text-[14px] text-ink-500" lang="en">{perMonth}</span>
      </div>
      <p className="mt-1 text-[13px] text-ink-500">{priceNote}</p>

      <ul className="mt-7 space-y-3 flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-[14px] text-ink-700">
            <svg width="16" height="16" viewBox="0 0 18 18" className={`mt-1 shrink-0 ${checkColor}`} aria-hidden="true">
              <path d="M3.5 9.5L7 13L14.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <a href={wizardUrlFor(locale)} className={btn}>
          {cta} →
        </a>
      </div>
    </div>
  );
}
