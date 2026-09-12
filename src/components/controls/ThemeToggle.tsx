import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  id?: string;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ id = "theme-toggle", className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id={id}
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? "Ativar modo claro" : "Ativar modo escuro"}
      className={`p-2 rounded-lg border border-brand-border bg-brand-surface/70 hover:border-brand-teal text-slate-300 hover:text-brand-teal transition-all flex items-center justify-center cursor-pointer ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-300 hover:text-brand-teal transition-colors" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 hover:text-brand-teal transition-colors" />
      )}
    </button>
  );
};
