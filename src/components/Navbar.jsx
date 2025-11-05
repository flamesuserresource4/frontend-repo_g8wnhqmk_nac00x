import { Rocket, User, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="group inline-flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-white group-hover:opacity-90">Flux SaaS</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm text-white/80 hover:text-white md:inline-flex">
            <User size={16} />
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">
            Get started
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
