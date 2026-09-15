import { Hero } from '@/components/home/Hero'
import { FeaturedServices } from '@/components/home/FeaturedServices'
import { BeforeAfterSlider } from '@/components/home/BeforeAfterSlider'
import { Testimonials } from '@/components/home/Testimonials'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedServices />
      <BeforeAfterSlider />
      <Testimonials />
      <CTASection />
    </main>
  )
}
