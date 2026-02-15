'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

/**
 * Premium Hero Section - Adaptive Image Display
 * Desktop: Starts with Image #1 | Mobile: Starts with Image #2
 * Manual navigation via bottom-right buttons
 */

// Define all available hero images - Corrected configuration
const HERO_IMAGES = {
  1: { src: '/images/mainn.jpeg', label: 'Main Project' },
  2: { src: '/images/TOHA2.jpeg', label: 'TOHA 2' },
  3: { src: '/images/INST.jpeg', label: 'INST Project' },
};

export default function HeroClassic() {
  // Adaptive default: Desktop starts at 1, Mobile starts at 2
  const [activeHero, setActiveHero] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and set adaptive default image
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);

      // Set default image based on screen size (only on initial load)
      if (activeHero === 1 || activeHero === 2) {
        setActiveHero(mobile ? 2 : 1);
      }
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []); // Empty dependency - only run on mount

  // Animated counters for stats
  const { count: projectsCount, ref: projectsRef } = useAnimatedCounter(300, 2000);
  const { count: countriesCount, ref: countriesRef } = useAnimatedCounter(100, 2200);
  const { count: yearsCount, ref: yearsRef } = useAnimatedCounter(55, 2400);

  return (
    <section className="relative h-[55vh] md:h-[70vh] w-full overflow-hidden">
      {/* Fixed Background Image - Reveal Effect (stays still while content scrolls over) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeHero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full h-screen -z-10"
        >
          {activeHero === 2 ? (
            /* TOHA2 - Special Framing with Background CSS (Mobile Optimized) */
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${HERO_IMAGES[2].src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.15) contrast(1.1) saturate(1.3)',
              }}
            />
          ) : (
            /* Other Images - Standard Next.js Image (Mobile Optimized) */
            <Image
              src={HERO_IMAGES[activeHero as keyof typeof HERO_IMAGES].src}
              alt="PBS Israel - Critical Infrastructure Waterproofing"
              fill
              priority
              quality={100}
              style={{
                filter: 'brightness(1.15) contrast(1.1) saturate(1.3)',
                objectFit: 'cover',
                objectPosition: 'center 40%',
              }}
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCeAAA/9k="
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Clean Hero - Pure Architectural Photography, No Overlays */}

      {/* BACKUP: Full Stats Content (Hidden) - Uncomment if needed */}
      <div className="hidden relative z-10 h-full flex flex-col items-center px-4 md:px-12 text-center pt-20 md:pt-32">
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
      </div>

      {/* Live Hero Image Switcher - Mobile-Optimized Touch Targets */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 md:bottom-10 right-4 md:right-10 flex gap-3 md:gap-3 bg-black/30 backdrop-blur-md px-3 md:px-5 py-3 md:py-4 rounded-full border border-white/10 md:border-white/20 shadow-lg z-20"
      >
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setActiveHero(num)}
            className={`
              w-11 h-11 md:w-12 md:h-12 rounded-full border transition-all duration-300
              flex items-center justify-center text-sm md:text-base font-bold
              ${activeHero === num
                ? 'bg-amber-400 text-black border-amber-400 scale-105 shadow-lg'
                : 'bg-white/5 text-white/70 border-white/30 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-400 hover:scale-105'
              }
            `}
            title={HERO_IMAGES[num as keyof typeof HERO_IMAGES].label}
            aria-label={`Switch to ${HERO_IMAGES[num as keyof typeof HERO_IMAGES].label}`}
          >
            {num}
          </button>
        ))}
      </motion.div>
    </section>
  );
}
