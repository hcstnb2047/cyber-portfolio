'use client';

import React from 'react';
import { Github, Mail, MapPin, Twitter } from 'lucide-react';

export const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/yourusername', label: 'X' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="mb-4">Your Name</h1>
          <p className="text-secondary mb-6 text-lg">
            Full Stack Developer
          </p>
          <div className="flex items-center justify-center gap-2 text-secondary mb-8">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Tokyo, Japan</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-center text-secondary leading-relaxed">
            I&apos;m a passionate developer who loves crafting digital experiences. 
            I specialize in building modern web applications with React, Next.js, and TypeScript. 
            Always eager to learn new technologies and solve complex problems.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-16">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-secondary">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-secondary">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-secondary">Articles</div>
          </div>
        </div>
      </div>
    </section>
  );
};