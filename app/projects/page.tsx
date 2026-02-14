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
      {/* HERO: Ultra-Large Typography                        */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/WhatsApp Image 2026-02-13 at 22.02.19.jpeg"
            alt="PBS Israel Projects - Critical Infrastructure with Xypex"
            fill
            priority
            quality={90}
            className="brightness-105"
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[1]"></div>

        <div className="relative z-10 w-full px-8 md:px-16 py-32">
          <div className="max-w-7xl mx-auto">
            <GlassmorphismCard className="max-w-6xl border-r-8 border-[#003366]" padding="xl">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#003366] text-white text-xs font-black mb-12 uppercase tracking-[0.3em]">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                הפרויקטים שלנו
              </div>

              <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight text-[#003366] leading-[0.85] mb-12 tracking-tight">
                תשתיות
                <br />
                <span className="font-black">קריטיות</span>
              </h1>

              <div className="w-32 h-px bg-[#003366] mb-12"></div>

              <p className="text-2xl md:text-3xl text-[#475569] font-light leading-relaxed max-w-4xl">
                <span className="font-bold text-[#003366]">{projects.length} פרויקטים</span> ברחבי ישראל -
                מתקני התפלה, מנהרות מטרו, מגדלים ותשתיות קריטיות מאוטמים בטכנולוגיית Xypex
              </p>
            </GlassmorphismCard>
          </div>
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
      {/* PROJECTS GRID: 1px Borders, Perfect Alignment       */}
      {/* ═══════════════════════════════════════════════════ */}
      <section className="py-40 bg-white relative">
        <GridDotBackground className="opacity-30" />

        <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group"
              >
                {/* Project Image - Clean, Bright */}
                <div className="relative aspect-[4/3] overflow-hidden border border-[#003366]/10 mb-10 group-hover:border-[#003366] transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={90}
                    className="object-cover brightness-105 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Year Badge */}
                  <div className="absolute top-6 right-6 bg-[#003366] text-white px-5 py-2 text-xs font-black uppercase tracking-wider">
                    {project.year}
                  </div>
                </div>

                {/* Project Info - Perfect RTL Alignment */}
                <div className="space-y-6">
                  {/* Location */}
                  <div className="text-sm font-black text-[#0284c7] uppercase tracking-[0.2em]">
                    {project.location}
                  </div>

                  {/* Project Title - Massive */}
                  <h3 className="text-4xl font-bold text-[#003366] leading-tight group-hover:text-[#0284c7] transition-colors">
                    {project.title}
                  </h3>

                  {/* Scale Badge */}
                  {project.scale && (
                    <div className="inline-block px-5 py-2 bg-[#f8fafc] border border-[#003366]/20 text-[#003366] text-sm font-bold">
                      {project.scale}
                    </div>
                  )}

                  {/* Challenge Section */}
                  <div className="pt-6 border-t border-[#003366]/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-[#003366]/10 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#003366]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-black text-[#003366] uppercase tracking-wider">
                        האתגר ההנדסי
                      </h4>
                    </div>
                    <p className="text-[#64748b] leading-relaxed text-base">
                      {expandedProject === project.id
                        ? project.challenge
                        : `${project.challenge.substring(0, 120)}...`
                      }
                    </p>
                  </div>

                  {/* Solution Section */}
                  <div className="pt-6 border-t border-[#003366]/10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-black text-[#003366] uppercase tracking-wider">
                        פתרון Xypex
                      </h4>
                    </div>
                    <p className="text-[#64748b] leading-relaxed text-base">
                      {expandedProject === project.id
                        ? project.solution
                        : `${project.solution.substring(0, 120)}...`
                      }
                    </p>
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="mt-4 text-[#0284c7] font-bold text-sm hover:text-[#003366] transition-colors inline-flex items-center gap-2"
                    >
                      <span>{expandedProject === project.id ? 'הצג פחות' : 'קרא עוד'}</span>
                      <svg className={`w-4 h-4 transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
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
