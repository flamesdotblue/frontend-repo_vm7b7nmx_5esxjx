import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeEmbed from './components/CodeEmbed';
import TrustSection from './components/TrustSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="features" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                title="Biometric-first"
                desc="Native Face/Touch ID and passkeys via WebAuthn across devices and platforms."
              />
              <FeatureCard
                title="One-line SDK"
                desc="Drop-in client with sane defaults, token handling, and secure sessions."
              />
              <FeatureCard
                title="Privacy by design"
                desc="Device-bound keys, no passwords to leak, and no sensitive data stored."
              />
            </div>
          </div>
        </section>
        <CodeEmbed />
        <TrustSection />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} GhostAuth, Inc.</p>
          <div className="text-white/60 text-sm">Auth that disappears.</div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(200px_200px_at_0%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}
