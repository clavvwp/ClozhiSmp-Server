// FOOTER — Modern footer dengan logo colors
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

const LINKS = [
  { label: 'Home',        href: '/' },
  { label: 'Story',       href: '/story' },
  { label: 'Admin',       href: '/admin' },
  { label: 'Season 1',    href: '/season-1' },
  { label: 'Season 2',    href: '/season-2' },
  { label: 'New Server',  href: '/coming-soon' },
  { label: 'Contact',     href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6">
      {/* Glowing divider */}
      <ScrollReveal direction="none">
        <div className="relative mb-14">
          <div className="h-px w-full bg-white/5" />
          <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3"
            style={{ background: 'linear-gradient(90deg,transparent,#F5C518,#22d3ee,#a855f7,transparent)', boxShadow: '0 0 20px rgba(245,197,24,0.4)' }}
            initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </ScrollReveal>

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-8 rounded flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,#F5C518,#22d3ee)', boxShadow: '0 0 15px rgba(245,197,24,0.4)' }}>
                <span className="text-black font-black text-sm" style={{ fontFamily: 'var(--font-display)' }}>C</span>
              </div>
              <span className="text-2xl font-black text-logo-gradient" style={{ fontFamily: 'var(--font-display)' }}>CLOZHI</span>
              <span className="text-2xl font-black text-white/70" style={{ fontFamily: 'var(--font-display)' }}>SMP</span>
            </div>
            <p className="text-white/30 text-sm tracking-widest">A New Era of Minecraft Survival</p>
          </div>
        </ScrollReveal>

        {/* Nav links */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-5 mb-10">
            {LINKS.map(l => (
              <Link key={l.href} href={l.href}
                className="text-white/35 hover:text-yellow-400 text-xs tracking-widest uppercase transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <div className="h-px bg-white/5 mb-7" />

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white/25 text-xs">
            <p>© {new Date().getFullYear()} CLOZHI SMP. All rights reserved.</p>
            <p>Not affiliated with Mojang Studios or Microsoft.</p>
            <a href="#" className="hover:text-yellow-400 transition-colors">Back to top ↑</a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
