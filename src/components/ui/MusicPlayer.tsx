// ============================================
// MUSIC PLAYER — src/components/ui/MusicPlayer.tsx
// Floating music player di pojok kanan bawah
// Backsound: "Sonata Moonlit"
//
// Cara pakai:
// 1. Taruh file audio di /public/audio/sonata-moonlit.mp3
// 2. Komponen ini akan otomatis putar musik di semua halaman
// ============================================

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TRACK = {
  title: 'Sonata Moonlit',
  artist: 'Clozhi SMP OST',
  // Ganti src ini dengan path file audio kamu
  // Taruh file di: /public/audio/sonata-moonlit.mp3
  src: '/audio/sonata-moonlit.mp3',
};

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying]   = useState(false);
  const [volume, setVolume]     = useState(0.4);
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded]     = useState(false);

  // Auto-play attempt after user first interaction
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop   = true;

    const handleCanPlay = () => setLoaded(true);
    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setDuration(audio.duration);
      }
    };

    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    // Try auto-play (browsers may block without interaction)
    const tryAutoPlay = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {
        // Autoplay blocked — user must click play
      });
      document.removeEventListener('click', tryAutoPlay);
    };
    document.addEventListener('click', tryAutoPlay);

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      document.removeEventListener('click', tryAutoPlay);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const currentTime = duration ? (progress / 100) * duration : 0;

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={TRACK.src} preload="auto" />

      {/* Floating player */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.6, ease: 'easeOut' }}
        className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-2"
      >
        {/* Expanded panel */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-4 w-64"
              style={{
                background: 'rgba(5,0,12,0.92)',
                border: '1px solid rgba(245,197,24,0.25)',
                boxShadow: '0 0 40px rgba(245,197,24,0.1), 0 20px 60px rgba(0,0,0,0.7)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Track info */}
              <div className="flex items-center gap-3 mb-3">
                {/* Animated disc */}
                <motion.div
                  animate={{ rotate: playing ? 360 : 0 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #F5C518, #22d3ee)',
                    boxShadow: playing ? '0 0 15px rgba(245,197,24,0.6)' : 'none',
                  }}
                >
                  <span className="text-black text-xs">🎵</span>
                </motion.div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{TRACK.title}</p>
                  <p className="text-white/40 text-xs truncate">{TRACK.artist}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-3">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-1">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #F5C518, #22d3ee)',
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex justify-between text-white/20 text-xs">
                  <span>{formatTime(currentTime)}</span>
                  <span>{duration ? formatTime(duration) : '--:--'}</span>
                </div>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-white/40 text-xs">🔈</span>
                <input
                  type="range" min={0} max={1} step={0.05} value={volume}
                  onChange={handleVolume}
                  className="flex-1 h-1 rounded-full appearance-none cursor-pointer"
                  style={{ accentColor: '#F5C518' }}
                />
                <span className="text-white/40 text-xs">🔊</span>
              </div>

              {/* Play/pause + loop info */}
              <div className="flex items-center justify-between">
                <span className="text-white/30 text-xs">🔁 Loop</span>
                <button
                  onClick={togglePlay}
                  className="px-5 py-1.5 rounded-full text-sm font-bold transition-all duration-200"
                  style={{
                    background: playing
                      ? 'rgba(245,197,24,0.15)'
                      : 'linear-gradient(135deg,#F5C518,#d4a017)',
                    border: `1px solid ${playing ? 'rgba(245,197,24,0.4)' : 'transparent'}`,
                    color: playing ? '#F5C518' : '#000',
                  }}
                >
                  {playing ? '⏸ Pause' : '▶ Play'}
                </button>
              </div>

              {!loaded && (
                <p className="text-center text-white/20 text-xs mt-2">
                  ⚠️ Tambah file audio di /public/audio/
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compact toggle button */}
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="relative w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(5,0,12,0.9)',
            border: `1px solid ${playing ? 'rgba(245,197,24,0.5)' : 'rgba(255,255,255,0.1)'}`,
            boxShadow: playing
              ? '0 0 20px rgba(245,197,24,0.4), 0 0 40px rgba(245,197,24,0.15)'
              : '0 4px 20px rgba(0,0,0,0.5)',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Sound wave animation when playing */}
          {playing && (
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-yellow-400/20"
                  animate={{ scale: [1, 1.5 + i * 0.3], opacity: [0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: 'easeOut' }}
                />
              ))}
            </div>
          )}
          <span className="text-lg relative z-10">{playing ? '🎵' : '🎶'}</span>
        </motion.button>
      </motion.div>
    </>
  );
}
