import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import projectsDataRaw from '../../data/projects.json';
import type { Project } from '../../types';
import { ExternalLink, Star, FileText } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

export const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const featuredOrder = ['bidlive', 'antigravity-history-restorer', 'webserver'];
  const featuredProjects = (projectsDataRaw as Project[])
    .filter((p) => p.featured)
    .sort((a, b) => {
      const idxA = featuredOrder.indexOf(a.id.toLowerCase());
      const idxB = featuredOrder.indexOf(b.id.toLowerCase());
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return 0;
    })
    .slice(0, 3);

  return (
    <section className="space-y-10" data-purpose="featured-projects" id="projetos">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
          {t.projects.tag}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Trabalho que fala por si.
        </h2>
      </div>

      {/* Projects Desktop 3-column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 p-5 flex flex-col justify-between group glow-teal-sm/0 hover:shadow-xl hover:shadow-brand-teal/5"
            data-purpose="project-card"
          >
            <div className="space-y-3.5 min-w-0">
              {/* Cover Preview com dots indicator */}
              {project.coverImage ? (
                <div className="relative h-44 w-full rounded-xl overflow-hidden bg-[#070e14] border border-brand-border/70 group-hover:border-brand-teal/30 transition-all">
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  {project.hasDetails && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                    </div>
                  )}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-slate-950/80 backdrop-blur-md border border-white/10 text-brand-teal">
                    {project.language}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between pt-1">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase bg-brand-surface border border-brand-border text-brand-teal shrink-0">
                    {project.language}
                  </span>
                  {project.stars !== undefined && project.stars > 0 && (
                    <span className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                      {project.stars}
                    </span>
                  )}
                </div>
              )}

              {/* Title & Description */}
              <div className="min-w-0 pt-0.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-teal transition-colors truncate">
                    {project.name}
                  </h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brand-teal transition-colors shrink-0"
                      title={t.projects.view_live}
                      aria-label={`${t.projects.view_live} - ${project.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p
                  title={project.description[language]}
                  className="text-sm text-brand-muted mt-2 leading-relaxed line-clamp-3 overflow-hidden text-ellipsis"
                >
                  {project.description[language]}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1 overflow-hidden h-7">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-brand-surface/80 text-slate-300 border border-brand-border/60 shrink-0 truncate max-w-[130px]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-brand-surface/50 text-slate-500 border border-brand-border/40 shrink-0">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Action Buttons (Referência: Captura 19-13-31.png) */}
            <div className="mt-6 pt-5 border-t border-brand-border/60 flex items-center justify-between gap-3">
              {project.hasDetails ? (
                <Link
                  to={`/projetos/${project.id}`}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-brand-teal/15 hover:bg-brand-teal/25 text-brand-teal text-xs font-semibold text-center transition-colors border border-brand-teal/20 flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t.projects.view_details || 'Ver Detalhes'}</span>
                </Link>
              ) : (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-lg bg-brand-surface hover:bg-brand-cardHover text-slate-300 hover:text-white text-xs font-semibold text-center transition-colors border border-brand-border flex items-center justify-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>{t.projects.view_github}</span>
                </a>
              )}

              <a
                aria-label={`Código no GitHub de ${project.name}`}
                className="p-2.5 rounded-lg border border-brand-border hover:border-slate-500 text-slate-300 hover:text-white transition-colors bg-brand-surface hover:bg-brand-cardHover"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={t.projects.view_github}
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {project.liveUrl && (
                <a
                  aria-label={`Acessar ${project.name}`}
                  className="p-2.5 rounded-lg border border-brand-border hover:border-slate-500 text-brand-teal hover:text-emerald-300 transition-colors bg-brand-surface hover:bg-brand-cardHover"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t.projects.view_live}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Botão Ver Todos os Projetos */}
      <div className="mt-10 flex justify-center">
        <Link
          to="/projetos"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-800 bg-gray-900/60 hover:bg-gray-800/80 hover:border-emerald-500/50 text-gray-300 hover:text-white font-medium text-sm transition-all duration-200"
        >
          <ExternalLink className="w-4 h-4 text-emerald-400" />
          <span>{t.projects.view_all}</span>
        </Link>
      </div>
    </section>
  );
};
export default ProjectsSection;
