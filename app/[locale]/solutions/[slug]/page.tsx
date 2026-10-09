import { notFound } from "next/navigation";
import { getLocale } from "@/lib/locale";
import { getSolution } from "@/lib/discovery-content";
import { buildMetadata } from "@/lib/seo";
import { DiscoveryPage } from "@/components/discovery-page";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const page = getSolution(slug, locale);
  if (!page) notFound();
  return buildMetadata({ title: page.title, description: page.description, path: `/solutions/${slug}`, locale });
}
export default async function Solution({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const page = getSolution(slug, locale);
  if (!page) notFound();
  return <DiscoveryPage page={page} path={`/solutions/${slug}`} locale={locale} />;
}
