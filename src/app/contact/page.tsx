'use client'

import { useState } from 'react'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  address: z.string().min(5, 'Please enter your address'),
  service: z.string().optional(),
  message: z.string().optional(),
})

type ContactData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactData, string>>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const result = contactSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactData, string>> = {}
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as keyof ContactData] = err.message
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
      setFormData({ name: '', phone: '', email: '', address: '', service: '', message: '' })
    }, 4000)
  }

  const handleChange = (field: keyof ContactData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => { const next = { ...prev }; delete next[field]; return next })
    }
  }

  return (
    <div className="bg-[var(--color-ground)] min-h-screen">
      <section style={{ padding: '80px var(--margin) 40px', textAlign: 'center' }}>
        <h1 className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 500, lineHeight: 1, margin: 0, color: 'var(--color-ink)' }}>
          Contact Us
        </h1>
        <p style={{ fontSize: '18px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginTop: '16px' }}>
          Get a free quote — text us, call us, or fill out the form below.
        </p>
      </section>

      <section style={{ padding: '0 var(--margin) 120px', maxWidth: '800px', margin: '0 auto' }}>
        {submitted && (
          <div style={{ marginBottom: '24px', padding: '16px', background: 'var(--color-surface)', borderRadius: '8px', color: 'var(--color-ink)', fontFamily: 'var(--font-text)' }}>
            Thank you! We&apos;ve received your request and will get back to you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-ink)', marginBottom: '6px' }}>
              Full Name <span style={{ color: 'var(--color-accent)' }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              aria-invalid={!!errors.name}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--color-surface)',
                border: errors.name ? '1px solid #e04646' : '1px solid transparent',
                borderRadius: '8px',
                color: 'var(--color-ink)',
                fontFamily: 'var(--font-text)',
                fontSize: '16px',
              }}
            />
            {errors.name && <p style={{ fontSize: '13px', color: '#e04646', marginTop: '4px' }}>{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" style={{ display: 'block', fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-ink)', marginBottom: '6px' }}>
                Phone Number <span style={{ color: 'var(--color-accent)' }}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                aria-invalid={!!errors.phone}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--color-surface)',
                  border: errors.phone ? '1px solid #e04646' : '1px solid transparent',
                  borderRadius: '8px',
                  color: 'var(--color-ink)',
                  fontFamily: 'var(--font-text)',
                  fontSize: '16px',
                }}
              />
              {errors.phone && <p style={{ fontSize: '13px', color: '#e04646', marginTop: '4px' }}>{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-ink)', marginBottom: '6px' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                aria-invalid={!!errors.email}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--color-surface)',
                  border: errors.email ? '1px solid #e04646' : '1px solid transparent',
                  borderRadius: '8px',
                  color: 'var(--color-ink)',
                  fontFamily: 'var(--font-text)',
                  fontSize: '16px',
                }}
              />
              {errors.email && <p style={{ fontSize: '13px', color: '#e04646', marginTop: '4px' }}>{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="address" style={{ display: 'block', fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-ink)', marginBottom: '6px' }}>
              Address <span style={{ color: 'var(--color-accent)' }}>*</span>
            </label>
            <input
              type="text"
              id="address"
              required
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              aria-invalid={!!errors.address}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--color-surface)',
                border: errors.address ? '1px solid #e04646' : '1px solid transparent',
                borderRadius: '8px',
                color: 'var(--color-ink)',
                fontFamily: 'var(--font-text)',
                fontSize: '16px',
              }}
            />
            {errors.address && <p style={{ fontSize: '13px', color: '#e04646', marginTop: '4px' }}>{errors.address}</p>}
          </div>

          <div>
            <label htmlFor="service" style={{ display: 'block', fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-ink)', marginBottom: '6px' }}>
              Service
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => handleChange('service', e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--color-surface)',
                border: '1px solid transparent',
                borderRadius: '8px',
                color: 'var(--color-ink)',
                fontFamily: 'var(--font-text)',
                fontSize: '16px',
              }}
            >
              <option value="">Select a service</option>
              <option value="interior">Interior Painting</option>
              <option value="exterior">Exterior Painting</option>
              <option value="cabinet">Kitchen and Cabinet Refinishing</option>
              <option value="drywall">Drywall Repair</option>
              <option value="residential">Residential Painting</option>
              <option value="commercial">Commercial Painting</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" style={{ display: 'block', fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-ink)', marginBottom: '6px' }}>
              How can we help?
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'var(--color-surface)',
                border: '1px solid transparent',
                borderRadius: '8px',
                color: 'var(--color-ink)',
                fontFamily: 'var(--font-text)',
                fontSize: '16px',
                resize: 'vertical',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn"
            style={{ padding: '14px 32px', fontSize: '15px', opacity: submitting ? 0.6 : 1 }}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  )
}
