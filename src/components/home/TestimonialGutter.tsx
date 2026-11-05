'use client'

import Image from 'next/image'

interface Quote {
  text: string
  author: string
  role: string
  photo: string
  position: 'right' | 'left' | 'lower'
}

const QUOTES: Quote[] = [
  {
    text: 'They transformed our living room – attention to detail is incredible.',
    author: 'Sarah Johnson',
    role: 'Homeowner',
    photo: '/assets/paint-roller-23956075297.jpg',
    position: 'right',
  },
  {
    text: 'Professional, efficient, and the results exceeded our expectations.',
    author: 'Michael Chen',
    role: 'Business Owner',
    photo: '/assets/tray-brush-roller-paint-4116925693.jpg',
    position: 'left',
  },
  {
    text: 'Their work quality and reliability are unmatched in the industry.',
    author: 'Emily Rodriguez',
    role: 'Interior Designer',
    photo: '/assets/paint-brushes-30804.jpg',
    position: 'lower',
  },
]

export function TestimonialGutter() {
  return (
    <section className="voices__run" aria-labelledby="voices-title">
      <div className="voices">
        <h2 id="voices-title" className="voices__title">
          What clients say
        </h2>
        <figure className="voices__photo">
          <Image
            src="/assets/painter-paints-a-room-arp.jpg"
            alt=""
            fill
            sizes="min(30vw, 26rem)"
            priority
          />
        </figure>
        {QUOTES.map((q, i) => (
          <blockquote
            key={i}
            className={`voices__quote voices__quote--${q.position}`}
          >
            <p>{q.text}</p>
            <cite className="voices__name">
              {q.author}, {q.role}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  )
}