import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 space-y-32">
        <HeroSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HomePage />
      </LanguageProvider>
    </ThemeProvider>
  );
}
