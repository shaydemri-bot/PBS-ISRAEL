import { ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * Standardized Button Component
 * Provides consistent styling across the site with navy/amber variants
 *
 * @param variant - 'primary' (navy), 'secondary' (amber), 'outline' (navy border)
 * @param size - 'sm', 'md', 'lg' for different button sizes
 * @param children - Button content
 * @param className - Additional Tailwind classes
 *
 * @example
 * <Button variant="primary" size="lg">שלח הודעה</Button>
 * <Button variant="secondary" size="md">למד עוד</Button>
 * <Button variant="outline" size="sm">צור קשר</Button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-[#003366] text-white hover:bg-[#002244] shadow-lg hover:shadow-xl",
    secondary: "bg-[#f59e0b] text-black hover:bg-[#d48806] shadow-lg hover:shadow-xl",
    outline: "border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white shadow-sm hover:shadow-lg"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-5 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`font-bold transition-all duration-300 rounded-lg ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
