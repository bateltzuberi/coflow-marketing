import { SITE } from "./site";
import type { Locale } from "./locale";

// Coflow Academy, read from the product.
//
// The help centre's text is authored in the studio repo next to the screens it
// describes (src/lib/academy/areas/*-copy.ts) and published by the studio app
// at /api/academy. This site renders it on the apex, where a person actually
// finds it: Google, a support reply, a link in an email — none of which can
// reach a page behind a login.
//
// One body of text, two renderings. An answer corrected in the product reaches
// this site on the next revalidation, with no commit here.

export interface AcademyLink {
  label: string;
  href: string;
}

export interface AcademyShotHotspot {
  /** Size of the marked control, as a percentage of the image. With it, the
   *  marker is a ring drawn around the control instead of a dot on top of it. */
  w?: number;
  h?: number;
  /** 0-100, percentages of the image box. */
  x: number;
  y: number;
  label: string;
}

export interface AcademyShot {
  /** A path on the studio ("/academy-shots/x.png") — see academyShotSrc. */
  src: string;
  alt: string;
  caption?: string;
  hotspots?: AcademyShotHotspot[];
}

/** One numbered instruction in a guide, and where it happens. */
export interface AcademyStep {
  text: string;
  link?: AcademyLink;
}

export interface AcademyArticleSide {
  q: string;
  a: string[];
  /** The procedure. A guide without these renders as its intro line alone,
   *  which is how the public site was showing them. */
  steps?: AcademyStep[];
  shots?: AcademyShot[];
  links?: AcademyLink[];
}

export interface AcademyArticle {
  id: string;
  asked?: boolean;
  he: AcademyArticleSide;
  en: AcademyArticleSide;
}

export interface AcademyAreaSide {
  title: string;
  blurb: string;
  intro: string;
}

export interface AcademyArea {
  id: string;
  icon: string;
  /** The area's palette colour, published by the studio so a topic is the same
   *  colour in the product and here. Older payloads may not carry it. */
  color?: string;
  he: AcademyAreaSide;
  en: AcademyAreaSide;
  articles: AcademyArticle[];
}

/** The shape this file knows how to read. A newer payload is still rendered;
 *  an older one (a rollback on the product side) is refused rather than
 *  half-rendered. */
const SCHEMA = 1;

const ENDPOINT = `${SITE.studioAppUrl}/api/academy`;

/**
 * Fetch the content, revalidated hourly.
 *
 * Returns [] rather than throwing when the product app is unreachable or
 * answers with something unreadable: the marketing site must build and stay up
 * whatever the studio is doing, and an empty help centre is a bad page while a
 * failed build is a dead site. Callers render an empty state.
 */
export async function getAcademyPayload(): Promise<{
  areas: AcademyArea[];
  /** Words people type for a thing, next to the word the product prints.
   *  Authored beside the articles and published with them, so this site never
   *  keeps a second copy of the product's vocabulary. Empty on an older
   *  payload — search then matches only what was typed. */
  synonyms: string[][];
}> {
  const empty = { areas: [], synonyms: [] };
  try {
    const res = await fetch(ENDPOINT, { next: { revalidate: 3600 } });
    if (!res.ok) return empty;
    const json: unknown = await res.json();
    if (!json || typeof json !== "object") return empty;
    const { schema, areas, synonyms } = json as {
      schema?: number;
      areas?: unknown;
      synonyms?: unknown;
    };
    if (typeof schema !== "number" || schema < SCHEMA) return empty;
    if (!Array.isArray(areas)) return empty;
    return {
      areas: areas as AcademyArea[],
      synonyms: Array.isArray(synonyms)
        ? (synonyms.filter((g) => Array.isArray(g)) as string[][])
        : [],
    };
  } catch {
    return empty;
  }
}

export async function getAcademyAreas(): Promise<AcademyArea[]> {
  return (await getAcademyPayload()).areas;
}

export async function getAcademyArea(id: string): Promise<AcademyArea | null> {
  const areas = await getAcademyAreas();
  return areas.find((a) => a.id === id) ?? null;
}

/** An answer's in-app link is a studio path ("/funnels"); on this site it has
 *  to be the full address, or it points at a marketing page that doesn't exist. */
export function academyLinkHref(href: string): string {
  return href.startsWith("/") ? `${SITE.studioAppUrl}${href}` : href;
}

/** The screenshots live in the studio's public/ — one file, both surfaces. */
export function academyShotSrc(src: string): string {
  return src.startsWith("/") ? `${SITE.studioAppUrl}${src}` : src;
}

export function academySide(area: AcademyArea, locale: Locale): AcademyAreaSide {
  return locale === "en" ? area.en : area.he;
}

export function articleSide(article: AcademyArticle, locale: Locale): AcademyArticleSide {
  return locale === "en" ? article.en : article.he;
}

export function totalQuestions(areas: AcademyArea[]): number {
  return areas.reduce((n, a) => n + a.articles.length, 0);
}
