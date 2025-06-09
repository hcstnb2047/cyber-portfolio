'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
      'Framer Motion', 'Redux', 'HTML5', 'CSS3'
    ]
  },
  {
    title: 'Backend',
    skills: [
      'Node.js', 'Python', 'Go', 'PostgreSQL',
      'MongoDB', 'GraphQL', 'REST APIs', 'Express.js'
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'AWS', 'Docker', 'Kubernetes', 'CI/CD',
      'Terraform', 'Jenkins', 'GitHub Actions', 'Vercel'
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      'Git', 'VS Code', 'Figma', 'Jest',
      'Webpack', 'Vite', 'ESLint', 'Prettier'
    ]
  }
];

export const SkillsSection: React.FC = () => {
  const { ref, isInView } = useInView(0.2);

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="skills" className="section bg-bg-primary">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="mb-6">Technical Skills</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit built through years of hands-on experience
              and continuous learning in modern development technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-border-light">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="inline-block px-3 py-1.5 bg-bg-secondary text-sm rounded-full border border-border-light hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-bg-secondary rounded-full border border-border-light">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-text-secondary">
                Always learning and exploring new technologies
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};