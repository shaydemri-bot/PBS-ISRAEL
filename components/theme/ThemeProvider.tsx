'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

/**
 * Theme Provider for PBS Israel
 * Manages 3 theme variants:
 * - architect (dark): Luxury, premium, glassmorphism
 * - engineer (light): Industrial, technical, grid lines
 * - minimalist (ultra-clean): Swiss design, pure white/black
 */
export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      themes={['dark', 'engineer', 'minimalist']}
      enableSystem={false}
      storageKey="pbs-theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
