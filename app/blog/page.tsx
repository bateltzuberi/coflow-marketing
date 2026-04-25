import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Coflow blog — for social media managers and agencies",
  description:
    "Playbooks and opinion pieces from the Coflow team on running social media agencies, client approvals, and pricing.",
  path: "/blog",
});

// Phase 2: replace with real MDX posts. This index is intentionally lean so
// it can be indexed without thin-content penalties, while still shipping.
const UPCOMING_TOPICS = [
  "The social media agency pricing playbook (2026 edition)",
  "How to design a client approval workflow clients actually use",
  "Per-brand vs per-seat pricing — what actually fits an agency",
  "Replacing Asana, Planable, and Pipedrive with one tool",
  "Client onboarding checklist for social media managers",
];

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-10 text-center">
        <p className="font-mono-label">— Blog —</p>
        <h1 className="font-display mt-6 text-5xl sm:text-6xl text-foreground">
          Playbooks for social media agencies.
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
          Opinions, workflows, and frameworks we've learned running — and building for —
          social media agencies. New posts go live on a monthly cadence.
        </p>
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <p className="font-mono-label">— Coming soon —</p>
        <ul className="mt-6 space-y-3">
          {UPCOMING_TOPICS.map((t) => (
            <li key={t} className="card p-5 text-foreground">
              {t}
            </li>
          ))}
        </ul>
      </section>
      <CtaSection />
      <Footer />
    </>
  );
}
