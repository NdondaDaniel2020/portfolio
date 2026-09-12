import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ArticlesPage } from './pages/ArticlesPage';

function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-40 pb-24 text-center space-y-6">
      <div className="text-6xl font-extrabold font-mono text-brand-teal">404</div>
      <h1 className="text-2xl sm:text-3xl font-bold text-white">
        Página não encontrada
      </h1>
      <p className="text-brand-muted max-w-md mx-auto">
        O recurso solicitado não existe ou foi movido.
      </p>
      <div>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-teal text-slate-950 font-bold text-sm hover:bg-emerald-300 transition-all glow-teal-sm"
        >
          {t.nav.home}
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projetos" element={<ProjectsPage />} />
              <Route path="/artigos" element={<ArticlesPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
