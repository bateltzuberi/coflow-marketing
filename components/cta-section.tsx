import { SITE, POSITIONING, JOIN_PATH } from "@/lib/site";

/**
 * Generic closing CTA used by features / blog / sub-pages. Points to the
 * wizard so every page in the funnel ends on the same call-to-action.
 */
export function CtaSection({
  eyebrow = `— ${POSITIONING.status} —`,
  title = "Run your brand analysis. Free.",
  subtitle = "Paste your links and get a strategic analysis in 2 minutes. From there we sharpen the messaging together — inside Studio: podcast, newsletter, social, all in one place.",
  ctaLabel = POSITIONING.ctaPrimary,
  id = "wizard-cta",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  source?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="border-y border-border bg-surface-hover"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-mono-label">{eyebrow}</p>
        <h2 className="font-display mt-5 text-4xl sm:text-5xl text-foreground">
          {title}
        </h2>
        <p className="mt-6 mx-auto max-w-lg text-sm text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8">
          <a href={JOIN_PATH} className="btn-accent min-h-12 text-sm">
            {ctaLabel} →
          </a>
        </div>
      </div>
    </section>
  );
}
