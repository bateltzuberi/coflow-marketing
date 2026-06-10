import type { Dictionary } from "@/lib/dictionary";

/**
 * Authority section. With no testimonials yet, trust is built on the three
 * things we can prove: it reads the real page, it's a named method, and it's
 * honest. Lavender-tinted to mark it as the "why believe us" beat.
 */
export function WhyDifferent({ t }: { t: Dictionary["why"] }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-[32px] bg-lavender-tint border border-lavender-deep/20 p-8 md:p-14">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-mono-label" lang="en" style={{ color: "var(--color-lavender-ink)", opacity: 0.7 }}>
              {t.eyebrow}
            </p>
            <h2 className="font-display-h2 mt-4 text-[26px] md:text-[40px] text-lavender-ink">
              {t.title}
            </h2>
          </div>
          <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-[1000px] mx-auto">
            {t.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] bg-white/65 border border-lavender-deep/15 p-6"
              >
                <h3 className="text-[16px] md:text-[17px] font-bold text-lavender-ink leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] md:text-[15px] leading-[1.6] text-lavender-ink/85">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
