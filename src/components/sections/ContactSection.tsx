import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profile } from '../../data/profile';
import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const channels = [
    {
      title: 'WhatsApp',
      desc: 'Conversas rápidas e diretas',
      value: '+244 923 456 789',
      href: profile.social.whatsapp,
      icon: MessageCircle,
      accent: 'text-emerald-400',
    },
    {
      title: 'Email',
      desc: 'Propostas e mensagens formais',
      value: profile.social.email,
      href: `mailto:${profile.social.email}`,
      icon: Mail,
      accent: 'text-brand-teal',
    },
    {
      title: 'GitHub',
      desc: 'Repositórios e contribuições',
      value: 'NdondaDaniel2020',
      href: profile.social.github,
      icon: GithubIcon,
      accent: 'text-slate-200',
    },
    {
      title: 'LinkedIn',
      desc: 'Conexões profissionais e networking',
      value: 'ndonda-daniel',
      href: profile.social.linkedin,
      icon: LinkedinIcon,
      accent: 'text-sky-400',
    },
  ];

  return (
    <section id="contato" className="py-24 border-t border-brand-border/40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-teal">
            {t.contact.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Grade de 4 Canais de Comunicação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel) => {
            const Icon = channel.icon;

            return (
              <a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-brand-border bg-brand-card p-6 flex flex-col justify-between hover:border-brand-teal/60 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-brand-surface border border-brand-border text-brand-teal group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-brand-teal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-teal transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {channel.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-border/50 text-xs font-mono text-slate-300 truncate">
                  {channel.value}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
