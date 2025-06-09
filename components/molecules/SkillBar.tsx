'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SkillData } from '@/types/components';

interface SkillBarProps {
  skill: SkillData;
  delay?: number;
  isInView: boolean;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0, isInView }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay * 100);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [isInView, skill.level, delay]);

  const getColorClass = () => {
    switch (skill.category) {
      case 'frontend':
        return 'bg-primary-blue';
      case 'backend':
        return 'bg-accent-cyan';
      case 'infrastructure':
        return 'bg-special-purple';
      default:
        return 'bg-text-sub';
    }
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-text-cool font-medium">{skill.name}</h4>
        <span className="text-text-sub text-sm">{progress}%</span>
      </div>
      <div className="relative h-3 bg-bg-dark rounded-full overflow-hidden">
        <motion.div
          className={`absolute inset-y-0 left-0 ${getColorClass()} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: delay * 0.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20" />
        </motion.div>
        <div className="absolute inset-0 border border-bg-charcoal rounded-full" />
      </div>
    </div>
  );
};