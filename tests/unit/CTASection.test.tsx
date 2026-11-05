import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CTASection } from '@/components/home/CTASection'

jest.mock('next/link', () => {
  const MockLink = ({ children, ...props }: React.PropsWithChildren<Record<string, string>>) => (
    <a {...props}>{children}</a>
  )
  MockLink.displayName = 'NextLink'
  return MockLink
})

describe('CTASection Component', () => {
  it('renders the CTA heading', () => {
    render(<CTASection />)
    expect(screen.getByText(/Ready to Transform/i)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CTASection />)
    expect(screen.getByText(/free, no-obligation quote/i)).toBeInTheDocument()
  })

  it('renders Get Free Quote link to /contact', () => {
    render(<CTASection />)
    const link = screen.getByRole('link', { name: /Get Free Quote/i })
    expect(link).toHaveAttribute('href', '/contact')
  })

  it('renders Call Now link with phone number', () => {
    render(<CTASection />)
    const callLink = screen.getByRole('link', { name: /Call Now/i })
    expect(callLink).toHaveAttribute('href', expect.stringContaining('tel:'))
  })
})