'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technicalPDFs, type TechnicalPDF } from '@/data/technical-pdfs';

const categories = ['All', 'TDS', 'SDS', 'Method', 'Specification'] as const;
type Category = typeof categories[number];

/**
 * Technical PDF Table Component
 * Searchable, filterable table of all Xypex technical documentation
 */
export default function TechnicalPDFTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'size'>('name');

  // Filter and sort PDFs
  const filteredPDFs = useMemo(() => {
    let result = technicalPDFs;

    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter((pdf) => pdf.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (pdf) =>
          pdf.name.toLowerCase().includes(query) ||
          pdf.hebrewName.toLowerCase().includes(query) ||
          pdf.product.toLowerCase().includes(query) ||
          pdf.searchKeywords.some((keyword) => keyword.toLowerCase().includes(query))
      );
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'name') {
        return a.hebrewName.localeCompare(b.hebrewName, 'he');
      } else if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        // Sort by size (parse MB)
        const sizeA = parseFloat(a.size);
        const sizeB = parseFloat(b.size);
        return sizeB - sizeA;
      }
    });

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  return (
    <div className="space-y-8">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="w-full md:w-96">
          <div className="relative">
            <input
              type="text"
              placeholder="חיפוש מסמכים..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-glass-border bg-glass-bg backdrop-blur-sm text-foreground placeholder:text-slate/50 focus:outline-none focus:border-accent transition-colors"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate/50">🔍</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-accent text-white shadow-lg shadow-accent/20'
                  : 'bg-glass-bg text-foreground hover:bg-glass-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Controls */}
      <div className="flex items-center gap-4 text-sm">
        <span className="text-slate">מיון לפי:</span>
        <div className="flex gap-2">
          {[
            { value: 'name', label: 'שם' },
            { value: 'date', label: 'תאריך' },
            { value: 'size', label: 'גודל' },
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setSortBy(value as any)}
              className={`px-3 py-1 rounded-lg transition-colors ${
                sortBy === value
                  ? 'bg-accent/20 text-accent font-semibold'
                  : 'text-slate hover:bg-glass-border'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="mr-auto text-slate">
          {filteredPDFs.length} מסמכים
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-glass-border backdrop-blur-sm">
        <table className="w-full">
          <thead className="bg-glass-bg border-b border-glass-border">
            <tr>
              <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">שם המסמך</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">סוג</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">מוצר</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">גרסה</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">גודל</th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">הורד</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {filteredPDFs.map((pdf, index) => (
                <motion.tr
                  key={pdf.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.03, duration: 0.3 }}
                  className="border-b border-glass-border/50 hover:bg-glass-bg/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-right">
                      <div className="font-semibold text-foreground">{pdf.hebrewName}</div>
                      <div className="text-sm text-slate opacity-70">{pdf.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent font-mono text-sm">
                      {pdf.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-foreground">{pdf.product}</td>
                  <td className="px-6 py-4 text-center text-slate opacity-70 font-mono text-sm">
                    {pdf.version}
                  </td>
                  <td className="px-6 py-4 text-center text-slate opacity-70 text-sm">{pdf.size}</td>
                  <td className="px-6 py-4 text-center">
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors font-semibold text-sm"
                    >
                      📥 הורד
                    </a>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>

        {/* Empty State */}
        {filteredPDFs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 opacity-20">📄</div>
            <p className="text-slate text-lg">לא נמצאו מסמכים מתאימים</p>
            <p className="text-slate/70 text-sm mt-2">נסה לשנות את החיפוש או הסינון</p>
          </div>
        )}
      </div>
    </div>
  );
}
