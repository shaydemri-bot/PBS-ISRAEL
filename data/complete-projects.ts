/**
 * ⚙️ Chief Engineer - Complete Project Database
 * ALL projects from PBS Israel + existing infrastructure projects
 * Validated technical data with proper Hebrew engineering terminology
 */

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  year: string;
  featured?: boolean; // For homepage featured section
  scale?: string; // Project scale/metrics
}

export const projectCategories = [
  { id: 'all', label: 'כל הפרויקטים' },
  { id: 'infrastructure', label: 'מבני תשתית' },
  { id: 'water', label: 'מתקני מים' },
  { id: 'commercial', label: 'מבנים מסחריים' },
  { id: 'residential', label: 'מגורים' },
  { id: 'industrial', label: 'תעשייה' },
  { id: 'institutional', label: 'מוסדות ציבור' },
];

export const projects: Project[] = [
  // ============ INFRASTRUCTURE MEGA-PROJECTS ============
  {
    id: 'sorek-b',
    title: 'מתקן ההתפלה שורק B',
    location: 'פלמחים, ישראל',
    category: 'water',
    year: '2023',
    featured: true,
    scale: '200 מיליון מ"ק/שנה',
    description: 'מתקן ההתפלה הגדול בעולם בהספק 200 מיליון מ"ק מים בשנה',
    challenge: 'מתקן ההתפלה הגדול והמתקדם בעולם עם תפוקה של 200 מיליון מ"ק מים בשנה, נדרש לעמוד בפני לחץ הידרוסטטי גבוה במיוחד, חשיפה מתמדת למי ים אגרסיביים, ודרישות איכות מחמירות. הפתרון נדרש להיות קבוע ללא תחזוקה תכופה.',
    solution: 'יישום Xypex Admix C-500 NF במהלך יציקת כל מבני הבטון. למעלה מ-300 טון Xypex Admixture שימשו בפרויקט. השימוש בטכנולוגיית הקריסטליזציה מאפשר איטום מלא של שטח חתך הבטון, עמידות מוחלטת בפני מי ים וכימיקלים, ויכולת התחדשות עצמית.',
    image: '/images/projects/water-facility.jpg',
  },
  {
    id: 'ashkelon-expansion',
    title: 'מתקן ההתפלה אשקלון - הרחבה',
    location: 'אשקלון, ישראל',
    category: 'water',
    year: '2024',
    featured: false,
    scale: '220 מיליון מ"ק/שנה',
    description: 'הרחבת מתקן ההתפלה מ-120 ל-220 מיליון מ"ק לשנה',
    challenge: 'הרחבת אחד ממתקני ההתפלה הגדולים בעולם תוך המשך פעילות שוטפת. נדרש פתרון איטום למבני בטון העומדים בלחץ הידרוסטטי גבוה ביותר ובסביבה אגרסיבית של מי ים.',
    solution: 'טיפול ב-Xypex Concentrate על משטחי הבטון. שימוש ב-Xypex Patch\'n Plug לאיטום צמתים קריטיים. הוספת Bio-San C500 למבני טיפול בשפכים לעמידות בפני קורוזיה מיקרוביולוגית (MIC).',
    image: '/images/projects/water-facility.jpg',
  },
  {
    id: 'tel-aviv-metro',
    title: 'מטרו תל אביב - הקו האדום',
    location: 'תל אביב-יפו, ישראל',
    category: 'infrastructure',
    year: '2024',
    featured: true,
    scale: '78 ק"מ מנהרות + 59 תחנות',
    description: 'פרויקט תשתית לאומי בהשקעה של $49B',
    challenge: 'אחד מפרויקטי התשתית הגדולים בהיסטוריה הישראלית. 1.25 מיליון מקטעי בטון לחיפוי מנהרות. אתגרים: לחצי מי תהום גבוהים, סביבת קרקע משתנה, דרישות אטימות מוחלטת, תקני בטיחות מחמירים.',
    solution: 'שילוב Xypex Admix בכל מקטעי הבטון (מעל מיליון יחידות). Xypex Modified כציפוי משני לחיזוק במקטעים קריטיים. Xypex Concentrate על דפנות התחנות התת-קרקעיות. המערכת מבטיחה אטימות מוחלטת ויכולת "ריפוי עצמי".',
    image: '/images/projects/tunnel.jpg',
  },
  {
    id: 'jerusalem-rail',
    title: 'רכבת מהירה לירושלים',
    location: 'ירושלים - תל אביב, ישראל',
    category: 'infrastructure',
    year: '2018',
    featured: false,
    scale: '6 ק"מ מנהרות',
    description: 'איטום מנהרות רכבת במסילת הרכבת המהירה',
    challenge: 'חפירת מנהרות דרך תנאי קרקע משתנים, לחצי מי תהום גבוהים באזור הרים, וחשיפה ללחות ומים. הדרישה: איטום מלא, עמידות בפני סדיקה, והגנה על תשתית הברזל מפני קורוזיה.',
    solution: 'יישום Xypex Concentrate על כל דפנות הבטון. שימוש ב-Xypex Patch\'n Plug לטיפול בנקודות חיבור ותפרי התפשטות. Gamma Cure לטיפול אחזקה אופטימלי. התוצאה: מנהרות אטומות לחלוטין.',
    image: '/images/projects/tunnel.jpg',
  },
  {
    id: 'green-line',
    title: 'הקו הירוק - רכבת קלה תל אביב',
    location: 'תל אביב - הרצליה, ישראל',
    category: 'infrastructure',
    year: '2028',
    featured: false,
    scale: '5 ק"מ מנהרות',
    description: 'מנהרות רכבת קלה ותחנות תת-קרקעיות (פתיחה 2028-2030)',
    challenge: 'חפירה בסביבה עירונית צפופה מתחת למפלס מי התהום. הגנה מפני חדירת מים לתחנות, עמידות ברטיבות גבוהה, שילוב עם תשתיות עירוניות קיימות.',
    solution: 'Xypex Admix C-Series ביציקת כל מרכיבי הבטון. Xypex Concentrate על משטחים חשופים. Xypex Modified בתחנות המשמשות כממ"ד עם דרישות אטימות מחמירות. טכנולוגיה קריסטלית לאטימות ארוכת טווח.',
    image: '/images/projects/infrastructure.jpg',
  },
  {
    id: 'underground-pipes',
    title: 'צנרת התפלה תת-קרקעית',
    location: 'חוף הים התיכון, ישראל',
    category: 'water',
    year: '2021',
    featured: false,
    scale: '9.7 ק"מ צנרת',
    description: 'איטום קווי הזנה והחזרת מלחת במנהרות תת-ימיות',
    challenge: '9.7 ק"מ צינורות בטון במנהרות תת-קרקעיות מתחת לקרקעית הים. לחץ הידרוסטטי גבוה, חשיפה לסביבת מי ים אגרסיבית, סדקים שנוצרו במהלך pipe-jacking, דרישה לאטימות מוחלטת.',
    solution: 'תוספת 1.5% Xypex C-500 NF Admixture לכל הבטון - למעלה מ-300 טון. טכנולוגיה קריסטלית אִפשרה "ריפוי עצמי" של כל הסדקים. דליפות נעצרו לחלוטין תוך ימים. שימוש נוסף ב-Concentrate ו-Patch\'n Plug לצמתים.',
    image: '/images/projects/construction.jpg',
  },

  // ============ COMMERCIAL & RESIDENTIAL ============
  {
    id: 'midtown',
    title: 'Midtown Towers',
    location: 'תל אביב, ישראל',
    category: 'commercial',
    year: '2020',
    featured: true,
    scale: '2×50 קומות',
    description: 'פרויקט מגורים ומסחר יוקרתי - איטום מרתפים תת-קרקעיים',
    challenge: 'מרתפים וחניונים תת-קרקעיים מתחת למפלס מי התהום. מניעת חדירת מי תהום, עמידות בלחץ הידרוסטטי גבוה, הגנה מפני קורוזיה. פרויקט יוקרה עם דרישות אסתטיות גבוהות.',
    solution: 'טיפול ב-Xypex Concentrate על כל קירות החניונים התת-קרקעיים. Xypex Patch\'n Plug לאיטום נקודות מעבר צנרת וצמתים. Xypex Admix לבטון בהרחבות. הפרויקט זכה להכרה כ-Runner-up בתחרות "Best International Project 2020".',
    image: '/images/projects/commercial.jpg',
  },
  {
    id: 'hatze\'irim-towers',
    title: 'מגדלי הצעירים',
    location: 'תל אביב, ישראל',
    category: 'residential',
    year: '2022',
    featured: false,
    scale: '40+46 קומות',
    description: 'זוג מגדלי מגורים מעוגלים המחוברים בגשר ייחודי',
    challenge: 'מגדל צפוני בן 40 קומות ומגדל דרומי בן 46 קומות באזור מאתגר במיוחד מבחינת מי תהום. הדרישה: איטום רפסודות ומאגרי מים בתנאי לחץ הידרוסטטי קיצוני.',
    solution: 'שימוש ב-Xypex לאיטום הרפסודות ומאגרי המים. טיפול מקיף בכל מערכות האחסון והחזקת המים. המערכת עומדת בפני הלחץ ההידרוסטטי הגבוה ומבטיחה אטימות מלאה.',
    image: '/images/projects/commercial.jpg',
  },
  {
    id: 'park-hayam',
    title: 'פארק הים',
    location: 'בת ים, ישראל',
    category: 'residential',
    year: '2021',
    featured: false,
    scale: '25 קומות',
    description: 'מגדל מגורים + מתחם תעסוקה ומסחר',
    challenge: 'מגדל מגורים בן 25 קומות כולל מתחם תעסוקה ושטחי מסחר. פירי מעלית ורצפת חניון מצויים בתוך מי תהום, דורשים איטום מוחלט ועמידות ארוכת טווח.',
    solution: 'שימוש ב-Xypex לאיטום פירי המעלית ורצפת החניון המצויים במי תהום. הטכנולוגיה הקריסטלית מבטיחה אטימות מלאה והגנה מפני חדירת מים.',
    image: '/images/projects/commercial.jpg',
  },
  {
    id: 'landmark',
    title: 'Landmark',
    location: 'תל אביב, ישראל',
    category: 'commercial',
    year: '2021',
    featured: false,
    scale: 'מעל 8,000 מ"ק בטון',
    description: 'פרויקט הדגל של אלקטרה ודניה סיבוס',
    challenge: 'אחת הרפסודות הגדולות בארץ עם מעל 8,000 קוב בטון. נדרש פתרון מקיף לכל קומות המרתף תוך התמודדות יעילה עם מי תהום ולחצים הידרוסטטיים גבוהים.',
    solution: 'שימוש ב-Xypex בכל קומות המרתף כולל טיפול מיוחד בהתמודדות עם מי תהום. פתרון מקיף המשלב Admix וציפויים לאטימות מלאה של המבנה התת-קרקעי.',
    image: '/images/projects/commercial.jpg',
  },
  {
    id: 'narkisim',
    title: 'שכונת הנרקיסים',
    location: 'נס ציונה, ישראל',
    category: 'residential',
    year: '2023',
    featured: false,
    scale: '4,000 דירות',
    description: 'שכונה חדשה עם בניינים בני 5-20 קומות',
    challenge: 'פרויקט מגורים נרחב של כ-4,000 דירות בבניינים בני 5-20 קומות. נדרש פתרון איטום אחיד ואמין לכל המבנים, כולל חניונים, רפסודות, ומאגרי מים.',
    solution: 'שימוש ב-Xypex בחניונים, קירות דיפון בכל מפלסי החניון, רצפות הרפסודות, מאגרי מים ויסודות. פתרון מקיף המבטיח אטימות לכל המבנים בשכונה.',
    image: '/images/projects/infrastructure.jpg',
  },
  {
    id: 'etz-hashaked',
    title: 'מבנה עץ השקד',
    location: 'נס ציונה, ישראל',
    category: 'commercial',
    year: '2020',
    featured: false,
    scale: '11 קומות משרדים',
    description: 'מבנה משרדים כולל קומת מסחר וחניון תת-קרקעי',
    challenge: 'מבנה משרדים בן 11 קומות עם קומת מסחר וחניון תת-קרקעי. דרישה לפתרון מהיר שיאפשר עבודה גם בימי גשם ויבטיח קירות יבשים לחלוטין.',
    solution: 'שימוש ב-Xypex בחניונים. השימוש במערכת הקריסטלית האיץ את לוחות הזמנים, אִפשר עבודה בימי חורף גשומים, והקירות יבשים לחלוטין.',
    image: '/images/projects/commercial.jpg',
  },

  // ============ INSTITUTIONAL & INDUSTRIAL ============
  {
    id: 'national-library',
    title: 'הספרייה הלאומית',
    location: 'ירושלים, ישראל',
    category: 'institutional',
    year: '2022',
    featured: true,
    scale: '5 קומות תת"ק + 7 עיליות',
    description: 'משכן הספרייה הלאומית - מרכז מחקר ותרבות',
    challenge: 'מבנה כולל 5 קומות תת-קרקעיות (29,300 מ"ר) ו-7 קומות עיליות (16,700 מ"ר). שתי קומות תחתונות לאחסון האוסף הייחודי והנדיר של מדינת ישראל. דרישה לשימור אופטימלי לאורך עשרות שנים.',
    solution: 'איטום נרחב ומקיף של כל האזורים התת-קרקעיים ב-Xypex. טיפול מיוחד בקומות אחסון האוסף להבטחת סביבה יבשה לחלוטין. המערכת מבטיחה שימור מושלם של האוסף הלאומי.',
    image: '/images/projects/infrastructure.jpg',
  },
  {
    id: 'amdocs-raanana',
    title: 'קמפוס אמדוקס',
    location: 'רעננה, ישראל',
    category: 'commercial',
    year: '2023',
    featured: false,
    scale: '87,386 מ"ר',
    description: 'קמפוס משרדים לאמדוקס - 7 בניינים על חניון משותף',
    challenge: 'הקמת קמפוס משרדים כולל 7 בנייני משרדים על חניון תת-קרקעי משותף בן 3 קומות בשטח 87,386 מ"ר. דרישה לאיטום מקיף של כל מערכות התשתית התת-קרקעית.',
    solution: 'שימוש ב-Xypex בחניונים, רצפות, מאגרי מים ובור שאיבה. פתרון מקיף המבטיח אטימות לכל התשתיות התת-קרקעיות של הקמפוס.',
    image: '/images/projects/commercial.jpg',
  },
  {
    id: 'sharona-hotel',
    title: 'מלון שרונה',
    location: 'תל אביב, ישראל',
    category: 'commercial',
    year: '2020',
    featured: false,
    scale: 'פרויקט מורכב במי תהום',
    description: 'פרויקט מלון מורכב עם מגוון פתרונות איטום',
    challenge: 'פרויקט מורכב במי תהום עם מגוון רחב של אתגרי איטום: יריעות, הזרקות, תפרים ובריכות. דרישה לייעוץ מקצועי החל משלב תכנון הביצוע.',
    solution: 'ייעוץ מקצועי משלב תכנון הביצוע וליווי עד ליישום הפתרונות השונים. שילוב מערכות Xypex עם פתרונות משלימים להשגת אטימות מושלמת.',
    image: '/images/projects/commercial.jpg',
  },
  {
    id: 'wastewater',
    title: 'מתקני טיפול בשפכים',
    location: 'אזור המרכז, ישראל',
    category: 'industrial',
    year: '2022',
    featured: false,
    scale: 'מתקנים אזוריים',
    description: 'איטום והגנה בסביבה אגרסיבית ביותר',
    challenge: 'חשיפה לסביבה האגרסיבית ביותר: שפכים חומציים, מימן גופריתי (H₂S), קורוזיה מיקרוביולוגית (MIC), לחות קבועה. דרישה להגנה מרבית והארכת חיי השירות.',
    solution: 'שימוש ב-Bio-San C500 - מוצר ייחודי המשלב קריסטליזציה והגנה אנטי-מיקרוביאלית. Xypex Concentrate כשכבת משנה. התוצאה: הארכת חיי המבנים פי 3, חיסכון בתחזוקה ושיפור ביצועים.',
    image: '/images/projects/industrial.jpg',
  },
];

// Featured projects for homepage (3-4 key projects)
export const featuredProjects = projects.filter(p => p.featured);

// Get projects by category
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') return projects;
  return projects.filter(p => p.category === category);
}

// Get project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}
