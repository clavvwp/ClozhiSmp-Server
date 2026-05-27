// ============================================
// GLOW BUTTON (src/components/ui/GlowButton.tsx)
// Reusable button with neon glow effect.
//
// Usage:
//   <GlowButton href="https://discord.gg/..." variant="outline">
//     Join Discord
//   </GlowButton>
// ============================================

'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: GlowButtonProps) {
  // Style variants — easy to customize
  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
      border: 'none',
      color: '#ffffff',
      boxShadow: '0 0 30px rgba(168,85,247,0.5), 0 0 60px rgba(168,85,247,0.2)',
    },
    outline: {
      background: 'transparent',
      border: '1px solid rgba(168,85,247,0.5)',
      color: '#c084fc',
      boxShadow: '0 0 20px rgba(168,85,247,0.2)',
    },
    cyan: {
      background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
      border: 'none',
      color: '#000000',
      boxShadow: '0 0 30px rgba(34,211,238,0.5)',
    },
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  const style = variantStyles[variant];

  const buttonContent = (
    <motion.span
      className={`inline-flex items-center gap-2 rounded font-semibold tracking-widest uppercase transition-all ${sizeStyles[size]} ${className}`}
      style={style}
      whileHover={{
        scale: 1.05,
        boxShadow: variant === 'primary'
          ? '0 0 50px rgba(168,85,247,0.7), 0 0 100px rgba(168,85,247,0.3)'
          : '0 0 40px rgba(168,85,247,0.4)',
      }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}
