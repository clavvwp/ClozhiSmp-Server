// ============================================
// HALAMAN SEASON 2 — src/app/season-2/page.tsx
// Edit data di bawah sesuai Season 2 kamu
// ============================================
'use client';

import { motion } from 'framer-motion';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card3D from '@/components/ui/Card3D';

// ✏️ EDIT DI SINI
const SEASON = {
  number: 2,
  title: 'War of Clans',
  tagline: 'Perang bukan hanya soal kekuatan — ini soal strategi.',
  startDate: 'Januari 2024',
  endDate: 'Sekarang',
  totalDays: 365,
  totalPlayers: 412,
  status: 'ACTIVE',
  accentColor: '#a855f7',
};

const HIGHLIGHTS = [
  { icon: '🏰', title: 'Castle Siege System',   desc: 'Sistem siege baru — serang dan rebut kastil klan musuh.' },
  { icon: '🗡️', title: 'Ranked PvP',             desc: 'Ladder ranked pertama. Climb dari Bronze ke Legendary.' },
  { icon: '💎', title: 'Custom Enchants',        desc: '30+ custom enchantment eksklusif Season 2.' },
  { icon: '🌍', title: 'Map 2x Lebih Besar',     desc: 'Dunia Season 2 dua kali lebih luas dari Season 1.' },
  { icon: '📜', title: 'Quest System',           desc: 'Daily & weekly quests dengan reward eksklusif.' },
  { icon: '🤝', title: 'Diplomacy System',       desc: 'Alliance, neutral, atau perang — pilih jalan klan kamu.' },
];

const TOP_CLANS = [
  { rank: 1, name: 'Shadow Empire', members: 24, wins: 18, icon: '🏆', color: '#F5C518' },
  { rank: 2, name: 'Azure Guard',   members: 20, wins: 14, icon: '🥈', color: '#C8D6E5' },
  { rank: 3, name: 'Nether Lords',  members: 18, wins: 11, icon: '🥉', color: '#cd7f32' },
  { rank: 4, name: 'Storm Riders',  members: 15, wins: 9,  icon: '⚔️', color: '#a855f7' },
];

const TOP_PLAYERS = [
  { rank: 1, name: 'VoidSlayer',   stat: '4,291 kills',   role: 'PvP God' },
  { rank: 2, name: 'GoldMogul',    stat: '5M coins',      role: 'Economy King' },
  { rank: 3, name: 'ArchLord',     stat: 'MVP Season',    role: 'MVP' },
];

const SCREENSHOTS: string[] = [];
const GRAD = [
  'linear-gradient(135deg,#1a0a2e,#2d1a4e)',
  'linear-gradient(135deg,#0f172a,#1e3a5f)',
  'linear-gradient(135deg,#1a1028,#3d1060)',
  'linear-gradient(135deg,#0d1a0d,#1a3a1a)',
];

export default function Season2Page() {
  const ac = SEASON.accentColor;
  return (
    <PageLayout accentColor={ac}>
      <PageHero
        badge={`Season ${SEASON.number} · ${SEASON.status}`}
        title={<>Season <span style={{ background: `linear-gradient(135deg,${ac},#F5C518)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Two</span></>}
        subtitle={`"${SEASON.tagline}" — ${SEASON.startDate}`}
        accentColor={ac}
      />

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Pemain', value: `${SEASON.totalPlayers}+` },
            { label: 'Mulai',        value: SEASON.startDate },
            { label: 'Status',       value: '🟢 ACTIVE' },
            { label: 'Maps',         value: '2x Bigger' },
          ].map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <Card3D glowColor={ac} className="p-5 text-center">
                <p className="text-white/30 text-xs tracking-widest uppercase mb-2">{s.label}</p>
                <p className="text-xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{s.value}</p>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* What's New */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <h2 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            What&apos;s <span style={{ color: ac }}>New</span>
          </h2>
          <p className="text-white/40 mb-10">Fitur-fitur baru eksklusif Season 2</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((h, i) => (
            <ScrollReveal key={h.title} delay={i * 0.07}>
              <Card3D glowColor={ac} className="p-5 h-full" intensity={10}>
                <div className="text-3xl mb-3" style={{ filter: `drop-shadow(0 0 8px ${ac})` }}>{h.icon}</div>
                <h3 className="text-sm font-bold text-white mb-2">{h.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{h.desc}</p>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Clan Leaderboard */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <h2 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Clan <span style={{ color: '#F5C518' }}>Leaderboard</span>
          </h2>
          <p className="text-white/40 mb-10">Top klan Season 2</p>
        </ScrollReveal>
        <div className="space-y-3">
          {TOP_CLANS.map((clan, i) => (
            <ScrollReveal key={clan.name} delay={i * 0.07}>
              <motion.div
                className="flex items-center gap-4 rounded-xl p-4"
                whileHover={{ scale: 1.01, x: 4 }}
                style={{
                  background: clan.rank === 1 ? 'linear-gradient(135deg,rgba(245,197,24,0.1),rgba(245,197,24,0.03))' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${clan.rank === 1 ? 'rgba(245,197,24,0.25)' : 'rgba(255,255,255,0.06)'}`,
                }}>
                <span className="text-2xl">{clan.icon}</span>
                <div className="flex-1">
                  <p className="text-white font-bold text-sm">{clan.name}</p>
                  <p className="text-white/40 text-xs">{clan.members} members</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm" style={{ color: clan.color }}>{clan.wins} Wins</p>
                  <p className="text-white/30 text-xs">Clan Wars</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Top Players */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <h2 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Top <span style={{ color: ac }}>Players</span>
          </h2>
          <p className="text-white/40 mb-10">Season 2 Champions</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {TOP_PLAYERS.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.1}>
              <Card3D glowColor={i === 0 ? '#F5C518' : ac} className="p-6 text-center">
                <div className="text-4xl mb-3">{['👑','⭐','🏅'][i]}</div>
                <p className="font-black text-white text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>{p.name}</p>
                <p className="text-xs mb-2" style={{ color: i === 0 ? '#F5C518' : ac }}>{p.role}</p>
                <p className="text-white/40 text-xs font-mono">{p.stat}</p>
              </Card3D>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <ScrollReveal>
          <h2 className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Season 2 <span style={{ color: ac }}>Gallery</span>
          </h2>
          <p className="text-white/40 mb-10">Dokumentasi Season 2</p>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {(SCREENSHOTS.length > 0 ? SCREENSHOTS : Array(8).fill('')).map((src, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <motion.div className="rounded-xl overflow-hidden aspect-square" whileHover={{ scale: 1.05 }}>
                {src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={src} alt={`S2 screenshot ${i+1}`} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center"
                    style={{ background: GRAD[i % GRAD.length], border: `1px solid ${ac}15` }}>
                    <span className="text-2xl opacity-25 mb-1">📸</span>
                    <p className="text-white/15 text-xs">S2 · {i+1}</p>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        <p className="text-center mt-6 text-white/20 text-xs">
          💡 Tambah screenshot di array <code className="text-purple-400/50">SCREENSHOTS</code>
        </p>
      </section>
    </PageLayout>
  );
}
