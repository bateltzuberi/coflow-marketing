import { notFound } from "next/navigation";
import { getLocale } from "@/lib/locale";
import { getGuide } from "@/lib/guide-content";
import { buildMetadata } from "@/lib/seo";
import { DiscoveryPage } from "@/components/discovery-page";

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const page = getGuide(slug, locale);
  if (!page) notFound();
  return buildMetadata({ title: page.title, description: page.description, path: `/guides/${slug}`, locale });
}
export default async function Guide({ params }: Props) {
  const { slug } = await params;
  const locale = await getLocale();
  const page = getGuide(slug, locale);
  if (!page) notFound();
  return <DiscoveryPage page={page} path={`/guides/${slug}`} locale={locale} guide />;
}
