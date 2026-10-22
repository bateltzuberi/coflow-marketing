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
      // Joining = signing up in the Studio.
      cta: "להצטרפות",
      // The same button once the beta has closed (lib/beta-window.ts).
      waitlist: "לרשימת ההמתנה",
      academy: "אקדמיה",
      // The free diagnosis, which used to be the home page.
      diagnosis: "אבחון חינם",
    },

    // ----- /waitlist — where Join goes once the beta closed (2026-10-22) -----
    // The form is the Studio's own waitlist form, so the details land in the
    // CRM with every other contact. Before the close the page sends visitors on
    // to the price card instead (see lib/beta-window.ts).
    waitlist: {
      title: "רשימת המתנה לקופלו",
      sub: "ההרשמה לבטא נסגרה. נרשמים כאן, ואנחנו שולחים הזמנה כשמגיע התור שלך.",
      formTitle: "טופס רשימת המתנה",
      backLabel: "יש לך קוד הזמנה?",
      backCta: "להרשמה עם קוד",
      close: "סגירה",
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
      waitlist: "Waitlist",
      academy: "Academy",
      diagnosis: "Free diagnosis",
    },

    // ----- /waitlist -----
    waitlist: {
      title: "The Coflow waitlist",
      sub: "Beta sign-up has closed. Leave your details here and we'll send you an invite when it's your turn.",
      formTitle: "Waitlist form",
      backLabel: "Have an invite code?",
      backCta: "Sign up with your code",
      close: "Close",
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
