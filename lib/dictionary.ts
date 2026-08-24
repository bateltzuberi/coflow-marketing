import type { Locale } from "./locale";

/**
 * All marketing copy in one place, ported 1:1 from the approved copy doc.
 * Hebrew is primary (לשון נקבה); `en` mirrors the `he` shape key-for-key.
 *
 * Positioning: the site sells ONE thing - the free Instagram diagnosis (the
 * lead magnet). Every CTA points only at the diagnosis. Page 1 is the
 * diagnosis landing; Page 2 explains the system but still returns to the
 * diagnosis CTA.
 */
export const DICT = {
  he: {
    nav: {
      howItWorks: "איך Coflow עובדת",
      signIn: "התחברות",
      // The primary button is registration now — the launch is invite-only and
      // the home page is the door.
      cta: "הרשמה עם קוד",
      // The free diagnosis, which used to be the home page.
      diagnosis: "אבחון חינם",
    },








    howItWorks: {
      heroTitle: "מערכת לניהול מותג, לא עוד כלי שמייצר פוסטים.",
      heroSub: "Coflow מגדירה את המותג שלך פעם אחת, ומשם מנהלת את כל מה שנגזר ממנו: תוכן בארבע פלטפורמות, לוח שמוציא אותו החוצה, ומכירה בסוף.",
      cta: "הרשמה עם קוד",
      stepLabel: "שלב",
      steps: [
        {
          name: "פרופיל מותג",
          title: "הכל נשען על מקום אחד שיודע מי את.",
          body: "אבחון של איך המותג נקרא מבחוץ, האסטרטגיה שנגזרת ממנו, הקול שלך, וערכת המותג: צבעים, פונטים, לוגו וגלריה. כל שאר המערכת קוראת מכאן, אז התוכן לא נוצר מאפס בכל פעם.",
        },
        {
          name: "עוגני תוכן",
          title: "2–6 נושאים שחוזרים אליהם, לכל פלטפורמה בנפרד.",
          body: "העוגן הוא מה שאת רוצה שיכירו אותך בזכותו. לכל פלטפורמה העוגנים שלה, הרפרנסים שלה והטמפלטים שלה, כי מה שעובד בקרוסלה לא מה שעובד בפרק פודקאסט.",
        },
        {
          name: "יצירה",
          title: "AI שלא יודע מי את יכתוב תוכן של מישהי אחרת.",
          body: "לכן הכתיבה יוצאת מהעוגן ומהקול שלך, לא מפרומפט ריק. הוק, קופי, פירוק לשקופיות, בחירת מדיה מהגלריה, וטמפלט מעוצב במיתוג שלך. קרוסלה, ריל, גיליון ניוזלטר או תסריט לפרק.",
        },
        {
          name: "לוח ופרסום",
          title: "אסטרטגיה שנשארת במצגת לא שווה כלום.",
          body: "יומן תוכן אחד לכל הפלטפורמות, ולוח שמזיז פריט מרעיון לעבודה, למוכן ולפורסם. תאריכים ותתי משימות, כדי שדברים לא נתקעים בטיוטות.",
        },
        {
          name: "מכירה",
          title: "תוכן שנגמר במכירה, לא באוויר.",
          body: "מוצרים ומחירון, דפי נחיתה וטפסים שאוספים לידים, ו-CRM עם אנשי קשר ועסקאות. כך הדרך מפוסט ללקוחה קיימת במערכת ולא משוערת.",
        },
        {
          name: "מדידה",
          title: "מה באמת עבד, ולא מה שהרגיש שעבד.",
          body: "לוח בקרה שמאחד את המספרים מכל הפלטפורמות: עוקבים, חשיפה, ביצועי פוסטים ומה בלט בשבוע האחרון. משם רואים מה כדאי לעשות יותר.",
        },
      ],
      authority: {
        title: "בנוי על אסטרטגיית מותג, לא על טריקים של תוכן.",
        p1: "Coflow מבוססת על תהליך אסטרטגי: קודם מבינים איך המותג נראה היום, אחר כך לאן את רוצה לקחת אותו, מזהים את הפער והופכים אותו לפעולות ברורות.",
        p2: "זה אומר שהתוכן שלך לא נוצר מטרנדים בלבד, מטמפלטים או מפרומפטים רנדומליים. הוא נוצר מתוך החיבור בין:",
        bullets: [
          "איך המותג שלך נתפס עכשיו",
          "על מה את רוצה שיכירו אותך",
          "את מי את רוצה למשוך",
          "מה צריך להפוך לברור יותר",
          "איזה תוכן באמת יקדם את המותג קדימה",
        ],
        closeA: "לכן Coflow לא רק מייצרת פוסטים.",
        closeB: "היא עוזרת לך לבנות מותג שאנשים מבינים, סומכים עליו - וקונים ממנו.",
        cta: "הרשמה עם קוד",
      },
    },

    // ----- /join — the invite-only launch landing -----
    // Coflow opens to a closed group first. This page is the door: a code, an
    // account, €14/month. No free tier, no diagnosis first — the diagnosis is
    // one of the things waiting inside.
    join: {
      // The category, said plainly. Everything under it is an argument for why
      // a brand-management system is a different thing from a content tool.
      eyebrow: "מערכת לניהול מותג עם AI",
      title: "מותג לא נבנה מעוד פוסטים.",
      sub: "Coflow מחזיקה את ההגדרה של המותג שלך במקום אחד, וכל תוכן שנוצר בה נכתב ממנה. אינסטגרם, פודקאסט, ניוזלטר ויוטיוב.",
      inviteNote: "בשלב הזה נכנסים עם קוד.",

      codeLabel: "קוד הזמנה",
      codePlaceholder: "הקוד שקיבלת",
      cta: "כניסה",
      ctaLoading: "בודקת…",
      errInvalid: "הקוד לא תקף. בדקי שהעתקת אותו במלואו.",
      errEmpty: "צריך להזין קוד.",
      errNetwork: "לא הצלחנו לבדוק את הקוד. נסי שוב.",
      priceLine: "14 יורו לחודש. בלי תקופת ניסיון, בלי התחייבות, אפשר לבטל בכל רגע.",
      noCodeLabel: "אין לך קוד?",
      noCodeCta: "כתבי לנו",

      // Four claims. Each one takes a position you could argue with, and then
      // says what in the system makes it true. No claim without its mechanism.
      messagesTitle: "למה מערכת ולא עוד כלי תוכן",
      messages: [
        {
          claim: "הבעיה היא לא כמה תוכן את מוציאה.",
          body: "היא שאין מקום אחד שיודע מה המותג שלך אומר, ולכן כל פוסט מתחיל מאפס ושום דבר לא מצטבר. ב-Coflow יש פרופיל מותג אחד: אבחון של איך את נקראת מבחוץ, האסטרטגיה, הקול וערכת המותג. כל שאר המערכת קוראת משם.",
        },
        {
          claim: "AI שלא יודע מי את יכתוב לך תוכן של מישהי אחרת.",
          body: "לכן התוכן כאן לא נכתב מפרומפט ריק. לכל פלטפורמה יש עוגני תוכן, רפרנסים וטמפלטים משלה, והכתיבה יוצאת מהם ומהקול שלך. קרוסלה, ריל, גיליון ניוזלטר או תסריט לפרק.",
        },
        {
          claim: "אסטרטגיה שנשארת במצגת לא שווה כלום.",
          body: "יומן תוכן אחד לכל הפלטפורמות, ולוח שמזיז פריט מרעיון לעבודה, למוכן ולפורסם. תאריכים ותתי משימות, כדי שדברים לא נתקעים בטיוטות.",
        },
        {
          claim: "תוכן שלא נגמר במכירה הוא תחביב.",
          body: "יש כאן מוצרים ומחירון, דפי נחיתה וטפסים שאוספים לידים, ו-CRM עם אנשי קשר ועסקאות. ולוח בקרה שמראה מה באמת עבד: עוקבים, חשיפה וביצועי פוסטים בכל הפלטפורמות.",
        },
      ],

      whyTitle: "למה בהזמנה בלבד",
      whyBody: "כי בקבוצה קטנה אפשר לשבת על כל מותג ברצינות, לתקן מהר, ולבנות את המערכת סביב מה שבאמת חסר. המחיר הזה הוא מחיר של השלב הזה.",
    },

    footer: {
      tagline: "מערכת לניהול מותג עם AI. אסטרטגיה, תוכן, פרסום ומכירה, על פני אינסטגרם, פודקאסט, ניוזלטר ויוטיוב.",
      cols: {
        product: "המוצר",
        company: "החברה",
        legal: "משפטי",
      },
      productLinks: [
        { label: "איך Coflow עובדת", href: "/how-it-works" },
        { label: "הרשמה עם קוד", href: "/" },
      ],
      companyLinks: [
        { label: "עלינו", href: "/about" },
        { label: "צרי קשר", href: "/contact" },
      ],
      legalLinks: [
        { label: "פרטיות", href: "/privacy" },
        { label: "תנאי שימוש", href: "/terms" },
      ],
      copy: "© {year} Coflow · coflow.social",
      langSwitcher: "EN",
      langSwitcherAria: "Switch to English",
    },
  },

  en: {
    nav: {
      howItWorks: "How Coflow works",
      signIn: "Log in",
      cta: "Sign up with a code",
      diagnosis: "Free diagnosis",
    },








    howItWorks: {
      heroTitle: "A brand-management system, not another tool that generates posts.",
      heroSub: "Coflow defines your brand once, then runs everything that follows from it: content on four platforms, a board that ships it, and a sale at the end.",
      cta: "Sign up with a code",
      stepLabel: "Step",
      steps: [
        {
          name: "Brand profile",
          title: "Everything runs off one place that knows who you are.",
          body: "A diagnosis of how the brand reads from the outside, the strategy that follows from it, your voice, and the brand kit: colors, fonts, logo, gallery. The rest of the system reads from here, so content isn't invented from scratch every time.",
        },
        {
          name: "Content anchors",
          title: "2–6 subjects you keep coming back to, per platform.",
          body: "An anchor is what you want to be known for. Each platform gets its own anchors, references and templates, because what works in a carousel is not what works in a podcast episode.",
        },
        {
          name: "Creation",
          title: "An AI that doesn't know who you are will write someone else's content.",
          body: "So the writing comes off your anchor and your voice, not an empty prompt. Hook, copy, the slide breakdown, media picked from your gallery, and a template designed in your branding. A carousel, a reel, a newsletter issue, an episode script.",
        },
        {
          name: "Calendar and publishing",
          title: "A strategy that stays in a deck is worth nothing.",
          body: "One content calendar across every platform, and a board that moves a piece from idea to in progress to ready to published. Dates and subtasks, so things don't die in drafts.",
        },
        {
          name: "Selling",
          title: "Content that ends in a sale, not in the air.",
          body: "Products and a price list, landing pages and forms that collect leads, and a CRM with contacts and deals. The path from a post to a customer exists in the system instead of being assumed.",
        },
        {
          name: "Measurement",
          title: "What actually worked, not what felt like it worked.",
          body: "A dashboard pulling the numbers together across platforms: followers, reach, how posts performed and what stood out last week. That is where you see what to do more of.",
        },
      ],
      authority: {
        title: "Built on brand strategy, not content tricks.",
        p1: "Coflow runs on a strategic process: first understand how the brand looks today, then where you want to take it, identify the gap and turn it into clear actions.",
        p2: "Which means your content isn't generated from trends alone, from templates, or from random prompts. It comes from the connection between:",
        bullets: [
          "How your brand is perceived right now",
          "What you want to be known for",
          "Who you want to attract",
          "What needs to become clearer",
          "Which content will actually move the brand forward",
        ],
        closeA: "That's why Coflow doesn't just produce posts.",
        closeB: "It helps you build a brand people understand, trust - and buy from.",
        cta: "Sign up with a code",
      },
    },

    // ----- /join — the invite-only launch landing -----
    join: {
      eyebrow: "An AI brand-management system",
      title: "A brand isn't built out of more posts.",
      sub: "Coflow holds the definition of your brand in one place, and every piece of content it writes comes off that. Instagram, podcast, newsletter, YouTube.",
      inviteNote: "Right now you get in with a code.",

      codeLabel: "Invite code",
      codePlaceholder: "The code you were sent",
      cta: "Enter",
      ctaLoading: "Checking…",
      errInvalid: "That code isn't valid. Check you copied all of it.",
      errEmpty: "Enter your code first.",
      errNetwork: "We couldn't check that code. Try again.",
      priceLine: "14 euro a month. No trial, no lock-in, cancel any time.",
      noCodeLabel: "Don't have a code?",
      noCodeCta: "Get in touch",

      messagesTitle: "Why a system and not another content tool",
      messages: [
        {
          claim: "The problem isn't how much content you publish.",
          body: "It's that nothing holds what your brand actually says, so every post starts from zero and none of it adds up. Coflow keeps one brand profile: a diagnosis of how you read from the outside, the strategy, the voice and the brand kit. Everything else reads from there.",
        },
        {
          claim: "An AI that doesn't know who you are will write someone else's content.",
          body: "So nothing here is written from an empty prompt. Every platform has its own content anchors, references and templates, and the writing comes off those and off your voice. A carousel, a reel, a newsletter issue, an episode script.",
        },
        {
          claim: "A strategy that stays in a deck is worth nothing.",
          body: "One content calendar across every platform, and a board that moves a piece from idea to in progress to ready to published. Dates and subtasks, so things don't die in drafts.",
        },
        {
          claim: "Content that doesn't end in a sale is a hobby.",
          body: "There are products and a price list, landing pages and forms that collect leads, and a CRM with contacts and deals. Plus a dashboard showing what actually worked: followers, reach and post performance across platforms.",
        },
      ],

      whyTitle: "Why invite-only",
      whyBody: "Because with a small group we can sit on every brand properly, fix things fast, and build the product around what's actually missing. This price belongs to this stage.",
    },

    footer: {
      tagline: "An AI brand-management system. Strategy, content, publishing and sales, across Instagram, podcast, newsletter and YouTube.",
      cols: {
        product: "Product",
        company: "Company",
        legal: "Legal",
      },
      productLinks: [
        { label: "How Coflow works", href: "/how-it-works" },
        { label: "Sign up with a code", href: "/" },
      ],
      companyLinks: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
      legalLinks: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
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
