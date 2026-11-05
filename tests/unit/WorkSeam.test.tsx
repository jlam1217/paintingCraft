import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { WorkSeam } from '@/components/home/WorkSeam'

// Mock next/image to avoid fill-mode validation errors in jsdom
jest.mock('next/image', () => {
  const MockImage = (props: {
    src: string
    alt: string
    fill: boolean
    className?: string
    style?: React.CSSProperties
    sizes?: string
  }) => (
    <div
      data-testid="mock-image"
      data-src={props.src}
      data-alt={props.alt}
      data-fill={String(props.fill)}
      data-classname={props.className ?? ''}
      data-style={JSON.stringify(props.style ?? {})}
      data-sizes={props.sizes ?? ''}
    />
  )
  MockImage.displayName = 'NextImage'
  return MockImage
})

describe('WorkSeam Component', () => {
  it('renders the section title', () => {
    render(<WorkSeam />)
    expect(screen.getByText('Selected work')).toBeInTheDocument()
  })

  it('renders the room names links', () => {
    render(<WorkSeam />)
    expect(screen.getByText('Rosemary Needham')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('renders before and after images with fill mode', () => {
    render(<WorkSeam />)
    const images = screen.getAllByTestId('mock-image')
    expect(images.length).toBe(2)
    expect(images[0]).toHaveAttribute('data-src', '/projects/RosemaryNeedham/before/before-1.jpeg')
    expect(images[1]).toHaveAttribute('data-src', '/projects/RosemaryNeedham/after/after-10.jpeg')
    images.forEach((img) => {
      expect(img).toHaveAttribute('data-fill', 'true')
      const style = JSON.parse(img.getAttribute('data-style') || '{}')
      expect(style.height).toBeUndefined()
      expect(style.width).toBeUndefined()
    })
  })

  it('renders the seam title', () => {
    render(<WorkSeam />)
    expect(screen.getByText(/Brush/i)).toBeInTheDocument()
    expect(screen.getByText(/Pro/i)).toBeInTheDocument()
  })

  it('renders room caption', () => {
    render(<WorkSeam />)
    expect(screen.getByText('Blue Tile Bathroom · 2024')).toBeInTheDocument()
  })
})
