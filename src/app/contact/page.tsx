'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_PHONE, BUSINESS_ADDRESS } from '@/lib/constants'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
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
            <ContactForm formData={formData} setFormData={setFormData} submitted={submitted} handleSubmit={handleSubmit} />
            <ContactSidebar />
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactForm({ formData, setFormData, submitted, handleSubmit }: {
  formData: { name: string; email: string; phone: string; service: string; message: string }
  setFormData: (data: typeof formData) => void
  submitted: boolean
  handleSubmit: (e: React.FormEvent) => void
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#484848]">Send Us a Message</h2>
      {submitted && <div className="mt-4 rounded-lg bg-green-50 p-4 text-green-700">Thank you!</div>}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
            <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3" />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
          <select id="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3">
            <option value="">Select a service</option>
            <option value="interior">Interior Painting</option>
            <option value="exterior">Exterior Painting</option>
            <option value="commercial">Commercial Painting</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
          <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3" />
        </div>
        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#FF5A5F] px-6 py-3 font-semibold text-white hover:bg-[#E04E52]">
          <Send className="h-4 w-4" />Send Message
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
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF5A5F]/10 text-[#FF5A5F]"><Phone className="h-6 w-6" /></div>
          <div><h3 className="font-semibold text-[#484848]">Phone</h3><p className="text-gray-600">{CONTACT_PHONE}</p></div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF5A5F]/10 text-[#FF5A5F]"><Mail className="h-6 w-6" /></div>
          <div><h3 className="font-semibold text-[#484848]">Email</h3><p className="text-gray-600">{CONTACT_EMAIL}</p></div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FF5A5F]/10 text-[#FF5A5F]"><MapPin className="h-6 w-6" /></div>
          <div><h3 className="font-semibold text-[#484848]">Address</h3><p className="text-gray-600">{BUSINESS_ADDRESS}</p></div>
        </div>
      </div>
    </div>
  )
}