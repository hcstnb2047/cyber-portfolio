'use client';

import React from 'react';

interface GlowTextProps {
  children: React.ReactNode;
  color?: 'primary' | 'accent' | 'special';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export const GlowText: React.FC<GlowTextProps> = ({ 
  children, 
  color = 'primary', 
  intensity = 'medium',
  className = '' 
}) => {
  const glowClasses = {
    primary: {
      low: 'text-primary-blue drop-shadow-[0_0_5px_#0080FF40]',
      medium: 'text-primary-blue drop-shadow-[0_0_10px_#0080FF80]',
      high: 'text-primary-blue drop-shadow-[0_0_20px_#0080FFCC]'
    },
    accent: {
      low: 'text-accent-cyan drop-shadow-[0_0_8px_#00FFFF40]',
      medium: 'text-accent-cyan drop-shadow-[0_0_15px_#00FFFF80]',
      high: 'text-accent-cyan drop-shadow-[0_0_25px_#00FFFFCC]'
    },
    special: {
      low: 'text-special-purple drop-shadow-[0_0_10px_#9D00FF40]',
      medium: 'text-special-purple drop-shadow-[0_0_20px_#9D00FF80]',
      high: 'text-special-purple drop-shadow-[0_0_30px_#9D00FFCC]'
    }
  };
  
  return (
    <span className={`${glowClasses[color][intensity]} ${className} transition-all duration-300`}>
      {children}
    </span>
  );
};