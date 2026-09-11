import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Article } from '../types';
import articlesData from '../data/articles.json';
import { Search, BookOpen, Calendar, Clock, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ArticlesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const articles = articlesData as Article[];

  // Obter tags únicas
  const allTags = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => a.tags.forEach((tag) => set.add(tag)));
    return Array.from(set);
  }, [articles]);

  // Filtragem
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const summary = typeof article.summary === 'object' ? article.summary[language] : article.summary;
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTag = selectedTag ? article.tags.includes(selectedTag) : true;

      return matchesSearch && matchesTag;
    });
  }, [articles, searchTerm, selectedTag, language]);

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
          Artigos & Publicações
        </h1>
        <p className="text-slate-400 max-w-2xl text-base">
          Compartilhando conhecimento prático sobre engenharia de software, sistemas operacionais, concorrência e boas práticas de arquitetura.
        </p>
      </div>

      {/* Controles de Busca e Filtros */}
      <div className="space-y-4 p-6 rounded-2xl border border-brand-border bg-brand-card">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar por título, assunto ou tag..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-teal text-sm"
          />
        </div>

        {/* Tags */}
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

      {/* Grade de Artigos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => {
          const summary = typeof article.summary === 'object' ? article.summary[language] : article.summary;

          return (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-brand-border bg-brand-card p-6 flex flex-col justify-between hover:border-brand-teal/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                    {article.publishedAt}
                  </span>
                  {article.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  )}
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-brand-teal transition-colors">
                  {article.title}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between text-xs font-semibold text-brand-teal">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  {t.articles.readArticle}
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
