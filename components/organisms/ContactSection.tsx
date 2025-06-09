'use client';

import React, { useState } from 'react';
import { Send, Mail, Github, Twitter } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/yourusername',
      color: 'text-primary'
    },
    {
      icon: Twitter,
      label: 'X',
      href: 'https://x.com/yourusername',
      color: 'text-accent'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:your.email@example.com',
      color: 'text-secondary'
    }
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="mb-12">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-secondary leading-relaxed max-w-2xl">
            Let{String.fromCharCode(39)}s discuss your next project or collaboration opportunity. 
            I{String.fromCharCode(39)}m always excited to work on interesting challenges.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary" />
                <div>
                  <div className="text-sm text-secondary">Email</div>
                  <a href="mailto:your.email@example.com" className="text-accent">
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card">
              <h4 className="font-medium mb-3">Quick Response</h4>
              <p className="text-sm text-secondary">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out on X.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border-light rounded-md bg-bg-primary text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border-light rounded-md bg-bg-primary text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border-light rounded-md bg-bg-primary text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-light text-center">
          <p className="text-secondary text-sm">
            © 2024 Your Name. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};