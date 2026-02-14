'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridDotBackground from '@/components/GridDotBackground';
import ArchitecturalDivider from '@/components/ArchitecturalDivider';
import GlassmorphismCard from '@/components/GlassmorphismCard';
import { products, productCategories, getProductsByCategory } from '@/data/technical-catalog';

export default function CatalogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const filteredProducts = getProductsByCategory(selectedCategory);

  return (
    <div dir="rtl" className="bg-white">
      <Header />

      {/* ═══════════════════════════════════════════════════ */}
      {/* EDITORIAL PAGE HERO: Architectural & Authoritative  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Wide Architectural Background - No Over-Zoom */}
        <div
          className="absolute inset-0 bg-slate-900"
          style={{
            backgroundImage: 'url(/images/WhatsApp Image 2026-02-13 at 22.02.11.jpeg)',
            backgroundSize: '100% auto',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.95)',
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-6" style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.8))' }}>
            מוצרי Xypex
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))' }}>
            טכנולוגיית קריסטליזציה מתקדמת לאיטום והגנה על מבני בטון
          </p>
        </div>
      </section>

      <ArchitecturalDivider />

      {/* ═══════════════════════════════════════════════════ */}
      {/* FILTERS: Clean Architecture                         */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#f8fafc] sticky top-0 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex flex-wrap gap-4 justify-center">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                  px-10 py-5 text-lg font-bold
                  border border-[#003366]/30
                  transition-all duration-300
                  ${selectedCategory === cat.id
                    ? 'bg-[#003366] text-white border-[#003366]'
                    : 'bg-white text-[#003366] hover:border-[#003366] hover:shadow-lg'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="text-center mt-10 text-[#003366] text-xl font-bold">
            {filteredProducts.length} מוצרים
          </div>
        </div>
      </section>

      <ArchitecturalDivider />

      {/* ═══════════════════════════════════════════════════ */}
      {/* PRODUCTS GRID: Editorial Layout                     */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-40 bg-white relative">
        <GridDotBackground className="opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border border-[#003366]/10 hover:border-[#003366] transition-all duration-500 overflow-hidden"
              >
                {/* Product Image - Real Image from Prod Folder */}
                <div className="relative h-96 w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
                  <Image
                    src={product.image}
                    alt={product.hebrewName}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />

                  {/* Category Badge - Overlaid on Image */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-[#003366] text-white text-xs font-black uppercase tracking-wider shadow-lg">
                    {product.category === 'admixtures' ? 'תוסף לבטון' :
                     product.category === 'coatings' ? 'ציפוי' : 'תיקון ואביזר'}
                  </div>
                </div>

                {/* Product Content */}
                <div className="bg-white p-12">
                  {/* Product Name - Hebrew + English */}
                  <h3 className="text-4xl md:text-5xl font-bold text-[#003366] leading-tight mb-6">
                    {product.hebrewName}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xl text-[#475569] font-semibold mb-8 pb-8 border-b border-[#003366]/10">
                    {product.shortDescription}
                  </p>

                  {/* Technical Description */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-[#003366]/10 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#003366]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-black text-[#003366] uppercase tracking-wider">
                        תיאור טכני
                      </h4>
                    </div>
                    <p className="text-[#64748b] leading-relaxed">
                      {expandedProduct === product.id
                        ? product.technicalDescription
                        : `${product.technicalDescription.substring(0, 180)}...`
                      }
                    </p>
                    {product.technicalDescription.length > 180 && (
                      <button
                        onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                        className="mt-4 text-[#0284c7] font-bold text-sm hover:text-[#003366] transition-colors inline-flex items-center gap-2"
                      >
                        <span>{expandedProduct === product.id ? 'הצג פחות' : 'קרא עוד'}</span>
                        <svg className={`w-4 h-4 transition-transform ${expandedProduct === product.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Applications */}
                  <div className="mb-8 pt-8 border-t border-[#003366]/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-black text-[#003366] uppercase tracking-wider">
                        יישומים טיפוסיים
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {product.applications.slice(0, 4).map((app, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[#64748b]">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#003366]/10 flex items-center justify-center mt-0.5">
                            <svg className="w-4 h-4 text-[#003366]" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="leading-relaxed">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-8 pt-8 border-t border-[#003366]/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-[#0284c7] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-black text-[#003366] uppercase tracking-wider">
                        יתרונות עיקריים
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {product.keyBenefits.slice(0, 4).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-[#64748b]">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0284c7]/10 flex items-center justify-center mt-0.5">
                            <svg className="w-4 h-4 text-[#0284c7]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Data */}
                  {product.technicalData && (
                    <div className="pt-8 border-t border-[#003366]/10 bg-[#f8fafc] -mx-12 -mb-12 px-12 py-8">
                      <h4 className="text-sm font-black text-[#003366] uppercase tracking-wider mb-4">
                        נתונים טכניים
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {product.technicalData.appearance && (
                          <div>
                            <div className="text-[#64748b] font-bold mb-1">מראה:</div>
                            <div className="text-[#003366]">{product.technicalData.appearance}</div>
                          </div>
                        )}
                        {product.technicalData.packaging && (
                          <div>
                            <div className="text-[#64748b] font-bold mb-1">אריזה:</div>
                            <div className="text-[#003366]">{product.technicalData.packaging}</div>
                          </div>
                        )}
                        {product.technicalData.coverage && (
                          <div>
                            <div className="text-[#64748b] font-bold mb-1">כיסוי:</div>
                            <div className="text-[#003366]">{product.technicalData.coverage}</div>
                          </div>
                        )}
                        {product.technicalData.shelfLife && (
                          <div>
                            <div className="text-[#64748b] font-bold mb-1">חיי מדף:</div>
                            <div className="text-[#003366]">{product.technicalData.shelfLife}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ArchitecturalDivider />

      {/* ═══════════════════════════════════════════════════ */}
      {/* CTA: Clean & Centered                               */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-40 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
          <GlassmorphismCard padding="xl" className="border-4 border-[#003366]">
            <h2 className="text-6xl md:text-7xl font-extralight text-[#003366] mb-10 leading-tight">
              זקוקים לייעוץ
              <br />
              <span className="font-black">טכני?</span>
            </h2>
            <div className="w-24 h-px bg-[#003366] mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl text-[#64748b] font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              הצוות ההנדסי שלנו יסייע לכם בבחירת המוצרים המתאימים ביותר לפרויקט
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 bg-[#003366] text-white px-16 py-7 text-2xl font-black hover:bg-[#002244] transition-all shadow-2xl uppercase tracking-wider border-4 border-[#003366]"
            >
              <span>ייעוץ הנדסי</span>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </GlassmorphismCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}
