// Service types
export interface Service {
  id: string
  name: string
  description: string
  icon: string
  features: string[]
}

// Pricing types
export interface PricingTier {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

// Gallery types
export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'interior' | 'exterior' | 'commercial'
  beforeSrc?: string
  hasBeforeAfter?: boolean
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service: string
  message: string
}

// Quote form types
export interface QuoteFormData {
  name: string
  email: string
  phone: string
  address: string
  serviceType: string
  squareFootage?: number
  preferredDate?: string
  additionalNotes?: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
