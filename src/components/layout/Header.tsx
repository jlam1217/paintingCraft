'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NAV_ITEMS, BUSINESS_NAME } from '@/lib/constants'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <Link href="/" className="site-header__mark" aria-label={`${BUSINESS_NAME} home`}>
          {BUSINESS_NAME}
        </Link>

        <nav className="site-header__nav" role="navigation" aria-label="Main">
          {NAV_ITEMS.slice(0, 4).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__cta">
          <Link href="/contact" className="btn">
            Get a free quote
          </Link>
        </div>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      <div id="mobile-nav" className="site-header__sheet" role="navigation" aria-label="Mobile">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact" className="btn" onClick={() => setOpen(false)}>
          Get a free quote
        </Link>
      </div>
    </header>
  )
}