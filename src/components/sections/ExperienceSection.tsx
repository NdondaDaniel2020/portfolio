import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="space-y-6" data-purpose="experience-collaboration">
      {/* Section Header */}
      <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
        {t.experience.tag}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        Projetos, freelancing e colaboração.
      </h2>
      <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-4xl">
        Experiência construída através de projetos pessoais, trabalho freelance, hackathons e projetos colaborativos na 42. Atualmente aprofundando React + TypeScript e engenharia backend de alto débito.
      </p>

      {/* Availability Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-xs font-medium font-mono">
        <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse glow-teal-xs"></span>
        <span>Disponível para novos projetos &amp; contratos</span>
      </div>
    </section>
  );
};
