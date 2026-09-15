import { Home, Building, Building2, CookingPot, TreePine, Layers, Check } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building,
  Building2,
  CookingPot,
  TreePine,
  Layers,
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF5A5F] to-[#E04E52] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Professional painting solutions for residential and commercial spaces.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon] || Home
              return (
                <div
                  key={service.id}
                  className="rounded-xl border border-gray-100 p-8 shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-[#FF5A5F]/10 text-[#FF5A5F]">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  <h2 className="text-xl font-bold text-[#484848]">{service.name}</h2>
                  <p className="mt-3 text-gray-600">{service.description}</p>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-600">
                        <Check className="h-4 w-4 text-[#00A699]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#F7F7F7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#484848]">Our Process</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              { step: '01', title: 'Consultation', desc: 'Free on-site assessment and color consultation' },
              { step: '02', title: 'Preparation', desc: 'Surface prep, priming, and protection of your space' },
              { step: '03', title: 'Painting', desc: 'Professional application with premium materials' },
              { step: '04', title: 'Completion', desc: 'Final inspection, cleanup, and satisfaction check' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5A5F] text-white font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#484848]">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}