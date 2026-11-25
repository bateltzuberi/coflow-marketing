import { SITE } from "@/lib/site";
import type { Locale } from "@/lib/locale-path";
import { PlansCards, type PublicPlans } from "./plans-cards";

// The price section: the three plans, read from the Studio
// (studio.coflow.social/api/plans/public) — the same source as its plans page,
// so a price or a card line changes in one place. Each card's button goes to
// the Studio's pay-first /join for that plan, with its free trial period.
// If the Studio can't be read, the section is left out rather than guessed.

async function readPlans(locale: Locale): Promise<PublicPlans | null> {
  try {
    const res = await fetch(`${SITE.studioAppUrl}/api/plans/public?lang=${locale}`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return (await res.json()) as PublicPlans;
  } catch {
    return null;
  }
}

export async function PlansSection({ locale, title, sub }: { locale: Locale; title: string; sub: string }) {
  const data = await readPlans(locale);
  if (!data) return null;
  return (
    <section className="hm-price" id="price">
      <div className="hm-wrap">
        <h2 className="hm-plan-h2">{title}</h2>
        <p className="hm-plan-sub">{sub}</p>
        <PlansCards data={data} joinBase={`${SITE.studioAppUrl}/join?lang=${locale}`} />
      </div>
    </section>
  );
}
