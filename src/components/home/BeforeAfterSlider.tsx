'use client'

import { useState } from 'react'
import { ArrowLeftRight } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImage?: string
  afterImage?: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeImage = 'https://placehold.co/800x500/cccccc/666666?text=Before',
  afterImage = 'https://placehold.co/800x500/FF5A5F/FFFFFF?text=After',
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#484848] sm:text-4xl">
            See the Transformation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Drag the slider to see the amazing before and after results of our work.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-16">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-video">
              {/* After Image (Background) */}
              <img
                src={afterImage}
                alt={afterLabel}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Before Image (Foreground with clip) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={beforeImage}
                  alt={beforeLabel}
                  className="h-full w-full object-cover"
                  style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
                />
              </div>

              {/* Slider Control */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  className="absolute inset-0 w-full cursor-ew-resize opacity-0"
                  aria-label="Before and after slider"
                />

                {/* Slider Line */}
                <div
                  className="pointer-events-none absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 bg-white shadow-lg"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                    <ArrowLeftRight className="h-5 w-5 text-[#FF5A5F]" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-sm font-medium text-white">
                {beforeLabel}
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-[#FF5A5F] px-3 py-1 text-sm font-medium text-white">
                {afterLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}