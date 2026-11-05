'use client'

import Image from 'next/image'

interface Room {
  name: string
  before: string
  after: string
  caption: string
}

const ROOMS: Room[] = [
  {
    name: 'Blue Tile Bathroom',
    before: '/projects/RosemaryNeedham/before/before-1.jpeg',
    after: '/projects/RosemaryNeedham/after/after-10.jpeg',
    caption: 'Bathroom · 2024',
  },
  {
    name: 'Hallway',
    before: '/projects/RosemaryNeedham/before/before-2.jpeg',
    after: '/projects/RosemaryNeedham/after/after-8.jpeg',
    caption: 'Hallway · 2024',
  },
  {
    name: 'Vaulted Bedroom',
    before: '/projects/RosemaryNeedham/before/before-3.jpeg',
    after: '/projects/RosemaryNeedham/after/after-11.jpeg',
    caption: 'Bedroom · 2024',
  },
]

export function WorkSeam() {
  const room = ROOMS[0]
  const travel = 20

  const onScroll = () => {
    const el = document.querySelector<HTMLElement>('.work__run')
    if (!el) return
    const rect = el.getBoundingClientRect()
    const total = rect.height - window.innerHeight
    const p = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)))
    const index = Math.min(ROOMS.length - 1, Math.floor(p * ROOMS.length))
    const room = ROOMS[index]
    const stage = document.querySelector<HTMLElement>('.seam')
    stage?.style.setProperty('--tl', `${travel * p}svh`)
    stage?.style.setProperty('--tr', `${-travel * p}svh`)
    document.querySelectorAll<HTMLElement>('.seam__room-name').forEach((el, i) => {
      el.style.opacity = i === index ? '1' : '0'
    })
  }

  return (
    <section className="work" aria-labelledby="selected-work">
      <div className="work__intro">
        <h2 id="selected-work" className="section-title">
          Selected work
        </h2>
        <p className="work__names">
          <a href="#work-1">Rosemary Needham</a> · <a href="#work-2">Sarah Johnson</a> ·{' '}
          <a href="#work-3">Emily Rodriguez</a> · <a href="#work-4">Michael Chen</a>
        </p>
      </div>

      <div className="work__run">
        <div className="seam" style={{ '--tl': '0svh', '--tr': '0svh' } as React.CSSProperties}>
          <span className="seam__label">The room before</span>
          <div className="seam__pane seam__pane--left">
            <Image
              src={room.before}
              alt="Room before the painting"
              fill
              className="seam__img"
              style={{ objectFit: 'cover', top: '-20%', height: '140%' }}
              sizes="50vw"
            />
          </div>
          <div className="seam__pane seam__pane--right">
            <Image
              src={room.after}
              alt="Room after the painting"
              fill
              className="seam__img"
              style={{ objectFit: 'cover', top: '-20%', height: '140%' }}
              sizes="50vw"
            />
          </div>
          <h2 className="seam__title">
            <span>Brush</span>
            <span>Pro</span>
          </h2>
          <div className="seam__meta">
            <span className="seam__room-name">Blue Tile Bathroom · 2024</span>
          </div>
        </div>
      </div>
    </section>
  )
}