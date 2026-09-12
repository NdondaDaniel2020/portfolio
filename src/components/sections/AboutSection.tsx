import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-8 space-y-8" data-purpose="about-section" id="sobre-mim">
      {/* Section Tag */}
      <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
        {t.about.tag}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Bio & Skills */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            {t.about.bio}
          </p>

          {/* Competency Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-xs sm:text-sm font-medium text-slate-300 hover:border-brand-teal/50 hover:text-brand-teal transition-colors">
              {t.about.skills_tags.backend}
            </span>
            <span className="px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-xs sm:text-sm font-medium text-slate-300 hover:border-brand-teal/50 hover:text-brand-teal transition-colors">
              {t.about.skills_tags.data}
            </span>
            <span className="px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-xs sm:text-sm font-medium text-slate-300 hover:border-brand-teal/50 hover:text-brand-teal transition-colors">
              {t.about.skills_tags.cloud}
            </span>
            <span className="px-4 py-2.5 rounded-xl bg-brand-card border border-brand-border text-xs sm:text-sm font-medium text-slate-300 hover:border-brand-teal/50 hover:text-brand-teal transition-colors">
              {t.about.skills_tags.frontend}
            </span>
          </div>
        </div>

        {/* Right Column: Profile Picture with glowing frame */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Ambient Teal Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-teal/40 to-emerald-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>

            {/* Main Picture Card */}
            <div className="relative rounded-2xl bg-brand-card border border-brand-teal/30 p-2.5 shadow-2xl overflow-hidden">
              <img
                src="/ndonda.png"
                alt="Ndonda Daniel Matondo"
                className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-xl"
                loading="lazy"
              />

              {/* Status Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-brand-dark/90 backdrop-blur-md border border-brand-border/80 px-3 py-1.5 rounded-lg flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal glow-teal-xs animate-pulse"></span>
                <span className="text-[11px] font-mono text-slate-300 font-medium">
                  {t.about.online_badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
