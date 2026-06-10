import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JsonLd, buildMetadata, faqJsonLd, breadcrumbsJsonLd } from "@/lib/seo";
import { POSITIONING, wizardUrlFor } from "@/lib/site";
import { getLocale } from "@/lib/locale";

// Public pricing. One real tier today (Studio · free for one brand).
// The agency tier returns when that product ships; until then we keep
// the page honest — one plan, one price, no surprises.
export const metadata = buildMetadata({
  title: "Pricing — free forever for your first brand",
  description:
    "Coflow Studio is free, forever, for one brand. Brand analysis, podcast, newsletter, social and unified analytics — included.",
  path: "/pricing",
});

const PRICING_FAQS = [
  {
    q: "Is Coflow really free?",
    a: "Yes. One brand, every channel, free forever. No card, no expiry — you only pay if you want to add more brands or invite teammates.",
  },
  {
    q: "What's included in the free plan?",
    a: "Everything most personal brands need: the brand analysis wizard, podcast hosting, newsletter, social calendar, unified analytics, media library and integrations.",
  },
  {
    q: "Will pricing change later?",
    a: "We may add paid tiers for multi-brand setups and an agency workspace, but the personal-brand plan stays free, forever. We never bait-and-switch.",
  },
  {
    q: "Can I cancel any time?",
    a: "Of course. Free plan, no card on file — there's nothing to cancel. If you later upgrade and want to stop, it's one click from your workspace settings.",
  },
  {
    q: "When does the agency tier ship?",
    a: "Later. We're focused on shipping the personal-brand product first; the agency tier is in the pipeline but not on the public site yet.",
  },
];

const PLAN = {
  name: "Studio",
  price: "$0",
  period: "forever",
  tagline: "Everything you need to run your personal brand from one place.",
  features: [
    "Brand analysis wizard",
    "Podcast hosting + planning",
    "Newsletter (write, schedule, send)",
    "Social calendar across channels",
    "Unified analytics",
    "Media library",
    "Integrations (YouTube, Meta, TikTok, Google)",
  ],
} as const;

export default async function PricingPage() {
  const locale = await getLocale();
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
        <span className="pill">{POSITIONING.status}</span>
        <h1 className="font-display mt-6 text-5xl sm:text-6xl text-foreground">
          One plan. <span className="text-foreground-soft">Free, forever.</span>
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-base text-muted-foreground leading-relaxed">
          One brand, every channel — free, forever, no card. The agency tier
          is on its way; until then, this is what you pay.
        </p>
        <div className="mt-6">
          <a href={wizardUrlFor(locale)} className="btn-primary min-h-12 text-sm">
            Run my analysis
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-md px-6 pb-12">
        <article className="card p-8 flex flex-col ring-2 ring-primary">
          <span className="pill self-start mb-4">{PLAN.name}</span>
          <p className="mt-1 text-sm text-muted-foreground">{PLAN.tagline}</p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-5xl font-bold text-foreground">{PLAN.price}</span>
            <span className="text-sm text-muted-foreground">{PLAN.period}</span>
          </div>
          <ul className="mt-7 space-y-2 text-sm text-foreground-soft">
            {PLAN.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span aria-hidden className="text-success font-semibold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a href={wizardUrlFor(locale)} className="mt-8 btn-accent min-h-11 text-sm text-center">
            Run my analysis →
          </a>
        </article>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-8">
          <p className="font-mono-label">— Pricing FAQ —</p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl text-foreground">
            What you&apos;ll probably ask.
          </h2>
        </div>
        <div className="space-y-4">
          {PRICING_FAQS.map((f) => (
            <details key={f.q} className="card p-5 group">
              <summary className="cursor-pointer font-semibold text-foreground list-none flex justify-between items-center gap-4">
                <span>{f.q}</span>
                <span className="text-muted-foreground transition group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-foreground-soft leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Still have questions?{" "}
            <Link href="/contact" className="link">
              Talk to us →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
