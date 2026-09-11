import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';
import projectsData from '../data/projects.json';
import { Search, ExternalLink, Terminal, Code2, ArrowLeft } from 'lucide-react';
import { GithubIcon } from '../components/common/BrandIcons';
import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'systems' | 'backend' | 'web'>('all');

  const projects = projectsData as Project[];

  // Obter todas as tags únicas
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((tech) => set.add(tech)));
    return Array.from(set);
  }, [projects]);

  // Filtragem combinada
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const desc = typeof project.description === 'object' ? project.description[language] : project.description;
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTag = selectedTag ? project.technologies.includes(selectedTag) : true;
      const matchesCategory = selectedCategory === 'all' ? true : project.category === selectedCategory;

      return matchesSearch && matchesTag && matchesCategory;
    });
  }, [projects, searchTerm, selectedTag, selectedCategory, language]);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 lg:px-12 max-w-7xl mx-auto space-y-10">
      {/* Botão Voltar e Cabeçalho */}
      <div className="space-y-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-brand-teal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o início</span>
        </Link>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Todos os Projetos
        </h1>
        <p className="text-slate-400 max-w-2xl text-base">
          Exploração completa do repositório de engenharia, sistemas operacionais em C, microsserviços em Python e interfaces web.
        </p>
      </div>

      {/* Controles de Busca e Filtros */}
      <div className="space-y-4 p-6 rounded-2xl border border-brand-border bg-brand-card">
        {/* Barra de Pesquisa */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.projects.searchPlaceholder}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-teal text-sm"
          />
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-mono text-slate-400 mr-2">Categorias:</span>
          {(['all', 'systems', 'backend', 'web'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-teal text-slate-950 font-bold'
                  : 'bg-brand-surface text-slate-300 border border-brand-border hover:border-brand-teal/50'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Tags de Tecnologias */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="text-xs font-mono text-slate-400 mr-2">Filtrar por Tag:</span>
          {allTags.map((tag) => {
            const isSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(isSelected ? null : tag)}
                className={`text-[11px] font-mono px-2.5 py-1 rounded-md border transition-all ${
                  isSelected
                    ? 'bg-brand-teal/20 text-brand-teal border-brand-teal font-semibold'
                    : 'bg-brand-surface border-brand-border/60 text-slate-400 hover:text-white'
                }`}
              >
                #{tag}
              </button>
            );
          })}
          {selectedTag && (
            <button
              type="button"
              onClick={() => setSelectedTag(null)}
              className="text-[11px] font-mono text-rose-400 hover:underline ml-2"
            >
              Limpar filtro
            </button>
          )}
        </div>
      </div>

      {/* Contador de Resultados */}
      <div className="text-xs font-mono text-slate-400">
        Exibindo <span className="text-brand-teal font-bold">{filteredProjects.length}</span> {t.projects.resultsCount}
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
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-teal">
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

                <h2 className="text-lg font-bold text-white group-hover:text-brand-teal transition-colors">
                  {project.name}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

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
    </div>
  );
};
