import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profile } from '../../data/profile';
import { Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/${profile.whatsappClean}?text=${encodeURIComponent(t.contact.whatsapp_msg)}`;

  return (
    <section className="pt-8 space-y-10" id="contato">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
          {t.contact.tag}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          {t.contact.title}
        </h2>
        <p className="text-base text-brand-muted">
          {t.contact.subtitle}
        </p>
      </div>

      {/* Grid de 4 Canais Rápidos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {/* WhatsApp Direto */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-brand-card border border-brand-border p-6 flex flex-col justify-between space-y-4 hover:border-brand-teal/50 hover:bg-brand-surface/80 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400">{t.contact.channels.whatsapp}</div>
            <div className="text-base font-bold text-white group-hover:text-brand-teal transition-colors mt-1">
              {profile.whatsapp}
            </div>
          </div>
        </a>

        {/* Email Direto */}
        <a
          href={`mailto:${profile.email}`}
          className="rounded-2xl bg-brand-card border border-brand-border p-6 flex flex-col justify-between space-y-4 hover:border-brand-teal/50 hover:bg-brand-surface/80 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400">{t.contact.channels.email}</div>
            <div className="text-sm font-bold text-white group-hover:text-brand-teal transition-colors mt-1 truncate">
              {profile.email}
            </div>
          </div>
        </a>

        {/* GitHub */}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-brand-card border border-brand-border p-6 flex flex-col justify-between space-y-4 hover:border-brand-teal/50 hover:bg-brand-surface/80 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
              <GithubIcon className="w-6 h-6" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400">{t.contact.channels.github}</div>
            <div className="text-base font-bold text-white group-hover:text-brand-teal transition-colors mt-1">
              @NdondaDaniel2020
            </div>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-brand-card border border-brand-border p-6 flex flex-col justify-between space-y-4 hover:border-brand-teal/50 hover:bg-brand-surface/80 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center text-brand-teal group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <div>
            <div className="text-xs font-mono text-slate-400">{t.contact.channels.linkedin}</div>
            <div className="text-base font-bold text-white group-hover:text-brand-teal transition-colors mt-1">
              in/ndondadaniel
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
