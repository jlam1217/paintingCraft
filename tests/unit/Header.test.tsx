import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/layout/Header'

describe('Header Component', () => {
  it('renders the business name', () => {
    render(<Header />)
    expect(screen.getByText('BrushStroke Pro')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Header />)
    expect(screen.getByText('Get Free Quote')).toBeInTheDocument()
  })

  it('has correct navigation links', () => {
    render(<Header />)
    const homeLink = screen.getByText('Home').closest('a')
    expect(homeLink).toHaveAttribute('href', '/')
    const servicesLink = screen.getByText('Services').closest('a')
    expect(servicesLink).toHaveAttribute('href', '/services')
  })

  it('renders with proper accessibility', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})