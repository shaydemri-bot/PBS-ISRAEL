/**
 * 🏛️ Architect - Architectural Divider
 * Clean 1px navy border for section separation
 */

interface ArchitecturalDividerProps {
  className?: string;
  opacity?: number;
}

export default function ArchitecturalDivider({
  className = '',
  opacity = 0.1,
}: ArchitecturalDividerProps) {
  return (
    <div
      className={`w-full h-px ${className}`}
      style={{
        backgroundColor: `rgba(0, 51, 102, ${opacity})`,
      }}
      aria-hidden="true"
    />
  );
}
