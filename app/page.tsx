import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { Problem } from "@/components/home/problem";
import { Value } from "@/components/home/value";
import { WhyDifferent } from "@/components/home/why-different";
import { Bridge } from "@/components/home/bridge";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd, organizationJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

export const metadata = buildMetadata({
  title: "Coflow — see why your Instagram isn't bringing you clients",
  description:
    "Paste your handle and get a free, honest read of your Instagram in two minutes: what's pushing people away and the first thing to fix. No sign-up, no card.",
  path: "/",
});

export default async function Home() {
  const locale = await getLocale();
  const dict = getDict(locale);

  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <Nav />
      <main>
        {/* One job: drive the free read. Order:
         *   1. Hero — the promise + the one button
         *   2. Problem — her real day, in concrete scenes
         *   3. Value — what the read gives her + CTA
         *   4. WhyDifferent — authority (reads your real page, a method, honest)
         *   5. Bridge — there's a system after; the only secondary link
         *   6. Faq — objection-killers
         *   7. FinalCta — last call, same single action
         */}
        <Hero t={dict.hero} locale={locale} />
        <Problem t={dict.problem} />
        <Value t={dict.value} locale={locale} />
        <WhyDifferent t={dict.why} />
        <Bridge t={dict.bridge} />
        <Faq t={dict.faq} />
        <FinalCta t={dict.finalCta} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
