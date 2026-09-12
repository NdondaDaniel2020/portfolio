import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import projectsDataRaw from '../../data/projects.json';
import type { Project } from '../../types';
import { ExternalLink, ArrowRight, Star, GitFork } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const projects = (projectsDataRaw as Project[]).filter(p => p.featured);

  return (
    <section className="pt-8 space-y-10" id="projetos">
      {/* Header da Seção */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
            {t.projects.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
            {t.projects.title}
          </h2>
        </div>

        <a
          href="/projetos"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-emerald-300 transition-colors group whitespace-nowrap"
        >
          <span>{t.projects.view_all}</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 p-6 flex flex-col justify-between group glow-teal-sm/0 hover:shadow-xl hover:shadow-brand-teal/5"
          >
            <div className="space-y-4">
              {/* Top Bar do Card */}
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase bg-brand-surface border border-brand-border text-brand-teal">
                  {project.language}
                </span>

                <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
                  {project.stars !== undefined && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                      {project.stars}
                    </span>
                  )}
                  {project.forks !== undefined && (
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" />
                      {project.forks}
                    </span>
                  )}
                </div>
              </div>

              {/* Título & Descrição */}
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-brand-teal transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                  {project.description[language]}
                </p>
              </div>

              {/* Tags de Tecnologias */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-brand-surface/80 text-slate-300 border border-brand-border/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links de Ação */}
            <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-brand-teal transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{t.projects.view_github}</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-teal hover:underline"
                >
                  <span>{t.projects.view_live}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
