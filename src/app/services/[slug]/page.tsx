import Link from 'next/link'
import { use } from 'react'
import { notFound } from 'next/navigation'
import { getService, getAllServices } from '@/lib/data'

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const service = getService(slug)

  if (!service) {
    notFound()
  }

  const related = getAllServices().filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <div className="bg-[var(--color-ground)] min-h-screen">
      <section style={{ padding: '80px var(--margin) 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <Link href="/services" style={{ color: 'var(--color-muted)', textDecoration: 'none', fontSize: '14px', fontFamily: 'var(--font-text)' }}>
          ← All services
        </Link>
        <h1 className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 500, lineHeight: 1, margin: '24px 0 0', color: 'var(--color-ink)' }}>
          {service.title}
        </h1>
        <p style={{ fontSize: '18px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginTop: '16px', maxWidth: '60ch', lineHeight: 1.6 }}>
          {service.longDescription}
        </p>
      </section>

      <section style={{ padding: '0 var(--margin) 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--color-surface)' }}>
          <img
            src={service.image}
            alt={service.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85) contrast(1.05)' }}
            loading="eager"
          />
        </div>
      </section>

      <section style={{ padding: '0 var(--margin) 120px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 500, lineHeight: 1, margin: '0 0 32px', color: 'var(--color-ink)' }}>
          Other services
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {related.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-surface)' }}>
                <img
                  src={s.image}
                  alt={s.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85) contrast(1.05)' }}
                  loading="lazy"
                />
              </div>
              <h3 className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 500, lineHeight: 1, margin: '12px 0 0', color: 'var(--color-ink)' }}>
                {s.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
