import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PinnedStage } from '@/components/home/PinnedStage'
import { Hero } from '@/components/home/Hero'
import { FeaturedServices } from '@/components/home/FeaturedServices'
import { BeforeAfterSlider } from '@/components/home/BeforeAfterSlider'
import { Testimonials } from '@/components/home/Testimonials'
import { CTASection } from '@/components/home/CTASection'
import { WorkSeam } from '@/components/home/WorkSeam'
import { TestimonialGutter } from '@/components/home/TestimonialGutter'
import { ProofBand } from '@/components/home/ProofBand'
import { LastPhotograph } from '@/components/home/LastPhotograph'
import { getFeaturedProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'BrushStroke Pro | Professional Painting Services',
  description:
    'Interior and exterior painting since 2009. BrushStroke Pro — 500+ projects completed across the region.',
  keywords: ['painting', 'interior painting', 'exterior painting', 'commercial painting', 'house painting'],
}

export default function Page() {
  const featuredProjects = getFeaturedProjects()

  return (
    <main className="flex-1">
      <Header />

      <PinnedStage />
      <Hero />
      <FeaturedServices />
      {featuredProjects.map((project) => (
        <BeforeAfterSlider
          key={project.slug}
          pairs={project.pairs}
          projectTitle={project.title}
        />
      ))}
      <Testimonials />
      <CTASection />
      <WorkSeam />
      <TestimonialGutter />
      <ProofBand />
      <LastPhotograph />
      <Footer />
    </main>
  )
}