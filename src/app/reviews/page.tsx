import { getAllReviews, getAverageRating, getReviewCount } from '@/lib/data'

export default function ReviewsPage() {
  const reviews = getAllReviews()
  const avg = getAverageRating()
  const count = getReviewCount()

  return (
    <div className="bg-[var(--color-ground)] min-h-screen">
      <section style={{ padding: '80px var(--margin) 40px', textAlign: 'center' }}>
        <h1 className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 500, lineHeight: 1, margin: 0, color: 'var(--color-ink)' }}>
          Reviews
        </h1>
        <p style={{ fontSize: '18px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginTop: '16px' }}>
          {avg} stars · {count} reviews
        </p>
      </section>

      <section style={{ padding: '0 var(--margin) 120px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} style={{ padding: '24px', background: 'var(--color-surface)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} style={{ color: 'var(--color-accent)', fontSize: '18px' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '15px', fontFamily: 'var(--font-text)', color: 'var(--color-ink)', lineHeight: 1.6, margin: 0 }}>
                &ldquo;{review.text}&rdquo;
              </p>
              <p style={{ fontSize: '13px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginTop: '12px', margin: '12px 0 0' }}>
                {review.name} · {review.location}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
