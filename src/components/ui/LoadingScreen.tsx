// LOADING SCREEN — Intro animasi dengan logo colors
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress]   = useState(0);

  useEffect(() => {
    // Animate progress bar then hide
    const start = Date.now();
    const duration = 2200;
    const tick = () => {
      const p = Math.min(100, ((Date.now() - start) / duration) * 100);
      setProgress(p);
      if (p < 100) requestAnimationFrame(tick);
      else setTimeout(() => setIsLoading(false), 200);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center"
          style={{ background: '#040008' }}
          exit={{ opacity: 0 }} transition={{ duration: 0.7 }}
        >
          {/* Pixel particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div key={i}
              className="absolute w-2 h-2 rounded-sm"
              style={{
                background: ['#F5C518','#22d3ee','#a855f7','#C8D6E5'][i % 4],
                left: `${5 + (i * 8)}%`, top: `${20 + Math.sin(i) * 30}%`,
                opacity: 0.3,
              }}
              animate={{ y: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}

          {/* Logo */}
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-10">
            <div
              className="text-5xl font-black tracking-widest"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'linear-gradient(135deg, #F5C518, #22d3ee, #a855f7)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(245,197,24,0.5))',
              }}>
              CLOZHI
            </div>
            <div className="text-2xl font-black tracking-[0.5em] text-white/70 mt-1"
              style={{ fontFamily: 'var(--font-display)' }}>
              SMP
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-52 h-1 bg-white/8 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #F5C518, #22d3ee, #a855f7)',
                boxShadow: '0 0 10px rgba(245,197,24,0.7)',
                transition: 'width 0.05s linear',
              }}
            />
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-5 text-white/30 text-xs tracking-[0.3em] uppercase">
            Loading Experience...
          </motion.p>

          {/* Progress percent */}
          <p className="mt-2 text-xs font-mono" style={{ color: 'rgba(245,197,24,0.4)' }}>
            {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
