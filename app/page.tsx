'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/theme/ThemeToggle';
import HeroClassic from '@/components/HeroClassic';
import LoadingScreen from '@/components/ui/loading-screen';
import { BentoCard } from '@/components/bento/BentoGrid';
import TechnologyReveal3D from '@/components/bento/TechnologyReveal3D';
import ProjectMap from '@/components/bento/ProjectMap';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Homepage - Xypex.com Flow
 * Hero → Technology → Featured Products → Projects List → Contact
 */
export default function Home() {
  return (
    <>
      {/* Cinematic Splash Screen */}
      <LoadingScreen />

      <div dir="rtl" className="min-h-screen transition-colors duration-300">
        <Header />
        <ThemeToggle />

        {/* 1. HERO SECTION - Full Screen */}
        <HeroClassic />

        {/* 2. TECHNOLOGY SECTION */}
        <section className="py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                Crystalline <span style={{ color: 'var(--accent)' }}>Technology</span>
              </h2>
              <p className="text-lg opacity-70"
                style={{ color: 'var(--foreground)' }}
              >
                Self-Healing Waterproofing System
              </p>
            </motion.div>

            {/* Technology Reveal - Large Interactive Card */}
            <BentoCard colSpan={1} rowSpan={1}>
              <TechnologyReveal3D />
            </BentoCard>
          </div>
        </section>

        {/* 3. FEATURED PRODUCTS SECTION */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--glass-bg)' }}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                Featured <span style={{ color: 'var(--accent)' }}>Products</span>
              </h2>
              <p className="text-lg opacity-70"
                style={{ color: 'var(--foreground)' }}
              >
                Complete Waterproofing Solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  name: 'Xypex Admix',
                  desc: 'Integral Crystalline Admixture',
                  icon: <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                },
                {
                  name: 'Xypex Concentrate',
                  desc: 'Surface Coating System',
                  icon: <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                },
                {
                  name: "Patch'n Plug",
                  desc: 'Rapid Repair System',
                  icon: <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 rounded-lg border text-center"
                  style={{
                    background: 'var(--glass-bg)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div className="mb-4 opacity-60" style={{ color: 'var(--accent)' }}>{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm opacity-70 mb-4"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {product.desc}
                  </p>
                  <Link
                    href="/catalogs"
                    className="text-sm font-semibold"
                    style={{ color: 'var(--accent)' }}
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/catalogs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  background: 'var(--accent)',
                  color: '#ffffff',
                }}
              >
                <span>View All Products</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. PROJECTS SECTION with Small Map */}
        <section className="py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4"
                style={{ color: 'var(--foreground)' }}
              >
                Critical <span style={{ color: 'var(--accent)' }}>Infrastructure</span>
              </h2>
              <p className="text-lg opacity-70"
                style={{ color: 'var(--foreground)' }}
              >
                Protecting Billions in National Infrastructure
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Projects List (60% width) */}
              <div className="flex-1 space-y-4">
                {[
                  { name: 'Sorek B Desalination Plant', location: 'Palmachim, Israel', value: '$1.5B', year: '2023' },
                  { name: 'Tel Aviv Metro (Red Line)', location: 'Tel Aviv, Israel', value: '$49B', year: '2025' },
                  { name: 'Haifa Bay Port Expansion', location: 'Haifa, Israel', value: '$2B', year: '2022' },
                  { name: 'National Water Carrier', location: 'Multiple Sites', value: '$800M', year: '2021' },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-center justify-between p-6 rounded-lg border"
                    style={{
                      borderColor: 'var(--border-color)',
                      background: 'var(--glass-bg)',
                    }}
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-1"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-sm opacity-60"
                        style={{ color: 'var(--foreground)' }}
                      >
                        {project.location} • {project.year}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black"
                        style={{ color: 'var(--accent)' }}
                      >
                        {project.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Compact Map (40% width) */}
              <div className="w-full md:w-2/5">
                <BentoCard colSpan={1} rowSpan={1}>
                  <ProjectMap />
                </BentoCard>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  background: 'var(--accent)',
                  color: '#ffffff',
                }}
              >
                <span>View All Projects</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. CONTACT SECTION */}
        <section className="py-24 px-6 md:px-12 lg:px-20" style={{ background: 'var(--glass-bg)' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: 'var(--foreground)' }}
            >
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-10 opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              Our team of experts is ready to provide technical consultation, customized solutions, and professional support throughout your project.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="tel:+972-52-1234567"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg"
                style={{
                  background: 'var(--accent)',
                  color: '#ffffff',
                }}
              >
                <span>052-123-4567</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="mailto:info@pbs-israel.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all hover:scale-105"
                style={{
                  borderColor: 'var(--accent)',
                  color: 'var(--accent)',
                }}
              >
                <span>info@pbs-israel.com</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
