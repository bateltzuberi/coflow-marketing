import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { JsonLd, softwareApplicationJsonLd, faqJsonLd, buildMetadata } from "@/lib/seo";
import { SITE, REPLACES, FEATURES } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Social media agency software — all in one workspace",
  description:
    "Coflow is the all-in-one social media agency software. Content calendar, client approvals, agency CRM, and tasks — one workspace that replaces Planable, Asana, Later, and Pipedrive. Free for your first brand.",
  path: "/",
});

const HOME_FAQS = [
  {
    q: "What tools does Coflow replace for a social media agency?",
    a: "Coflow replaces your content calendar (Planable, Later), project management (Asana, Monday, Notion), client approval tool, and agency CRM (Pipedrive, HubSpot) in a single workspace built specifically for social media agencies.",
  },
  {
    q: "Is Coflow a good tool for freelance social media managers?",
    a: "Yes. Coflow is free forever for your first brand, so solo social media managers can run their whole business — content planning, client approvals, tasks, and a light CRM — without paying for five separate tools.",
  },
  {
    q: "How is Coflow different from Planable?",
    a: "Planable stops at content approval. Coflow keeps the same clean approval flow and adds agency-wide tasks, a CRM with deals pipeline, client onboarding, and per-brand analytics — so you do not need a second tool for the rest of your agency.",
  },
  {
    q: "Do clients need a paid seat?",
    a: "No. Client review seats are included on every plan. Your clients get a calm, branded review link — they approve, comment, or request changes without logging into a busy tool they never asked for.",
  },
  {
    q: "Can I invite my team?",
    a: "Yes. Invite social managers and assign them to specific brands. They only see their brands — private strategy docs, pricing, and agency-only tasks stay hidden from clients and other team members.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqJsonLd(HOME_FAQS)} />

      <Nav />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
        <p className="font-mono-label">— Social media agency software —</p>
        <h1 className="font-display mt-6 text-5xl sm:text-7xl text-[var(--app-ink)]">
          The all-in-one tool for <span className="text-[var(--app-ink-soft)]">social media managers.</span>
        </h1>
        <p className="mt-8 mx-auto max-w-2xl text-base sm:text-lg text-[var(--app-muted)] leading-relaxed">
          Coflow is one calm workspace for social media agencies. Plan content, get client
          approvals, run your pipeline, and keep every brand on track — without paying for
          Planable, Asana, Later, and Pipedrive.
        </p>
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          <a href={`${SITE.appUrl}/signup`} className="btn-primary min-h-12 text-sm">
            Start free — one brand, no card
          </a>
          <Link href="/vs/planable" className="btn-ghost min-h-12 text-sm">
            See Coflow vs Planable
          </Link>
        </div>
        <p className="mt-4 text-xs text-[var(--app-muted)]">
          Free forever for your first brand. Trusted by agencies replacing 3–5 tools at once.
        </p>
      </section>

      {/* ── REPLACES ──────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center mb-10">
          <p className="font-mono-label">— Replaces —</p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl text-[var(--app-ink)]">
            One workspace. Five tools retired.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {REPLACES.map((r) => (
            <Link
              key={r.slug}
              href={`/vs/${r.slug}`}
              className="card p-5 hover:shadow-[var(--app-shadow)] transition group"
            >
              <p className="font-mono-label">{r.category}</p>
              <p className="mt-2 text-lg font-semibold text-[var(--app-ink)]">
                Coflow vs {r.name}
              </p>
              <p className="mt-1 text-sm text-[var(--app-muted)]">
                Why social media agencies switch →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-16">
        <div className="text-center">
          <p className="font-mono-label">— Built for agencies —</p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl text-[var(--app-ink)]">
            Every part of running a social media agency.
          </h2>
        </div>

        {FEATURES.map((f, i) => (
          <FeatureRow
            key={f.slug}
            num={String(i + 1).padStart(2, "0")}
            title={f.h1}
            body={f.short}
            href={`/features/${f.slug}`}
            reverse={i % 2 === 1}
          />
        ))}
      </section>

      {/* ── FOR WHOM ──────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center mb-10">
          <p className="font-mono-label">— Who it's for —</p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl text-[var(--app-ink)]">
            Made for the way social teams actually work.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <PersonaCard
            href="/for/social-media-managers"
            title="Social media managers"
            body="Plan, publish, and get approvals without bouncing between five tabs."
          />
          <PersonaCard
            href="/for/agencies"
            title="Social media agencies"
            body="Give every client a calm approval space. Keep pricing and strategy private."
          />
          <PersonaCard
            href="/for/freelancers"
            title="Freelancers"
            body="Run your whole business — content, clients, tasks, deals — for free on one brand."
          />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-10">
          <p className="font-mono-label">— FAQ —</p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl text-[var(--app-ink)]">
            Common questions.
          </h2>
        </div>
        <div className="space-y-4">
          {HOME_FAQS.map((f) => (
            <details key={f.q} className="card p-5 group">
              <summary className="cursor-pointer font-semibold text-[var(--app-ink)] list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <span className="text-[var(--app-muted)] transition group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[var(--app-ink-soft)] leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}

function FeatureRow({
  num,
  title,
  body,
  href,
  reverse,
}: {
  num: string;
  title: string;
  body: string;
  href: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid gap-8 sm:grid-cols-[auto_1fr] items-start ${reverse ? "sm:grid-flow-dense" : ""}`}
    >
      <div className={`sm:w-28 ${reverse ? "sm:col-start-2 sm:text-right" : ""}`}>
        <p className="font-mono-label">§ {num}</p>
      </div>
      <div>
        <h3 className="font-display text-3xl sm:text-4xl text-[var(--app-ink)]">{title}</h3>
        <p className="mt-4 text-base text-[var(--app-muted)] leading-relaxed max-w-xl">
          {body}
        </p>
        <Link href={href} className="link mt-4 inline-block text-sm">
          Learn more →
        </Link>
      </div>
    </div>
  );
}

function PersonaCard({
  href,
  title,
  body,
}: {
  href: string;
  title: string;
  body: string;
}) {
  return (
    <Link
      href={href}
      className="card p-6 hover:shadow-[var(--app-shadow)] transition block"
    >
      <p className="font-mono-label">Persona</p>
      <p className="mt-2 text-lg font-semibold text-[var(--app-ink)]">{title}</p>
      <p className="mt-2 text-sm text-[var(--app-muted)] leading-relaxed">{body}</p>
    </Link>
  );
}
