import type { Locale } from "./locale-path";

export type ContentSection = { title: string; paragraphs: string[]; steps?: string[] };
export type DiscoveryPage = {
  title: string;
  description: string;
  intro: string;
  sections: ContentSection[];
  faqs: { q: string; a: string }[];
  academy?: string;
};
export const SOLUTION_SLUGS = ["digital-courses", "sales-funnels", "crm", "ai-brand-management"] as const;
export const GUIDE_SLUGS = ["choose-course-platform", "course-sales-funnel"] as const;

const solutions: Record<string, Record<Locale, DiscoveryPage>> = {
  "digital-courses": {
    he: {
      title: "קורסים דיגיטליים והשיווק שמסביבם",
      description: "קופלו מחברת את בניית הקורס הדיגיטלי למוצר, לדף ההרשמה וללקוחות. הכירי את הפתרון שנבנה ליוצרות קורסים.",
      intro: "קורס דיגיטלי הוא מוצר בעסק שלך. בקופלו אנחנו בונים את הקורס בתוך אותה מערכת שבה את מנהלת את המוצר, הפניות והלקוחות, כדי שלא תצטרכי להקים את העסק מחדש בכל כלי.",
      sections: [
        { title: "מה נבנה בתוך הקורס", paragraphs: ["פרקים ושיעורים, עמוד קורס, הגדרות גישה ומחיר, ורשימת תלמידות. הקורס משויך למוצר שאת מוכרת, ולא נשאר ספריית סרטונים נפרדת.", "בניית הקורסים עדיין בפיתוח. קופלו נפתחת בהדרגה ובהזמנה; לפני הצטרפות בדקי שהיכולות שאת צריכה זמינות בחשבון שלך."] },
        { title: "מה קורה לפני ההרשמה", paragraphs: ["אם צריך לאסוף מתעניינות לפני המכירה, אפשר להתחיל בדף נחיתה ובטופס. מי שממלאת אותו נשמרת כאיש קשר, ורצף מיילים יכול להמשיך את השיחה. אם המוצר מצריך שיחת התאמה, הפנייה יכולה להמשיך לעסקה ב-CRM."] },
        { title: "מתחילים במה שאת מוכרת", paragraphs: ["הגדירי למי הקורס מיועד, מה הוא מלמד ומה המחיר. משם בונים את הקורס ואת הדרך שבה מצטרפים אליו. ה-AI עוזר להכין טיוטות; את בודקת את התוכן, את ההבטחה ואת המסלול לפני הפרסום."], steps: ["הגדירי את הקורס כמוצר.", "סדרי את הפרקים ואת השיעורים.", "בחרי הרשמה ישירה או איסוף מתעניינות לפני המכירה.", "בדקי את הדף, הטופס, התשלום והגישה כתלמידה לפני ההשקה."] },
      ],
      faqs: [
        { q: "האם מערכת הקורסים כבר פתוחה לכולן?", a: "לא. מערכת הקורסים נמצאת בפיתוח, וקופלו נפתחת בהדרגה ובהזמנה. אפשר להירשם לרשימת ההמתנה ולבדוק זמינות לפני הצטרפות." },
        { q: "האם חייבים קורס כדי להשתמש בקופלו?", a: "לא. המוצר שלך יכול להיות גם ליווי, פגישה, סדנה או מוצר דיגיטלי. הקורס הוא אחד מסוגי המוצרים שסביבם נבנית המערכת." },
        { q: "האם ה-AI מחליף את התוכן שאני מלמדת?", a: "לא. את אחראית לידע ולתוצאה שהקורס מבטיח. AI יכול לעזור בטיוטות ובארגון, והאישור המקצועי נשאר אצלך." },
      ], academy: "products",
    },
    en: {
      title: "Digital courses and the business around them",
      description: "Coflow connects digital courses with your offer, signup pages and customers. Explore the course platform being built for creators.",
      intro: "A digital course is an offer in your business. We are building courses inside the same system that holds your offers, enquiries and customers, so each new tool does not mean rebuilding the business around it.",
      sections: [
        { title: "What is being built", paragraphs: ["Chapters and lessons, a course page, access and price settings, and student records. A course belongs to the offer you sell rather than sitting in a separate video library.", "Course building is still in development. Coflow opens gradually by invitation. Check that the capabilities you need are available in your account before joining."] },
        { title: "Before someone enrols", paragraphs: ["When a course needs an interested audience before a sale, start with a landing page and form. Each submission becomes a contact, and an email sequence can continue the conversation. Offers that need a fit call can continue as deals in the CRM."] },
        { title: "Start with your offer", paragraphs: ["Define who the course serves, what it teaches and its price. Then build the course and the path to joining it. AI helps prepare drafts; you review the content, promise and flow before publishing."], steps: ["Define the course as an offer.", "Organise chapters and lessons.", "Choose direct enrolment or a lead collection step before the sale.", "Test the page, form, payment and access as a student before launch."] },
      ],
      faqs: [
        { q: "Is course building open to everyone?", a: "No. Course building is in development and Coflow opens gradually by invitation. Join the waitlist and confirm availability before joining." },
        { q: "Do I need a course to use Coflow?", a: "No. Your offer can also be coaching, an appointment, a workshop or a digital product. A course is one of the offer types the system is built around." },
        { q: "Does AI replace what I teach?", a: "No. You are responsible for the expertise and outcome your course promises. AI can help organise and draft; professional review stays with you." },
      ], academy: "products",
    },
  },
  "sales-funnels": {
    he: {
      title: "משפך שיווקי שמחובר למוצר וללקוחות",
      description: "בני דף נחיתה, טופס ורצף מיילים בקופלו, וחברי אותם למוצר ולאנשי הקשר שלך. כך מתכננים מה קורה אחרי הפנייה.",
      intro: "משפך בקופלו מחבר את המקום שבו משאירים פרטים למה שקורה אחר כך: איש קשר, רשימת תפוצה, מיילים ועסקה. המוצר שאת מוכרת קובע לאן המסלול מוביל.",
      sections: [
        { title: "מה קורה אחרי מילוי הטופס", paragraphs: ["הטופס מחובר למוצר ולרשימת תפוצה. הפנייה נשמרת עם התשובות שלה, ורצף אוטומטי יכול לשלוח מייל, להמתין, להוסיף תגית ולהעביר לרשימה. כשצריך למכור בשיחה, עסקה בלוח עוזרת לך להמשיך את הטיפול."] },
        { title: "דוגמה: מדריך חינמי שמוביל לליווי", paragraphs: ["הגולשת מגיעה לדף המדריך ומשאירה מייל. היא מקבלת את המדריך, ובהמשך הזמנה לשיחת התאמה. את רואה את פרטי הפנייה ב-CRM ומעדכנת את מצב העסקה לפי מה שקרה בשיחה. זה מסלול לדוגמה, לא הבטחה למכירות."], steps: ["הגדירי את הליווי כמוצר ואת המדריך כשלב מקדים.", "בני דף וטופס עם השדות שאת באמת צריכה.", "כתבי רצף שמוסר את המדריך ומסביר את הצעד הבא.", "בדקי את הרצף בכתובת מייל שלך לפני הפעלה."] },
        { title: "איפה AI עוזר", paragraphs: ["הוא יכול לעזור בהכנת טיוטות לדף ולמיילים מתוך המידע על המותג וההצעה שלך. את מחליטה מה לפרסם ומתי. הפרסום, קבוצת הוואטסאפ והשיחות עם הלקוחות אינם הופכים אוטומטית לחלק מהמשפך."] },
      ], faqs: [
        { q: "מה ההבדל בין דף נחיתה למשפך?", a: "דף נחיתה הוא עמוד שבו מבצעים פעולה, כמו הרשמה. משפך כולל גם את ההמשך: המיילים, הרשימות והפעולות שנקבעו אחרי ההרשמה." },
        { q: "האם קופלו מנהלת בשבילי פרסום או קבוצות וואטסאפ?", a: "לא. המשפך המתואר כאן מתחיל בתוך המערכת אחרי השארת פרטים. מודעות והפעילות בקבוצה נשארות מחוץ לו." },
      ], academy: "funnels",
    },
    en: {
      title: "Sales funnels connected to your offers and CRM",
      description: "Build landing pages, forms and email sequences in Coflow, connected to your offers and contacts. Plan what happens after an enquiry.",
      intro: "A Coflow funnel connects the place where someone leaves their details to what happens next: a contact, mailing list, emails and a deal. The offer you sell determines where the path leads.",
      sections: [
        { title: "After the form submission", paragraphs: ["Attach the form to an offer and mailing list. The enquiry is saved with its answers. An automated sequence can send an email, wait, add a tag or move a person to another list. When a sale needs a conversation, a deal on the board helps you follow up."] },
        { title: "Example: a free guide leading to coaching", paragraphs: ["A visitor leaves an email on the guide page, receives the guide and then an invitation to a fit call. You keep the enquiry in your CRM and update the deal according to the conversation. This is an illustrative flow, not a promise of sales."], steps: ["Define coaching as the offer and the guide as an earlier step.", "Build a page and form with the fields you actually need.", "Write a sequence that delivers the guide and explains the next step.", "Test the flow with your own email address before enabling it."] },
        { title: "Where AI helps", paragraphs: ["AI can help draft pages and emails from your brand and offer information. You decide what to publish and when. Advertising, WhatsApp groups and customer conversations do not automatically become part of the funnel."] },
      ], faqs: [
        { q: "How is a landing page different from a funnel?", a: "A landing page is where someone takes an action such as signing up. A funnel also includes the follow-up emails, lists and actions configured after signup." },
        { q: "Does Coflow manage ads or WhatsApp groups?", a: "No. The flow described here starts inside the system after someone leaves their details. Ads and group activity remain outside it." },
      ], academy: "funnels",
    },
  },
  crm: {
    he: {
      title: "ניהול לידים ולקוחות לעסק של קורסים וליווי",
      description: "CRM בקופלו מחבר טפסים, אנשי קשר, עסקאות ולקוחות פעילות למוצרים שלך. ניהול הפניות והמכירות באותו מקום.",
      intro: "ה-CRM של קופלו מרכז את האנשים בעסק שלך: מי השאירה פרטים, מה היא מחפשת, לאיזה מוצר היא מתאימה ואיפה עומדת השיחה איתה. הטפסים, העסקאות והלקוחות נשענים על אותם אנשי קשר.",
      sections: [
        { title: "מטופס לפנייה שאפשר לטפל בה", paragraphs: ["התשובות שנמסרו בטופס נשמרות עם הפנייה. בדרך כלל נפתחת גם עסקה בלוח; טופס הרשמה לניוזלטר אינו פותח עסקה. כך את יכולה להפריד בין מי שביקשה לקנות לבין מי שרק רוצה לקרוא."] },
        { title: "מכירה ולקוחה פעילה הם שני שלבים", paragraphs: ["עסקה מתארת את תהליך המכירה. אחרי שסוגרים אותה, צריך גם לנהל את העבודה עם הלקוחה. קופלו מפרידה בין לוח העסקאות ללקוחות הפעילות, כדי שמכירה שסגרת לא תיעלם מהטיפול."] },
        { title: "מה כדאי לסדר לפני שמתחילים", paragraphs: ["בחרי שלבים שמתארים את המכירה שלך, והגדירי למי שייכת כל פנייה ומה הצעד הבא. המערכת מחזיקה את המידע; את עדיין צריכה לעדכן את מה שקרה בשיחות ובמכירות שבוצעו מחוץ למערכת."], steps: ["הגדירי את המוצרים והשירותים שאת מוכרת.", "חברי את טפסי הפנייה למוצר המתאים.", "עדכני את שלב העסקה ואת המעקב אחרי השיחה.", "בדקי שללקוחה שסגרה יש גם מקום בניהול הלקוחות הפעילות."] },
      ], faqs: [
        { q: "האם איש קשר הוא גם עסקה?", a: "לא. איש הקשר הוא האדם. עסקה היא תהליך מכירה מולו. אותו אדם יכול להישאר בכרטיס אחד גם כשיש איתו כמה עסקאות." },
        { q: "האם ה-CRM יודע לבד על מכירה שסגרתי בטלפון?", a: "לא בהכרח. מה שנסגר מחוץ למערכת דורש עדכון. לוח העסקאות משקף את מה שהוזן אליו ואת הפעולות שחוברו אליו." },
      ], academy: "crm",
    },
    en: {
      title: "CRM for course and coaching businesses",
      description: "Coflow CRM connects forms, contacts, deals and active clients with your offers. Manage enquiries and sales in the same place.",
      intro: "Coflow CRM holds the people in your business: who enquired, what they need, which offer fits and where the conversation stands. Forms, deals and active clients connect to the same contacts.",
      sections: [
        { title: "A form becomes an enquiry you can handle", paragraphs: ["Answers submitted through a form stay with the enquiry. A deal usually opens on the board too; a newsletter signup does not open one. You can distinguish a buying enquiry from someone who only wants to read."] },
        { title: "A sale and an active client are different stages", paragraphs: ["A deal describes the sales process. Once it closes, the work with the client still needs a place. Coflow separates the deal board from active clients, so a sale does not disappear from your working day."] },
        { title: "Before you start", paragraphs: ["Choose stages that describe your sales process, decide who owns each enquiry and record the next step. The system holds the information; you still update conversations and sales made outside it."], steps: ["Define the offers and services you sell.", "Connect enquiry forms to the right offer.", "Update the deal stage and follow-up after each conversation.", "Check that a won client also has a place among your active clients."] },
      ], faqs: [
        { q: "Is a contact the same as a deal?", a: "No. A contact is the person. A deal is a sales process with them. One person can remain in one contact record across several deals." },
        { q: "Does the CRM know about a sale I made by phone?", a: "Not automatically in every case. Sales made outside the system need updating. The board reflects the information entered and actions connected to it." },
      ], academy: "crm",
    },
  },
  "ai-brand-management": {
    he: {
      title: "מערכת לניהול מותג עם AI",
      description: "קופלו משתמשת בפרופיל המותג, בקהל ובמוצרים שלך כדי לעזור להכין תוכן ומיילים. שיווק, מכירות ולקוחות באותה מערכת.",
      intro: "קופלו היא מערכת לניהול מותג עם AI. פרופיל המותג מחזיק את מה שאת עושה, למי, מה מבדל אותך ואיך את נשמעת. זה המידע שממנו מתחילים להכין תוכן, במקום להסביר את העסק מחדש בכל בקשה.",
      sections: [
        { title: "המותג שלך הוא הקלט", paragraphs: ["ככל שפרופיל המותג מדויק יותר, כך הטיוטות יכולות להתאים יותר לעסק שלך. הקהל, ההצעה והקול שלך נשמרים כמסגרת לעבודה. כשמשהו בעסק משתנה, עדכני גם את הפרופיל."] },
        { title: "AI כחלק מהעבודה השיווקית", paragraphs: ["אפשר להכין רעיונות וטיוטות לתוכן ולמיילים, ולארגן את העבודה בלוח התוכן. לצד זה נמצאים המוצרים, הדפים וה-CRM. המטרה היא לחבר את מה שאת אומרת למה שאת מוכרת ולמי שמגיעה אליך."] },
        { title: "האישור נשאר אצלך", paragraphs: ["בדקי עובדות, מחירים והבטחות לפני הפרסום. AI אינו מכיר כל שינוי בעסק שלך ואינו מחליף שיקול דעת מקצועי."] },
      ], faqs: [
        { q: "במה זה שונה מלבקש מ-ChatGPT לכתוב פוסט?", a: "בקופלו מידע על המותג נשמר בפרופיל ומשמש את יצירת התוכן בתוך סביבת העבודה. לצד הטיוטות נמצאים גם לוח התוכן, המוצרים ואנשי הקשר. התוכן עדיין דורש בדיקה ואישור שלך." },
        { q: "האם קופלו מפרסמת כל טיוטה אוטומטית?", a: "טיוטה שנוצרה אינה אישור לפרסום. בדקי את התוכן ואת הפעולות שבחרת להפעיל לפני שימוש מול לקוחות." },
      ], academy: "brand",
    },
    en: {
      title: "AI brand management for your business",
      description: "Coflow uses your brand profile, audience and offers to help draft content and emails. Marketing, sales and clients in one workspace.",
      intro: "Coflow is an AI brand-management system. Your brand profile holds what you do, who you serve, what makes you different and how you sound. Content starts from this context instead of asking you to explain the business again for every request.",
      sections: [
        { title: "Your brand is the input", paragraphs: ["A more accurate profile gives drafts a better chance of fitting your business. Your audience, offer and voice remain the context for the work. Update the profile when the business changes."] },
        { title: "AI within your marketing workflow", paragraphs: ["Prepare content ideas and drafts, work on emails and organise the work on your content board. Offers, pages and CRM sit alongside that work. The aim is to connect what you say with what you sell and the people who enquire."] },
        { title: "You keep the final review", paragraphs: ["Check facts, prices and promises before publishing. AI does not know every change in your business and does not replace professional judgement."] },
      ], faqs: [
        { q: "How is this different from asking ChatGPT for a post?", a: "In Coflow, brand information is stored in a profile and used for content creation inside the workspace. The content board, offers and contacts sit alongside the drafts. You still review and approve the content." },
        { q: "Does every AI draft publish automatically?", a: "A generated draft is not approval to publish. Review the content and the actions you choose to enable before using them with customers." },
      ], academy: "brand",
    },
  },
};

export function getSolution(slug: string, locale: Locale): DiscoveryPage | null {
  return solutions[slug]?.[locale] ?? null;
}

export const discoveryLabels = {
  he: { solutions: "מה אפשר לבנות", guides: "מדריכים", about: "על קופלו", faq: "שאלות נפוצות", details: "איך זה עובד", join: "להרשמה לרשימת ההמתנה", academy: "הסבר מפורט באקדמיה", related: "עוד בקופלו", availability: "קופלו נפתחת בהדרגה ובהזמנה. בדקי את זמינות היכולות לפני הצטרפות.", home: "בית" },
  en: { solutions: "What you can build", guides: "Guides", about: "About Coflow", faq: "Common questions", details: "How it works", join: "Join the waitlist", academy: "Detailed instructions in the Academy", related: "More in Coflow", availability: "Coflow opens gradually by invitation. Confirm feature availability before joining.", home: "Home" },
};
