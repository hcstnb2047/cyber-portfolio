'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from '@/types/components';

const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/yourusername',
    icon: 'Github',
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'Twitter',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
  },
  {
    platform: 'email',
    url: 'mailto:your.email@example.com',
    icon: 'Mail',
  },
];

const IconComponent = {
  Github,
  Twitter,
  Linkedin,
  Mail,
};

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map((link, index) => {
        const Icon = IconComponent[link.icon as keyof typeof IconComponent];
        
        return (
          <motion.a
            key={link.platform}
            href={link.url}
            target={link.platform !== 'email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-4 bg-bg-dark rounded-lg border border-primary-blue transition-all duration-300 group-hover:bg-primary-blue group-hover:border-accent-cyan">
              <Icon className="w-6 h-6 text-primary-blue transition-colors duration-300 group-hover:text-bg-black" />
            </div>
            <div className="absolute inset-0 bg-primary-blue opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </motion.a>
        );
      })}
    </div>
  );
};