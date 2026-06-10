import type { Locale } from "./locale";

/**
 * All marketing copy in one place. Hebrew is primary (the brand voice is
 * written in Hebrew first, then translated). The `he` shape defines the
 * Dictionary type, so `en` must mirror it key-for-key.
 *
 * Positioning (Instagram-only MVP): the site sells ONE thing — the free
 * Instagram read (the lead magnet). Every primary button does the same
 * single action: start the free read. "How it works" is the only secondary
 * action (a quiet link to the system explainer). No multi-platform "Studio"
 * surface, no testimonials yet. Voice: plain, concrete, a little blunt. No
 * slogans, no em-dashes.
 */
export const DICT = {
  he: {
    nav: {
      howItWorks: "איך זה עובד",
      signIn: "התחברות",
      cta: "לאבחון החינמי",
    },

    hero: {
      eyebrow: "אבחון אינסטגרם חינמי",
      title: "תגלי למה האינסטגרם שלך לא מביא לקוחות.",
      sub: "את מעלה פוסטים כל שבוע, וזה כמעט לא זז. קופלו קוראת את העמוד האמיתי שלך ואומרת לך תוך שתי דקות מה מבריח אנשים בשקט, ומה הדבר הראשון לתקן. בחינם.",
      cta: "לאבחון החינמי",
      micro: "רק שם המשתמש. בלי הרשמה, בלי כרטיס.",
    },

    problem: {
      title: "נשמע מוכר?",
      lines: [
        "את מעלה שלושה פוסטים בשבוע, ואותם עשרים אנשים עושים לייק כל פעם.",
        "את יושבת שעה על קופי, ומקבלת שנים עשר לייקים ואפס פניות.",
        "אנשים עוקבים, ואז כלום. אין שאלות, אין לקוחות.",
        "את פותחת את הפיד של עצמך וכבר לא בטוחה מה את בכלל מוכרת.",
      ],
      reframe:
        "כלום מזה לא אומר שאת לא טובה בזה. זה אומר שדבר אחד ספציפי בעמוד עומד בדרך. האבחון מוצא אותו.",
    },

    value: {
      eyebrow: "מה את מקבלת",
      title: "כל זה תוך שתי דקות, על העמוד האמיתי שלך.",
      items: [
        {
          title: "מה אנשים באמת חושבים שאת עושה",
          body: "ברגע שהם נוחתים על העמוד, במשפט אחד. בדרך כלל זה לא מה שהתכוונת.",
        },
        {
          title: "אילו פוסטים מושכים אנשים פנימה, ואילו מאבדים אותם בשקט",
          body: "מוצג על הפוסטים האמיתיים שלך, לא כתיאוריה.",
        },
        {
          title: "הדבר האחד שעולה לך הכי הרבה עוקבים עכשיו",
          body: "ומה לשנות בו כבר השבוע. לא עשרים דברים. אחד.",
        },
      ],
      grounding: "בנוי מהביו והפוסטים האמיתיים שלך. שני עמודים מקבלים שני אבחונים שונים.",
      cta: "לאבחון החינמי",
    },

    why: {
      eyebrow: "למה לסמוך על זה",
      title: "שונה מכל ״כלי AI״ שניסית.",
      items: [
        {
          title: "זה מסתכל על העמוד האמיתי שלך",
          body: "הביו האמיתי, הפוסטים האחרונים האמיתיים. לא תבנית, לא צ׳קליסט גנרי. ואם משהו חבוי מאחורי ההתחברות של אינסטגרם, זה אומר לך, במקום להמציא.",
        },
        {
          title: "זו שיטה, לא תחושה",
          body: "כל עמוד נקרא על אותם שישה דברים: ברור מה את עושה, מה מייחד אותך, האם את נקראת כמי שמבינה בתחום שלה, למי זה מדבר, מה כל פוסט בא לעשות, ואיך כל זה הופך לכסף.",
        },
        {
          title: "זה אומר לך את החלק הלא נוח",
          body: "מחמאה קל למכור לך. אנחנו מעדיפים לתת לך את הדבר שבאמת תוקע אותך, גם אם זה צורב, כי זה החלק שאפשר לתקן.",
        },
      ],
    },

    bridge: {
      text: "האבחון בחינם, וזו רק ההתחלה. ואם תרצי, קופלו לוקחת את זה הלאה והופכת את זה לתוכנית ולפוסטים אמיתיים בקול שלך.",
      linkLabel: "ככה זה עובד",
    },

    faq: {
      title: "לפני שאת מתחילה",
      items: [
        {
          q: "זה באמת בחינם?",
          a: "כן. האבחון לא עולה כלום ולא צריך כרטיס. המערכת שאת בונה אחריו היא מוצר בתשלום.",
        },
        {
          q: "אני חייבת לחבר את האינסטגרם?",
          a: "לא. מדביקה שם משתמש, ואנחנו קוראים את מה שגלוי. בלי סיסמאות, בלי הרשאות.",
        },
        {
          q: "זו עוד עצה גנרית של AI?",
          a: "לא. זה בנוי מהביו והפוסטים האמיתיים שלך. שני עמודים שונים מקבלים שני אבחונים שונים.",
        },
        {
          q: "ומה עם המידע שלי?",
          a: "אנחנו קוראים את הפרופיל הציבורי שלך כדי להפיק את האבחון. זה הכל.",
        },
      ],
    },

    finalCta: {
      title: "תפסיקי לנחש מה לא בסדר באינסטגרם שלך.",
      sub: "תגלי תוך שתי דקות, בחינם.",
      cta: "לאבחון החינמי",
      micro: "רק שם המשתמש. בלי הרשמה, בלי כרטיס.",
    },

    howItWorks: {
      eyebrow: "איך זה עובד",
      heroTitle: "האבחון החינמי מראה לך את הבעיה. קופלו פותרת אותה איתך.",
      heroSub: "האבחון אומר לך מה תוקע את העמוד. קופלו זה מה שהופך את זה לפוסטים: אסטרטגיה, רעיונות וקופי בקול שלך, על לוח אחד.",
      cta: "לאבחון החינמי",
      stages: [
        {
          title: "את מגלה בדיוק מה תוקע את העמוד מלגדול",
          body: "זה האבחון החינמי. קריאה ישרה של העמוד האמיתי שלך, בשתי דקות.",
        },
        {
          title: "את מפסיקה לנחש מה להעלות",
          body: "שיחה של עשר דקות נותנת לך תשובה ברורה למי העמוד מדבר ואילו סוגי פוסטים באמת עובדים לך. לא קורס, לא תיאוריה.",
        },
        {
          title: "את מתיישבת להעלות ולא נתקעת",
          body: "את מקבלת רעיונות ספציפיים שמתאימים לך, במקום לבהות במלבן ריק.",
        },
        {
          title: "את מפסיקה לשרוף שעה על כל קופי",
          body: "את אומרת בכמה מילים מה בא לך להעביר. קופלו כותבת את הקופי המלא, את שורת הפתיחה ואת ההאשטגים, בקול שלך, לא ברובוטית.",
        },
        {
          title: "את באמת מעלה באופן עקבי",
          body: "לכל פוסט יש מקום: בעבודה, מוכן, עלה. בלי להעלות בהתפרצות ואז להיעלם לשבועיים.",
        },
      ],
      positioning: "לא AI שמפרסם במקומך. אסטרטגית וצוות תוכן ששומרים על הקול ועל ההחלטות שלך.",
    },

    footer: {
      tagline: "מתחילים מאבחון חינמי של האינסטגרם. ממשיכים לאסטרטגיה ולפוסטים בקול שלך.",
      cols: {
        product: "המוצר",
        company: "החברה",
        legal: "משפטי",
      },
      productLinks: [
        { label: "איך זה עובד", href: "/how-it-works" },
        { label: "האבחון החינמי", href: "/how-it-works#stages" },
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
      howItWorks: "How it works",
      signIn: "Log in",
      cta: "Read my page free",
    },

    hero: {
      eyebrow: "FREE INSTAGRAM READ",
      title: "Find out why your Instagram isn't bringing you clients.",
      sub: "You post every week and it barely moves. Coflow reads your real page and tells you, in two minutes, what's quietly pushing people away and the first thing to fix. Free.",
      cta: "Read my page free",
      micro: "Just your @handle. No sign-up, no card.",
    },

    problem: {
      title: "Sound familiar?",
      lines: [
        "You post three times a week, and it's the same twenty people liking it every time.",
        "You spend an hour on a caption, and it gets twelve likes and zero DMs.",
        "People follow you, and then nothing. No questions, no clients.",
        "You open your own feed and you're not even sure what you're selling anymore.",
      ],
      reframe:
        "None of that means you're bad at this. It means one specific thing on your page is in the way. The read finds it.",
    },

    value: {
      eyebrow: "WHAT YOU GET",
      title: "All of this in two minutes, on your real page.",
      items: [
        {
          title: "What people actually think you do",
          body: "The second they land on your page, in one sentence. Usually it's not what you meant.",
        },
        {
          title: "Which posts pull people in, and which lose them in silence",
          body: "Shown on your real posts, not as a theory.",
        },
        {
          title: "The one thing costing you the most followers right now",
          body: "And what to change about it this week. Not twenty things. One.",
        },
      ],
      grounding: "Built from your real bio and posts. Two pages get two different reads.",
      cta: "Read my page free",
    },

    why: {
      eyebrow: "WHY TRUST IT",
      title: "Different from every “AI tool” you've tried.",
      items: [
        {
          title: "It looks at your real page",
          body: "Your actual bio, your actual last posts. Not a template, not a generic checklist. If something is hidden behind Instagram's login, it tells you, instead of inventing it.",
        },
        {
          title: "It's a method, not a vibe",
          body: "Every page gets read on the same six things: is it clear what you do, what makes you different, do you read as someone who knows her field, who it's for, what each post is there to do, and how any of it turns into money.",
        },
        {
          title: "It tells you the uncomfortable part",
          body: "A compliment is easy to sell you. We'd rather hand you the thing that's actually holding you back, even if it stings, because that's the part you can fix.",
        },
      ],
    },

    bridge: {
      text: "The read is free, and it's where it starts. If you want, Coflow takes it from there and turns it into a plan and real posts in your voice.",
      linkLabel: "See how that works",
    },

    faq: {
      title: "Before you start",
      items: [
        {
          q: "Is it really free?",
          a: "Yes. The read costs nothing and needs no card. The system you build after it is a paid product.",
        },
        {
          q: "Do I have to connect my Instagram?",
          a: "No. You paste your handle, we read what's public. No passwords, no permissions.",
        },
        {
          q: "Is this generic AI advice?",
          a: "No. It's built from your real bio and posts. Two different pages get two different reads.",
        },
        {
          q: "What about my data?",
          a: "We read your public profile to produce the read. That's all.",
        },
      ],
    },

    finalCta: {
      title: "Stop guessing what's wrong with your Instagram.",
      sub: "Find out in two minutes, free.",
      cta: "Read my page free",
      micro: "Just your @handle. No sign-up, no card.",
    },

    howItWorks: {
      eyebrow: "HOW IT WORKS",
      heroTitle: "The free read shows you the problem. Coflow fixes it with you.",
      heroSub: "The read tells you what's stopping your page. Coflow is what turns that into posts: strategy, ideas, and captions in your voice, on one board.",
      cta: "Read my page free",
      stages: [
        {
          title: "You find out exactly what's stopping your page from growing",
          body: "That's the free read. An honest look at your real page, in two minutes.",
        },
        {
          title: "You stop guessing what to post",
          body: "A ten minute conversation gives you a clear answer to who your page is for and the few types of posts that actually work for you. No course, no theory.",
        },
        {
          title: "You sit down to post and you're not stuck",
          body: "You get specific ideas that fit you, instead of staring at an empty box.",
        },
        {
          title: "You stop spending an hour on every caption",
          body: "You say in a few words what you want to get across. Coflow writes the full caption, the opening line and the hashtags, in your voice, not in robot.",
        },
        {
          title: "You actually post consistently",
          body: "Every post has a place: in progress, ready, posted. No more posting in bursts and then going quiet for two weeks.",
        },
      ],
      positioning: "Not an AI that posts for you. A strategist and a content team that keep your voice and your decisions.",
    },

    footer: {
      tagline: "Start with a free read of your Instagram. Then a strategy and posts in your voice.",
      cols: {
        product: "Product",
        company: "Company",
        legal: "Legal",
      },
      productLinks: [
        { label: "How it works", href: "/how-it-works" },
        { label: "The free read", href: "/how-it-works#stages" },
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
