import Link from 'next/link'
import { getAllServices } from '@/lib/data'

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <div className="bg-[var(--color-ground)] min-h-screen">
      <section className="py-16 text-center" style={{ padding: '80px var(--margin)' }}>
        <h1 className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 500, lineHeight: 1, margin: 0, color: 'var(--color-ink)' }}>
          Our Services
        </h1>
        <p style={{ fontSize: '18px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginTop: '16px', maxWidth: '60ch', margin: '16px auto 0' }}>
          What we are best at — professional painting and home renovation services.
        </p>
      </section>

      <section style={{ padding: '0 var(--margin) 120px' }}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block"
              style={{ textDecoration: 'none' }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-surface)' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.85) contrast(1.05)' }}
                  loading="lazy"
                />
              </div>
              <div style={{ paddingTop: '16px' }}>
                <h2 className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 500, lineHeight: 1, margin: 0, color: 'var(--color-ink)' }}>
                  {service.title}
                </h2>
                <p style={{ fontSize: '15px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginTop: '8px', lineHeight: 1.5 }}>
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
