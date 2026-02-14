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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter leading-tight mb-3 uppercase" style={{ color: '#FFFFFF', filter: 'drop-shadow(0 5px 20px rgba(0,0,0,1))' }}>
            הפרויקטים שלנו
          </h1>
          <p className="text-base md:text-lg font-bold max-w-xl mx-auto leading-relaxed tracking-tight" style={{ color: '#FFFFFF', filter: 'drop-shadow(0 5px 20px rgba(0,0,0,1))' }}>
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
      {/* POWER GRID: Large, Impactful Cards                  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-10 bg-white relative">
        <GridDotBackground className="opacity-30" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group pb-4 border-b border-slate-200 hover:scale-[1.02] hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer"
              >
                {/* Project Image - Clean, No Overlays */}
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={90}
                    className="object-cover brightness-105 group-hover:brightness-110 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content Below - Clean Typography */}
                <div className="space-y-1.5 text-right">
                  {/* Title */}
                  <h3 className="text-base font-bold text-[#003366] leading-tight">
                    {project.title}
                  </h3>

                  {/* Location */}
                  <div className="text-[10px] font-bold text-[#003366] uppercase tracking-widest">
                    {project.location}
                  </div>
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
