'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

/**
 * Premium Hero Section - Vertical Reveal Effect
 * Desktop: Starts with Image #1 | Mobile: Starts with Image #2
 * Manual navigation via bottom-right buttons
 */

// Define all available hero images
const HERO_IMAGES = {
  1: { src: '/images/headoffset.jpeg', label: 'Main Project' }, // mobileheadoff.jpeg
  2: { src: '/images/TOHA2.jpeg', label: 'TOHA 2' },
  3: { src: '/images/INST.jpeg', label: 'INST Project' },
};

export default function HeroClassic() {
  // Adaptive default: Desktop starts at 1, Mobile starts at 2
  const [activeHero, setActiveHero] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // True Vertical Reveal - Image moves UP at 30% speed as user scrolls DOWN
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax factor 0.3: Image moves at 30% of scroll speed
  // Container is 200vh, so image moves 60vh total (200vh * 0.3)
  // This reveals the bottom 60vh of the 160vh tall image
  const bgY = useTransform(scrollYProgress, [0, 1], ["0vh", "-60vh"]);

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

  // Animated counters for stats (unused but kept for future use)
  const { count: projectsCount, ref: projectsRef } = useAnimatedCounter(300, 2000);
  const { count: countriesCount, ref: countriesRef } = useAnimatedCounter(100, 2200);
  const { count: yearsCount, ref: yearsRef } = useAnimatedCounter(55, 2400);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full" style={{ zIndex: 1 }}>
      {/* Sticky Container - Pins the Hero during scroll transition */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Image - True Vertical Reveal (No Zoom) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHero}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-[160vh]"
            style={{
              y: isMobile ? 0 : bgY, // Moves UP at 30% speed (parallax 0.3)
            }}
          >
            {/* Vertical Reveal Image - 160vh tall, aligned to top */}
            <Image
              src={HERO_IMAGES[activeHero as keyof typeof HERO_IMAGES].src}
              alt="PBS Israel - Critical Infrastructure Waterproofing"
              fill
              priority
              quality={100}
              style={{
                filter: 'brightness(1.05) contrast(1.05)',
                objectFit: 'cover',
                objectPosition: 'center top', // Start aligned to top
              }}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Live Hero Image Switcher - Mobile-Optimized Touch Targets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 md:bottom-10 right-4 md:right-10 flex gap-3 md:gap-3 bg-black/30 backdrop-blur-md px-3 md:px-5 py-3 md:py-4 rounded-full border border-white/10 md:border-white/20 shadow-lg pointer-events-auto"
          style={{ zIndex: 30 }}
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
      </div> {/* Close sticky container */}
    </div>
  );
}
