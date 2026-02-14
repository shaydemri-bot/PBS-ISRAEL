'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const featuredPDFs = [
  {
    id: 1,
    name: 'Xypex Concentrate',
    hebrewName: 'קונצנטרייט',
    type: 'TDS',
    size: '2.4 MB',
    color: 'from-blue-500 to-cyan-500',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Concentrate-TDS.pdf',
  },
  {
    id: 2,
    name: 'Xypex Admix',
    hebrewName: 'אדמיקס',
    type: 'SDS',
    size: '1.8 MB',
    color: 'from-emerald-500 to-teal-500',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Admix-SDS.pdf',
  },
  {
    id: 3,
    name: "Patch'n Plug",
    hebrewName: 'פאץ אנד פלאג',
    type: 'Method',
    size: '3.2 MB',
    color: 'from-orange-500 to-amber-500',
    url: 'https://www.xypex.com/wp-content/uploads/2024/01/Xypex-Patch-n-Plug-Method.pdf',
  },
];

/**
 * Technical Library Component
 * Quick access to key PDF datasheets
 * Links to full technical library page
 */
export default function TechnicalLibrary() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          ספרייה <span className="text-accent">טכנית</span>
        </h3>
        <p className="text-slate opacity-70">דפי מפרט, בטיחות, ויישום</p>
      </div>

      {/* PDF Cards */}
      <div className="flex-1 space-y-4">
        {featuredPDFs.map((pdf, index) => (
          <motion.a
            key={pdf.id}
            href={pdf.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="block group relative overflow-hidden rounded-2xl p-6 border border-glass-border hover:border-accent/50 transition-all bg-glass-bg backdrop-blur-sm"
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${pdf.color} opacity-0 group-hover:opacity-10 transition-opacity`}
            />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <svg className="w-10 h-10 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div>
                  <div className="text-lg font-bold text-foreground mb-1">
                    {pdf.hebrewName}
                  </div>
                  <div className="text-sm text-slate opacity-70">{pdf.name}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-mono px-2 py-1 rounded bg-accent/10 text-accent mb-2">
                  {pdf.type}
                </div>
                <div className="text-xs text-slate opacity-50">{pdf.size}</div>
              </div>
            </div>

            {/* Download arrow */}
            <motion.div
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* View Full Library Button */}
      <Link href="/technical-library">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 px-6 py-4 rounded-xl bg-accent text-white font-semibold text-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
        >
          עיין בספרייה המלאה
          <span className="mr-2">→</span>
        </motion.button>
      </Link>
    </div>
  );
}
