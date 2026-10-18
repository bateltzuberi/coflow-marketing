import type { Metadata } from "next";

import "@/app/home.css";
import { HomeFooter, PriceSection, TopBar } from "@/components/home/sections";
import { getHomeCopy } from "@/lib/home-copy";
import { getLocale } from "@/lib/locale";
import { buildMetadata } from "@/lib/seo";
import { signupUrlFor } from "@/lib/site";
import { getSwitchCopy } from "@/lib/switch-copy";

// coflow.social/{he,en}/switch: where the Instagram post about the
// subscriptions Batel cancelled sends people (the DM link).
//
// The post converts and the home page did not: someone who comments on that
// post wants to know whether Coflow replaces the tools *she* pays for, and the
// home page never names a tool or a saving. So this page carries the post's
// own story on, in the post's own order: the same tools and numbers, what each
// one became in Coflow, then vs now, the questions people send in DMs, and the
// price. It ends at the price, like home.
//
// Not indexed: it exists for people who arrive from the post.

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const page = getSwitchCopy(locale);
  return buildMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: "/switch",
    locale,
    ogImage: `/og/home-${locale}.png`,
    noindex: true,
  });
}

export default async function SwitchFromPost() {
  const locale = await getLocale();
  const t = getHomeCopy(locale);
  const page = getSwitchCopy(locale);
  const signup = signupUrlFor(locale, "");

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
            <a className="hm-btn" href={signup}>
              {page.cta}
            </a>
            <p className="hm-sw-note">{page.ctaNote}</p>
          </div>
        </header>

        <div className="hm-wrap">
          <section className="hm-sw-sec">
            <p className="hm-sw-label">{page.swap.label}</p>
            <h2>{page.swap.h2}</h2>
            <p className="hm-sw-lead">{page.swap.lead}</p>

            <ol className="hm-sw-list">
              {page.swap.rows.map((row) => (
                <li key={row.tool} className={row.soon ? "hm-sw-row hm-sw-soon" : "hm-sw-row"}>
                  <div className="hm-sw-was">
                    <b>{inHebrew(row.job, locale)}</b>
                    <span className="hm-sw-tool" lang="en">
                      {row.tool}
                    </span>
                    <span className="hm-sw-price">
                      <s>{row.was}</s> {page.swap.perMonth}
                    </span>
                  </div>
                  <span className="hm-sw-arrow" aria-hidden="true">
                    {locale === "he" ? "←" : "→"}
                  </span>
                  <div className="hm-sw-now">
                    <small>{row.soon ? page.swap.soonLabel : page.swap.nowLabel}</small>
                    <p>{inHebrew(row.now, locale)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="hm-sw-sec">
            <p className="hm-sw-label">{page.totals.label}</p>
            <h2>{page.totals.h2}</h2>
            <p className="hm-sw-lead">{page.totals.lead}</p>

            <div className="hm-sw-totals">
              <div className="hm-sw-card">
                <span className="hm-sw-tag hm-sw-tag-then">{page.totals.thenLabel}</span>
                <ul>
                  {page.totals.then.rows.map(([name, price]) => (
                    <li key={name}>
                      <span lang="en">{name}</span>
                      <s>{price}</s>
                    </li>
                  ))}
                </ul>
                <p className="hm-sw-sum">
                  <span>{page.totals.perMonth}</span>
                  <b>{page.totals.then.total}</b>
                </p>
              </div>
              <div className="hm-sw-card">
                <span className="hm-sw-tag hm-sw-tag-now">{page.totals.nowLabel}</span>
                <ul>
                  {page.totals.now.rows.map(([name, price]) => (
                    <li key={name}>
                      <span lang="en">{name}</span>
                      <span>{price}</span>
                    </li>
                  ))}
                </ul>
                <p className="hm-sw-sum">
                  <span>{page.totals.perMonth}</span>
                  <b>{page.totals.now.total}</b>
                </p>
              </div>
            </div>
            <p className="hm-sw-fine">{page.totals.fine}</p>
            <div className="hm-sw-cta">
              <a className="hm-btn" href={signup}>
                {page.cta}
              </a>
            </div>
          </section>

          <section className="hm-sw-sec">
            <p className="hm-sw-label">{page.faq.label}</p>
            <h2>{page.faq.h2}</h2>
            <dl className="hm-sw-faq">
              {page.faq.items.map((item) => (
                <div key={item.q}>
                  <dt>{inHebrew(item.q, locale)}</dt>
                  <dd>{inHebrew(item.a, locale)}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <PriceSection t={t} locale={locale} />
      </main>

      <HomeFooter t={t} locale={locale} />
    </div>
  );
}

// A Latin word inside Hebrew copy (CRM, ActiveCampaign) is set in the site's
// English font, as the design guide asks: the run is wrapped in a lang="en" span.
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
