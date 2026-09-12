import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '../types/theme';
import { pt } from '../data/locales/pt';
import { en } from '../data/locales/en';

type Translations = typeof pt;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang') as Language | null;
    if (saved && (saved === 'pt' || saved === 'en')) return saved;
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = language === 'pt' ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
