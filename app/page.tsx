import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { WizardCta } from "@/components/home/wizard-cta";
import { StudioSurfaces } from "@/components/home/studio-surfaces";
import { Features } from "@/components/home/features";
import { Testimonials } from "@/components/home/testimonials";
import { PricingSnippet } from "@/components/home/pricing-snippet";
import { StartCta } from "@/components/home/start-cta";
import { JsonLd, organizationJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

export const metadata = buildMetadata({
  title: "Coflow — see how your brand looks from the outside",
  description:
    "Paste your links and we scan your brand from the outside — a strategic analysis in 2 minutes. From there we sharpen your messaging together at your pace, inside Coflow Studio: podcast, newsletter, social and analytics in one place. Free for your first brand, forever.",
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
        {/* Funnel order:
         *   1. Hero — the wizard hook
         *   2. WizardCta — what the analysis actually produces (4 bullets)
         *   3. StudioSurfaces — what's waiting after the analysis
         *   4. Features — deeper feature dive inside Studio
         *   5. Testimonials — social proof
         *   6. PricingSnippet — one free tier
         *   7. StartCta — closing wizard CTA
         */}
        <Hero t={dict.hero} locale={locale} />
        <WizardCta t={dict.wizard} locale={locale} />
        <StudioSurfaces t={dict.surfaces} />
        <Features t={dict.features} />
        <Testimonials t={dict.testimonials} />
        <PricingSnippet t={dict.pricing} locale={locale} />
        <StartCta locale={locale} />
      </main>
      <Footer />
    </>
  );
}
