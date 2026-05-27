// ============================================
// NAVBAR (src/components/ui/Navbar.tsx)
// Sticky top navigation bar.
// Becomes more opaque when you scroll down.
// ============================================

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// ── Nav links — edit these to add/remove links ──
const NAV_LINKS = [
  { label: 'Home',      href: '#hero' },
  { label: 'Features',  href: '#features' },
  { label: 'Gallery',   href: '#gallery' },
  { label: 'Status',    href: '#status' },
  { label: 'Community', href: '#community' },
];

// ── Server IP — change this to your real IP ──
const SERVER_IP = 'play.clozhismp.net';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add shadow/blur to navbar after scrolling 50px
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      // Slide down on page load
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.2 }} // delay so loading screen finishes
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 backdrop-blur-xl bg-black/60 border-b border-white/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span
            className="text-xl font-black tracking-widest glow-text transition-all duration-300 group-hover:tracking-[0.3em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            CLOZHI
          </span>
          <span className="text-purple-400 text-xl font-black" style={{ fontFamily: 'var(--font-display)' }}>
            SMP
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button + IP */}
        <div className="hidden md:flex items-center gap-4">
          {/* Copyable server IP */}
          <button
            onClick={() => navigator.clipboard.writeText(SERVER_IP)}
            className="text-xs text-purple-400/70 hover:text-purple-400 transition-colors font-mono border border-purple-500/20 hover:border-purple-500/50 px-3 py-1.5 rounded"
            title="Click to copy"
          >
            {SERVER_IP}
          </button>

          {/* Play Now button */}
          <a
            href="#hero"
            className="px-5 py-2 rounded text-sm font-semibold tracking-wider transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
              boxShadow: '0 0 20px rgba(168,85,247,0.4)',
            }}
          >
            PLAY NOW
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/5 px-6 py-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white/70 hover:text-white uppercase tracking-wider text-sm border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
