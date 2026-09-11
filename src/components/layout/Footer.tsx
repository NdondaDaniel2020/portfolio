import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profile } from '../../data/profile';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border/60 bg-[#06090B] py-12 px-6 lg:px-12 text-sm text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identidade e Direitos */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-mono text-brand-teal font-bold tracking-tight text-base">ND.</span>
          <span>
            © {currentYear} {profile.name}. {t.footer.rights}
          </span>
        </div>

        {/* Status Operacional */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-brand-surface/80 px-3 py-1.5 rounded-full border border-brand-border">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          <span>{t.footer.status}</span>
        </div>

        {/* Links Sociais */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-teal transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-teal transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={profile.social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-teal transition-colors"
            aria-label="Medium"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
