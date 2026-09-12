import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import projectsDataRaw from '../data/projects.json';
import type { Project } from '../types';
import { Search, ExternalLink, Star, GitFork, Terminal } from 'lucide-react';
import { GithubIcon } from '../components/common/BrandIcons';
import { CompactPagination } from '../components/common/CompactPagination';

export const ProjectsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'production' | 'opensource'>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const searchInputRef = useRef<HTMLInputElement>(null);

  const projects = projectsDataRaw as Project[];

  // Atalho de Teclado Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = useMemo(() => {
    return [
      { id: 'all', label: language === 'pt' ? 'Todos' : 'All' },
      { id: 'systems', label: language === 'pt' ? 'C/C++ & Baixo Nível' : 'C/C++ & Systems' },
      { id: 'backend', label: language === 'pt' ? 'Python & FastAPI' : 'Python & FastAPI' },
      { id: 'web', label: language === 'pt' ? 'React & Frontend' : 'React & Frontend' },
      { id: 'tools', label: language === 'pt' ? 'DevOps & Containers' : 'DevOps & Containers' },
    ];
  }, [language]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Filtro por abas
      if (activeTab === 'production' && !p.liveUrl) return false;
      if (activeTab === 'opensource' && p.liveUrl) return false;

      // Filtro por categoria
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;

      // Filtro por texto de busca
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const nameMatch = p.name.toLowerCase().includes(query);
      const descMatch = p.description[language].toLowerCase().includes(query);
      const techMatch = p.technologies.some((tech) => tech.toLowerCase().includes(query));
      const langMatch = p.language.toLowerCase().includes(query);

      return nameMatch || descMatch || techMatch || langMatch;
    });
  }, [projects, activeTab, activeCategory, searchQuery, language]);

  // Reseta para a primeira página ao alterar filtros ou busca
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab, activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(start, start + itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-24 space-y-12">
      {/* Banner de Métricas de Engenharia */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-brand-card border border-brand-border rounded-xl p-4">
          <div className="text-[11px] font-mono text-slate-400">// COMMITS_2026</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">520+</div>
        </div>
        <div className="bg-brand-card border border-brand-border rounded-xl p-4">
          <div className="text-[11px] font-mono text-slate-400">// REPOSITÓRIOS</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-brand-teal mt-1">
            {projects.length}
          </div>
        </div>
        <div className="bg-brand-card border border-brand-border rounded-xl p-4">
          <div className="text-[11px] font-mono text-slate-400">// UPSTREAM</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mt-1">04</div>
        </div>
        <div className="bg-brand-card border border-brand-border rounded-xl p-4">
          <div className="text-[11px] font-mono text-slate-400">// UPTIME_SLA</div>
          <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">99.9%</div>
        </div>
      </div>

      {/* Header da Página */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          <span>REPOSITÓRIOS PÚBLICOS & PROJETOS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {t.projects_page.title}
        </h1>
        <p className="text-base sm:text-lg text-brand-muted max-w-2xl">
          {t.projects_page.subtitle}
        </p>
      </div>

      {/* Barra de Controles & Busca */}
      <div className="space-y-4 pt-2">
        {/* Input de Busca com Ctrl+K */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.projects_page.search_placeholder}
            className="w-full pl-12 pr-24 py-3.5 rounded-xl bg-brand-card border border-brand-border text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-teal transition-all text-sm font-mono"
          />
          <span className="hidden sm:inline-block absolute right-4 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[11px] font-mono bg-brand-surface border border-brand-border text-slate-400">
            Ctrl + K
          </span>
        </div>

        {/* Abas e Pílulas de Filtros */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          {/* Abas Principais */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-brand-card border border-brand-border text-xs font-mono">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-brand-teal text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects_page.tab_all}
            </button>
            <button
              onClick={() => setActiveTab('production')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'production'
                  ? 'bg-brand-teal text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects_page.tab_production}
            </button>
            <button
              onClick={() => setActiveTab('opensource')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'opensource'
                  ? 'bg-brand-teal text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.projects_page.tab_opensource}
            </button>
          </div>

          {/* Categorias de Tecnologias */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'border-brand-teal bg-brand-teal/10 text-brand-teal font-semibold'
                    : 'border-brand-border bg-brand-card text-slate-400 hover:border-slate-600 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de Todos os Projetos */}
      {filteredProjects.length > 0 ? (
        <div className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {paginatedProjects.map((project) => (
              <div
                key={project.id}
                className="h-[318px] rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 p-6 flex flex-col justify-between group glow-teal-sm/0 hover:shadow-xl hover:shadow-brand-teal/5"
              >
                <div className="space-y-4 min-w-0">
                  {/* Topo do Card */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase bg-brand-surface border border-brand-border text-brand-teal shrink-0">
                      {project.language}
                    </span>

                    <div className="flex items-center gap-3 text-slate-400 text-xs font-mono shrink-0">
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

                  {/* Título & Descrição com Elipse (...) */}
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-teal transition-colors truncate">
                      {project.name}
                    </h3>
                    <p
                      title={project.description[language]}
                      className="text-sm text-brand-muted mt-2.5 leading-relaxed line-clamp-4 overflow-hidden text-ellipsis"
                    >
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Tecnologias */}
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

                {/* Ações Alinhadas na Base */}
                <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between shrink-0">
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

          {/* Paginação Compacta [ ← ] Página 1 de 6 [ → ] */}
          <CompactPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredProjects.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <div className="rounded-2xl bg-brand-card border border-brand-border p-12 text-center space-y-4">
          <div className="font-mono text-sm text-slate-400">
            Nenhum projeto encontrado para o termo "{searchQuery}".
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
              setActiveTab('all');
            }}
            className="px-4 py-2 rounded-xl bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-xs font-mono font-medium hover:bg-brand-teal hover:text-slate-950 transition-all cursor-pointer"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </main>
  );
};
