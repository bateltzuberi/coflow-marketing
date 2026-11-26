import type { Metadata } from "next";

import "./home.css";
import { HomeDock, PlusHint } from "@/components/home/home-dock";
import { inHebrew } from "@/components/home/in-hebrew";
import { ClaudeSection, ContentSection, CrmSection, HomeFooter, MoveSection, PriceSection, ProductsSection, SellingSection, TopBar } from "@/components/home/sections";
import { PlansSection } from "@/components/home/plans-section";
import { TypedLine } from "@/components/home/typed-line";
import { BetaCountdown } from "@/components/home/beta-countdown";
import { betaSignupOpen } from "@/lib/beta-window";
import { JsonLd, softwareApplicationJsonLd, buildMetadata } from "@/lib/seo";
import { getLocale } from "@/lib/locale";
import { getHomeCopy, withWaitlist } from "@/lib/home-copy";

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
  // Every Join scrolls to the price section, where she picks a plan (2026-11-25).
  const joinHref = "#price";

  return (
    <div className="hm" lang={locale}>
      <JsonLd data={softwareApplicationJsonLd(locale)} />
      <HomeDock t={t} locale={locale} joinHref={joinHref} />

      {open && <BetaCountdown t={t.beta} href={`/${locale}#price`} />}
      <TopBar t={t} locale={locale} />

      <main>
        <header className="hm-hero">
          <div className="hm-wrap">
            <h1>
              {t.hero.h1a}
              <br />
              {inHebrew(t.hero.h1b, locale)}{" "}
              <span className="hm-story" aria-hidden="true">
                <span />
              </span>
            </h1>
            <TypedLine lead={t.hero.builtFor} words={t.hero.audiences} />
            <p className="hm-sub">{inHebrew(t.hero.sub, locale)}</p>
            <a className="hm-btn" href={joinHref}>
              {t.hero.cta}
            </a>
            {t.hero.refund && <p className="hm-refund">{t.hero.refund}</p>}
            <PlusHint t={t} />
          </div>

        </header>

        <div className="hm-wrap">
          {/* The order Yuval and Batel set on 2026-11-26: setting up in Coflow,
              the AI personal assistant, then the dock's own order: products,
              marketing, sales, clients. */}
          <MoveSection t={t} locale={locale} />
          <ClaudeSection t={t} locale={locale} />
          <ProductsSection t={t} locale={locale} />
          <ContentSection t={t} locale={locale} />
          <SellingSection t={t} locale={locale} />
          <CrmSection t={t} locale={locale} />
        </div>

        {open ? <PriceSection t={t} locale={locale} /> : <PlansSection locale={locale} title={t.plans.h2} sub={t.plans.sub} />}
      </main>

      <HomeFooter t={t} locale={locale} />
    </div>
  );
}
