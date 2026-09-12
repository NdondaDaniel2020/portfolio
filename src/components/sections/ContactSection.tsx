import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profile } from '../../data/profile';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/${profile.whatsappClean}?text=${encodeURIComponent(t.contact.whatsapp_msg)}`;

  return (
    <section
      className="rounded-3xl bg-brand-card border border-brand-border p-8 lg:p-12 space-y-8"
      data-purpose="contact-card"
      id="contato"
    >
      <div className="space-y-3">
        <div className="font-mono text-xs text-brand-teal font-semibold tracking-wider font-mono-tag">
          {t.contact.tag}
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Tem um projeto em mente?
        </h2>
        <p className="text-brand-muted text-base max-w-2xl">
          Estou disponível para oportunidades, freelancing e projetos interessantes.
        </p>
      </div>

      {/* 4 Desktop Contact Channels Grid com layout idêntico ao HTML original */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {/* Email Button */}
        <a
          className="p-4 rounded-xl bg-brand-surface/80 border border-brand-border hover:border-brand-teal/50 hover:bg-brand-surface flex items-center justify-between group transition-all"
          href={`mailto:${profile.email}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0E1B22] border border-brand-border flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400">Contato direto</div>
              <div className="text-sm font-semibold text-white">Enviar Email</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
        </a>

        {/* WhatsApp Button */}
        <a
          className="p-4 rounded-xl bg-brand-surface/80 border border-brand-border hover:border-brand-teal/50 hover:bg-brand-surface flex items-center justify-between group transition-all"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0E1B22] border border-brand-border flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400">Mensagem rápida</div>
              <div className="text-sm font-semibold text-white">WhatsApp</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
        </a>

        {/* GitHub Profile */}
        <a
          className="p-4 rounded-xl bg-brand-surface/80 border border-brand-border hover:border-brand-teal/50 hover:bg-brand-surface flex items-center justify-between group transition-all"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0E1B22] border border-brand-border flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400">GitHub</div>
              <div className="text-sm font-semibold text-white truncate max-w-[130px]">@NdondaDaniel2020</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
        </a>

        {/* LinkedIn Profile */}
        <a
          className="p-4 rounded-xl bg-brand-surface/80 border border-brand-border hover:border-brand-teal/50 hover:bg-brand-surface flex items-center justify-between group transition-all"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0E1B22] border border-brand-border flex items-center justify-center text-brand-teal group-hover:scale-105 transition-transform">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-slate-400">LinkedIn</div>
              <div className="text-sm font-semibold text-white">Ndonda Daniel Matondo</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
        </a>
      </div>
    </section>
  );
};
