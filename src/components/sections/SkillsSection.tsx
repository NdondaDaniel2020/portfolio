import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { skillCategories } from '../../data/skills';
import { Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-24 border-t border-brand-border/40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Cabeçalho da Seção */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-teal">
            {t.skills.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.skills.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Grade de Categorias de Habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-brand-border bg-brand-card p-6 space-y-6 hover:border-brand-teal/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-surface border border-brand-border text-brand-teal">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {cat.title[language]}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {cat.description[language]}
                  </p>
                </div>
              </div>

              {/* Lista de Habilidades */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-brand-surface border border-brand-border/70 flex items-center justify-between"
                  >
                    <span className="font-medium text-slate-200 text-sm">{skill.name}</span>
                    <span className="font-mono text-[11px] text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded border border-brand-teal/20">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
