// ============================================
// NAVBAR — Full navigation dengan semua halaman
// ============================================
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SERVER_IP = 'play.clozhismp.net';

const NAV_MAIN = [
  { label: 'Home',    href: '/' },
  { label: 'Story',   href: '/story' },
  { label: 'Admin',   href: '/admin' },
  { label: 'Contact', href: '/contact' },
];

const NAV_SEASONS = [
  { label: '🏆 Season 1', href: '/season-1', desc: 'The Beginning · 2023' },
  { label: '⚔️ Season 2', href: '/season-2', desc: 'War of Clans · 2024' },
  { label: '🔮 New Server', href: '/coming-soon', desc: 'Coming Soon...' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [dropOpen, setDropOpen]   = useState(false);
  const dropRef  = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome   = pathname === '/';

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', s);
    return () => window.removeEventListener('scroll', s);
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: isHome ? 2.2 : 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 backdrop-blur-xl bg-black/75 border-b border-white/5' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href={isHome ? '#hero' : '/'} className="flex items-center gap-2 group">
          {/* Pixel-style logo block */}
          <div className="relative w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#F5C518,#22d3ee)', boxShadow: '0 0 12px rgba(245,197,24,0.5)' }}>
            <span className="text-black font-black text-xs" style={{ fontFamily: 'var(--font-display)' }}>C</span>
          </div>
          <span className="text-xl font-black tracking-widest transition-all duration-300 group-hover:tracking-[0.3em]"
            style={{ fontFamily: 'var(--font-display)', background: 'linear-gradient(135deg,#F5C518,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            CLOZHI
          </span>
          <span className="text-xl font-black text-white/80" style={{ fontFamily: 'var(--font-display)' }}>SMP</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_MAIN.map((link) => (
            <Link key={link.href} href={link.href}
              className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                pathname === link.href ? 'text-yellow-400' : 'text-white/55 hover:text-white'
              }`}>
              {link.label}
            </Link>
          ))}

          {/* Seasons dropdown */}
          <div className="relative" ref={dropRef}>
            <button onClick={() => setDropOpen(!dropOpen)}
              className={`flex items-center gap-1 text-xs tracking-widest uppercase transition-colors ${
                NAV_SEASONS.some(s => pathname === s.href) ? 'text-yellow-400' : 'text-white/55 hover:text-white'
              }`}>
              Seasons
              <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-xs opacity-50">▼</motion.span>
            </button>
            <AnimatePresence>
              {dropOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl overflow-hidden"
                  style={{
                    background: 'rgba(8,0,18,0.97)',
                    border: '1px solid rgba(245,197,24,0.2)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 30px rgba(245,197,24,0.08)',
                    backdropFilter: 'blur(20px)',
                  }}>
                  {NAV_SEASONS.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setDropOpen(false)}
                      className="flex flex-col px-4 py-3 hover:bg-yellow-400/8 transition-colors border-b border-white/5 last:border-0 group">
                      <span className="text-sm text-white group-hover:text-yellow-300 transition-colors">{s.label}</span>
                      <span className="text-xs text-white/30">{s.desc}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: IP + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => navigator.clipboard.writeText(SERVER_IP)}
            title="Klik untuk copy"
            className="text-xs font-mono px-3 py-1.5 rounded transition-all duration-200"
            style={{ color: 'rgba(245,197,24,0.7)', border: '1px solid rgba(245,197,24,0.2)' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(245,197,24,0.6)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(245,197,24,0.2)')}>
            {SERVER_IP}
          </button>
          <Link href="/"
            className="px-5 py-2 rounded text-sm font-bold tracking-wider text-black transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#F5C518,#d4a017)', boxShadow: '0 0 20px rgba(245,197,24,0.4)' }}>
            PLAY NOW
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(4,0,8,0.97)', borderTop: '1px solid rgba(245,197,24,0.1)', backdropFilter: 'blur(20px)' }}>
            <div className="px-6 py-4">
              {[...NAV_MAIN, ...NAV_SEASONS].map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                  className={`block py-3 text-sm uppercase tracking-wider border-b border-white/5 last:border-0 transition-colors ${
                    pathname === link.href ? 'text-yellow-400' : 'text-white/60 hover:text-white'
                  }`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
