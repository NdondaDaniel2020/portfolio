import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ThemeToggle } from '../controls/ThemeToggle';
import { LangToggle } from '../controls/LangToggle';
import { MobileMenu } from './MobileMenu';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070B0D]/85 backdrop-blur-md border-b border-brand-border/40">
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo Responsivo calibrado com os breakpoints do design original */}
        <a
          href="#hero"
          className="text-lg sm:text-xl xl:text-2xl font-extrabold tracking-tight text-white flex items-center gap-0.5 group shrink-0"
        >
          <span className="hidden xl:inline">Ndonda Daniel Matondo</span>
          <span className="hidden lg:inline xl:hidden">Ndonda Daniel</span>
          <span className="hidden md:inline lg:hidden">Ndonda Daniel</span>
          <span className="hidden sm:inline md:hidden">Ndonda</span>
          <span className="inline sm:hidden">ND</span>
          <span className="text-brand-teal inline-block transform group-hover:scale-125 transition-transform duration-200">
            .
          </span>
        </a>

        {/* Desktop Nav Links (visível a partir de md) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm font-medium text-slate-300">
          <a className="hover:text-brand-teal transition-colors whitespace-nowrap" href="#hero">
            {t.nav.home}
          </a>
          <a className="hover:text-brand-teal transition-colors whitespace-nowrap" href="#sobre-mim">
            {t.nav.about}
          </a>
          <a className="hover:text-brand-teal transition-colors whitespace-nowrap" href="#projetos">
            {t.nav.projects}
          </a>
          <a className="hover:text-brand-teal transition-colors whitespace-nowrap" href="#skills">
            {t.nav.skills}
          </a>
          <a className="hover:text-brand-teal transition-colors whitespace-nowrap" href="#artigos">
            {t.nav.articles}
          </a>
          <a
            className="px-3.5 py-2 rounded-lg border border-brand-border bg-brand-surface/70 text-brand-teal hover:border-brand-teal hover:bg-brand-teal/10 transition-all whitespace-nowrap"
            href="#contato"
          >
            {t.nav.contact}
          </a>

          {/* Grupo de Preferências (Tema + Idioma lado a lado) */}
          <div className="flex items-center gap-2 pl-2 border-l border-brand-border/60">
            <ThemeToggle id="theme-toggle" />
            <LangToggle id="lang-selector" />
          </div>
        </div>

        {/* Mobile Right Controls (Tema + Idioma + Hambúrguer visíveis apenas em telas < md) */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle id="theme-toggle-mobile" />
          <LangToggle id="lang-selector-mob" />

          {/* Botão Hambúrguer */}
          <button
            id="mobile-menu-btn"
            type="button"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Abrir menu mobile"
            aria-expanded={mobileMenuOpen}
            className="p-2 rounded-lg border border-brand-border bg-brand-surface/70 hover:border-brand-teal text-slate-200 hover:text-brand-teal transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-brand-teal" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Dropdown Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
