import type { Metadata } from "next";

import "./home.css";
import { HomeDock, PlusHint } from "@/components/home/home-dock";
import { Icon } from "@/components/home/icon";
import { ContentSection, CustomersSection, HomeFooter, PriceSection, ProductsSection, SalesSection, TopBar } from "@/components/home/sections";
import { TypedLine } from "@/components/home/typed-line";
import { BetaCountdown } from "@/components/home/beta-countdown";
import { betaSignupOpen } from "@/lib/beta-window";
import { JsonLd, softwareApplicationJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getHomeCopy, withWaitlist } from "@/lib/home-copy";
import { waitlistHref } from "@/lib/site";

// The home page.
//
// Built from the new studio (shebossit-cms `staging`): the page is navigated by
// the studio's own dock, its "+" opens the studio's fan of six set-ups, and
// every picture on it is a real Coflow screen drawn as a customer would meet
// it. Colours are the studio's yellow theme (app/home.css).
//
// Every "Join" goes straight to the Studio sign-up page: sign-up is open, €24 a month.

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
  // From the beta's close (Thursday 2026-10-22, 20:00) the page sells nothing:
  // every Join goes to the waitlist and the price section is gone.
  const open = betaSignupOpen();
  const t = open ? getHomeCopy(locale) : withWaitlist(getHomeCopy(locale));
  const joinHref = open ? "#price" : waitlistHref(locale);

  return (
    <div className="hm" lang={locale}>
      <JsonLd data={softwareApplicationJsonLd(locale)} />
      <HomeDock t={t} locale={locale} joinHref={joinHref} showPrice={open} />

      {open && <BetaCountdown t={t.beta} href={`/${locale}#price`} />}
      <TopBar t={t} />

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
            <a className="hm-btn" href={joinHref}>
              {t.hero.cta}
            </a>
            {t.hero.refund && <p className="hm-refund">{t.hero.refund}</p>}
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
          {/* The Studio's own menu, in its order: products, marketing, sales, clients. */}
          <ProductsSection t={t} />
          <ContentSection t={t} />
          <SalesSection t={t} />
          <CustomersSection t={t} />
        </div>

        {open && <PriceSection t={t} locale={locale} />}
      </main>

      <HomeFooter t={t} locale={locale} />
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
