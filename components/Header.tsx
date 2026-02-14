'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * PREMIUM CORPORATE HEADER - Refined Luxury Aesthetic
 * - Generous vertical spacing (py-8 to py-10)
 * - Larger, prominent Xypex logo (h-20 to h-28)
 * - Airy feel with breathing room
 * - Sophisticated shadows and transitions
 * - Perfect alignment across all breakpoints
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      dir="ltr"
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-all duration-500 ${
        isScrolled ? 'shadow-lg shadow-black/5' : 'shadow-sm shadow-black/3'
      }`}
    >
      {/* Max-Width Container - Premium Centering */}
      <div className="max-w-[1536px] mx-auto">
        {/* TIER 1: Logo + Utilities - Generous Spacing */}
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-12 py-6 md:py-8 lg:py-10 border-b border-gray-100">
          {/* Left: Xypex Logo - Premium Sizing */}
          <Link href="/" className="flex-shrink-0 group transition-all duration-500 ease-out">
            <div style={{ isolation: 'isolate' }} className="relative">
              <Image
                src="/images/xypex headr logo.png"
                alt="Xypex - Concrete Waterproofing by Crystallization"
                width={350}
                height={105}
                className="h-20 sm:h-22 md:h-24 lg:h-28 w-auto transition-all duration-500 ease-out group-hover:opacity-90 group-hover:scale-[1.02]"
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.15) brightness(1.03)',
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
          </Link>

          {/* Mobile: Search Icon + Hamburger - Perfect Spacing */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Mobile Search Icon - Refined */}
            <button
              className="p-2.5 text-gray-600 hover:text-[#0071bb] transition-all duration-300 hover:bg-blue-50 rounded-lg"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Hamburger Menu Button - Premium Animation */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-gray-600 hover:text-[#0071bb] transition-all duration-300 hover:bg-blue-50 rounded-lg"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

          {/* Right: Utilities (Desktop Only) - Elegant Spacing */}
          <div className="hidden lg:flex items-center gap-8">
            <button className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-[#0071bb] transition-all duration-300 font-semibold uppercase tracking-[0.15em] hover:tracking-[0.18em]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>SEARCH</span>
            </button>
            <div className="w-px h-5 bg-gray-200"></div>
            <button className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-[#0071bb] transition-all duration-300 font-semibold uppercase tracking-[0.15em] hover:tracking-[0.18em]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>SELECT A COUNTRY</span>
            </button>
          </div>
        </div>

        {/* TIER 2: Navigation + Action Buttons (Desktop Only) - Refined Layout */}
        <div className="hidden lg:flex items-center justify-between px-12 py-5">
          {/* Left: Navigation Links - Generous Spacing */}
          <nav className="flex items-center gap-1">
            <NavLink href="/catalogs" active={isActive('/catalogs')}>
              Products
            </NavLink>
            <NavLink href="/our-story" active={isActive('/our-story')}>
              Technical
            </NavLink>
            <NavLink href="/projects" active={isActive('/projects')}>
              Global Projects
            </NavLink>
            <NavLink href="/" active={isActive('/')}>
              About
            </NavLink>
          </nav>

          {/* Right: Action Buttons - Premium Styling */}
          <div className="flex items-center gap-4">
            {/* Subscribe to News - Elegant Outline */}
            <Link
              href="/subscribe"
              className="px-6 py-3 text-sm font-semibold text-[#0071bb] border-2 border-[#0071bb] hover:bg-[#0071bb] hover:text-white transition-all duration-400 hover:shadow-lg hover:shadow-blue-100 hover:scale-[1.02]"
            >
              Subscribe to News
            </Link>

            {/* Instagram - Refined */}
            <a
              href="https://www.instagram.com/pbsisrael"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0071bb] border-2 border-[#0071bb] hover:bg-[#0071bb] hover:text-white transition-all duration-400 hover:shadow-lg hover:shadow-blue-100 hover:scale-[1.02]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow Us
            </a>

            {/* Contact Us - Premium Solid */}
            <Link
              href="/contact"
              className="px-8 py-3 text-sm font-semibold text-white bg-[#0071bb] hover:bg-[#005a96] transition-all duration-400 shadow-md shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 hover:scale-[1.02]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* PREMIUM MOBILE MENU - Enhanced Aesthetics */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay - Softer */}
            <div
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: 'fadeIn 0.4s ease-out'
              }}
            />

            {/* Mobile Menu Content - Refined */}
            <div
              className="lg:hidden border-t border-gray-100 bg-white shadow-2xl shadow-black/10 relative z-50"
              style={{
                animation: 'slideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <nav className="flex flex-col px-6 py-8 space-y-2 max-h-[calc(100vh-160px)] overflow-y-auto">
                {/* Mobile Navigation Links - Premium Touch Targets */}
                <MobileNavLink href="/catalogs" active={isActive('/catalogs')} onClick={() => setIsMobileMenuOpen(false)}>
                  Products
                </MobileNavLink>
                <MobileNavLink href="/our-story" active={isActive('/our-story')} onClick={() => setIsMobileMenuOpen(false)}>
                  Technical
                </MobileNavLink>
                <MobileNavLink href="/projects" active={isActive('/projects')} onClick={() => setIsMobileMenuOpen(false)}>
                  Global Projects
                </MobileNavLink>
                <MobileNavLink href="/" active={isActive('/')} onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </MobileNavLink>

                {/* Action Buttons Section - Elegant Spacing */}
                <div className="pt-8 mt-6 border-t border-gray-100 space-y-4">
                  <Link
                    href="/subscribe"
                    className="block w-full px-6 py-4 text-center text-base font-semibold text-[#0071bb] border-2 border-[#0071bb] hover:bg-[#0071bb] hover:text-white transition-all duration-400 active:scale-95 shadow-sm hover:shadow-lg hover:shadow-blue-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Subscribe to News
                  </Link>

                  <a
                    href="https://www.instagram.com/pbsisrael"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-[#0071bb] border-2 border-[#0071bb] hover:bg-[#0071bb] hover:text-white transition-all duration-400 active:scale-95 shadow-sm hover:shadow-lg hover:shadow-blue-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow Us on Instagram
                  </a>

                  <Link
                    href="/contact"
                    className="block w-full px-6 py-4 text-center text-base font-semibold text-white bg-[#0071bb] hover:bg-[#005a96] transition-all duration-400 shadow-md shadow-blue-100 hover:shadow-xl hover:shadow-blue-200 active:scale-95"
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

      {/* Refined CSS Animations */}
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
            transform: translateY(-20px);
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
 * Desktop Navigation Link - Refined Hover States
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
      className={`px-5 py-3 text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${
        active
          ? 'text-[#0071bb] bg-blue-50'
          : 'text-gray-700 hover:text-[#0071bb] hover:bg-blue-50/50'
      }`}
    >
      {children}
    </Link>
  );
}

/**
 * Mobile Navigation Link - Premium Touch Experience
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
      className={`px-6 py-4 text-base font-semibold transition-all duration-400 rounded-xl ${
        active
          ? 'text-[#0071bb] bg-blue-50 shadow-sm'
          : 'text-gray-700 hover:text-[#0071bb] hover:bg-blue-50/70 active:scale-95'
      }`}
    >
      {children}
    </Link>
  );
}
