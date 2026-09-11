import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profile } from '../../data/profile';
import { Terminal, Shield, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mim" className="py-24 border-t border-brand-border/40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Foto de Perfil com Moldura Dark Teal */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Glow exterior */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand-teal to-emerald-600 opacity-30 group-hover:opacity-60 blur-xl transition duration-500" />

              <div className="relative rounded-2xl p-2 bg-brand-card border border-brand-border overflow-hidden">
                <img
                  src="/ndonda.png"
                  alt={profile.name}
                  className="w-72 sm:w-80 md:w-96 h-auto rounded-xl object-cover"
                />

                {/* Badge de status Online */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#070B0D]/90 backdrop-blur-md border border-brand-border/80 rounded-xl p-2.5 flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-teal" />
                  </span>
                  <span className="text-xs font-mono text-slate-300 font-medium">
                    {t.about.onlineStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Texto Biográfico e Pilares Técnicos */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-teal">
              {t.about.badge}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Três Pilares de Competência */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-brand-border bg-brand-surface/70 space-y-2">
                <Terminal className="w-5 h-5 text-brand-teal" />
                <h3 className="font-bold text-white text-sm">Low-Level & C</h3>
                <p className="text-xs text-slate-400">UNIX Shells, Libc, Threads POSIX e Valgrind.</p>
              </div>

              <div className="p-4 rounded-xl border border-brand-border bg-brand-surface/70 space-y-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white text-sm">Backend & APIs</h3>
                <p className="text-xs text-slate-400">FastAPI, Docker, Microservices e PostgreSQL.</p>
              </div>

              <div className="p-4 rounded-xl border border-brand-border bg-brand-surface/70 space-y-2">
                <Sparkles className="w-5 h-5 text-teal-300" />
                <h3 className="font-bold text-white text-sm">Frontend Moderno</h3>
                <p className="text-xs text-slate-400">React, TypeScript, Tailwind e Vite.</p>
              </div>
            </div>

            {/* Mini Checklist */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Clean Code & TDD
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> CI/CD Automation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal" /> Algoritmos & Estruturas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
