import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd, breadcrumbsJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

export const metadata = buildMetadata({
  title: "How Coflow works",
  description:
    "Coflow starts with a diagnosis of your Instagram, then turns it into direction, strategy, content anchors, ideas, captions, and a board that helps you publish.",
  path: "/how-it-works",
});

export default async function HowItWorksPage() {
  const locale = await getLocale();
  const t = getDict(locale).howItWorks;
  const a = t.authority;

  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "How it works", path: "/how-it-works" },
        ])}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className="section">
          <div className="container-page">
            <div className="max-w-2xl mx-auto text-center pt-8 md:pt-12">
              <h1 className="font-display text-[32px] sm:text-[46px] md:text-[56px] leading-[1.1]">
                {t.heroTitle}
              </h1>
              <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
                {t.heroSub}
              </p>
              <div className="mt-8">
                <a href="/#start" className="btn btn-lime">
                  {t.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The six steps */}
        <section className="section">
          <div className="container-page">
            <ol className="max-w-2xl mx-auto space-y-4">
              {t.steps.map((step, i) => (
                <li
                  key={step.name}
                  className="rounded-[24px] bg-surface border border-line p-6 md:p-7"
                >
                  <p className="font-mono-label text-ink-500" lang="en">
                    {t.stepLabel} {i + 1} · {step.name}
                  </p>
                  <h2 className="mt-3 text-[18px] md:text-[20px] font-bold text-ink-900 leading-snug">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-ink-700">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Authority — the strategic model behind the product */}
        <section className="section">
          <div className="container-page">
            <div className="max-w-2xl mx-auto rounded-[32px] bg-lavender-tint border border-lavender-deep/20 p-8 md:p-14">
              <h2 className="font-display-h2 text-[26px] md:text-[36px] text-lavender-ink">
                {a.title}
              </h2>
              <p className="mt-5 text-[16px] md:text-[17px] leading-[1.6] text-lavender-ink/85">
                {a.p1}
              </p>
              <p className="mt-4 text-[16px] md:text-[17px] leading-[1.6] text-lavender-ink/85">
                {a.p2}
              </p>
              <ul className="mt-5 space-y-2.5">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] md:text-[16px] text-lavender-ink">
                    <span className="dot dot-lime mt-2 shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-[16px] md:text-[18px] font-semibold leading-[1.5] text-lavender-ink">
                {a.closeA}
                <br />
                {a.closeB}
              </p>
              <div className="mt-8">
                <a href="/#start" className="btn btn-lime">
                  {a.cta}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
