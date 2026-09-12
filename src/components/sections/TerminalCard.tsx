import React from 'react';

export const TerminalCard: React.FC = () => {
  return (
    <div className="lg:col-span-5" data-purpose="hero-visual-card">
      <div className="rounded-2xl bg-brand-card border border-brand-border p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-brand-border/70 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/90 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#10B981]/90 inline-block"></span>
          </div>
          <span className="text-xs font-mono text-slate-400">arch_engine.py</span>
        </div>

        {/* Code Snippet Body */}
        <div className="font-mono text-xs sm:text-[13px] text-slate-300 leading-relaxed space-y-2 py-2">
          <p>
            <span className="text-brand-teal">async def</span>{' '}
            <span className="text-sky-300">init_pipeline</span>():
          </p>
          <p className="pl-4 text-slate-400">
            db = <span className="text-brand-teal">await</span> pool.
            <span className="text-sky-300">acquire</span>()
          </p>
          <p className="pl-4 text-slate-400">
            pipeline = <span className="text-sky-300">FastAPI</span>.serve(workers=
            <span className="text-amber-300">4</span>)
          </p>
          <p className="pl-4">
            <span className="text-brand-teal">return</span> pipeline.
            <span className="text-sky-300">dispatch</span>(mode=
            <span className="text-emerald-300">"async_io"</span>)
          </p>
        </div>

        {/* Interactive Visualization Card inside terminal */}
        <div className="mt-6 p-4 rounded-xl bg-brand-dark/90 border border-brand-border/90 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="text-slate-300">Throughput Conc.</span>
            <span className="text-brand-teal font-medium">9.840 req/s</span>
          </div>
          {/* Progress bars visualization */}
          <div className="grid grid-cols-6 gap-1.5 h-12 items-end pt-1">
            <div className="bg-brand-teal/40 hover:bg-brand-teal h-6 rounded-t transition-all cursor-pointer"></div>
            <div className="bg-brand-teal/60 hover:bg-brand-teal h-9 rounded-t transition-all cursor-pointer"></div>
            <div className="bg-brand-teal hover:bg-brand-teal h-12 rounded-t transition-all cursor-pointer"></div>
            <div className="bg-brand-teal/80 hover:bg-brand-teal h-10 rounded-t transition-all cursor-pointer"></div>
            <div className="bg-brand-teal/50 hover:bg-brand-teal h-7 rounded-t transition-all cursor-pointer"></div>
            <div className="bg-brand-teal/90 hover:bg-brand-teal h-11 rounded-t transition-all cursor-pointer"></div>
          </div>
        </div>

        {/* Operational Status Footer */}
        <div className="mt-5 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs font-mono text-brand-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-teal glow-teal-xs"></span>
            <span className="text-slate-300 font-medium">System: Operational</span>
          </div>
          <span className="text-slate-400">v2.4.0 • 99.9% uptime</span>
        </div>
      </div>
    </div>
  );
};
