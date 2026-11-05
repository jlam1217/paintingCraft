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
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Gallery').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Pricing').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('renders the CTA button', () => {
    render(<Header />)
    expect(screen.getAllByText('Get a free quote').length).toBeGreaterThan(0)
  })

  it('has correct navigation links', () => {
    render(<Header />)
    const homeLink = screen.getAllByText('Home')[0].closest('a')
    expect(homeLink).toHaveAttribute('href', '/')
    const servicesLink = screen.getAllByText('Services')[0].closest('a')
    expect(servicesLink).toHaveAttribute('href', '/services')
  })

  it('renders with proper accessibility', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getAllByRole('navigation').length).toBeGreaterThan(0)
  })
})