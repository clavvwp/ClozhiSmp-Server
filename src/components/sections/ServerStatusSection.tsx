// ============================================
// SERVER STATUS SECTION (src/components/sections/ServerStatusSection.tsx)
// Shows server online/offline status and player count.
// Uses the mcsrvstat.us API to fetch real server data.
// ============================================

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';

// ── CONFIG — change this to your real server IP ──
const SERVER_IP = 'play.clozhismp.net';

// ── What the API response looks like ──
interface ServerStatus {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  version?: string;
  motd?: { clean?: string[] };
}

// ── Individual stat card ──
function StatCard({ label, value, sublabel }: { label: string; value: string; sublabel?: string }) {
  return (
    <div className="glass-card rounded-xl p-6 text-center">
      <p className="text-white/40 text-xs tracking-widest uppercase mb-2">{label}</p>
      <p
        className="text-3xl font-black text-white"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {value}
      </p>
      {sublabel && <p className="text-white/30 text-xs mt-1">{sublabel}</p>}
    </div>
  );
}

export default function ServerStatusSection() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch server status from free public API
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`);
        const data = await res.json();
        setStatus(data);
      } catch {
        // If fetch fails, show as offline
        setStatus({ online: false });
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    // Refresh every 60 seconds
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const isOnline = status?.online ?? false;
  const playerCount = status?.players?.online ?? 0;
  const maxPlayers = status?.players?.max ?? 100;
  const playerPercent = maxPlayers > 0 ? (playerCount / maxPlayers) * 100 : 0;

  return (
    <section id="status" className="py-32 px-6 relative">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">Live Data</p>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Server{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Status
              </span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Main status card */}
        <ScrollReveal delay={0.1}>
          <div
            className="glass-card rounded-2xl p-8 mb-6"
            style={{
              borderColor: isOnline ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)',
              boxShadow: isOnline
                ? '0 0 40px rgba(34,197,94,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
                : '0 0 40px rgba(239,68,68,0.1), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Status indicator row */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                {/* Pulsing dot */}
                <div className="relative">
                  <div
                    className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}
                  />
                  {isOnline && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-green-400"
                      animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <span
                  className={`text-sm font-semibold tracking-widest uppercase ${
                    isOnline ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {loading ? 'Checking...' : isOnline ? 'Online' : 'Offline'}
                </span>
              </div>

              {/* Server IP badge */}
              <span className="text-white/30 text-xs font-mono">{SERVER_IP}</span>
            </div>

            {/* Player count bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-white/40 mb-2">
                <span>Players Online</span>
                <span>{playerCount} / {maxPlayers}</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${playerPercent}%` }}
                  transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                  style={{
                    background: 'linear-gradient(90deg, #a855f7, #22d3ee)',
                    boxShadow: '0 0 10px rgba(168,85,247,0.6)',
                  }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stat cards row */}
        <div className="grid grid-cols-3 gap-4">
          <ScrollReveal delay={0.2}>
            <StatCard
              label="Players"
              value={loading ? '—' : String(playerCount)}
              sublabel="currently online"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <StatCard
              label="Max Slots"
              value={loading ? '—' : String(maxPlayers)}
              sublabel="max capacity"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <StatCard
              label="Status"
              value={loading ? '...' : isOnline ? '✓ UP' : '✗ DOWN'}
              sublabel="live check"
            />
          </ScrollReveal>
        </div>

        {/* Copy IP button */}
        <ScrollReveal delay={0.5}>
          <div className="text-center mt-8">
            <button
              onClick={() => navigator.clipboard.writeText(SERVER_IP)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(168,85,247,0.1)',
                border: '1px solid rgba(168,85,247,0.3)',
                color: '#c084fc',
                boxShadow: '0 0 20px rgba(168,85,247,0.15)',
              }}
            >
              📋 {SERVER_IP} — Click to Copy
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
