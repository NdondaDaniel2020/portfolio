import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { skillsData } from '../../data/skills';

export const SkillsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="pt-8 space-y-10" id="skills">
      <div>
        <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
          {t.skills.tag}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
          {t.skills.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-brand-card border border-brand-border p-6 space-y-4 hover:border-brand-teal/30 transition-all duration-300"
          >
            <h3 className="text-base font-bold text-white pb-3 border-b border-brand-border/60">
              {category.title[language]}
            </h3>

            <div className="space-y-3">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
