import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

function LayoutDemo() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 flex-1 flex flex-col items-center justify-center">
        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 max-w-xl text-center space-y-6 glow-teal-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/25 text-brand-teal text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-brand-teal -ml-4 glow-teal-xs"></span>
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {t.hero.headline_p1} <br />
            {t.hero.headline_p2} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-emerald-400">
              {t.hero.headline_p3}
            </span>
          </h1>

          <p className="text-base text-brand-muted max-w-md mx-auto leading-relaxed">
            {t.hero.subtitle_p1} <strong className="text-slate-200 font-semibold">{t.hero.subtitle_bold}</strong> {t.hero.subtitle_p2}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LayoutDemo />
      </LanguageProvider>
    </ThemeProvider>
  );
}
