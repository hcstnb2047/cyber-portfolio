export interface SkillData {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'infrastructure' | 'other';
  icon?: string;
}

export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface SocialLink {
  platform: 'github' | 'twitter' | 'linkedin' | 'email' | 'qiita';
  url: string;
  icon: string;
}