import Link from "next/link";
import { CoflowMark } from "./coflow-mark";
import { SITE } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/features/content-calendar", label: "Features" },
  { href: "/for/social-media-managers", label: "Who it's for" },
  { href: "/vs/planable", label: "Compare" },
  // Pricing is hidden while we're invite-only.
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  return (
    <header className="border-b border-border bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16">
        <Link href="/" aria-label="Coflow home" className="no-underline">
          <CoflowMark className="text-[22px]" />
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`${SITE.appUrl}/login`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            Sign in
          </a>
          <span className="hidden md:inline pill" aria-label="Product status">
            Invite-only
          </span>
          <Link href="/#waitlist" className="btn-primary min-h-10 text-sm">
            Join waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
