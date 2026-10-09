// The site's legal texts, verbatim from the documents Batel sent (2026-10-09):
// terms of use and privacy policy, in Hebrew and English. Rendered by
// components/legal-page.tsx. Do not edit the wording here; replace it from a
// newer document.

export type LegalBlock =
  | { t: "h2" | "h3"; x: string }
  | { t: "p"; x: string; label?: string }
  | { t: "ul"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] };

export type LegalDoc = { title: string; updated: string; blocks: LegalBlock[] };

export const LEGAL: Record<"terms" | "privacy", Record<"he" | "en", LegalDoc>> = {
 "terms": {
  "he": {
   "title": "תנאי שימוש —Coflow",
   "updated": "תאריך עדכון אחרון: 27/08/2026",
   "blocks": [
    {
     "t": "h2",
     "x": "1. כללי ומבוא"
    },
    {
     "t": "p",
     "x": "1.1 ברוך/ה הבא/ה לקופלו (Coflow), פלטפורמת תוכנה (SaaS) לניהול השיווק, המכירות והלקוחות של עסקים, מותגים אישיים וסוכנויות (להלן: \"הפלטפורמה\" או \"השירות\"), המופעלת על ידי SheBossIt (Cyprus) Ltd (להלן: \"קופלו\", \"החברה\" או \"אנחנו\")."
    },
    {
     "t": "p",
     "x": "1.2 תנאי שימוש אלו מסדירים את השימוש בפלטפורמה ומהווים הסכם מחייב בינך (להלן: \"המשתמש\", \"הלקוח\" או \"את/ה\") לבין קופלו. מדיניות הפרטיות והסכם עיבוד הנתונים (DPA) מהווים חלק בלתי נפרד מתנאים אלו."
    },
    {
     "t": "p",
     "x": "1.3 הסכמה לתנאים: עצם ההרשמה לשירות והשימוש בו מהווים אישור והסכמה מלאה לתנאי שימוש אלו. אם אינך מסכים/ה לתנאים, כולם או חלקם, אינך רשאי/ת לעשות שימוש בשירות."
    },
    {
     "t": "p",
     "x": "1.4 האמור בתנאים אלו מתייחס לכל המגדרים. השימוש בלשון פנייה מסוימת נעשה מטעמי נוחות בלבד."
    },
    {
     "t": "p",
     "x": "1.5 כשירות והרשאה: השירות מיועד לעסקים ולמשתמשים בני 18 ומעלה בעלי כשירות משפטית להתקשר בהסכם מחייב. נכון למועד זה, ההרשמה לשירות מתאפשרת בהזמנה בלבד (invite-only), וההרשמה כסוכנות מותנית בקוד הזמנה תקף."
    },
    {
     "t": "p",
     "x": "1.6 שינוי התנאים: קופלו רשאית לעדכן תנאים אלו מעת לעת. במקרה של שינוי מהותי תימסר הודעה בשירות או בדוא\"ל. המשך השימוש לאחר העדכון מהווה הסכמה לתנאים המעודכנים."
    },
    {
     "t": "p",
     "x": "1.7 ראיה חלוטה: רישומי קופלו, לרבות רישומים אלקטרוניים בדבר הפעולות המתבצעות בשירות, יהוו ראיה לכאורה לנכונות הפעולות."
    },
    {
     "t": "h2",
     "x": "2. החשבון, הרשאות ותפקידים"
    },
    {
     "t": "p",
     "x": "2.1 לצורך השימוש בשירות עליך לפתוח חשבון ולמסור פרטים נכונים, מלאים ומעודכנים. באחריותך לעדכן פרטים אלו בעת הצורך."
    },
    {
     "t": "p",
     "x": "2.2 אבטחת החשבון: באחריותך לשמור על סודיות פרטי ההתחברות שלך. את/ה אחראי/ת לכל פעילות המתבצעת בחשבונך, ועליך להודיע לקופלו על כל שימוש בלתי מורשה."
    },
    {
     "t": "p",
     "x": "2.3 הרשאות ותפקידים: השירות מאפשר לצרף משתמשים נוספים מתוך הארגון שלך ולהגדיר להם הרשאות ותפקידים. באחריותך לנהל הרשאות אלו ולוודא כי הגישה מוענקת לגורמים מורשים בלבד."
    },
    {
     "t": "h2",
     "x": "3. מתן גישה לסוכנות"
    },
    {
     "t": "p",
     "x": "3.1 השירות מאפשר ללקוח להעניק לסוכנות גישה לחשבונו, בשתי דרכים: (א) גישה למותג מלא - הסוכנות מקבלת גישה למכלול הפעילות של המותג; או (ב) גישה לפלטפורמה בודדת - הסוכנות מקבלת גישה מוגבלת לפלטפורמה אחת בלבד, ללא גישה ליתר הנתונים."
    },
    {
     "t": "p",
     "x": "3.2 הענקת הגישה והסרתה נעשות ביוזמת הלקוח ובשליטתו, וניתן לבטלן בכל עת. הרשאות שבוטלו נשמרות לצרכי תיעוד."
    },
    {
     "t": "p",
     "x": "3.3 מעמד הסוכנות: סוכנות שהלקוח מעניק לה גישה פועלת כמעבד משנה מטעם הלקוח ובהוראתו, ולא מטעם קופלו. האחריות ליחסי הלקוח–סוכנות ולהתקשרות עמה חלה על הלקוח, כמפורט בהסכם עיבוד הנתונים."
    },
    {
     "t": "h2",
     "x": "4. השירות ותכונותיו"
    },
    {
     "t": "p",
     "x": "4.1 השירות כולל, בין היתר, כלים לניהול תוכן ותזמון פרסומים, ניהול לקוחות ועסקאות (CRM), שאלונים וטפסים, דפי נחיתה, דפי קביעת שיחות, קורסים דיגיטליים, ניהול משימות, מערכת דיוור, אחסון תכני פודקאסט, מעקב מעורבות ומעקב עוקבים, וחיבור לחשבונות חיצוניים."
    },
    {
     "t": "p",
     "x": "4.2 אינטגרציות: ככל שתבחר/י לחבר חשבונות חיצוניים (כגון אינסטגרם, יוטיוב, יומן Google, Zoho Books, Wix, ManyChat ורב מסר), החיבור נעשה בהרשאות קריאה בלבד, למעט יומן Google, שבו קופלו מוסיפה ליומן אירועים שנוצרו באמצעות השירות (כגון שיחות שנקבעו ופגישות), ובכפוף לתנאי השימוש של אותן פלטפורמות."
    },
    {
     "t": "h2",
     "x": "5. תוכן המשתמש, קניין רוחני ובעלות על המידע"
    },
    {
     "t": "p",
     "x": "5.1 בעלות הלקוח על תוכנו ומאגר המידע: כל התוכן, הקבצים והנתונים שהלקוח מזין או מעלה לשירות, לרבות מאגר אנשי הקשר, הנמענים והלידים, הם רכושו ובאחריותו של הלקוח. הלקוח הוא בעל מאגר המידע ובקר המידע (Data Controller) ביחס לנתונים אלו."
    },
    {
     "t": "p",
     "x": "5.2 הלקוח מעניק לקופלו רישיון מוגבל, לא בלעדי, לאחסן, לעבד ולהציג את תוכנו אך ורק לצורך אספקת השירות ובכפוף להוראותיו."
    },
    {
     "t": "p",
     "x": "5.3 קניין רוחני של קופלו: כל זכויות הקניין הרוחני בפלטפורמה, בתוכנה, בעיצוב, בשם המותג ובלוגו הן רכושה הבלעדי של קופלו. חל איסור להעתיק, לשכפל, לבצע הנדסה חוזרת, למכור או להעניק גישה לשירות בניגוד לתנאים אלו."
    },
    {
     "t": "h2",
     "x": "6. אחריות הלקוח — דיוור, חוקיות ומידע אישי"
    },
    {
     "t": "p",
     "x": "6.1 חוקיות התוכן והמידע: הלקוח מצהיר ומתחייב כי בידיו מלוא הזכויות, ההרשאות וההסכמות הנדרשות ביחס לתוכן ולמידע האישי שהוא מעלה או מעבד באמצעות השירות, וכי עיבוד המידע נעשה על בסיס חוקי כדין."
    },
    {
     "t": "p",
     "x": "6.2 חלוקת אחריות בדיוור: קופלו מספקת את מערכת הדיוור בלבד. הלקוח הוא המדוור, והאחריות לתוכן הדיוור, לרשימות התפוצה, לקבלת הסכמות הנמענים ולעמידה בדיני מניעת דואר זבל (Anti-Spam) והגנת הפרטיות - חלה על הלקוח בלבד."
    },
    {
     "t": "p",
     "x": "6.3 הלקוח מתחייב שלא להעלות או להפיץ תוכן בלתי חוקי, פוגעני, מפר זכויות של אחר, או תוכן זדוני העלול לפגוע במערכות."
    },
    {
     "t": "h2",
     "x": "7. בינה מלאכותית והיעדר הבטחת תוצאות"
    },
    {
     "t": "p",
     "x": "7.1 השירות עושה שימוש בכלי בינה מלאכותית (לרבות Claude מבית Anthropic ו-OpenAI) לצורך תכונות יצירה. לצורך כך, תוכן שהלקוח מזין עשוי להיות מועבר לספקים אלו, כמפורט במדיניות הפרטיות."
    },
    {
     "t": "p",
     "x": "7.2 תוצרים כהמלצה בלבד: תוצרי הבינה המלאכותית מהווים המלצה בלבד, עשויים לכלול אי-דיוקים, ואינם מהווים ייעוץ מקצועי. באחריות הלקוח לבחון ולאשר כל תוצר טרם השימוש בו."
    },
    {
     "t": "p",
     "x": "7.3 היעדר הבטחת תוצאות: קופלו אינה מבטיחה תוצאות עסקיות, שיווקיות או מספריות כלשהן. הצלחת פעילות הלקוח תלויה במשתנים רבים שאינם בשליטת קופלו."
    },
    {
     "t": "p",
     "x": "7.4 בעלות בתוצרים: התוצרים שהלקוח מפיק באמצעות תכונות הבינה המלאכותית שייכים ללקוח, בכפוף לתנאי ספקי הבינה המלאכותית. עם זאת, מפאת אופי הטכנולוגיה, התוצרים אינם ייחודיים או בלעדיים, וייתכן שמשתמשים אחרים יקבלו תוצרים זהים או דומים. באחריות הלקוח לוודא כי השימוש בתוצר אינו מפר זכויות צד שלישי."
    },
    {
     "t": "h2",
     "x": "8. פלטפורמות ושירותי צד שלישי"
    },
    {
     "t": "p",
     "x": "8.1 השירות פועל בממשק עם פלטפורמות צד שלישי (כגון אינסטגרם/Meta, יוטיוב, Google ו-Wix). קופלו אינה אחראית לפעולות או למחדלים של פלטפורמות אלו, לרבות חסימת חשבון, הסרת תכנים, שינויי ממשק (API) או אלגוריתם, והשבתת שירות."
    },
    {
     "t": "p",
     "x": "8.2 השימוש בפלטפורמות אלו כפוף לתנאי השימוש ולמדיניות הפרטיות שלהן, ובאחריות הלקוח לעמוד בהם."
    },
    {
     "t": "h2",
     "x": "9. תשלומים, מנוי וביטול"
    },
    {
     "t": "p",
     "x": "9.1 מנוי ותשלום: השירות ניתן במסלול מנוי (ריטיינר חודשי) בתשלום, המעובד באמצעות חברת הסליקה Stripe ו/או בהנפקת חשבונית. המחירים כוללים מע\"מ כדין, אלא אם צוין אחרת."
    },
    {
     "t": "p",
     "x": "9.2 חידוש: המנוי מתחדש ונמשך עד למועד החיוב הבא, אלא אם בוטל קודם לכן בהתאם לסעיף זה."
    },
    {
     "t": "p",
     "x": "9.3 ביטול: ניתן להודיע על ביטול המנוי בכל עת דרך החשבון או פנייה לתמיכה. הביטול ייכנס לתוקף בתום מחזור החיוב ששולם; לא יינתן החזר יחסי בגין תקופה ששולמה, והגישה תישמר עד תום אותו מחזור."
    },
    {
     "t": "p",
     "x": "9.4 מחיר ההצטרפות: מחיר המנוי הבסיסי שבו הצטרפת יישאר המחיר שלך כל עוד המנוי פעיל ברציפות, גם אם המחיר לנרשמים חדשים יעלה. מחיר זה חל על החבילה הבסיסית בלבד. תוספות (Add-ons), כגון הגדלת מכסת אנשי הקשר ברשימות הדיוור מעבר למכסה הכלולה בחבילה, מתומחרות בנפרד, ומחיריהן ומכסותיהן עשויים להשתנות. ביטול המנוי והצטרפות מחודשת יהיו במחיר התקף במועד ההצטרפות המחודשת."
    },
    {
     "t": "p",
     "x": "9.5 קרדיטים: חלק מתכונות הבינה המלאכותית צורכות קרדיטים. המנוי כולל מכסת קרדיטים חודשית, וייתכן שתוצע רכישה חד-פעמית של חבילות קרדיטים נוספות. קרדיטים שנרכשו אינם ניתנים להחזר או להמרה לכסף, ותנאיהם יוצגו בעת הרכישה."
    },
    {
     "t": "h2",
     "x": "9א. מכירות שלך ללקוחות שלך באמצעות השירות"
    },
    {
     "t": "p",
     "x": "9א.1 השירות מאפשר ללקוח למכור ללקוחותיו שלו מוצרים ושירותים, כגון קורסים דיגיטליים ושיחות או פגישות בתשלום. התשלום נסלק באמצעות חשבון Stripe של הלקוח עצמו (Stripe Connect), והכספים מועברים ישירות לחשבון זה, בכפוף לתנאי השימוש של Stripe."
    },
    {
     "t": "p",
     "x": "9א.2 הלקוח הוא המוכר: ההתקשרות מול הקונה היא בין הלקוח לבין הקונה בלבד, וקופלו אינה צד לה. הלקוח אחראי לתוכן המוצר ולאספקתו, למחירים, להנפקת חשבוניות וקבלות, לתשלום המסים החלים, לשירות לקוחות, לביטולים ולהחזרים, ולעמידה בדיני הגנת הצרכן החלים עליו."
    },
    {
     "t": "p",
     "x": "9א.3 החזרים, ביטולים ומחלוקות תשלום (Chargebacks) מול הקונים יטופלו על ידי הלקוח ועל חשבונו."
    },
    {
     "t": "p",
     "x": "9א.4 עמלות: ככל שקופלו תגבה עמלה על מכירות כאמור, שיעורה יוצג ללקוח לפני הפעלת המכירות. עמלות Stripe חלות בנפרד."
    },
    {
     "t": "p",
     "x": "9א.5 המידע האישי של הקונים מעובד על ידי קופלו כמעבד מטעם הלקוח, בהתאם להסכם עיבוד הנתונים."
    },
    {
     "t": "p",
     "x": "9א.6 קופלו רשאית להשבית את אפשרות המכירה במקרה של שימוש לרעה, הפרת דין או הפרת תנאים אלו."
    },
    {
     "t": "h2",
     "x": "10. זמינות, שינויים והשעיה"
    },
    {
     "t": "p",
     "x": "10.1 השירות ניתן \"As Is\": קופלו עושה מאמצים סבירים לשמור על זמינות תקינה אך אינה מתחייבת לרציפות מלאה או להיעדר תקלות."
    },
    {
     "t": "p",
     "x": "10.2 קופלו רשאית לשנות, להוסיף או להפסיק תכונות בשירות לפי שיקול דעתה."
    },
    {
     "t": "p",
     "x": "10.3 השעיה וחסימה: קופלו רשאית להשעות או לחסום גישה, באופן זמני או קבוע, במקרה של הפרת תנאים אלו, הפרת דין, או אי-תשלום - עד להסדרת ההפרה או התשלום."
    },
    {
     "t": "p",
     "x": "10.4 שלב מוקדם (Beta): השירות מצוי בשלבי פיתוח והרצה מוקדמים ומוצע כפי שהוא, ללא אחריות מפורשת. תכונות עשויות להשתנות, להתווסף או להיפסק מעת לעת."
    },
    {
     "t": "h2",
     "x": "11. הגבלת אחריות"
    },
    {
     "t": "p",
     "x": "11.1 השירות ותכניו מוצעים לשימוש כמות שהם (\"As Is\") וללא כל אחריות מפורשת או משתמעת. השימוש בשירות נעשה באחריות הלקוח בלבד."
    },
    {
     "t": "p",
     "x": "11.2 בכפוף להוראות הדין, קופלו לא תישא באחריות לכל נזק עקיף, תוצאתי, מיוחד או אובדן רווחים, ולא לאובדן או פגיעה בנתונים."
    },
    {
     "t": "p",
     "x": "11.3 תקרת אחריות: בכל מקרה, אחריותה הכספית המצטברת של קופלו לא תעלה על הסכום ששולם על ידי הלקוח בפועל בגין השירות בתקופה של 12 החודשים שקדמו לאירוע."
    },
    {
     "t": "p",
     "x": "11.4 חריגים לתקרה: הגבלת האחריות והתקרה שבסעיף זה לא יחולו על חובת השיפוי של הלקוח, על הפרת זכויות קניין רוחני, על הפרת חובת סודיות, ועל חבות הלקוח בתשלום סכומים המגיעים לקופלו."
    },
    {
     "t": "h2",
     "x": "12. שיפוי"
    },
    {
     "t": "p",
     "x": "12.1 הלקוח מתחייב לשפות ולפצות את קופלו בגין כל נזק, הפסד או הוצאה (לרבות שכר טרחת עו\"ד) שייגרמו לה בקשר לתביעה או דרישה הנובעות מתוכן הלקוח, משימושו בשירות, מהפרת תנאים אלו, מדיוור שביצע, או מהפרת דין או זכויות צד שלישי."
    },
    {
     "t": "h2",
     "x": "13. סיום ההתקשרות, ייצוא ומחיקת מידע"
    },
    {
     "t": "p",
     "x": "13.1 כל צד רשאי לסיים את ההתקשרות בהתאם לתנאים אלו. עם סיום ההתקשרות תיחסם הגישה לשירות."
    },
    {
     "t": "p",
     "x": "13.2 ייצוא ומחיקה: טרם המחיקה, ובתוך 30 יום ממועד סיום ההתקשרות, יתאפשר ללקוח לייצא את הנתונים שבבעלותו. לאחר מכן הנתונים יימחקו או יעברו אנונימיזציה מלאה, למעט מידע חשבונאי הנשמר 7 שנים כנדרש בדין."
    },
    {
     "t": "h2",
     "x": "14. פרטיות והגנת מידע"
    },
    {
     "t": "p",
     "x": "14.1 עיבוד המידע האישי כפוף למדיניות הפרטיות של קופלו ולהסכם עיבוד הנתונים (DPA), המהווים חלק בלתי נפרד מתנאים אלו. ביחס לנתונים שהלקוח מזין אודות אנשי הקשר שלו, הלקוח הוא הבקר וקופלו היא המעבד."
    },
    {
     "t": "h2",
     "x": "15. כללי"
    },
    {
     "t": "p",
     "x": "15.1 תנאים אלו, יחד עם מדיניות הפרטיות וה-DPA, ממצים את ההסכמות בין הצדדים. בטלות סעיף כלשהו לא תגרע מתוקף יתר התנאים. קופלו רשאית להמחות את זכויותיה; הלקוח אינו רשאי להמחות ללא הסכמת קופלו מראש ובכתב."
    },
    {
     "t": "p",
     "x": "15.2 כוח עליון: קופלו לא תישא באחריות לעיכוב או לאי-קיום התחייבות הנובעים מנסיבות שאינן בשליטתה הסבירה, לרבות כשלי תקשורת, כשלים אצל ספקי תשתית או צד שלישי, מתקפות סייבר, שינויי חקיקה, או כוח עליון."
    },
    {
     "t": "p",
     "x": "15.3 הודעות: הודעות מטעם קופלו יימסרו בדואר אלקטרוני או באמצעות הצגה בשירות, וייחשבו כאילו נמסרו במועד המשלוח או ההצגה."
    },
    {
     "t": "h2",
     "x": "16. דין וסמכות שיפוט"
    },
    {
     "t": "p",
     "x": "16.1 על תנאים אלו יחולו דיני הרפובליקה של קפריסין, וסמכות השיפוט הבלעדית תהא נתונה לבתי המשפט המוסמכים בקפריסין."
    },
    {
     "t": "h2",
     "x": "17. יצירת קשר"
    },
    {
     "t": "p",
     "label": "שם החברה",
     "x": "SheBossIt (Cyprus) Ltd"
    },
    {
     "t": "p",
     "label": "דואר אלקטרוני",
     "x": "contact@shebossit.com"
    },
    {
     "t": "p",
     "label": "כתובת",
     "x": "Ifigenias 8, Livadia, Cyprus"
    }
   ]
  },
  "en": {
   "title": "Terms of Use — Coflow",
   "updated": "Last updated: 27/08/2026",
   "blocks": [
    {
     "t": "h2",
     "x": "1. General and Introduction"
    },
    {
     "t": "p",
     "x": "1.1 Welcome to Coflow, a software platform (SaaS) for managing the marketing, sales and clients of businesses, personal brands and agencies (the \"Platform\" or the \"Service\"), operated by SheBossIt (Cyprus) Ltd   (hereinafter: \"Coflow\", the \"Company\" or \"We\")."
    },
    {
     "t": "p",
     "x": "1.2 These Terms of Use govern your use of the Platform and constitute a binding agreement between you (the \"User\" or \"Customer\") and Coflow. The Privacy Policy and the Data Processing Agreement (DPA) form an integral part of these Terms."
    },
    {
     "t": "p",
     "x": "1.3 Acceptance: registering for and using the Service constitute full acceptance of these Terms. If you do not agree to the Terms, in whole or in part, you must not use the Service."
    },
    {
     "t": "p",
     "x": "1.4 These Terms apply to all genders; any particular grammatical form is used for convenience only."
    },
    {
     "t": "p",
     "x": "1.5 Eligibility: the Service is intended for businesses and users aged 18 and over with the legal capacity to enter into a binding agreement. As of this date, registration is invite-only, and agency registration requires a valid invite code."
    },
    {
     "t": "p",
     "x": "1.6 Changes to the Terms: Coflow may update these Terms from time to time. Material changes will be notified within the Service or by email. Continued use after the update constitutes acceptance of the updated Terms."
    },
    {
     "t": "p",
     "x": "1.7 Records: Coflow’s records, including electronic records of actions performed in the Service, shall constitute prima facie evidence of the correctness of those actions."
    },
    {
     "t": "h2",
     "x": "2. Account, Permissions and Roles"
    },
    {
     "t": "p",
     "x": "2.1 To use the Service you must open an account and provide accurate, complete and up-to-date details, and keep them updated."
    },
    {
     "t": "p",
     "x": "2.2 Account security: you are responsible for keeping your login credentials confidential and for all activity in your account, and you must notify Coflow of any unauthorized use."
    },
    {
     "t": "p",
     "x": "2.3 Permissions and roles: the Service allows you to add other users from your organization and assign them permissions and roles. You are responsible for managing these permissions and ensuring access is granted to authorized persons only."
    },
    {
     "t": "h2",
     "x": "3. Granting Agency Access"
    },
    {
     "t": "p",
     "x": "3.1 The Service allows a customer to grant an agency access to its account in two ways: (a) whole-brand access - the agency receives access to the brand’s overall activity; or (b) single-platform access - the agency receives limited access to one platform only, with no access to the rest of the data."
    },
    {
     "t": "p",
     "x": "3.2 Granting and revoking access are initiated and controlled by the customer and may be withdrawn at any time. Revoked permissions are retained for record-keeping."
    },
    {
     "t": "p",
     "x": "3.3 Agency status: an agency to which the customer grants access acts as a sub-processor on the customer’s behalf and instructions, and not on Coflow’s behalf. Responsibility for the customer–agency relationship rests with the customer, as detailed in the Data Processing Agreement."
    },
    {
     "t": "h2",
     "x": "4. The Service and its Features"
    },
    {
     "t": "p",
     "x": "4.1 The Service includes, among other things, tools for content management and scheduling, customer and deal management (CRM), questionnaires and forms, landing pages, booking pages, digital courses, task management, a mailing system, podcast hosting, engagement and follower tracking, and connection to external accounts."
    },
    {
     "t": "p",
     "x": "4.2 Integrations: where you choose to connect external accounts (such as Instagram, YouTube, Google Calendar, Zoho Books, Wix, ManyChat and Rav Messer), the connection uses read-only permissions, except Google Calendar, where Coflow adds to the calendar events created through the Service (such as booked calls and meetings), and is subject to those platforms’ terms of use."
    },
    {
     "t": "h2",
     "x": "5. User Content, Intellectual Property and Data Ownership"
    },
    {
     "t": "p",
     "x": "5.1 Customer ownership of content and database: all content, files and data the customer enters or uploads to the Service, including the database of contacts, recipients and leads, are the customer’s property and responsibility. The customer is the owner of the database and the Data Controller with respect to such data."
    },
    {
     "t": "p",
     "x": "5.2 The customer grants Coflow a limited, non-exclusive license to host, process and display its content solely for the purpose of providing the Service and subject to its instructions."
    },
    {
     "t": "p",
     "x": "5.3 Coflow’s intellectual property: all intellectual-property rights in the Platform, the software, the design, the brand name and the logo are Coflow’s exclusive property. Copying, reproducing, reverse-engineering, selling or granting access to the Service contrary to these Terms is prohibited."
    },
    {
     "t": "h2",
     "x": "6. Customer Responsibilities — Mailing, Legality and Personal Data"
    },
    {
     "t": "p",
     "x": "6.1 Lawfulness of content and data: the customer represents and warrants that it holds all rights, permissions and consents required with respect to the content and Personal Data it uploads or processes through the Service, and that the processing is carried out on a lawful basis."
    },
    {
     "t": "p",
     "x": "6.2 Division of responsibility in mailing: Coflow provides the mailing system only. The customer is the sender, and responsibility for the mailing content, distribution lists, obtaining recipients’ consents, and compliance with anti-spam and privacy laws rests with the customer alone."
    },
    {
     "t": "p",
     "x": "6.3 The customer undertakes not to upload or distribute unlawful, offensive or infringing content, or malicious content that could harm the systems."
    },
    {
     "t": "h2",
     "x": "7. Artificial Intelligence and No Guarantee of Results"
    },
    {
     "t": "p",
     "x": "7.1 The Service uses artificial-intelligence tools (including Claude by Anthropic and OpenAI) for its generation features. For this purpose, content the customer enters may be transmitted to these providers, as detailed in the Privacy Policy."
    },
    {
     "t": "p",
     "x": "7.2 Outputs are recommendations only: AI outputs are recommendations only, may contain inaccuracies, and do not constitute professional advice. The customer is responsible for reviewing and approving any output before use."
    },
    {
     "t": "p",
     "x": "7.3 No guarantee of results: Coflow does not guarantee any business, marketing or numerical results. The success of the customer’s activity depends on many variables outside Coflow’s control."
    },
    {
     "t": "p",
     "x": "7.4 Ownership of outputs: outputs the customer generates using the AI features belong to the customer, subject to the AI providers’ terms. However, given the nature of the technology, outputs are not unique or exclusive, and other users may receive identical or similar outputs. The customer is responsible for ensuring that its use of an output does not infringe third-party rights."
    },
    {
     "t": "h2",
     "x": "8. Third-Party Platforms and Services"
    },
    {
     "t": "p",
     "x": "8.1 The Service interfaces with third-party platforms (such as Instagram/Meta, YouTube, Google and Wix). Coflow is not responsible for the acts or omissions of these platforms, including account blocking, content removal, API or algorithm changes, and service downtime."
    },
    {
     "t": "p",
     "x": "8.2 Use of these platforms is subject to their own terms and privacy policies, and it is the customer’s responsibility to comply with them."
    },
    {
     "t": "h2",
     "x": "9. Payments, Subscription and Cancellation"
    },
    {
     "t": "p",
     "x": "9.1 Subscription and payment: the Service is provided on a paid subscription (monthly retainer) basis, processed via Stripe and/or by invoice. Prices include VAT as applicable, unless stated otherwise."
    },
    {
     "t": "p",
     "x": "9.2 Renewal: the subscription renews and continues until the next billing date, unless previously cancelled in accordance with this section."
    },
    {
     "t": "p",
     "x": "9.3 Cancellation: you may cancel the subscription at any time via the account or by contacting support. Cancellation takes effect at the end of the paid billing cycle; no pro-rata refund will be given for a period already paid, and access is retained until the end of that cycle."
    },
    {
     "t": "p",
     "x": "9.4 Price at sign-up: the base subscription price at which you joined remains your price for as long as the subscription stays active without interruption, even if the price for new subscribers rises. This applies to the base plan only. Add-ons, such as raising the number of mailing-list contacts beyond the amount included in the plan, are priced separately, and their prices and limits may change. If you cancel and later rejoin, the price in effect on the date you rejoin applies."
    },
    {
     "t": "p",
     "x": "9.5 Credits: some AI features consume credits. The subscription includes a monthly credit allowance, and additional credit packs may be offered as one-time purchases. Purchased credits are non-refundable and cannot be exchanged for cash; their terms are shown at purchase."
    },
    {
     "t": "h2",
     "x": "9A. Your Sales to Your Own Customers Through the Service"
    },
    {
     "t": "p",
     "x": "9A.1 The Service lets the customer sell products and services to its own buyers, such as digital courses and paid calls or meetings. Payments are processed through the customer’s own Stripe account (Stripe Connect), and the funds go directly to that account, subject to Stripe’s terms."
    },
    {
     "t": "p",
     "x": "9A.2 The customer is the seller: the engagement with a buyer is between the customer and the buyer only, and Coflow is not a party to it. The customer is responsible for the product’s content and delivery, prices, issuing invoices and receipts, applicable taxes, customer service, cancellations and refunds, and compliance with the consumer-protection laws that apply to it."
    },
    {
     "t": "p",
     "x": "9A.3 Refunds, cancellations and payment disputes (chargebacks) with buyers are handled by the customer and at its expense."
    },
    {
     "t": "p",
     "x": "9A.4 Fees: if Coflow charges a fee on such sales, its rate will be shown to the customer before selling is turned on. Stripe’s fees apply separately."
    },
    {
     "t": "p",
     "x": "9A.5 Buyers’ Personal Data is processed by Coflow as a processor on the customer’s behalf, under the Data Processing Agreement."
    },
    {
     "t": "p",
     "x": "9A.6 Coflow may disable selling in the event of misuse, a violation of law or a breach of these Terms."
    },
    {
     "t": "h2",
     "x": "10. Availability, Changes and Suspension"
    },
    {
     "t": "p",
     "x": "10.1 Service provided \"As Is\": Coflow makes reasonable efforts to maintain availability but does not warrant uninterrupted or error-free operation."
    },
    {
     "t": "p",
     "x": "10.2 Coflow may modify, add or discontinue features of the Service at its discretion."
    },
    {
     "t": "p",
     "x": "10.3 Suspension and blocking: Coflow may suspend or block access, temporarily or permanently, in the event of a breach of these Terms, a violation of law, or non-payment - until the breach or payment is remedied."
    },
    {
     "t": "p",
     "x": "10.4 Early stage (Beta): the Service is in an early development and rollout stage and is provided as is, without express warranty. Features may change, be added or be discontinued from time to time."
    },
    {
     "t": "h2",
     "x": "11. Limitation of Liability"
    },
    {
     "t": "p",
     "x": "11.1 The Service and its content are provided \"As Is\" and without any express or implied warranty. Use of the Service is at the customer’s sole responsibility."
    },
    {
     "t": "p",
     "x": "11.2 Subject to the provisions of the law, Coflow shall not be liable for any indirect, consequential or special damage or loss of profits, nor for loss of or damage to data."
    },
    {
     "t": "p",
     "x": "11.3 Liability cap: in any event, Coflow’s aggregate monetary liability shall not exceed the amount actually paid by the customer for the Service in the 12 months preceding the event."
    },
    {
     "t": "p",
     "x": "11.4 Exceptions to the cap: the limitation of liability and the cap in this section shall not apply to the customer’s indemnification obligation, to infringement of intellectual-property rights, to breach of confidentiality, or to the customer’s liability to pay amounts due to Coflow."
    },
    {
     "t": "h2",
     "x": "12. Indemnification"
    },
    {
     "t": "p",
     "x": "12.1 The customer undertakes to indemnify and compensate Coflow for any damage, loss or expense (including legal fees) incurred in connection with any claim or demand arising from the customer’s content, its use of the Service, breach of these Terms, its mailing activity, or violation of law or third-party rights."
    },
    {
     "t": "h2",
     "x": "13. Termination, Export and Deletion of Data"
    },
    {
     "t": "p",
     "x": "13.1 Either party may terminate the engagement in accordance with these Terms. Upon termination, access to the Service will be blocked."
    },
    {
     "t": "p",
     "x": "13.2 Export and deletion: prior to deletion, and within 30 days of termination, the customer will be able to export the data it owns. Thereafter the data will be deleted or anonymized, except for accounting data retained for 7 years as required by law."
    },
    {
     "t": "h2",
     "x": "14. Privacy and Data Protection"
    },
    {
     "t": "p",
     "x": "14.1 Processing of Personal Data is subject to Coflow’s Privacy Policy and the Data Processing Agreement (DPA), which form an integral part of these Terms. With respect to data the customer enters about its own contacts, the customer is the controller and Coflow is the processor."
    },
    {
     "t": "h2",
     "x": "15. Miscellaneous"
    },
    {
     "t": "p",
     "x": "15.1 These Terms, together with the Privacy Policy and the DPA, constitute the entire agreement between the parties. The invalidity of any provision shall not affect the remaining Terms. Coflow may assign its rights; the customer may not assign without Coflow’s prior written consent."
    },
    {
     "t": "p",
     "x": "15.2 Force majeure: Coflow shall not be liable for any delay or failure to perform arising from circumstances beyond its reasonable control, including communication failures, failures of infrastructure or third-party providers, cyber-attacks, changes in legislation, or force majeure."
    },
    {
     "t": "p",
     "x": "15.3 Notices: notices from Coflow will be given by email or by display within the Service, and will be deemed delivered upon dispatch or display."
    },
    {
     "t": "h2",
     "x": "16. Governing Law and Jurisdiction"
    },
    {
     "t": "p",
     "x": "16.1 These Terms shall be governed by the laws of the Republic of Cyprus, and exclusive jurisdiction shall be vested in the competent courts of Cyprus."
    },
    {
     "t": "h2",
     "x": "17. Contact"
    },
    {
     "t": "p",
     "label": "Company name",
     "x": "SheBossIt (Cyprus) Ltd"
    },
    {
     "t": "p",
     "label": "Email",
     "x": "contact@shebossit.com"
    },
    {
     "t": "p",
     "label": "Address",
     "x": "Ifigenias 8, Livadia, Cyprus"
    }
   ]
  }
 },
 "privacy": {
  "he": {
   "title": "מדיניות פרטיות — קופלו (Coflow)",
   "updated": "תאריך עדכון אחרון: 27/08/2026",
   "blocks": [
    {
     "t": "h2",
     "x": "1. מבוא"
    },
    {
     "t": "p",
     "label": "SheBossIt (Cyprus) Ltd (להלן",
     "x": "\"קופלו\" או \"אנחנו\"), המפעילה את פלטפורמת קופלו (Coflow) לניהול השיווק, המכירות והלקוחות של עסקים, מותגים אישיים וסוכנויות (להלן: \"הפלטפורמה\" או \"השירות\"), מכבדת את פרטיות המשתמשים והלקוחות שלה ומחויבת להגן על המידע האישי הנאסף אודותיהם. מדיניות פרטיות זו מפרטת כיצד קופלו אוספת, משתמשת, משמרת, חושפת ומגנה על מידע אישי (Personal Data) בעת השימוש בשירות, בהתאם לתקנות הגנת המידע הכלליות של האיחוד האירופי (GDPR) ולהוראות הדין החל."
    },
    {
     "t": "h3",
     "x": "1.1 שני מעמדות — בקר מידע ומעבד מידע"
    },
    {
     "t": "p",
     "x": "קופלו פועלת בשני מעמדות שונים ביחס למידע אישי, וחשוב להבחין ביניהם:"
    },
    {
     "t": "ul",
     "items": [
      "כבקר המידע (Data Controller) — ביחס למידע האישי של בעלי החשבון עצמם (המשתמשים הנרשמים לשירות). מדיניות פרטיות זו עוסקת במעמד זה.",
      "כמעבד מידע (Data Processor) — ביחס למידע אישי שהלקוחות מזינים לפלטפורמה אודות אנשי הקשר, הנמענים והלידים שלהם. במקרה זה הלקוח הוא בעל מאגר המידע והבקר, וקופלו מעבדת מידע זה בשמו ולפי הוראותיו בלבד. עיבוד זה מוסדר בהסכם עיבוד נתונים (Data Processing Agreement – DPA) נפרד, המהווה חלק מתנאי ההתקשרות, ואינו נשלט על ידי מדיניות פרטיות זו."
     ]
    },
    {
     "t": "h2",
     "x": "2. המידע שאנו אוספים (כבקר מידע)"
    },
    {
     "t": "p",
     "x": "המידע המפורט בסעיף זה מתייחס למידע שקופלו אוספת במעמדה כבקר המידע — קרי, אודות בעלי החשבון והמבקרים בשירות."
    },
    {
     "t": "h3",
     "x": "2.1 מידע הנמסר על ידך במישרין"
    },
    {
     "t": "p",
     "x": "בעת פתיחת חשבון ושימוש בשירות, אנו עשויים לאסוף:"
    },
    {
     "t": "p",
     "label": "פרטי זהות וקשר",
     "x": "שם מלא, כתובת דואר אלקטרוני, תחום העיסוק, וקישורים לפרופילים ולפלטפורמות המנוהלות."
    },
    {
     "t": "p",
     "label": "פרטי התחברות",
     "x": "כתובת דוא\"ל וסיסמה, או פרטי חשבון Google במקרה של התחברות באמצעותו."
    },
    {
     "t": "p",
     "label": "תכנים וקבצים שאתה בוחר להעלות",
     "x": "חומרי מותג, מדיה לפוסטים, קבצים מצורפים למשימות, תמונות פרופיל, וכן קבצי וידאו ואודיו בנפחים גדולים; מסמכים עסקיים כגון הצעות מחיר ופירוט שירותים; וכן מסמכים אישיים ותכני פודקאסט שבחרת לאחסן בפלטפורמה."
    },
    {
     "t": "h3",
     "x": "2.2 מידע מחשבונות מחוברים (אינטגרציות)"
    },
    {
     "t": "p",
     "x": "בכפוף להרשאה שתעניק, ואך ורק בהרשאות קריאה (read-only), אנו מושכים מידע מחשבונות שתבחר לחבר:"
    },
    {
     "t": "p",
     "x": "אינסטגרם (Instagram) — פרופיל עסקי בסיסי ופוסטים."
    },
    {
     "t": "p",
     "x": "יוטיוב (YouTube) — נתוני ערוץ וסטטיסטיקות וידאו."
    },
    {
     "t": "p",
     "x": "יומן Google (Google Calendar) — גישת קריאה ליומן וכתובת הדוא\"ל של החשבון, והוספת אירועים שנוצרו באמצעות השירות (כגון שיחות שנקבעו ופגישות). קופלו אינה משנה או מוחקת אירועים קיימים."
    },
    {
     "t": "p",
     "x": "Zoho Books — גישת קריאה לחשבוניות ואנשי קשר, לצורך התאמת חשבוניות למותגים."
    },
    {
     "t": "p",
     "x": "Wix — עבור לקוחות שאתר האינטרנט שלהם בנוי על Wix."
    },
    {
     "t": "p",
     "x": "ManyChat — קטלוג האוטומציות של החשבון (שמות התהליכים וכלי הצמיחה), לצורך קישורם למוצרים."
    },
    {
     "t": "p",
     "x": "רב מסר (Rav Messer) — המנויים ברשימות שבחרת לחבר, לצורך ייבואם לרשימות הדיוור בקופלו."
    },
    {
     "t": "p",
     "x": "ניתן להסיר הרשאות אלו בכל עת."
    },
    {
     "t": "h3",
     "x": "2.3 פרטי תשלום"
    },
    {
     "t": "p",
     "x": "פרטי המנוי, סטטוס התשלום ותוכנית השירות. חשוב להבהיר: התשלומים מעובדים באמצעות חברת הסליקה Stripe, ופרטי כרטיס האשראי המלאים אינם נשמרים בשרתי קופלו."
    },
    {
     "t": "h3",
     "x": "2.4 מידע טכני ועוגיות (Cookies)"
    },
    {
     "t": "p",
     "x": "הפלטפורמה עושה שימוש בעוגיות ראשוניות (first-party) בלבד, המסווגות כדלקמן:"
    },
    {
     "t": "p",
     "label": "עוגיות חיוניות (Essential)",
     "x": "נדרשות לתפעול השירות, לניהול ההתחברות, לזיהוי סביבת העבודה הנוכחית ולהגנה מפני זיופי בקשה בעת חיבור חשבונות חיצוניים. שימוש זה אינו טעון הסכמה לפי ה-GDPR."
    },
    {
     "t": "p",
     "label": "עוגיות פונקציונליות (Functional)",
     "x": "שמירת העדפת שפה ואזור זמן לצורך הצגה תקינה."
    },
    {
     "t": "p",
     "label": "עוגיית שיוך שותפים (Marketing)",
     "x": "עוגייה לזיהוי הקישור השותף שדרכו הגעת (למשך תקופה של 90 יום), לצורך זיכוי שותפים. עוגייה זו אינה חיונית לתפעול השירות ותיקבע אך ורק בכפוף להסכמתך המפורשת באמצעות באנר העוגיות."
    },
    {
     "t": "p",
     "label": "עוגיית מסלול הגעה (Marketing)",
     "x": "עוגייה הרושמת דרך אילו ערוצים וקישורים הגעת לשירות (למשך תקופה של 90 יום), לצורך הבנה אילו ערוצים מביאים נרשמים. עוגייה זו אינה חיונית לתפעול השירות ותיקבע אך ורק בכפוף להסכמתך המפורשת באמצעות באנר העוגיות."
    },
    {
     "t": "p",
     "label": "עוגיות אבחון (Diagnostic)",
     "x": "משמשות לאיתור תקלות ולבדיקות פנימיות בלבד, ואינן פעילות בסביבת הייצור בשגרה."
    },
    {
     "t": "p",
     "x": "הפלטפורמה אינה עושה שימוש בעוגיות צד-שלישי למטרות פרסום, אנליטיקה או מעקב אחר גולשים (כגון Google Analytics או Meta Pixel)."
    },
    {
     "t": "p",
     "label": "הבהרה",
     "x": "אתר השיווק coflow.social מהווה סביבה נפרדת מהפלטפורמה, ומשתמש בעוגייה פונקציונלית אחת בלבד, לשמירת בחירת השפה."
    },
    {
     "t": "h3",
     "x": "2.5 מידע הנוצר במהלך השימוש"
    },
    {
     "t": "p",
     "x": "מדדי מעורבות ונתוני עוקבים הנאספים מהחשבונות המחוברים; נתוני שימוש בסיסיים (מועד הרשמה, מועד התחברות אחרון, שם מותג, תוכנית וסטטוס תשלום, והפלטפורמות המנוהלות) הנגישים לצוות קופלו לצורכי תפעול ותמיכה; ונתוני יומן טכניים לצורכי אבטחה ואיתור תקלות."
    },
    {
     "t": "h2",
     "x": "3. עיבוד באמצעות בינה מלאכותית (AI)"
    },
    {
     "t": "p",
     "x": "חלק מתכונות הפלטפורמה מבוססות על מנועי בינה מלאכותית של צד שלישי — OpenAI ו-Anthropic (Claude). לצורך הפעלת תכונות היצירה, תוכן שאתה מזין (ובכלל זה חומרי מותג וטקסט עסקי שהוקלד) מועבר לספקים אלו לצורך יצירת התוצר המבוקש. רשומות אנשי קשר אינן מועברות דרך קבע לצורך תכונות אלו."
    },
    {
     "t": "p",
     "x": "ספקי הבינה המלאכותית פועלים כמעבדי מידע מטעם קופלו ובכפוף להתחייבויות חוזיות. הפלטפורמה אינה מקבלת החלטות אוטומטיות בלבד בעלות אפקט משפטי או משמעותי דומה כלפיך. תוצרי הבינה המלאכותית הינם בגדר המלצה בלבד, והשימוש בהם באחריות המשתמש."
    },
    {
     "t": "h2",
     "x": "4. מטרות העיבוד והבסיס החוקי (Legal Basis)"
    },
    {
     "t": "p",
     "x": "אנו מעבדים את המידע האישי שלך למטרות הבאות, בהתבסס על העילות החוקיות של ה-GDPR:"
    },
    {
     "t": "table",
     "head": [
      "מטרת העיבוד",
      "סוג המידע",
      "בסיס חוקי (GDPR)"
     ],
     "rows": [
      [
       "אספקת השירות והפעלת הפלטפורמה",
       "פרטי חשבון, תכנים, קבצים",
       "ביצוע חוזה — Art. 6(1)(b)"
      ],
      [
       "ניהול חשבון, אימות ואבטחה",
       "פרטי התחברות, נתוני יומן",
       "אינטרס לגיטימי — Art. 6(1)(f)"
      ],
      [
       "יצירת תוכן באמצעות בינה מלאכותית",
       "תוכן וטקסט עסקי שהוזן",
       "ביצוע חוזה — Art. 6(1)(b)"
      ],
      [
       "חיוב, תשלומים והנפקת חשבוניות",
       "פרטי מנוי, היסטוריית תשלום",
       "חובה משפטית / ביצוע חוזה — Art. 6(1)(c)/(b)"
      ],
      [
       "תקשורת שירות ותפעול",
       "פרטי קשר",
       "אינטרס לגיטימי — Art. 6(1)(f)"
      ],
      [
       "דיוור שיווקי מטעם קופלו",
       "שם, דוא\"ל",
       "הסכמה / אינטרס לגיטימי — Art. 6(1)(a)/(f)"
      ],
      [
       "שיוך שותפים (Affiliate)",
       "מזהה קישור שותף",
       "הסכמה — Art. 6(1)(a)"
      ],
      [
       "ניטור שגיאות ואבטחת מערכת",
       "מזהה משתמש אנונימי, נתוני ביצועים",
       "אינטרס לגיטימי — Art. 6(1)(f)"
      ],
      [
       "עמידה בחובות חוקיות",
       "נתונים חשבונאיים",
       "חובה משפטית — Art. 6(1)(c)"
      ]
     ]
    },
    {
     "t": "h2",
     "x": "5. שיתוף מידע עם צדדים שלישיים"
    },
    {
     "t": "p",
     "x": "איננו מוכרים את המידע האישי שלך. אנו משתפים מידע רק עם הגורמים הבאים ולצורך אספקת השירות. הרשימה הנוכחית של ספקי השירות (מעבדי המשנה) שלנו כוללת:"
    },
    {
     "t": "p",
     "label": "תשתית ואחסון",
     "x": "Netlify (אירוח והרצת תהליכים), Supabase (מסד נתונים, אחסון וניהול התחברות), Cloudflare R2 (אחסון מדיה בנפח גדול)."
    },
    {
     "t": "p",
     "label": "בינה מלאכותית",
     "x": "OpenAI, Anthropic (Claude)."
    },
    {
     "t": "p",
     "label": "תשלומים",
     "x": "Stripe (סליקה), Zoho Books (גישת קריאה לחשבוניות בצד הסוכנות)."
    },
    {
     "t": "p",
     "label": "דיוור ודוא\"ל",
     "x": "Resend (משלוח הודעות מערכת ודיוור)."
    },
    {
     "t": "p",
     "label": "נתוני פלטפורמה ואינטגרציות",
     "x": "Meta/Instagram, Google, Wix, ManyChat, רב מסר, Apify (איסוף פוסטים ציבוריים לצורכי מחקר ומדדים)."
    },
    {
     "t": "p",
     "label": "ניטור ותשתית פיתוח",
     "x": "Sentry (ניטור שגיאות — מוגדר כך שלא יועבר אליו מידע אישי), GitHub (ניהול קוד המקור, ללא מידע לקוחות)."
    },
    {
     "t": "p",
     "x": "עם ספקים המחזיקים או מעבירים מידע אישי מתקיימים הסכמי עיבוד נתונים (DPA). ככל שלקוח מעניק לסוכנות גישה לחשבונו, הרי שהסוכנות פועלת כמעבד משנה מטעם הלקוח ובהוראתו, והלקוח הוא המעניק והמסיר גישה זו — כמפורט בתנאי השימוש ובהסכם עיבוד הנתונים."
    },
    {
     "t": "h2",
     "x": "6. העברות מידע בינלאומיות"
    },
    {
     "t": "p",
     "x": "קופלו מאוגדת בקפריסין (מדינה החברה באיחוד האירופי). ייתכן שמידע יועבר לעיבוד בין ישראל, האיחוד האירופי וספקי ענן הפועלים בארה\"ב."
    },
    {
     "t": "p",
     "x": "הנציבות האירופית (European Commission) קבעה כי מדינת ישראל מספקת רמת הגנה נאותה למידע אישי (Adequacy Decision). משמעות הדבר היא שניתן להעביר מידע מהאיחוד האירופי לישראל ללא צורך בהליכים משפטיים נוספים."
    },
    {
     "t": "p",
     "x": "ביחס לספקים הפועלים מחוץ לאזור הכלכלי האירופי (כגון בארה\"ב), ההעברה מתבצעת בהתאם למסגרות העברה מוכרות (כגון Data Privacy Framework) או באמצעות סעיפים חוזיים סטנדרטיים (Standard Contractual Clauses – SCC)."
    },
    {
     "t": "h2",
     "x": "7. שמירת מידע (Data Retention)"
    },
    {
     "t": "p",
     "x": "אנו שומרים את המידע האישי שלך רק למשך הזמן הנדרש למטרות המפורטות במדיניות זו:"
    },
    {
     "t": "p",
     "label": "מידע תפעולי",
     "x": "יישמר כל עוד חשבונך פעיל או כנדרש לאספקת השירות."
    },
    {
     "t": "p",
     "label": "מידע חשבונאי",
     "x": "חשבוניות ופרטי עסקאות יישמרו למשך 7 שנים כנדרש על פי דיני המס."
    },
    {
     "t": "p",
     "label": "מידע שיווקי",
     "x": "יישמר עד לבקשתך להסרה מרשימת התפוצה (Unsubscribe)."
    },
    {
     "t": "p",
     "label": "יומני מערכת ותקלות",
     "x": "יישמרו לתקופה מוגבלת לצורכי אבטחה ותחזוקה."
    },
    {
     "t": "p",
     "x": "בתום תקופות אלו, המידע יימחק או יעבור אנונימיזציה מלאה."
    },
    {
     "t": "h2",
     "x": "8. אבטחת מידע"
    },
    {
     "t": "p",
     "x": "אנו נוקטים אמצעים טכניים וארגוניים סבירים להגנה על המידע האישי, לרבות הצפנת מידע בהעברה, הגבלת הגישה לגורמים מורשים בלבד על בסיס הצורך לדעת ובהתאם למדיניות פנימית, והחלת חובות סודיות על בעלי הגישה. מערך ניטור השגיאות מוגדר כך שלא ייכללו בו פרטי מידע אישי (מזהי משתמש אנונימיים, ניקוי כתובות דוא\"ל ואסימוני גישה, והשבתת הקלטת מושבים)."
    },
    {
     "t": "p",
     "x": "עם זאת, זכור/זכרי כי אף אמצעי אבטחה אינו מספק הגנה מוחלטת, והעברת נתונים באינטרנט אינה מאובטחת ב-100%."
    },
    {
     "t": "h2",
     "x": "9. זכויותיך (על פי ה-GDPR)"
    },
    {
     "t": "p",
     "x": "כנושא מידע (Data Subject), עומדות לרשותך הזכויות הבאות:"
    },
    {
     "t": "p",
     "x": "זכות הגישה — לבקש עותק מהמידע האישי שאנו מחזיקים אודותיך."
    },
    {
     "t": "p",
     "x": "זכות לתיקון — לבקש לתקן מידע שגוי או לא מעודכן."
    },
    {
     "t": "p",
     "x": "זכות למחיקה (\"הזכות להישכח\") — לבקש שנמחק את המידע שלך."
    },
    {
     "t": "p",
     "x": "זכות להגבלת עיבוד ולהתנגדות — לרבות התנגדות לעיבוד למטרות שיווק ישיר."
    },
    {
     "t": "p",
     "x": "זכות לניידות מידע — לקבל את המידע שלך בפורמט מובנה וקריא במכונה."
    },
    {
     "t": "p",
     "x": "זכות למשיכת הסכמה — במקרים בהם העיבוד מתבסס על הסכמתך, מבלי לגרוע מחוקיות העיבוד שבוצע קודם לכן."
    },
    {
     "t": "p",
     "x": "זכות להגשת תלונה — לרשות הפיקוח המוסמכת. הרשות הרלוונטית עבור קופלו היא נציבות הגנת המידע בקפריסין (Office of the Commissioner for Personal Data Protection, www.dataprotection.gov.cy)."
    },
    {
     "t": "p",
     "x": "מימוש הזכויות ייעשה בפנייה אלינו, ונשיב לפנייתך בתוך התקופה הקבועה בדין (ככלל, חודש), בכפוף להוראות הדין."
    },
    {
     "t": "h2",
     "x": "10. פרטיות קטינים"
    },
    {
     "t": "p",
     "x": "השירות מיועד לעסקים ולמשתמשים בני 18 ומעלה ואינו מכוון לקטינים. איננו אוספים ביודעין מידע אישי מקטינים מתחת לגיל 18."
    },
    {
     "t": "h2",
     "x": "11. שינויים במדיניות הפרטיות"
    },
    {
     "t": "p",
     "x": "אנו עשויים לעדכן מדיניות זו מעת לעת. במקרה של שינוי מהותי, נפרסם הודעה בולטת בשירות או נשלח הודעה בדוא\"ל. המשך השימוש בשירות לאחר העדכון מהווה הסכמה למדיניות המעודכנת."
    },
    {
     "t": "h2",
     "x": "12. יצירת קשר"
    },
    {
     "t": "p",
     "x": "לשאלות אודות מדיניות פרטיות זו, או לצורך מימוש זכויותיך, אנא פנה/י אלינו:"
    },
    {
     "t": "p",
     "label": "שם החברה",
     "x": "SheBossIt (Cyprus) Ltd"
    },
    {
     "t": "p",
     "label": "דואר אלקטרוני",
     "x": "contact@shebossit.com"
    },
    {
     "t": "p",
     "label": "כתובת",
     "x": "Ifigenias 8, Livadia, Cyprus"
    }
   ]
  },
  "en": {
   "title": "Privacy Policy — Coflow",
   "updated": "Last updated: 27/08/2026",
   "blocks": [
    {
     "t": "h2",
     "x": "1. Introduction"
    },
    {
     "t": "p",
     "label": "SheBossIt (Cyprus) Ltd  (hereinafter",
     "x": "\"Coflow\" or \"We\"), which operates the Coflow platform for managing the marketing, sales and clients of businesses, personal brands and agencies (the \"Platform\" or the \"Service\"), respects the privacy of its users and customers and is committed to protecting the Personal Data collected about them. This privacy policy describes how Coflow collects, uses, retains, discloses, and protects Personal Data when you use the Service, in accordance with the EU General Data Protection Regulation (GDPR) and applicable law."
    },
    {
     "t": "h3",
     "x": "1.1 Two Capacities — Data Controller and Data Processor"
    },
    {
     "t": "p",
     "x": "Coflow acts in two distinct capacities with respect to Personal Data, and it is important to distinguish between them:"
    },
    {
     "t": "p",
     "x": "As a Data Controller — with respect to the Personal Data of the account holders themselves (users who register for the Service). This privacy policy addresses this capacity."
    },
    {
     "t": "p",
     "x": "As a Data Processor — with respect to Personal Data that customers enter into the Platform about their own contacts, recipients and leads. In that case the customer is the owner of the database and the controller, and Coflow processes such data solely on the customer’s behalf and instructions. That processing is governed by a separate Data Processing Agreement (DPA), which forms part of the engagement terms, and is not governed by this privacy policy."
    },
    {
     "t": "h2",
     "x": "2. Information We Collect (as Data Controller)"
    },
    {
     "t": "p",
     "x": "The information described in this section relates to information Coflow collects in its capacity as Data Controller — that is, about account holders and visitors to the Service."
    },
    {
     "t": "h3",
     "x": "2.1 Information You Provide Directly"
    },
    {
     "t": "p",
     "x": "When you open an account and use the Service, we may collect:"
    },
    {
     "t": "p",
     "label": "Identity and contact details",
     "x": "full name, email address, field of business, and links to the profiles and platforms managed."
    },
    {
     "t": "p",
     "label": "Login credentials",
     "x": "email and password, or Google account details where you sign in with Google."
    },
    {
     "t": "p",
     "label": "Content and files you choose to upload",
     "x": "brand materials, post media, task attachments, profile pictures, and larger video and audio files; business documents such as price quotes and service descriptions; and personal documents and podcast content you choose to store on the Platform."
    },
    {
     "t": "h3",
     "x": "2.2 Information from Connected Accounts (Integrations)"
    },
    {
     "t": "p",
     "x": "Subject to the permission you grant, and using read-only permissions only, we pull information from accounts you choose to connect:"
    },
    {
     "t": "p",
     "x": "Instagram — basic business profile and posts."
    },
    {
     "t": "p",
     "x": "YouTube — channel and video statistics."
    },
    {
     "t": "p",
     "x": "Google Calendar — read-only calendar access and the account’s email address, and adding events created through the Service (such as booked calls and meetings). Coflow does not change or delete existing events."
    },
    {
     "t": "p",
     "x": "Zoho Books — read-only access to invoices and contacts, to match invoices to brands."
    },
    {
     "t": "p",
     "x": "Wix — for customers whose website is built on Wix."
    },
    {
     "t": "p",
     "x": "ManyChat — the account’s automation catalogue (flow names and growth tools), to link them to offers."
    },
    {
     "t": "p",
     "x": "Rav Messer — the subscribers in the lists you choose to connect, to import them into your Coflow mailing lists."
    },
    {
     "t": "p",
     "x": "You may revoke these permissions at any time."
    },
    {
     "t": "h3",
     "x": "2.3 Payment Information"
    },
    {
     "t": "p",
     "x": "Subscription details, payment status and service plan. Important Clarification: payments are processed by Stripe, and full credit-card details are not stored on Coflow’s servers."
    },
    {
     "t": "h3",
     "x": "2.4 Technical Information and Cookies"
    },
    {
     "t": "p",
     "x": "The Platform uses first-party cookies only, classified as follows:"
    },
    {
     "t": "p",
     "label": "Essential cookies",
     "x": "required to operate the Service, manage login, identify the current workspace and protect against request forgery when connecting external accounts. This use does not require consent under the GDPR."
    },
    {
     "t": "p",
     "label": "Functional cookies",
     "x": "store language and time-zone preferences for correct display."
    },
    {
     "t": "p",
     "label": "Affiliate (marketing) cookie",
     "x": "records the partner link through which you arrived (90-day lifetime), to credit affiliates. This cookie is not essential to the Service and is set only subject to your explicit consent through the cookie banner."
    },
    {
     "t": "p",
     "label": "Arrival-journey (marketing) cookie",
     "x": "records which channels and links you arrived through (90-day lifetime), to understand which channels bring sign-ups. This cookie is not essential to the Service and is set only subject to your explicit consent through the cookie banner."
    },
    {
     "t": "p",
     "label": "Diagnostic cookies",
     "x": "used for troubleshooting and internal testing only, and are not active in production under normal operation."
    },
    {
     "t": "p",
     "x": "The Platform does not use third-party cookies for advertising, analytics or user tracking (such as Google Analytics or Meta Pixel)."
    },
    {
     "t": "p",
     "label": "Note",
     "x": "the marketing website coflow.social is a separate environment from the Platform and uses a single functional cookie only, to remember the language choice."
    },
    {
     "t": "h3",
     "x": "2.5 Information Generated Through Use"
    },
    {
     "t": "p",
     "x": "Engagement metrics and follower data collected from connected accounts; basic usage data (signup date, last sign-in, brand name, plan and payment status, and the platforms managed) accessible to Coflow staff for operations and support; and technical log data for security and troubleshooting."
    },
    {
     "t": "h2",
     "x": "3. Processing by Artificial Intelligence (AI)"
    },
    {
     "t": "p",
     "x": "Certain Platform features rely on third-party AI engines — OpenAI and Anthropic (Claude). To operate the generation features, content you enter (including brand materials and business text you type) is transmitted to these providers to generate the requested output. Contact records are not routinely transmitted for these features."
    },
    {
     "t": "p",
     "x": "The AI providers act as Data Processors on Coflow’s behalf and under contractual commitments. The Platform does not make solely automated decisions producing legal or similarly significant effects concerning you. AI outputs are recommendations only, and reliance on them is at the user’s responsibility."
    },
    {
     "t": "h2",
     "x": "4. Purposes of Processing and Legal Basis"
    },
    {
     "t": "p",
     "x": "We process your Personal Data for the following purposes, based on the GDPR legal bases:"
    },
    {
     "t": "table",
     "head": [
      "Purpose of Processing",
      "Type of Data",
      "Legal Basis (GDPR)"
     ],
     "rows": [
      [
       "Providing the Service and operating the Platform",
       "Account details, content, files",
       "Contract — Art. 6(1)(b)"
      ],
      [
       "Account management, authentication and security",
       "Login credentials, log data",
       "Legitimate interest — Art. 6(1)(f)"
      ],
      [
       "AI-based generation features",
       "Content and business text entered",
       "Contract — Art. 6(1)(b)"
      ],
      [
       "Billing, payments and invoicing",
       "Subscription details, payment history",
       "Legal obligation / Contract — Art. 6(1)(c)/(b)"
      ],
      [
       "Service and operational communications",
       "Contact details",
       "Legitimate interest — Art. 6(1)(f)"
      ],
      [
       "Marketing communications from Coflow",
       "Name, email",
       "Consent / Legitimate interest — Art. 6(1)(a)/(f)"
      ],
      [
       "Affiliate attribution",
       "Affiliate link identifier",
       "Consent — Art. 6(1)(a)"
      ],
      [
       "Error monitoring and system security",
       "Anonymous user ID, performance data",
       "Legitimate interest — Art. 6(1)(f)"
      ],
      [
       "Compliance with legal obligations",
       "Accounting data",
       "Legal obligation — Art. 6(1)(c)"
      ]
     ]
    },
    {
     "t": "h2",
     "x": "5. Sharing Information with Third Parties"
    },
    {
     "t": "p",
     "x": "We do not sell your Personal Data. We share information only with the following parties and for the purpose of providing the Service. Our current list of service providers (sub-processors) includes:"
    },
    {
     "t": "p",
     "label": "Infrastructure and storage",
     "x": "Netlify (hosting and job execution), Supabase (database, storage and authentication), Cloudflare R2 (large-media storage)."
    },
    {
     "t": "p",
     "label": "Artificial intelligence",
     "x": "OpenAI, Anthropic (Claude)."
    },
    {
     "t": "p",
     "label": "Payments",
     "x": "Stripe (payment processing), Zoho Books (read-only invoice access on the agency side)."
    },
    {
     "t": "p",
     "label": "Email and messaging",
     "x": "Resend (system notifications and mailing). Platform data and integrations: Meta/Instagram, Google, Wix, ManyChat, Rav Messer, Apify (collection of publicly available posts for research and metrics)."
    },
    {
     "t": "p",
     "label": "Monitoring and development infrastructure",
     "x": "Sentry (error monitoring — configured so that no Personal Data is transmitted to it), GitHub (source-code management, no customer data)."
    },
    {
     "t": "p",
     "x": "Data Processing Agreements (DPAs) are in place with providers that hold or transmit Personal Data. Where a customer grants an agency access to its account, the agency acts as a sub-processor on the customer’s behalf and instructions, and it is the customer who grants and revokes such access — as detailed in the Terms of Use and the Data Processing Agreement."
    },
    {
     "t": "h2",
     "x": "6. International Data Transfers"
    },
    {
     "t": "p",
     "x": "Coflow is incorporated in Cyprus (an EU Member State). Information may be transferred for processing between Israel, the European Union and cloud providers operating in the United States."
    },
    {
     "t": "p",
     "x": "The European Commission has determined that Israel provides an adequate level of protection for Personal Data (Adequacy Decision). This means that Personal Data may be transferred from the European Union to Israel without the need for additional legal measures."
    },
    {
     "t": "p",
     "x": "With respect to providers operating outside the European Economic Area (such as in the United States), transfers are carried out in accordance with recognized transfer frameworks (such as the Data Privacy Framework) or by means of Standard Contractual Clauses (SCC)."
    },
    {
     "t": "h2",
     "x": "7. Data Retention"
    },
    {
     "t": "p",
     "x": "We retain your Personal Data only for as long as necessary for the purposes set out in this policy:"
    },
    {
     "t": "p",
     "label": "Operational data",
     "x": "retained for as long as your account is active or as required to provide the Service."
    },
    {
     "t": "p",
     "label": "Accounting data",
     "x": "invoices and transaction details are retained for 7 years as required by tax law."
    },
    {
     "t": "p",
     "label": "Marketing data",
     "x": "retained until you request removal from the mailing list (Unsubscribe)."
    },
    {
     "t": "p",
     "label": "System and error logs",
     "x": "retained for a limited period for security and maintenance."
    },
    {
     "t": "p",
     "x": "At the end of these periods, the data is deleted or anonymized."
    },
    {
     "t": "h2",
     "x": "8. Information Security"
    },
    {
     "t": "p",
     "x": "We take reasonable technical and organizational measures to protect Personal Data, including encryption of data in transit, limiting access to authorized personnel only on a need-to-know basis and in accordance with internal policy, and imposing confidentiality obligations on those with access. The error-monitoring setup is configured so that it does not include Personal Data (anonymous user IDs, scrubbing of email addresses and access tokens, and session recording disabled)."
    },
    {
     "t": "p",
     "x": "Nevertheless, please note that no security measure provides absolute protection, and transmission of data over the internet is not 100% secure."
    },
    {
     "t": "h2",
     "x": "9. Your Rights (under the GDPR)"
    },
    {
     "t": "p",
     "x": "As a Data Subject, you have the following rights:"
    },
    {
     "t": "p",
     "x": "Right of access — to request a copy of the Personal Data we hold about you."
    },
    {
     "t": "p",
     "x": "Right to rectification — to request correction of inaccurate or outdated information."
    },
    {
     "t": "p",
     "x": "Right to erasure (\"right to be forgotten\") — to request deletion of your data."
    },
    {
     "t": "p",
     "x": "Right to restriction and to object — including objection to processing for direct-marketing purposes."
    },
    {
     "t": "p",
     "x": "Right to data portability — to receive your data in a structured, machine- format."
    },
    {
     "t": "p",
     "x": "Right to withdraw consent — where processing is based on your consent, without affecting the lawfulness of processing carried out beforehand."
    },
    {
     "t": "p",
     "x": "Right to lodge a complaint — with the competent supervisory authority. The relevant authority for Coflow is the Cyprus data-protection authority (Office of the Commissioner for Personal Data Protection, www.dataprotection.gov.cy)."
    },
    {
     "t": "p",
     "x": "Rights are exercised by contacting us, and we will respond within the period prescribed by law (generally one month), subject to the provisions of the law."
    },
    {
     "t": "h2",
     "x": "10. Children’s Privacy"
    },
    {
     "t": "p",
     "x": "The Service is intended for businesses and users aged 18 and over and is not directed to minors. We do not knowingly collect Personal Data from minors under the age of 18."
    },
    {
     "t": "h2",
     "x": "11. Changes to this Privacy Policy"
    },
    {
     "t": "p",
     "x": "We may update this policy from time to time. In the event of a material change, we will post a prominent notice within the Service or send notice by email. Continued use of the Service after the update constitutes acceptance of the updated policy."
    },
    {
     "t": "h2",
     "x": "12. Contact Us"
    },
    {
     "t": "p",
     "x": "For questions regarding this privacy policy, or to exercise your rights, please contact us:"
    },
    {
     "t": "p",
     "label": "Company name",
     "x": "SheBossIt (Cyprus) Ltd"
    },
    {
     "t": "p",
     "label": "Email",
     "x": "contact@shebossit.com"
    },
    {
     "t": "p",
     "label": "Address",
     "x": "Ifigenias 8, Livadia, Cyprus"
    }
   ]
  }
 }
};
