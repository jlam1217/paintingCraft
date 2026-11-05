'use client'

import { useState } from 'react'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE, BUSINESS_ADDRESS } from '@/lib/constants'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const result = contactSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {}
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as keyof ContactFormData] = err.message
      })
      setErrors(fieldErrors)
      setSubmitting(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    setSubmitting(false)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 4000)
  }

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => { const next = { ...prev }; delete next[field]; return next })
    }
  }

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-[#FF5A5F] to-[#E04E52] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">Get in touch for a free consultation.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactForm
              formData={formData}
              onChange={handleChange}
              submitted={submitted}
              submitting={submitting}
              errors={errors}
              onSubmit={handleSubmit}
            />
            <ContactSidebar />
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactForm({
  formData,
  onChange,
  submitted,
  submitting,
  errors,
  onSubmit,
}: {
  formData: ContactFormData
  onChange: (field: keyof ContactFormData, value: string) => void
  submitted: boolean
  submitting: boolean
  errors: Partial<Record<keyof ContactFormData, string>>
  onSubmit: (e: React.FormEvent) => void
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#484848]">Send Us a Message</h2>
      {submitted && (
        <div className="mt-4 rounded-lg bg-green-50 p-4 text-green-700">
          Thank you! We&apos;ve received your message and will get back to you shortly.
        </div>
      )}
      <form onSubmit={onSubmit} className="mt-8 space-y-6" noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name <span className="text-[#FF5A5F]">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`mt-1 block w-full rounded-lg border px-4 py-3 ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#FF5A5F] focus:ring-[#FF5A5F]'
            }`}
          />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-[#FF5A5F]">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => onChange('email', e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={`mt-1 block w-full rounded-lg border px-4 py-3 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#FF5A5F] focus:ring-[#FF5A5F]'
              }`}
            />
            {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#FF5A5F] focus:ring-[#FF5A5F]"
            />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">
            Service
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => onChange('service', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#FF5A5F] focus:ring-[#FF5A5F]"
          >
            <option value="">Select a service</option>
            <option value="interior">Interior Painting</option>
            <option value="exterior">Exterior Painting</option>
            <option value="commercial">Commercial Painting</option>
            <option value="cabinet">Cabinet Refinishing</option>
            <option value="deck">Deck Staining</option>
            <option value="wallpaper">Wallpaper Removal</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message <span className="text-[#FF5A5F]">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => onChange('message', e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`mt-1 block w-full rounded-lg border px-4 py-3 ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-[#FF5A5F] focus:ring-[#FF5A5F]'
            }`}
          />
          {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={submitting}
          className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all ${
            submitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#FF5A5F] hover:bg-[#E04E52]'
          }`}
        >
          {submitting ? 'Sending...' : <><Send className="h-4 w-4" />Send Message</>}
        </button>
      </form>
    </div>
  )
}

function ContactSidebar() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#484848]">Contact Info</h2>
      <div className="mt-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF5A5F]/10 text-[#FF5A5F]">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-[#484848]">Phone</h3>
            <p className="text-gray-600">{CONTACT_PHONE}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF5A5F]/10 text-[#FF5A5F]">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-[#484848]">Email</h3>
            <p className="text-gray-600">{CONTACT_EMAIL}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF5A5F]/10 text-[#FF5A5F]">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-[#484848]">Address</h3>
            <p className="text-gray-600">{BUSINESS_ADDRESS}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
