import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="https://static.wixstatic.com/media/38df06_1d91e07781cf4f88a2f818cfc5746e62~mv2.png/v1/fill/w_256,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/xypex_logo_no_background.png"
              alt="Xypex Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-gray-800">PBS Israel</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
              בית
            </Link>
            <Link href="/our-story" className="text-gray-700 hover:text-blue-600 font-medium transition">
              מערכת זייפקס
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 font-medium transition">
              פרויקטים
            </Link>
            <Link href="/catalogs" className="text-gray-700 hover:text-blue-600 font-medium transition">
              קטלוגים
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">
              צור קשר
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}