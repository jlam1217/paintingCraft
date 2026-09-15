import { Shield, Award, Users, Clock } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-[#FF5A5F] to-[#E04E52] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">About BrushStroke Pro</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Transforming spaces with passion and precision since 2009.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#484848]">Our Story</h2>
          <p className="mt-6 text-lg text-gray-600">
            BrushStroke Pro was founded with a simple mission: to provide exceptional painting
            services that transform spaces and exceed expectations. With over 15 years of
            experience, we have completed more than 500 projects for residential and commercial
            clients across the region.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Our team of skilled professionals takes pride in every brushstroke, ensuring
            attention to detail and quality that lasts. We use premium materials and
            industry-leading techniques to deliver results that speak for themselves.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F7F7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#484848]">Why Choose Us</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: 'Licensed & Insured', desc: 'Full protection for your peace of mind' },
              { icon: Award, title: 'Quality Guarantee', desc: 'We stand behind every project we complete' },
              { icon: Users, title: 'Expert Team', desc: 'Professionally trained and certified painters' },
              { icon: Clock, title: 'On-Time Delivery', desc: 'We respect your schedule and deadlines' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FF5A5F]/10 text-[#FF5A5F]">
                  <item.icon className="h-7 w-7" />
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