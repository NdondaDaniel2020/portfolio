import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const LangToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`relative inline-flex items-center p-1 rounded-lg border border-brand-border bg-brand-surface/70 font-mono text-xs select-none ${className}`}
      aria-label="Seletor de idioma"
    >
      {/* Pílula deslizante com animação suave */}
      <span
        className={`absolute top-1 bottom-1 w-7 rounded bg-brand-teal transition-transform duration-300 ease-out shadow-sm pointer-events-none ${
          language === 'en' ? 'translate-x-[28px]' : 'translate-x-0'
        }`}
        style={{ left: '4px' }}
      />

      {/* Botão PT */}
      <button
        type="button"
        onClick={() => setLanguage('pt')}
        className={`relative z-10 w-7 h-6 flex items-center justify-center transition-colors duration-200 ${
          language === 'pt' ? 'font-bold text-slate-950' : 'font-medium text-slate-400 hover:text-slate-200'
        }`}
      >
        PT
      </button>

      {/* Botão EN */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`relative z-10 w-7 h-6 flex items-center justify-center transition-colors duration-200 ${
          language === 'en' ? 'font-bold text-slate-950' : 'font-medium text-slate-400 hover:text-slate-200'
        }`}
      >
        EN
      </button>
    </div>
  );
};
