import { WaitlistForm } from "./waitlist-form";
import { INVITE } from "@/lib/site";

export function CtaSection({
  eyebrow = `— ${INVITE.status} —`,
  title = "Invite-only while we roll out to the first cohort.",
  subtitle = INVITE.waitlistCopy,
  source = "cta-section",
  id = "waitlist",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  source?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="border-y border-[var(--app-border)] bg-[var(--app-bg-warm)]"
    >
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="font-mono-label">{eyebrow}</p>
        <h2 className="font-display mt-5 text-4xl sm:text-5xl text-[var(--app-ink)]">
          {title}
        </h2>
        <p className="mt-6 mx-auto max-w-lg text-sm text-[var(--app-muted)] leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8">
          <WaitlistForm source={source} />
        </div>
      </div>
    </section>
  );
}
