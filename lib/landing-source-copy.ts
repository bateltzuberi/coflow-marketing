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

export type LandingFlow = {
  label: string;
  h2: string;
  lead: string;
  /** The title above the cards. */
  via: string;
  cards: readonly { who: string; title: string; sub: string }[];
};

export type LandingCopy = {
  meta: { title: string; description: string };
  /** The pill above the headline: where she came from. */
  pill: string;
  h1: string;
  sub: string;
  /** The notification cards around the phone. */
  notes: readonly { who: string; title: string; sub: string }[];
  /** The page's own sections, for a source whose story is not one the home page already tells. */
  flows?: readonly LandingFlow[];
  /** A list phone in the hero (the show's public page), for a source that is not a form or a bio page. */
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
    flows: [{
      label: "דפי נחיתה",
      h2: "כל מי שנרשמת מהלינק מגיעה לרשימה או ליומן שלך",
      lead: "מי שנרשמת למדריך נכנסת לרשימת התפוצה. מי שקובעת שיחה נכנסת ליומן. ועל כל אחת מהן כתוב שהיא הגיעה מהלינק בביו.",
      via: "הגיעו מהלינק בביו",
      cards: [
        { who: "ש", title: "שירה נרשמה למדריך", sub: "נכנסה לרשימת התפוצה" },
        { who: "ד", title: "דנה קבעה שיחת היכרות", sub: "נכנסה ליומן" },
      ],
    }],
    more: "והדף הוא רק חלק מקופלו",
  },
  podcast: {
    meta: {
      title: "את הפודקאסט שלך אפשר לארח בקופלו",
      description: "מעלים פרקים וקופלו מארחת אותם: פיד אחד לכל אפליקציות ההאזנה, דף ציבורי עם נגן, ומספרי הורדות לפי תקן IAB.",
    },
    pill: "הגעת מדף פודקאסט שנבנה בקופלו",
    h1: "את הפודקאסט שלך אפשר לארח בקופלו.",
    sub: "מעלה פרקים, ומקבלת קישור פיד אחד לכל אפליקציות ההאזנה, דף ציבורי עם נגן ומספרי הורדות.",
    phone: {
      owner: "הפודקאסט של מאיה לוי",
      sub: "הפרקים האחרונים",
      rows: [
        ["פרק 12 · תמחור", "24 דק׳"],
        ["פרק 11 · לקוחה ראשונה", "31 דק׳"],
        ["פרק 10 · על כסף", "27 דק׳"],
      ],
    },
    notes: [
      { who: "↓", title: "342 הורדות השבוע", sub: "הפלטפורמה המובילה: ספוטיפיי" },
      { who: "12", title: "פרק 12 עלה", sub: "הפיד התעדכן לבד" },
    ],
    flows: [
      {
        label: "הפצה",
        h2: "מעלה פרק, והוא מגיע לכל אפליקציות ההאזנה",
        lead: "כל פודקאסט מקבל קישור פיד אחד. מגישים אותו פעם אחת לכל פלטפורמה, ובמסך ההפצה את רואה איפה הפודקאסט כבר מופיע ומה עוד ממתין להגשה. מכאן הפיד מתעדכן לבד עם כל פרק חדש.",
        via: "מסך ההפצה",
        cards: [
          { who: "A", title: "Apple Podcasts", sub: "הפודקאסט מופיע" },
          { who: "S", title: "Spotify", sub: "הפודקאסט מופיע" },
          { who: "Y", title: "YouTube Music", sub: "ממתין להגשה" },
        ],
      },
      {
        label: "נתונים",
        h2: "את רואה כמה הורידו ומאיפה",
        lead: "הורדות, מאזינים ייחודיים והפלטפורמה המובילה, פרק אחרי פרק. הספירה מסננת סורקים וכפילויות לפי תקן IAB, כמו אצל שירותי האירוח הגדולים.",
        via: "השבוע",
        cards: [
          { who: "↓", title: "342 הורדות", sub: "סך הכל בשבוע האחרון" },
          { who: "מ", title: "187 מאזינים ייחודיים", sub: "לפי כתובת IP" },
          { who: "S", title: "ספוטיפיי מובילה", sub: "54% מההורדות" },
        ],
      },
    ],
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
    flows: [{
      label: "Landing pages",
      h2: "Everyone who signs up from the link joins your list or your calendar",
      lead: "Whoever signs up for the guide joins your mailing list. Whoever books a call lands in your calendar. And each of them is marked as coming from the link in bio.",
      via: "Came from the link in bio",
      cards: [
        { who: "S", title: "Shira signed up for the guide", sub: "Added to the mailing list" },
        { who: "D", title: "Dana booked an intro call", sub: "In the calendar" },
      ],
    }],
    more: "And the page is only one part of Coflow",
  },
  podcast: {
    meta: {
      title: "You can host your podcast in Coflow",
      description: "Upload episodes and Coflow hosts them: one feed for every listening app, a public page with a player, and download numbers to the IAB standard.",
    },
    pill: "You came from a podcast page built in Coflow",
    h1: "You can host your podcast in Coflow.",
    sub: "Upload episodes and get one feed link for every listening app, a public page with a player and download numbers.",
    phone: {
      owner: "Maya Levi's podcast",
      sub: "Latest episodes",
      rows: [
        ["Ep. 12 · Pricing", "24 min"],
        ["Ep. 11 · First client", "31 min"],
        ["Ep. 10 · On money", "27 min"],
      ],
    },
    notes: [
      { who: "↓", title: "342 downloads this week", sub: "Top platform: Spotify" },
      { who: "12", title: "Episode 12 is live", sub: "The feed updated by itself" },
    ],
    flows: [
      {
        label: "Distribution",
        h2: "Upload an episode and it reaches every listening app",
        lead: "Every podcast gets one feed link. You submit it once to each platform, and the distribution screen shows where the show already appears and what is still pending. From then on the feed updates itself with every new episode.",
        via: "The distribution screen",
        cards: [
          { who: "A", title: "Apple Podcasts", sub: "The show appears" },
          { who: "S", title: "Spotify", sub: "The show appears" },
          { who: "Y", title: "YouTube Music", sub: "Pending submission" },
        ],
      },
      {
        label: "Numbers",
        h2: "You see how many downloaded, and from where",
        lead: "Downloads, unique listeners and the top platform, episode by episode. The count filters out scanners and duplicates to the IAB standard, like the big hosting services.",
        via: "This week",
        cards: [
          { who: "↓", title: "342 downloads", sub: "Total in the last week" },
          { who: "L", title: "187 unique listeners", sub: "By IP address" },
          { who: "S", title: "Spotify leads", sub: "54% of downloads" },
        ],
      },
    ],
    more: "And the podcast is only one part of Coflow",
  },
};

export function isLandingSource(value: string): value is LandingSource {
  return (LANDING_SOURCES as readonly string[]).includes(value);
}

export function getLandingCopy(source: LandingSource, locale: Locale): LandingCopy {
  return (locale === "en" ? en : he)[source];
}
