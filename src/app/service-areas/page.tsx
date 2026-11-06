import { getAllServiceAreas } from '@/lib/data'

export default function ServiceAreasPage() {
  const areas = getAllServiceAreas()

  return (
    <div className="bg-[var(--color-ground)] min-h-screen">
      <section style={{ padding: '80px var(--margin) 40px', textAlign: 'center' }}>
        <h1 className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 500, lineHeight: 1, margin: 0, color: 'var(--color-ink)' }}>
          Areas We Serve
        </h1>
        <p style={{ fontSize: '18px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginTop: '16px' }}>
          Professional painting services across Greater Boston and surrounding communities.
        </p>
      </section>

      <section style={{ padding: '0 var(--margin) 120px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {areas.map((area) => (
            <div
              key={area.slug}
              style={{
                padding: '16px',
                background: 'var(--color-surface)',
                borderRadius: '8px',
                textAlign: 'center',
              }}
            >
              <p className="font-display" style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-ink)', margin: 0 }}>
                {area.name}
              </p>
              <p style={{ fontSize: '13px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', margin: '4px 0 0' }}>
                {area.state}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
