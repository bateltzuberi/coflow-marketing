import { localizedPath } from "@/lib/locale-path";

import { CoflowMark } from "@/components/coflow-mark";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Icon, type IconName } from "@/components/home/icon";
import type { HomeCopy } from "@/lib/home-copy";
import type { LandingCopy, LandingFlow } from "@/lib/landing-source-copy";
import { SITE, signupUrlFor, waitlistHref } from "@/lib/site";
import { betaSignupOpen } from "@/lib/beta-window";
import { PlanCard } from "@/components/home/plan-card";
import { inHebrew } from "@/components/home/in-hebrew";
import { VideoPeek } from "@/components/home/video-peek";

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

export function Opener({ icon, label }: { icon: IconName; label: React.ReactNode }) {
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
            <div key={a} className={`hm-s-link${i === (phone.highlight ?? 0) ? " hm-main" : ""}`}>
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
/** The features a section is made of, as small pills under its lead line. */
function Gets({ items }: { items: readonly string[] }) {
  return (
    <div className="hm-gets hm-sec-gets">
      {items.map((g) => (
        <span key={g}>{g}</span>
      ))}
    </div>
  );
}

/** The words of a home section: opener, title, lead line and its features. */
function SectionCopy({ icon, words, locale, children }: { icon: IconName; words: { label: string; h2: string; lead: string; gets: readonly string[] }; locale: Locale; children?: React.ReactNode }) {
  return (
    <div className="hm-copy">
      <Opener icon={icon} label={inHebrew(words.label, locale)} />
      <h2>{words.h2}</h2>
      <p className="hm-lead">{inHebrew(words.lead, locale)}</p>
      <div className="hm-gets hm-sec-gets">
        {words.gets.map((g) => (
          <span key={g}>
            <bdi>{inHebrew(g, locale)}</bdi>
          </span>
        ))}
      </div>
      {children}
    </div>
  );
}

/** Selling: what came in, what brings it in, and what is still open. */
export function SellingSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  const s = t.selling;
  return (
    <section className="hm-sec" id="sales">
      <div className="hm-row">
        <SectionCopy icon="coin" words={s} locale={locale} />
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-tile" style={{ insetInlineEnd: 0, top: 0, width: 320, zIndex: 1 }}>
            <small>{s.incomeLabel}</small>
            <b className="hm-big">{s.income}</b>
            <span className="hm-chg">{s.incomeFrom}</span>
            <div className="hm-r hm-r-after">
              <span>{s.open[0]}</span>
              <b>{s.open[1]}</b>
            </div>
          </div>
          <div className="hm-tile" style={{ insetInlineStart: 0, bottom: 20, width: 340, padding: 20, zIndex: 2 }}>
            <small className="hm-strong">{s.byTitle}</small>
            {s.by.map(([name, amount]) => (
              <div className="hm-r" key={name}>
                <span>{name}</span>
                <b>{amount}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/** Claude: what she asked for, what it answered, and the drafts that wait for her. */
export function ClaudeSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  const s = t.claude;
  return (
    <section className="hm-sec" id="claude">
      <div className="hm-row hm-flip">
        <SectionCopy icon="spark" words={s} locale={locale}>
          <div className="hm-sites">
            <small>{inHebrew(s.sitesTitle, locale)}</small>
            {s.sites.map(([name, href]) => (
              <a key={href} href={href} target="_blank" rel="noopener">
                <span>{inHebrew(name, locale)}</span>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </div>
        </SectionCopy>
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-tile hm-chat" style={{ insetInlineEnd: 0, top: 20, width: 380, padding: 20, zIndex: 1 }}>
            <div className="hm-chat-msg hm-chat-me">
              <b>{s.me}</b>
              {s.ask}
            </div>
            <div className="hm-chat-msg">
              <b>{s.it}</b>
              {s.answer}
            </div>
          </div>
          <div className="hm-tile" style={{ insetInlineStart: 0, bottom: 40, width: 340, padding: 20, zIndex: 2 }}>
            <small className="hm-strong">{s.draftTitle}</small>
            {s.drafts.map(([name, state]) => (
              <div className="hm-r" key={name}>
                <span>{name}</span>
                <span className="hm-badge hm-today">{state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/** Moving in: her lists from Rav Messer, and a course brought over with Claude. */
export function MoveSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  const s = t.move;
  return (
    <section className="hm-sec" id="move">
      <div className="hm-row">
        <SectionCopy icon="door" words={s} locale={locale}>
          <VideoPeek videoId={MOVE_VIDEO_ID} title={s.video} sub={s.videoSub} length={s.videoLength} closeLabel={s.videoClose} />
        </SectionCopy>
        <div className="hm-vis" aria-hidden="true">
          {/* Where her business is today, the one line she writes, and what came over. */}
          <div className="hm-move">
            <span className="hm-move-title">{s.fromTitle}</span>
            <div className="hm-move-from">
              {s.from.map((f) => (
                <span key={f}>{inHebrew(f, locale)}</span>
              ))}
            </div>
            <span className="hm-move-arrow" />
            <div className="hm-move-card">
              <span className="hm-move-pill" dir="ltr">
                Claude · ChatGPT
              </span>
              <p className="hm-move-ask">{s.ask}</p>
              <div className="hm-move-reply">
                <p>{s.reply}</p>
                <ul>
                  {s.done.map(([what, how]) => (
                    <li key={what}>
                      <i>✓</i>
                      <span>{what}</span>
                      <b>{how}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Batel moving her courses into Coflow with Claude, on Coflow's YouTube channel.
const MOVE_VIDEO_ID = "qpT2kKTBUuM";

/** Leads and clients: the deals board, and the clients it turned into. */
export function CrmSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  const s = t.crm;
  return (
    <section className="hm-sec" id="clients">
      <div className="hm-row hm-flip">
        <SectionCopy icon="users" words={s} locale={locale} />
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-col" style={{ insetInlineEnd: 0, top: 0, zIndex: 2 }}>
            <span className="hm-stg">
              <i />
              {t.sales.stage}
            </span>
            {t.sales.deals.map((d, i) => (
              <div key={d.name} className="hm-deal">
                <div className="hm-deal-who">
                  <i style={{ background: i === 0 ? "var(--hm-butter)" : "var(--hm-pink-tint)" }}>{d.who}</i>
                  {d.name}
                </div>
                <span className="hm-chip">{d.product}</span>
                <div className="hm-foot">
                  <span>{d.amount}</span>
                  <span>{d.source}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="hm-tile" style={{ insetInlineStart: 0, bottom: 20, width: 320, padding: 20, zIndex: 1 }}>
            <small className="hm-strong">{s.activeTitle}</small>
            {s.active.map(([who, product]) => (
              <div className="hm-r" key={who}>
                <span>
                  <b>{who}</b>
                </span>
                <span className="hm-badge">{product}</span>
              </div>
            ))}
            <div className="hm-r">
              <span>
                <b>{s.signed}</b>
                <br />
                {inHebrew(s.signedSub, locale)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Products: every digital product in one system: her course site with its
 *  courses, and her membership club with its next live session. */
export function ProductsSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  const s = t.products;
  return (
    <section className="hm-sec" id="products">
      <div className="hm-row">
        <SectionCopy icon="tag" words={s} locale={locale} />
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-tile" style={{ insetInlineEnd: 0, top: 0, width: 360, padding: 20, zIndex: 1 }}>
            <small className="hm-strong">{s.siteTitle}</small>
            <span className="hm-site-url" dir="ltr">
              {s.siteUrl}
            </span>
            {s.courses.map(([name, size]) => (
              <div className="hm-r" key={name}>
                <span>
                  <b>{name}</b>
                </span>
                <span className="hm-badge">{size}</span>
              </div>
            ))}
          </div>
          <div className="hm-tile" style={{ insetInlineStart: 0, bottom: 20, width: 320, padding: 20, zIndex: 2 }}>
            <small className="hm-strong">{s.clubTitle}</small>
            <span className="hm-chg">{s.clubMembers}</span>
            <div className="hm-r hm-r-after">
              <span>
                {s.clubEventLabel}
                <br />
                <b>{s.clubEvent}</b>
              </span>
              <span className="hm-badge hm-today">{s.clubWhen}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Marketing: her content, written off the brand profile — this week's board,
 *  and the carousel it wrote, as she would see it on her phone. */
export function ContentSection({ t }: { t: HomeCopy }) {
  return (
    <section className="hm-sec" id="content">
      <div className="hm-row hm-flip">
        <div className="hm-copy">
          <Opener icon="mega" label={t.content.label} />
          <h2>{t.content.h2}</h2>
          <p className="hm-lead">{t.content.lead}</p>
          <Gets items={t.content.gets} />
        </div>
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-tile" style={{ insetInlineStart: 0, top: 20, width: 330, padding: 20, zIndex: 2 }}>
            <small className="hm-strong">{t.content.weekTitle}</small>
            {t.content.week.map(([day, idea, platform]) => (
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

/** Bringing in clients: her link in bio, and who came in through it this week. */
export function MarketingSection({ t }: { t: HomeCopy }) {
  return (
    <section className="hm-sec" id="marketing">
      <div className="hm-row">
        <div className="hm-copy">
          <Opener icon="mega" label={t.marketing.label} />
          <h2>{t.marketing.h2}</h2>
          <p className="hm-lead">{t.marketing.lead}</p>
          <Gets items={t.marketing.gets} />
        </div>
        <div className="hm-vis" aria-hidden="true">
          <BioPhone t={t} style={{ insetInlineEnd: "6%", top: 0, zIndex: 1 }} />
          <div className="hm-tile" style={{ insetInlineStart: 0, bottom: 20, width: 340, padding: 20, zIndex: 2 }}>
            <small className="hm-strong">{t.marketing.inTitle}</small>
            {t.marketing.arrivals.map(([who, via]) => (
              <div className="hm-r" key={who}>
                <span>{who}</span>
                <span className="hm-badge">{via}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Selling: the deals board, and the email sequence that follows a lead up. */
export function SalesSection({ t }: { t: HomeCopy }) {
  return (
    <section className="hm-sec" id="sales">
      <div className="hm-row">
        <div className="hm-copy">
          <Opener icon="coin" label={t.sales.label} />
          <h2>{t.sales.h2}</h2>
          <p className="hm-lead">{t.sales.lead}</p>
          <Gets items={t.sales.gets} />
        </div>
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-col" style={{ insetInlineEnd: 0, top: 0, zIndex: 2 }}>
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
          <div className="hm-tile" style={{ insetInlineStart: 0, bottom: 20, width: 340, padding: 20, zIndex: 1 }}>
            <small className="hm-strong">{t.marketing.inTitle}</small>
            {t.marketing.arrivals.map(([who, via]) => (
              <div className="hm-r" key={who}>
                <span>{who}</span>
                <span className="hm-badge">{via}</span>
              </div>
            ))}
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
          <Gets items={t.clients.gets} />
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

/** One plan, drawn as a plan card like every pricing page: name, price,
 *  what's included, the button, then the terms. Only this button goes to payment;
 *  every other Join on the page scrolls here. */
/** One plan card with a monthly / yearly switch, like every pricing page.
 *  Only its button goes to payment; every other Join on the page scrolls here. */
export function PriceSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  const pay = signupUrlFor(locale, "");
  // Once the beta has closed (Thursday 2026-10-22, 20:00) the card's button
  // goes to the waitlist; the Studio's /join refuses new checkouts anyway.
  const open = betaSignupOpen();
  const options = t.price.plans.map((p) =>
    open
      ? { ...p, href: p.key === "yearly" ? `${pay}&plan=yearly` : pay }
      : { ...p, href: waitlistHref(locale), cta: t.beta.waitlistCta },
  );
  return (
    <section className="hm-price" id="price">
      <div className="hm-wrap">
        <h2 className="hm-plan-h2">{t.price.h2}</h2>
        <p className="hm-plan-sub">{t.price.sub}</p>
        <PlanCard
          name={t.price.planName}
          toggleLabel={t.price.toggleLabel}
          options={options}
          includesTitle={t.price.includesTitle}
          includes={t.price.includes}
          fine={open ? t.price.fine : t.beta.waitlistFine}
        />
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
