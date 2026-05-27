// GLOW BUTTON — Reusable neon glow button
'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'cyan' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function GlowButton({ children, href, onClick, variant = 'primary', size = 'md', className = '' }: GlowButtonProps) {
  const variants = {
    primary: { background: 'linear-gradient(135deg,#a855f7,#7c3aed)', border: 'none', color: '#fff', boxShadow: '0 0 30px rgba(168,85,247,0.5)' },
    outline:  { background: 'transparent', border: '1px solid rgba(168,85,247,0.5)', color: '#c084fc', boxShadow: '0 0 20px rgba(168,85,247,0.15)' },
    cyan:     { background: 'linear-gradient(135deg,#22d3ee,#0891b2)', border: 'none', color: '#000', boxShadow: '0 0 30px rgba(34,211,238,0.5)' },
    gold:     { background: 'linear-gradient(135deg,#F5C518,#d4a017)', border: 'none', color: '#000', boxShadow: '0 0 30px rgba(245,197,24,0.55)' },
  };
  const sizes = { sm: 'px-4 py-2 text-xs', md: 'px-7 py-3 text-sm', lg: 'px-10 py-4 text-base' };

  const el = (
    <motion.span
      className={`inline-flex items-center gap-2 rounded font-bold tracking-widest uppercase ${sizes[size]} ${className}`}
      style={variants[variant]}
      whileHover={{ scale: 1.05, boxShadow: variant === 'gold' ? '0 0 50px rgba(245,197,24,0.8)' : '0 0 50px rgba(168,85,247,0.7)' }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) return <a href={href} target="_blank" rel="noopener noreferrer">{el}</a>;
  return <button onClick={onClick}>{el}</button>;
}
