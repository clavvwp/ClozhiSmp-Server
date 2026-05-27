// ============================================
// HALAMAN SEASON 1 — src/app/season-1/page.tsx
// Semua info tentang Season 1 Clozhi SMP
// ============================================

'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card3D from '@/components/ui/Card3D';

// ============================================
// ✏️ EDIT DATA SEASON 1 DI SINI
// ============================================

const SEASON_INFO = {
  number: 1,
  title: 'The Beginning',
  tagline: 'Di sinilah segalanya dimulai.',
  startDate: 'Januari 2023',
  endDate: 'Desember 2023',
  totalDays: 365,
  totalPlayers: 247,
  status: 'ENDED',
  accentColor: '#22d3ee',
};

const HIGHLIGHTS = [
  { icon: '🏆', title: 'Perang Klan Pertama', desc: 'Klan Nether vs Klan Overworld — pertempuran 3 hari yang melegenda.' },
  { icon: '🏙️', title: 'Kota Terbesar', desc: 'Kota "Clozhi City" dibangun oleh 30 pemain selama 2 minggu.' },
  { icon: '💰', title: 'Ekonomi Lahir', desc: 'Market pertama dibuka. Total transaksi: 50,000+ item.' },
  { icon: '🌋', title: 'Event Nether Gate', desc: 'Boss fight pertama server — 60 pemain melawan Wither raksasa.' },
  { icon: '🤝', title: 'Alliance Besar', desc: '5 klan bersatu untuk pertama kalinya dalam sejarah server.' },
  { icon: '🎉', title: 'Festival Panen', desc: 'Event community terbesar — 80+ pemain online bersamaan.' },
];

const TOP_PLAYERS = [
  { rank: 1, name: 'PlayerLegend', achievement: 'Richest Player', icon: '💰', detail: '1,000,000 coins' },
  { rank: 2, name: 'WarriorX',    achievement: 'Most Kills',     icon: '⚔️', detail: '2,847 kills' },
  { rank: 3, name: 'ArchitectZ',  achievement: 'Best Builder',   icon: '🏗️', detail: 'Voted by community' },
  { rank: 4, name: 'MinerKing',   achievement: 'Most Mined',     icon: '⛏️', detail: '500k blocks' },
  { rank: 5, name: 'ExplorerS',   achievement: 'First to End',   icon: '🌟', detail: 'Solo speedrun' },
];

const SCREENSHOTS: string[] = [
  // Tambahkan path screenshot di sini
  // Contoh: '/screenshots/s1-spawn.jpg'
];

const PLACEHOLDER_GRADS = [
  'linear-gradient(135deg, #0a1628, #1e3a5f)',
  'linear-gradient(135deg, #1a0a2e, #2d1a4e)',
  'linear-gradient(135deg, #0a1a10, #1a3a20)',
  'linear-gradient(135deg, #1a1a0a, #3a2a0a)',
  'linear-gradient(135deg, #1a0a0a, #3a1010)',
  'linear-gradient(135deg, #0a1a1a, #0a3a3a)',
];

export default function Season1Page() {
  const { accentColor } = SEASON_INFO;

  return (
    <PageLayout accentColor={accentColor}>
      {/* Hero */}
      <PageHero
        badge={`Season ${SEASON_INFO.number} · ${SEASON_INFO.status}`}
        title={
          <>
            Season <span style={{ background: `linear-gradient(135deg,${accentColor},#a855f7)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>One</span>
          </>
        }
        subtitle={`"${SEASON_INFO.tagline}" — ${SEASON_INFO.startDate} hingga ${SEASON_INFO.endDate}`}
        accentColor={accentColor}
      />

      {/* Stats bar */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Durasi', value: `${SEASON_INFO.totalDays} Hari` },
              { label: 'Total Pemain', value: `${SEASON_INFO.totalPlayers}+` },
              { label: 'Mulai', value: SEASON_INFO.startDate },
              { label: 'Status', value: SEASON_INFO.status },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <Card3D glowColor={accentColor} className="p-5 text-center">
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-2">{stat.label}</p>
                  <p className="text-xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
                    {stat.value}
                  </p>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Highlights */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <h2 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Season <span style={{ color: accentColor }}>Highlights</span>
          </h2>
          <p className="text-white/40 mb-10">Momen-momen paling berkesan di Season 1</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((h, i) => (
            <ScrollReveal key={h.title} delay={i * 0.07}>
              <Card3D glowColor={accentColor} className="p-5 h-full" intensity={10}>
                <div className="text-3xl mb-3" style={{ filter: `drop-shadow(0 0 8px ${accentColor})` }}>{h.icon}</div>
                <h3 className="text-sm font-bold text-white mb-2">{h.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{h.desc}</p>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <h2 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Hall of <span style={{ color: '#fbbf24' }}>Fame</span>
          </h2>
          <p className="text-white/40 mb-10">Player terbaik Season 1</p>
        </ScrollReveal>

        <div className="space-y-3">
          {TOP_PLAYERS.map((p, i) => (
            <ScrollReveal key={p.rank} delay={i * 0.08}>
              <motion.div
                className="flex items-center gap-4 rounded-xl p-4"
                style={{
                  background: p.rank === 1
                    ? 'linear-gradient(135deg, rgba(251,191,36,0.12), rgba(251,191,36,0.03))'
                    : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${p.rank === 1 ? 'rgba(251,191,36,0.3)' : 'rgba(255,255,255,0.06)'}`,
                }}
                whileHover={{ scale: 1.01, x: 4 }}
              >
                {/* Rank */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{
                    background: p.rank <= 3 ? 'rgba(251,191,36,0.15)' : 'rgba(255,255,255,0.05)',
                    color: p.rank <= 3 ? '#fbbf24' : 'rgba(255,255,255,0.4)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  #{p.rank}
                </div>

                <div className="text-2xl">{p.icon}</div>

                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{p.name}</p>
                  <p className="text-white/40 text-xs">{p.achievement}</p>
                </div>

                <div className="text-right">
                  <p className="text-xs font-mono" style={{ color: p.rank === 1 ? '#fbbf24' : accentColor }}>
                    {p.detail}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Screenshot gallery */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <ScrollReveal>
          <h2 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Season 1 <span style={{ color: accentColor }}>Gallery</span>
          </h2>
          <p className="text-white/40 mb-10">Dokumentasi visual Season 1</p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {(SCREENSHOTS.length > 0 ? SCREENSHOTS : Array(6).fill('')).map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <motion.div
                className="rounded-xl overflow-hidden aspect-video cursor-pointer group"
                whileHover={{ scale: 1.03, zIndex: 10 }}
              >
                {src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={src} alt={`Season 1 screenshot ${i + 1}`} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4"
                    style={{ background: PLACEHOLDER_GRADS[i % PLACEHOLDER_GRADS.length], border: `1px solid ${accentColor}15` }}>
                    <span className="text-3xl mb-2 opacity-30">📸</span>
                    <p className="text-white/20 text-xs">Screenshot {i + 1}</p>
                    <p className="text-white/10 text-xs">Season 1</p>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-center mt-6 text-white/20 text-xs">
          💡 Tambah screenshot di array <code className="text-cyan-400/50">SCREENSHOTS</code> dalam file ini
        </p>
      </section>
    </PageLayout>
  );
}
