'use client';

import React from 'react';
import { Code, Palette, Rocket, Users, Calendar, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient code that scales with business needs.',
    },
    {
      icon: Palette,
      title: 'Design Systems',
      description: 'Creating consistent, accessible interfaces that users love.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency across all platforms.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working seamlessly with teams to deliver exceptional results.',
    },
  ];

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading frontend development for complex web applications using React and TypeScript.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      period: '2020 - 2022',
      description: 'Built scalable web applications from scratch using modern technologies.',
    },
    {
      title: 'Junior Developer',
      company: 'Dev Agency',
      period: '2019 - 2020',
      description: 'Developed responsive websites and learned best practices in web development.',
    },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="mb-12">
          <h2 className="mb-4">About Me</h2>
          <p className="text-secondary leading-relaxed max-w-3xl">
            I{String.fromCharCode(39)}m a passionate full-stack developer with over 3 years of experience building 
            modern web applications. I love creating digital experiences that make a difference 
            in people{String.fromCharCode(39)}s lives, combining technical expertise with thoughtful design.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-16">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="card-minimal">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-bg-secondary rounded-md flex items-center justify-center mt-1">
                  <highlight.icon className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-secondary leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="font-semibold mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.title} className="border-l-2 border-border-light pl-6 relative">
                <div className="absolute w-2 h-2 bg-accent rounded-full -left-1 top-2"></div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">{job.title}</h4>
                    <p className="text-secondary text-sm">{job.company}</p>
                  </div>
                  <span className="text-xs text-tertiary bg-bg-secondary px-2 py-1 rounded-md">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-secondary leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-4">Personal Info</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-secondary">Location:</span>
              <span>Tokyo, Japan</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-secondary" />
              <span className="text-secondary">Available:</span>
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};