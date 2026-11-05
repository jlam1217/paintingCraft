'use client'

import Image from 'next/image'

export function LastPhotograph() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <figure className="cta__photo">
        <Image
          src="/assets/four-designs-for-painted-borders-to-decorate.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </figure>
      <div className="cta__text">
        <h2 id="cta-title">Every surface, done right.</h2>
        <p>
          Free on-site colour consultation. No obligation.
        </p>
        <a href="#contact" className="btn btn--light">
          Book now
        </a>
      </div>
    </section>
  )
}