import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd, breadcrumbsJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";
import { wizardUrlFor } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Coflow — how it works",
  description:
    "The free read shows you what's stopping your Instagram. Coflow turns it into a strategy, ideas, and captions in your voice, on one board.",
  path: "/how-it-works",
});

export default async function HowItWorksPage() {
  const locale = await getLocale();
  const t = getDict(locale).howItWorks;

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
              <p className="font-mono-label" lang="en">{t.eyebrow}</p>
              <h1 className="font-display mt-5 text-[34px] sm:text-[48px] md:text-[58px] leading-[1.08]">
                {t.heroTitle}
              </h1>
              <p className="mt-6 text-[17px] md:text-[19px] leading-[1.55] text-ink-700">
                {t.heroSub}
              </p>
            </div>
          </div>
        </section>

        {/* The five stages */}
        <section id="stages" className="section">
          <div className="container-page">
            <ol className="max-w-2xl mx-auto space-y-4">
              {t.stages.map((stage, i) => (
                <li
                  key={stage.title}
                  className="rounded-[24px] bg-surface border border-line p-6 md:p-7 flex items-start gap-4"
                >
                  <span
                    className="shrink-0 inline-flex items-center justify-center size-9 rounded-full text-sm font-bold"
                    style={{ backgroundColor: "var(--color-lime)", color: "var(--color-lime-ink)" }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="text-[17px] md:text-[19px] font-bold text-ink-900 leading-snug">
                      {stage.title}
                    </h2>
                    <p className="mt-2 text-[15px] md:text-[16px] leading-[1.6] text-ink-700">
                      {stage.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Positioning + CTA */}
        <section className="section">
          <div className="container-page">
            <div className="card-xl bg-bridge-soft border border-line rounded-[32px] p-10 md:p-14 max-w-3xl mx-auto text-center">
              <p className="text-[18px] md:text-[22px] font-semibold leading-[1.5] text-ink-900">
                {t.positioning}
              </p>
              <div className="mt-8">
                <a href={wizardUrlFor(locale)} className="btn btn-lime">
                  {t.cta}
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
