import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Passwordless biometrics • Dev-first • 1 line of code
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Auth that disappears.
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-prose">
              Ship frictionless sign-in with passkeys and biometrics in minutes. Stronger than passwords, easier than magic links, built for modern stacks.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a className="inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90" href="#code">Start in 60 seconds</a>
              <a className="inline-flex items-center justify-center rounded-md border border-white/15 px-4 py-2 text-white/90 hover:bg-white/5" href="#trust">Why security teams love us</a>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[560px] xl:h-[640px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
