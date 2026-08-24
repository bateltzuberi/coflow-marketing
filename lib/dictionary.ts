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
      heroTitle: "מותג אישי אחד. ארבע פלטפורמות. מערכת אחת שמריצה את כולן.",
      heroSub: "Coflow מתחילה מהאסטרטגיה של המותג שלך, והופכת אותה לתוכן שיוצא באמת — באינסטגרם, בפודקאסט, בניוזלטר וביוטיוב — עד המכירה ועד המספרים.",
      cta: "הרשמה עם קוד",
      stepLabel: "שלב",
      steps: [
        {
          name: "פרופיל מותג",
          title: "הכל נשען על מקום אחד שיודע מי את.",
          body: "אבחון של איך המותג נקרא מבחוץ, האסטרטגיה שנגזרת ממנו, הקול שלך, וערכת המותג — צבעים, פונטים, לוגו וגלריה. כל שאר המערכת קוראת מכאן, אז התוכן לא נוצר מאפס בכל פעם.",
        },
        {
          name: "עוגני תוכן",
          title: "2–6 נושאים שחוזרים אליהם, לכל פלטפורמה בנפרד.",
          body: "העוגן הוא מה שאת רוצה שיכירו אותך בזכותו. לכל פלטפורמה העוגנים שלה, הרפרנסים שלה והטמפלטים שלה — כי מה שעובד בקרוסלה לא מה שעובד בפרק פודקאסט.",
        },
        {
          name: "יצירה",
          title: "קרוסלות, ריאלס, גיליונות ותסריטים — בקול שלך.",
          body: "התוכן נכתב מהעוגן ומהקול, לא מפרומפט גנרי: הוק, קופי, פירוק לשקופיות, בחירת מדיה מהגלריה, וטמפלט מעוצב במיתוג שלך.",
        },
        {
          name: "לוח ופרסום",
          title: "כי אסטרטגיה לא שווה כלום אם היא לא יוצאת החוצה.",
          body: "יומן תוכן אחד לכל הפלטפורמות, ולוח שמזיז פריט מרעיון, לעבודה, למוכן, לפורסם. תאריכים, תתי־משימות, ומשימות שלא נופלות בין הכיסאות.",
        },
        {
          name: "מכירה",
          title: "תוכן שנגמר במכירה, לא באוויר.",
          body: "מוצרים ומחירון, דפי נחיתה וטפסים שאוספים לידים, ו-CRM עם אנשי קשר ועסקאות — כדי שהדרך מפוסט ללקוחה תהיה קיימת ולא משוערת.",
        },
        {
          name: "מדידה",
          title: "מה באמת עבד, ולא מה שהרגיש שעבד.",
          body: "לוח בקרה שמאחד את המספרים מכל הפלטפורמות: עוקבים, חשיפה, ביצועי פוסטים ומה בלט בשבוע האחרון — ומזין בחזרה את מה שכדאי לעשות יותר.",
        },
      ],
      authority: {
        title: "בנוי על אסטרטגיית מותג, לא על טריקים של תוכן.",
        p1: "Coflow מבוססת על תהליך אסטרטגי: קודם מבינים איך המותג נראה היום, אחר כך לאן את רוצה לקחת אותו, מזהים את הפער — והופכים את הפער הזה לפעולות ברורות.",
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
      eyebrow: "פתיחה בהזמנה בלבד",
      title: "Coflow נפתחת לקבוצה סגורה.",
      sub: "סטודיו אחד שמריץ את המותג האישי שלך על פני אינסטגרם, פודקאסט, ניוזלטר ויוטיוב. בשלב הזה נכנסים רק עם קוד.",
      codeLabel: "קוד ההזמנה",
      codePlaceholder: "הקוד שקיבלת",
      cta: "כניסה",
      ctaLoading: "בודקת…",
      errInvalid: "הקוד לא תקף. בדקי שהעתקת אותו במלואו.",
      errEmpty: "צריך להזין קוד.",
      errNetwork: "לא הצלחנו לבדוק את הקוד. נסי שוב.",
      priceLine: "€14 לחודש. בלי תקופת ניסיון, בלי התחייבות — אפשר לבטל בכל רגע.",
      noCodeLabel: "אין לך קוד?",
      noCodeCta: "כתבי לנו",
      // Someone can land on the home page without an invite. Sending them
      // away empty-handed wastes the visit — the diagnosis is still free and
      // still open, it just isn't the front door any more.
      noCodeDiagnosisLead: "רוצה בינתיים לראות מה האינסטגרם שלך משדר?",
      noCodeDiagnosisCta: "לאבחון החינמי",

      includesTitle: "מה יש במערכת",
      includes: [
        {
          title: "פרופיל מותג",
          body: "המקום שכל השאר נשען עליו: אבחון של איך המותג נקרא מבחוץ, אסטרטגיה, הקול שלך, וערכת מותג — צבעים, פונטים, לוגו, גלריה.",
        },
        {
          title: "ארבע פלטפורמות במקום אחד",
          body: "אינסטגרם, פודקאסט, ניוזלטר ויוטיוב. לכל אחת עוגני תוכן, טמפלטים, רפרנסים, לוח משלה ואנליטיקס — לא ארבעה כלים נפרדים.",
        },
        {
          title: "יצירה לפי האסטרטגיה שלך",
          body: "קרוסלות, ריאלס, גיליונות ניוזלטר, תסריטים לפרקים — נכתבים מהעוגנים ומהקול שלך, לא מפרומפט גנרי.",
        },
        {
          title: "לוח תוכן ומשימות",
          body: "יומן אחד לכל הפלטפורמות, ולוח שמזיז פריט מרעיון, לעבודה, למוכן, לפורסם. תאריכים ותתי־משימות.",
        },
        {
          title: "מוצרים, משפכים ו-CRM",
          body: "מה את מוכרת, דפי נחיתה וטפסים שאוספים לידים, ואנשי קשר ועסקאות במקום אחד — כדי שתוכן יגמר במכירה ולא באוויר.",
        },
        {
          title: "מדידה",
          body: "לוח בקרה שמאחד את המספרים מכל הפלטפורמות: עוקבים, חשיפה, ביצועי פוסטים, ומה עבד בשבוע האחרון.",
        },
      ],

      whyTitle: "למה בהזמנה בלבד",
      whyBody: "כי בקבוצה קטנה אפשר לשבת על כל מותג ברצינות, לתקן מהר, ולבנות את המערכת סביב מה שבאמת חסר. המחיר הזה הוא מחיר של השלב הזה.",
    },

    footer: {
      tagline: "סטודיו אחד שמריץ את המותג האישי שלך — אסטרטגיה, תוכן, פרסום ומכירה — על פני אינסטגרם, פודקאסט, ניוזלטר ויוטיוב.",
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
      heroTitle: "One personal brand. Four platforms. One system running all of them.",
      heroSub: "Coflow starts from your brand strategy and turns it into content that actually ships — on Instagram, your podcast, your newsletter and YouTube — through to the sale and the numbers.",
      cta: "Sign up with a code",
      stepLabel: "Step",
      steps: [
        {
          name: "Brand profile",
          title: "Everything runs off one place that knows who you are.",
          body: "A diagnosis of how the brand reads from the outside, the strategy that follows from it, your voice, and the brand kit — colors, fonts, logo, gallery. The rest of the system reads from here, so content isn't invented from scratch every time.",
        },
        {
          name: "Content anchors",
          title: "2–6 subjects you keep coming back to, per platform.",
          body: "An anchor is what you want to be known for. Each platform gets its own anchors, references and templates — what works in a carousel isn't what works in a podcast episode.",
        },
        {
          name: "Creation",
          title: "Carousels, reels, issues and scripts — in your voice.",
          body: "Content is written off the anchor and the voice, not off a generic prompt: hook, copy, the slide breakdown, media picked from your gallery, and a template designed in your branding.",
        },
        {
          name: "Calendar and publishing",
          title: "Strategy is worth nothing if it never ships.",
          body: "One content calendar across every platform, and a board that moves a piece from idea to in-progress to ready to published. Dates, subtasks, and nothing falling through the gaps.",
        },
        {
          name: "Selling",
          title: "Content that ends in a sale, not in the air.",
          body: "Products and a price list, landing pages and forms that collect leads, and a CRM with contacts and deals — so the path from a post to a customer exists instead of being assumed.",
        },
        {
          name: "Measurement",
          title: "What actually worked, not what felt like it worked.",
          body: "A dashboard pulling the numbers together across platforms: followers, reach, how posts performed and what stood out last week — feeding back into what to do more of.",
        },
      ],
      authority: {
        title: "Built on brand strategy, not content tricks.",
        p1: "Coflow runs on a strategic process: first understand how the brand looks today, then where you want to take it, identify the gap - and turn that gap into clear actions.",
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
      eyebrow: "Invite-only launch",
      title: "Coflow is opening to a closed group.",
      sub: "One studio running your personal brand across Instagram, podcast, newsletter and YouTube. Right now you get in with a code.",
      codeLabel: "Invite code",
      codePlaceholder: "The code you were sent",
      cta: "Enter",
      ctaLoading: "Checking…",
      errInvalid: "That code isn't valid. Check you copied all of it.",
      errEmpty: "Enter your code first.",
      errNetwork: "We couldn't check that code. Try again.",
      priceLine: "€14/month. No trial, no lock-in — cancel any time.",
      noCodeLabel: "Don't have a code?",
      noCodeCta: "Get in touch",
      noCodeDiagnosisLead: "Want to see what your Instagram is saying in the meantime?",
      noCodeDiagnosisCta: "Run the free diagnosis",

      includesTitle: "What's in the studio",
      includes: [
        {
          title: "Brand profile",
          body: "What everything else runs off: a diagnosis of how the brand reads from the outside, your strategy, your voice, and a brand kit — colors, fonts, logo, gallery.",
        },
        {
          title: "Four platforms, one place",
          body: "Instagram, podcast, newsletter and YouTube. Each with its own content anchors, templates, references, board and analytics — not four separate tools.",
        },
        {
          title: "Content written off your strategy",
          body: "Carousels, reels, newsletter issues, episode scripts — written from your anchors and your voice, not from a generic prompt.",
        },
        {
          title: "A calendar and a board",
          body: "One calendar across every platform, and a board that moves a piece from idea to in-progress to ready to published. Dates and subtasks included.",
        },
        {
          title: "Products, funnels and CRM",
          body: "What you sell, landing pages and forms that collect leads, and contacts and deals in one place — so content ends in a sale instead of in the air.",
        },
        {
          title: "Measurement",
          body: "A dashboard that pulls the numbers together across platforms: followers, reach, how posts performed, and what actually worked last week.",
        },
      ],

      whyTitle: "Why invite-only",
      whyBody: "Because with a small group we can sit on every brand properly, fix things fast, and build the product around what's actually missing. This price belongs to this stage.",
    },

    footer: {
      tagline: "One studio running your personal brand — strategy, content, publishing and sales — across Instagram, podcast, newsletter and YouTube.",
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
