'use client'

import { useState } from 'react'
import { GALLERY_CATEGORIES } from '@/lib/constants'
import { cn } from '@/lib/utils'

// Mock gallery data
const GALLERY_ITEMS = [
  { id: '1', category: 'interior', title: 'Modern Living Room', color: '#E8D5B7' },
  { id: '2', category: 'exterior', title: 'Victorian Home', color: '#B8D4E3' },
  { id: '3', category: 'interior', title: 'Kitchen Refresh', color: '#F5E6D3' },
  { id: '4', category: 'commercial', title: 'Office Building', color: '#D4E6B8' },
  { id: '5', category: 'interior', title: 'Bedroom Makeover', color: '#E6D4F5' },
  { id: '6', category: 'exterior', title: 'Deck Staining', color: '#D4B8E6' },
  { id: '7', category: 'commercial', title: 'Restaurant Interior', color: '#F5D4D4' },
  { id: '8', category: 'interior', title: 'Bathroom Update', color: '#D4F5E6' },
  { id: '9', category: 'exterior', title: 'Fence Painting', color: '#F5EFD4' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF5A5F] to-[#E04E52] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Our Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Browse our portfolio of completed painting projects.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'rounded-full px-6 py-2 text-sm font-medium transition-colors',
                  activeCategory === cat.id
                    ? 'bg-[#FF5A5F] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-lg cursor-pointer"
              >
                <div
                  className="aspect-[4/3] flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="text-center">
                    <div className="text-4xl">🎨</div>
                    <p className="mt-2 text-sm font-medium text-gray-700">{item.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm text-white/80 capitalize">{item.category}</p>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}