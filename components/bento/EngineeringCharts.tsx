'use client';

import { motion } from 'framer-motion';

const dataPoints = [
  { year: 1970, projects: 50 },
  { year: 1980, projects: 300 },
  { year: 1990, projects: 1200 },
  { year: 2000, projects: 4500 },
  { year: 2010, projects: 9800 },
  { year: 2020, projects: 15200 },
  { year: 2026, projects: 18500 },
];

const stats = [
  { value: '55+', label: 'שנות פעילות', icon: '📅' },
  { value: '100+', label: 'מדינות', icon: '🌍' },
  { value: '300+', label: 'פרויקטים בישראל', icon: '🏗️' },
];

/**
 * Engineering Charts Component
 * Custom SVG area chart showing Xypex global adoption
 * Animated stats below
 */
export default function EngineeringCharts() {
  const maxProjects = Math.max(...dataPoints.map((d) => d.projects));
  const width = 100;
  const height = 60;

  // Generate SVG path for area chart
  const pathData = dataPoints.map((point, index) => {
    const x = (index / (dataPoints.length - 1)) * width;
    const y = height - (point.projects / maxProjects) * height;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  const areaPath = `${pathData} L ${width} ${height} L 0 ${height} Z`;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          התפשטות <span className="text-accent">גלובלית</span>
        </h3>
        <p className="text-slate opacity-70">1970-2026 • פרויקטים מצטברים</p>
      </div>

      {/* Chart */}
      <div className="flex-1 relative">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((percent) => (
            <line
              key={percent}
              x1="0"
              y1={height * (percent / 100)}
              x2={width}
              y2={height * (percent / 100)}
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-glass-border opacity-30"
            />
          ))}

          {/* Area gradient */}
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" className="text-accent" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-accent" />
            </linearGradient>
          </defs>

          {/* Animated area */}
          <motion.path
            d={areaPath}
            fill="url(#areaGradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />

          {/* Animated line */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-accent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />

          {/* Data points */}
          {dataPoints.map((point, index) => {
            const x = (index / (dataPoints.length - 1)) * width;
            const y = height - (point.projects / maxProjects) * height;
            return (
              <motion.circle
                key={point.year}
                cx={x}
                cy={y}
                r="0.8"
                fill="currentColor"
                className="text-accent"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.15 + 1, duration: 0.3 }}
              />
            );
          })}
        </svg>

        {/* Y-axis labels */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate opacity-50 -mr-10">
          <span>18.5K</span>
          <span>9K</span>
          <span>0</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="text-center"
          >
            <div className="text-3xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-black text-accent mb-1">{stat.value}</div>
            <div className="text-xs text-slate opacity-70">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
