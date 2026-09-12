import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu-panel"
      className="md:hidden border-b border-brand-border/60 bg-[#070B0D]/95 backdrop-blur-xl px-6 py-6 transition-all duration-300"
    >
      <div className="flex flex-col gap-4 text-base font-medium">
        <a
          href="#hero"
          onClick={onClose}
          className="py-2 text-slate-200 hover:text-brand-teal transition-colors border-b border-brand-border/40"
        >
          {t.nav.home}
        </a>
        <a
          href="#sobre-mim"
          onClick={onClose}
          className="py-2 text-slate-200 hover:text-brand-teal transition-colors border-b border-brand-border/40"
        >
          {t.nav.about}
        </a>
        <a
          href="#projetos"
          onClick={onClose}
          className="py-2 text-slate-200 hover:text-brand-teal transition-colors border-b border-brand-border/40"
        >
          {t.nav.projects}
        </a>
        <a
          href="#skills"
          onClick={onClose}
          className="py-2 text-slate-200 hover:text-brand-teal transition-colors border-b border-brand-border/40"
        >
          {t.nav.skills}
        </a>
        <a
          href="#artigos"
          onClick={onClose}
          className="py-2 text-slate-200 hover:text-brand-teal transition-colors border-b border-brand-border/40"
        >
          {t.nav.articles}
        </a>
        <a
          href="#contato"
          onClick={onClose}
          className="py-2.5 px-4 rounded-xl border border-brand-teal/40 bg-brand-teal/10 text-brand-teal font-semibold text-center hover:bg-brand-teal hover:text-slate-950 transition-all mt-2"
        >
          {t.nav.contact}
        </a>
      </div>
    </div>
  );
};
