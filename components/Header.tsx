'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * ALIVE SLIM HEADER - PBS × Xypex Partnership
 * Glassmorphism + Scroll Shrink + Animated Nav Hovers
 * PBS anchors left | Navigation center | Xypex anchors right
 */
export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200 transition-all duration-300 ${
        isScrolled ? 'shadow-lg py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-8">
          {/* FAR LEFT: PBS Logo - Absolute Transparency Fix */}
          <Link href="/" className="flex-shrink-0 group bg-transparent border-0 p-0">
            <div className="relative h-16 overflow-hidden bg-transparent">
              <Image
                src="/images/PBSLOGO.jpg"
                alt="PBS Israel"
                width={200}
                height={80}
                className="h-16 w-auto group-hover:opacity-80 transition-opacity duration-300 bg-transparent"
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.1) brightness(1.05)',
                  objectFit: 'contain',
                  transform: 'scale(1.1)',
                  border: 'none',
                  boxShadow: 'none',
                  padding: 0,
                  margin: 0,
                  background: 'transparent'
                }}
                priority
              />
            </div>
          </Link>

          {/* CENTER: Navigation Links with Animated Underline */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <NavLink href="/catalogs" active={isActive('/catalogs')}>
              Products
            </NavLink>
            <NavLink href="/our-story" active={isActive('/our-story')}>
              Solutions
            </NavLink>
            <NavLink href="/projects" active={isActive('/projects')}>
              Projects
            </NavLink>
            <NavLink href="/" active={isActive('/')}>
              About
            </NavLink>
          </nav>

          {/* FAR RIGHT: Instagram + Xypex Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Follow Us - Instagram Button */}
            <a
              href="https://www.instagram.com/pbsisrael"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow Us</span>
            </a>

            {/* Contact Us Button - Desktop Only */}
            <Link
              href="/contact"
              className="hidden lg:flex px-4 py-2 text-sm font-bold text-white bg-[#003366] rounded hover:bg-[#002244] transition-all duration-300"
            >
              Contact Us
            </Link>

            {/* Xypex Logo - Absolute Transparency Fix */}
            <Link href="/" className="group bg-transparent border-0 p-0">
              <div className="relative h-16 overflow-hidden bg-transparent">
                <Image
                  src="/images/xypex-logo-png_seeklogo-154797.png"
                  alt="Xypex - Crystalline Waterproofing Technology"
                  width={280}
                  height={80}
                  className="h-16 w-auto group-hover:opacity-80 transition-opacity duration-300 bg-transparent"
                  style={{
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1) brightness(1.05)',
                    objectFit: 'contain',
                    transform: 'scale(1.1)',
                    border: 'none',
                    boxShadow: 'none',
                    padding: 0,
                    margin: 0,
                    background: 'transparent'
                  }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-slate-700 hover:text-slate-900 flex-shrink-0" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

/**
 * Navigation Link Component - Animated Center-Out Underline
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
        relative text-sm font-bold tracking-wide transition-colors duration-300 group
        ${active ? 'text-[#003366]' : 'text-slate-900 hover:text-[#003366]'}
      `}
    >
      {children}
      {/* Animated Underline - Center Out */}
      <span
        className={`absolute bottom-[-4px] left-1/2 h-[2px] bg-[#003366] transition-all duration-300 ${
          active ? 'w-full -translate-x-1/2' : 'w-0 group-hover:w-full -translate-x-1/2'
        }`}
      ></span>
    </Link>
  );
}
