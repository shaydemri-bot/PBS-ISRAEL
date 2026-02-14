import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for merging Tailwind classes with proper precedence
 * Combines clsx (conditional classes) with tailwind-merge (deduplication)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
