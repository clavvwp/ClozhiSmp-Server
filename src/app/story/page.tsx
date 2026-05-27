// ============================================
// HALAMAN STORY — src/app/story/page.tsx
// Cerita dan lore Clozhi SMP secara kronologis
// Edit array STORY_CHAPTERS untuk mengubah cerita
// ============================================

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card3D from '@/components/ui/Card3D';

// ============================================
// ✏️ EDIT CERITA / STORY DI SINI
// ============================================
const STORY_CHAPTERS = [
  {
    id: '01',
    date: '2023',
    title: 'Awal Mula',
    subtitle: 'The Beginning',
    icon: '🌱',
    color: '#22d3ee',
    content: `Semuanya dimulai dari sebuah mimpi sederhana. Clozhi, seorang pemuda yang besar dengan Minecraft, ingin menciptakan sebuah dunia di mana siapa pun bisa datang, bertahan, dan menciptakan kenangan bersama.

Dengan server pertama yang masih sederhana, hanya beberapa orang yang bergabung. Tapi dari sanalah benih Clozhi SMP mulai tumbuh.`,
  },
  {
    id: '02',
    date: 'Season 1 — Awal',
    title: 'Dunia Terbuka',
    subtitle: 'The Open World',
    icon: '🗺️',
    color: '#a855f7',
    content: `Season 1 resmi dibuka. Pemain dari berbagai daerah mulai bergabung, membangun kota-kota pertama mereka, menggali kekayaan dari bawah tanah, dan menjalin persahabatan yang tak terduga.

Ekonomi pertama server lahir. Pasar-pasar kecil mulai bermunculan di spawn area. Siapa yang paling kaya? Siapa yang paling kuat? Persaingan sehat pun dimulai.`,
  },
  {
    id: '03',
    date: 'Season 1 — Tengah',
    title: 'Perang & Damai',
    subtitle: 'War & Peace',
    icon: '⚔️',
    color: '#ef4444',
    content: `Tidak ada dunia yang tenang selamanya. Konflik pertama pecah antara dua klan besar yang memperebutkan wilayah paling subur di server.

Perang Klan pertama Clozhi SMP berlangsung selama tiga hari penuh. Aliansi terbentuk, pengkhianatan terjadi, dan pada akhirnya sebuah perjanjian damai historic ditandatangani di tengah spawn.`,
  },
  {
    id: '04',
    date: 'Season 1 — Akhir',
    title: 'Kejatuhan & Kebangkitan',
    subtitle: 'Fall & Rise',
    icon: '🌅',
    color: '#fbbf24',
    content: `Dunia Season 1 mulai menua. Sumber daya menipis, wilayah habis dijelajahi. Namun dari abu inilah lahir para legenda — pemain-pemain terbaik yang namanya dikenang hingga Season 2.

Server diakhiri dengan sebuah event epik: The Final War. Semua pemain berkumpul untuk satu pertarungan pamungkas.`,
  },
  {
    id: '05',
    date: 'Season 2 — Awal',
    title: 'Era Baru',
    subtitle: 'New Era',
    icon: '🔮',
    color: '#a855f7',
    content: `Season 2 hadir dengan wajah baru. Map yang lebih besar, sistem ekonomi yang lebih canggih, dan fitur-fitur baru yang belum pernah ada sebelumnya di Clozhi SMP.

Pemain lama kembali. Pemain baru membanjiri server. Dan dengan itu, babak baru dalam sejarah Clozhi SMP pun dimulai.`,
  },
  {
    id: '06',
    date: '2025 →',
    title: 'Masa Depan',
    subtitle: 'The Future',
    icon: '🚀',
    color: '#22d3ee',
    content: `Perjalanan Clozhi SMP belum berakhir. Sebuah server baru sedang dibangun — lebih besar, lebih ambisius, lebih epik dari sebelumnya.

Apa yang menanti di chapter selanjutnya? Hanya waktu yang akan menjawabnya. Satu hal yang pasti: komunitas Clozhi SMP akan terus bertumbuh bersama.`,
    isLast: true,
  },
];

// ── Milestone kecil di samping timeline ──
const MILESTONES = [
  { icon: '👥', value: '500+', label: 'Total Players' },
  { icon: '🏰', value: '2', label: 'Season Selesai' },
  { icon: '⚔️', value: '12+', label: 'Clan Wars' },
  { icon: '🎉', value: '50+', label: 'Events' },
];

export default function StoryPage() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  return (
    <PageLayout accentColor="#22d3ee">
      <PageHero
        badge="Lore & History"
        title={<>The Story of <span style={{ background: 'linear-gradient(135deg,#22d3ee,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CLOZHI SMP</span></>}
        subtitle="Setiap server punya cerita. Ini adalah perjalanan kami — dari nol hingga legenda."
        accentColor="#22d3ee"
      />

      {/* Milestone stats */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {MILESTONES.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.1}>
                <Card3D glowColor="#22d3ee" className="p-5 text-center">
                  <div className="text-3xl mb-2">{m.icon}</div>
                  <div className="text-2xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>{m.value}</div>
                  <div className="text-xs text-white/40 mt-1">{m.label}</div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 pb-32 relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, #22d3ee40, #a855f740, transparent)' }} />

        <div className="space-y-16">
          {STORY_CHAPTERS.map((chapter, i) => {
            const isLeft = i % 2 === 0;
            const isActive = activeChapter === i;

            return (
              <ScrollReveal key={chapter.id} delay={i * 0.06} direction={isLeft ? 'left' : 'right'}>
                <div className={`relative flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      animate={{ scale: isActive ? 1.4 : 1, boxShadow: isActive ? `0 0 20px ${chapter.color}` : `0 0 8px ${chapter.color}60` }}
                      className="w-4 h-4 rounded-full border-2 border-current"
                      style={{ background: chapter.color, borderColor: chapter.color }}
                    />
                  </div>

                  {/* Spacer for center alignment on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Chapter card */}
                  <motion.div
                    className="ml-12 md:ml-0 md:w-1/2 cursor-pointer"
                    onClick={() => setActiveChapter(isActive ? null : i)}
                  >
                    <Card3D glowColor={chapter.color} className="p-6" intensity={8}>
                      <div className="flex items-start gap-4">
                        <div className="text-3xl flex-shrink-0"
                          style={{ filter: `drop-shadow(0 0 8px ${chapter.color})` }}>
                          {chapter.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-mono" style={{ color: chapter.color }}>
                              Chapter {chapter.id}
                            </span>
                            <span className="text-white/20 text-xs">— {chapter.date}</span>
                          </div>
                          <h3 className="text-lg font-black text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                            {chapter.title}
                          </h3>
                          <p className="text-xs text-white/40 mb-3">{chapter.subtitle}</p>

                          {/* Expandable content */}
                          <motion.div
                            initial={false}
                            animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="text-sm text-white/60 leading-relaxed whitespace-pre-line pt-2 border-t border-white/5">
                              {chapter.content}
                            </div>
                          </motion.div>

                          {/* Expand hint */}
                          <motion.p
                            animate={{ opacity: isActive ? 0 : 1 }}
                            className="text-xs text-white/20 mt-2"
                          >
                            Klik untuk baca →
                          </motion.p>
                        </div>
                      </div>

                      {/* Last chapter: coming soon badge */}
                      {chapter.isLast && (
                        <div className="mt-4 flex justify-center">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold animate-pulse"
                            style={{ background: `${chapter.color}20`, color: chapter.color, border: `1px solid ${chapter.color}40` }}>
                            🔮 To Be Continued...
                          </span>
                        </div>
                      )}
                    </Card3D>
                  </motion.div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </PageLayout>
  );
}
