// ============================================
// FOOTER (src/components/sections/Footer.tsx)
// Minimal modern footer with glowing divider.
// Edit the links and server name as needed.
// ============================================

'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

// ── FOOTER LINKS — edit these ──
const FOOTER_LINKS = [
  { label: 'Rules',   href: '#' },
  { label: 'Store',   href: '#' },
  { label: 'Discord', href: 'https://discord.gg/your-invite' },
  { label: 'Vote',    href: '#' },
  { label: 'Wiki',    href: '#' },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6">
      {/* Glowing divider line at top */}
      <ScrollReveal direction="none">
        <div className="relative mb-16">
          <div className="h-px w-full bg-white/5" />
          {/* Purple glow in the center */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2"
            style={{
              background: 'linear-gradient(90deg, transparent, #a855f7, #22d3ee, #a855f7, transparent)',
              boxShadow: '0 0 20px rgba(168,85,247,0.5)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto">

        {/* Logo + tagline */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2
              className="text-3xl font-black tracking-widest glow-text mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              CLOZHI SMP
            </h2>
            <p className="text-white/30 text-sm tracking-widest">
              A New Era of Minecraft Survival
            </p>
          </div>
        </ScrollReveal>

        {/* Navigation links */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/40 hover:text-purple-400 text-sm tracking-wider uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Copyright */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-xs">
            <p>© {CURRENT_YEAR} CLOZHI SMP. All rights reserved.</p>
            <p>
              Not affiliated with Mojang Studios or Microsoft.
            </p>
            <a
              href="#hero"
              className="hover:text-purple-400 transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
