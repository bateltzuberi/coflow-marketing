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
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:h-16 md:px-6">
        <Link href="/" aria-label="Coflow home" className="no-underline shrink-0">
          <CoflowMark className="text-[20px] md:text-[22px]" />
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href={`${SITE.appUrl}/login`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </a>
          <Link
            href="/#waitlist"
            className="btn-primary min-h-9 px-3.5 text-sm md:min-h-10 md:px-5"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
