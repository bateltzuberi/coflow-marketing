import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import {
  JsonLd,
  buildMetadata,
  breadcrumbsJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { REPLACES, SITE } from "@/lib/site";
import { COMPETITOR_CONTENT } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return REPLACES.filter((r) => r.slug !== "planable").map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const data = COMPETITOR_CONTENT[slug];
  if (!data) return {};
  return buildMetadata({
    title: `Coflow vs ${data.name} — the better ${data.name} alternative for agencies`,
    description: `Looking for a ${data.name} alternative? Coflow is all-in-one software for social media agencies — content calendar, client approvals, CRM, and tasks in one workspace.`,
    path: `/vs/${slug}`,
  });
}

export default async function VsPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const data = COMPETITOR_CONTENT[slug];
  if (!data) notFound();

  const faqs = [
    {
      q: `Is Coflow a real ${data.name} alternative?`,
      a: `Yes. Coflow covers the social-media-agency workflows ${data.name} is used for, and adds the modules that ${data.name} lacks — approvals, CRM, per-brand analytics — in one workspace.`,
    },
    {
      q: `What does Coflow do that ${data.name} doesn't?`,
      a: `Coflow gives you a content calendar per brand, a client approval flow, an agency CRM with a deals pipeline, and tasks designed for social media agencies — all in one tool. ${data.name} covers one slice.`,
    },
    {
      q: `Can I migrate from ${data.name} to Coflow?`,
      a: `Yes. On the Scale plan we'll help you migrate. On smaller plans you can import CSVs and rebuild brand calendars quickly using our templates.`,
    },
  ];

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Compare", path: `/vs/${slug}` },
          { name: `vs ${data.name}`, path: `/vs/${slug}` },
        ])}
      />

      <Nav />

      <section className="mx-auto max-w-4xl px-6 pt-20 pb-10 text-center">
        <p className="font-mono-label">— Coflow vs {data.name} —</p>
        <h1 className="font-display mt-6 text-5xl sm:text-6xl text-[var(--app-ink)]">
          The {data.name} alternative <span className="text-[var(--app-ink-soft)]">built for social media agencies.</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-base text-[var(--app-muted)] leading-relaxed">
          {data.gap}
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <a href={`${SITE.appUrl}/signup`} className="btn-primary min-h-12 text-sm">
            Try Coflow free
          </a>
          <Link href="/pricing" className="btn-ghost min-h-12 text-sm">
            See pricing
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-10">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Coflow</th>
              <th>{data.name}</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.feature}>
                <th scope="row" className="font-medium">{row.feature}</th>
                <Cell value={row.coflow} />
                <Cell value={row.theirs} />
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-xs text-[var(--app-muted)]">
          Based on publicly documented {data.name} features as of 2026-04. Coflow's product docs
          are the source of truth for Coflow capabilities.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14 prose-fieldnotes">
        <h2 className="font-display text-3xl sm:text-4xl text-[var(--app-ink)]">
          When {data.name} is the right tool.
        </h2>
        <p className="mt-4 text-base text-[var(--app-muted)] leading-relaxed">{data.strength}</p>

        <h2 className="mt-12 font-display text-3xl sm:text-4xl text-[var(--app-ink)]">
          When Coflow becomes the better fit.
        </h2>
        <p className="mt-4 text-base text-[var(--app-muted)] leading-relaxed">{data.gap}</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="font-display text-3xl sm:text-4xl text-[var(--app-ink)]">
          {data.name} vs Coflow — FAQ.
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card p-5 group">
              <summary className="cursor-pointer font-semibold text-[var(--app-ink)] list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <span className="text-[var(--app-muted)] transition group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-[var(--app-ink-soft)] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <p className="font-mono-label text-center">— Also compare —</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REPLACES.filter((r) => r.slug !== slug).map((r) => (
            <Link
              key={r.slug}
              href={`/vs/${r.slug}`}
              className="card p-4 hover:shadow-[var(--app-shadow)] transition"
            >
              <p className="font-mono-label">{r.category}</p>
              <p className="mt-1 text-base font-semibold text-[var(--app-ink)]">
                Coflow vs {r.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}

function Cell({ value }: { value: "yes" | "no" | "partial" }) {
  if (value === "yes") return <td className="yes">✓ Yes</td>;
  if (value === "no") return <td className="no">— No</td>;
  return <td>Partial</td>;
}
