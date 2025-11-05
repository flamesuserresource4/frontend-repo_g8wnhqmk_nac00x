import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.25),rgba(0,0,0,0))]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center md:px-6 md:py-28">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          <Star size={14} className="text-yellow-400" />
          New: AI-powered workflows just launched
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Build, launch, and scale your SaaS faster
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
          Modern tooling, beautiful components, and powerful analytics wrapped in a clean, minimal experience.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">
            Start for free
            <ArrowRight size={16} />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            Live demo
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/60">
          <div className="inline-flex items-center gap-2"><Shield size={16} className="text-emerald-400" /> SOC2-ready</div>
          <div className="inline-flex items-center gap-2"><Zap size={16} className="text-indigo-400" /> Blazing fast</div>
          <div className="inline-flex items-center gap-2"><Star size={16} className="text-yellow-400" /> Loved by teams</div>
        </div>
      </div>
    </section>
  );
}
