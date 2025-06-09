import { Hero } from '@/components/organisms/Hero';
import { AboutSection } from '@/components/organisms/AboutSection';
import { SkillsSection } from '@/components/organisms/SkillsSection';
import { ArticlesSection } from '@/components/organisms/ArticlesSection';
import { ContactSection } from '@/components/organisms/ContactSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ArticlesSection />
      <ContactSection />
    </main>
  );
}