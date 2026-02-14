'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * MOBILE-OPTIMIZED XYPEX HEADER
 * - Premium hamburger menu with smooth animations
 * - Responsive logo sizing (clear but not overwhelming)
 * - Touch targets 48px+ for optimal thumb accessibility
 * - iOS auto-zoom prevention (16px minimum text)
 * - Instagram button accessible on mobile
 */
export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      dir="ltr"
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      {/* Max-Width Container for Content */}
      <div className="max-w-[1440px] mx-auto">
        {/* TIER 1: Logo + Utilities */}
        <div className="flex items-center justify-between px-6 py-3 sm:py-4 border-b border-gray-200">
          {/* Left: Xypex Logo - Responsive & Clear */}
          <Link href="/" className="flex-shrink-0 group transition-all duration-300">
            <div style={{ isolation: 'isolate' }}>
              <Image
                src="/images/xypex headr logo.png"
                alt="Xypex - Concrete Waterproofing by Crystallization"
                width={280}
                height={84}
                className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto group-hover:opacity-90 transition-opacity duration-300"
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.2) brightness(1.05)',
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
          </Link>

          {/* Mobile: Search Icon + Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Search Icon */}
            <button
              className="p-2 text-gray-700 hover:text-[#0071bb] transition-colors"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Hamburger Menu Button - Premium Animation */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#0071bb] transition-all duration-300"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    className="origin-center transition-all duration-300"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                    className="origin-center transition-all duration-300"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Right: Utilities (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="flex items-center gap-2 text-xs text-gray-700 hover:text-[#0071bb] transition-colors font-semibold uppercase tracking-wider">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>SEARCH</span>
            </button>
            <div className="w-px h-4 bg-gray-300"></div>
            <button className="flex items-center gap-2 text-xs text-gray-700 hover:text-[#0071bb] transition-colors font-semibold uppercase tracking-wider">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>SELECT A COUNTRY</span>
            </button>
          </div>
        </div>

        {/* TIER 2: Navigation + Action Buttons (Desktop Only) */}
        <div className="hidden lg:flex items-center justify-between px-6 py-3">
          {/* Left: Navigation Links - COMPLETE NAVIGATION MENU */}
          <nav className="flex items-center gap-2">
            <NavLink href="/catalogs" active={isActive('/catalogs')}>
              Products
            </NavLink>
            <NavLink href="/our-story" active={isActive('/our-story')}>
              Technical
            </NavLink>
            {/* PROJECTS LINK - VERIFIED PRESENT */}
            <NavLink href="/projects" active={isActive('/projects')}>
              Global Projects
            </NavLink>
            <NavLink href="/" active={isActive('/')}>
              About
            </NavLink>
          </nav>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Subscribe to News */}
            <Link
              href="/subscribe"
              className="px-5 py-3 text-sm font-bold text-[#0071bb] border border-[#0071bb] hover:bg-[#0071bb] hover:text-white transition-all duration-300"
            >
              Subscribe to News
            </Link>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/pbsisrael"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#0071bb] border border-[#0071bb] hover:bg-[#0071bb] hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow Us
            </a>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="px-7 py-3 text-sm font-bold text-white bg-[#0071bb] hover:bg-[#005a96] transition-all duration-300 shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* PREMIUM MOBILE MENU - Smooth Animation with Backdrop */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: 'fadeIn 0.3s ease-out'
              }}
            />

            {/* Mobile Menu Content */}
            <div
              className="lg:hidden border-t border-gray-200 bg-white shadow-xl relative z-50"
              style={{
                animation: 'slideDown 0.3s ease-out'
              }}
            >
              <nav className="flex flex-col px-4 py-6 space-y-1 max-h-[calc(100vh-140px)] overflow-y-auto">
                {/* Mobile Navigation Links - COMPLETE MENU */}
                <MobileNavLink href="/catalogs" active={isActive('/catalogs')} onClick={() => setIsMobileMenuOpen(false)}>
                  Products
                </MobileNavLink>
                <MobileNavLink href="/our-story" active={isActive('/our-story')} onClick={() => setIsMobileMenuOpen(false)}>
                  Technical
                </MobileNavLink>
                {/* PROJECTS LINK - VERIFIED PRESENT IN MOBILE MENU */}
                <MobileNavLink href="/projects" active={isActive('/projects')} onClick={() => setIsMobileMenuOpen(false)}>
                  Global Projects
                </MobileNavLink>
                <MobileNavLink href="/" active={isActive('/')} onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </MobileNavLink>

                {/* Action Buttons Section */}
                <div className="pt-6 mt-4 border-t border-gray-200 space-y-3">
                  <Link
                    href="/subscribe"
                    className="block w-full px-4 py-3 text-center text-base font-bold text-[#0071bb] border-2 border-[#0071bb] hover:bg-[#0071bb] hover:text-white transition-all duration-300 active:scale-95"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Subscribe to News
                  </Link>

                  {/* Instagram Button - Premium Mobile */}
                  <a
                    href="https://www.instagram.com/pbsisrael"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-bold text-[#0071bb] border-2 border-[#0071bb] hover:bg-[#0071bb] hover:text-white transition-all duration-300 active:scale-95"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow Us on Instagram
                  </a>

                  <Link
                    href="/contact"
                    className="block w-full px-4 py-3 text-center text-base font-bold text-white bg-[#0071bb] hover:bg-[#005a96] transition-all duration-300 shadow-md active:scale-95"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}

/**
 * Desktop Navigation Link Component
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
      className={`px-4 py-3 text-sm font-bold transition-colors duration-300 ${
        active ? 'text-[#0071bb]' : 'text-gray-800 hover:text-[#0071bb]'
      }`}
    >
      {children}
    </Link>
  );
}

/**
 * Mobile Navigation Link Component - 48px Touch Target
 */
function MobileNavLink({
  href,
  active,
  children,
  onClick,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 py-3 text-base font-semibold transition-all duration-300 rounded-lg ${
        active
          ? 'text-[#0071bb] bg-blue-50 shadow-sm'
          : 'text-gray-800 hover:text-[#0071bb] hover:bg-gray-50 active:scale-95'
      }`}
    >
      {children}
    </Link>
  );
}
