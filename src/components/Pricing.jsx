import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    highlight: false,
    description: 'Everything you need to try the platform.',
    features: [
      'Up to 3 projects',
      'Basic analytics',
      'Community support',
    ],
    cta: 'Get started',
  },
  {
    name: 'Pro',
    price: '$19/mo',
    highlight: true,
    description: 'Advanced features for growing teams.',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Email support',
      'Custom domains',
    ],
    cta: 'Start 14‑day trial',
  },
  {
    name: 'Business',
    price: '$49/mo',
    highlight: false,
    description: 'Collaboration and security at scale.',
    features: [
      'Everything in Pro',
      'SAML SSO',
      'Audit logs',
      'Priority support',
    ],
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 bg-gradient-to-b from-black to-zinc-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose the plan that fits your team today — upgrade anytime.</p>
        </div>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border ${tier.highlight ? 'border-indigo-400/30 bg-gradient-to-b from-indigo-500/10 to-transparent' : 'border-white/10 bg-white/5'} p-6 transition hover:translate-y-[-2px] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]`}
            >
              {tier.highlight && (
                <div className="absolute right-4 top-4 rounded-full bg-indigo-500/20 px-2 py-1 text-xs font-medium text-indigo-200">
                  Most popular
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium text-white">{tier.name}</h3>
                <div className="text-2xl font-semibold text-white">{tier.price}</div>
              </div>
              <p className="mt-2 text-sm text-white/70">{tier.description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/80">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20">
                      <Check size={14} className="text-emerald-400" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-md px-4 py-2 text-sm font-medium ${tier.highlight ? 'bg-white text-black hover:bg-white/90' : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'}`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/50">No credit card required • Cancel anytime</p>
      </div>
    </section>
  );
}
