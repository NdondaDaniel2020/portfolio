import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Project } from '../../types';
import projectsData from '../../data/projects.json';
import { ExternalLink, Terminal, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'systems' | 'backend' | 'web'>('all');

  const projects = projectsData as Project[];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projetos" className="py-24 border-t border-brand-border/40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-teal">
              {t.projects.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Filtros de Categoria */}
          <div className="flex items-center gap-2 bg-brand-surface p-1.5 rounded-xl border border-brand-border text-xs font-mono self-start md:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-brand-teal text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects.filterAll}
            </button>
            <button
              type="button"
              onClick={() => setFilter('systems')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'systems'
                  ? 'bg-brand-teal text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects.filterSystems}
            </button>
            <button
              type="button"
              onClick={() => setFilter('backend')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'backend'
                  ? 'bg-brand-teal text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects.filterBackend}
            </button>
            <button
              type="button"
              onClick={() => setFilter('web')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'web'
                  ? 'bg-brand-teal text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects.filterWeb}
            </button>
          </div>
        </div>

        {/* Grade de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const desc = typeof project.description === 'object' ? project.description[language] : project.description;

            return (
              <div
                key={project.id}
                className="rounded-2xl border border-brand-border bg-brand-card p-6 flex flex-col justify-between hover:border-brand-teal/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Topo do Card: Ícone e Categoria */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-teal group-hover:scale-105 transition-transform">
                      {project.visualType === 'terminal' ? (
                        <Terminal className="w-5 h-5" />
                      ) : (
                        <Code2 className="w-5 h-5" />
                      )}
                    </div>

                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 bg-brand-surface px-2.5 py-1 rounded-md border border-brand-border/60">
                      {project.language || project.category}
                    </span>
                  </div>

                  {/* Nome e Descrição */}
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-teal transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {desc}
                  </p>

                  {/* Badges de Tecnologias */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ações do Card */}
                <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-brand-teal transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    {t.projects.viewCode}
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-teal hover:underline"
                    >
                      <span>{t.projects.viewLive}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Link para Todos os Projetos */}
        <div className="pt-4 flex justify-center">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-border bg-brand-surface hover:border-brand-teal hover:text-brand-teal text-slate-300 font-semibold transition-all group"
          >
            <span>{t.projects.viewAll}</span>
            <ArrowUpRight className="w-4 h-4 text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
