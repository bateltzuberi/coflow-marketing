import type { Locale } from "./locale";

/**
 * The words of coflow.social/{he,en}/switch: the page the Instagram post
 * "the subscriptions I cancelled since AI came into my business" sends people
 * to (the comment-for-a-link DM).
 *
 * The post is Batel's own story with her real bills, so the page carries the
 * same story on: the same tools, the same monthly numbers, the same "then vs
 * now" totals. Every number here is copied from the post's last slide; change
 * them together or not at all. What each tool became in Coflow is checked
 * against the product (shebossit-cms): CRM + CSV/Excel contact import,
 * email sequences, task boards, forms, booking pages, podcast hosting,
 * automations, the Claude/ChatGPT connection, the link-in-bio page. Courses
 * are still being built, and the page says so.
 */

export type SwitchRow = {
  /** What the tool was for, in her words. */
  job: string;
  tool: string;
  /** Monthly, in euros, from the post. */
  was: string;
  /** What does that job in Coflow today. */
  now: string;
  /** Not finished yet: drawn as "in development" instead of a done swap. */
  soon?: boolean;
};

export type SwitchCopy = {
  meta: { title: string; description: string };
  pill: string;
  h1: string;
  sub: string;
  cta: string;
  ctaNote: string;
  swap: { label: string; h2: string; lead: string; nowLabel: string; soonLabel: string; perMonth: string; rows: readonly SwitchRow[] };
  totals: {
    label: string;
    h2: string;
    lead: string;
    thenLabel: string;
    nowLabel: string;
    perMonth: string;
    then: { total: string; rows: readonly (readonly [string, string])[] };
    now: { total: string; rows: readonly (readonly [string, string])[] };
    fine: string;
  };
  faq: { label: string; h2: string; items: readonly { q: string; a: string }[] };
};

const he: SwitchCopy = {
  meta: {
    title: "ביטלתי €446 בחודש של מנויים ועברתי לקופלו",
    description: "ActiveCampaign, Asana, Typeform, Calendly, Podbean, Zapier ו-Hopp. מה החליף כל אחד מהם בקופלו, וכמה זה עולה היום.",
  },
  pill: "הגעת מהפוסט על המנויים שביטלתי",
  h1: "€446 בחודש על כלים. היום הכול בקופלו.",
  sub: "CRM, מיילים, משימות, טפסים, פגישות, פודקאסט, אוטומציות ולינק בביו. הנה מה מחליף כל מנוי שביטלתי.",
  cta: "לפתוח חשבון ב-€24 ←",
  ctaNote: "בלי התחייבות, מבטלים מתי שרוצים",
  swap: {
    label: "מה עבר לאן",
    h2: "כל מנוי, ומה עושה את העבודה שלו היום",
    lead: "בצד אחד הכלי שהייתי משלמת עליו כל חודש. בצד השני המקום בקופלו שעושה את אותה עבודה.",
    nowLabel: "בקופלו",
    soonLabel: "בפיתוח",
    perMonth: "לחודש",
    rows: [
      { job: "CRM ומיילים", tool: "ActiveCampaign", was: "€196", now: "CRM, רשימות תפוצה וסדרות מיילים אוטומטיות" },
      { job: "משימות", tool: "Asana", was: "€83", now: "לוחות משימות לכל הצוות, בלי תשלום על מושבים" },
      { job: "פודקאסט", tool: "Podbean", was: "€34", now: "אחסון הפודקאסט ודף הפודקאסט שלך" },
      { job: "אוטומציות", tool: "Zapier", was: "€26", now: "אוטומציות בתוך קופלו, עם חיבור ל-Claude ול-ChatGPT" },
      { job: "טפסים", tool: "Typeform", was: "€25", now: "שאלונים וטפסים שהתשובות שלהם נכנסות ל-CRM" },
      { job: "פגישות", tool: "Calendly", was: "€17", now: "דף לקביעת פגישות, ומי שקובעת נכנסת ליומן שלך" },
      { job: "לינק בביו", tool: "Hopp", was: "€8", now: "דף לינק בביו עם המוצרים, המדריך ושיחת ההיכרות" },
      { job: "קורסים", tool: "Wix", was: "€36", now: "בניית קורסים בקופלו בפיתוח. אני עוד מעבירה את הקורסים שלי", soon: true },
    ],
  },
  totals: {
    label: "פעם מול היום",
    h2: "€446 בחודש הפכו ל-€134",
    lead: "את Claude ו-ChatGPT אני ממשיכה לשלם בנפרד. קופלו מתחברת לשניהם.",
    thenLabel: "פעם",
    nowLabel: "היום",
    perMonth: "בחודש",
    then: {
      total: "€446",
      rows: [
        ["ActiveCampaign", "€196"],
        ["Asana", "€83"],
        ["Wix", "€36"],
        ["Podbean", "€34"],
        ["Zapier", "€26"],
        ["Typeform", "€25"],
        ["Filmora", "€20"],
        ["Calendly", "€17"],
        ["Hopp", "€8"],
      ],
    },
    now: {
      total: "€134",
      rows: [
        ["Coflow", "€24"],
        ["Claude", "€90"],
        ["ChatGPT", "€20"],
      ],
    },
    fine: "מחירים בדולר ובשקלים הומרו ליורו בערך · מנויים שנתיים חולקו ל-12",
  },
  faq: {
    label: "לפני שעוברים",
    h2: "מה שואלים אותי בהודעות",
    items: [
      { q: "אפשר להעביר את אנשי הקשר שלי?", a: "כן. מייצאים קובץ CSV או Excel מהכלי שלך, כולל ActiveCampaign, ומעלים אותו ל-CRM של קופלו." },
      { q: "צריך לבטל הכול ביום אחד?", a: "לא. אפשר להתחיל מכלי אחד, להעביר אותו, ולבטל את המנוי שלו כשהכול עובד." },
    ],
  },
};

const en: SwitchCopy = {
  meta: {
    title: "I cancelled €446 a month of subscriptions and moved to Coflow",
    description: "ActiveCampaign, Asana, Typeform, Calendly, Podbean, Zapier and Hopp. What replaced each of them in Coflow, and what it costs now.",
  },
  pill: "You came from the post about the subscriptions I cancelled",
  h1: "€446 a month on tools. Now it's all in Coflow.",
  sub: "CRM, email, tasks, forms, bookings, podcast, automations and link in bio. Here's what replaced every subscription I cancelled.",
  cta: "Open an account for €24 →",
  ctaNote: "No commitment, cancel any time",
  swap: {
    label: "What moved where",
    h2: "Every subscription, and what does its job now",
    lead: "On one side, the tool I paid for every month. On the other, the place in Coflow that does the same job.",
    nowLabel: "In Coflow",
    soonLabel: "In development",
    perMonth: "/mo",
    rows: [
      { job: "CRM & email", tool: "ActiveCampaign", was: "€196", now: "CRM, mailing lists and automated email sequences" },
      { job: "Tasks", tool: "Asana", was: "€83", now: "Task boards for the whole team, with no per-seat fee" },
      { job: "Podcast", tool: "Podbean", was: "€34", now: "Podcast hosting and your podcast page" },
      { job: "Automations", tool: "Zapier", was: "€26", now: "Automations inside Coflow, connected to Claude and ChatGPT" },
      { job: "Forms", tool: "Typeform", was: "€25", now: "Questionnaires and forms whose answers land in the CRM" },
      { job: "Bookings", tool: "Calendly", was: "€17", now: "A booking page, and whoever books lands in your calendar" },
      { job: "Link in bio", tool: "Hopp", was: "€8", now: "A link-in-bio page with your products, your guide and a discovery call" },
      { job: "Courses", tool: "Wix", was: "€36", now: "Course building in Coflow is in development. I'm still moving my courses over", soon: true },
    ],
  },
  totals: {
    label: "Then vs now",
    h2: "€446 a month became €134",
    lead: "I still pay for Claude and ChatGPT separately. Coflow connects to both.",
    thenLabel: "Then",
    nowLabel: "Now",
    perMonth: "a month",
    then: {
      total: "€446",
      rows: [
        ["ActiveCampaign", "€196"],
        ["Asana", "€83"],
        ["Wix", "€36"],
        ["Podbean", "€34"],
        ["Zapier", "€26"],
        ["Typeform", "€25"],
        ["Filmora", "€20"],
        ["Calendly", "€17"],
        ["Hopp", "€8"],
      ],
    },
    now: {
      total: "€134",
      rows: [
        ["Coflow", "€24"],
        ["Claude", "€90"],
        ["ChatGPT", "€20"],
      ],
    },
    fine: "Dollar and shekel prices converted to euros, roughly · yearly plans divided by 12",
  },
  faq: {
    label: "Before you switch",
    h2: "What people ask me in DMs",
    items: [
      { q: "Can I bring my contacts over?", a: "Yes. Export a CSV or Excel file from your current tool, ActiveCampaign included, and upload it to Coflow's CRM." },
      { q: "Do I have to cancel everything at once?", a: "No. Start with one tool, move it over, and cancel its subscription once everything works." },
    ],
  },
};

export function getSwitchCopy(locale: Locale): SwitchCopy {
  return locale === "en" ? en : he;
}
