'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroClassic from '@/components/HeroClassic';
import LoadingScreen from '@/components/ui/loading-screen';
import LogoCarousel from '@/components/LogoCarousel';
import GridDotBackground from '@/components/GridDotBackground';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Homepage - Production Ready
 * Architect (Dark Luxury) theme set as permanent default
 */
export default function Home() {
  return (
    <>
      {/* Cinematic Splash Screen */}
      <LoadingScreen />

      <div dir="rtl" className="min-h-screen bg-white">
        <Header />

        {/* 1. HERO SECTION - Full Screen with Live Swapper */}
        <HeroClassic />

        {/* CONSTRUCTION YELLOW DIVIDER - Clean Visual Break */}
        <section className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 border-y-4 border-amber-500 h-12"></section>

        {/* 2. TRUSTED BY - Infinite Scrolling Logos */}
        <LogoCarousel />

        {/* 3. DUAL VIDEO GRID - Global Impact & Technology */}
        <section className="relative py-20 md:py-28 bg-white">
          <GridDotBackground className="opacity-10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
            {/* Architectural Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[#003366] tracking-[0.3em] uppercase mb-6 leading-none">
                GLOBAL IMPACT & TECHNOLOGY
              </h2>
              <div className="h-px w-40 mx-auto bg-[#003366]/20"></div>
            </motion.div>

            {/* Dual Video Grid - Perfect Symmetry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
              {/* LEFT VIDEO: Global Impact (Time-Trimmed 14s-44s) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {/* 16:9 Aspect Ratio Container */}
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-slate-200" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/kY6fA8Yp5Ww?start=14&end=44&rel=0&modestbranding=1&showinfo=0"
                    title="Xypex Global Impact"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{
                      border: 0,
                    }}
                  />
                </div>
                {/* Video Label */}
                <p className="text-center mt-4 text-sm md:text-base text-slate-600 font-light tracking-wide">
                  Global Infrastructure Projects
                </p>
              </motion.div>

              {/* RIGHT VIDEO: Technical Explanation */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {/* 16:9 Aspect Ratio Container */}
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-slate-200" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/VozKO84Rgzk?rel=0&modestbranding=1&showinfo=0"
                    title="Xypex Crystalline Technology"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{
                      border: 0,
                    }}
                  />
                </div>
                {/* Video Label */}
                <p className="text-center mt-4 text-sm md:text-base text-slate-600 font-light tracking-wide">
                  Crystalline Technology Explained
                </p>
              </motion.div>
            </div>

            {/* Section Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12 text-base md:text-lg text-slate-600 font-light tracking-wide leading-relaxed max-w-3xl mx-auto"
            >
              See how Xypex crystalline technology permanently waterproofs concrete in critical infrastructure projects worldwide.
            </motion.p>
          </div>
        </section>

        {/* 3. TECHNOLOGY - Brief Visual Explanation with Background */}
        <section className="relative py-10 px-4 overflow-hidden">
          {/* Shafdan Project Background - Wider View, No Over-Zoom */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 w-full h-full bg-shafdan-mobile md:bg-shafdan-desktop"
              style={{
                backgroundImage: 'url(/images/shafdan.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.15) contrast(1.1) saturate(1.3)',
              }}
            />
            {/* Ultra-minimal overlay - Show full project scale (20% only) */}
            <div className="absolute inset-0 bg-white/20" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#f59e0b] mb-1.5" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.9)' }}>
                טכנולוגיית גבישים קטליטית
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-[#003366] mb-2 leading-tight" style={{ textShadow: '0 2px 12px rgba(255,255,255,0.95)' }}>
                איטום מבנים מורכבים<br />בטכנולוגיה גבישית
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-lg mx-auto font-medium" style={{ textShadow: '0 1px 8px rgba(255,255,255,0.9)' }}>
                הגנה קבועה לבטון באמצעות חדירה גבישית קטליטית. המערכת אוטמת סדקים עד 0.5 מ"מ באופן אוטונומי, ומספקת איטום לכל החיים ללא ממברנות חיצוניות.
              </p>
            </motion.div>

            {/* Technology Visual - 3 Step Process */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: '01',
                  title: 'חדירה',
                  desc: 'גבישי Xypex חודרים עד 90 ס"מ למטריצת הבטון',
                },
                {
                  step: '02',
                  title: 'קריסטליזציה',
                  desc: 'תגובה עם סידן הידרוקסיד ליצירת גבישים בלתי מסיסים',
                },
                {
                  step: '03',
                  title: 'איטום עצמי',
                  desc: 'ריפוי אוטונומי של סדקים בנוכחות מים',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="text-3xl font-black text-[#003366]/20 group-hover:text-[#f59e0b]/40 transition-colors mb-2" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.8)' }}>
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold tracking-tighter text-[#003366] mb-1.5" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.9)' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal" style={{ textShadow: '0 1px 6px rgba(255,255,255,0.85)' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CORE SOLUTIONS - 3 Clean Columns with Background Images */}
        <section className="relative py-10 px-4 bg-slate-50">
          <GridDotBackground className="opacity-10" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#f59e0b] mb-1.5">
                פתרונות ליבה הנדסיים
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-[#003366] mb-2 leading-tight">
                מערכות מהנדסות<br />לפי יישום
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed max-w-lg mx-auto">
                פתרונות איטום מותאמים לתשתיות לאומיות, בנייה למגורים ופרויקטים תעשייתיים.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'תשתיות לאומיות',
                  desc: 'מנהרות, מערכות רכבת תחתית, טיפול במים',
                  applications: ['מפעל ההתפלה שורק B', 'הקו האדום תל אביב', 'המוביל הארצי'],
                  bgImage: '/images/WhatsApp Image 2026-01-21 at 13.04.40 (1).jpeg',
                  icon: <svg className="w-16 h-16 mx-auto text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>,
                },
                {
                  title: 'בנייה למגורים',
                  desc: 'יסודות, מרתפים, קירות תומכים',
                  applications: ['חניונים תת-קרקעיים', 'מגדלי מגורים', 'בריכות שחייה'],
                  bgImage: '/images/WhatsApp Image 2026-01-21 at 14.47.51.jpeg',
                  icon: <svg className="w-16 h-16 mx-auto text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>,
                },
                {
                  title: 'תעשייה ונמלים',
                  desc: 'מפעלים, מתקני אחסון, נמלים',
                  applications: ['נמל מפרץ חיפה', 'מפעלים כימיים', 'טיפול בשפכים'],
                  bgImage: '/images/WhatsApp Image 2026-02-13 at 22.02.11.jpeg',
                  icon: <svg className="w-16 h-16 mx-auto text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>,
                },
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative overflow-hidden border border-slate-200 hover:border-[#003366] transition-all duration-300 group"
                >
                  {/* Framed Architectural Image - Full Context Visible */}
                  <div className="absolute inset-0 bg-slate-900">
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url(${solution.bgImage})`,
                        backgroundSize: '100% auto',
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'brightness(0.5)',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/95 via-[#003366]/70 to-[#003366]/40" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-4">
                    <div className="text-white/60 mb-3 scale-75">{solution.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-1.5">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-white/90 mb-3 pb-3 border-b border-white/20">
                      {solution.desc}
                    </p>
                    <ul className="space-y-2 mb-4 text-right" dir="rtl">
                      {solution.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-white/80">
                          <svg className="w-4 h-4 text-[#f59e0b] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-white text-white text-sm font-bold transition-all hover:bg-white hover:text-[#003366]"
                    >
                      <span>צפה בפרויקטים</span>
                      <span>←</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CONTACT SECTION with Background */}
        <section className="relative py-10 px-4 overflow-hidden">
          {/* Wide Architectural Background - No Over-Zoom */}
          <div className="absolute inset-0 z-0 bg-slate-900">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: 'url(/images/WhatsApp Image 2026-02-13 at 22.02.23.jpeg)',
                backgroundSize: '100% auto',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(0.5)',
              }}
            />
            <div className="absolute inset-0 bg-[#003366]/70" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-2xl mx-auto text-center"
          >
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#f59e0b] mb-1.5">
              צור קשר
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-white mb-2 leading-tight">
              מוכנים להתחיל<br />את הפרויקט?
            </h2>
            <p className="text-sm md:text-base text-white/90 mb-4 leading-relaxed font-normal">
              צוות המומחים שלנו מוכן לספק ייעוץ טכני, פתרונות מותאמים אישית ותמיכה מקצועית לאורך כל הפרויקט.
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <a
                href="tel:+972-52-1234567"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#f59e0b] text-black font-bold text-sm transition-all hover:bg-[#d48806] shadow-xl"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>052-123-4567</span>
              </a>
              <a
                href="mailto:info@pbs-israel.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-white text-white font-bold text-sm transition-all hover:bg-white hover:text-[#003366]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@pbs-israel.com</span>
              </a>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
