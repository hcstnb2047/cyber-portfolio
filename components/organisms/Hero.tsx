'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const TypingEffect: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (startTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setTimeout(() => setShowCursor(false), 1000);
    }
  }, [currentIndex, text, startTyping]);

  return (
    <span className="inline-block">
      {displayText}
      {showCursor && <span className="animate-pulse opacity-70">|</span>}
    </span>
  );
};

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-transparent" />
      
      <motion.div
        className="container relative z-10 px-4 flex-1 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-center">
              <span className="block text-2xl md:text-3xl font-normal text-text-secondary mb-6">
                <TypingEffect text="Hello, I'm" />
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                <TypingEffect text="Your Name" delay={500} />
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-xl md:text-2xl lg:text-3xl text-text-secondary mb-16 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Full Stack Developer crafting exceptional digital experiences with modern technologies
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#about"
              className="btn btn-primary text-lg px-10 py-5"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="btn btn-secondary text-lg px-10 py-5"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-8 mt-auto pb-48"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="social-link"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
};