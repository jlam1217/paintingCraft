import { Check } from 'lucide-react'
import { PRICING_TIERS } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF5A5F] to-[#E04E52] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Transparent Pricing</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Simple, honest pricing for every project. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'border-2 border-[#FF5A5F] bg-white shadow-xl'
                    : 'border border-gray-200 bg-white shadow-sm'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FF5A5F] px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#484848]">{tier.name}</h3>
                <p className="mt-2 text-gray-600">{tier.description}</p>

                <div className="mt-6">
                  <span className="text-4xl font-bold text-[#484848]">
                    {formatCurrency(tier.price)}
                  </span>
                  <span className="text-gray-600">+</span>
                </div>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#00A699]" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-lg py-3 font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-[#FF5A5F] text-white hover:bg-[#E04E52]'
                      : 'border-2 border-[#FF5A5F] text-[#FF5A5F] hover:bg-[#FF5A5F] hover:text-white'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-600">
              Need a custom quote? <a href="/contact" className="text-[#FF5A5F] font-semibold hover:underline">Contact us</a> for a free estimate.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F7F7F7] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#484848]">Frequently Asked Questions</h2>
          <div className="mt-12 space-y-6">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Most residential projects are completed in 1-3 days, depending on the scope and size.',
              },
              {
                q: 'Do you provide free estimates?',
                a: 'Yes! We offer free, no-obligation estimates for all projects.',
              },
              {
                q: 'What kind of paint do you use?',
                a: 'We use premium, low-VOC paints from trusted brands for a durable, beautiful finish.',
              },
              {
                q: 'Are you licensed and insured?',
                a: 'Absolutely. We are fully licensed and carry comprehensive insurance for your protection.',
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#484848]">{item.q}</h3>
                <p className="mt-2 text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}