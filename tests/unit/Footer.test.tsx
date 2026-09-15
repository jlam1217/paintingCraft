import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/layout/Footer'

describe('Footer Component', () => {
  it('renders the business name', () => {
    render(<Footer />)
    expect(screen.getByText('BrushStroke Pro')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText('Transforming Spaces, One Stroke at a Time')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('info@brushstrokepro.com')).toBeInTheDocument()
    expect(screen.getByText('(555) 123-4567')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
  })

  it('renders copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 BrushStroke Pro/)).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByText('Interior Painting')).toBeInTheDocument()
    expect(screen.getByText('Exterior Painting')).toBeInTheDocument()
    expect(screen.getByText('Commercial Painting')).toBeInTheDocument()
  })

  it('has proper footer role', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})