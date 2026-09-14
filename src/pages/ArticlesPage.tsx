import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import articlesDataRaw from '../data/articles.json';
import type { Article } from '../types';
import { Search, ExternalLink, Calendar, Clock, BookOpen, Sparkles } from 'lucide-react';
import { formatArticleDate } from '../utils/date';

export const ArticlesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string>('all');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const articles = articlesDataRaw as Article[];
  const featuredArticle = articles.find(a => a.featured) || articles[0];

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

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    articles.forEach(a => a.tags.forEach(tag => tagsSet.add(tag)));
    return ['all', ...Array.from(tagsSet)];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      if (activeTag !== 'all' && !article.tags.includes(activeTag)) return false;
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const titleMatch = article.title[language].toLowerCase().includes(query);
      const summaryMatch = article.summary[language].toLowerCase().includes(query);
      const tagMatch = article.tags.some(t => t.toLowerCase().includes(query));
      return titleMatch || summaryMatch || tagMatch;
    });
  }, [articles, activeTag, searchQuery, language]);

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-24 space-y-12">
      {/* Header da Página */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>PUBLICAÇÕES & ENGENHARIA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {t.articles_page.title}
        </h1>
        <p className="text-base sm:text-lg text-brand-muted max-w-2xl">
          {t.articles_page.subtitle}
        </p>
      </div>

      {/* Artigo em Destaque com Terminal de Memória C */}
      {featuredArticle && (
        <div className="rounded-3xl bg-brand-card border border-brand-teal/30 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group glow-teal-sm/0 hover:shadow-brand-teal/10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Lado Esquerdo: Conteúdo */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-mono font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ARTIGO EM DESTAQUE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-brand-teal transition-colors leading-tight">
                {featuredArticle.title[language]}
              </h2>

              <p className="text-base text-brand-muted leading-relaxed">
                {featuredArticle.summary[language]}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                  {formatArticleDate(featuredArticle.publishedAt, language)}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={featuredArticle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-teal text-slate-950 font-bold text-sm hover:bg-emerald-300 transition-all glow-teal-sm"
                >
                  <span>Ler artigo completo no Medium</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Lado Direito: Terminal Dinâmico que se adapta ao Conteúdo do Artigo */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {featuredArticle.snippet ? (
                <div className="rounded-2xl bg-[#091116] border border-brand-border p-5 font-mono text-xs text-slate-300 shadow-2xl relative overflow-hidden group/terminal">
                  {/* Subtle Glow no topo do terminal */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Header do Terminal com status e nome do arquivo/diagrama */}
                  <div className="flex items-center justify-between border-b border-brand-border/60 pb-3 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] opacity-80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] opacity-80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] opacity-80"></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                        {featuredArticle.snippet.type === 'diagram' ? 'Diagrama ASCII' : (featuredArticle.snippet.type === 'code' ? 'Python' : 'Terminal')}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {featuredArticle.snippet.filename || 'snippet.txt'}
                      </span>
                    </div>
                  </div>

                  {/* Corpo do Snippet (Auto-ajustável com scroll horizontal seguro) */}
                  <div className="overflow-x-auto max-h-[320px] scrollbar-thin scrollbar-thumb-brand-border">
                    <pre className="text-[11px] sm:text-xs leading-relaxed font-mono whitespace-pre text-slate-300 select-text">
                      {featuredArticle.snippet.content}
                    </pre>
                  </div>
                </div>
              ) : featuredArticle.coverImage ? (
                /* Fallback caso não haja snippet textual: Capa tratada com moldura terminal */
                <div className="rounded-2xl bg-[#091116] border border-brand-border p-4 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-brand-border/60 pb-2.5 mb-3 font-mono text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                    </div>
                    <span className="text-[11px] text-slate-400">preview_cover.jpg</span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <img
                      src={featuredArticle.coverImage}
                      alt={featuredArticle.title[language]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      {/* Barra de Busca & Filtros por Tag */}
      <div className="space-y-4 pt-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            ref={searchInputRef}
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.articles_page.search_placeholder}
            aria-label={t.articles_page.search_placeholder}
            enterKeyHint="search"
            autoComplete="off"
            spellCheck={false}
            className="w-full pl-12 pr-24 py-3.5 rounded-xl bg-brand-card border border-brand-border text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-teal transition-all text-sm font-mono"
          />
          <span className="hidden sm:inline-block absolute right-4 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[11px] font-mono bg-brand-surface border border-brand-border text-slate-400">
            Ctrl + K
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                activeTag === tag
                  ? 'border-brand-teal bg-brand-teal/10 text-brand-teal font-semibold'
                  : 'border-brand-border bg-brand-card text-slate-400 hover:border-slate-600 hover:text-white'
              }`}
            >
              {tag === 'all' ? (language === 'pt' ? 'Todos os Tópicos' : 'All Topics') : `#${tag}`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Artigos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredArticles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 p-6 flex flex-col justify-between group glow-teal-sm/0 hover:shadow-xl hover:shadow-brand-teal/5"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                  {formatArticleDate(article.publishedAt, language)}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-teal transition-colors leading-snug">
                  {article.title[language]}
                </h3>
                <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                  {article.summary[language]}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-brand-surface/80 text-brand-teal border border-brand-border/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between text-xs font-medium text-slate-300 group-hover:text-brand-teal transition-colors">
              <span>{t.articles.read_more}</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};
