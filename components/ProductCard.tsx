'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Product } from '@/data/technical-catalog';

interface ProductCardProps {
  product: Product;
  index: number;
  expanded: boolean;
  onToggleExpand: () => void;
}

/**
 * Enhanced Product Card - Xypex Global Inspired
 * Includes product thumbnail and direct TDS/SDS download buttons
 */
export default function ProductCard({ product, index, expanded, onToggleExpand }: ProductCardProps) {
  // Generate PDF URLs
  const tdsUrl = `/pdfs/${product.id}-tds.pdf`;
  const sdsUrl = `/pdfs/${product.id}-sds.pdf`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500"
      style={{
        borderColor: 'var(--border-color)',
      }}
    >
      {/* Product Thumbnail - Xypex Style */}
      <div className="relative h-64 w-full bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            {/* Large Product Name */}
            <h3 className="text-6xl font-black text-white/30 mb-4 leading-none">
              {product.name.split(' ')[1] || product.name.split(' ')[0]}
            </h3>
            {/* Xypex Logo Watermark */}
            <div className="text-lg font-bold text-white/40 tracking-[0.3em]">
              XYPEX
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider shadow-lg"
          style={{
            background: 'var(--accent)',
            color: '#ffffff',
          }}
        >
          {product.category === 'admixtures' ? 'תוסף לבטון' :
           product.category === 'coatings' ? 'ציפוי' : 'תיקון'}
        </div>

        {/* Product Type Indicator */}
        <div className="absolute bottom-4 left-4 text-white/70 text-sm font-semibold uppercase tracking-wider">
          {product.category === 'admixtures' ? 'Crystalline Admixture' :
           product.category === 'coatings' ? 'Surface Coating' : 'Repair System'}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-10">
        {/* Product Name */}
        <h3 className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: 'var(--foreground)' }}
        >
          {product.hebrewName}
        </h3>

        {/* Short Description */}
        <p className="text-lg font-semibold mb-6 pb-6"
          style={{
            color: 'var(--foreground)',
            opacity: 0.8,
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          {product.shortDescription}
        </p>

        {/* Download Buttons - Open Xypex.com PDFs in new tab */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <a
            href={tdsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold transition-all shadow-md hover:shadow-xl hover:scale-105"
            style={{
              background: 'var(--accent)',
              color: '#ffffff',
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>TDS</span>
          </a>

          <a
            href={sdsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold border-2 transition-all hover:scale-105"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>SDS</span>
          </a>
        </div>

        {/* Technical Description */}
        <div className="mb-6">
          <h4 className="text-sm font-black uppercase tracking-wider mb-3"
            style={{ color: 'var(--accent)' }}
          >
            תיאור טכני
          </h4>
          <p className="leading-relaxed text-sm"
            style={{ color: 'var(--foreground)', opacity: 0.7 }}
          >
            {expanded
              ? product.technicalDescription
              : `${product.technicalDescription.substring(0, 150)}...`
            }
          </p>
          {product.technicalDescription.length > 150 && (
            <button
              onClick={onToggleExpand}
              className="mt-3 font-bold text-sm inline-flex items-center gap-2 transition-colors"
              style={{ color: 'var(--accent)' }}
            >
              <span>{expanded ? 'הצג פחות' : 'קרא עוד'}</span>
              <svg
                className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>

        {/* Key Applications */}
        <div className="pt-6"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <h4 className="text-sm font-black uppercase tracking-wider mb-4"
            style={{ color: 'var(--accent)' }}
          >
            יישומים טיפוסיים
          </h4>
          <ul className="space-y-2">
            {product.applications.slice(0, 3).map((app, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm"
                style={{ color: 'var(--foreground)', opacity: 0.7 }}
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: 'var(--accent)', opacity: 0.2 }}
                >
                  <svg className="w-3 h-3"
                    style={{ color: 'var(--accent)' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="leading-relaxed">{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
