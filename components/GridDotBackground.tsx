/**
 * 🏛️ Architect - Grid Dot Background Pattern
 * Architectural editorial element for premium sections
 */

interface GridDotBackgroundProps {
  className?: string;
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
}

export default function GridDotBackground({
  className = '',
  dotColor = 'rgba(0,51,102,0.08)',
  dotSize = 1,
  spacing = 40,
}: GridDotBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at ${dotSize}px ${dotSize}px, ${dotColor} ${dotSize}px, transparent 0)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}
