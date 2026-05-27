// PAGE HERO — Animated header untuk halaman inner
'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  accentColor?: string;
}

export default function PageHero({ badge, title, subtitle, accentColor = '#a855f7' }: PageHeroProps) {
  return (
    <div className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
      {/* Rotating rings */}
      {[300, 500, 700].map((size, i) => (
        <motion.div key={size}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{ width: size, height: size, border: `1px solid ${accentColor}${['18', '10', '08'][i]}` }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* Glow blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)`, filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {badge && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs tracking-[0.25em] uppercase"
            style={{ borderColor: `${accentColor}40`, color: accentColor, background: `${accentColor}10` }}>
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-lg text-white/45 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </motion.p>
        )}

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-10 h-px max-w-xs mx-auto"
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />
      </div>
    </div>
  );
}
