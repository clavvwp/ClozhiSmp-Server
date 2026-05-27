// CUSTOM CURSOR — Gold + cyan glow cursor
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos]         = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over  = (e: MouseEvent) => setHovering(!!(e.target as HTMLElement).closest('a,button,[role="button"]'));
    const out   = () => setHovering(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseout', out);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); window.removeEventListener('mouseout', out); };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{ x: pos.x - 18, y: pos.y - 18, scale: hovering ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 160, damping: 20 }}>
        <div className="w-9 h-9 rounded-full border"
          style={{
            borderColor: hovering ? 'rgba(245,197,24,0.7)' : 'rgba(34,211,238,0.4)',
            boxShadow: hovering ? '0 0 12px rgba(245,197,24,0.5)' : '0 0 8px rgba(34,211,238,0.3)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }} />
      </motion.div>
      {/* Inner dot */}
      <motion.div className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}>
        <div className="w-1.5 h-1.5 rounded-full"
          style={{ background: hovering ? '#F5C518' : '#22d3ee', boxShadow: hovering ? '0 0 8px #F5C518' : '0 0 8px #22d3ee' }} />
      </motion.div>
    </>
  );
}
