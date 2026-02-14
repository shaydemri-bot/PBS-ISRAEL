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
                { name: 'Xypex Admix', desc: 'Integral Crystalline Admixture', icon: '🧪' },
                { name: 'Xypex Concentrate', desc: 'Surface Coating System', icon: '🎨' },
                { name: "Patch'n Plug", desc: 'Rapid Repair System', icon: '⚡' },
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
                  <div className="text-5xl mb-4">{product.icon}</div>
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
                <span>☎️</span>
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
                <span>📧</span>
              </a>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
