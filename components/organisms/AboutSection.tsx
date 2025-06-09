'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Code, Palette, Rocket, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { ref, isInView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient code that scales with your business needs.',
    },
    {
      icon: Palette,
      title: 'User Experience',
      description: 'Creating intuitive interfaces that users love to interact with.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency across all devices and platforms.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working seamlessly with teams to deliver exceptional results.',
    },
  ];

  return (
    <section id="about" className="section bg-bg-secondary">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="mb-6">About Me</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who loves crafting digital experiences that make a difference.
              With expertise spanning frontend to backend, I bring ideas to life through clean code and thoughtful design.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <div className="space-y-6">
                <p className="text-text-secondary leading-relaxed">
                  Started as a curious problem-solver, I've evolved into a full-stack developer
                  with a passion for creating meaningful digital experiences. My journey has
                  taken me through various technologies and methodologies.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I believe in the power of continuous learning and staying ahead of the curve.
                  Whether it's exploring new frameworks, optimizing performance, or enhancing
                  user experiences, I'm always pushing boundaries.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="card">
                <h4 className="font-semibold text-primary mb-2">Frontend Development</h4>
                <p className="text-sm text-text-secondary">
                  React, Next.js, TypeScript, Tailwind CSS - Creating responsive and
                  interactive user interfaces with modern web technologies.
                </p>
              </div>
              
              <div className="card">
                <h4 className="font-semibold text-primary mb-2">Backend Development</h4>
                <p className="text-sm text-text-secondary">
                  Node.js, Python, Go - Building scalable APIs and server-side
                  applications with clean architecture patterns.
                </p>
              </div>
              
              <div className="card">
                <h4 className="font-semibold text-primary mb-2">Cloud & DevOps</h4>
                <p className="text-sm text-text-secondary">
                  AWS, Docker, Kubernetes - Deploying and managing applications
                  with modern cloud infrastructure and CI/CD pipelines.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <blockquote className="text-xl italic text-text-secondary">
              "Great software is built not just with code, but with empathy for the people who use it."
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};