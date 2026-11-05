'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { Header } from '@/components/layout/Header'
import { getProject } from '@/lib/projects'

const project = getProject('RosemaryNeedham')

const AFTER_IMAGES = (project?.pairs ?? []).map((p) => p.after).filter(Boolean)

function CrossfadePrint({ alt }: { alt: string }) {
  const [showing, setShowing] = useState(0)
  const [nextSrc, setNextSrc] = useState<string | null>(null)

  useEffect(() => {
    if (AFTER_IMAGES.length < 2) return
    let idx = showing
    const timer = setInterval(() => {
      const next = (idx + 1) % AFTER_IMAGES.length
      setNextSrc(AFTER_IMAGES[next])
      // crossfade: reveal next, then swap
      setTimeout(() => {
        setShowing(next)
        setNextSrc(null)
      }, 900)
      idx = next
    }, 2500)
    return () => clearInterval(timer)
  }, [showing])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {AFTER_IMAGES.length > 0 && (
        <img
          src={AFTER_IMAGES[showing]}
          alt={alt}
          style={{
            width: '100%', height: 'auto', objectFit: 'cover', display: 'block',
            opacity: 1, transition: 'opacity 1.6s ease',
            position: 'absolute', inset: 0,
          }}
          loading="eager"
          decoding="sync"
        />
      )}
      {nextSrc && (
        <img
          src={nextSrc}
          alt={alt}
          style={{
            width: '100%', height: 'auto', objectFit: 'cover', display: 'block',
            opacity: 0, transition: 'opacity 1.6s ease',
            position: 'absolute', inset: 0,
          }}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  )
}

function Hero() {
  return (
    <section className="relative" style={{ height: '100svh', width: '100%' }}>
      <nav className="absolute top-0 left-0 right-0 z-20" style={{ padding: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span className="font-display font-bold uppercase tracking-tight" style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', color: 'var(--color-ink)' }}>Brush<span style={{ color: 'var(--color-accent)' }}>Stroke</span> Pro</span>
          <nav style={{ display: 'flex', gap: '24px' }}>
            <a href="#work" className="section-link" style={{ fontSize: 'clamp(13px, 1vw, 14px)' }}>Work</a>
            <a href="#services" className="section-link" style={{ fontSize: 'clamp(13px, 1vw, 14px)' }}>Services</a>
            <a href="#contact" className="section-link" style={{ fontSize: 'clamp(13px, 1vw, 14px)' }}>Contact</a>
          </nav>
        </div>
        <a href="#contact" className="btn" style={{ padding: '10px 22px', fontSize: '13px' }}>Get a quote</a>
      </nav>

      <div className="absolute inset-0 z-0" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0' }}>
        <div style={{ gridColumn: '6 / 10', position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '14vh' }}>
          <CrossfadePrint alt="Finished room" />
        </div>
        <div className="hidden lg:block" style={{ gridColumn: '2 / 4', position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '52vh' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={project?.pairs?.[2]?.after ?? '/assets/paint-brushes-30804.jpg'}
              alt="Finished bedroom"
              style={{ width: '100%', height: 'auto', objectFit: 'cover', filter: 'brightness(0.55) contrast(1.05)', display: 'block' }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-10" style={{ padding: '30px', width: '100%', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0' }}>
        <div style={{ gridColumn: '1 / 13' }}>
          <h1 className="font-display uppercase tracking-tight leading-tight entrance" style={{ fontSize: 'clamp(28px, 2.5vw, 40px)', fontWeight: 500, lineHeight: 1, margin: 0, color: 'var(--color-ink)' }}>
            Interiors transformed
          </h1>
        </div>
        <div style={{ gridColumn: '1 / 13', marginTop: '12px', display: 'flex', alignItems: 'end', justifyContent: 'flex-start', paddingBottom: '6px' }}>
          <p className="entrance" style={{ fontSize: '16px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', maxWidth: '24ch', margin: 0, lineHeight: 1.5 }}>Rooms lit from shadow.</p>
        </div>
      </div>
    </section>
  )
}

function useSectionEntrance() {
  const observer = useRef<IntersectionObserver | null>(null)
  const observe = useCallback((el: Element) => {
    if (!el) return
    const visible: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.current?.unobserve(el)
        }
      })
    }
    observer.current = new IntersectionObserver(visible, { threshold: 0.12, rootMargin: '-8% 0px' })
    observer.current.observe(el)
  }, [])
  return observe
}

export function HomeClient() {
  const [active, setActive] = useState(0)
  const [activeStmt, setActiveStmt] = useState(0)
  const observeSection = useSectionEntrance()

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStmt((i) => (i + 1) % 5)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.entrance').forEach((el) => observeSection(el))
  }, [observeSection])

  return (
    <main className="flex-1">
      <Header />
      <Hero />

      {/* Section 1: intro — right-half paragraph, lone photo */}
      <section id="intro" className="relative" style={{ padding: '160px var(--margin)', minHeight: '100svh', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gutter)' }}>
        <div className="hidden lg:block" style={{ gridColumn: '1 / 4', position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={project?.pairs?.[0]?.before ?? '/assets/paint-brushes-30804.jpg'}
            alt="Room before painting"
            style={{ width: '20vw', height: 'auto', aspectRatio: '1/1', objectFit: 'cover', filter: 'brightness(0.7) contrast(1.05)', display: 'block' }}
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-6" style={{ gridColumn: '7 / 13', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '18vh' }}>
          <p className="font-text entrance" style={{ fontSize: 'clamp(24px, 2.2vw, 34px)', lineHeight: 1.25, color: 'var(--color-ink)', margin: 0, maxWidth: '48ch' }}>
            Every room begins in shadow. We bring light back to walls, ceilings and trim — interiors and exteriors finished in cobalt and sand, since 2009.
          </p>
          <div style={{ gridColumn: '1 / 3', marginTop: '96px', width: '180px' }}>
            <p style={{ fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>
              Interior painting &bull; Exterior painting &bull; Cabinet refinishing &bull; Deck staining &bull; Wallpaper removal
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: work — big names, fixed preview */}
      <section id="work" className="relative" style={{ padding: '120px var(--margin)', minHeight: '100svh', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gutter)' }}>
        <h2 className="font-display uppercase tracking-tight leading-tight entrance" style={{ gridColumn: '1 / 11', fontSize: 'clamp(44px, 5.4vw, 80px)', fontWeight: 700, lineHeight: 1, margin: 0, color: 'var(--color-ink)' }}>Selected work</h2>
        <div style={{ gridColumn: '1 / 11', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
          {project?.pairs.map((pair, i) => (
            <a
              key={pair.caption}
              href={`/projects/${project.slug}#${i}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              style={{
                color: i === active ? 'var(--color-ink)' : 'var(--color-muted)',
                textDecoration: 'none',
                fontFamily: 'var(--font-text)',
                fontSize: i === 0 ? 'clamp(44px, 5.4vw, 80px)' : 'clamp(30px, 4vw, 48px)',
                fontWeight: i === 0 ? 700 : 500,
                lineHeight: 1,
                margin: 0,
                display: 'block',
                padding: '10px 0',
              }}
            >
              {pair.caption}
              <span style={{ fontSize: '14px', opacity: 0.7, marginLeft: '8px', display: 'block', marginTop: '4px' }}>{pair.caption.split(' — ')[1] ?? ''} &middot; {project.completedDate}</span>
            </a>
          ))}
        </div>
        <div className="hidden lg:block" style={{ gridColumn: '10 / 13', position: 'sticky', top: '15vh', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '26vw', aspectRatio: '4/5', overflow: 'hidden', position: 'relative', background: 'var(--color-surface)' }}>
            <img
              src={project?.pairs[active]?.after ?? '/assets/paint-brushes-30804.jpg'}
              alt={project?.pairs[active]?.caption ?? 'Project'}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'opacity 200ms' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 3: features — one scene, stepping statements (full-bleed) */}
      <section id="services" className="relative" style={{ height: '400svh', position: 'relative', overflow: 'hidden', background: 'var(--color-ground)' }}>
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${project?.pairs[1]?.after ?? '/assets/paint-brushes-30804.jpg'}')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.45) contrast(1.1)', opacity: 0.9 }}>
          <div className="scrim--top" />
        </div>
        <div className="relative z-10 entrance" style={{ paddingTop: '6vh', width: '100%', maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
          {['Walls that hold light', 'Ceilings that breathe', 'Trim that frames', 'Colour that lasts', 'Rooms you want to be in'].map((stmt, i) => (
            <div
              key={stmt}
              className="entrance"
              style={{
                fontSize: i === 0 ? 'clamp(28px, 5vw, 48px)' : 'clamp(18px, 1.6vw, 20px)',
                fontWeight: i === 0 ? 500 : 400,
                lineHeight: 1,
                margin: i === 0 ? 0 : '10px 0',
                color: activeStmt === i ? 'var(--color-ink)' : 'var(--color-muted)',
                opacity: i === 0 ? 1 : 0.55,
                transition: 'color 400ms, opacity 400ms',
                textAlign: 'center',
                fontFamily: i === 0 ? 'var(--font-display)' : 'var(--font-text)',
                textTransform: i === 0 ? 'uppercase' : 'none',
                letterSpacing: i === 0 ? '-0.02em' : '0',
              }}
            >
              {stmt}
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: testimonial — lead quote, corner quotes */}
      <section id="testimonial" className="relative" style={{ minHeight: '100svh', background: 'var(--color-ground)', display: 'grid', gridTemplateRows: 'auto 1fr auto', padding: 'var(--margin)' }}>
        <div className="text-center entrance" style={{ gridColumn: '1 / 13', alignSelf: 'start', paddingTop: '12vh', maxWidth: '60vw', margin: '0 auto' }}>
          <p className="font-display uppercase tracking-tight leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, lineHeight: 1.05, margin: 0, color: 'var(--color-ink)' }}>
            Rooms lit from shadow
          </p>
        </div>
        <div style={{ gridColumn: '1 / 4', alignSelf: 'end', paddingBottom: '32px', maxWidth: '360px' }}>
          <p style={{ fontSize: '16px', fontFamily: 'var(--font-text)', lineHeight: 1.5, color: 'var(--color-ink)', margin: 0 }}>
            &ldquo;The hallway feels like a different house.&rdquo;
          </p>
          <p style={{ fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginTop: '6px', lineHeight: 1.5 }}>Rosemary Needham &middot; Homeowner</p>
        </div>
        <div style={{ gridColumn: '10 / 13', alignSelf: 'end', paddingBottom: '32px', maxWidth: '360px', textAlign: 'right' }}>
          <p style={{ fontSize: '16px', fontFamily: 'var(--font-text)', lineHeight: 1.5, color: 'var(--color-ink)', margin: 0 }}>
            &ldquo;Cobalt on sand. Exactly the room we pictured.&rdquo;
          </p>
          <p style={{ fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginTop: '6px', lineHeight: 1.5 }}>Sarah Johnson &middot; Homeowner</p>
        </div>
      </section>

      {/* Section 5: proof — names as one sentence */}
      <section id="proof" className="relative" style={{ padding: '120px var(--margin)', background: 'var(--color-ground)' }}>
        <p className="font-display uppercase tracking-tight leading-none entrance" style={{ fontSize: 'clamp(40px, 5vw, 76px)', fontWeight: 500, lineHeight: 1, margin: 0, color: 'var(--color-ink)' }}>
          Trusted by <span id="proof-lit" style={{ color: 'var(--color-accent)' }}>Rosemary Needham</span>, Sarah Johnson, Emily Rodriguez, Michael Chen, David Park, Linda Wu, James Taylor, Anna Kovacs, Tom Briggs, Nina Flores.
        </p>
      </section>

      {/* Section 6: cta — the object returns */}
      <section id="contact" className="relative" style={{ height: '90svh', background: 'var(--color-ground)', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--gutter)', padding: '0 var(--margin)' }}>
        <div style={{ gridColumn: '1 / 9', position: 'relative', height: '100%', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
          <img
            src={project?.pairs[4]?.after ?? '/assets/paint-brushes-30804.jpg'}
            alt="Finished bedroom"
            style={{ width: '130%', height: 'auto', minHeight: '100%', objectFit: 'cover', objectPosition: 'bottom left', display: 'block', filter: 'brightness(0.7) contrast(1.05)' }}
            loading="lazy"
          />
        </div>
        <div className="entrance" style={{ gridColumn: '10 / 13', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          <p className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(32px, 4vw, 40px)', fontWeight: 500, lineHeight: 1, margin: '0 0 16px 0', color: 'var(--color-ink)' }}>Start a conversation</p>
          <p style={{ fontSize: '17px', fontFamily: 'var(--font-text)', lineHeight: 1.6, color: 'var(--color-ink)', margin: '0 0 16px 0', maxWidth: '30ch' }}>Interior and exterior painting since 2009.</p>
          <p style={{ fontSize: '22px', fontFamily: 'var(--font-text)', fontWeight: 500, lineHeight: 1.2, color: 'var(--color-ink)', margin: '0 0 24px 0' }}>Free colour consultation.</p>
          <a href="mailto:info@brushstrokepro.com?subject=Free colour consultation&body=I&rsquo;d like to book a free colour consultation for my interior/exterior painting project." className="btn" style={{ padding: '12px 28px', fontSize: '14px' }}>Book a visit</a>
        </div>
      </section>

      {/* Section 7: footer — a single quiet line */}
      <footer style={{ paddingTop: '30svh', paddingBottom: '30px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 'var(--gutter)', fontFamily: 'var(--font-text)', fontSize: 'clamp(14px, 1vw, 16px)' }}>
        <div style={{ gridColumn: '1 / 2', color: 'var(--color-ink)' }}>BrushStroke Pro · painting since 2009</div>
        <div style={{ gridColumn: '2 / 3', color: 'var(--color-muted)', display: 'flex', gap: '24px', justifyContent: 'center' }}>
          <a href="#work" className="section-link">Work</a>
          <a href="#services" className="section-link">Services</a>
          <a href="/contact" className="section-link">Contact</a>
        </div>
        <div style={{ gridColumn: '3 / 4', color: 'var(--color-muted)', textAlign: 'right' }}>2026 &middot; <a href="/privacy" className="section-link">Privacy</a></div>
      </footer>
    </main>
  )
}
