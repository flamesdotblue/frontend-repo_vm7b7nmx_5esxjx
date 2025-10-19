export default function TrustSection() {
  return (
    <section id="trust" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-4xl font-semibold text-white">99.99%</div>
            <div className="mt-1 text-white/70">Uptime SLA</div>
            <p className="mt-3 text-sm text-white/60">Global edge, automatic failover, and multi-region signing services.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-4xl font-semibold text-white">SOC 2</div>
            <div className="mt-1 text-white/70">Type II readiness</div>
            <p className="mt-3 text-sm text-white/60">Least-privilege design and continuous monitoring by third parties.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="text-4xl font-semibold text-white">OWASP ✦</div>
            <div className="mt-1 text-white/70">Best practices</div>
            <p className="mt-3 text-sm text-white/60">Standards-aligned flows and cryptography baked into the SDK.</p>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
          <blockquote className="text-white/90 text-lg md:text-xl max-w-3xl">
            “We replaced magic links and passwords in a day. Sign-ups went up, support tickets went down, and our security team slept better.”
          </blockquote>
          <div className="mt-3 text-white/60">— CTO, Series A fintech</div>
        </div>
      </div>
    </section>
  );
}
