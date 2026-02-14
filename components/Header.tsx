'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

/**
 * Premium Global Header - Permanent Pure White
 * PBS Israel (left) + Xypex Global (right) in original colors
 * Professional navigation in dark gray/PBS blue
 */
export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left Side: PBS Israel Logo - Enhanced Size */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-20 w-48">
              <Image
                src="/images/logo.jpg"
                alt="PBS Israel - Xypex Representative"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </Link>

          {/* Center: Navigation - Professional Hebrew */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/" active={isActive('/')}>
              דף הבית
            </NavLink>
            <NavLink href="/our-story" active={isActive('/our-story')}>
              פתרונות
            </NavLink>
            <NavLink href="/projects" active={isActive('/projects')}>
              פרויקטים
            </NavLink>
            <NavLink href="/catalogs" active={isActive('/catalogs')}>
              קטלוגים
            </NavLink>
            <NavLink href="/contact" active={isActive('/contact')}>
              צור קשר
            </NavLink>
          </nav>

          {/* Right Side: Xypex Global Logo + CTA */}
          <div className="flex items-center gap-6">
            {/* Xypex Global Logo - Refined Size (85% scale) */}
            <div className="hidden lg:flex items-center gap-3 pl-6">
              <div className="text-right">
                <div className="text-3xl font-black text-[#003366] tracking-wider leading-none">
                  XYPEX
                </div>
                <div className="text-sm font-semibold text-[#f59e0b] tracking-[0.3em] uppercase mt-1">
                  Global
                </div>
              </div>
            </div>

            {/* CTA Button - Pure Ghost Style */}
            <Link
              href="tel:+972-52-1234567"
              className="px-6 py-2.5 rounded-lg font-semibold transition-all bg-transparent border border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white"
            >
              צור קשר
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" style={{ color: '#003366' }} aria-label="Menu">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}

/**
 * Navigation Link Component
 * Professional dark gray with PBS blue active state
 */
function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`
        relative px-4 py-2 rounded-lg text-base uppercase tracking-wider
        transition-all duration-300
        ${active ? 'text-[#003366] font-bold' : 'text-slate-900 font-medium hover:text-[#003366]'}
      `}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeNav"
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ background: '#003366' }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
}
