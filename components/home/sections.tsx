import { localizedPath } from "@/lib/locale-path";

import { CoflowMark } from "@/components/coflow-mark";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Icon, type IconName } from "@/components/home/icon";
import type { HomeCopy } from "@/lib/home-copy";
import type { LandingCopy, LandingFlow } from "@/lib/landing-source-copy";
import { SITE, signupUrlFor } from "@/lib/site";

// The home page's sections, lifted out of app/page.tsx so a page that shares
// them (the landing pages in app/[locale]/for/) renders the same markup, not a
// copy of it. Every section is built from hm- classes in app/home.css.

type Locale = "he" | "en";

export function TopBar({ t }: { t: HomeCopy }) {
  return (
    <div className="hm-wrap hm-top">
      <CoflowMark size={36} showWordmark tone="blue" />
      <a className="hm-signin" href={`${SITE.studioAppUrl}/login`}>
        {t.signIn}
      </a>
    </div>
  );
}

export function Opener({ icon, label }: { icon: IconName; label: string }) {
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

/** A customer's link-in-bio page, as drawn in the "+" menu's bio set-up. */
export function BioPhone({ t, style }: { t: HomeCopy; style?: React.CSSProperties }) {
  const m = t.plus.mock;
  return (
    <div className="hm-phone hm-mini" style={style}>
      <div className="hm-screen">
        <div className="hm-bio">
          <div className="hm-s-av" />
          <b className="hm-s-name">{m.owner}</b>
          <span className="hm-s-sub">{m.bio.sub}</span>
          {m.bio.links.map(([a, b], i) => (
            <div key={a} className={`hm-s-link${i === 0 ? " hm-main" : ""}`}>
              <span>{a}</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** A page's own flow: cards for what happened (who arrived, what was made), with her own words around them. The hero above already drew the page itself. */
export function FlowSection({ flow, icon }: { flow: LandingFlow; icon: IconName }) {
  return (
    <section className="hm-sec">
      <div className="hm-row">
        <div className="hm-copy">
          <Opener icon={icon} label={flow.label} />
          <h2>{flow.h2}</h2>
          <p className="hm-lead">{flow.lead}</p>
        </div>
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-col" style={{ insetInlineStart: 0, bottom: 0, zIndex: 2 }}>
            <span className="hm-stg">
              <i />
              {flow.via}
            </span>
            {flow.cards.map((c, i) => (
              <div key={c.title} className="hm-deal">
                <div className="hm-deal-who">
                  <i style={{ background: i % 2 === 0 ? "var(--hm-butter)" : "var(--hm-pink-tint)" }}>{c.who}</i>
                  {c.title}
                </div>
                <div className="hm-snip">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** A list of rows on a phone (a podcast's episodes). */
export function ListPhone({ phone, style }: { phone: NonNullable<LandingCopy["phone"]>; style?: React.CSSProperties }) {
  return (
    <div className="hm-phone hm-mini" style={style}>
      <div className="hm-screen">
        <div className="hm-bio">
          <div className="hm-s-av" />
          <b className="hm-s-name">{phone.owner}</b>
          <span className="hm-s-sub">{phone.sub}</span>
          {phone.rows.map(([a, b], i) => (
            <div key={a} className={`hm-s-link${i === 0 ? " hm-main" : ""}`}>
              <span>{a}</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** The questionnaire phone, as drawn in the sales section and in a landing hero. */
export function QuestionnairePhone({ t, style }: { t: HomeCopy; style?: React.CSSProperties }) {
  return (
    <div className="hm-phone hm-mini" style={style}>
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
  );
}

/** `showForm={false}` leaves the phone out, for a page that already drew it above. */
export function SalesSection({ t, showForm = true }: { t: HomeCopy; showForm?: boolean }) {
  return (
    <section className="hm-sec" id="sales">
      <div className="hm-row">
        <div className="hm-copy">
          <Opener icon="coin" label={t.sales.label} />
          <h2>{t.sales.h2}</h2>
          <p className="hm-lead">{t.sales.lead}</p>
        </div>
        <div className="hm-vis" aria-hidden="true">
          {showForm && <QuestionnairePhone t={t} style={{ insetInlineEnd: 0, top: 10, zIndex: 1 }} />}
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
  );
}

export function MarketingSection({ t }: { t: HomeCopy }) {
  return (
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
  );
}

export function ClientsSection({ t }: { t: HomeCopy }) {
  return (
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
  );
}

export function PriceSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  return (
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
            <p className="hm-fine">{t.price.fine}</p>
            <a className="hm-btn hm-price-btn" href={signupUrlFor(locale, "")}>
              {t.hero.cta}
            </a>
          </div>
          <div className="hm-pt">
            <small>{t.price.tileLabel}</small>
            <b className="hm-amount">{t.price.amount}</b>
            <span className="hm-chg">{t.price.chip}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFooter({ t, locale }: { t: HomeCopy; locale: Locale }) {
  return (
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
  );
}
