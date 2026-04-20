import { SITE } from "@/lib/site";

export function CtaSection({
  eyebrow = "— Start free —",
  title = "Try Coflow with your first brand.",
  subtitle = "Free forever for one brand. Add more when you grow. No card required, no seat games.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="border-y border-[var(--app-border)] bg-[var(--app-bg-warm)]">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-mono-label">{eyebrow}</p>
        <h2 className="font-display mt-5 text-4xl sm:text-5xl text-[var(--app-ink)]">
          {title}
        </h2>
        <p className="mt-6 mx-auto max-w-lg text-sm text-[var(--app-muted)] leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <a href={`${SITE.appUrl}/signup`} className="btn-primary min-h-12 text-sm">
            Start your free workspace
          </a>
          <a href="/pricing" className="btn-ghost min-h-12 text-sm">
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
