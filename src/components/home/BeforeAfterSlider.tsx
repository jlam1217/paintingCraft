'use client'

import { useState } from 'react'
import { ArrowLeftRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import type { ImagePair } from '@/lib/projectTypes'

interface BeforeAfterSliderProps {
  pairs?: ImagePair[]
  beforeImage?: string
  afterImage?: string
  projectTitle?: string
  showNavigation?: boolean
}

export function BeforeAfterSlider({
  pairs = [],
  beforeImage = '/projects/RosemaryNeedham/before/before-1.jpeg',
  afterImage = '/projects/RosemaryNeedham/after/after-1.jpeg',
  projectTitle,
  showNavigation = true,
}: BeforeAfterSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const hasMultiplePairs = pairs.length > 1
  const currentPair = pairs.length > 0 ? pairs[activeIndex] : null
  const displayBefore = currentPair?.before || beforeImage
  const displayAfter = currentPair?.after || afterImage
  const displayCaption = currentPair?.caption || ''

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % pairs.length)
    setSliderPosition(50)
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + pairs.length) % pairs.length)
    setSliderPosition(50)
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {projectTitle && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#FF5A5F]">
              {projectTitle}
            </p>
          )}
          <h2 className="text-3xl font-bold text-[#484848] sm:text-4xl">
            See the Transformation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {hasMultiplePairs
              ? `Drag the slider to compare. Showing ${activeIndex + 1} of ${pairs.length} areas.`
              : 'Drag the slider to see the amazing before and after results of our work.'}
          </p>
        </div>

        <div className="mt-12">
          <div className="relative mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="relative aspect-video">
                <Image
                  fill
                  src={displayAfter}
                  alt={`After: ${displayCaption || 'Painted'}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                  loading="eager"
                  priority
                />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                  <Image
                    fill
                    src={displayBefore}
                    alt={`Before: ${displayCaption || 'Original'}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 640px"
                    loading="eager"
                    priority
                  />
                </div>
                <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                  <input
                    type="range" min="0" max="100" value={sliderPosition}
                    onChange={handleSliderChange}
                    className="absolute inset-0 w-full cursor-ew-resize opacity-0"
                    aria-label="Before and after slider"
                  />
                  <div className="pointer-events-none absolute top-1/2 h-1 -translate-y-1/2 bg-white shadow-lg"
                    style={{ left: `${sliderPosition}%`, right: 0 }}>
                    <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                      <ArrowLeftRight className="h-5 w-5 text-[#FF5A5F]" />
                    </div>
                  </div>
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-sm font-medium text-white">Before</div>
                <div className="absolute right-4 top-4 rounded-full bg-[#FF5A5F] px-3 py-1 text-sm font-medium text-white">After</div>
                {hasMultiplePairs && showNavigation && (
                  <>
                    <button onClick={(e) => { e.stopPropagation(); goPrev() }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm hover:bg-white">
                      <ChevronLeft className="h-5 w-5 text-gray-800" />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); goNext() }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm hover:bg-white">
                      <ChevronRight className="h-5 w-5 text-gray-800" />
                    </button>
                  </>
                )}
              </div>
            </div>
            {displayCaption && (
              <p className="mt-4 text-center text-sm font-medium text-gray-600">{displayCaption}</p>
            )}
            {hasMultiplePairs && (
              <div className="mt-6 flex items-center justify-center gap-2">
                {pairs.map((_, i) => (
                  <button key={i}
                    onClick={() => { setActiveIndex(i); setSliderPosition(50) }}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      i === activeIndex ? 'bg-[#FF5A5F] w-6' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}