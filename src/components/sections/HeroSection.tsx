import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profile } from '../../data/profile';
import { TerminalCard } from './TerminalCard';
import { ArrowRight, Download, MessageSquare, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  const cvUrl = language === 'pt' ? profile.cv.pt : profile.cv.en;

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Luz ambiente teal ao fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Coluna Esquerda: Texto, Titular e CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Badge de Cargo */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-xs font-mono font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            {t.hero.badge}
          </div>

          {/* Headline Principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {t.hero.headlinePre}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-emerald-300 to-teal-200">
              {t.hero.headlineHighlight}
            </span>{' '}
            {t.hero.headlinePost}
          </h1>

          {/* Subtítulo / Pitch */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            {t.hero.pitch}
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-teal text-slate-950 font-bold hover:bg-emerald-300 transition-all shadow-lg hover:shadow-brand-teal/20 glow-teal-xs"
            >
              {t.hero.viewProjects}
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={cvUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-border bg-brand-surface/80 text-slate-200 hover:border-brand-teal hover:text-brand-teal transition-all font-semibold"
            >
              <Download className="w-4 h-4 text-brand-teal" />
              {t.hero.downloadCv}
            </a>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-brand-border/60 bg-transparent text-slate-400 hover:text-slate-200 transition-all font-medium text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              {t.hero.contactMe}
            </a>
          </div>
        </div>

        {/* Coluna Direita: Terminal Card Interativo */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <TerminalCard />
        </div>
      </div>

      {/* Indicador de Scroll para Explorar */}
      <div className="hidden sm:flex justify-center pt-12">
        <a
          href="#sobre-mim"
          className="flex flex-col items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-brand-teal transition-colors"
        >
          <span>{t.hero.explore}</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
