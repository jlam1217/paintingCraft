'use client'

import { useState } from 'react'
import { getAllFaqs } from '@/lib/data'

export default function FaqPage() {
  const faqs = getAllFaqs()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="bg-[var(--color-ground)] min-h-screen">
      <section style={{ padding: '80px var(--margin) 40px', textAlign: 'center' }}>
        <h1 className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 500, lineHeight: 1, margin: 0, color: 'var(--color-ink)' }}>
          Frequently Asked Questions
        </h1>
      </section>

      <section style={{ padding: '0 var(--margin) 120px', maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid var(--color-surface)', padding: '20px 0' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <span className="font-display" style={{ fontSize: 'clamp(16px, 1.6vw, 20px)', fontWeight: 500, color: 'var(--color-ink)', lineHeight: 1.3 }}>
                {faq.question}
              </span>
              <span style={{ color: 'var(--color-accent)', fontSize: '24px', flexShrink: 0 }}>
                {open === i ? '−' : '+'}
              </span>
            </button>
            {open === i && (
              <p style={{ fontSize: '16px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', lineHeight: 1.6, marginTop: '12px', marginBottom: 0 }}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}
