import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Testimonials } from '@/components/home/Testimonials'
import { TESTIMONIALS } from '@/lib/constants'

describe('Testimonials Component', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/What Our Customers Say/i)).toBeInTheDocument()
  })

  it('renders all testimonials from constants', () => {
    render(<Testimonials />)
    TESTIMONIALS.forEach((t) => {
      expect(screen.getByText(t.content)).toBeInTheDocument()
    })
  })

  it('renders customer names', () => {
    render(<Testimonials />)
    TESTIMONIALS.forEach((t) => {
      expect(screen.getByText(t.name)).toBeInTheDocument()
    })
  })

  it('renders customer roles', () => {
    render(<Testimonials />)
    TESTIMONIALS.forEach((t) => {
      expect(screen.getByText(t.role)).toBeInTheDocument()
    })
  })

  it('renders star ratings for each testimonial', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('.fill-yellow-400')
    const expectedStars = TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0)
    expect(stars.length).toBe(expectedStars)
  })
})