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
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Content calendar for social media agencies",
  description:
    "A content calendar built for social media agencies. One calm calendar per brand — drafts, internal review, client approval, scheduled, published. Drag to reschedule.",
  path: "/features/content-calendar",
});

const FAQS = [
  {
    q: "Is this a social media scheduling tool?",
    a: "Coflow is a planning and approval calendar. Scheduling to Instagram is included; other networks are on the roadmap. Agencies that need multi-network scheduling today pair Coflow with their existing scheduler.",
  },
  {
    q: "Can clients see the calendar?",
    a: "Clients only see the posts that need them. They do not see drafts, internal notes, your pricing, or other brands you run.",
  },
  {
    q: "How is this different from Later or Planable?",
    a: "Later is a multi-network scheduler; Planable is a single-purpose approval tool. Coflow is the calendar plus the approval flow plus your tasks and CRM — built for how a social media agency actually runs.",
  },
];

export default function ContentCalendarPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(FAQS)} />
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features/content-calendar" },
          { name: "Content calendar", path: "/features/content-calendar" },
        ])}
      />

      <Nav />

      <article className="prose-fieldnotes">
        <section className="mx-auto max-w-3xl px-6 pt-20 pb-10 text-center">
          <p className="font-mono-label">— Feature —</p>
          <h1 className="font-display mt-6 text-5xl sm:text-6xl text-[var(--app-ink)]">
            A content calendar built for <span className="text-[var(--app-ink-soft)]">social media agencies.</span>
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-base text-[var(--app-muted)] leading-relaxed">
            One calm calendar per brand. Every post carries its status — draft, internal
            review, client review, approved, scheduled, published. Drag to reschedule. No
            screenshots. No chat threads.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <a href={`${SITE.appUrl}/signup`} className="btn-primary min-h-12 text-sm">
              Try it free
            </a>
            <Link href="/vs/later" className="btn-ghost min-h-12 text-sm">
              Compare to Later
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-14 grid gap-10 md:grid-cols-2">
          <Block
            title="Per-brand, not per-account"
            body="Every brand has its own calendar, team, and client reviewers. No bleeding between clients, no confusing cross-brand timelines."
          />
          <Block
            title="Statuses that mean something"
            body="Draft → internal review → client review → approved → scheduled → published. Each post shows its step, each person sees only what they need to do."
          />
          <Block
            title="Drag-and-drop reschedule"
            body="Plans change. Move a post to next Tuesday and every reviewer, every task, every notification stays in sync."
          />
          <Block
            title="Context stays with the post"
            body="Comments, change requests, version history — attached to the post, not scattered across WhatsApp, Slack, and email."
          />
        </section>

        <section className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--app-ink)]">
            Why agencies switch to Coflow's calendar.
          </h2>
          <p className="mt-4 text-base text-[var(--app-muted)] leading-relaxed">
            Tools like Later and Planoly were built for single creators posting for themselves.
            Tools like Planable were built for one specific job — approval — and leave your
            team bouncing back to Asana for everything else. Coflow was built for the social
            media agency: the calendar, the review flow, and the agency-side work it triggers
            all live together.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[var(--app-ink-soft)]">
            <li>→ One workspace per agency; one calendar per brand.</li>
            <li>→ Clients never see drafts, pricing, or other brands.</li>
            <li>→ Every approved post can auto-spawn the tasks that follow it.</li>
            <li>→ Free for your first brand — no card needed to try.</li>
          </ul>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="font-display text-3xl sm:text-4xl text-[var(--app-ink)]">FAQ.</h2>
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
      </article>

      <CtaSection
        title="Put your calendar on Coflow."
        subtitle="Free for one brand. Bring your team and clients when you're ready."
      />
      <Footer />
    </>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[var(--app-ink)]">{title}</h3>
      <p className="mt-3 text-base text-[var(--app-muted)] leading-relaxed">{body}</p>
    </div>
  );
}
