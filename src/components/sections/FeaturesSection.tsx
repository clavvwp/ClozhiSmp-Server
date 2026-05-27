// ============================================
// FEATURES SECTION (src/components/sections/FeaturesSection.tsx)
// Animated feature cards with hover glow and tilt effects.
// Easy to add/remove features by editing the FEATURES array.
// ============================================

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

// ── FEATURES DATA — edit this to change the cards ──
const FEATURES = [
  {
    icon: '🌲',
    title: 'Survival SMP',
    description: 'Pure vanilla-feel survival with a friendly community. Build, explore, and thrive in a persistent world.',
    color: '#22c55e', // green glow
  },
  {
    icon: '💰',
    title: 'Economy',
    description: 'Player-driven economy with shops, auctions, and a dynamic market. Earn, trade, and grow your empire.',
    color: '#eab308', // yellow glow
  },
  {
    icon: '🎉',
    title: 'Events',
    description: 'Weekly server events with unique rewards. From building contests to treasure hunts — never a dull moment.',
    color: '#ec4899', // pink glow
  },
  {
    icon: '⚔️',
    title: 'Clan Wars',
    description: 'Form clans, declare war, conquer territories. Strategy, alliances, and epic battles await.',
    color: '#ef4444', // red glow
  },
  {
    icon: '🏹',
    title: 'PvP Arena',
    description: 'Compete in ranked PvP matches in our custom-built arenas. Climb the leaderboard and prove your skills.',
    color: '#a855f7', // purple glow
  },
  {
    icon: '✨',
    title: 'Custom Items',
    description: 'Discover exclusive weapons, armor, and tools with unique enchantments you won\'t find anywhere else.',
    color: '#22d3ee', // cyan glow
  },
];

// ── Single feature card with hover tilt ──
function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Calculate tilt based on mouse position within card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -8;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <ScrollReveal delay={index * 0.08} direction="up">
      <motion.div
        className="glass-card rounded-xl p-6 h-full cursor-default select-none"
        style={{
          transformStyle: 'preserve-3d',
          // Glow effect on hover using the card's color
          boxShadow: isHovered
            ? `0 0 30px ${feature.color}30, 0 0 60px ${feature.color}10, inset 0 1px 0 rgba(255,255,255,0.1)`
            : '0 0 0 rgba(0,0,0,0), inset 0 1px 0 rgba(255,255,255,0.05)',
          borderColor: isHovered ? `${feature.color}30` : 'rgba(255,255,255,0.08)',
        }}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Icon with color glow */}
        <div
          className="text-4xl mb-4 inline-block"
          style={{ filter: isHovered ? `drop-shadow(0 0 12px ${feature.color})` : 'none' }}
        >
          {feature.icon}
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold mb-2 tracking-wide transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-display)',
            color: isHovered ? feature.color : '#ffffff',
          }}
        >
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/50 leading-relaxed">
          {feature.description}
        </p>

        {/* Colored bottom border that appears on hover */}
        <div
          className="mt-4 h-0.5 rounded-full transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, ${feature.color}, transparent)`,
            opacity: isHovered ? 1 : 0,
            width: isHovered ? '100%' : '0%',
          }}
        />
      </motion.div>
    </ScrollReveal>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-6 relative">
      {/* Section label + heading */}
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-4">What We Offer</p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Server{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Features
              </span>
            </h2>
            <p className="mt-4 text-white/40 max-w-md mx-auto">
              Everything you need for the ultimate Minecraft experience
            </p>
          </div>
        </ScrollReveal>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
