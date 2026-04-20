import Link from "next/link";
import { CoflowMark } from "./coflow-mark";
import { SITE, FEATURES, REPLACES, PERSONAS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--app-border)] bg-[var(--app-bg-warm)]">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <CoflowMark className="text-[24px]" />
          <p className="mt-4 max-w-sm text-sm text-[var(--app-muted)] leading-relaxed">
            {SITE.description}
          </p>
          <Link href="/#waitlist" className="btn-primary min-h-10 text-sm mt-5">
            Request early access
          </Link>
        </div>

        <FooterCol title="Features" links={FEATURES.map((f) => ({
          href: `/features/${f.slug}`,
          label: f.name,
        }))} />

        <FooterCol title="Compare" links={REPLACES.map((r) => ({
          href: `/vs/${r.slug}`,
          label: `vs ${r.name}`,
        }))} />

        <FooterCol
          title="Who it's for"
          links={[
            ...PERSONAS.map((p) => ({
              href: `/for/${p.slug}`,
              label: p.name,
            })),
            { href: "/pricing", label: "Pricing" },
            { href: "/blog", label: "Blog" },
          ]}
        />
      </div>
      <div className="border-t border-[var(--app-border)]">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--app-muted)]">
          <p>© {new Date().getFullYear()} Coflow. Invite-only · coflow.social</p>
          <div className="flex items-center gap-4">
            <Link href="/#waitlist" className="hover:text-[var(--app-ink)] transition">
              Join waitlist
            </Link>
            <a href={`${SITE.appUrl}/login`} className="hover:text-[var(--app-ink)] transition">
              Existing member?
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="font-mono-label mb-3">{title}</p>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-[var(--app-ink-soft)] hover:text-[var(--app-ink)] transition"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
