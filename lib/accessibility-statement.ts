// Coflow's accessibility statement for coflow.social, in Hebrew and English.
// Drawn by components/legal-page.tsx like the terms and the privacy policy,
// but not one of the lawyer's documents (lib/legal-content.ts): Coflow's own
// words about what the site does, kept honest — the site is BUILT to the
// standard, not audited against it. Update `updated` with any change.
//
// The pages Coflow's customers publish (<name>.coflow.website) carry their own
// statement, in the owner's name (shebossit-cms, /u/<name>/accessibility).

import type { LegalDoc } from "./legal-content";

export const ACCESSIBILITY_STATEMENT: Record<"he" | "en", LegalDoc> = {
  he: {
    title: "הצהרת נגישות",
    updated: "עודכן לאחרונה: 23 באוקטובר 2026",
    blocks: [
      { t: "p", x: "אנחנו בקופלו רוצות שכל מי שמגיעה לאתר, כולל אנשים עם מוגבלות, תוכל לקרוא אותו, לנווט בו ולהשתמש בו בקלות." },
      { t: "h2", x: "התקן" },
      {
        t: "p",
        x: "האתר coflow.social נבנה בכוונה לעמוד בתקן הישראלי ת״י 5568 ברמה AA, המבוסס על הנחיות WCAG, ובתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013. האתר לא עבר בדיקה של מורשה נגישות.",
      },
      { t: "h2", x: "מה נעשה באתר" },
      {
        t: "ul",
        items: [
          "אפשר לנווט בכל האתר במקלדת בלבד (Tab, Enter, Esc), עם סימון ברור של המקום שבו נמצאים.",
          "תפריט נגישות בפינת המסך: הגדלת טקסט, ניגודיות גבוהה, עצירת אנימציות, הדגשת קישורים, גופן קריא וריווח טקסט. הבחירה נשמרת בדפדפן.",
          "האתר מכבד את הגדרות המכשיר: הגדלת טקסט ובקשה לפחות תנועה.",
          "לכל עמוד מוגדרים שפה וכיוון קריאה (עברית מימין לשמאל, אנגלית משמאל לימין), כך שתוכנות הקראה מקריאות נכון.",
          "האתר מותאם לטלפון, לטאבלט ולמחשב.",
        ],
      },
      { t: "h2", x: "מה עוד לא מונגש במלואו" },
      {
        t: "ul",
        items: [
          "צילומי מסך מהמוצר באקדמיה ובמדריכים: הטקסט שבתוך התמונה לא תמיד מוקרא במלואו.",
          "דפים של שירותים אחרים שהאתר מעביר אליהם, כמו דף התשלום, נגישים לפי מה שהשירות שמספק אותם מאפשר.",
        ],
      },
      { t: "h2", x: "הדפים שלקוחות קופלו בונים" },
      {
        t: "p",
        x: "דפי נחיתה, לינק בביו, דפי פודקאסט, טפסים ודפי קביעת פגישה שלקוחות קופלו מפרסמים כוללים את אותו תפריט נגישות, והצהרת נגישות משלהם עם פרטי הקשר של בעל הדף.",
      },
      { t: "h2", x: "פנייה בנושא נגישות" },
      { t: "p", x: "נתקלת בבעיה, או שמשהו באתר לא נגיש לך? כתבי לנו ונטפל בזה." },
      { t: "p", label: "אימייל", x: "contact@shebossit.com" },
      { t: "p", label: "החברה", x: "SheBossIt LTD" },
    ],
  },
  en: {
    title: "Accessibility statement",
    updated: "Last updated: October 23, 2026",
    blocks: [
      { t: "p", x: "At Coflow we want everyone who comes to this site, including people with disabilities, to be able to read it, find their way around it and use it easily." },
      { t: "h2", x: "Standard" },
      {
        t: "p",
        x: "coflow.social is built to meet Israeli Standard IS 5568 at level AA, based on the WCAG guidelines, and the Israeli accessibility of service regulations (2013). The site has not been audited by a certified accessibility examiner.",
      },
      { t: "h2", x: "What the site does" },
      {
        t: "ul",
        items: [
          "The whole site can be used with the keyboard alone (Tab, Enter, Esc), with a clear mark of where you are.",
          "An accessibility menu in the corner of the screen: larger text, high contrast, stop animations, underlined links, a readable font and text spacing. Your choice is kept in your browser.",
          "The site follows your device's settings for larger text and reduced motion.",
          "Every page declares its language and reading direction (Hebrew right to left, English left to right), so screen readers read it correctly.",
          "The site works on phones, tablets and computers.",
        ],
      },
      { t: "h2", x: "What may not be fully accessible yet" },
      {
        t: "ul",
        items: [
          "Product screenshots in the academy and the guides: the text inside a picture is not always read out in full.",
          "Pages of other services the site sends you to, such as the payment page, are as accessible as the service providing them makes them.",
        ],
      },
      { t: "h2", x: "Pages Coflow's customers build" },
      {
        t: "p",
        x: "The landing pages, link-in-bio pages, podcast pages, forms and booking pages Coflow's customers publish carry the same accessibility menu, and an accessibility statement of their own with the page owner's contact details.",
      },
      { t: "h2", x: "Accessibility contact" },
      { t: "p", x: "Found a problem, or something on the site you can't use? Write to us and we'll fix it." },
      { t: "p", label: "Email", x: "contact@shebossit.com" },
      { t: "p", label: "Company", x: "SheBossIt LTD" },
    ],
  },
};
