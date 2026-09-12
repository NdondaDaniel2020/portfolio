import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import articlesDataRaw from '../../data/articles.json';
import type { Article } from '../../types';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const { t, language } = useLanguage();
  const articles = articlesDataRaw as Article[];

  return (
    <section className="pt-8 space-y-10" id="artigos">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
            {t.articles.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2">
            {t.articles.title}
          </h2>
        </div>

        <a
          href="/artigos"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal hover:text-emerald-300 transition-colors group whitespace-nowrap"
        >
          <span>{t.articles.view_all}</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 p-6 flex flex-col justify-between group glow-teal-sm/0 hover:shadow-xl hover:shadow-brand-teal/5"
          >
            <div className="space-y-4">
              {/* Metadados: Data e Leitura */}
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-teal" />
                  {article.publishedAt}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              {/* Título & Resumo */}
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-teal transition-colors leading-snug">
                  {article.title[language]}
                </h3>
                <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                  {article.summary[language]}
                </p>
              </div>

              {/* Tags */}
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

            {/* Ação */}
            <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center gap-2 text-xs font-medium text-slate-300 group-hover:text-brand-teal transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>{t.articles.read_more}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-auto transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
