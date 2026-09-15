'use client'

import Link from 'next/link'
import { Home, Building, Building2, CookingPot, TreePine, Layers, ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building,
  Building2,
  CookingPot,
  TreePine,
  Layers,
}

export function FeaturedServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#484848] sm:text-4xl">
            Our Professional Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            From interior makeovers to commercial projects, we deliver exceptional results
            with attention to every detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Home
            return (
              <div
                key={service.id}
                className="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:border-[#FF5A5F]/20 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF5A5F]/10 text-[#FF5A5F]">
                  <IconComponent className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-semibold text-[#484848]">{service.name}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>

                <ul className="mt-4 space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <span className="mr-2 text-[#00A699]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-[#FF5A5F] transition-colors hover:text-[#E04E52]"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
