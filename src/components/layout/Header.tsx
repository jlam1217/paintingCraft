'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Paintbrush } from 'lucide-react'
import { NAV_ITEMS, BUSINESS_NAME } from '@/lib/constants'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header role="banner" className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Paintbrush className="h-8 w-8 text-[#FF5A5F]" />
            <span className="text-xl font-bold text-[#484848]">
              {BUSINESS_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav role="navigation" className="hidden md:flex md:items-center md:gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#484848] transition-colors hover:text-[#FF5A5F]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/contact"
              className="rounded-lg bg-[#FF5A5F] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#E04E52]"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[#484848]" />
            ) : (
              <Menu className="h-6 w-6 text-[#484848]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <nav role="navigation" className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#484848] transition-colors hover:text-[#FF5A5F]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="rounded-lg bg-[#FF5A5F] px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#E04E52]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
