'use client'

import Image from 'next/image'

export function PinnedStage() {
  const stats = [
    {
      figure: '500+',
      caption: 'Completed across the region · 2024',
      support: 'Interior & exterior painting since 2009.',
      action: 'Get a free quote',
    },
    {
      figure: '200+',
      caption: 'Five-star reviews',
      support: '',
      action: '',
    },
    {
      figure: '15',
      caption: 'Years in business',
      support: '',
      action: '',
    },
  ]

  return (
    <section className="stage" aria-labelledby="brushstroke-pro">
      {/* Sticky layer: paper field (cols 1–9) + archival strip (cols 10–12) + split name */}
      <div className="stage__pins">
        <div className="frame grid12">
          {/* Paper field: columns 1–9 */}
          <div className="screen__panel" style={{ gridColumn: '1 / span 9' }} aria-hidden="true" />

          {/* Archival strip: columns 10–12, top → 9.5rem from bottom */}
          <div
            className="screen__photo"
            style={{ gridColumn: '10 / span 3', top: 0, bottom: '9.5rem' }}
            aria-hidden="true"
          >
            <Image
              src="/assets/painter-paints-a-room-arp.jpg"
              alt=""
              fill
              sizes="calc((100% - 11 * var(--gutter)) * 0.25 + 0.5 * var(--margin) - 0.75 * var(--gutter))"
              priority
            />
          </div>

          {/* Split name: BrushStroke (top-left) / Pro (bottom-right) */}
          <h1 id="brushstroke-pro" className="pin pin--tl">
            BrushStroke
          </h1>
          <p className="pin pin--br">Pro</p>
        </div>
      </div>

      {/* Screens: three stat screens that overlap the sticky layer */}
      <div className="stage__screens">
        {stats.map((stat, i) => (
          <article key={i} className="screen">
            {/* Panel: columns 1–9 */}
            <div className="screen__panel" style={{ gridColumn: '1 / span 9' }} aria-hidden="true" />

            {/* Archival photo: columns 10–12 */}
            <div className="screen__photo" style={{ gridColumn: '10 / span 3' }} aria-hidden="true">
              <Image
                src={
                  i === 0
                    ? '/assets/paint-brushes-30804.jpg'
                    : i === 1
                    ? '/assets/tray-brush-roller-paint-4116925693.jpg'
                    : '/assets/four-designs-for-painted-borders-to-decorate.jpg'
                }
                alt=""
                fill
                sizes="calc((100% - 11 * var(--gutter)) * 0.5 * var(--margin))"
              />
            </div>

            {i === 0 ? (
              <>
                {/* Lead copy + action: columns 3–7 */}
                <div className="screen__lead" style={{ gridColumn: '3 / span 4' }}>
                  {stat.support && <p>{stat.support}</p>}
                  <div className="screen__links">
                    <a href="#contact" className="btn">
                      {stat.action}
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Claim: columns 1–6 */}
                <div
                  className="screen__claim"
                  style={{ gridColumn: '1 / span 6' }}
                >
                  {i === 1 ? 'Every room, every detail.' : 'Built to last.'}
                </div>
              </>
            )}

            {/* Figure + caption: columns 7–9 */}
            <div style={{ gridColumn: '7 / span 3', alignSelf: 'end' }}>
              <p className="screen__figure">{stat.figure}</p>
              <p className="screen__caption">{stat.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}