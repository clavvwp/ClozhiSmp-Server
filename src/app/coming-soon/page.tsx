// ============================================
// COMING SOON — src/app/coming-soon/page.tsx
// Halaman teaser untuk server Clozhi baru
// ============================================
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '@/components/ui/PageLayout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GlowButton from '@/components/ui/GlowButton';
import Card3D from '@/components/ui/Card3D';

// ✏️ SET TANGGAL LAUNCH DI SINI (format: 'YYYY-MM-DD')
const LAUNCH_DATE = '2026-01-01';
const DISCORD_URL = 'https://discord.gg/your-invite';

// Teaser features — ganti sesuai rencana server baru
const TEASER_FEATURES = [
  { icon: '🌌', label: 'Custom Dimension',    hint: '???' },
  { icon: '⚡', label: 'Ability System',      hint: '???' },
  { icon: '🏟️', label: 'Grand Arena',         hint: '???' },
  { icon: '🗺️', label: 'Massive Open World',  hint: '???' },
  { icon: '🤖', label: 'AI Mobs',             hint: '???' },
  { icon: '💫', label: 'New Economy',         hint: '???' },
];

// Countdown hook
function useCountdown(targetDate: string) {
  const calc = () => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
      done: false,
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return time;
}

// Animated countdown digit
function CountdownBlock({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0');
  return (
    <motion.div className="flex flex-col items-center">
      <div
        className="relative w-20 h-24 md:w-28 md:h-32 rounded-2xl flex items-center justify-center overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(245,197,24,0.2)',
          boxShadow: '0 0 30px rgba(245,197,24,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
        }}
      >
        {/* Shine */}
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(245,197,24,0.4),transparent)' }} />

        <AnimatePresence mode="wait">
          <motion.span
            key={display}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-4xl md:text-5xl font-black tabular-nums"
            style={{ fontFamily: 'var(--font-display)', color: '#F5C518' }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="mt-2 text-xs text-white/40 tracking-widest uppercase">{label}</p>
    </motion.div>
  );
}

export default function ComingSoonPage() {
  const time = useCountdown(LAUNCH_DATE);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <PageLayout accentColor="#F5C518">
      {/* ── HERO ── */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">

        {/* Pulsing rings */}
        {[400, 650, 900].map((s, i) => (
          <motion.div key={s}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{ width: s, height: s, border: `1px solid rgba(245,197,24,${[0.15, 0.08, 0.04][i]})` }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.03, 1] }}
            transition={{ duration: 25 + i * 10, repeat: Infinity, ease: 'linear' }}
          />
        ))}

        {/* Gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative z-10 text-center max-w-3xl mx-auto">

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border text-xs tracking-[0.3em] uppercase"
            style={{ borderColor: 'rgba(245,197,24,0.35)', color: '#F5C518', background: 'rgba(245,197,24,0.07)' }}>
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>●</motion.span>
            Something Big Is Coming
          </motion.div>

          {/* Title */}
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-4"
              style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-logo-gradient">CLOZHI</span>
              <br />
              <span className="text-white/90">NEW SERVER</span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-lg text-white/45 mb-16 max-w-lg mx-auto leading-relaxed">
            Server baru Clozhi SMP sedang dalam pembangunan. Bersiaplah untuk pengalaman Minecraft yang belum pernah ada sebelumnya.
          </motion.p>

          {/* Countdown */}
          {!time.done ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-3 md:gap-6 mb-16">
              <CountdownBlock value={time.days}    label="Days" />
              <span className="text-3xl text-yellow-400/50 font-black mb-6">:</span>
              <CountdownBlock value={time.hours}   label="Hours" />
              <span className="text-3xl text-yellow-400/50 font-black mb-6">:</span>
              <CountdownBlock value={time.minutes} label="Min" />
              <span className="text-3xl text-yellow-400/50 font-black mb-6">:</span>
              <CountdownBlock value={time.seconds} label="Sec" />
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-4xl font-black text-yellow-400 mb-16"
              style={{ fontFamily: 'var(--font-display)' }}>
              🎉 WE ARE LIVE!
            </motion.div>
          )}

          {/* Email notify */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            className="mb-8">
            {!submitted ? (
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="Email kamu untuk notifikasi launch..."
                  className="flex-1 px-4 py-3 rounded text-sm text-white placeholder-white/30 outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(245,197,24,0.2)' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(245,197,24,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(245,197,24,0.2)')}
                />
                <GlowButton variant="gold" onClick={handleNotify}>Notify Me</GlowButton>
              </div>
            ) : (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="text-green-400 text-sm">
                ✅ Kamu akan dapat notifikasi saat launch!
              </motion.div>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="flex gap-4 justify-center">
            <GlowButton href={DISCORD_URL} variant="outline">💬 Join Discord</GlowButton>
          </motion.div>
        </div>
      </div>

      {/* ── TEASER FEATURES ── */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
              What to <span style={{ color: '#F5C518' }}>Expect</span>
            </h2>
            <p className="text-white/40 mt-2">Sneak peek fitur server baru — lebih banyak akan diungkapkan nanti</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {TEASER_FEATURES.map((f, i) => (
            <ScrollReveal key={f.label} delay={i * 0.07}>
              <Card3D glowColor="#F5C518" className="p-5 text-center group" intensity={12}>
                {/* Blurred/censored hint */}
                <div className="relative">
                  <div className="text-4xl mb-3 transition-all duration-500 group-hover:scale-110"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(245,197,24,0.5))' }}>
                    {f.icon}
                  </div>
                  <p className="text-white font-bold text-sm mb-1">{f.label}</p>
                  <p className="text-xs tracking-widest"
                    style={{
                      color: 'transparent',
                      textShadow: '0 0 8px rgba(245,197,24,0.6)',
                      userSelect: 'none',
                    }}>
                    {f.hint}
                  </p>
                  {/* Lock icon */}
                  <div className="absolute top-0 right-0 text-xs text-yellow-400/40">🔒</div>
                </div>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="text-center mt-8 text-white/20 text-sm">
            🔮 More details akan dirilis mendekati tanggal launch. Stay tuned!
          </p>
        </ScrollReveal>
      </section>

      {/* ── PROGRESS BAR ── */}
      <section className="max-w-3xl mx-auto px-6 pb-32">
        <ScrollReveal>
          <div
            className="rounded-2xl p-8"
            style={{ background: 'rgba(245,197,24,0.05)', border: '1px solid rgba(245,197,24,0.15)' }}>
            <h3 className="text-xl font-black text-white mb-6 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Development <span style={{ color: '#F5C518' }}>Progress</span>
            </h3>
            {[
              { label: 'Map Building',     pct: 85 },
              { label: 'Plugin Dev',       pct: 70 },
              { label: 'Economy System',   pct: 60 },
              { label: 'Beta Testing',     pct: 30 },
              { label: 'Server Launch',    pct: 5  },
            ].map((item, i) => (
              <div key={item.label} className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/60">{item.label}</span>
                  <span style={{ color: '#F5C518' }}>{item.pct}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                    style={{ background: `linear-gradient(90deg, #F5C518, #22d3ee)`, boxShadow: '0 0 8px rgba(245,197,24,0.5)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
