import { ThemeProvider, useTheme } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeToggle } from './components/controls/ThemeToggle';
import { LangToggle } from './components/controls/LangToggle';

function PortfolioDemo() {
  const { theme } = useTheme();
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8">
      {/* Controles no topo */}
      <div className="flex items-center gap-3 bg-brand-card p-2 rounded-xl border border-brand-border">
        <ThemeToggle />
        <LangToggle />
      </div>

      {/* Card demonstrativo */}
      <div className="bg-brand-card border border-brand-border rounded-2xl p-8 max-w-md text-center space-y-4 glow-teal-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/25 text-brand-teal text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-brand-teal -ml-4 glow-teal-xs"></span>
          <span>{t.hero.badge}</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Ndonda Daniel Matondo<span className="text-brand-teal">.</span>
        </h1>
        <p className="text-sm text-brand-muted font-normal leading-relaxed">
          {t.hero.subtitle_p1} <strong className="text-slate-200">{t.hero.subtitle_bold}</strong> {t.hero.subtitle_p2}
        </p>

        <div className="pt-4 flex justify-center gap-4 text-xs font-mono text-slate-400">
          <div>Tema: <span className="text-brand-teal font-bold">{theme}</span></div>
          <div>•</div>
          <div>Idioma: <span className="text-brand-teal font-bold">{language.toUpperCase()}</span></div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioDemo />
      </LanguageProvider>
    </ThemeProvider>
  );
}
