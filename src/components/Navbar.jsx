import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-cyan-500 to-indigo-500">
              <Rocket size={18} className="text-white" />
            </span>
            <span className="font-semibold tracking-tight">GhostAuth</span>
          </a>
          <nav className="flex items-center gap-2">
            <a href="#features" className="hidden sm:inline-flex px-3 py-2 text-sm text-white/80 hover:text-white">Features</a>
            <a href="#code" className="hidden sm:inline-flex px-3 py-2 text-sm text-white/80 hover:text-white">Code</a>
            <a href="#trust" className="hidden sm:inline-flex px-3 py-2 text-sm text-white/80 hover:text-white">Trust</a>
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90"
            >
              Get Access
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
