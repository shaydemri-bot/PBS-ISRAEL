'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/**
 * Premium Hero Section - Live Visual Preview
 * Click bottom corner buttons to switch images in real-time
 */

// Define all available hero images
const HERO_IMAGES = {
  1: { src: '/images/WhatsApp Image 2026-01-21 at 12.28.56.jpeg', label: 'Sorek B' },
  2: { src: '/images/WhatsApp Image 2026-01-21 at 13.04.40.jpeg', label: 'Tunnel' },
  3: { src: '/images/WhatsApp Image 2026-02-13 at 22.02.11.jpeg', label: 'Water Plant' },
};

export default function HeroClassic() {
  const [activeHero, setActiveHero] = useState(2); // Default to Image 2 (Tunnel)
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Optimized Background Image - Live Switchable */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeHero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={HERO_IMAGES[activeHero as keyof typeof HERO_IMAGES].src}
            alt="PBS Israel - Critical Infrastructure Waterproofing"
            fill
            priority
            quality={90}
            className="object-cover brightness-110 contrast-105"
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCeAAA/9k="
          />
        </motion.div>
      </AnimatePresence>

      {/* Very subtle bottom gradient for text anchor - Image stays 100% clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-[1]" />

      {/* Content Container - Simple fade-in, no heavy animations */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 text-center">
        {/* Logo Section - Sharp & Perfectly Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          {/* PBS Israel + Xypex - Side by Side */}
          <div className="flex items-center justify-center gap-12 mb-8">
            <div className="text-center">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                PBS
                <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-amber-400 mt-2 tracking-wide" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
                  ISRAEL
                </span>
              </h1>
            </div>

            <div className="w-px h-32 md:h-40 bg-gradient-to-b from-transparent via-amber-400 to-transparent" style={{ filter: 'drop-shadow(0 0 4px rgba(251,191,36,0.5))' }} />

            <div className="text-center">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider leading-none" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                XYPEX
                <span className="block text-2xl md:text-3xl font-light text-slate-300 mt-2 tracking-[0.2em]" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
                  GLOBAL
                </span>
              </h2>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-96 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-8" style={{ filter: 'drop-shadow(0 0 4px rgba(251,191,36,0.5))' }} />

          {/* Partnership Label */}
          <p className="text-sm md:text-base text-slate-300 tracking-[0.25em] uppercase" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            שותפות בלעדית
          </p>
        </motion.div>

        {/* Professional Engineering Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            פתרונות איטום מתקדמים לתשתיות קריטיות
          </p>
          <p className="text-lg md:text-xl text-slate-300 font-light" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>
            Advanced Waterproofing Solutions for Critical Infrastructure
          </p>
        </motion.div>

        {/* Stats Bar - Simple fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
        >
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black text-amber-400 mb-2" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>55+</div>
            <div className="text-sm md:text-base text-slate-300 uppercase tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              שנות פעילות
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black text-amber-400 mb-2" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>100+</div>
            <div className="text-sm md:text-base text-slate-300 uppercase tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              מדינות
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black text-amber-400 mb-2" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)' }}>300+</div>
            <div className="text-sm md:text-base text-slate-300 uppercase tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              פרויקטים בישראל
            </div>
          </div>
        </motion.div>

        {/* Simple Scroll Indicator - No animation loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>

        {/* Live Hero Image Switcher - Bottom Right Corner - Maximum Visibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-10 flex gap-3 bg-black/50 backdrop-blur-xl px-5 py-4 rounded-full border-2 border-white/20 shadow-2xl"
        >
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setActiveHero(num)}
              className={`
                w-12 h-12 rounded-full border-2 transition-all duration-300
                flex items-center justify-center text-base font-black
                ${activeHero === num
                  ? 'bg-amber-400 text-black border-amber-400 scale-110 shadow-xl'
                  : 'bg-white/10 text-white border-white/40 hover:border-amber-400 hover:bg-amber-400/20 hover:text-amber-400 hover:scale-105'
                }
              `}
              title={HERO_IMAGES[num as keyof typeof HERO_IMAGES].label}
              aria-label={`Switch to ${HERO_IMAGES[num as keyof typeof HERO_IMAGES].label}`}
            >
              {num}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
