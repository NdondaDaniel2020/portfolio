import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    "Python",
    "PostgreSQL",
    "React",
    "FastAPI",
    "Redis",
    "TypeScript",
    "Django",
    "Docker",
    "JavaScript",
    "Flask",
    "Linux",
    "Tailwind CSS",
  ];

  return (
    <section className="space-y-10" data-purpose="tech-stack-section" id="skills">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
          {t.skills.tag}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Ferramentas que uso para construir.
        </h2>
      </div>

      {/* Skills Desktop Grid: 4 balanced columns idênticas ao original */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-200 cursor-default group"
          >
            <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
              {skill}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-brand-teal glow-teal-xs"></span>
          </div>
        ))}
      </div>
    </section>
  );
};
