'use client'

import { useState } from 'react'
import { GALLERY_CATEGORIES } from '@/lib/constants'
import { PROJECTS, getProjectsByCategory } from '@/lib/projects'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : getProjectsByCategory(activeCategory)

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
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category yet.</p>
              <p className="text-gray-400 mt-2">Check back soon — we&apos;re always adding new work!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group relative overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-lg"
                >
                  {/* Before/After Preview */}
                  <div className="relative aspect-[4/3]">
                    {/* After image (full) */}
                    <img
                      src={project.pairs[0]?.after}
                      alt={`${project.title} - After`}
                      className="absolute inset-0 h-full w-full object-cover"
                      draggable={false}
                      loading="lazy"
                    />
                    {/* Before image (left half) */}
                    <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                      <img
                        src={project.pairs[0]?.before}
                        alt={`${project.title} - Before`}
                        className="h-full w-full object-cover"
                        style={{ width: '200%' }}
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                    {/* Divider line */}
                    <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white shadow-md" />
                    {/* Labels */}
                    <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                      Before
                    </div>
                    <div className="absolute right-3 top-3 rounded-full bg-[#FF5A5F] px-2 py-0.5 text-xs font-medium text-white">
                      After
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs text-white/70 capitalize">{project.category}</p>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-white/80 line-clamp-2">{project.description}</p>
                    {project.pairs.length > 1 && (
                      <p className="mt-2 text-xs text-white/60">{project.pairs.length} photos</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}