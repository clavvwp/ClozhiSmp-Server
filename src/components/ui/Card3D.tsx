// ============================================
// CARD 3D — Kartu dengan efek tilt 3D saat hover
// Pakai ini untuk membungkus konten apapun
//
// Contoh:
//   <Card3D glowColor="#a855f7">
//     <p>Konten kamu</p>
//   </Card3D>
// ============================================

'use client';

import { useState, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  children: ReactNode;
  glowColor?: string;
  className?: string;
  intensity?: number; // seberapa kuat tilt-nya (default 12)
}

export default function Card3D({
  children,
  glowColor = '#a855f7',
  className = '',
  intensity = 12,
}: Card3DProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rotX = ((e.clientY - cy) / (rect.height / 2)) * -intensity;
    const rotY = ((e.clientX - cx) / (rect.width / 2)) * intensity;
    setTilt({ x: rotX, y: rotY });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.03 : 1 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      style={{
        transformStyle: 'preserve-3d',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? glowColor + '40' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered
          ? `0 0 40px ${glowColor}25, 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)`
          : '0 4px 20px rgba(0,0,0,0.4)',
        backdropFilter: 'blur(12px)',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      className={`rounded-2xl ${className}`}
    >
      {/* Subtle shine layer on top */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: hovered
            ? `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 + tilt.x * 2}%, rgba(255,255,255,0.06) 0%, transparent 60%)`
            : 'none',
          transition: 'background 0.3s',
        }}
      />
      {children}
    </motion.div>
  );
}
