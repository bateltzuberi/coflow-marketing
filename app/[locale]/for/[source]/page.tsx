import type { Metadata } from "next";
import { notFound } from "next/navigation";

import "@/app/home.css";
import {
  BioPhone,
  ClientsSection,
  FlowSection,
  ListPhone,
  HomeFooter,
  MarketingSection,
  PriceSection,
  QuestionnairePhone,
  SalesSection,
  TopBar,
} from "@/components/home/sections";
import type { IconName } from "@/components/home/icon";
import { TypedLine } from "@/components/home/typed-line";
import { getHomeCopy } from "@/lib/home-copy";
import { getLandingCopy, isLandingSource, type LandingSource } from "@/lib/landing-source-copy";
import { getLocale } from "@/lib/locale";
import { buildMetadata } from "@/lib/seo";
import { signupUrlFor } from "@/lib/site";

// The page a "made with Coflow" badge leads to: coflow.social/{he,en}/for/<source>.
//
// Someone who taps the badge on a customer's questionnaire has just used
// Coflow without knowing it, so the page opens on what she just saw (her
// answers reaching a CRM), then shows the rest of the system, then says what
// Coflow is and what it costs. Everything below the hero is the home page's
// own sections and copy, so a claim fixed on the home page is fixed here.
//
// Not indexed: it exists for people who arrive from a badge, and must not
// compete with the home page in search.

type Props = { params: Promise<{ source: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { source } = await params;
  if (!isLandingSource(source)) notFound();
  const locale = await getLocale();
  const page = getLandingCopy(source, locale);
  return buildMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: `/for/${source}`,
    locale,
    ogImage: `/og/home-${locale}.png`,
    noindex: true,
  });
}

export default async function LandingFromBadge({ params }: Props) {
  const { source } = await params;
  if (!isLandingSource(source)) notFound();
  const locale = await getLocale();
  const t = getHomeCopy(locale);
  const page = getLandingCopy(source, locale);

  return (
    <div className="hm" lang={locale}>
      <TopBar t={t} />

      <main>
        <header className="hm-hero hm-hero-src">
          <div className="hm-wrap">
            <span className="hm-pill">
              <i />
              {page.pill}
            </span>
            <h1>{inHebrew(page.h1, locale)}</h1>
            <p className="hm-sub">{inHebrew(page.sub, locale)}</p>
            <a className="hm-btn" href={signupUrlFor(locale, "")}>
              {t.hero.cta}
            </a>
          </div>

          <div className="hm-stage hm-stage-src" aria-hidden="true">
            {page.phone ? <ListPhone phone={page.phone} /> : source === "bio" ? <BioPhone t={t} /> : <QuestionnairePhone t={t} />}
            {page.notes.map((n, i) => (
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
          {page.flows ? (
            page.flows.map((flow, i) => <FlowSection key={flow.label} flow={flow} icon={FLOW_ICON[source][i]} />)
          ) : (
            <SalesSection t={t} showForm={false} />
          )}

          <p className="hm-more">{page.more}</p>

          <MarketingSection t={t} />
          {source === "bio" ? <SalesSection t={t} /> : <ClientsSection t={t} />}
        </div>

        {/* What Coflow is, right before the price: the home page's headline. */}
        <section className="hm-hero hm-brand">
          <div className="hm-wrap">
            <h2 className="hm-h1">
              {t.hero.h1a}
              <br />
              {t.hero.h1b}{" "}
              <span className="hm-story" aria-hidden="true">
                <span />
              </span>
            </h2>
            <TypedLine lead={t.hero.builtFor} words={t.hero.audiences} />
            <p className="hm-sub">{t.hero.sub}</p>
          </div>
        </section>

        <PriceSection t={t} locale={locale} />
      </main>

      <HomeFooter t={t} locale={locale} />
    </div>
  );
}

// A Latin word inside Hebrew copy (CRM) is set in the site's English font, as
// the design guide asks: the run is wrapped in a lang="en" span.
function inHebrew(text: string, locale: "he" | "en") {
  if (locale === "en") return text;
  return text.split(/([A-Za-z][A-Za-z0-9]*)/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} lang="en">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

// The opener icon of a source's own flow section.
const FLOW_ICON: Record<LandingSource, IconName[]> = { questionnaire: [], bio: ["link"], podcast: ["link", "spark"], booking: ["cal", "coin"], landing: ["funnel", "link"] };

// The two notifications around the phone on a computer; on a phone they stack
// over it (home.css).
const NOTE_AT: React.CSSProperties[] = [
  { right: 0, top: 40 },
  { left: 0, top: 190 },
];
const NOTE_BG = ["var(--hm-butter)", "var(--hm-pink-tint)"];
