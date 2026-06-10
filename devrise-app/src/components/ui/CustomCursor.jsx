import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  // Only show on devices with a fine pointer (mouse). Hide on touch/mobile.
  const [isMouseDevice] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches
  );

  useEffect(() => {
    if (!isMouseDevice) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('magnetic')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMouseDevice]);

  // Don't render anything on touch devices
  if (!isMouseDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] flex items-center justify-center font-heading font-black text-[11px] text-white bg-gradient-to-br from-primary to-blue-600 shadow-[0_0_20px_rgba(108,99,255,0.6)] border border-white/20"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
      >
        360
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 border border-white/10 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
};
