"use client";

import { useState } from "react";

export type PublicPlans = {
  locale: "he" | "en";
  plans: {
    key: "starter" | "business" | "pro";
    name: string;
    headline: string;
    recommended: boolean;
    monthlyEur: number;
    yearlyEur: number | null;
    yearly: { perMonthEur: number; savesEur: number } | null;
    listTitle: string;
    lines: { strong: string | null; text: string; strongAfter: string | null; soon: boolean }[];
    cta: string;
  }[];
  labels: {
    monthly: string;
    yearly: string;
    twoMonthsFree: string;
    perMonth: string;
    perYear: string;
    recommended: string;
    trialLine: string;
    worksOutPerMonth: string;
    savesYearly: string;
    /** Beside a line that is not live yet (older Studio builds don't send it). */
    soon?: string;
  };
};

// Three plan cards with one monthly / yearly switch above them, in the site's
// plan-card look (Kajabi, Kit: same cards, the price changes).
export function PlansCards({ data, joinBase }: { data: PublicPlans; joinBase: string }) {
  const [cycle, setCycle] = useState<"month" | "year">("month");
  const { labels } = data;
  // A line marked soon is not included yet: say so, as the Studio's plans page does.
  const soonWord = labels.soon ?? (data.locale === "he" ? "בקרוב" : "Soon");
  const tag = data.locale === "he" ? "he-IL" : "en-US";
  const whole = new Intl.NumberFormat(tag, { maximumFractionDigits: 0 });
  const cents = new Intl.NumberFormat(tag, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  // €82.50, never €82.5; whole prices stay whole (€59).
  const eur = (v: number) => `€${Number.isInteger(v) ? whole.format(v) : cents.format(v)}`;
  return (
    <>
      <div className="hm-billing" role="radiogroup" aria-label={`${labels.monthly} / ${labels.yearly}`}>
        {(["month", "year"] as const).map((c) => (
          <button key={c} type="button" role="radio" aria-checked={cycle === c} className={cycle === c ? "hm-billing-on" : undefined} onClick={() => setCycle(c)}>
            {c === "month" ? labels.monthly : labels.yearly}
            {c === "year" && <span>{labels.twoMonthsFree}</span>}
          </button>
        ))}
      </div>
      <div className="hm-plans">
        {data.plans.map((p) => {
          const yearly = cycle === "year" && p.yearlyEur !== null;
          return (
            <div key={p.key} className={p.recommended ? "hm-plan hm-plan-rec" : "hm-plan"}>
              <div className="hm-plan-head">
                <b className="hm-plan-name">{p.name}</b>
                {p.recommended && <span className="hm-plan-badge">{labels.recommended}</span>}
              </div>
              <p className="hm-plan-desc">{p.headline}</p>
              <div className="hm-plan-price">
                <b>{eur(yearly ? p.yearlyEur! : p.monthlyEur)}</b>
                <span>{yearly ? labels.perYear : labels.perMonth}</span>
              </div>
              {yearly && p.yearly && (
                <span className="hm-plan-save">
                  {labels.worksOutPerMonth.replace("{eur}", eur(p.yearly.perMonthEur))} · {labels.savesYearly.replace("{eur}", eur(p.yearly.savesEur))}
                </span>
              )}
              <a className="hm-btn hm-plan-btn" href={`${joinBase}&plan=${p.key}&cycle=${cycle}`}>
                {p.cta}
              </a>
              <p className="hm-plan-terms">{labels.trialLine}</p>
              <p className="hm-plan-label">{p.listTitle}</p>
              <ul className="hm-plan-list">
                {p.lines.map((l) => (
                  <li key={`${l.strong ?? ""}${l.text}`} className={l.soon ? "hm-plan-soonline" : undefined}>
                    <i aria-hidden="true">✓</i>
                    <span>
                      {l.strong && <b>{l.strong} </b>}
                      {l.text}
                      {l.strongAfter && <b> {l.strongAfter}</b>}
                      {l.soon && <em className="hm-plan-soon">{soonWord}</em>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
