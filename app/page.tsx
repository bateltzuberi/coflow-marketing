import { localizedPath } from "@/lib/locale-path";
import type { Metadata } from "next";

import "./home.css";
import { CoflowMark } from "@/components/coflow-mark";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { HomeDock, PlusHint } from "@/components/home/home-dock";
import { HaveCode, HomeJoinForm } from "@/components/home/home-join-form";
import { Icon } from "@/components/home/icon";
import { TypedLine } from "@/components/home/typed-line";
import { JsonLd, organizationJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getDict } from "@/lib/dictionary";
import { getHomeCopy } from "@/lib/home-copy";
import { SITE } from "@/lib/site";

// The home page.
//
// Built from the new studio (shebossit-cms `staging`): the page is navigated by
// the studio's own dock, its "+" opens the studio's fan of six set-ups, and
// every picture on it is a real Coflow screen drawn as a customer would meet
// it. Colours are the studio's yellow theme (app/home.css).
//
// Every "Join" opens the sign-up popup (the Studio waitlist form): sign-up is
// closed, people sign up and wait for an invite. An invite code still works
// from the "have a code?" link in the price section.

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getHomeCopy(locale);
  const base = buildMetadata({
    title: t.meta.title,
    description: t.meta.description,
    path: "/",
    locale,
    // The share card in the page's own language. Crawlers (WhatsApp, Google)
    // arrive with no language and get the Hebrew one, the site's default.
    ogImage: `/og/home-${locale}.png`,
  });
  return {
    ...base,
    // The copy already carries the brand, so skip the layout's "· Coflow".
    title: { absolute: t.meta.title },
    openGraph: { ...base.openGraph, title: t.meta.ogTitle },
    twitter: { ...base.twitter, title: t.meta.ogTitle },
  };
}

export default async function Home() {
  const locale = await getLocale();
  const t = getHomeCopy(locale);
  const join = getDict(locale).join;

  return (
    <div className="hm" lang={locale}>
      <JsonLd data={organizationJsonLd()} />
      <HomeDock t={t} locale={locale} />

      <div className="hm-wrap hm-top">
        <CoflowMark size={36} showWordmark tone="blue" />
        <a className="hm-signin" href={`${SITE.studioAppUrl}/login`}>
          {t.signIn}
        </a>
      </div>

      <main>
        <header className="hm-hero">
          <div className="hm-wrap">
            <h1>
              {t.hero.h1a}
              <br />
              {t.hero.h1b}{" "}
              <span className="hm-story" aria-hidden="true">
                <span />
              </span>
            </h1>
            <TypedLine lead={t.hero.builtFor} words={t.hero.audiences} />
            <p className="hm-sub">{t.hero.sub}</p>
            <a className="hm-btn" href={localizedPath("/waitlist", locale)} data-join>
              {t.hero.cta}
            </a>
            <PlusHint t={t} />
          </div>

          {/* Her Instagram in the middle; her business arrives around it. */}
          <div className="hm-stage" aria-hidden="true">
            <div className="hm-phone">
              <div className="hm-screen">
                <div className="hm-ig">
                  <div className="hm-ig-top">
                    <span className="hm-ig-av">
                      <i />
                    </span>
                    <div className="hm-ig-nums">
                      {t.profile.stats.map(([n, l]) => (
                        <span key={l}>
                          <b>{n}</b>
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="hm-ig-name">{t.profile.name}</p>
                  <p className="hm-ig-bio">
                    {t.profile.bio}
                    <br />
                    <span>{t.profile.link}</span>
                  </p>
                  <div className="hm-hl">
                    {(["funnel", "gift", "phone", "rocket"] as const).map((icon, i) => (
                      <span key={icon}>
                        <i>
                          <Icon name={icon} />
                        </i>
                        {t.profile.highlights[i]}
                      </span>
                    ))}
                  </div>
                  <div className="hm-grid">
                    <div style={{ background: "var(--hm-butter)" }}>{t.profile.grid[0]}</div>
                    <div style={{ background: "var(--hm-oat-2)" }}>{t.profile.grid[1]}</div>
                    <div style={{ background: "var(--hm-pink-tint)" }}>{t.profile.grid[2]}</div>
                    <div style={{ background: "var(--hm-oat)" }} />
                    <div style={{ background: "var(--hm-butter-2)" }} />
                    <div style={{ background: "var(--hm-oat-2)" }} />
                  </div>
                </div>
              </div>
            </div>
            {t.notes.map((n, i) => (
              <div key={n.title} className="hm-note" style={NOTE_AT[i]}>
                <span className="hm-who" style={{ background: NOTE_BG[i] }}>
                  {n.who}
                </span>
                <div>
                  <b>{n.title}</b>
                  <small>{n.sub}</small>
                </div>
              </div>
            ))}
          </div>
        </header>

        <div className="hm-wrap">
          <section className="hm-sec" id="sales">
            <div className="hm-row">
              <div className="hm-copy">
                <Opener icon="coin" label={t.sales.label} />
                <h2>{t.sales.h2}</h2>
                <p className="hm-lead">{t.sales.lead}</p>
              </div>
              <div className="hm-vis" aria-hidden="true">
                <div className="hm-phone hm-mini" style={{ insetInlineEnd: 0, top: 10, zIndex: 1 }}>
                  <div className="hm-screen hm-q">
                    <div className="hm-bar">
                      <i />
                      <i className="hm-now" />
                      <i />
                      <i />
                    </div>
                    <small>{t.sales.formOwner}</small>
                    <h4>{t.sales.question}</h4>
                    {t.sales.answers.map((a, i) => (
                      <div key={a} className={`hm-opt${i === 1 ? " hm-on" : ""}`}>
                        <i />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hm-col" style={{ insetInlineStart: 0, bottom: 0, zIndex: 2 }}>
                  <span className="hm-stg">
                    <i />
                    {t.sales.stage}
                  </span>
                  {t.sales.deals.map((d, i) => (
                    <div key={d.name} className="hm-deal">
                      <div className="hm-deal-who">
                        <i style={{ background: i === 0 ? "var(--hm-butter)" : "var(--hm-pink-tint)" }}>{d.who}</i>
                        {d.name}
                        {i === 0 && <span className="hm-dot" />}
                      </div>
                      <span className="hm-chip">{d.product}</span>
                      {d.note && <div className="hm-snip">{d.note}</div>}
                      <div className="hm-foot">
                        <span>{d.amount}</span>
                        <span>{d.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="hm-sec" id="marketing">
            <div className="hm-row hm-flip">
              <div className="hm-copy">
                <Opener icon="mega" label={t.marketing.label} />
                <h2>{t.marketing.h2}</h2>
                <p className="hm-lead">{t.marketing.lead}</p>
              </div>
              <div className="hm-vis" aria-hidden="true">
                <div className="hm-tile" style={{ insetInlineStart: 0, top: 20, width: 330, padding: 20 }}>
                  <small className="hm-strong">{t.marketing.weekTitle}</small>
                  {t.marketing.week.map(([day, idea, platform]) => (
                    <div className="hm-r" key={day}>
                      <span>
                        <b>{day}</b> · {idea}
                      </span>
                      <span className="hm-badge">{platform}</span>
                    </div>
                  ))}
                </div>
                <div className="hm-phone hm-mini" style={{ insetInlineEnd: "4%", bottom: 0, zIndex: 1 }}>
                  <div className="hm-screen">
                    <div className="hm-slide">
                      <small>{t.marketing.slideCount}</small>
                      <b>{t.marketing.slide}</b>
                      <em>@{t.marketing.handle}</em>
                    </div>
                    <div className="hm-caption">
                      <b>{t.marketing.handle}</b> {t.marketing.caption}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="hm-sec" id="clients">
            <div className="hm-row">
              <div className="hm-copy">
                <Opener icon="users" label={t.clients.label} />
                <h2>{t.clients.h2}</h2>
                <p className="hm-lead">{t.clients.lead}</p>
              </div>
              <div className="hm-vis" aria-hidden="true">
                <div className="hm-tile" style={{ insetInlineEnd: 0, top: 20, width: 320 }}>
                  <small>{t.clients.incomeLabel}</small>
                  <b className="hm-big">{t.clients.income}</b>
                  <span className="hm-chg">{t.clients.change}</span>
                </div>
                <div className="hm-tile" style={{ insetInlineStart: 0, bottom: 20, width: 340, padding: 20 }}>
                  <small className="hm-strong">{t.clients.tasksTitle}</small>
                  {t.clients.tasks.map(([task, when]) => (
                    <div className="hm-r" key={task}>
                      <span>{task}</span>
                      <span className={`hm-badge hm-${when}`}>{when === "late" ? t.clients.late : t.clients.today}</span>
                    </div>
                  ))}
                  <div className="hm-cf">
                    <Icon name="spark" />
                    {t.clients.noticed}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="hm-price" id="price">
          <div className="hm-wrap">
            <div className="hm-row">
              <div className="hm-copy">
                <h2>{t.price.h2}</h2>
                <ul className="hm-facts">
                  {(["grid", "lock", "door"] as const).map((icon, i) => (
                    <li key={icon}>
                      <Icon name={icon} />
                      {t.price.facts[i]}
                    </li>
                  ))}
                </ul>
                {/* Joining = signing up and waiting for an invite. The button
                    opens the sign-up popup (the Studio waitlist form); the
                    code field is for whoever was given one. */}
                <p className="hm-fine">{t.price.fine}</p>
                <a className="hm-btn hm-price-btn" href={localizedPath("/waitlist", locale)} data-join>
                  {t.hero.cta}
                </a>
                <HaveCode label={t.price.haveCode}>
                  <HomeJoinForm t={join} locale={locale} />
                </HaveCode>
              </div>
              <div className="hm-pt">
                <small>{t.price.tileLabel}</small>
                <b className="hm-amount">{t.price.amount}</b>
                <span className="hm-chg">{t.price.chip}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="hm-footer">
        <div className="hm-wrap">
          <CoflowMark size={28} showWordmark tone="blue" />
          <ul>
            {t.footer.links.map((l) => (
              <li key={l.href}>
                <a href={localizedPath(l.href, locale)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="hm-end">
            <LocaleSwitcher locale={locale} className="hm-locale" />
            <span>{t.footer.company}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Where each notification sits around the phone (a computer; on a phone they
// stack over it, see home.css), and the soft colour behind each initial.
const NOTE_AT: React.CSSProperties[] = [
  { right: 0, top: 40 },
  { left: 0, top: 150 },
  { right: 20, top: 330 },
  { left: 30, top: 430 },
];
const NOTE_BG = ["var(--hm-butter)", "var(--hm-pink-tint)", "var(--hm-oat-2)", "var(--hm-sage-bg)"];

function Opener({ icon, label }: { icon: "coin" | "mega" | "users"; label: string }) {
  return (
    <div className="hm-opener">
      <i>
        <span>
          <Icon name={icon} />
        </span>
      </i>
      <b>{label}</b>
    </div>
  );
}
