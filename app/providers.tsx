'use client';

import ThemeProvider from '@/components/theme/ThemeProvider';
import { useLenis } from '@/lib/lenis';

/**
 * Lenis Provider Component
 * Initializes smooth scroll on mount
 */
function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}

/**
 * Root Providers Component
 * Combines ThemeProvider and LenisProvider
 * Used in app/layout.tsx
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LenisProvider>
        {children}
      </LenisProvider>
    </ThemeProvider>
  );
}
