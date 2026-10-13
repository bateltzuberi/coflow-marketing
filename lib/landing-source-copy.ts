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

export const LANDING_SOURCES = ["questionnaire", "bio", "podcast"] as const;
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
  flow?: {
    label: string;
    h2: string;
    lead: string;
    /** The title above the cards. */
    via: string;
    cards: readonly { who: string; title: string; sub: string }[];
  };
  /** A list phone in the hero, for a source that is not a form or a bio page. */
  phone?: { owner: string; sub: string; rows: readonly (readonly [string, string])[] };
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
      title: "כל מה שאת מציעה, בלינק אחד בביו",
      description: "דף אחד לאינסטגרם עם המוצרים, המדריך החינמי ושיחת ההיכרות שלך. מי שנרשמת נכנסת לרשימה שלך, ואת רואה מאיפה היא הגיעה.",
    },
    pill: "הגעת מדף לינק בביו שנבנה בקופלו",
    h1: "כל מה שאת מציעה, בלינק אחד בביו.",
    sub: "מוצרים, מדריך חינמי ושיחת היכרות בדף אחד. מי שנרשמת או קובעת שיחה נכנסת אלייך, ואת רואה שהיא הגיעה מהלינק בביו.",
    notes: [
      { who: "ש", title: "שירה נרשמה למדריך", sub: "מהלינק בביו · נכנסה לרשימת התפוצה" },
      { who: "ד", title: "דנה קבעה שיחת היכרות", sub: "יום ג׳ 14:00 · נכנסה ליומן" },
    ],
    flow: {
      label: "דפי נחיתה",
      h2: "כל מי שנרשמת מהלינק מגיעה לרשימה או ליומן שלך",
      lead: "מי שנרשמת למדריך נכנסת לרשימת התפוצה. מי שקובעת שיחה נכנסת ליומן. ועל כל אחת מהן כתוב שהיא הגיעה מהלינק בביו.",
      via: "הגיעו מהלינק בביו",
      cards: [
        { who: "ש", title: "שירה נרשמה למדריך", sub: "נכנסה לרשימת התפוצה" },
        { who: "ד", title: "דנה קבעה שיחת היכרות", sub: "נכנסה ליומן" },
      ],
    },
    more: "והדף הוא רק חלק מקופלו",
  },
  podcast: {
    meta: {
      title: "כל פרק בפודקאסט הופך לתוכן",
      description: "ייבוא הפרקים מהפיד הקיים, תמלול, הפצה ותוכן שנכתב מכל פרק, במקום אחד. הפודקאסט ממשיך להתארח איפה שהוא.",
    },
    pill: "הגעת מדף פודקאסט שנבנה בקופלו",
    h1: "כל פרק בפודקאסט הופך לתוכן.",
    sub: "קופלו מביאה את הפרקים מהפיד הקיים, מתמללת אותם וכותבת מהם ניוזלטר ופוסטים. הפודקאסט ממשיך להתארח איפה שהוא.",
    phone: {
      owner: "הפודקאסט של מאיה לוי",
      sub: "פרקים",
      rows: [
        ["פרק 12 · למה תמחור מפחיד", "תומלל"],
        ["פרק 11 · הלקוחה הראשונה", "תומלל"],
        ["פרק 10 · לדבר על כסף", "בתמלול"],
      ],
    },
    notes: [
      { who: "1", title: "פרק 12 תומלל", sub: "מוכן לניוזלטר ולפוסטים" },
      { who: "ה", title: "הפרק עלה להאזנה", sub: "הפיד התעדכן לבד" },
    ],
    flow: {
      label: "פודקאסט",
      h2: "מפרק אחד יוצאים ניוזלטר ופוסטים",
      lead: "קופלו מתמללת את הפרק ברקע, וממנו כותבת טיזר לניוזלטר ופוסטים לאינסטגרם. במסך ההפצה את רואה מה כבר פעיל באפליקציות ההאזנה ומה ממתין להגשה.",
      via: "מפרק 12",
      cards: [
        { who: "ת", title: "תמלול", sub: "רץ ברקע, אפשר להמשיך לעבוד" },
        { who: "נ", title: "טיזר לניוזלטר", sub: "נכתב מהתמלול" },
        { who: "א", title: "פוסט לאינסטגרם", sub: "מקדם את הפרק" },
      ],
    },
    more: "והפודקאסט הוא רק חלק מקופלו",
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
      title: "Everything you offer, in one link in bio",
      description: "One Instagram page with your offers, your free guide and your intro call. Everyone who signs up lands in Coflow, and you see where she came from.",
    },
    pill: "You came from a link-in-bio page built in Coflow",
    h1: "Everything you offer, in one link in bio.",
    sub: "Products, a free guide and an intro call on one page. Whoever signs up or books a call lands with you, and you see she came from the link in bio.",
    notes: [
      { who: "S", title: "Shira signed up for the guide", sub: "From the link in bio · added to the list" },
      { who: "D", title: "Dana booked an intro call", sub: "Tue 14:00 · in the calendar" },
    ],
    flow: {
      label: "Landing pages",
      h2: "Everyone who signs up from the link joins your list or your calendar",
      lead: "Whoever signs up for the guide joins your mailing list. Whoever books a call lands in your calendar. And each of them is marked as coming from the link in bio.",
      via: "Came from the link in bio",
      cards: [
        { who: "S", title: "Shira signed up for the guide", sub: "Added to the mailing list" },
        { who: "D", title: "Dana booked an intro call", sub: "In the calendar" },
      ],
    },
    more: "And the page is only one part of Coflow",
  },
  podcast: {
    meta: {
      title: "Every podcast episode becomes content",
      description: "Import your episodes from the existing feed, transcribe them, distribute them and write content from each one, in one place. The show stays hosted where it is.",
    },
    pill: "You came from a podcast page built in Coflow",
    h1: "Every podcast episode becomes content.",
    sub: "Coflow pulls your episodes from the existing feed, transcribes them and writes a newsletter and posts from them. The show stays hosted where it is.",
    phone: {
      owner: "Maya Levi's podcast",
      sub: "Episodes",
      rows: [
        ["Ep. 12 · Why pricing is scary", "Transcribed"],
        ["Ep. 11 · The first client", "Transcribed"],
        ["Ep. 10 · Talking about money", "Transcribing"],
      ],
    },
    notes: [
      { who: "1", title: "Episode 12 transcribed", sub: "Ready for a newsletter and posts" },
      { who: "L", title: "The episode is live", sub: "The feed updated by itself" },
    ],
    flow: {
      label: "Podcast",
      h2: "One episode becomes a newsletter and posts",
      lead: "Coflow transcribes the episode in the background and writes a newsletter teaser and Instagram posts from it. The distribution screen shows what is already live in the listening apps and what is still pending.",
      via: "From episode 12",
      cards: [
        { who: "T", title: "Transcript", sub: "Runs in the background, keep working" },
        { who: "N", title: "Newsletter teaser", sub: "Written from the transcript" },
        { who: "I", title: "Instagram post", sub: "Promotes the episode" },
      ],
    },
    more: "And the podcast is only one part of Coflow",
  },
};

export function isLandingSource(value: string): value is LandingSource {
  return (LANDING_SOURCES as readonly string[]).includes(value);
}

export function getLandingCopy(source: LandingSource, locale: Locale): LandingCopy {
  return (locale === "en" ? en : he)[source];
}
