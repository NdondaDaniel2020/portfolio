import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Article } from '../../types';
import articlesData from '../../data/articles.json';
import { BookOpen, ArrowUpRight, Calendar, Clock } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const { t, language } = useLanguage();
  const articles = articlesData as Article[];

  return (
    <section id="artigos" className="py-24 border-t border-brand-border/40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-teal">
              {t.articles.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t.articles.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              {t.articles.subtitle}
            </p>
          </div>

          <Link
            to="/artigos"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-teal hover:underline self-start md:self-auto"
          >
            <span>{t.articles.viewAll}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grade de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => {
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

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-teal transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
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
    </section>
  );
};
