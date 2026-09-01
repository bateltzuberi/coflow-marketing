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
      heroTitle: "מה נכלל בניהול מותג.",
      heroSub: "מהגדרת המותג ועד המכירה, בשישה שלבים שיושבים באותה מערכת.",
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
      title: "כל המותג שלך במקום אחד.",
      sub: "מערכת אחת שמנהלת את המותג האישי שלך מהאסטרטגיה ועד המכירה. אינסטגרם, פודקאסט, ניוזלטר ויוטיוב, כולם מאותה הגדרה.",
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
      title: "אין לך קוד הזמנה?",
      sub: "Coflow נפתחת כרגע לקבוצה סגורה. השאירי פרטים ונעדכן אותך כשייפתח מקום.",
      formTitle: "טופס רשימת המתנה",
      backLabel: "יש לך כבר קוד?",
      backCta: "להרשמה",
    },

    footer: {
      tagline: "מערכת לניהול מותג עם AI. כל המותג שלך במקום אחד, מהאסטרטגיה ועד המכירה.",
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
      heroTitle: "What managing a brand covers.",
      heroSub: "From defining the brand through to the sale, in six steps that live in the same system.",
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
      title: "Your whole brand in one place.",
      sub: "One system running your personal brand from the strategy through to the sale. Instagram, podcast, newsletter and YouTube, all off the same definition.",
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
      title: "Don't have an invite code?",
      sub: "Coflow is open to a closed group right now. Leave your details and we'll let you know when a place opens up.",
      formTitle: "Waitlist form",
      backLabel: "Already have a code?",
      backCta: "Sign up",
    },

    footer: {
      tagline: "An AI brand-management system. Your whole brand in one place, from the strategy through to the sale.",
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
