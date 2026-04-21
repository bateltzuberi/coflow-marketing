import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import {
  JsonLd,
  buildMetadata,
  breadcrumbsJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { INVITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Coflow vs Planable — the better Planable alternative for agencies",
  description:
    "Looking for a Planable alternative? Coflow gives you the same clean client approval flow — and adds agency tasks, a CRM, and per-brand analytics, so you stop paying for five tools.",
  path: "/vs/planable",
});

const FAQS = [
  {
    q: "Is Coflow a direct Planable alternative?",
    a: "Yes. Coflow includes every core Planable workflow — content calendar, post drafts, client review links, approvals, comments, and version history — plus the rest of your agency workspace.",
  },
  {
    q: "Why would I switch from Planable?",
    a: "Most agencies pay for Planable and Asana, Planable and Notion, or Planable and Pipedrive. Coflow covers all of those in one place. You drop 2–4 tools from your stack.",
  },
  {
    q: "Can I migrate my Planable brands to Coflow?",
    a: "Yes. On the Scale plan we help you migrate brands, posts, and approval history. On Solo and Agency, you can import brand data and rebuild calendars quickly with our templates.",
  },
  {
    q: "Is Coflow cheaper than Planable?",
    a: "For most agencies, yes. Coflow is free for one brand; our per-brand pricing avoids Planable's per-workspace + per-user stacking. Every client reviewer is always free on Coflow.",
  },
];

const ROWS: { feature: string; coflow: string; planable: string }[] = [
  { feature: "Content calendar per brand", coflow: "yes", planable: "yes" },
  { feature: "Client review + approvals", coflow: "yes", planable: "yes" },
  { feature: "Comments in context on each post", coflow: "yes", planable: "yes" },
  { feature: "Agency tasks (project management)", coflow: "yes", planable: "no" },
  { feature: "Agency CRM + deals pipeline", coflow: "yes", planable: "no" },
  { feature: "Brand onboarding flows", coflow: "yes", planable: "partial" },
  { feature: "Client reviewers free (unlimited)", coflow: "yes", planable: "partial" },
  { feature: "Private agency-only strategy docs", coflow: "yes", planable: "no" },
  { feature: "Per-brand analytics", coflow: "yes", planable: "partial" },
  { feature: "Free tier for solo managers", coflow: "yes", planable: "no" },
];

export default function VsPlanablePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/vs/planable" },
          { name: "vs Planable", path: "/vs/planable" },
        ])}
      />

      <Nav />

      <section className="mx-auto max-w-4xl px-6 pt-16 pb-10 text-center">
        <span className="pill">{INVITE.status}</span>
        <p className="font-mono-label mt-4">— Coflow vs Planable —</p>
        <h1 className="font-display mt-4 text-5xl sm:text-6xl text-[var(--app-ink)]">
          The Planable alternative <span className="text-[var(--app-ink-soft)]">built for whole agencies.</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-base text-[var(--app-muted)] leading-relaxed">
          Planable is great at approvals — and stops there. Coflow gives you the same calm
          approval flow, plus tasks, a CRM, and per-brand analytics, so your social media
          agency finally runs on one tool.
        </p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link href="/#waitlist" className="btn-primary min-h-12 text-sm">
            Request early access
          </Link>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Coflow</th>
              <th>Planable</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.feature}>
                <th scope="row" className="font-medium">{row.feature}</th>
                <Cell value={row.coflow} />
                <Cell value={row.planable} />
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3 text-xs text-[var(--app-muted)]">
          Based on publicly documented Planable features as of 2026-04. Coflow's product docs
          are the source of truth for Coflow capabilities.
        </p>
      </section>

      {/* Narrative */}
      <section className="mx-auto max-w-3xl px-6 py-14 prose-fieldnotes">
        <h2 className="font-display text-3xl sm:text-4xl text-[var(--app-ink)]">
          When Planable is enough — and when it isn't.
        </h2>
        <p className="mt-4 text-base text-[var(--app-muted)] leading-relaxed">
          If your agency only needs client approvals, Planable is a fine tool. But most social
          media agencies also need: a real project tracker for shoots, briefs, and reports; a
          CRM to manage leads and contracts; a private space for strategy docs; and analytics
          that roll up per brand. That's three to four more tools, three to four more
          subscriptions, three to four more places people forget to check.
        </p>
        <p className="mt-4 text-base text-[var(--app-muted)] leading-relaxed">
          Coflow was designed by people who ran a social media agency and got tired of paying
          Planable + Asana + Pipedrive + Notion every month. It keeps the one thing Planable
          does well — a calm, branded approval flow — and makes it feel native next to
          everything else your agency does.
        </p>

        <h2 className="mt-12 font-display text-3xl sm:text-4xl text-[var(--app-ink)]">
          What you give up, what you gain.
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-[var(--app-ink-soft)]">
          <li>→ Gain: one bill, one login, one source of truth per brand.</li>
          <li>→ Gain: agency-only tasks and docs your clients never see.</li>
          <li>→ Gain: a free tier for solo managers starting out.</li>
          <li>→ Give up: Planable's Pinterest-specific preview (on our roadmap).</li>
          <li>→ Give up: Planable's brand-kit library (coming in Coflow v2).</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="font-display text-3xl sm:text-4xl text-[var(--app-ink)]">
          Planable vs Coflow — FAQ.
        </h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((f) => (
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

      <CtaSection
        title="Your agency deserves one tool, not five."
        subtitle="Start free with one brand. Bring the rest when you're ready to consolidate."
      />
      <Footer />
    </>
  );
}

function Cell({ value }: { value: string }) {
  if (value === "yes") return <td className="yes">✓ Yes</td>;
  if (value === "no") return <td className="no">— No</td>;
  return <td>Partial</td>;
}
