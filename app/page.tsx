import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { StudioSurfaces } from "@/components/home/studio-surfaces";
import { Features } from "@/components/home/features";
import { Testimonials } from "@/components/home/testimonials";
import { PricingSnippet } from "@/components/home/pricing-snippet";
import { AgencyBand } from "@/components/home/agency-band";
import { StartCta } from "@/components/home/start-cta";
import { JsonLd, organizationJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

export const metadata = buildMetadata({
  title: "Coflow Studio — your whole personal brand in one place",
  description:
    "Plan, publish and measure your podcast, newsletter and social — all in one calm workspace. Free for one brand, forever. Running an agency? Coflow Agencies adds client management on top.",
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
        <Hero t={dict.hero} />
        <StudioSurfaces t={dict.surfaces} />
        <Features t={dict.features} />
        <Testimonials t={dict.testimonials} />
        <PricingSnippet t={dict.pricing} />
        <AgencyBand t={dict.agencyBand} />
        <StartCta locale={locale} />
      </main>
      <Footer />
    </>
  );
}
