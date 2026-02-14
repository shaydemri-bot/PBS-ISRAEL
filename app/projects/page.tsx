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
      <section className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[3.5/1] flex items-center justify-center overflow-hidden">
        {/* DOLFVIEW - NEXT/IMAGE OPTIMIZED, PRIORITY LOADING */}
        <Image
          src="/images/DOLFVIEW.jpeg"
          alt="PBS Israel Projects - Critical Infrastructure with Xypex"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-6" style={{ color: '#FFFFFF', filter: 'drop-shadow(0 5px 20px rgba(0,0,0,1))' }}>
            הפרויקטים שלנו
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed" style={{ color: '#FFFFFF', filter: 'drop-shadow(0 5px 20px rgba(0,0,0,1))' }}>
            {projects.length} פרויקטים של תשתיות קריטיות ברחבי ישראל
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
            {projectCategories.map((cat) => (
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
            {filteredProjects.length} פרויקטים
          </div>
        </div>
      </section>

      <ArchitecturalDivider />

      {/* ═══════════════════════════════════════════════════ */}
      {/* POWER GRID: Large, Impactful Cards                  */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <GridDotBackground className="opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group pb-8 border-b border-slate-200"
              >
                {/* Project Image - Clean, No Overlays */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6">
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
                <div className="space-y-3 text-right">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#003366] leading-tight">
                    {project.title}
                  </h3>

                  {/* Location */}
                  <div className="text-xs font-bold text-[#003366] uppercase tracking-widest">
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
      <section className="py-40 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-8 md:px-16 text-center">
          <GlassmorphismCard padding="xl" className="border-4 border-[#003366]">
            <h2 className="text-6xl md:text-7xl font-extralight text-[#003366] mb-10 leading-tight">
              הפרויקט הבא שלכם
              <br />
              <span className="font-black">מתחיל כאן</span>
            </h2>
            <div className="w-24 h-px bg-[#003366] mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl text-[#64748b] font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              הצוות ההנדסי שלנו מתמחה ביישום טכנולוגיית Xypex לתשתיות קריטיות ברחבי ישראל
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
