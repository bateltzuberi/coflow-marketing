import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { WaitlistForm } from "@/components/waitlist-form";
import { JsonLd, softwareApplicationJsonLd, faqJsonLd, buildMetadata } from "@/lib/seo";
import { REPLACES, FEATURES, INVITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Invite-only workspace for social media agencies",
  description:
    "Coflow is the invite-only all-in-one workspace for social media agencies — content calendar, client approvals, CRM, and tasks. Replaces Planable, Asana, Later, and Pipedrive. Join the waitlist.",
  path: "/",
});

const HOME_FAQS = [
  {
    q: "Why is Coflow invite-only?",
    a: "We're rolling out slowly so every early agency gets direct support from our team. A new cohort opens each week — roughly 20 agencies, prioritised by use case and team size.",
  },
  {
    q: "How long is the waitlist?",
    a: "Most agencies get in within 2–4 weeks. If you tell us your use case when you sign up, we can prioritise you for the fit.",
  },
  {
    q: "What tools does Coflow replace for a social media agency?",
    a: "Coflow replaces your content calendar (Planable, Later), project management (Asana, Monday, Notion), client approval tool, and agency CRM (Pipedrive, HubSpot) in a single workspace built specifically for social media agencies.",
  },
  {
    q: "Is Coflow free once I'm in?",
    a: "Yes — your first brand workspace is free forever. You only pay when you add more brands or invite more social managers. No per-seat gouging, no surprise invoices.",
  },
  {
    q: "How is Coflow different from Planable?",
    a: "Planable stops at content approval. Coflow keeps the same clean approval flow and adds agency-wide tasks, a CRM with deals pipeline, client onboarding, and per-brand analytics — so you do not need a second tool for the rest of your agency.",
  },
  {
    q: "Do clients need a paid seat?",
    a: "No. Client review seats are free on every plan. Clients get a calm, branded review link — they approve, comment, or request changes without logging into a busy tool they never asked for.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqJsonLd(HOME_FAQS)} />

      <Nav />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8 text-center">
        <span className="pill">{INVITE.status}</span>
        <h1 className="font-display mt-6 text-5xl sm:text-7xl text-[var(--app-ink)]">
          The workspace social media agencies have been <span className="text-[var(--app-ink-soft)]">waiting for.</span>
        </h1>
        <p className="mt-8 mx-auto max-w-2xl text-base sm:text-lg text-[var(--app-muted)] leading-relaxed">
          Content planning, client approvals, agency CRM, and tasks — one calm workspace for
          the whole agency. Currently invite-only while we roll out to our first cohort.
        </p>

        <div id="waitlist" className="mt-10 scroll-mt-24">
          <WaitlistForm source="home-hero" />
        </div>

        <p className="mt-6 text-xs text-[var(--app-muted)]">
          {INVITE.scarcityLine} · replaces Planable, Asana, Later, Pipedrive
        </p>
      </section>

      {/* ── REPLACES ──────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center mb-10">
          <p className="font-mono-label">— Replaces —</p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl text-[var(--app-ink)]">
            One workspace. Five tools retired.
          </h2>
          <p className="mt-3 text-sm text-[var(--app-muted)]">
            Most agencies on the waitlist are moving off three to five of these.
          </p>
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
                Why agencies switch →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-16">
        <div className="text-center">
          <p className="font-mono-label">— Inside the workspace —</p>
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
            body="Run your whole business — content, clients, tasks, deals — in one tool, free on one brand."
          />
        </div>
      </section>

      {/* ── MID-PAGE WAITLIST ─────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="font-mono-label">— Get in —</p>
        <h2 className="font-display mt-4 text-4xl sm:text-5xl text-[var(--app-ink)]">
          Invites open each week. Be in the next batch.
        </h2>
        <p className="mt-6 mx-auto max-w-md text-sm text-[var(--app-muted)] leading-relaxed">
          Tell us what you're running today and we'll prioritise your invite for the right
          cohort.
        </p>
        <div className="mt-8">
          <WaitlistForm source="home-midpage" />
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

      {/* Final CTA (shared component) */}
      <section className="border-y border-[var(--app-border)] bg-[var(--app-bg-warm)]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="font-mono-label">— Last nudge —</p>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl text-[var(--app-ink)]">
            One tool. One calm workspace. Zero tabs to juggle.
          </h2>
          <p className="mt-6 mx-auto max-w-lg text-sm text-[var(--app-muted)] leading-relaxed">
            If that sounds like what your agency needs, get on the list before the next
            cohort fills.
          </p>
          <div className="mt-8">
            <WaitlistForm source="home-footer" />
          </div>
        </div>
      </section>

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
