import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const code = `// 1) Install
npm i @ghostauth/js

// 2) Initialize (client)
import { GhostAuth } from '@ghostauth/js';

const auth = new GhostAuth({
  projectId: 'gho_12345',
});

// 3) Add a biometric login button
<button onClick={() => auth.signIn({ method: 'biometric' })}>
  Sign in with Face/Touch ID
</button>

// That's it—secure, passwordless auth in one line.`;

export default function CodeEmbed() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // no-op
    }
  };

  return (
    <section id="code" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">From zero to biometric in one line</h2>
            <p className="mt-3 text-white/70 max-w-prose">
              Drop in our SDK, call <span className="text-white">signIn</span>, and you’re done. No OTPs, no email loops—just native Face/Touch ID and WebAuthn passkeys.
            </p>
            <ul className="mt-6 space-y-2 text-white/70">
              <li>• Works with React, Next.js, Vue, and vanilla JS</li>
              <li>• Secure by default: WebAuthn + device-bound keys</li>
              <li>• Built-in session + token handling</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-fuchsia-500/30 blur-xl" />
            <div className="relative rounded-xl border border-white/10 bg-black/60">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/60" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/60" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/60" />
                </div>
                <button onClick={onCopy} className="inline-flex items-center gap-2 text-xs text-white/80 hover:text-white">
                  {copied ? (<><Check size={14} /> Copied</>) : (<><Copy size={14} /> Copy</>)}
                </button>
              </div>
              <pre className="overflow-auto p-4 text-sm leading-relaxed text-white/90">
                <code>{code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
