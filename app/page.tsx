'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroClassic from '@/components/HeroClassic';
import LoadingScreen from '@/components/ui/loading-screen';
import LogoCarousel from '@/components/LogoCarousel';
import GridDotBackground from '@/components/GridDotBackground';
import { motion } from 'framer-motion';
import { Building2, Home as HomeIcon, Factory } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Homepage - Premium Corporate with Refined Animations
 * - Subtle fade-in and slide-up animations
 * - Lucide React icons for clean, minimalist design
 * - Consistent vertical spacing (py-20 md:py-28)
 * - Refined typography with consistent tracking and line-height
 */

// Animation variants for consistent motion
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <>
      {/* Cinematic Splash Screen */}
      <LoadingScreen />

      <div dir="rtl" className="min-h-screen bg-white relative" style={{ zIndex: 10 }}>
        <Header />

        {/* 1. HERO SECTION - Full Screen with Live Swapper */}
        <HeroClassic />

        {/* CONSTRUCTION YELLOW DIVIDER - Clean Visual Break */}
        <section className="relative bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 border-y-4 border-amber-500 h-12" style={{ zIndex: 10 }}></section>

        {/* 2. TRUSTED BY - Infinite Scrolling Logos with Fade-In */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
          style={{ zIndex: 10 }}
        >
          <LogoCarousel />
        </motion.div>

        {/* 3. DUAL VIDEO GRID - Global Impact & Technology */}
        <section className="relative py-20 md:py-28 bg-white" style={{ zIndex: 10 }}>
          <GridDotBackground className="opacity-10" />
          <div className="relative z-10 max-w-[1536px] mx-auto px-4 md:px-8">
            {/* Section Heading - Refined Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#003366] tracking-[0.3em] uppercase mb-6 leading-[1.2]">
                GLOBAL IMPACT & TECHNOLOGY
              </h2>
              <div className="h-px w-40 mx-auto bg-[#003366]/20"></div>
            </motion.div>

            {/* Dual Video Grid - Refined Animations */}
            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto"
            >
              {/* LEFT VIDEO: Xypex Advertisement */}
              <motion.div variants={fadeInUp}>
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-slate-200" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/b8koiNWcqX8?start=14&end=44&rel=0&modestbranding=1&showinfo=0"
                    title="Xypex World Impact"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{ border: 0 }}
                  />
                </div>
                <p className="text-center mt-4 text-sm md:text-base text-slate-600 font-light tracking-[0.05em] leading-[1.6]">
                  World Impact
                </p>
              </motion.div>

              {/* RIGHT VIDEO: Crystalline Technology */}
              <motion.div variants={fadeInUp}>
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-slate-200" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/VozKO84Rgzk?rel=0&modestbranding=1&showinfo=0"
                    title="Xypex Crystalline Technology"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{ border: 0 }}
                  />
                </div>
                <p className="text-center mt-4 text-sm md:text-base text-slate-600 font-light tracking-[0.05em] leading-[1.6]">
                  Our Technology
                </p>
              </motion.div>
            </motion.div>

            {/* Section Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mt-12 text-base md:text-lg text-slate-600 font-light tracking-[0.05em] leading-[1.8] max-w-3xl mx-auto"
            >
              See how Xypex crystalline technology permanently waterproofs concrete in critical infrastructure projects worldwide.
            </motion.p>
          </div>
        </section>

        {/* 4. TECHNOLOGY - Crystalline Process Explanation */}
        <section className="relative py-20 md:py-28 px-4 overflow-hidden">
          {/* Shafdan Project Background */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: 'url(/images/shafdan.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.15) contrast(1.1) saturate(1.3)',
              }}
            />
            <div className="absolute inset-0 bg-white/20" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#f59e0b] mb-2" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.9)' }}>
                טכנולוגיית גבישים קטליטית
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-[-0.02em] text-[#003366] mb-3 leading-[1.3]" style={{ textShadow: '0 2px 12px rgba(255,255,255,0.95)' }}>
                איטום מבנים מורכבים<br />בטכנולוגיה גבישית
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-[1.7] max-w-lg mx-auto font-medium tracking-[0.02em]" style={{ textShadow: '0 1px 8px rgba(255,255,255,0.9)' }}>
                הגנה קבועה לבטון באמצעות חדירה גבישית קטליטית. המערכת אוטמת סדקים עד 0.5 מ"מ באופן אוטונומי, ומספקת איטום לכל החיים ללא ממברנות חיצוניות.
              </p>
            </motion.div>

            {/* Technology Visual - 3 Step Process */}
            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                { step: '01', title: 'חדירה', desc: 'גבישי Xypex חודרים עד 90 ס"מ למטריצת הבטון' },
                { step: '02', title: 'קריסטליזציה', desc: 'תגובה עם סידן הידרוקסיד ליצירת גבישים בלתי מסיסים' },
                { step: '03', title: 'איטום עצמי', desc: 'ריפוי אוטונומי של סדקים בנוכחות מים' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="text-3xl font-black text-[#003366]/20 group-hover:text-[#f59e0b]/40 transition-colors mb-2" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.8)' }}>
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold tracking-[-0.02em] text-[#003366] mb-2 leading-[1.3]" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.9)' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-700 leading-[1.7] font-normal tracking-[0.02em]" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.85)' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5. CORE SOLUTIONS - Application Categories */}
        <section className="relative py-20 md:py-28 px-4 bg-slate-50">
          <GridDotBackground className="opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-12"
            >
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#f59e0b] mb-2">
                פתרונות ליבה הנדסיים
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-[-0.02em] text-[#003366] mb-3 leading-[1.3]">
                מערכות מהנדסות<br />לפי יישום
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-[1.7] max-w-lg mx-auto tracking-[0.02em]">
                פתרונות איטום מותאמים לתשתיות לאומיות, בנייה למגורים ופרויקטים תעשייתיים.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: 'תשתיות לאומיות',
                  desc: 'מנהרות, מערכות רכבת תחתית, טיפול במים',
                  applications: ['מפעל ההתפלה שורק B', 'הקו האדום תל אביב', 'המוביל הארצי'],
                  bgImage: '/images/WhatsApp Image 2026-01-21 at 13.04.40 (1).jpeg',
                  icon: <Building2 className="w-16 h-16 mx-auto text-slate-500" strokeWidth={1} />
                },
                {
                  title: 'בנייה למגורים',
                  desc: 'יסודות, מרתפים, קירות תומכים',
                  applications: ['חניונים תת-קרקעיים', 'מגדלי מגורים', 'בריכות שחייה'],
                  bgImage: '/images/WhatsApp Image 2026-01-21 at 14.47.51.jpeg',
                  icon: <HomeIcon className="w-16 h-16 mx-auto text-slate-500" strokeWidth={1} />
                },
                {
                  title: 'תעשייה ונמלים',
                  desc: 'מפעלים, מתקני אחסון, נמלים',
                  applications: ['נמל מפרץ חיפה', 'מפעלים כימיים', 'טיפול בשפכים'],
                  bgImage: '/images/WhatsApp Image 2026-02-13 at 22.02.11.jpeg',
                  icon: <Factory className="w-16 h-16 mx-auto text-slate-500" strokeWidth={1} />
                },
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500"
                >
                  {/* Background Image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={solution.bgImage}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 to-transparent" />
                    <div className="absolute bottom-4 left-0 right-0">
                      {solution.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-[#003366] mb-2 tracking-[-0.02em] leading-[1.3]">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 leading-[1.6] tracking-[0.02em]">
                      {solution.desc}
                    </p>
                    <div className="space-y-1.5">
                      {solution.applications.map((app, i) => (
                        <p key={i} className="text-xs text-slate-500 font-medium tracking-[0.02em] leading-[1.5]">
                          {app}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
