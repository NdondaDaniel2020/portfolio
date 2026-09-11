import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ThemeToggle } from '../controls/ThemeToggle';
import { LangToggle } from '../controls/LangToggle';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const navLinks = [
    { label: t.nav.home, href: isHome ? '#hero' : '/' },
    { label: t.nav.about, href: isHome ? '#sobre-mim' : '/#sobre-mim' },
    { label: t.nav.projects, href: '/projetos' },
    { label: t.nav.skills, href: isHome ? '#skills' : '/#skills' },
    { label: t.nav.articles, href: '/artigos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070B0D]/85 backdrop-blur-md border-b border-brand-border/40 transition-colors">
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo Responsivo com variações dinâmicas de comprimento */}
        <Link
          to="/"
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
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-brand-teal transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          <a
            href={isHome ? '#contato' : '/#contato'}
            className="px-3.5 py-2 rounded-lg border border-brand-border bg-brand-surface/70 text-brand-teal hover:border-brand-teal hover:bg-brand-teal/10 transition-all whitespace-nowrap"
          >
            {t.nav.contact}
          </a>

          {/* Controles de Preferências (Tema + Idioma) */}
          <div className="flex items-center gap-2 pl-2 border-l border-brand-border/60">
            <ThemeToggle />
            <LangToggle />
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-brand-border bg-brand-surface/70 text-slate-300 hover:text-brand-teal transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-brand-border bg-[#070B0D]/95 backdrop-blur-lg px-6 py-6 space-y-4 animate-fade-in">
          <div className="flex flex-col space-y-3 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-brand-teal transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={isHome ? '#contato' : '/#contato'}
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-teal font-semibold py-1"
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="pt-4 border-t border-brand-border/40 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">Preferências / Lang:</span>
            <LangToggle />
          </div>
        </div>
      )}
    </header>
  );
};
