"use client";
import { localizedPath } from "@/lib/locale-path";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

import type { HomeCopy, PlusKey } from "@/lib/home-copy";
import { WaitlistForm } from "@/components/waitlist/waitlist-form";
import { Icon, type IconName } from "./icon";

/** Any "+" on the page (the hero's hint) opens the dock's fan through this. */
export const OPEN_PLUS_EVENT = "hm:open-plus";

const PLUS_ICON: Record<PlusKey, IconName> = {
  sort: "funnel",
  bio: "link",
  gift: "gift",
  call: "phone",
  week: "cal",
  launch: "rocket",
  course: "course",
};

// The fan's geometry and timing, the same numbers as the studio's dock
// (shebossit-cms src/components/mobile/fan-stack.ts on staging).
const TILE = 44;
const BEND = 32;
const STAGGER_MS = 28;
const ITEM_MS = 260;

/**
 * The site's menu is the studio's dock: the sections, the "+" in the middle,
 * and "Join". The "+" opens the same fan the studio's dock opens on a computer
 * (a column of round icons with cream names, leaning toward the top like the
 * macOS Dock "Fan" stack). Picking one opens what it builds.
 */
function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
function reducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function serverReducedMotionSnapshot() { return false; }

export function HomeDock({ t, locale }: { t: HomeCopy; locale: "he" | "en" }) {
  const [fanOpen, setFanOpen] = useState(false);
  // The dock waits below the screen only at the very top of the page, where
  // on a short window it sat on the hero's own Join button. It rises the
  // moment she starts scrolling (or when the hero's "+" opens the fan).
  const [docked, setDocked] = useState(false);
  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [result, setResult] = useState<PlusKey | null>(null);
  // Joining = signing up and waiting for an invite. Every "Join" on the page
  // (an <a data-join href={localizedPath("/waitlist", locale)}>, so without JS it still reaches the form) opens this instead.
  const [signup, setSignup] = useState(false);
  const [layout, setLayout] = useState<{ lift: number; shift: number }[]>([]);
  // Reduced motion: no spring and no stagger, the column is simply there.
  const still = useSyncExternalStore(subscribeReducedMotion, reducedMotionSnapshot, serverReducedMotionSnapshot);
  const plusRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const items = t.plus.items;

  // Where each item sits: straight over the "+" at the bottom, leaning toward
  // the end of the reading direction at the top. On a narrow screen the whole
  // column moves aside just enough for the longest name to fit.
  const place = useCallback(() => {
    const plus = plusRef.current;
    if (!plus) return;
    const n = items.length;
    const step = Math.max(TILE + 4, Math.min(52, Math.floor((window.innerHeight - 112) / n)));
    const rtl = getComputedStyle(plus).direction === "rtl";
    const r = plus.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const base = items.map((_, i) => {
      const k = n > 1 ? i / (n - 1) : 0;
      return Math.round(BEND * k * k);
    });
    const widths = itemRefs.current.map((el) => el?.offsetWidth ?? 0);
    const over = Math.max(
      0,
      ...widths.map((w, i) =>
        rtl ? cx - TILE / 2 - base[i] + w - (window.innerWidth - 12) : 12 - (cx + TILE / 2 + base[i] - w),
      ),
    );
    setLayout(base.map((b, i) => ({ lift: 8 + i * step, shift: b + over })));
  }, [items]);

  const openFan = useCallback(
    (focusFirst: boolean) => {
      place();
      setFanOpen(true);
      if (focusFirst) requestAnimationFrame(() => itemRefs.current[0]?.focus());
    },
    [place],
  );

  const closeAll = useCallback(() => {
    setFanOpen(false);
    setResult(null);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[data-join]");
      if (!a) return;
      e.preventDefault();
      setFanOpen(false);
      setResult(null);
      setSignup(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const onOpen = () => {
      setDocked(true);
      // let the dock rise before the fan comes out of it
      setTimeout(() => openFan(true), 220);
    };
    window.addEventListener(OPEN_PLUS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PLUS_EVENT, onOpen);
  }, [openFan]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (signup) setSignup(false);
      else if (result) setResult(null);
      else if (fanOpen) {
        setFanOpen(false);
        plusRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fanOpen, result, signup]);

  useEffect(() => {
    document.documentElement.style.overflow = result || signup ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [result, signup]);


  return (
    <>
      {fanOpen && <div className="hm-fan-catch" onClick={() => setFanOpen(false)} aria-hidden="true" />}

      <nav className={`hm-dock${docked || fanOpen ? "" : " hm-dock-away"}`} aria-label={t.dock.aria}>
        <a href="#marketing">
          <Icon name="mega" />
          {t.dock.marketing}
        </a>
        <a href="#sales">
          <Icon name="coin" />
          {t.dock.sales}
        </a>
        <span className="hm-plus-box">
          <button
            ref={plusRef}
            type="button"
            className="hm-plus"
            aria-haspopup="menu"
            aria-expanded={fanOpen}
            aria-label={fanOpen ? t.dock.close : t.dock.plus}
            onClick={(e) => (fanOpen ? setFanOpen(false) : openFan(e.detail === 0))}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp" && fanOpen) {
                e.preventDefault();
                itemRefs.current[0]?.focus();
              }
            }}
          >
            <Icon name="plus" />
          </button>
          <span className="hm-fan" role="menu" aria-label={t.dock.plus}>
            {items.map((item, i) => {
              const at = layout[i] ?? { lift: 8 + i * 52, shift: 0 };
              const delay = (fanOpen ? i : items.length - 1 - i) * STAGGER_MS;
              return (
                <button
                  key={item.key}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  type="button"
                  role="menuitem"
                  tabIndex={fanOpen ? 0 : -1}
                  className="hm-fan-item"
                  onClick={() => {
                    setFanOpen(false);
                    setResult(item.key);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowUp" && i < items.length - 1) {
                      e.preventDefault();
                      itemRefs.current[i + 1]?.focus();
                    } else if (e.key === "ArrowDown") {
                      e.preventDefault();
                      (i > 0 ? itemRefs.current[i - 1] : plusRef.current)?.focus();
                    }
                  }}
                  style={{
                    bottom: at.lift,
                    insetInlineEnd: -TILE / 2 - at.shift,
                    opacity: fanOpen ? 1 : 0,
                    pointerEvents: fanOpen ? "auto" : "none",
                    transform: fanOpen || still ? "none" : `translateY(${at.lift}px) scale(0.5)`,
                    transition: still
                      ? "none"
                      : `transform ${ITEM_MS}ms ${
                          fanOpen ? "cubic-bezier(0.34, 1.4, 0.64, 1)" : "cubic-bezier(0.4, 0, 1, 1)"
                        } ${delay}ms, opacity ${ITEM_MS - 60}ms ease ${delay}ms`,
                  }}
                >
                  <span className="hm-fan-tile">
                    <Icon name={PLUS_ICON[item.key]} />
                  </span>
                  <span className="hm-fan-label">{item.title}</span>
                </button>
              );
            })}
          </span>
        </span>
        <a href="#clients">
          <Icon name="users" />
          {t.dock.clients}
        </a>
        <a href="#price">
          <Icon name="tag" />
          {t.dock.price}
        </a>
        <span className="hm-sep" />
        <a className="hm-dock-join" href={localizedPath("/waitlist", locale)} data-join>
          {t.dock.join}
        </a>
      </nav>

      {result && (
        <ResultPopup
          t={t}
          locale={locale}
          k={result}
          onClose={() => {
            setResult(null);
            plusRef.current?.focus();
          }}
          onMore={() => {
            setResult(null);
            openFan(true);
          }}
          onJoin={closeAll}
        />
      )}

      {signup && <SignupPopup t={t} locale={locale} onClose={() => setSignup(false)} />}
    </>
  );
}

/** "+" anywhere else on the page: opens the dock's fan. */
export function PlusHint({ t }: { t: HomeCopy }) {
  return (
    <p className="hm-hint">
      {t.hero.hintA}
      <button type="button" aria-label={t.hero.hintAria} onClick={() => window.dispatchEvent(new Event(OPEN_PLUS_EVENT))}>
        <i>+</i>
      </button>
      {t.hero.hintB}
    </p>
  );
}

function ResultPopup({
  t,
  locale,
  k,
  onClose,
  onMore,
  onJoin,
}: {
  t: HomeCopy;
  locale: "he" | "en";
  k: PlusKey;
  onClose: () => void;
  onMore: () => void;
  onJoin: () => void;
}) {
  const item = t.plus.items.find((i) => i.key === k)!;
  const joinRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => joinRef.current?.focus(), [k]);

  return (
    <div
      className="hm-ov"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="hm-pop" role="dialog" aria-modal="true" aria-labelledby="hm-pop-title">
        <div className="hm-ph">
          <div className="hm-grab" />
          <div className="hm-pbar">
            <span />
            <span className="hm-flow">
              <Icon name={PLUS_ICON[k]} />
              {item.title}
            </span>
            <button type="button" className="hm-x" aria-label={t.dock.close} onClick={onClose}>
              <Icon name="x" />
            </button>
          </div>
          <h3 id="hm-pop-title">{t.plus.resultTitle}</h3>
        </div>
        <div className="hm-pb">
          <div className="hm-res">
            <ResultMock t={t} k={k} />
          </div>
          <div className="hm-gets">
            {item.gets.map((g) => (
              <span key={g}>{g}</span>
            ))}
          </div>
        </div>
        <div className="hm-pf">
          <button type="button" className="hm-link" onClick={onMore}>
            {t.plus.back}
          </button>
          <a ref={joinRef} className="hm-btn" href={localizedPath("/waitlist", locale)} data-join onClick={onJoin}>
            {t.plus.cta}
          </a>
        </div>
      </div>
    </div>
  );
}

/** What each set-up builds, drawn as she'd meet it: a phone and a card. */
function ResultMock({ t, k }: { t: HomeCopy; k: PlusKey }) {
  const m = t.plus.mock;
  const rows = (r: readonly (readonly [string, string])[]) =>
    r.map(([a, b]) => (
      <div className="hm-r" key={a}>
        <span>{a}</span>
        <span>{b}</span>
      </div>
    ));

  switch (k) {
    case "sort":
      return (
        <>
          <Phone>
            <span className="hm-s-sub">
              {m.owner} · {m.ownerSub}
            </span>
            <div className="hm-s-h">{m.sort.question}</div>
            {m.sort.answers.map((a, i) => (
              <div key={a} className={`hm-opt${i === 1 ? " hm-on" : ""}`}>
                <i />
                {a}
              </div>
            ))}
          </Phone>
          <div className="hm-card">
            <b className="hm-t">{m.sort.cardTitle}</b>
            <div className="hm-card-who">
              <span>{m.sort.who}</span>
              {m.sort.name}
            </div>
            {rows(m.sort.rows)}
          </div>
        </>
      );
    case "bio":
      return (
        <Phone center>
          <div className="hm-s-av" />
          <b className="hm-s-name">{m.owner}</b>
          <span className="hm-s-sub">{m.bio.sub}</span>
          {m.bio.links.map(([a, b], i) => (
            <div key={a} className={`hm-s-link${i === 0 ? " hm-main" : ""}`}>
              <span>{a}</span>
              <span>{b}</span>
            </div>
          ))}
        </Phone>
      );
    case "gift":
      return (
        <>
          <Phone>
            <span className="hm-s-sub">{m.gift.sub}</span>
            <div className="hm-s-h">{m.gift.title}</div>
            {m.gift.fields.map((f) => (
              <div key={f} className="hm-s-in">
                {f}
              </div>
            ))}
            <div className="hm-s-btn">{m.gift.button}</div>
          </Phone>
          <div className="hm-card">
            <b className="hm-t">{m.gift.cardTitle}</b>
            {rows(m.gift.rows)}
          </div>
        </>
      );
    case "call":
      return (
        <>
          <Phone>
            <span className="hm-s-sub">{m.owner}</span>
            <div className="hm-s-h">{m.call.title}</div>
            <div className="hm-s-days">
              {m.call.days.map(([d, n], i) => (
                <span key={d} className={i === 1 ? "hm-on" : undefined}>
                  {d}
                  <br />
                  {n}
                </span>
              ))}
            </div>
            <div className="hm-s-slots">
              {m.call.slots.map((s, i) => (
                <span key={s} className={i === 2 ? "hm-on" : undefined}>
                  {s}
                </span>
              ))}
            </div>
            <div className="hm-s-btn">{m.call.button}</div>
          </Phone>
          <div className="hm-card">
            <b className="hm-t">{m.call.cardTitle}</b>
            {rows(m.call.rows)}
          </div>
        </>
      );
    case "week":
      return (
        <>
          <div className="hm-phone">
            <div className="hm-screen hm-flush">
              <div className="hm-slide">
                <small>{t.marketing.slideCount}</small>
                <b>{t.marketing.slide}</b>
              </div>
              <div className="hm-caption">
                <b>{t.marketing.handle}</b> {t.marketing.caption}
              </div>
            </div>
          </div>
          <div className="hm-card">
            <b className="hm-t">{m.week.cardTitle}</b>
            {rows(m.week.rows)}
          </div>
        </>
      );
    case "course":
      // The student's course page as the studio draws it (docs/designs/
      // course-student-view): her colours, continue where you stopped,
      // progress, chapters with pictures and the locked one's date.
      return (
        <>
          <div className="hm-phone">
            <div className="hm-screen hm-flush hm-course">
              <div className="hm-course-top">
                <span className="hm-course-logo" />
                <b>{m.course.name}</b>
              </div>
              <div className="hm-course-body">
                <div className="hm-course-thumb">
                  <span className="hm-course-play" />
                </div>
                <span className="hm-course-k">{m.course.continueLabel}</span>
                <b className="hm-course-h">{m.course.lesson}</b>
                <span className="hm-course-btn">{m.course.continueButton}</span>
                <div className="hm-course-prog">
                  <span>{m.course.progressLabel}</span>
                  <i>
                    <i style={{ width: m.course.progress }} />
                  </i>
                  <b>{m.course.progress}</b>
                </div>
                {m.course.chapters.map(([name, sub, state]) => (
                  <div key={name} className={`hm-course-ch${state === "locked" ? " hm-locked" : ""}`}>
                    <span className="hm-course-chimg" />
                    <div>
                      <b>{name}</b>
                      <span>{sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hm-card">
            <b className="hm-t">{m.course.cardTitle}</b>
            <p className="hm-card-line">{m.course.welcome}</p>
            <div className="hm-s-btn hm-course-mailbtn">{m.course.welcomeButton}</div>
          </div>
        </>
      );
    case "launch":
      return (
        <div className="hm-card hm-wide">
          <b className="hm-t">{m.launch.cardTitle}</b>
          {rows(m.launch.rows)}
        </div>
      );
  }
}

function Phone({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className="hm-phone">
      <div className="hm-screen" style={center ? { textAlign: "center" } : undefined}>
        {children}
      </div>
    </div>
  );
}

/** "Join": sign up, then wait for the invite (the waitlist form, from the Studio). */
function SignupPopup({ t, locale, onClose }: { t: HomeCopy; locale: "he" | "en"; onClose: () => void }) {
  return (
    <div
      className="hm-ov"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="hm-pop" role="dialog" aria-modal="true" aria-labelledby="hm-signup-title">
        <div className="hm-ph">
          <div className="hm-grab" />
          <div className="hm-pbar">
            <span />
            <span />
            <button type="button" className="hm-x" aria-label={t.dock.close} onClick={onClose}>
              <Icon name="x" />
            </button>
          </div>
          <h3 id="hm-signup-title">{t.price.signupTitle}</h3>
          <p className="hm-pop-sub">{t.price.fine}</p>
        </div>
        <div className="hm-pb">
          <WaitlistForm title={t.price.formTitle} locale={locale} />
        </div>
      </div>
    </div>
  );
}
