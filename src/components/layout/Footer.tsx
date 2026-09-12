import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border/60 bg-[#070B0D]/80 backdrop-blur-md py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></div>
          <span className="text-xs font-mono text-slate-400">
            {t.footer.status}
          </span>
        </div>

        <div className="text-xs font-mono text-slate-500 text-center sm:text-right">
          © {currentYear} Ndonda Daniel Matondo. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
