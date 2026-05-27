// ============================================
// COMMUNITY SECTION (src/components/sections/CommunitySection.tsx)
// Discord CTA + social media links.
// Edit the links below to match your accounts.
// ============================================

'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlowButton from '@/components/ui/GlowButton';

// ── SOCIAL LINKS — add your real URLs here ──
const SOCIAL_LINKS = [
  {
    icon: '💬',
    label: 'Discord',
    description: 'Join 1,200+ members',
    href: 'https://discord.gg/your-invite',
    color: '#5865f2',
  },
  {
    icon: '📺',
    label: 'YouTube',
    description: 'Watch server content',
    href: 'https://youtube.com/@yourChannel',
    color: '#ff0000',
  },
  {
    icon: '🐦',
    label: 'Twitter / X',
    description: 'Follow for updates',
    href: 'https://twitter.com/yourAccount',
    color: '#1da1f2',
  },
  {
    icon: '📸',
    label: 'Instagram',
    description: 'Screenshots & news',
    href: 'https://instagram.com/yourAccount',
    color: '#e1306c',
  },
];

// ── Individual social card ──
function SocialCard({
  link,
  index,
}: {
  link: typeof SOCIAL_LINKS[0];
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      <motion.a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card rounded-xl p-5 flex items-center gap-4 group block"
        whileHover={{
          scale: 1.03,
          borderColor: `${link.color}40`,
          boxShadow: `0 0 30px ${link.color}20`,
        }}
        transition={{ duration: 0.2 }}
      >
        <span
          className="text-3xl transition-transform duration-300 group-hover:scale-110"
          style={{ filter: `drop-shadow(0 0 8px ${link.color})` }}
        >
          {link.icon}
        </span>
        <div>
          <p className="text-white font-semibold text-sm">{link.label}</p>
          <p className="text-white/40 text-xs">{link.description}</p>
        </div>
        <span className="ml-auto text-white/20 group-hover:text-white/60 transition-colors text-xl">→</span>
      </motion.a>
    </ScrollReveal>
  );
}

export default function CommunitySection() {
  return (
    <section id="community" className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-4">Together We Thrive</p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Join The{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Community
              </span>
            </h2>
            <p className="mt-4 text-white/40 max-w-md mx-auto">
              Thousands of players are waiting. Build friendships, forge alliances, and create unforgettable memories.
            </p>
          </div>
        </ScrollReveal>

        {/* Big Discord CTA */}
        <ScrollReveal delay={0.1}>
          <div
            className="rounded-2xl p-10 text-center mb-12"
            style={{
              background: 'linear-gradient(135deg, rgba(88,101,242,0.15) 0%, rgba(168,85,247,0.1) 100%)',
              border: '1px solid rgba(88,101,242,0.3)',
              boxShadow: '0 0 60px rgba(88,101,242,0.1)',
            }}
          >
            <div className="text-6xl mb-4">💬</div>
            <h3
              className="text-2xl font-black text-white mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Discord Community
            </h3>
            <p className="text-white/40 mb-8 max-w-sm mx-auto">
              Chat with staff, get updates, find teammates, and stay in the loop with everything CLOZHI SMP.
            </p>
            <GlowButton href="https://discord.gg/your-invite" variant="primary" size="lg">
              💬 Join Discord Server
            </GlowButton>
          </div>
        </ScrollReveal>

        {/* Social links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SOCIAL_LINKS.map((link, i) => (
            <SocialCard key={link.label} link={link} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
