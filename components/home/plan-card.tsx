"use client";

import { useEffect, useState } from "react";

// The one plan card with a monthly / yearly switch above it, the way pricing
// pages show billing periods (Kajabi, Kit): same card, the price changes.
// Monthly is selected first — €24 is the number the page and the posts lead with.

export type PlanOption = {
  key: "monthly" | "yearly";
  toggle: string;
  toggleNote?: string;
  badge: string;
  was: string;
  amount: string;
  per: string;
  save: string;
  note: string;
  cta: string;
  terms: string;
  href: string;
};

export function PlanCard({
  name,
  options,
  includesTitle,
  includes,
  fine,
  toggleLabel,
}: {
  name: string;
  options: readonly PlanOption[];
  includesTitle: string;
  includes: readonly string[];
  fine: string;
  toggleLabel: string;
}) {
  const [active, setActive] = useState(0);
  // ?billing=yearly opens the card on the yearly price (a link from a post can
  // point there). Read after mount so the first paint matches the server's.
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("billing");
    const i = options.findIndex((o) => o.key === wanted);
    if (i >= 0) setActive(i);
  }, [options]);
  const plan = options[active];
  return (
    <>
      <div className="hm-billing" role="radiogroup" aria-label={toggleLabel}>
        {options.map((o, i) => (
          <button
            key={o.key}
            type="button"
            role="radio"
            aria-checked={i === active}
            className={i === active ? "hm-billing-on" : undefined}
            onClick={() => setActive(i)}
          >
            {o.toggle}
            {o.toggleNote && <span>{o.toggleNote}</span>}
          </button>
        ))}
      </div>
      <div className="hm-plan">
        <div className="hm-plan-head">
          <b className="hm-plan-name">{name}</b>
          <span className="hm-plan-badge">{plan.badge}</span>
        </div>
        <div className="hm-plan-price">
          <s>{plan.was}</s>
          <b>{plan.amount}</b>
          <span>{plan.per}</span>
        </div>
        <span className="hm-plan-save">{plan.save}</span>
        <p className="hm-plan-lock">{plan.note}</p>
        <a className="hm-btn hm-plan-btn" href={plan.href}>
          {plan.cta}
        </a>
        <p className="hm-plan-terms">{plan.terms}</p>
        <p className="hm-plan-label">{includesTitle}</p>
        <ul className="hm-plan-list">
          {includes.map((g) => (
            <li key={g}>
              <i aria-hidden="true">✓</i>
              {g}
            </li>
          ))}
        </ul>
        <p className="hm-plan-fine">{fine}</p>
      </div>
    </>
  );
}
