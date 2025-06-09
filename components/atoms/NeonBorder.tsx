'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NeonBorderProps {
  children: React.ReactNode;
  color?: 'primary' | 'accent' | 'special';
  animate?: boolean;
  className?: string;
}

export const NeonBorder: React.FC<NeonBorderProps> = ({
  children,
  color = 'primary',
  animate = true,
  className = '',
}) => {
  const colorClasses = {
    primary: 'border-primary-blue shadow-[0_0_10px_#0080FF,inset_0_0_10px_rgba(0,128,255,0.2)]',
    accent: 'border-accent-cyan shadow-[0_0_15px_#00FFFF,inset_0_0_15px_rgba(0,255,255,0.2)]',
    special: 'border-special-purple shadow-[0_0_20px_#9D00FF,inset_0_0_20px_rgba(157,0,255,0.2)]',
  };

  const borderVariants = {
    initial: { opacity: 0.8 },
    animate: {
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`relative p-[1px] ${className}`}
      initial="initial"
      animate={animate ? "animate" : "initial"}
      variants={borderVariants}
    >
      <div className={`relative border ${colorClasses[color]} bg-bg-charcoal h-full w-full`}>
        {children}
      </div>
    </motion.div>
  );
};