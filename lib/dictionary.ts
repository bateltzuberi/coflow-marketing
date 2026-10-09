import type { Locale } from "./locale";

/**
 * All marketing copy in one place, ported 1:1 from the approved copy doc.
 * Hebrew is primary (לשון נקבה); `en` mirrors the `he` shape key-for-key.
 *
 * Positioning (current): the site sells the Studio subscription, and the
 * launch is invite-only — the home page is the code door and every CTA points
 * at registration. The free Instagram diagnosis it used to sell is gone from
 * the public site; it lives inside the paid product. The copy below claims
 * four platforms (Instagram, podcast, newsletter, YouTube) because the product
 * has four — see PRODUCT.md before changing that list.
 */
export const DICT = {
  he: {
    nav: {
      signIn: "התחברות",
      // Joining = signing up for the waitlist (the invite comes later).
      cta: "להצטרף",
      academy: "אקדמיה",
      // The free diagnosis, which used to be the home page.
      diagnosis: "אבחון חינם",
    },








    // ----- /join — the invite-only launch landing -----
    // Coflow opens to a closed group first. This page is the door: a code, an
    // account, €24/month. No free tier, no diagnosis first — the diagnosis is
    // one of the things waiting inside.
    join: {
      // The category, said plainly. Everything under it is an argument for why
      // a brand-management system is a different thing from a content tool.
      eyebrow: "מערכת לניהול מותג עם AI",
      title: "כל המותג שלך במקום אחד.",
      sub: "מערכת אחת שמנהלת את המותג האישי שלך מהאסטרטגיה ועד המכירה. אינסטגרם, פודקאסט, ניוזלטר ויוטיוב, כולם מאותה הגדרה.",
      inviteNote: "בשלב הזה נכנסים עם קוד.",

      codeLabel: "קוד הזמנה",
      codePlaceholder: "הקוד שקיבלת",
      cta: "כניסה",
      ctaLoading: "בודקת…",
      errInvalid: "הקוד לא תקף. בדקי שהעתקת אותו במלואו.",
      errRetired: "הקוד כבר לא פעיל. צרי איתנו קשר לקבלת הקוד החדש.",
      errEmpty: "צריך להזין קוד.",
      errNetwork: "לא הצלחנו לבדוק את הקוד. נסי שוב.",
      priceLine: "24 יורו לחודש. בלי תקופת ניסיון, בלי התחייבות, אפשר לבטל בכל רגע.",
      noCodeLabel: "אין לך קוד?",
      noCodeCta: "לחצי כאן לרשימת המתנה",

      // Four claims. Each one takes a position you could argue with, and then
      // says what in the system makes it true. No claim without its mechanism.
      messages: [
        {
          claim: "מותג הוא לא רק התוכן שלו.",
          body: "לפני שמוציאים פוסט אחד, יש כאן פרופיל מותג: אבחון של איך את נקראת מבחוץ, האסטרטגיה, הקול וערכת המותג עם הצבעים, הפונטים והלוגו. כל שאר המערכת קוראת משם, ולכן שום דבר לא מתחיל מאפס.",
        },
        {
          claim: "מותג אחד, לא ארבעה חשבונות שרצים במקביל.",
          body: "אינסטגרם, פודקאסט, ניוזלטר ויוטיוב יושבים באותה מערכת ונגזרים מאותה הגדרה. לכל אחד עוגני תוכן, רפרנסים וטמפלטים משלו, כי מה שעובד בקרוסלה לא מה שעובד בפרק.",
        },
        {
          claim: "ניהול מותג הוא גם התפעול, לא רק הרעיונות.",
          body: "יומן תוכן אחד לכל הפלטפורמות, ולוח שמזיז פריט מרעיון לעבודה, למוכן ולפורסם, עם תאריכים ותתי משימות. זה ההבדל בין אסטרטגיה שכתובה לבין אסטרטגיה שקורית.",
        },
        {
          claim: "מותג נמדד גם בהכנסה.",
          body: "מוצרים ומחירון, דפי נחיתה וטפסים שאוספים לידים, ו-CRM עם אנשי קשר ועסקאות. ולוח בקרה שמאחד את המספרים מכל הפלטפורמות, כדי לראות מה עבד ולא מה שהרגיש שעבד.",
        },
      ],
    },

    // ----- /waitlist — where the "no code" line lands -----
    // The launch is invite-only, so most visitors arrive without a code. This
    // page is the only thing they can actually do: leave details on the form
    // that lives in the Studio CRM, so the list is a real list and not an inbox.
    waitlist: {
      eyebrow: "רשימת המתנה",
      title: "הרשמה לקופלו",
      sub: "קופלו נפתחת בהדרגה. נרשמים כאן, ואנחנו שולחים הזמנה כשמגיע התור שלך.",
      formTitle: "טופס רשימת המתנה",
      backLabel: "יש לך קוד הזמנה?",
      backCta: "להזנת הקוד",
    },

    academy: {
      // The public help centre at coflow.social/academy. The ANSWERS are not
      // here — they are published by the product app and fetched (lib/academy.ts).
      // Only the page's own framing lives in this dictionary.
      title: "האקדמיה של קופלו",
      heroQuestion: "איך אפשר לעזור?",
      searchPlaceholder: "חיפוש שאלה…",
      searchLabel: "חיפוש באקדמיה",
      searchNoResults: "לא נמצאה שאלה כזאת.",
      searchNoResultsHint: "נסי מילה אחת במקום משפט, או עייני בנושאים למטה.",
      heroSub:
        "איך המערכת עובדת, אזור אזור. חפשי שאלה, או עברי לפי נושא.",
      countLine: "{areas} אזורים · {questions} שאלות ותשובות",
      areasTitle: "עיון לפי נושא",
      questionsCount: "{n} שאלות",
      inThisArea: "בעמוד הזה",
      backToIndex: "לכל האזורים",
      openInStudio: "פתיחה בסטודיו",
      askedBadge: "נשאל",
      emptyTitle: "האקדמיה לא נטענה כרגע",
      emptyBody: "נסי לרענן בעוד רגע. בינתיים אפשר להיכנס לסטודיו ולפתוח את האקדמיה משם.",
      ctaTitle: "רוצה לראות את זה בפנים?",
      ctaBody: "האקדמיה נמצאת גם בתוך המערכת, עם קישור ישיר לכל מסך שמוזכר בתשובה.",
      ctaButton: "כניסה לסטודיו",
    },
    footer: {
      tagline: "העסק שמאחורי המותג שלך. שיווק, מכירות, ניהול לקוחות ומשימות במקום אחד.",
      cols: {
        product: "המוצר",
        company: "החברה",
        legal: "משפטי",
      },
      productLinks: [
        { label: "האקדמיה של קופלו", href: "/academy" },
        { label: "רשימת המתנה", href: "/waitlist" },
        { label: "תנאי שימוש", href: "/terms" },
        { label: "מדיניות פרטיות", href: "/privacy" },
      ],
      copy: "© {year} Coflow · coflow.social",
      langSwitcher: "EN",
      langSwitcherAria: "Switch to English",
    },
  },

  en: {
    nav: {
      signIn: "Log in",
      cta: "Join",
      academy: "Academy",
      diagnosis: "Free diagnosis",
    },








    // ----- /join — the invite-only launch landing -----
    join: {
      eyebrow: "An AI brand-management system",
      title: "Your whole brand in one place.",
      sub: "One system running your personal brand from the strategy through to the sale. Instagram, podcast, newsletter and YouTube, all off the same definition.",
      inviteNote: "Right now you get in with a code.",

      codeLabel: "Invite code",
      codePlaceholder: "The code you were sent",
      cta: "Enter",
      ctaLoading: "Checking…",
      errInvalid: "That code isn't valid. Check you copied all of it.",
      errRetired: "That code is no longer active. Get in touch and we'll send you the current one.",
      errEmpty: "Enter your code first.",
      errNetwork: "We couldn't check that code. Try again.",
      priceLine: "24 euro a month. No trial, no lock-in, cancel any time.",
      noCodeLabel: "Don't have a code?",
      noCodeCta: "Join the waitlist",

      messages: [
        {
          claim: "A brand is not just its content.",
          body: "Before a single post, there is a brand profile: a diagnosis of how you read from the outside, the strategy, the voice, and the brand kit with your colors, fonts and logo. Everything else reads from there, so nothing starts from zero.",
        },
        {
          claim: "One brand, not four accounts running in parallel.",
          body: "Instagram, podcast, newsletter and YouTube live in the same system and come off the same definition. Each has its own anchors, references and templates, because what works in a carousel is not what works in an episode.",
        },
        {
          claim: "Managing a brand is the operations too, not only the ideas.",
          body: "One content calendar across every platform, and a board that moves a piece from idea to in progress to ready to published, with dates and subtasks. That is the difference between a strategy that is written and a strategy that happens.",
        },
        {
          claim: "A brand is measured in revenue as well.",
          body: "Products and a price list, landing pages and forms that collect leads, and a CRM with contacts and deals. Plus a dashboard pulling the numbers together across platforms, so you see what worked and not what felt like it worked.",
        },
      ],
    },

    // ----- /waitlist -----
    waitlist: {
      eyebrow: "Waitlist",
      title: "Sign up for Coflow",
      sub: "Coflow is opening gradually. Sign up here and we'll send you an invite when it's your turn.",
      formTitle: "Waitlist form",
      backLabel: "Have an invite code?",
      backCta: "Enter it",
    },

    academy: {
      title: "Coflow Academy",
      heroQuestion: "How can we help?",
      searchPlaceholder: "Search for a question…",
      searchLabel: "Search the academy",
      searchNoResults: "No question matched that.",
      searchNoResultsHint: "Try one word instead of a sentence, or browse the topics below.",
      heroSub:
        "How the system works, area by area. Search a question, or browse by topic.",
      countLine: "{areas} areas · {questions} questions answered",
      areasTitle: "Browse by topic",
      questionsCount: "{n} questions",
      inThisArea: "On this page",
      backToIndex: "All areas",
      openInStudio: "Open in the studio",
      askedBadge: "Asked",
      emptyTitle: "The academy didn't load",
      emptyBody: "Try again in a moment. In the meantime you can open the academy inside the studio.",
      ctaTitle: "Want to see it from the inside?",
      ctaBody: "The academy is in the product too, with a direct link to every screen an answer mentions.",
      ctaButton: "Go to the studio",
    },
    footer: {
      tagline: "The business behind your brand. Marketing, sales, client management and tasks in one place.",
      cols: {
        product: "Product",
        company: "Company",
        legal: "Legal",
      },
      productLinks: [
        { label: "Coflow Academy", href: "/academy" },
        { label: "Waitlist", href: "/waitlist" },
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
      ],
      copy: "© {year} Coflow · coflow.social",
      langSwitcher: "עב",
      langSwitcherAria: "החלפה לעברית",
    },
  },
} as const;

export type Dictionary = (typeof DICT)["he"];

export function getDict(locale: Locale): Dictionary {
  return DICT[locale] as Dictionary;
}
