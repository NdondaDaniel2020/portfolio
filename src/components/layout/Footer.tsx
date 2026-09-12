import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { profile } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border/60 py-10 bg-[#06090B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-muted">
        {/* Copyright Notice */}
        <p>© {currentYear} Ndonda Daniel Matondo. {t.footer.rights}</p>

        {/* Social Media Quick Links */}
        <div className="flex items-center gap-5">
          <a
            aria-label="Perfil GitHub"
            className="hover:text-brand-teal transition-colors"
            href={profile.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            aria-label="Perfil LinkedIn"
            className="hover:text-brand-teal transition-colors"
            href={profile.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
