/**
 * ⚙️ Chief Engineer - Xypex Technical Catalog
 * Complete technical specifications for all Xypex products
 * High-end Hebrew engineering terminology
 */

export interface Product {
  id: string;
  name: string;
  hebrewName: string;
  category: string;
  shortDescription: string;
  technicalDescription: string;
  applications: string[];
  keyBenefits: string[];
  technicalData?: {
    appearance?: string;
    packaging?: string;
    coverage?: string;
    shelfLife?: string;
  };
  image: string;
  datasheet?: string;
}

export const productCategories = [
  { id: 'all', label: 'כל המוצרים' },
  { id: 'admixtures', label: 'תוספים לבטון' },
  { id: 'coatings', label: 'ציפויים' },
  { id: 'repairs', label: 'תיקונים ואביזרים' },
];

export const products: Product[] = [
  // ============ ADMIXTURES / תוספים לבטון ============
  {
    id: 'admix-c-series',
    name: 'Xypex Admix C-Series',
    hebrewName: 'Xypex Admix C-Series',
    category: 'admixtures',
    shortDescription: 'תוסף קריסטלי לאיטום בטון מובנה',
    technicalDescription: 'Xypex Admix הינו תוסף כימי המכיל פורטלנד צמנט, סיליקה, וכימיקלים אקטיביים ייחודיים. התוסף מעורבב ישירות לתערובת הבטון במהלך הערבול, ויוצר מערכת קריסטלית תלת-ממדית בתוך מטריצת הבטון. הקריסטלים חודרים עמוק לתוך שטח חתך הבטון, חוסמים נקבוביות ומיקרו-סדקים, ומונעים חדירת מים. המערכת הקריסטלית נותרת דורמנטית בבטון ומסוגלת להתחדש בנוכחות מים עתידית, ובכך "לרפא" סדקים חדשים באופן אוטונומי.',
    applications: [
      'מבני תשתית: מנהרות, קירות דיפון, יסודות עמוקים',
      'מתקני מים: מתקני התפלה, מאגרי מים, צנרת בטון',
      'מתקני טיפול בשפכים: בריכות אוורור, מבני טיפול, בורות שאיבה',
      'חניונים תת-קרקעיים: רפסודות, קירות היקפיים, תקרות',
      'מבני ימיים: רציפים, שוברי גלים, מזחים',
      'מבני הגנה: ממ"דים, מפקדות מוגנות, מתקנים צבאיים',
      'פרויקטי בטון טרום: קירות טרומים, מרכיבי מנהרות, צינורות בטון',
    ],
    keyBenefits: [
      'איטום קבוע מובנה בבטון - "איטום מבפנים החוצה"',
      'יכולת "ריפוי עצמי" אוטונומית של סדקים עד 0.5 מ"מ',
      'עמידות בפני לחץ הידרוסטטי חיובי ושלילי (Positive & Negative)',
      'התנגדות מוחלטת לחומרים כימיים אגרסיביים',
      'שיפור אטימות הבטון ללא שינוי תכונות מכאניות',
      'עמידות במי ים, כלוריד וסולפט',
      'התאמה לתקנים: NSF 61 (מי שתייה), EN 934 (אירופה), ASTM C494',
      'ידידותי לסביבה - ללא VOC, אטום למזון',
    ],
    technicalData: {
      appearance: 'אבקה אפורה',
      packaging: '5 ק"ג, 10 ק"ג, 20 ק"ג שקים | 1,000 ק"ג שקי ביג-בג',
      coverage: '0.5-1.5% ממשקל הבטון (תלוי ביישום ודרישות)',
      shelfLife: '12 חודשים באחסון יבש',
    },
    image: '/images/Prod/Admix-Series.png.webp',
    datasheet: '/catalogs/xypex-admix-c-series.pdf',
  },
  {
    id: 'bio-san-c500',
    name: 'Bio-San C500',
    hebrewName: 'Bio-San C500',
    category: 'admixtures',
    shortDescription: 'תוסף קריסטלי עם הגנה אנטי-מיקרוביאלית',
    technicalDescription: 'Bio-San C500 הינו תוסף קריסטלי ייחודי המשלב את טכנולוגיית Xypex עם הגנה אנטי-מיקרוביאלית. התוסף מיועד במיוחד למתקני טיפול בשפכים, בריכות ביוב, ומבנים החשופים לקורוזיה מיקרוביולוגית (MIC - Microbiologically Induced Corrosion). הפורמולה המיוחדת מונעת התפתחות חיידקים גופרתיים (sulfate-reducing bacteria) היוצרים חומצה גופרתית (H₂SO₄) הגורמת לקורוזיה חמורה של הבטון.',
    applications: [
      'מתקני טיפול בשפכים: בריכות אוורור, מפריד שומנים, בריכות ביולוגיות',
      'תחנות שאיבה: בורות שאיבה, מבני תחנות, צנרת כניסה',
      'מתקני טיפול תעשייתיים: שפכים כימיים, תעשיות מזון, בתי זיקוק',
      'מאגרי אגירה: מאגרים לשפכים, בריכות איזון, מאגרי אנאירוביים',
      'תשתיות ביוב: קולקטורים, מנהרות ביוב, תאי בקרה',
    ],
    keyBenefits: [
      'מניעת קורוזיה מיקרוביולוגית (MIC) - הגנה ייחודית מסוגה',
      'התנגדות לחומצה גופרתית (H₂SO₄) וכימיקלים אגרסיביים',
      'הארכת חיי שירות פי 3-5 לעומת בטון לא מוגן',
      'שילוב איטום + הגנה אנטי-מיקרוביאלית בפתרון אחד',
      'חיסכון משמעותי בעלויות תחזוקה ושיקום',
      'עמידות ל-pH נמוך (סביבה חומצית)',
      'אטום למי שתייה (NSF 61)',
    ],
    technicalData: {
      appearance: 'אבקה אפורה-ירקרקה',
      packaging: '20 ק"ג שקים',
      coverage: '1-2% ממשקל הבטון',
      shelfLife: '12 חודשים באחסון יבש',
    },
    image: '/images/Prod/Bio-San.jpg',
    datasheet: '/catalogs/bio-san-c500.pdf',
  },

  // ============ SURFACE COATINGS / ציפויים ============
  {
    id: 'concentrate',
    name: 'Xypex Concentrate',
    hebrewName: 'Xypex Concentrate',
    category: 'coatings',
    shortDescription: 'ציפוי קריסטלי בעל ריכוז גבוה',
    technicalDescription: 'Xypex Concentrate הינו ציפוי צמנטי אפור-כהה המכיל מערכת כימית קריסטלית בריכוז גבוה. הציפוי מיושם על משטחי בטון כבר קיימים, וחודר עמוק לתוך מטריצת הבטון (עד 90 ס"מ במחקרי מעבדה). הכימיקלים האקטיביים מגיבים עם תוצרי הידרציה של הצמנט ויוצרים קריסטלים בלתי מסיסים בתוך נקבוביות ומיקרו-סדקים, וחוסמים את מעבר המים. הציפוי הופך לחלק בלתי נפרד ממבנה הבטון.',
    applications: [
      'קירות וקורות בטון חשופות: מפעלים, גשרים, מבני תשתית',
      'רצפות בטון: חניונים, מפעלים, מחסנים, מסופי נמל',
      'מאגרי מים ובריכות: מאגרים עיליים, בריכות שחייה, אקווריומים',
      'מנהרות: דפנות מנהרות רכבת, מנהרות כבישים, מנהרות הולכת מים',
      'קירות מרתפים: בניינים מסחריים, בתי מגורים, מרכזי קניות',
      'מבני הידרוליים: סכרים, תעלות השקייה, תעלות הולכת מים',
    ],
    keyBenefits: [
      'חדירה עמוקה לתוך הבטון (לא רק ציפוי משטחי)',
      'יכולת "ריפוי עצמי" - הקריסטלים נותרים אקטיביים לאורך חיי המבנה',
      'עמידות בלחץ הידרוסטטי חיובי ושלילי',
      'לא דורש הגנה נוספת או שכבה עליונה',
      'אינו משנה את המראה החיצוני של הבטון',
      'מאושר למגע עם מי שתייה (NSF 61)',
      'עמידות לכימיקלים, מלחים, ונפט',
    ],
    technicalData: {
      appearance: 'אבקה אפורה-כהה',
      packaging: '20 ק"ג שקים | 600 ק"ג משטחים',
      coverage: '0.8-1.0 ק"ג/מ"ר לשתי שכבות',
      shelfLife: '12 חודשים באחסון יבש',
    },
    image: '/images/Prod/CONCENTRATE.PNG',
    datasheet: '/catalogs/xypex-concentrate.pdf',
  },
  {
    id: 'modified',
    name: 'Xypex Modified',
    hebrewName: 'Xypex Modified',
    category: 'coatings',
    shortDescription: 'ציפוי קריסטלי לתנאי יישום מורכבים',
    technicalDescription: 'Xypex Modified הוא גרסה משופרת של Concentrate, עם ריכוז גבוה יותר של כימיקלים אקטיביים וגמישות מוגברת. מיועד במיוחד לתנאי יישום מאתגרים: משטחים עם תנועה מבנית, תפרים, צמתים, ואזורים הדורשים עמידות מוגברת. הפורמולה המיוחדת מאפשרת יישום גם על משטחים מעט רטובים או עם לחות קלה.',
    applications: [
      'תפרי עבודה ותפרי התפשטות',
      'צמתים ומפגשים: קיר-רצפה, קיר-קיר, קיר-תקרה',
      'אזורים עם תנועה מבנית קלה',
      'משטחים עם סדקים או אי-אחידות',
      'יישום על בטון מעט רטוב',
      'חיזוק וציפוי משני אחרי Concentrate',
    ],
    keyBenefits: [
      'ריכוז גבוה - חדירה מוגברת',
      'גמישות יחסית - מתאים לתפרים ותנועה קלה',
      'אפשרות יישום על משטח מעט רטוב',
      'מצמצם ריטבון בתפרי עבודה',
      'הגנה מוגברת באזורים קריטיים',
    ],
    technicalData: {
      appearance: 'אבקה אפורה',
      packaging: '20 ק"ג שקים',
      coverage: '1.0-1.2 ק"ג/מ"ר לשתי שכבות',
      shelfLife: '12 חודשים באחסון יבש',
    },
    image: '/images/Prod/Modified.png',
    datasheet: '/catalogs/xypex-modified.pdf',
  },

  // ============ REPAIRS & ACCESSORIES / תיקונים ואביזרים ============
  {
    id: 'patch-n-plug',
    name: 'Xypex Patch\'n Plug',
    hebrewName: 'Xypex Patch\'n Plug',
    category: 'repairs',
    shortDescription: 'איטום מהיר לסדקים ונקודות דליפה אקטיביות',
    technicalDescription: 'Xypex Patch\'n Plug הינו תערובת צמנט הידראולית מהירת התקשות (flash-set), המכילה כימיקלים קריסטליים. מיועד לאיטום מיידי של דליפות מים אקטיביות, סדקים, חורים, נקודות מעבר צנרת, ואזורי חיבור (tie holes). החומר מתקשה תוך 3-5 דקות ועוצר דליפת מים באופן מיידי, גם תחת לחץ הידרוסטטי גבוה. הקריסטלים הפנימיים מבטיחים איטום ארוך-טווח.',
    applications: [
      'עצירת דליפות מים אקטיביות תחת לחץ',
      'איטום חורי קשירה (tie holes) ועיגונים',
      'איטום נקודות מעבר צנרת, כבלים, וחדירות',
      'סתימת סדקים והשקעים בבטון',
      'הכנת משטח לפני יישום Concentrate/Modified',
      'תיקוני חירום במבנים תת-קרקעיים',
    ],
    keyBenefits: [
      'התקשות מהירה: 3-5 דקות (תלוי בטמפרטורה)',
      'עוצר דליפות מים אקטיביות מיידית',
      'עמידות בלחץ הידרוסטטי גבוה',
      'אינו מתכווץ - עמיד לשנים',
      'קל ליישום - לא נדרש ציוד מיוחד',
      'מכיל קריסטלים לאיטום ארוך-טווח',
    ],
    technicalData: {
      appearance: 'אבקה אפורה',
      packaging: '5 ק"ג, 10 ק"ג דליים',
      coverage: 'תלוי בגודל הסדק והתיקון',
      shelfLife: '12 חודשים באחסון יבש',
    },
    image: '/images/Prod/patch\'nplug.png',
    datasheet: '/catalogs/xypex-patch-n-plug.pdf',
  },
  {
    id: 'gamma-cure',
    name: 'Gamma Cure',
    hebrewName: 'Gamma Cure',
    category: 'repairs',
    shortDescription: 'ממברנת טיפול לבטון טרי',
    technicalDescription: 'Gamma Cure הינה ממברנת טיפול (curing membrane) על בסיס מים, המיושמת על בטון טרי. הממברנה יוצרת סרט דק על משטח הבטון, שומרת על הלחות הפנימית, ומאפשרת תהליך הידרציה אופטימלי. בשונה ממוצרי טיפול אחרים, Gamma Cure מתפרקת בתוך 28 יום ואינה דורשת הסרה לפני יישום ציפויים נוספים.',
    applications: [
      'טיפול בבטון טרי לאחר יציקה',
      'משטחים שיידרשו ציפוי עתידי',
      'רצפות בטון מוחלק',
      'משטחים גדולים חשופים לשמש',
    ],
    keyBenefits: [
      'מתפרקת בתוך 28 יום - אין צורך בהסרה',
      'מאפשרת הידרציה אופטימלית',
      'מפחיתה סדקי כיווץ',
      'על בסיס מים - ידידותי לסביבה',
      'קלה ליישום - ריסוס או גלילה',
    ],
    technicalData: {
      appearance: 'נוזל לבן-מעושן',
      packaging: '20 ליטר דליים, 200 ליטר חביות',
      coverage: '4-6 מ"ר/ליטר',
      shelfLife: '12 חודשים',
    },
    image: '/images/Prod/gamma.png',
    datasheet: '/catalogs/gamma-cure.pdf',
  },
];

// Get products by category
export function getProductsByCategory(category: string): Product[] {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

// Featured products for homepage
export const featuredProducts = [
  products.find(p => p.id === 'admix-c-series'),
  products.find(p => p.id === 'concentrate'),
  products.find(p => p.id === 'bio-san-c500'),
].filter(Boolean) as Product[];
