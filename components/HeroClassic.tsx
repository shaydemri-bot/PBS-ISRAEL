'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

/**
 * PBS Israel Hero - Glassmorphism Card + Parallax Reveal
 * Architecture: Clear photo (70%) + Glassmorphism card (bottom-start)
 * Typography: Rubik (via CSS var) for H1, ultra-light eyebrow
 */

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HeroClassic() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax: image drifts up as user scrolls
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[150vh] w-full">
      {/* Sticky container — hero stays visible during parallax scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* ─── Background Image ─── */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[140vh]"
          style={{ y: isMobile ? 0 : imageY }}
        >
          <Image
            src="/images/xypex-hero-construction-site.jpeg"
            alt="PBS Israel - Critical Infrastructure Waterproofing"
            fill
            priority
            quality={95}
            className="object-cover brightness-105"
            style={{ objectPosition: 'center top' }}
            sizes="100vw"
          />
        </motion.div>

        {/* ─── Minimal gradient — bottom 20% only, per design standard ─── */}
        <div className="absolute bottom-0 inset-x-0 h-[35%] bg-gradient-to-t from-black/45 via-black/15 to-transparent pointer-events-none" />

        {/* ─── Glassmorphism Card — bottom-start (right side in RTL) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: easeCurve }}
          className="absolute bottom-10 md:bottom-14 start-6 md:start-14 lg:start-20 max-w-[90vw] md:max-w-lg"
          dir="rtl"
        >
          <div className="backdrop-blur-xl bg-white/95 rounded-2xl p-8 md:p-10 shadow-2xl border border-white/50">

            {/* Eyebrow label */}
            <motion.p
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: easeCurve }}
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#f59e0b] mb-3"
            >
              הנציגות הבלעדית בישראל · Xypex
            </motion.p>

            {/* H1 — Rubik applied via globals.css h1 rule */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: easeCurve }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] leading-[1.15] mb-4 tracking-[-0.03em]"
            >
              איטום גבישי<br />
              לתשתיות לאומיות
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="text-sm md:text-base text-slate-600 leading-relaxed mb-7 max-w-sm"
            >
              טכנולוגיית Xypex מגינה על בטון של מפעל ההתפלה הגדול בעולם,
              מנהרות מטרו ותשתיות קריטיות — לכל החיים.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease: easeCurve }}
              className="flex items-center gap-3 flex-wrap"
            >
              {/* Primary CTA */}
              <Link
                href="/our-story"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#003366] text-white text-sm font-semibold rounded-lg
                           hover:bg-[#004080] transition-all duration-300
                           hover:shadow-lg hover:shadow-[#003366]/30 hover:-translate-y-0.5"
              >
                <span>גלה את הטכנולוגיה</span>
                <span className="transition-transform duration-300 group-hover:-translate-x-1" aria-hidden>←</span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3
                           border-2 border-[#003366] text-[#003366] text-sm font-semibold rounded-lg
                           hover:bg-[#003366] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>פרויקטים</span>
                <span className="transition-transform duration-300 group-hover:-translate-x-1" aria-hidden>←</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
