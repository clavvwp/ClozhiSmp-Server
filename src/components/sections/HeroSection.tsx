// ============================================
// HERO SECTION (src/components/sections/HeroSection.tsx)
// Full-screen hero with animated background,
// floating particles, glowing title, and CTA buttons.
// ============================================

'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GlowButton from '@/components/ui/GlowButton';

// ── CONFIG — easy to edit ──
const SERVER_IP = 'play.clozhismp.net';
const DISCORD_URL = 'https://discord.gg/your-invite'; // change this!
const PARTICLE_COUNT = 80;

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated stars/particles on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to fill screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.7 + 0.1,
      // Some particles are purple, some are cyan
      color: Math.random() > 0.7 ? '34,211,238' : '168,85,247',
    }));

    // Animation loop
    let animFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle as glowing dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
        ctx.fill();
      });

      animFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated stars canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-pulse-slow"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Small badge above title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs tracking-widest uppercase"
          style={{ background: 'rgba(168,85,247,0.08)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Server Online
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="glow-text text-white">CLOZHI</span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            SMP
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="text-lg md:text-xl text-white/50 mb-12 max-w-xl mx-auto tracking-wider"
        >
          A New Era of Minecraft Survival
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GlowButton variant="primary" size="lg" onClick={() => navigator.clipboard.writeText(SERVER_IP)}>
            🎮 Play Now
          </GlowButton>
          <GlowButton href={DISCORD_URL} variant="outline" size="lg">
            💬 Join Discord
          </GlowButton>
        </motion.div>

        {/* Server IP display */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 0.6 }}
          className="mt-8 text-white/30 text-sm font-mono tracking-widest"
        >
          {SERVER_IP}
        </motion.p>
      </div>

      {/* Scroll hint at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 rounded-full"
          style={{ background: 'linear-gradient(to bottom, rgba(168,85,247,0.6), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
