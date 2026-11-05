import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { BeforeAfterSlider } from '@/components/home/BeforeAfterSlider'

describe('BeforeAfterSlider Component', () => {
  it('renders the section heading', () => {
    render(<BeforeAfterSlider />)
    expect(screen.getByText(/See the Transformation/i)).toBeInTheDocument()
  })

  it('renders the slider description', () => {
    render(<BeforeAfterSlider />)
    expect(screen.getByText(/Drag the slider/i)).toBeInTheDocument()
  })

  it('renders before and after labels', () => {
    render(<BeforeAfterSlider />)
    expect(screen.getByText('Before')).toBeInTheDocument()
    expect(screen.getByText('After')).toBeInTheDocument()
  })

  it('renders project title when provided', () => {
    render(<BeforeAfterSlider projectTitle="Rosemary Needham" />)
    expect(screen.getByText('Rosemary Needham')).toBeInTheDocument()
  })

  it('renders the slider input', () => {
    render(<BeforeAfterSlider />)
    expect(screen.getByLabelText(/Before and after slider/i)).toBeInTheDocument()
  })

  it('has default slider value of 50', () => {
    render(<BeforeAfterSlider />)
    const slider = screen.getByLabelText(/Before and after slider/i) as HTMLInputElement
    expect(slider.value).toBe('50')
  })

  it('updates slider position on change', () => {
    render(<BeforeAfterSlider />)
    const slider = screen.getByLabelText(/Before and after slider/i) as HTMLInputElement
    fireEvent.change(slider, { target: { value: '75' } })
    expect(slider.value).toBe('75')
  })

  it('renders images with correct alt text', () => {
    render(<BeforeAfterSlider />)
    expect(screen.getByAltText(/Before:/)).toBeInTheDocument()
    expect(screen.getByAltText(/After:/)).toBeInTheDocument()
  })

  it('shows pair count when multiple pairs provided', () => {
    const pairs = [
      { id: '1', before: '/b1.jpg', after: '/a1.jpg', caption: 'Room 1' },
      { id: '2', before: '/b2.jpg', after: '/a2.jpg', caption: 'Room 2' },
    ]
    render(<BeforeAfterSlider pairs={pairs} />)
    expect(screen.getByText(/Showing 1 of 2 areas/)).toBeInTheDocument()
  })

  it('shows navigation dots when multiple pairs provided', () => {
    const pairs = [
      { id: '1', before: '/b1.jpg', after: '/a1.jpg', caption: 'Room 1' },
      { id: '2', before: '/b2.jpg', after: '/a2.jpg', caption: 'Room 2' },
    ]
    render(<BeforeAfterSlider pairs={pairs} />)
    expect(screen.getByLabelText('Go to image 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to image 2')).toBeInTheDocument()
  })
})