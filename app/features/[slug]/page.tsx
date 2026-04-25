import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import {
  JsonLd,
  buildMetadata,
  breadcrumbsJsonLd,
} from "@/lib/seo";
import { FEATURES, INVITE } from "@/lib/site";
import { FEATURE_CONTENT } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return FEATURES.filter((f) => f.slug !== "content-calendar").map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const feature = FEATURES.find((f) => f.slug === slug);
  if (!feature) return {};
  const content = FEATURE_CONTENT[slug];
  return buildMetadata({
    title: feature.h1,
    description: content?.description ?? feature.short,
    path: `/features/${slug}`,
  });
}

export default async function FeaturePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const feature = FEATURES.find((f) => f.slug === slug);
  const content = FEATURE_CONTENT[slug];
  if (!feature || !content) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Features", path: `/features/${slug}` },
          { name: feature.name, path: `/features/${slug}` },
        ])}
      />

      <Nav />

      <article className="prose-fieldnotes">
        <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center">
          <span className="pill">{INVITE.status}</span>
          <p className="font-mono-label mt-4">— Feature · {feature.name} —</p>
          <h1 className="font-display mt-4 text-5xl sm:text-6xl text-foreground">
            {feature.h1}
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
            {content.description}
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/#waitlist" className="btn-primary min-h-12 text-sm">
              Request early access
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-14 grid gap-10 md:grid-cols-2">
          {content.blocks.map((b) => (
            <div key={b.title}>
              <h2 className="text-xl font-semibold text-foreground">{b.title}</h2>
              <p className="mt-3 text-base text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Why agencies pick this over standalone tools.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {content.context}
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-14">
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">
            Related features.
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {FEATURES.filter((f) => f.slug !== slug).map((f) => (
              <Link
                key={f.slug}
                href={`/features/${f.slug}`}
                className="card p-5 hover:shadow-shadow-sm transition"
              >
                <p className="font-mono-label">Feature</p>
                <p className="mt-1 text-base font-semibold text-foreground">{f.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.short}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <CtaSection />
      <Footer />
    </>
  );
}
