import React, { useState } from 'react';
import { Terminal, Play, CheckCircle2, Cpu, HardDrive, ShieldCheck } from 'lucide-react';

export const TerminalCard: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'sys' | 'bench'>('sys');

  const handleSimulate = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 1200);
  };

  return (
    <div
      data-purpose="hero-visual-card"
      className="tech-terminal w-full rounded-2xl border border-brand-border bg-brand-card p-4 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm"
    >
      {/* Barra de controle da janela do terminal */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-border/60">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 font-mono text-xs text-slate-400">arch_engine.py — ndonda@workspace</span>
        </div>

        {/* Abas */}
        <div className="flex items-center gap-1 bg-brand-surface rounded-lg p-1 border border-brand-border/50 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('sys')}
            className={`px-2 py-0.5 rounded ${activeTab === 'sys' ? 'bg-brand-teal/20 text-brand-teal' : 'text-slate-400'}`}
          >
            sys_metrics
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('bench')}
            className={`px-2 py-0.5 rounded ${activeTab === 'bench' ? 'bg-brand-teal/20 text-brand-teal' : 'text-slate-400'}`}
          >
            benchmark
          </button>
        </div>
      </div>

      {/* Conteúdo técnico simulado */}
      <div className="font-mono text-xs sm:text-sm space-y-3">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal className="w-4 h-4 text-brand-teal shrink-0" />
          <span className="text-brand-teal">$</span>
          <span className="text-slate-200">python3 -m engine --verify-resilience --verbose</span>
        </div>

        {activeTab === 'sys' ? (
          <div className="space-y-2 text-slate-300">
            <div className="p-2.5 rounded-lg bg-[#070B0D]/80 border border-brand-border/40 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Cpu className="w-3.5 h-3.5 text-brand-teal" /> Concorrência POSIX:
                </span>
                <span className="text-emerald-400 font-semibold">4 Workers / 0 Race Conditions</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <HardDrive className="w-3.5 h-3.5 text-brand-teal" /> Memory Safety:
                </span>
                <span className="text-emerald-400 font-semibold">Valgrind Clean (0 Leaks)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-teal" /> CI/CD Automation:
                </span>
                <span className="text-brand-teal font-semibold">Scheduled Cron 03:00 UTC</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pipeline estática compilada com sucesso em CDN global.</span>
            </div>
          </div>
        ) : (
          <div className="p-2.5 rounded-lg bg-[#070B0D]/80 border border-brand-border/40 text-xs space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">FastAPI Throughput:</span>
              <span className="text-brand-teal font-semibold">12,450 req/sec</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">P99 Latency:</span>
              <span className="text-emerald-400 font-semibold">1.8 ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Static Payload:</span>
              <span className="text-brand-teal font-semibold">0ms external runtime wait</span>
            </div>
          </div>
        )}

        {/* Botão de simulação interativo */}
        <div className="pt-2 flex items-center justify-between">
          <button
            type="button"
            onClick={handleSimulate}
            disabled={isRunning}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-teal/15 hover:bg-brand-teal/25 text-brand-teal border border-brand-teal/30 text-xs font-semibold transition-all cursor-pointer"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            {isRunning ? 'Executando benchmark...' : 'Executar simulação'}
          </button>

          <span className="text-[11px] text-slate-500">Kernel: Linux 6.x POSIX Compliant</span>
        </div>
      </div>
    </div>
  );
};
