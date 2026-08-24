import Link from "next/link";
import { CoflowMark } from "./coflow-mark";
import { LocaleSwitcher } from "./locale-switcher";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

export async function Footer() {
  const locale = await getLocale();
  const t = getDict(locale).footer;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink-900 text-white">
      <div className="container-page py-20 md:py-24">
        {/* Big master mark only — wordmark removed per brand direction */}
        <div className="flex flex-col items-center text-center">
          <div className="hidden md:block">
            <CoflowMark size={140} showWordmark={false} tone="cream" />
          </div>
          <div className="md:hidden">
            <CoflowMark size={96} showWordmark={false} tone="cream" />
          </div>
          <p className="mt-8 text-base text-white/60 max-w-md">
            {t.tagline}
          </p>
        </div>

        {/* 3 columns — agencies column will return when the agency tier
            ships. Until then, Studio carries the product surfaces. */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-10">
          <FooterCol title={t.cols.product} dot="lime" links={t.productLinks} />
          <FooterCol title={t.cols.company} links={t.companyLinks} />
          <FooterCol title={t.cols.legal} links={t.legalLinks} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/55">
          <p className="tabular-nums">{t.copy.replace("{year}", String(year))}</p>
          <div className="flex items-center gap-5">
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  dot,
  links,
}: {
  title: string;
  dot?: "lime" | "lavender";
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="font-mono-label !text-white/55 mb-4 inline-flex items-center gap-2">
        {dot && <span className={`dot dot-${dot}`} aria-hidden="true" />}
        {title}
      </p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm text-white/75 hover:text-white transition"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
