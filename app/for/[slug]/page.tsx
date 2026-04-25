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
import { PERSONAS, FEATURES, INVITE } from "@/lib/site";
import { PERSONA_CONTENT } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PERSONAS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const data = PERSONA_CONTENT[slug];
  if (!data) return {};
  return buildMetadata({
    title: data.title,
    description: data.description,
    path: `/for/${slug}`,
  });
}

export default async function PersonaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const persona = PERSONAS.find((p) => p.slug === slug);
  const data = PERSONA_CONTENT[slug];
  if (!persona || !data) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Who it's for", path: `/for/${slug}` },
          { name: persona.name, path: `/for/${slug}` },
        ])}
      />

      <Nav />

      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center">
        <span className="pill">{INVITE.status}</span>
        <p className="font-mono-label mt-4">— For {persona.name.toLowerCase()} —</p>
        <h1 className="font-display mt-4 text-5xl sm:text-6xl text-foreground">
          {data.h1}
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
          {data.description}
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link href="/#waitlist" className="btn-primary min-h-12 text-sm">
            Request early access
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 grid gap-10 md:grid-cols-2">
        <div>
          <p className="font-mono-label">— Before Coflow —</p>
          <h2 className="mt-4 text-2xl font-semibold text-foreground">
            What this feels like today.
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-foreground-soft leading-relaxed">
            {data.pains.map((p) => (
              <li key={p} className="flex gap-2">
                <span aria-hidden className="text-danger font-semibold">✗</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono-label">— With Coflow —</p>
          <h2 className="mt-4 text-2xl font-semibold text-foreground">
            What changes on day one.
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-foreground-soft leading-relaxed">
            {data.wins.map((w) => (
              <li key={w} className="flex gap-2">
                <span aria-hidden className="text-success font-semibold">✓</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <p className="font-mono-label text-center">— Inside Coflow —</p>
        <h2 className="mt-4 text-center font-display text-3xl sm:text-4xl text-foreground">
          Everything you need in one workspace.
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
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

      <CtaSection title={data.ctaTitle} />
      <Footer />
    </>
  );
}
