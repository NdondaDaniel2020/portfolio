import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TerminalCard } from './TerminalCard';
import { ArrowDown, Download, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  const cvPath = language === 'en'
    ? '/curriculo/Ndonda_Daniel_Matondo_CV_EN.pdf'
    : '/curriculo/Ndonda_Daniel_Matondo_CV_PT.pdf';

  return (
    <section className="min-h-[calc(100vh-5rem)] pt-24 lg:pt-28 pb-12 flex flex-col justify-between" id="hero">
      {/* Content Grid */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Headline and Pitch */}
        <div className="lg:col-span-7 space-y-7" data-purpose="hero-copy">
          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/25 text-brand-teal text-xs font-mono font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-brand-teal -ml-4 glow-teal-xs"></span>
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.12] tracking-tight">
            {t.hero.headline_p1} <br className="hidden sm:inline" />
            {t.hero.headline_p2} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-emerald-400">
              {t.hero.headline_p3}
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed font-normal">
            {t.hero.subtitle_p1}{' '}
            <strong className="text-slate-200 font-semibold">{t.hero.subtitle_bold}</strong>{' '}
            {t.hero.subtitle_p2}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-teal text-slate-950 font-semibold text-sm hover:bg-emerald-300 transition-all duration-200 glow-teal-sm shadow-brand-teal/20"
            >
              <span>{t.hero.cta_projects}</span>
              <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-brand-border bg-brand-card hover:bg-brand-surface hover:border-slate-600 text-slate-200 font-medium text-sm transition-all duration-200"
            >
              <span>{t.hero.cta_contact}</span>
            </a>

            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-brand-teal/30 bg-brand-teal/10 hover:bg-brand-teal/20 hover:border-brand-teal/60 text-brand-teal font-medium text-sm transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>{t.hero.cta_cv}</span>
            </a>
          </div>
        </div>

        {/* Right Column: TerminalCard */}
        <TerminalCard />
      </div>

      {/* Scroll Down Indicator */}
      <div className="pt-6 pb-2 flex justify-center items-center">
        <a
          href="#sobre-mim"
          className="group flex flex-col items-center gap-2 text-slate-400 hover:text-brand-teal transition-colors"
        >
          <span className="font-mono text-[11px] tracking-widest text-slate-400 group-hover:text-brand-teal transition-colors uppercase">
            {t.hero.explore}
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-brand-teal" />
        </a>
      </div>
    </section>
  );
};
