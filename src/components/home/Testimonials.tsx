'use client'

import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#484848] sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Don&apos;t just take our word for it. Hear from homeowners who transformed their spaces with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl bg-white p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-[#FF5A5F]/20" />

              <p className="mt-4 text-gray-600">{testimonial.content}</p>

              <div className="mt-6 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="mt-4 border-t border-gray-100 pt-4">
                <div className="font-semibold text-[#484848]">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
