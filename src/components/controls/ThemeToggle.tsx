import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Alternar tema claro/noturno"
      className={`p-2 rounded-lg border border-brand-border bg-brand-surface/70 hover:border-brand-teal text-slate-300 hover:text-brand-teal transition-all flex items-center justify-center ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-brand-teal animate-fade-in" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 animate-fade-in" />
      )}
    </button>
  );
};
