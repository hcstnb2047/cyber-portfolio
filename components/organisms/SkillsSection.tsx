'use client';

import React from 'react';

const skillCategories = [
  {
    title: 'Frontend Technologies',
    skills: [
      'React & Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Redux Toolkit',
      'HTML5 & CSS3'
    ]
  },
  {
    title: 'Backend Technologies',
    skills: [
      'Node.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'GraphQL',
      'REST APIs'
    ]
  },
  {
    title: 'Tools & Infrastructure',
    skills: [
      'Git & GitHub',
      'Docker',
      'AWS',
      'Vercel',
      'VS Code',
      'Figma'
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      'Problem Solving',
      'Team Collaboration',
      'Project Management',
      'Communication',
      'Mentoring',
      'Code Review'
    ]
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="mb-12">
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-secondary leading-relaxed max-w-2xl">
            A comprehensive toolkit built through hands-on experience and continuous learning 
            in modern development technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <h3 className="font-semibold mb-4 text-accent">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="list-item">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card text-center">
          <h3 className="font-semibold mb-3">Always Learning</h3>
          <p className="text-secondary text-sm">
            Currently exploring: AI/ML integration, Web3 technologies, and Advanced React patterns
          </p>
        </div>
      </div>
    </section>
  );
};