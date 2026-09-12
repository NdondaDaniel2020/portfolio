import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const { t } = useLanguage();

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

      {/* Articles Grid (2 Col Desktop idêntica ao original) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Article Card 1 */}
        <article className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
          <div>
            {/* Visual Header / Thumbnail */}
            <div className="h-52 w-full bg-gradient-to-br from-[#0B1720] to-[#0A272A] p-6 relative flex flex-col justify-between border-b border-brand-border/60">
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-1 rounded bg-brand-teal/15 text-brand-teal text-[11px] font-mono border border-brand-teal/20">
                  C &amp; Baixo Nível
                </span>
                <span className="text-xs text-slate-400 font-mono">10 de Junho de 2025</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-brand-teal transition-colors tracking-tight">
                  Entendendo Ponteiros em C do zero ao uso
                </h3>
              </div>
            </div>

            {/* Content preview */}
            <div className="p-6 space-y-3">
              <h4 className="text-base font-semibold text-slate-200">
                Vamos entender ponteiros em C
              </h4>
              <p className="text-sm text-brand-muted leading-relaxed">
                Se você está a começar a programar em C, provavelmente já tentou fazer algo simples e deparaste com o famoso asterisco. Os riscos de ponteiros e gestão manual de memória descomplicados.
              </p>
              {/* Topic Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-brand-surface text-slate-400 text-xs font-mono">C</span>
                <span className="px-2 py-0.5 rounded bg-brand-surface text-slate-400 text-xs font-mono">memoria</span>
                <span className="px-2 py-0.5 rounded bg-brand-surface text-slate-400 text-xs font-mono">ponteiros</span>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="p-6 pt-0">
            <a
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:text-emerald-300 transition-colors"
              href="https://medium.com/@ndondadaniel2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Read on Medium</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>

        {/* Article Card 2 */}
        <article className="rounded-2xl bg-brand-card border border-brand-border hover:border-brand-teal/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
          <div>
            {/* Visual Header / Thumbnail */}
            <div className="h-52 w-full bg-gradient-to-br from-[#0B151F] to-[#12222E] p-6 relative flex flex-col justify-between border-b border-brand-border/60">
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-1 rounded bg-brand-teal/15 text-brand-teal text-[11px] font-mono border border-brand-teal/20">
                  Libft / Systems
                </span>
                <span className="text-xs text-slate-400 font-mono">2 de Junho de 2025</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-brand-teal transition-colors tracking-tight">
                  Como implementei a minha própria biblioteca padrão em C
                </h3>
              </div>
            </div>

            {/* Content preview */}
            <div className="p-6 space-y-3">
              <h4 className="text-base font-semibold text-slate-200">
                Aprofundando os fundamentos da libc
              </h4>
              <p className="text-sm text-brand-muted leading-relaxed">
                Se não sabes programar em C é muito importante implementar algumas das suas próprias funções. Isso torna a linguagem mais simples e avançada para o desenvolvimento de sistemas.
              </p>
              {/* Topic Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-brand-surface text-slate-400 text-xs font-mono">software-engineering</span>
                <span className="px-2 py-0.5 rounded bg-brand-surface text-slate-400 text-xs font-mono">programming</span>
                <span className="px-2 py-0.5 rounded bg-brand-surface text-slate-400 text-xs font-mono">C</span>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="p-6 pt-0">
            <a
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-teal hover:text-emerald-300 transition-colors"
              href="https://medium.com/@ndondadaniel2020"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Read on Medium</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>
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
