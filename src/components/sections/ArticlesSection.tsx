import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';

import articlesDataRaw from '../../data/articles.json';
import type { Article } from '../../types';
import { formatArticleDate } from '../../utils/date';

export const ArticlesSection: React.FC = () => {
  const { t, language } = useLanguage();
  const articles = (articlesDataRaw as Article[]).slice(0, 2);

  return (
    <section className="space-y-10" data-purpose="articles-section" id="artigos">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
          {t.articles.tag}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Escrito por mim.
        </h2>
        <p className="text-brand-muted text-base">
          Artigos técnicos e reflexões sobre engenharia de software, sistemas e dados.
        </p>
      </div>

      {/* Articles Grid (2 Col Desktop dinâmico com dados reais de articles.json) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => {
          const gradientClass = index === 0
            ? 'from-[#0B1720] to-[#0A272A]'
            : 'from-[#0B151F] to-[#12222E]';

          return (
            <article
              key={article.id}
              className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header / Thumbnail */}
                <div className={`min-h-[190px] h-auto w-full bg-gradient-to-br ${gradientClass} p-6 relative flex flex-col justify-between gap-4 border-b border-brand-border/60`}>
                  <div className="flex justify-between items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-brand-teal/15 text-brand-teal text-[11px] font-mono border border-brand-teal/20 truncate uppercase">
                      {article.tags[0] || 'Python'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono shrink-0">
                      {formatArticleDate(article.publishedAt, language)} • {article.readTime}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-brand-teal transition-colors tracking-tight leading-snug break-words">
                      {article.title[language]}
                    </h3>
                  </div>
                </div>

                {/* Content preview */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-brand-muted leading-relaxed whitespace-pre-line">
                    {article.summary[language]}
                  </p>
                  {/* Topic Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-brand-surface text-slate-400 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <a
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:text-emerald-300 transition-colors"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Ler no Medium</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* Centered Medium CTA Button & All Articles Link */}
      <div className="text-center pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/artigos"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-brand-teal text-slate-950 text-xs font-semibold hover:bg-emerald-300 transition-all duration-200 glow-teal-sm"
        >
          <BookOpen className="w-4 h-4" />
          <span>Ver Todos os Artigos &amp; Publicações</span>
        </Link>
        <a
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-brand-card hover:bg-brand-surface border border-brand-border hover:border-slate-500 text-slate-200 text-xs font-semibold transition-all duration-200"
          href="https://medium.com/@ndondadaniel2020"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ExternalLink className="w-4 h-4 text-brand-teal" />
          <span>Visitar o meu Perfil no Medium</span>
        </a>
      </div>
    </section>
  );
};
