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
import { projects, projectCategories, getProjectsByCategory } from '@/data/complete-projects';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = getProjectsByCategory(selectedCategory);

  return (
    <div dir="rtl" className="bg-white">
      <Header />

      {/* ═══════════════════════════════════════════════════ */}
      {/* EDITORIAL PAGE HERO: Architectural & Authoritative  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* DOLFVIEW - NO-ZOOM ARCHITECTURE */}
        <Image
          src="/images/DOLFVIEW.jpeg"
          alt="PBS Israel Projects - Critical Infrastructure with Xypex"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />

        {/* Gradient - Bottom 30% Only */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent z-[1]"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-extralight tracking-tight leading-none mb-4 uppercase" style={{ color: '#FFFFFF', filter: 'drop-shadow(0 5px 20px rgba(0,0,0,1))' }}>
            הפרויקטים שלנו
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed tracking-wide" style={{ color: '#FFFFFF', filter: 'drop-shadow(0 5px 20px rgba(0,0,0,1))' }}>
            {projects.length} פרויקטים של תשתיות קריטיות ברחבי ישראל
          </p>
        </div>
      </section>

      <ArchitecturalDivider />

      {/* ═══════════════════════════════════════════════════ */}
      {/* FILTERS: Clean Architecture                         */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-8 bg-[#f8fafc] sticky top-0 z-40 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                  px-4 py-2 text-sm font-bold
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
          <div className="text-center mt-4 text-[#003366] text-base font-bold">
            {filteredProjects.length} פרויקטים
          </div>
        </div>
      </section>

      <ArchitecturalDivider />

      {/* ═══════════════════════════════════════════════════ */}
      {/* BRANDED MINIMALIST GRID: Swiss Engineering Design  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white relative">
        <GridDotBackground className="opacity-30" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative"
              >
                {/* Branded Card Container */}
                <div className="relative bg-slate-50 border border-slate-200/60 transition-all duration-500 hover:border-[#003366]/30 hover:shadow-2xl hover:shadow-[#003366]/5 overflow-hidden">

                  {/* PBS Typographic Branding - Top Section */}
                  <div className="relative h-48 md:h-56 flex items-center justify-center border-b border-slate-200/60 bg-gradient-to-br from-slate-50 to-slate-100/50">
                    {/* Subtle Grid Pattern Overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,51,102,0.4) 1px, transparent 0)',
                        backgroundSize: '24px 24px'
                      }}
                    />

                    {/* Large PBS Monogram */}
                    <div className="relative z-10 text-center">
                      <div className="text-7xl md:text-8xl font-extralight text-[#003366]/8 tracking-[-0.05em] leading-none mb-2 group-hover:text-[#003366]/12 transition-colors duration-500">
                        PBS
                      </div>
                      <div className="text-xs font-light text-[#003366]/20 tracking-[0.3em] uppercase group-hover:text-[#003366]/30 transition-colors duration-500">
                        ISRAEL
                      </div>
                    </div>

                    {/* Hover Accent Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003366] group-hover:w-full transition-all duration-700 ease-out"></div>
                  </div>

                  {/* Project Information - Bottom Section */}
                  <div className="p-6 md:p-8 space-y-3 bg-white">
                    {/* Project Title - Extra Light Typography */}
                    <h3 className="text-lg md:text-xl font-extralight text-[#003366] leading-tight tracking-tight">
                      {project.title}
                    </h3>

                    {/* Thin Divider */}
                    <div className="w-12 h-px bg-[#003366]/20 group-hover:w-full group-hover:bg-[#003366]/40 transition-all duration-500"></div>

                    {/* Location Badge */}
                    <div className="inline-flex items-center gap-2 text-[10px] font-semibold text-[#003366]/60 uppercase tracking-[0.2em]">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>

                    {/* Subtle Category Indicator */}
                    {project.category && (
                      <div className="pt-2 text-[9px] font-medium text-[#003366]/40 uppercase tracking-[0.25em]">
                        {project.category}
                      </div>
                    )}
                  </div>

                  {/* Corner Accent (Architectural Detail) */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#003366]/5 group-hover:border-[#003366]/15 transition-colors duration-500"></div>
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
      <section className="py-10 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <GlassmorphismCard padding="xl" className="border-2 border-[#003366]">
            <h2 className="text-2xl md:text-3xl font-extralight text-[#003366] mb-4 leading-tight">
              הפרויקט הבא שלכם
              <br />
              <span className="font-black">מתחיל כאן</span>
            </h2>
            <div className="w-16 h-px bg-[#003366] mx-auto mb-4"></div>
            <p className="text-sm md:text-base text-[#64748b] font-light mb-6 max-w-lg mx-auto leading-relaxed">
              הצוות ההנדסי שלנו מתמחה ביישום טכנולוגיית Xypex לתשתיות קריטיות ברחבי ישראל
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#003366] text-white px-6 py-3 text-base font-black hover:bg-[#002244] transition-all shadow-2xl uppercase tracking-wider border-2 border-[#003366]"
            >
              <span>ייעוץ הנדסי</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
