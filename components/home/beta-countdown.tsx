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
// The server's clock is not the visitor's: the time appears after hydration
// instead of mismatching it.
const serverSnapshot = () => null;

const pad = (n: number) => String(n).padStart(2, "0");

/** "Last chance to join the beta" with the time left, as a pill floating at
 *  the top of the page; it leads to the price. Rendered only while the beta is
 *  open; at zero the page reloads, and the server then draws it without the
 *  pill and with the waitlist button. */
export function BetaCountdown({ t, href }: { t: HomeCopy["beta"]; href: string }) {
  const now = useSyncExternalStore(subscribe, nowSeconds, serverSnapshot);
  const left = now === null ? null : timeLeft(now * 1000, BETA_CLOSES_AT_MS);
  const over = left !== null && left.total === 0;

  useEffect(() => {
    if (over) window.location.reload();
  }, [over]);

  return (
    <a className="hm-beta" href={href} role="timer" aria-label={t.aria}>
      <span className="hm-beta-dot" aria-hidden="true" />
      <span className="hm-beta-long">{t.lastChance} ·</span>
      <span className="hm-beta-short">{t.short}</span>
      <span className="hm-beta-time" aria-hidden="true">
        {left === null ? (
          "--:--:--"
        ) : (
          <>
            {left.days > 0 && (
              <>
                {left.days} {left.days === 1 ? t.day : t.days}{" "}
              </>
            )}
            <span dir="ltr">
              {pad(left.hours)}:{pad(left.minutes)}:{pad(left.seconds)}
            </span>
          </>
        )}
      </span>
    </a>
  );
}
