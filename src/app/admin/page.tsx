// ============================================
// HALAMAN ADMIN — src/app/admin/page.tsx
// Menampilkan semua admin Clozhi SMP
// Edit array ADMINS di bawah untuk mengubah data
// ============================================

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card3D from '@/components/ui/Card3D';

// ============================================
// ✏️ EDIT DATA ADMIN DI SINI
// skinUrl: kosongkan jika belum punya foto
// Untuk foto: taruh di /public/admins/namafile.jpg
// ============================================
const ADMINS = [
  {
    username: 'ClozhiOwner',
    displayName: 'Clozhi',
    role: 'Owner',
    roleColor: '#fbbf24',        // warna badge role
    skinUrl: '',                  // '/admins/clozhi.png'
    description: 'Pendiri dan Owner utama Clozhi SMP. Pemimpin yang membangun server dari nol.',
    socials: { discord: 'clozhi#0001', ig: '@clozhi' },
    joinDate: 'Founder',
    badge: '👑',
  },
  {
    username: 'AdminX',
    displayName: 'AdminX',
    role: 'Co-Owner',
    roleColor: '#a855f7',
    skinUrl: '',
    description: 'Co-Owner yang bertanggung jawab atas operasional server sehari-hari.',
    socials: { discord: 'adminx#0002', ig: '@adminx' },
    joinDate: 'Season 1',
    badge: '⭐',
  },
  {
    username: 'ModeratorA',
    displayName: 'Moderator A',
    role: 'Head Mod',
    roleColor: '#22d3ee',
    skinUrl: '',
    description: 'Head Moderator yang menjaga ketertiban dan kenyamanan server.',
    socials: { discord: 'moda#0003', ig: '' },
    joinDate: 'Season 1',
    badge: '🛡️',
  },
  {
    username: 'ModeratorB',
    displayName: 'Moderator B',
    role: 'Moderator',
    roleColor: '#34d399',
    skinUrl: '',
    description: 'Moderator aktif yang selalu siap membantu player baru maupun lama.',
    socials: { discord: 'modb#0004', ig: '' },
    joinDate: 'Season 2',
    badge: '🛡️',
  },
  {
    username: 'BuilderChief',
    displayName: 'Builder Chief',
    role: 'Head Builder',
    roleColor: '#f97316',
    skinUrl: '',
    description: 'Arsitek utama di balik semua bangunan epik yang ada di server.',
    socials: { discord: 'builder#0005', ig: '@builderchief' },
    joinDate: 'Season 1',
    badge: '🏗️',
  },
  {
    username: 'EventMaster',
    displayName: 'Event Master',
    role: 'Event Manager',
    roleColor: '#ec4899',
    skinUrl: '',
    description: 'Pengelola semua event seru di Clozhi SMP. Kalau ada event, dia yang bikin!',
    socials: { discord: 'event#0006', ig: '' },
    joinDate: 'Season 2',
    badge: '🎉',
  },
];

// ── Kartu admin individual ──
function AdminCard({ admin, index }: { admin: typeof ADMINS[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      {/* Flip card container */}
      <div
        className="relative cursor-pointer h-80"
        style={{ perspective: '1000px' }}
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%', position: 'relative' }}
        >
          {/* ── DEPAN kartu ── */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${admin.roleColor}30`,
              boxShadow: `0 0 30px ${admin.roleColor}15`,
            }}
          >
            {/* Top color bar */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${admin.roleColor}, transparent)` }} />

            <div className="p-6 flex flex-col items-center text-center h-full">
              {/* Avatar / Skin */}
              <div className="relative mb-4">
                {admin.skinUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={admin.skinUrl} alt={admin.displayName}
                    className="w-20 h-20 rounded-xl object-cover"
                    style={{ boxShadow: `0 0 20px ${admin.roleColor}40` }} />
                ) : (
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl"
                    style={{
                      background: `linear-gradient(135deg, ${admin.roleColor}20, ${admin.roleColor}05)`,
                      border: `1px solid ${admin.roleColor}30`,
                    }}
                  >
                    {admin.badge}
                  </div>
                )}
                {/* Glow ring around avatar */}
                <motion.div
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-1 rounded-xl pointer-events-none"
                  style={{ border: `1px solid ${admin.roleColor}40`, boxShadow: `0 0 15px ${admin.roleColor}30` }}
                />
              </div>

              {/* Name & role */}
              <h3 className="text-lg font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                {admin.displayName}
              </h3>
              <span
                className="mt-1 px-3 py-0.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ background: `${admin.roleColor}20`, color: admin.roleColor, border: `1px solid ${admin.roleColor}30` }}
              >
                {admin.role}
              </span>
              <p className="mt-3 text-white/40 text-xs line-clamp-2">{admin.description}</p>

              {/* Hint to flip */}
              <p className="mt-auto pt-3 text-white/20 text-xs">Klik untuk info →</p>
            </div>
          </div>

          {/* ── BELAKANG kartu ── */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: `linear-gradient(135deg, ${admin.roleColor}15, rgba(5,0,8,0.95))`,
              border: `1px solid ${admin.roleColor}40`,
              boxShadow: `0 0 40px ${admin.roleColor}20`,
            }}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{admin.badge}</span>
                <div>
                  <p className="font-bold text-white text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                    {admin.displayName}
                  </p>
                  <p className="text-xs" style={{ color: admin.roleColor }}>{admin.role}</p>
                </div>
              </div>

              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Username MC</p>
                  <p className="text-white font-mono text-sm">{admin.username}</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Bergabung</p>
                  <p className="text-white text-sm">{admin.joinDate}</p>
                </div>
                {admin.socials.discord && (
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Discord</p>
                    <p className="text-white text-sm font-mono">{admin.socials.discord}</p>
                  </div>
                )}
                {admin.socials.ig && (
                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Instagram</p>
                    <p className="text-white text-sm">{admin.socials.ig}</p>
                  </div>
                )}
                <p className="text-white/50 text-xs leading-relaxed">{admin.description}</p>
              </div>
              <p className="text-white/20 text-xs text-center mt-4">Klik untuk kembali</p>
            </div>
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

export default function AdminPage() {
  return (
    <PageLayout accentColor="#fbbf24">
      <PageHero
        badge="Tim Clozhi SMP"
        title={<>Meet The <span style={{ background: 'linear-gradient(135deg,#fbbf24,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Team</span></>}
        subtitle="Orang-orang di balik layar yang menjaga Clozhi SMP tetap berjalan. Klik kartu untuk info lebih!"
        accentColor="#fbbf24"
      />

      <section className="max-w-6xl mx-auto px-6 pb-32">
        {/* Role legend */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {Array.from(new Set(ADMINS.map(a => a.role))).map((role, i) => {
              const admin = ADMINS.find(a => a.role === role)!;
              return (
                <span key={role} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                  style={{ background: `${admin.roleColor}15`, color: admin.roleColor, border: `1px solid ${admin.roleColor}30` }}>
                  {admin.badge} {role}
                </span>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Admin grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADMINS.map((admin, i) => (
            <AdminCard key={admin.username} admin={admin} index={i} />
          ))}
        </div>

        {/* Edit note */}
        <ScrollReveal delay={0.3}>
          <p className="text-center mt-12 text-white/20 text-xs">
            💡 Edit array <code className="text-purple-400/60">ADMINS</code> di <code className="text-purple-400/60">src/app/admin/page.tsx</code> untuk mengubah data
          </p>
        </ScrollReveal>
      </section>
    </PageLayout>
  );
}
