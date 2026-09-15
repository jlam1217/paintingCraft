import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { FeaturedServices } from '@/components/home/FeaturedServices'
import { SERVICES } from '@/lib/constants'

jest.mock('next/link', () => {
  return ({ children, ...props }: React.PropsWithChildren<Record<string, string>>) => (
    <a {...props}>{children}</a>
  )
})

describe('FeaturedServices Component', () => {
  it('renders the section heading', () => {
    render(<FeaturedServices />)
    expect(screen.getByText(/Our Professional Services/i)).toBeInTheDocument()
  })

  it('renders all services from constants', () => {
    render(<FeaturedServices />)
    SERVICES.forEach((service) => {
      expect(screen.getByText(service.name)).toBeInTheDocument()
    })
  })

  it('renders service descriptions', () => {
    render(<FeaturedServices />)
    SERVICES.forEach((service) => {
      expect(screen.getByText(service.description)).toBeInTheDocument()
    })
  })

  it('renders Learn More links for each service', () => {
    render(<FeaturedServices />)
    const learnMoreLinks = screen.getAllByText(/Learn More/i)
    expect(learnMoreLinks.length).toBe(SERVICES.length)
  })

  it('Learn More links go to services page', () => {
    render(<FeaturedServices />)
    const links = screen.getAllByText(/Learn More/i)
    links.forEach((link) => {
      expect(link.closest('a')).toHaveAttribute('href', '/services')
    })
  })

  it('renders at least 3 features per service card', () => {
    render(<FeaturedServices />)
    SERVICES.forEach((service) => {
      service.features.slice(0, 3).forEach((feature) => {
        const elements = screen.getAllByText(feature)
        expect(elements.length).toBeGreaterThanOrEqual(1)
      })
    })
  })
})