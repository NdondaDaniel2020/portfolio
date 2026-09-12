import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ArticlesSection } from '../components/sections/ArticlesSection';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 space-y-32">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ArticlesSection />
      <ContactSection />
    </main>
  );
};
