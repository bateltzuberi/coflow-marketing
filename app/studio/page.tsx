import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ProductHero } from "@/components/product/product-hero";
import { ProductSurfaces } from "@/components/product/product-surfaces";
import { ProductPillars } from "@/components/product/product-pillars";
import { ProductCta } from "@/components/product/product-cta";
import { JsonLd, breadcrumbsJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";
import { wizardUrlFor } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Coflow Studio — your whole personal brand in one place",
  description:
    "Podcast, newsletter, social and analytics for solo creators. Plan, publish, measure — without jumping between five tools. One brand free, forever.",
  path: "/studio",
});

export default async function StudioPage() {
  const locale = await getLocale();
  const t = getDict(locale).studioPage;

  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Studio", path: "/studio" },
        ])}
      />
      <Nav />
      <main>
        <ProductHero
          tone="studio"
          ctaPrimaryHref={wizardUrlFor(locale)}
          ctaSecondaryHref="/#pricing"
          t={t}
        />
        <ProductSurfaces tone="studio" t={t.surfaces} />
        <ProductPillars tone="studio" t={t.pillars} />
        <ProductCta
          tone="studio"
          source="studio-page"
          secondaryHref="/#pricing"
          t={t.cta}
          locale={locale}
        />
      </main>
      <Footer />
    </>
  );
}
