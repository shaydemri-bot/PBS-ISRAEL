'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

/**
 * Premium Hero Section - Live Visual Preview
 * Click bottom corner buttons to switch images in real-time
 */

// Define all available hero images - Corrected configuration
const HERO_IMAGES = {
  1: { src: '/images/mainn.jpeg', label: 'Main Project' },
  2: { src: '/images/TOHA2.jpeg', label: 'TOHA 2' },
  3: { src: '/images/INST.jpeg', label: 'INST Project' },
};

export default function HeroClassic() {
  const [activeHero, setActiveHero] = useState(1); // Default to Image 1 (Main)

  // Animated counters for stats
  const { count: projectsCount, ref: projectsRef } = useAnimatedCounter(300, 2000);
  const { count: countriesCount, ref: countriesRef } = useAnimatedCounter(100, 2200);
  const { count: yearsCount, ref: yearsRef } = useAnimatedCounter(55, 2400);

  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
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
          {activeHero === 2 ? (
            /* TOHA2 - Special Framing with Background CSS */
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${HERO_IMAGES[2].src})`,
                backgroundSize: '100% auto',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.15) contrast(1.1) saturate(1.3)',
              }}
            />
          ) : (
            /* Other Images - Standard Next.js Image */
            <Image
              src={HERO_IMAGES[activeHero as keyof typeof HERO_IMAGES].src}
              alt="PBS Israel - Critical Infrastructure Waterproofing"
              fill
              priority
              quality={100}
              style={{
                filter: 'brightness(1.15) contrast(1.1) saturate(1.3)',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCeAAA/9k="
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Vignette Gradient - Natural corner darkening */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-[1]" />

      {/* Content Container - POWER CENTER (Mobile Optimized) */}
      <div className="relative z-10 h-full flex flex-col items-center px-4 md:px-12 text-center pt-20 md:pt-32">
        {/* Logo Section - Mobile Scaled */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 md:mb-12"
        >
          {/* PBS Israel + Xypex - Responsive Sizing */}
          <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-4 md:mb-6">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-extralight text-white tracking-tighter leading-none" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
                PBS
                <span className="block text-2xl md:text-4xl lg:text-6xl font-light text-amber-400 mt-2 md:mt-3 tracking-wide" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
                  ISRAEL
                </span>
              </h1>
            </div>

            <div className="w-px h-16 md:h-24 lg:h-32 bg-gradient-to-b from-transparent via-amber-400 to-transparent" style={{ filter: 'drop-shadow(0 0 4px rgba(251,191,36,0.5))' }} />

            <div className="text-center">
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-light text-white tracking-wider leading-none" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
                XYPEX
                <span className="block text-xl md:text-2xl lg:text-4xl font-extralight text-white mt-2 md:mt-3 tracking-[0.2em]" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
                  GLOBAL
                </span>
              </h2>
            </div>
          </div>

          {/* Divider - Responsive Width */}
          <div className="h-px w-48 md:w-72 lg:w-96 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-3 md:mb-6" style={{ filter: 'drop-shadow(0 0 4px rgba(251,191,36,0.5))' }} />

          {/* Partnership Label */}
          <p className="text-xs md:text-sm text-white tracking-[0.2em] md:tracking-[0.25em] uppercase font-medium" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
            שותפות בלעדית
          </p>
        </motion.div>

        {/* POWER CENTER: Stats - Vertical Stack on Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 md:mb-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 lg:gap-16 mb-4 md:mb-8">
            <div className="text-center" ref={projectsRef}>
              <div className="text-3xl md:text-6xl lg:text-8xl font-black text-amber-400 tracking-tighter leading-none mb-1 md:mb-2" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
                +{projectsCount}
              </div>
              <div className="text-[10px] md:text-sm lg:text-base text-white uppercase tracking-wide md:tracking-wider font-extrabold" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
                פרויקטים בישראל
              </div>
            </div>
            <div className="text-center" ref={countriesRef}>
              <div className="text-3xl md:text-6xl lg:text-8xl font-black text-amber-400 tracking-tighter leading-none mb-1 md:mb-2" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
                +{countriesCount}
              </div>
              <div className="text-[10px] md:text-sm lg:text-base text-white uppercase tracking-wide md:tracking-wider font-extrabold" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
                מדינות
              </div>
            </div>
            <div className="text-center" ref={yearsRef}>
              <div className="text-3xl md:text-6xl lg:text-8xl font-black text-amber-400 tracking-tighter leading-none mb-1 md:mb-2" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
                +{yearsCount}
              </div>
              <div className="text-[10px] md:text-sm lg:text-base text-white uppercase tracking-wide md:tracking-wider font-extrabold" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
                שנות ניסיון
              </div>
            </div>
          </div>
        </motion.div>

        {/* Descriptive Text - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl px-2"
        >
          <p className="text-base md:text-xl lg:text-3xl font-extrabold tracking-tight leading-tight mb-2 md:mb-3" style={{ color: '#F5F5F7', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
            פתרונות מתקדמים לאיטום
          </p>
          <p className="text-sm md:text-base lg:text-lg text-white font-bold" style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,1)) drop-shadow(0 2px 2px rgba(0,0,0,1))' }}>
            Advanced Waterproofing Solutions for Critical Infrastructure
          </p>
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

        {/* Live Hero Image Switcher - Compact Mobile Design */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-3 md:bottom-10 right-3 md:right-10 flex gap-1.5 md:gap-3 bg-black/50 backdrop-blur-xl px-2 md:px-5 py-1.5 md:py-4 rounded-full border border-white/20 md:border-2 shadow-2xl"
        >
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => setActiveHero(num)}
              className={`
                w-7 h-7 md:w-12 md:h-12 rounded-full border md:border-2 transition-all duration-300
                flex items-center justify-center text-xs md:text-base font-black
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
