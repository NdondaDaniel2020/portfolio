export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-brand-card border border-brand-border rounded-2xl p-8 max-w-md text-center space-y-4 glow-teal-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/25 text-brand-teal text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-brand-teal -ml-4 glow-teal-xs"></span>
          <span>SETUP VITE + REACT + TS + TAILWIND</span>
        </div>
        <h1 className="text-2xl font-extrabold text-white">
          Ndonda Daniel Matondo<span className="text-brand-teal">.</span>
        </h1>
        <p className="text-sm text-brand-muted font-mono">
          Ambiente base configurado com sucesso!
        </p>
      </div>
    </div>
  )
}
