// ============================================
// SCREENSHOT SECTION (src/components/sections/ScreenshotSection.tsx)
// A beautiful gallery of server screenshots.
// Replace the placeholder images with real ones!
// ============================================

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

// ── SCREENSHOTS — replace src with real image paths ──
// Add your images to /public/screenshots/
// Then update the src values below
const SCREENSHOTS = [
  {
    id: 1,
    src: '',           // e.g. '/screenshots/spawn.jpg'
    alt: 'Server Spawn',
    label: 'Spawn Area',
    size: 'large',     // 'large' takes more columns
  },
  {
    id: 2,
    src: '',
    alt: 'PvP Arena',
    label: 'PvP Arena',
    size: 'small',
  },
  {
    id: 3,
    src: '',
    alt: 'Player Town',
    label: 'Player Town',
    size: 'small',
  },
  {
    id: 4,
    src: '',
    alt: 'Underground Mining',
    label: 'Deep Caves',
    size: 'small',
  },
  {
    id: 5,
    src: '',
    alt: 'Epic Castle',
    label: 'Clan Castle',
    size: 'large',
  },
];

// Placeholder gradient colors for when no image is set
const PLACEHOLDER_GRADIENTS = [
  'linear-gradient(135deg, #1a0a2e 0%, #2d1a4e 50%, #0f172a 100%)',
  'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
  'linear-gradient(135deg, #1a0a2e 0%, #4c1d95 50%, #0a0a0a 100%)',
  'linear-gradient(135deg, #030712 0%, #1e3a5f 50%, #2d1a4e 100%)',
  'linear-gradient(135deg, #2d1a4e 0%, #1e3a5f 50%, #030712 100%)',
];

// ── Lightbox modal for viewing full screenshots ──
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-6"
        style={{ background: 'rgba(0,0,0,0.9)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.85 }}
          className="relative max-w-4xl w-full rounded-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt} className="w-full h-auto" />
          ) : (
            <div className="w-full h-80 flex items-center justify-center" style={{ background: PLACEHOLDER_GRADIENTS[0] }}>
              <p className="text-white/40 text-sm">📸 Add your screenshot here</p>
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white/70 hover:text-white flex items-center justify-center"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ScreenshotSection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">In-Game Screenshots</p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              See The{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                World
              </span>
            </h2>
            <p className="mt-4 text-white/40">Built by players, for players</p>
          </div>
        </ScrollReveal>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {SCREENSHOTS.map((shot, i) => (
            <ScrollReveal key={shot.id} delay={i * 0.1} direction="up">
              <motion.div
                // Large items span 2 rows
                className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                  shot.size === 'large' ? 'row-span-2' : 'row-span-1'
                }`}
                style={{ height: '100%' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightbox({ src: shot.src, alt: shot.alt })}
              >
                {/* Image or placeholder */}
                {shot.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center"
                    style={{ background: PLACEHOLDER_GRADIENTS[i % PLACEHOLDER_GRADIENTS.length] }}
                  >
                    <span className="text-4xl mb-2 opacity-40">📸</span>
                    <p className="text-white/20 text-xs">Add screenshot</p>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold tracking-wide">{shot.label}</p>
                </div>

                {/* Purple border glow on hover */}
                <div
                  className="absolute inset-0 rounded-xl border border-purple-500/0 group-hover:border-purple-500/50 transition-all duration-300"
                  style={{ boxShadow: '0 0 0 0 rgba(168,85,247,0)' }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Instruction note */}
        <ScrollReveal delay={0.3}>
          <p className="text-center mt-8 text-white/20 text-xs">
            💡 Add your screenshots to <code className="text-purple-400/60">/public/screenshots/</code> and update the paths in ScreenshotSection.tsx
          </p>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
