// ============================================
// CUSTOM CURSOR (src/components/ui/CustomCursor.tsx)
// Replaces the default browser cursor with a
// glowing purple dot that follows the mouse.
// ============================================

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  // Track where the mouse is
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // Track if hovering over something clickable
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Detect hover over links/buttons
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    // Cleanup listeners when component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Outer ring — follows with a slight delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      >
        <div
          className="w-10 h-10 rounded-full border border-purple-500/50"
          style={{ boxShadow: '0 0 10px rgba(168,85,247,0.4)' }}
        />
      </motion.div>

      {/* Inner dot — follows mouse exactly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <div
          className="w-2 h-2 rounded-full bg-purple-400"
          style={{ boxShadow: '0 0 8px rgba(168,85,247,1)' }}
        />
      </motion.div>
    </>
  );
}
