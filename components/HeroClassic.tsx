'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

/**
 * PBS Israel Hero - Clean Vertical Reveal
 * Architecture-first: Pure photography with smooth scroll exploration
 * No overlays, no clutter - just the image and reveal motion
 */

export default function HeroClassic() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth vertical reveal effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Image moves UP slowly as user scrolls DOWN (reveals bottom)
  // Parallax factor 0.3 for subtle, professional reveal
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[150vh] w-full">
      {/* Sticky container keeps hero visible during scroll */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Background Image - Vertical Reveal */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[140vh]"
          style={{
            y: isMobile ? 0 : imageY, // Disable parallax on mobile
          }}
        >
          <Image
            src="/images/mainn.jpeg"
            alt="PBS Israel - Critical Infrastructure Waterproofing"
            fill
            priority
            quality={95}
            className="object-cover"
            style={{
              objectPosition: 'center top',
            }}
            sizes="100vw"
          />
        </motion.div>
      </div>
    </div>
  );
}
