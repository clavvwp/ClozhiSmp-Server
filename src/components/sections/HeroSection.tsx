// HERO SECTION — Full-screen hero dengan logo Clozhi SMP
'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GlowButton from '@/components/ui/GlowButton';

const SERVER_IP   = 'play.clozhismp.net';
const DISCORD_URL = 'https://discord.gg/fyNQ3gnyc';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    // Particles dengan warna dari logo: gold, cyan, purple, silver
    const colors = ['245,197,24', '34,211,238', '168,85,247', '200,214,229'];
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.6 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
      // Some particles are square (pixel vibe!)
      isPixel: Math.random() > 0.75,
    }));

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX; p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = `rgb(${p.color})`;
        if (p.isPixel) {
          // Square pixel particle
          ctx.fillRect(p.x, p.y, p.size * 2, p.size * 2);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">

        {/* Online badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border text-xs tracking-widest uppercase"
          style={{ borderColor: 'rgba(245,197,24,0.3)', color: '#F5C518', background: 'rgba(245,197,24,0.06)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Server Online · Coming Soon!
        </motion.div>

        {/* Logo image — floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-6 float-anim"
          style={{ filter: 'drop-shadow(0 0 40px rgba(245,197,24,0.5)) drop-shadow(0 0 80px rgba(34,211,238,0.3))' }}
        >
          {/* If you have the logo image, use: */}
          {/* <Image src="/logo.png" alt="CLOZHI SMP" width={280} height={280} priority /> */}
          {/* Fallback pixel-style title: */}
          <div className="flex flex-col items-center">
            <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'linear-gradient(135deg, #F5C518 0%, #FFE066 30%, #22d3ee 65%, #a855f7 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(245,197,24,0.6))',
              }}>
              CLOZHI
            </h1>
            <h2 className="text-4xl md:text-6xl font-black tracking-widest"
              style={{
                fontFamily: 'var(--font-display)',
                background: 'linear-gradient(135deg, #C8D6E5, #ffffff, #C8D6E5)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                letterSpacing: '0.4em',
              }}>
              SMP
            </h2>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.9 }}
          className="text-lg md:text-xl text-white/50 mb-12 tracking-widest">
          A New Era of Minecraft Survival
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.2 }}
          className="flex flex-col sm:flex-row gap-4 items-center">
          <GlowButton variant="primary" size="lg" onClick={() => navigator.clipboard.writeText(SERVER_IP)}>
            🎮 Play Now
          </GlowButton>
          <GlowButton href={DISCORD_URL} variant="outline" size="lg">
            💬 Join Discord
          </GlowButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}
          className="mt-6 font-mono text-sm tracking-widest"
          style={{ color: 'rgba(245,197,24,0.45)' }}>
          {SERVER_IP}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/25 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 rounded-full"
          style={{ background: 'linear-gradient(to bottom, rgba(245,197,24,0.6), transparent)' }} />
      </motion.div>
    </section>
  );
}
