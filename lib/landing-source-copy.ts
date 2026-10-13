import type { Locale } from "./locale";

/**
 * The words of the pages a "made with Coflow" badge sends a visitor to
 * (coflow.social/{he,en}/for/<source>). One entry per place the badge sits on
 * a customer's public page. Everything below the hero comes from the home
 * page's own copy (lib/home-copy.ts), so a claim is fixed once for both.
 *
 * The keys are the studio's badge channels (shebossit-cms
 * src/lib/attribution/badge.ts); the studio's /go route sends each channel to
 * its page here.
 */

export const LANDING_SOURCES = ["questionnaire", "bio"] as const;
export type LandingSource = (typeof LANDING_SOURCES)[number];

export type LandingCopy = {
  meta: { title: string; description: string };
  /** The pill above the headline: where she came from. */
  pill: string;
  h1: string;
  sub: string;
  /** The notification cards around the phone. */
  notes: readonly { who: string; title: string; sub: string }[];
  /** The page's own flow section, for a source whose flow is not one the home page already tells. */
  flow?: { label: string; h2: string; lead: string };
  /** The line between the page's own story and the whole-system sections. */
  more: string;
};

const he: Record<LandingSource, LandingCopy> = {
  questionnaire: {
    meta: {
      title: "שאלון שהתשובות שלו נכנסות ישר ל-CRM",
      description: "כל מי שעונה על שאלון בקופלו נכנסת ל-CRM שלך עם התשובות שלה. שאלונים, עסקאות ולקוחות במקום אחד.",
    },
    pill: "הגעת משאלון שנבנה בקופלו",
    h1: "כל מי שעונה על השאלון נכנסת אלייך ל-CRM.",
    sub: "את רואה מי מילאה, מה ענתה ואיפה היא עומדת, בלי להעתיק כלום בין כלים.",
    notes: [
      { who: "נ", title: "נועה מילאה את השאלון", sub: "מתאימה לליווי · נכנסה ל-CRM" },
      { who: "ר", title: "רוני בחרה בקורס", sub: "עסקה חדשה · ₪690" },
    ],
    more: "והשאלון הוא רק חלק מקופלו",
  },
  bio: {
    meta: {
      title: "לינק בביו שהוא דף שמוכר",
      description: "דף אחד לאינסטגרם עם המוצרים, המדריך החינמי ושיחת ההיכרות שלך. מי שנרשמת נכנסת לקופלו, ואת רואה מאיפה היא הגיעה.",
    },
    pill: "הגעת מדף לינק בביו שנבנה בקופלו",
    h1: "הלינק בביו יכול להיות דף שמוכר.",
    sub: "דף אחד לכל מה שאת מציעה: מוצרים, מדריך חינמי ושיחת היכרות. מי שנרשמת נכנסת לרשימה שלך.",
    notes: [
      { who: "ש", title: "שירה נרשמה למדריך", sub: "מהלינק בביו · נכנסה לרשימת התפוצה" },
      { who: "ד", title: "דנה קבעה שיחת היכרות", sub: "יום ג׳ 14:00 · נכנסה ליומן" },
    ],
    flow: {
      label: "דפי נחיתה",
      h2: "כל מה שאת מוכרת בדף אחד",
      lead: "דף לאינסטגרם עם המוצרים שלך, מדריך חינמי ושיחת היכרות. כל מי שנרשמת או קובעת שיחה נכנסת למקום הנכון בקופלו, ואת רואה מאיפה היא הגיעה.",
    },
    more: "והדף הוא רק חלק מקופלו",
  },
};

const en: Record<LandingSource, LandingCopy> = {
  questionnaire: {
    meta: {
      title: "A questionnaire whose answers go straight into your CRM",
      description: "Everyone who answers a Coflow questionnaire lands in your CRM with her answers. Questionnaires, deals and clients in one place.",
    },
    pill: "You came from a Coflow questionnaire",
    h1: "Everyone who answers the questionnaire lands in your CRM.",
    sub: "You see who filled it in, what she answered and where she stands, without copying anything between tools.",
    notes: [
      { who: "N", title: "Noa filled in the questionnaire", sub: "Fits coaching · added to the CRM" },
      { who: "R", title: "Roni picked the course", sub: "New deal · ₪690" },
    ],
    more: "And the questionnaire is only one part of Coflow",
  },
  bio: {
    meta: {
      title: "A link in bio that is a page that sells",
      description: "One Instagram page with your offers, your free guide and your intro call. Everyone who signs up lands in Coflow, and you see where she came from.",
    },
    pill: "You came from a link-in-bio page built in Coflow",
    h1: "Your link in bio can be a page that sells.",
    sub: "One page for everything you offer: products, a free guide and an intro call. Whoever signs up joins your list.",
    notes: [
      { who: "S", title: "Shira signed up for the guide", sub: "From the link in bio · added to the list" },
      { who: "D", title: "Dana booked an intro call", sub: "Tue 14:00 · in the calendar" },
    ],
    flow: {
      label: "Landing pages",
      h2: "Everything you sell, on one page",
      lead: "An Instagram page with your offers, a free guide and an intro call. Everyone who signs up or books a call lands in the right place in Coflow, and you see where she came from.",
    },
    more: "And the page is only one part of Coflow",
  },
};

export function isLandingSource(value: string): value is LandingSource {
  return (LANDING_SOURCES as readonly string[]).includes(value);
}

export function getLandingCopy(source: LandingSource, locale: Locale): LandingCopy {
  return (locale === "en" ? en : he)[source];
}
