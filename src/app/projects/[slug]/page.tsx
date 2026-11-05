'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { BeforeAfterSlider } from '@/components/home/BeforeAfterSlider'
import { getProject, getProjectsByCategory } from '@/lib/projects'

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = getProjectsByCategory(project.category).filter(
    (p) => p.slug !== project.slug
  )

  return (
    <div className="bg-white min-h-screen">
      {/* Back Link */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#FF5A5F] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>
      </div>

      {/* Hero */}
      <section className="py-12 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#FF5A5F]">
            {project.category}
          </p>
          <h1 className="text-4xl font-bold text-[#484848] sm:text-5xl">
            {project.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {project.description}
          </p>

          {/* Project Meta */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            {project.completedDate && (
              <span>Completed: {project.completedDate}</span>
            )}
            {project.services.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Before/After Slider */}
      <BeforeAfterSlider
        pairs={project.pairs}
        projectTitle={project.title}
      />

      {/* All Pairs Grid */}
      {project.pairs.length > 1 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#484848] text-center mb-8">
              All Areas
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {project.pairs.map((pair) => (
                <div key={pair.id} className="rounded-xl bg-white shadow-sm overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      fill
                      src={pair.after}
                      alt={`${pair.caption} - After`}
                      className="absolute inset-0 h-full w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                      <Image
                        fill
                        src={pair.before}
                        alt={`${pair.caption} - Before`}
                        className="absolute inset-0 h-full w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white shadow-md" />
                    <div className="absolute left-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs font-medium text-white">
                      Before
                    </div>
                    <div className="absolute right-2 top-2 rounded-full bg-[#FF5A5F] px-2 py-0.5 text-xs font-medium text-white">
                      After
                    </div>
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-medium text-gray-700">{pair.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA: Get a quote for similar work */}
      <section className="py-16 bg-[#062b8a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Love this transformation?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free quote for your own painting project. We&apos;ll bring the same
            care and attention to your space.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-[#062b8a] shadow-lg hover:shadow-xl transition-all"
          >
            Get Free Quote
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#484848] text-center mb-10">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  href={`/projects/${related.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden rounded-xl">
                    <Image
                      fill
                      src={related.pairs[0]?.after}
                      alt={related.title}
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-[#484848] group-hover:text-[#FF5A5F] transition-colors">
                      {related.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{related.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
