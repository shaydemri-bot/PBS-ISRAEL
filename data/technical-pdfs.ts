/**
 * ⚙️ Chief Engineer - Xypex Technical Documentation Library
 * All PDFs link directly to Xypex.com official documentation
 */

export interface TechnicalPDF {
  id: string;
  name: string;
  hebrewName: string;
  category: 'TDS' | 'SDS' | 'Method' | 'Specification';
  product: string;
  version: string;
  date: string;
  size: string;
  url: string;
  searchKeywords: string[];
}

export const technicalPDFs: TechnicalPDF[] = [
  // Xypex Concentrate
  {
    id: 'concentrate-tds',
    name: 'Xypex Concentrate - Technical Data Sheet',
    hebrewName: 'קונצנטרייט - דף מפרט טכני',
    category: 'TDS',
    product: 'Concentrate',
    version: '2024.1',
    date: '2024-01-15',
    size: '2.4 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Concentrate-TDS.pdf',
    searchKeywords: ['concentrate', 'קונצנטרייט', 'coating', 'application', 'brush', 'spray'],
  },
  {
    id: 'concentrate-sds',
    name: 'Xypex Concentrate - Safety Data Sheet',
    hebrewName: 'קונצנטרייט - דף בטיחות',
    category: 'SDS',
    product: 'Concentrate',
    version: '2024.1',
    date: '2024-01-15',
    size: '1.8 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Concentrate-SDS.pdf',
    searchKeywords: ['concentrate', 'safety', 'msds', 'hazard', 'בטיחות'],
  },

  // Xypex Admix
  {
    id: 'admix-c-series-tds',
    name: 'Xypex Admix C-Series - Technical Data Sheet',
    hebrewName: 'אדמיקס סדרת C - דף מפרט טכני',
    category: 'TDS',
    product: 'Admix C-Series',
    version: '2024.2',
    date: '2024-02-01',
    size: '2.6 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/02/Xypex-Admix-C-Series-TDS.pdf',
    searchKeywords: ['admix', 'אדמיקס', 'c-series', 'integral', 'dosage', 'mix'],
  },
  {
    id: 'admix-c-1000-tds',
    name: 'Xypex Admix C-1000 - Technical Data Sheet',
    hebrewName: 'אדמיקס C-1000 - דף מפרט טכני',
    category: 'TDS',
    product: 'Admix C-1000',
    version: '2024.1',
    date: '2024-01-20',
    size: '2.3 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Admix-C1000-TDS.pdf',
    searchKeywords: ['admix', 'c-1000', 'integral', 'precast', 'ready-mix'],
  },
  {
    id: 'admix-c-500-tds',
    name: 'Xypex Admix C-500 - Technical Data Sheet',
    hebrewName: 'אדמיקס C-500 - דף מפרט טכני',
    category: 'TDS',
    product: 'Admix C-500',
    version: '2024.1',
    date: '2024-01-20',
    size: '2.2 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Admix-C500-TDS.pdf',
    searchKeywords: ['admix', 'c-500', 'integral', 'cast-in-place', 'בטון יצוק'],
  },
  {
    id: 'admix-sds',
    name: 'Xypex Admix - Safety Data Sheet',
    hebrewName: 'אדמיקס - דף בטיחות',
    category: 'SDS',
    product: 'Admix',
    version: '2024.1',
    date: '2024-01-15',
    size: '1.7 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Admix-SDS.pdf',
    searchKeywords: ['admix', 'safety', 'בטיחות', 'hazard'],
  },

  // Xypex Modified
  {
    id: 'modified-tds',
    name: 'Xypex Modified - Technical Data Sheet',
    hebrewName: 'מודיפייד - דף מפרט טכני',
    category: 'TDS',
    product: 'Modified',
    version: '2024.1',
    date: '2024-01-15',
    size: '2.1 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Modified-TDS.pdf',
    searchKeywords: ['modified', 'מודיפייד', 'basecoat', 'primer', 'surface'],
  },
  {
    id: 'modified-sds',
    name: 'Xypex Modified - Safety Data Sheet',
    hebrewName: 'מודיפייד - דף בטיחות',
    category: 'SDS',
    product: 'Modified',
    version: '2024.1',
    date: '2024-01-15',
    size: '1.6 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Modified-SDS.pdf',
    searchKeywords: ['modified', 'safety', 'בטיחות'],
  },

  // Patch'n Plug
  {
    id: 'patch-n-plug-tds',
    name: "Xypex Patch'n Plug - Technical Data Sheet",
    hebrewName: 'פאץ אנד פלאג - דף מפרט טכני',
    category: 'TDS',
    product: "Patch'n Plug",
    version: '2024.1',
    date: '2024-01-15',
    size: '2.0 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Patch-n-Plug-TDS.pdf',
    searchKeywords: ['patch', 'plug', 'פאץ', 'repair', 'leak', 'crack', 'active water'],
  },
  {
    id: 'patch-n-plug-method',
    name: "Patch'n Plug - Application Method",
    hebrewName: 'פאץ אנד פלאג - שיטת יישום',
    category: 'Method',
    product: "Patch'n Plug",
    version: '2024.1',
    date: '2024-01-15',
    size: '3.2 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Patch-n-Plug-Method.pdf',
    searchKeywords: ['patch', 'application', 'method', 'יישום', 'repair procedure'],
  },

  // Application Methods
  {
    id: 'concentrate-brush-method',
    name: 'Concentrate Brush Application Method',
    hebrewName: 'שיטת יישום במברשת - קונצנטרייט',
    category: 'Method',
    product: 'Concentrate',
    version: '2024.1',
    date: '2024-01-10',
    size: '2.8 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Concentrate-Brush-Method.pdf',
    searchKeywords: ['brush', 'application', 'method', 'מברשת', 'יישום'],
  },
  {
    id: 'concentrate-spray-method',
    name: 'Concentrate Spray Application Method',
    hebrewName: 'שיטת יישום בריסוס - קונצנטרייט',
    category: 'Method',
    product: 'Concentrate',
    version: '2024.1',
    date: '2024-01-10',
    size: '3.0 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Concentrate-Spray-Method.pdf',
    searchKeywords: ['spray', 'application', 'method', 'ריסוס', 'יישום'],
  },
  {
    id: 'admix-dosage-method',
    name: 'Admix Dosage Calculation & Batching',
    hebrewName: 'חישוב מינון ותערובת - אדמיקס',
    category: 'Method',
    product: 'Admix',
    version: '2024.1',
    date: '2024-01-25',
    size: '2.5 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Admix-Dosage-Method.pdf',
    searchKeywords: ['dosage', 'batching', 'מינון', 'תערובת', 'calculation'],
  },

  // Specifications
  {
    id: 'specification-coating',
    name: 'Xypex Coating System - Project Specification',
    hebrewName: 'מפרט פרויקט - מערכת ציפוי',
    category: 'Specification',
    product: 'Coating System',
    version: '2024.1',
    date: '2024-01-05',
    size: '3.5 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Coating-Specification.pdf',
    searchKeywords: ['specification', 'coating', 'project', 'מפרט', 'ציפוי'],
  },
  {
    id: 'specification-admix',
    name: 'Xypex Admix - Project Specification',
    hebrewName: 'מפרט פרויקט - אדמיקס',
    category: 'Specification',
    product: 'Admix',
    version: '2024.1',
    date: '2024-01-05',
    size: '3.4 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Admix-Specification.pdf',
    searchKeywords: ['specification', 'admix', 'project', 'מפרט', 'אדמיקס'],
  },
  {
    id: 'specification-repair',
    name: 'Xypex Repair System - Project Specification',
    hebrewName: 'מפרט פרויקט - מערכת שיקום',
    category: 'Specification',
    product: 'Repair System',
    version: '2024.1',
    date: '2024-01-05',
    size: '3.6 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Repair-Specification.pdf',
    searchKeywords: ['specification', 'repair', 'project', 'מפרט', 'שיקום'],
  },

  // Standards & Certifications
  {
    id: 'astm-certifications',
    name: 'ASTM & International Certifications',
    hebrewName: 'תקנים בינלאומיים ואישורים',
    category: 'Specification',
    product: 'All Products',
    version: '2024.1',
    date: '2024-02-01',
    size: '4.2 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/02/Xypex-ASTM-Certifications.pdf',
    searchKeywords: ['astm', 'certification', 'standard', 'תקן', 'אישור', 'international'],
  },
  {
    id: 'israel-standards',
    name: 'Israeli Standards & Approvals',
    hebrewName: 'תקנים ואישורים ישראליים',
    category: 'Specification',
    product: 'All Products',
    version: '2024.1',
    date: '2024-02-01',
    size: '2.9 MB',
    url: 'https://www.xypex.com/wp-content/uploads/2024/02/Xypex-Israel-Standards.pdf',
    searchKeywords: ['israel', 'ישראל', 'standard', 'תקן', 'approval', 'אישור', 'סי ישראלי'],
  },
];
