import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { JsonLd, buildMetadata, faqJsonLd, breadcrumbsJsonLd } from "@/lib/seo";
import { INVITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Pricing — what you get when your invite opens",
  description:
    "Coflow is currently invite-only. Here's the pricing you'll see the day you're in — free for your first brand, honest per-brand pricing as your social media agency grows.",
  path: "/pricing",
});

const PRICING_FAQS = [
  {
    q: "If Coflow is invite-only, why is there pricing?",
    a: "So you know what you're signing up for. Once your invite opens, you choose your plan. We never bait-and-switch pricing after you're inside.",
  },
  {
    q: "Is Coflow really free?",
    a: "Yes. One brand, one agency owner, forever. You only pay when you add more brands or invite more social managers.",
  },
  {
    q: "Do client reviewers count as seats?",
    a: "No. Client reviewers are always free — on every plan, including the free one. Invite as many clients per brand as you need.",
  },
  {
    q: "Can I cancel any time?",
    a: "Yes. Cancel in one click from your workspace settings. No phone calls, no retention traps.",
  },
  {
    q: "Do you offer a discount for agencies with many brands?",
    a: "Yes. Reach out from your workspace once you're above 10 brands and we'll sort you out with an agency plan.",
  },
];

const PLANS = [
  {
    name: "Solo",
    price: "$0",
    period: "forever",
    tagline: "For freelance social media managers starting out.",
    features: [
      "1 brand workspace",
      "1 agency owner seat",
      "Unlimited client reviewers",
      "Content calendar + approvals",
      "Tasks + light CRM",
      "Community support",
    ],
    highlight: false,
  },
  {
    name: "Agency",
    price: "Fair",
    period: "per brand / month",
    tagline: "For growing social media agencies with multiple brands.",
    features: [
      "Unlimited brands (pay per brand)",
      "Invite social managers, assign brands",
      "Private agency tasks + strategy docs",
      "Full CRM + deals pipeline",
      "Per-brand analytics",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "for 10+ brands",
    tagline: "For established agencies replacing five tools at once.",
    features: [
      "Volume pricing on brands",
      "SSO + audit logs",
      "Migration help from Planable / Asana / Later",
      "Dedicated onboarding",
      "SLA support",
    ],
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(PRICING_FAQS)} />
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />

      <Nav />

      <section className="mx-auto max-w-4xl px-6 pt-16 pb-10 text-center">
        <span className="pill">{INVITE.status}</span>
        <h1 className="font-display mt-6 text-5xl sm:text-6xl text-[var(--app-ink)]">
          What it costs <span className="text-[var(--app-ink-soft)]">the day your invite opens.</span>
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-base text-[var(--app-muted)] leading-relaxed">
          One brand is free forever. Pay per brand as your agency grows — not per seat,
          not per client, and never in surprise overage bills.
        </p>
        <div className="mt-6">
          <Link href="/#waitlist" className="btn-primary min-h-12 text-sm">
            Get on the waitlist
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-5 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`card p-7 flex flex-col ${plan.highlight ? "ring-2 ring-[var(--app-accent)]" : ""}`}
            >
              {plan.highlight && (
                <span className="pill self-start mb-4">Most teams</span>
              )}
              <h2 className="text-xl font-semibold text-[var(--app-ink)]">{plan.name}</h2>
              <p className="mt-1 text-sm text-[var(--app-muted)]">{plan.tagline}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[var(--app-ink)]">{plan.price}</span>
                <span className="text-sm text-[var(--app-muted)]">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-[var(--app-ink-soft)]">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span aria-hidden className="text-[var(--app-success)] font-semibold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#waitlist"
                className={`mt-7 ${plan.highlight ? "btn-accent" : "btn-primary"} min-h-11 text-sm`}
              >
                Request invite for this plan
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-8">
          <p className="font-mono-label">— Pricing FAQ —</p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl text-[var(--app-ink)]">
            What you'll probably ask.
          </h2>
        </div>
        <div className="space-y-4">
          {PRICING_FAQS.map((f) => (
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
        title="Ready to jump in the line?"
        subtitle="Get on the waitlist. Tell us what you run today — we'll prioritise your invite for the right cohort."
        source="pricing"
      />
      <Footer />
    </>
  );
}
