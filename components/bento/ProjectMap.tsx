'use client';

import { motion } from 'framer-motion';

const projects = [
  { id: 1, name: 'סורק B', x: '48%', y: '42%', value: '$1.5B' },
  { id: 2, name: 'מטרו ת"א', x: '46%', y: '50%', value: '$49B' },
  { id: 3, name: 'מפרץ חיפה', x: '42%', y: '32%', value: '$2B' },
  { id: 4, name: 'אשדוד', x: '38%', y: '54%', value: '$800M' },
];

/**
 * Project Map Component - SCALED DOWN (30-40% width)
 * Simple, elegant, compact
 */
export default function ProjectMap() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full max-w-xs">
        {/* Compact Header */}
        <div className="text-center mb-6">
          <div className="text-5xl font-black text-accent mb-2">300+</div>
          <h3 className="text-lg font-bold text-foreground">פרויקטים פעילים</h3>
          <p className="text-xs text-slate opacity-70 mt-1">ברחבי ישראל</p>
        </div>

        {/* Compact Map */}
        <div className="relative w-32 h-48 mx-auto">
          {/* Simple Israel Shape */}
          <svg
            viewBox="0 0 100 150"
            className="w-full h-full opacity-15"
          >
            <path
              d="M 50 10 L 55 20 L 60 40 L 57 60 L 55 80 L 50 100 L 45 120 L 42 135 L 40 125 L 37 105 L 35 85 L 32 65 L 35 45 L 40 25 L 45 15 Z"
              fill="currentColor"
              className="text-accent"
            />
          </svg>

          {/* Compact Pins - NO pulsing animation (performance) */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="absolute w-2 h-2 rounded-full bg-accent"
              style={{
                left: project.x,
                top: project.y,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>

        {/* Compact Project List */}
        <div className="mt-6 space-y-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex justify-between items-center text-xs"
              style={{ color: 'var(--foreground)', opacity: 0.7 }}
            >
              <span>{project.name}</span>
              <span className="font-bold" style={{ color: 'var(--accent)' }}>
                {project.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
