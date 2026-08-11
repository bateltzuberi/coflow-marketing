import type { Dictionary } from "@/lib/dictionary";

/** The core positioning line, given room of its own. */
export function CentralMessage({ text }: { text: string }) {
  return (
    <section className="section">
      <div className="container-page">
        <p className="mx-auto max-w-3xl text-center font-display text-[24px] sm:text-[32px] md:text-[38px] leading-[1.25]">
          {text}
        </p>
      </div>
    </section>
  );
}

/** What the diagnosis shows — six questions it answers. */
export function WhatItShows({ t }: { t: Dictionary["whatItShows"] }) {
  return (
    <section className="section relative overflow-hidden">
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 -rotate-12 w-72 h-72"
        >
      <circle cx="50" cy="50" r="50" className="fill-lime/10" />
      <rect x="30" y="30" width="40" height="40" rx="12" className="fill-none stroke-lime/40" strokeWidth="2" />
      <circle cx="50" cy="50" r="10" className="fill-none stroke-lime/40" strokeWidth="2" />
      <circle cx="65" cy="35" r="2.5" className="fill-lime/40" />
      </svg>
      <div className="container-page">
        <div className="max-w-2xl mx-auto">
          <p className="text-[16px] md:text-[17px] text-ink-700">{t.intro}</p>
          <ul className="mt-6 space-y-2.5">
            {t.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-[14px] bg-surface border border-line px-5 py-3.5 text-[15px] md:text-[16px] text-ink-900"
              >
                <span className="dot dot-lavender mt-2 shrink-0" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** The blunt audit — five concrete outputs. */
export function BluntAudit({ t }: { t: Dictionary["bluntAudit"] }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl mx-auto rounded-[28px] bg-lavender-tint border border-lavender-deep/20 p-8 md:p-12">
          <h2 className="font-display-h2 text-[24px] md:text-[34px] text-lavender-ink">{t.lead}</h2>
          <p className="mt-4 text-[16px] md:text-[17px] text-lavender-ink/85">{t.intro}</p>
          <ul className="mt-6 space-y-2.5">
            {t.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-[15px] md:text-[16px] text-lavender-ink"
              >
                <span className="dot dot-lime mt-2 shrink-0" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Why it matters — clarity, not content. */
export function WhyItMatters({ t }: { t: Dictionary["whyItMatters"] }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display-h2 text-[26px] md:text-[40px]">{t.lead}</h2>
          <p className="mt-8 text-[18px] md:text-[20px] font-semibold text-ink-900">
            {t.p1a}
            <br />
            {t.p1b}
          </p>
          <p className="mt-6 text-[16px] md:text-[17px] leading-[1.6] text-ink-700">{t.p2}</p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {t.questions.map((q) => (
              <li
                key={q}
                className="rounded-full bg-surface border border-line px-4 py-2 text-[14px] md:text-[15px] font-medium text-ink-900"
              >
                {q}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[16px] md:text-[17px] font-semibold text-ink-900">{t.close}</p>
        </div>
      </div>
    </section>
  );
}

/** Mid-page CTA. Scrolls back to the diagnosis field at the top. */
export function MidCta({ t, href = "#start" }: { t: Dictionary["midCta"]; href?: string }) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="card-xl bg-bridge-soft border border-line rounded-[32px] p-10 md:p-14 max-w-3xl mx-auto text-center">
          <h2 className="font-display-h2 text-[26px] md:text-[38px]">{t.line}</h2>
          <div className="mt-8">
            <a href={href} className="btn btn-lime">
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
