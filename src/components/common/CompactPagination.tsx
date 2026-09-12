import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CompactPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  itemsPerPage?: number;
}

export const CompactPagination: React.FC<CompactPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
}) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const startItem = (currentPage - 1) * (itemsPerPage || 6) + 1;
  const endItem = Math.min(currentPage * (itemsPerPage || 6), totalItems || 0);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-brand-border/60">
      {/* Contagem técnica de itens */}
      {totalItems !== undefined && (
        <div className="text-xs font-mono text-slate-400">
          Mostrando <span className="text-brand-teal font-semibold">{startItem}–{endItem}</span> de <span className="text-white font-semibold">{totalItems}</span> projetos
        </div>
      )}

      {/* Controle Compacto: [ ← ] Página X de Y [ → ] */}
      <div className="flex items-center gap-3">
        {/* Botão Anterior [ ← ] */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentPage === 1}
          aria-label="Página anterior"
          className={`p-2.5 rounded-xl border font-mono text-xs flex items-center justify-center transition-all ${
            currentPage === 1
              ? 'border-brand-border/40 bg-brand-surface/40 text-slate-600 cursor-not-allowed'
              : 'border-brand-border bg-brand-card hover:bg-brand-surface hover:border-brand-teal/50 text-slate-300 hover:text-brand-teal cursor-pointer glow-teal-sm/0 hover:shadow-md'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Indicador de Página */}
        <div className="px-4 py-2 rounded-xl bg-brand-card border border-brand-border font-mono text-xs text-slate-300 flex items-center gap-1.5 shadow-inner">
          <span className="text-slate-400">Página</span>
          <span className="text-brand-teal font-bold">{currentPage}</span>
          <span className="text-slate-500">de</span>
          <span className="text-white font-semibold">{totalPages}</span>
        </div>

        {/* Botão Próximo [ → ] */}
        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
          className={`p-2.5 rounded-xl border font-mono text-xs flex items-center justify-center transition-all ${
            currentPage === totalPages
              ? 'border-brand-border/40 bg-brand-surface/40 text-slate-600 cursor-not-allowed'
              : 'border-brand-border bg-brand-card hover:bg-brand-surface hover:border-brand-teal/50 text-slate-300 hover:text-brand-teal cursor-pointer glow-teal-sm/0 hover:shadow-md'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
