'use client'

import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FF5A5F] to-[#E04E52] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-sm font-medium">Rated 5/5 by 200+ homeowners</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Transform Your Space with Professional Painting
            </h1>

            <p className="mt-6 max-w-lg text-lg text-white/90">
              Expert interior and exterior painting services. We bring color to life with
              precision, quality, and care that exceeds expectations.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#FF5A5F] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
              >
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/20 pt-8">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-white/80">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-white/20">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl">🎨</div>
                    <p className="mt-4 text-lg font-medium">Your Dream Space Awaits</p>
                    <p className="text-sm text-white/70">Before & After Transformations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
