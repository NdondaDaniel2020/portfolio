import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface LangToggleProps {
  id?: string;
  className?: string;
}

export const LangToggle: React.FC<LangToggleProps> = ({ id = "lang-selector", className = "" }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      id={id}
      className={`relative inline-flex items-center p-1 rounded-lg border border-brand-border bg-brand-surface/70 font-mono text-xs select-none ${className}`}
      aria-label="Seletor de idioma"
    >
      {/* Pílula deslizante com animação suave */}
      <span
        className="absolute top-1 left-1 w-7 h-6 rounded bg-brand-teal transition-transform duration-300 ease-out shadow-sm pointer-events-none"
        style={{
          transform: language === 'en' ? 'translateX(28px)' : 'translateX(0px)'
        }}
      />
      
      <button
        type="button"
        onClick={() => setLanguage('pt')}
        aria-label="Selecionar idioma Português"
        className={`relative z-10 w-7 h-6 flex items-center justify-center transition-colors duration-300 cursor-pointer ${
          language === 'pt' ? 'font-bold text-slate-950' : 'font-medium text-slate-400 hover:text-white'
        }`}
      >
        PT
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label="Select English language"
        className={`relative z-10 w-7 h-6 flex items-center justify-center transition-colors duration-300 cursor-pointer ${
          language === 'en' ? 'font-bold text-slate-950' : 'font-medium text-slate-400 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};
