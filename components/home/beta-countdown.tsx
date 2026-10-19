"use client";

import { useEffect, useSyncExternalStore } from "react";

import { BETA_CLOSES_AT_MS, timeLeft } from "@/lib/beta-window";
import type { HomeCopy } from "@/lib/home-copy";

// The clock, one tick a second. The snapshot is whole seconds so it stays the
// same between the renders of one tick.
function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}
const nowSeconds = () => Math.floor(Date.now() / 1000);
// The server's clock is not the visitor's: the numbers appear after hydration
// instead of mismatching it.
const serverSnapshot = () => null;

/** "Last chance to join the beta" with the time left until sign-up closes.
 *  Rendered only while the beta is open; at zero the page reloads, and the
 *  server then draws it without the countdown and with the waitlist button. */
export function BetaCountdown({ t }: { t: HomeCopy["beta"] }) {
  const now = useSyncExternalStore(subscribe, nowSeconds, serverSnapshot);
  const left = now === null ? null : timeLeft(now * 1000, BETA_CLOSES_AT_MS);
  const over = left !== null && left.total === 0;

  useEffect(() => {
    if (over) window.location.reload();
  }, [over]);

  const cells = [
    [left?.days, t.units.days],
    [left?.hours, t.units.hours],
    [left?.minutes, t.units.minutes],
    [left?.seconds, t.units.seconds],
  ] as const;

  return (
    <div className="hm-beta" role="timer" aria-live="off">
      <p className="hm-beta-title">{t.lastChance}</p>
      <div className="hm-beta-clock">
        {cells.map(([n, label]) => (
          <span key={label} className="hm-beta-cell">
            <b>{n === undefined ? "--" : String(n).padStart(2, "0")}</b>
            <small>{label}</small>
          </span>
        ))}
      </div>
      <p className="hm-beta-note">{t.closes}</p>
    </div>
  );
}
