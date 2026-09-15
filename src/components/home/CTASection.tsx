'use client'

import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { CONTACT_PHONE } from '@/lib/constants'

export function CTASection() {
  return (
    <section className="bg-[#484848] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Space?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-gray-300">
              Get a free, no-obligation quote today. Our experts are ready to help you
              choose the perfect colors and finish for your project.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FF5A5F] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#E04E52] hover:shadow-xl"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}