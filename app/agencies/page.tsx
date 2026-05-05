import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ProductHero } from "@/components/product/product-hero";
import { ProductSurfaces } from "@/components/product/product-surfaces";
import { ProductPillars } from "@/components/product/product-pillars";
import { ProductCta } from "@/components/product/product-cta";
import { JsonLd, breadcrumbsJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

export const metadata = buildMetadata({
  title: "Coflow Agencies — one layer above Studio for your agency",
  description:
    "Client management, approvals, CRM, and team — everything an agency needs to operate any number of client Studios from one place. Each client's Studio is included.",
  path: "/agencies",
});

export default async function AgenciesPage() {
  const locale = await getLocale();
  const t = getDict(locale).agenciesPage;

  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Agencies", path: "/agencies" },
        ])}
      />
      <Nav />
      <main>
        <ProductHero
          tone="agencies"
          ctaPrimaryHref="#waitlist"
          ctaSecondaryHref="/#pricing"
          t={t}
        />
        <ProductSurfaces tone="agencies" t={t.surfaces} />
        <ProductPillars tone="agencies" t={t.pillars} />
        <ProductCta
          tone="agencies"
          source="agencies-page"
          secondaryHref="/#pricing"
          t={t.cta}
        />
      </main>
      <Footer />
    </>
  );
}
