import type { Locale } from "./locale-path";
import type { DiscoveryPage } from "./discovery-content";

export type GuidePage = DiscoveryPage & {
  sources?: { name: string; url: string }[];
  comparison?: { name: string; focus: string; check: string }[];
};
export function getGuide(slug: string, locale: Locale): GuidePage | null {
  const he = locale === "he";
  if (slug === "choose-course-platform") return {
    title: he ? "איך לבחור מערכת לקורסים דיגיטליים" : "How to choose an online course platform",
    description: he ? "השוואה לפי תהליך העבודה: סקולר ורב מסר, Kajabi, systeme.io וקופלו. מה לבדוק בקורסים, משפכים, CRM ו-AI לפני שבוחרים." : "Compare Schooler and Rav Messer, Kajabi, systeme.io and Coflow by workflow. What to check across courses, funnels, CRM and AI before choosing.",
    intro: he ? "המערכת המתאימה תלויה בדרך שבה את מוכרת, לא רק במקום שבו מעלים סרטונים. לפני בחירה, בדקי את כל המסלול: הרשמה, תשלום, גישה לקורס, מיילים וטיפול בלקוחות. המדריך הזה נכתב על ידי קופלו, שמפתחת מוצר בתחום." : "The right platform depends on how you sell, not only where videos are hosted. Check the whole path: signup, payment, course access, email and client follow-up. This guide is published by Coflow, which develops a product in this category.",
    sections: [
      { title: he ? "התחילי מדרך המכירה שלך" : "Start with your sales process", paragraphs: [he ? "קורס שנקנה ישירות צריך דף מכירה, תשלום וגישה שעובדים יחד. תוכנית שנמכרת אחרי שיחה צריכה גם טופס, מעקב אחר הפנייה ולוח עסקאות. אם את כבר עובדת במערכת דיוור, בדקי האם המעבר באמת יחסוך עבודה או רק ייצור פרויקט הגירה." : "A directly purchased course needs a sales page, payment and access that work together. A programme sold after a call also needs a form, follow-up and a deal board. If you already use an email platform, assess whether moving saves work or merely creates a migration project."] },
      { title: he ? "בדיקה מעשית לפני התחייבות" : "Test before committing", paragraphs: [he ? "אל תסתפקי ברשימת יכולות. בחרי קורס אחד ונסי את המסלול כתלמידה וכבעלת העסק. בדקי גם מה קורה כשמשהו משתבש." : "A feature list is not enough. Choose one course and try its flow both as a student and as the business owner. Test what happens when something goes wrong too."], steps: he ? ["צרי שיעור לדוגמה ופתחי אותו במובייל.", "בדקי עברית וכיווניות גם בטופס, במייל ובעמוד התשלום.", "בצעי הרשמה ובדקי שהגישה ניתנת לאדם הנכון.", "ודאי שאת יכולה למצוא את הלקוחה, לייצא מידע ולטפל בביטול.", "בדקי עלויות נוספות, מגבלות ועמלות בתוכנית שמתאימה לך."] : ["Create a sample lesson and open it on mobile.", "Check your language in the form, email and checkout, including RTL where needed.", "Register and verify access is granted to the right person.", "Find the customer, export records and test cancellation handling.", "Check add-ons, limits and transaction fees for the plan you need."] },
      { title: he ? "איפה קופלו נכנסת להשוואה" : "Where Coflow fits", paragraphs: [he ? "קופלו נבנית לעסק שמחבר את המותג, המוצרים, השיווק והלקוחות באותה סביבת עבודה, עם AI שנעזר בפרופיל המותג. מערכת הקורסים עדיין בפיתוח. אם את חייבת להעביר קורס פעיל עכשיו, אל תעברי לפני שבדקת שהדרישות שלך זמינות ושכל מסלול הרכישה והלימוד עובד." : "Coflow is being built for a business that brings its brand, offers, marketing and customers into one workspace, with AI informed by the brand profile. Course building is still in development. If you need to move an active course now, do not migrate until your requirements are available and the purchase and learning flow works."] },
    ],
    comparison: [
      { name: "Schooler / Rav Messer", focus: he ? "קורסים מסונכרנים עם מערכת הדיוור של רב מסר" : "Course delivery synchronised with Rav Messer email marketing", check: he ? "התאמה למערכת הדיוור שלך, לסליקה ולעברית" : "Fit with your email setup, payment provider and language" },
      { name: "Kajabi", focus: he ? "מוצרים מבוססי ידע עם משפכים ואוטומציות" : "Knowledge products with funnels and automations", check: he ? "התוכנית הדרושה, השפה ותהליך המכירה שלך" : "Required plan, language support and your sales process" },
      { name: "systeme.io", focus: he ? "קורסים, משפכים ודיוור באותה פלטפורמה" : "Courses, funnels and email in one platform", check: he ? "מגבלות התוכנית וחוויית הקורס והמעקב" : "Plan limits, learning experience and follow-up workflow" },
      { name: "Coflow", focus: he ? "מותג, מוצרים, שיווק ו-CRM עם AI; קורסים בפיתוח" : "Brand, offers, marketing and CRM with AI; courses in development", check: he ? "זמינות בהזמנה והיכולות שאת צריכה לפני מעבר" : "Invitation access and required capabilities before migrating" },
    ],
    sources: [
      { name: "Schooler / Rav Messer", url: "https://www.responder.co.il/schooler/" },
      { name: "Kajabi funnels", url: "https://www.kajabi.com/features/funnels" },
      { name: "systeme.io features", url: "https://systeme.io/features" },
    ],
    faqs: [
      { q: he ? "האם מערכת עם יותר פיצ׳רים בהכרח עדיפה?" : "Is the platform with more features always better?", a: he ? "לא. עדיפה מערכת שתומכת במסלול המכירה והלימוד שלך ושאת יכולה לתפעל. בדקי את התוכנית בפועל, לא רק את רשימת היכולות הכללית." : "No. Choose a platform that supports your sales and learning flow and that you can operate. Check the actual plan, not only the overall feature list." },
      { q: he ? "האם זו השוואת מחירים?" : "Is this a pricing comparison?", a: he ? "לא. תוכניות, תוספים ומחירים משתנים. ההשוואה מתמקדת בתהליך העבודה; בדקי מחיר ותנאים עדכניים באתר של כל מערכת." : "No. Plans, add-ons and prices change. This comparison focuses on workflows; check each provider's current pricing and terms." },
    ],
  };
  if (slug === "course-sales-funnel") return {
    title: he ? "איך לבנות משפך מכירה לקורס דיגיטלי" : "How to build a sales funnel for an online course",
    description: he ? "דוגמה מעשית למשפך קורס: מוצר, מדריך חינמי, טופס, רצף מיילים ומעקב ב-CRM. מה להכין ומה לבדוק לפני ההשקה." : "A practical course funnel: offer, free guide, form, email sequence and CRM follow-up. What to prepare and test before launching.",
    intro: he ? "התחילי בקורס שאת מוכרת ובצעד שמישהי צריכה לעשות לפני הרכישה. קורס במחיר נגיש יכול להימכר ישירות. תוכנית שמצריכה בדיקת התאמה יכולה להתחיל בפנייה ובשיחה. אין צורך להוסיף שלבים שלא עוזרים לקונה להחליט." : "Start with the course you sell and the step someone needs before buying. A lower-priced course may sell directly. A programme needing a fit check may start with an enquiry and call. Avoid steps that do not help the buyer decide.",
    sections: [
      { title: he ? "דוגמה: מדריך חינמי ואז קורס" : "Example: a free guide followed by a course", paragraphs: [he ? "נניח שאת מלמדת תמחור. המדריך החינמי עוזר לזהות טעות אחת, והקורס מלמד תהליך מלא. בדף המדריך מסבירים מה מקבלים, ובטופס אוספים את המידע הדרוש למסירה ולמעקב. זו דוגמה לתכנון, לא תוצאה של לקוחה." : "Suppose you teach pricing. The free guide helps identify one mistake and the course teaches the full process. The guide page explains what someone gets, and the form collects what is needed for delivery and follow-up. This is a planning example, not a customer result."], steps: he ? ["הגדירי תוצאה וקהל לקורס, ותנאי רכישה ברורים.", "כתבי דף קצר שמסביר את המדריך ואת הקשר שלו לקורס.", "חברי טופס לרשימה ולמוצר, עם הסכמה מתאימה לדיוור.", "שלחי את המדריך, הסבר על יישום שלו, ואז הזמנה רלוונטית לקורס.", "אחרי רכישה, בדקי אישור ותהליך גישה לקורס."] : ["Define the course outcome, audience and clear purchase terms.", "Write a short page explaining the guide and its connection to the course.", "Connect the form to a list and offer, with appropriate email consent.", "Deliver the guide, help the reader use it, then make a relevant course invitation.", "After purchase, verify confirmation and the course access flow."] },
      { title: he ? "מה לשמור ב-CRM" : "What to keep in your CRM", paragraphs: [he ? "שמרי את פרטי הפנייה ואת המוצר הרלוונטי. אם המכירה מצריכה שיחה, תעדי את הצעד הבא ואת מצב העסקה. מי שרק נרשמה למדריך אינה בהכרח עסקה שצריך להתקשר אליה." : "Keep the enquiry details and the relevant offer. If the sale requires a call, record the next step and deal status. A guide subscriber is not automatically a sales enquiry that needs a phone call."] },
      { title: he ? "מה לבדוק לפני שליחת תנועה" : "Before sending traffic", paragraphs: [he ? "עברִי את המסלול בעצמך במובייל. בדקי שהטופס נשלח, שהמייל מגיע, שהקישור נפתח ושאחרי תשלום מתקבלת הגישה הנכונה. בדקי גם מקרה של כתובת שגויה או תשלום שנכשל. רק אחרי שהמסלול עובד אפשר לדעת אם הבעיה בהצעה או בתהליך." : "Walk through the flow on mobile. Verify form submission, email delivery, links and correct access after payment. Also test an incorrect email address or failed payment. A working flow lets you distinguish an offer problem from a process problem."] },
      { title: he ? "איך זה מתחבר לקופלו" : "How this connects to Coflow", paragraphs: [he ? "בקופלו המוצר, הדפים, הטפסים ואנשי הקשר נבנים באותה סביבת עבודה. AI יכול לעזור בטיוטות; את בודקת ומאשרת. בניית הקורסים עדיין בפיתוח, לכן בדקי זמינות לפני שאת בונה על קופלו להשקה פעילה." : "In Coflow, offers, pages, forms and contacts sit in the same workspace. AI can help prepare drafts; you review and approve. Course building is still in development, so confirm availability before depending on Coflow for an active launch."] },
    ],
    faqs: [
      { q: he ? "האם חייבים מדריך חינמי לפני מכירת קורס?" : "Do I need a free guide before selling a course?", a: he ? "לא. אם הקהל מכיר את ההצעה ויכול להחליט על סמך דף המכירה, אפשר להתחיל ברכישה ישירה. מדריך מועיל כשהוא עוזר להבין את הבעיה ואת הצעד הבא." : "No. If the audience knows the offer and can decide from the sales page, direct purchase may be enough. A guide helps when it explains the problem and next step." },
      { q: he ? "האם המשפך יגלה איזה פוסט הביא כל קונה?" : "Will the funnel identify the post behind every buyer?", a: he ? "לא. תהליך הרשמה מסודר אינו מבטיח ייחוס של כל רכישה לפוסט אורגני. התחילי בבדיקת הפעולות שנרשמות במערכת בלי להסיק שהן מסבירות את כל הדרך לרכישה." : "No. An organised signup flow does not guarantee attribution of every purchase to an organic post. Check recorded actions without assuming they explain the entire path to purchase." },
    ], academy: "funnels",
  };
  return null;
}
