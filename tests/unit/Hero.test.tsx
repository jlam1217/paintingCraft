import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/home/Hero'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, ...props }: React.PropsWithChildren<Record<string, string>>) => (
    <a {...props}>{children}</a>
  )
})

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/Transform Your Space/i)).toBeInTheDocument()
  })

  it('renders the subtitle description', () => {
    render(<Hero />)
    expect(screen.getByText(/Expert interior and exterior painting/i)).toBeInTheDocument()
  })

  it('renders Get Free Quote CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Get Free Quote/i })).toBeInTheDocument()
  })

  it('renders View Our Work link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /View Our Work/i })).toBeInTheDocument()
  })

  it('displays trust indicators', () => {
    render(<Hero />)
    expect(screen.getByText('500+')).toBeInTheDocument()
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('displays star ratings', () => {
    render(<Hero />)
    expect(screen.getByText(/Rated 5\/5 by 200\+ homeowners/)).toBeInTheDocument()
  })

  it('links to correct pages', () => {
    render(<Hero />)
    const quoteLink = screen.getByRole('link', { name: /Get Free Quote/i })
    expect(quoteLink).toHaveAttribute('href', '/contact')

    const galleryLink = screen.getByRole('link', { name: /View Our Work/i })
    expect(galleryLink).toHaveAttribute('href', '/gallery')
  })
})