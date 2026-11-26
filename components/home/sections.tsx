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

export function TopBar({ t, locale }: { t: HomeCopy; locale: Locale }) {
  return (
    <div className="hm-wrap hm-top">
      <CoflowMark size={36} showWordmark tone="blue" />
      <div className="hm-top-end">
        <LocaleSwitcher locale={locale} className="hm-top-lang" />
        <a className="hm-signin" href={`${SITE.studioAppUrl}/login`}>
          {t.signIn}
        </a>
      </div>
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
      {words.gets.length > 0 && (
        <div className="hm-gets hm-sec-gets">
          {words.gets.map((g) => (
            <span key={g}>
              <bdi>{inHebrew(g, locale)}</bdi>
            </span>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}

/** Selling: what came in (month by month), what brings it in, and the
 *  processor and invoicing it is read from. */
export function SellingSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  const s = t.selling;
  return (
    <section className="hm-sec" id="sales">
      <div className="hm-row">
        <SectionCopy icon="coin" words={s} locale={locale} />
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-tile hm-income" style={{ insetInlineEnd: 0, top: 0, width: 340, zIndex: 1 }}>
            <small>{s.incomeLabel}</small>
            <b className="hm-big">{s.income}</b>
            <span className="hm-chg">{s.incomeFrom}</span>
            <div className="hm-bars">
              {s.months.map(([m, h], i) => (
                <span key={m} className={i === s.months.length - 1 ? "hm-bar-now" : undefined}>
                  <i style={{ height: `${h}%` }} />
                  {m}
                </span>
              ))}
            </div>
            <div className="hm-r hm-r-after">
              <span>{s.open[0]}</span>
              <b>{s.open[1]}</b>
            </div>
          </div>
          <div className="hm-tile" style={{ insetInlineStart: 0, bottom: 0, width: 330, padding: 20, zIndex: 2 }}>
            <small className="hm-strong">{s.byTitle}</small>
            {s.by.map(([name, amount], i) => (
              <div className="hm-share" key={name}>
                <div className="hm-share-top">
                  <span>{name}</span>
                  <b>{amount}</b>
                </div>
                <span className="hm-share-bar">
                  <i style={{ width: s.shares[i], background: SHARE_BG[i] }} />
                </span>
              </div>
            ))}
          </div>
          <div className="hm-tile hm-conns" style={{ insetInlineEnd: "6%", bottom: 36, zIndex: 3 }}>
            <small className="hm-strong">{s.connTitle}</small>
            {s.conns.map((c) => (
              <span key={c} dir="ltr">
                <i />
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SHARE_BG = ["var(--hm-butter-2)", "var(--hm-pink-tint)", "var(--hm-oat-2)"];

/** The assistant: a Claude chat connected to Coflow, the steps it took, and
 *  the draft waiting for her approval; under the words, two real sites
 *  built with Claude inside Coflow. */
export function ClaudeSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  const s = t.claude;
  return (
    <section className="hm-sec" id="claude">
      <div className="hm-row hm-flip">
        <SectionCopy icon="spark" words={s} locale={locale}>
          <div className="hm-sites">
            <small>{inHebrew(s.sitesTitle, locale)}</small>
            <div className="hm-sites-row">
              {s.sites.map(([name, href, shot]) => (
                <a key={href} href={href} target="_blank" rel="noopener" className="hm-site">
                  <span className="hm-site-shot">
                    <span className="hm-site-dots" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={shot} alt="" loading="lazy" />
                  </span>
                  <span className="hm-site-name">
                    {inHebrew(name, locale)}
                    <i aria-hidden="true">↗</i>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </SectionCopy>
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-ai">
            <div className="hm-ai-head">
              <span className="hm-ai-mark">
                <Icon name="spark" />
              </span>
              <b dir="ltr">Claude</b>
              <span className="hm-ai-conn">
                <i />
                {s.connected}
              </span>
            </div>
            <div className="hm-chat-msg hm-chat-me">{s.ask}</div>
            <ul className="hm-ai-steps">
              {s.steps.map(([step]) => (
                <li key={step}>
                  <i>✓</i>
                  {step}
                </li>
              ))}
            </ul>
            <div className="hm-chat-msg">{s.answer}</div>
          </div>
          <div className="hm-tile hm-ai-draft" style={{ insetInlineStart: 0, bottom: 0, width: 300, zIndex: 2 }}>
            <span className="hm-ai-page">
              <i />
              <i />
              <i />
            </span>
            <b>{s.previewTitle}</b>
            <span className="hm-badge hm-today">{s.previewState}</span>
            <span className="hm-ai-btn">{s.previewButton}</span>
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

/** Products: a laptop with her course open, lessons down the side, a file to
 *  download, on her own course site; her club beside it. */
export function ProductsSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  const s = t.products;
  return (
    <section className="hm-sec" id="products">
      <div className="hm-row">
        <SectionCopy icon="tag" words={s} locale={locale} />
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-laptop">
            <div className="hm-laptop-screen">
              <div className="hm-laptop-bar">
                <span className="hm-site-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="hm-laptop-url" dir="ltr">
                  {s.siteUrl}
                </span>
              </div>
              <div className="hm-course">
                <div className="hm-course-main">
                  <span className="hm-course-video">
                    <span className="hm-vid-play">
                      <i />
                    </span>
                  </span>
                  <small>{s.playerCourse}</small>
                  <b>{s.playerLesson}</b>
                  <span className="hm-course-progress">
                    <i />
                  </span>
                  <small>{s.playerProgress}</small>
                  <span className="hm-course-file">
                    <Icon name="tag" />
                    <span>
                      <small>{s.fileLabel}</small>
                      {s.file}
                    </span>
                  </span>
                </div>
                <ol className="hm-course-list">
                  {s.lessons.map(([name, state]) => (
                    <li key={name} className={state ? `hm-l-${state}` : undefined}>
                      <i>{state === "done" ? "✓" : ""}</i>
                      {name}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <span className="hm-laptop-base" />
          </div>
          <div className="hm-tile" style={{ insetInlineStart: 0, bottom: 0, width: 290, padding: 20, zIndex: 2 }}>
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

/** Marketing: this week's content board, and a real email designed and sent
 *  from Coflow, scrolling inside an inbox frame. */
export function ContentSection({ t, locale }: { t: HomeCopy; locale: Locale }) {
  const s = t.content;
  return (
    <section className="hm-sec" id="content">
      <div className="hm-row hm-flip">
        <SectionCopy icon="mega" words={s} locale={locale} />
        <div className="hm-vis" aria-hidden="true">
          <div className="hm-mail">
            <div className="hm-mail-head">
              <span className="hm-who" style={{ background: "var(--hm-butter)" }}>
                S
              </span>
              <span>
                <b dir="ltr">{s.mailFrom}</b>
                <small>{s.mailSubject}</small>
              </span>
            </div>
            <div className="hm-mail-body">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/email-design.jpg" alt={s.mailAlt} loading="lazy" />
            </div>
          </div>
          <div className="hm-tile" style={{ insetInlineStart: 0, bottom: 24, width: 320, padding: 20, zIndex: 2 }}>
            <small className="hm-strong">{s.weekTitle}</small>
            {s.week.map(([day, idea, platform]) => (
              <div className="hm-r" key={day}>
                <span>
                  <b>{day}</b> · {idea}
                </span>
                <span className="hm-badge">{platform}</span>
              </div>
            ))}
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
