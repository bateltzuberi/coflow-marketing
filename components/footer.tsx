import { localizedPath } from "@/lib/locale-path";
import Link from "next/link";
import { CoflowMark } from "./coflow-mark";
import { LocaleSwitcher } from "./locale-switcher";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";

// The footer of every page other than home, in the home page's look: light,
// one row. Only pages that exist are linked (privacy and terms return when
// their texts arrive).
export async function Footer() {
  const locale = await getLocale();
  const t = getDict(locale).footer;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line">
      <div className="container-page py-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-[15px] text-ink-700">
        <CoflowMark size={30} showWordmark tone="blue" />
        <ul className="flex flex-wrap gap-6">
          {t.productLinks.map((l) => (
            <li key={l.href}>
              <Link href={localizedPath(l.href, locale)} className="hover:text-ink-900 transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ms-auto flex items-center gap-5 text-[13px]">
          <LocaleSwitcher locale={locale} className="font-bold text-ink-700 hover:text-ink-900 transition-colors" />
          <span className="tabular-nums">{t.copy.replace("{year}", String(year))}</span>
        </div>
      </div>
    </footer>
  );
}
