import { Service, PricingTier, Testimonial, NavItem } from './types'

// Business Information
export const BUSINESS_NAME = 'BrushStroke Pro'
export const TAGLINE = 'Transforming Spaces, One Stroke at a Time'
export const CONTACT_EMAIL = 'info@brushstrokepro.com'
export const CONTACT_PHONE = '(555) 123-4567'
export const BUSINESS_ADDRESS = '123 Paint Street, Color City, CC 12345'

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// Services
export const SERVICES: Service[] = [
  {
    id: 'interior',
    name: 'Interior Painting',
    description: 'Transform your living spaces with our professional interior painting services.',
    icon: 'Home',
    features: ['Wall painting', 'Ceiling painting', 'Trim and molding', 'Color consultation'],
  },
  {
    id: 'exterior',
    name: 'Exterior Painting',
    description: 'Boost your curb appeal with our expert exterior painting solutions.',
    icon: 'Building',
    features: ['House siding', 'Deck staining', 'Fence painting', 'Power washing'],
  },
  {
    id: 'commercial',
    name: 'Commercial Painting',
    description: 'Professional painting services for offices, retail, and industrial spaces.',
    icon: 'Building2',
    features: ['Office spaces', 'Retail stores', 'Warehouses', 'HOA projects'],
  },
  {
    id: 'cabinet',
    name: 'Cabinet Refinishing',
    description: 'Give your kitchen a fresh look without the cost of replacement.',
    icon: 'CookingPot',
    features: ['Cabinet painting', 'Staining', 'Glazing', 'Hardware updates'],
  },
  {
    id: 'deck',
    name: 'Deck Staining',
    description: 'Protect and beautify your outdoor living spaces.',
    icon: 'TreePine',
    features: ['Deck staining', 'Sealing', 'Repair prep', 'Railings'],
  },
  {
    id: 'wallpaper',
    name: 'Wallpaper Removal',
    description: 'Expert removal and surface preparation for a smooth finish.',
    icon: 'Layers',
    features: ['Wallpaper removal', 'Surface repair', 'Priming', 'Texture matching'],
  },
]

// Pricing Tiers
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 299,
    description: 'Perfect for single room projects',
    features: [
      '1 room up to 400 sq ft',
      'Standard paint options',
      '1 coat application',
      'Basic prep work',
      'Clean up included',
    ],
    cta: 'Get Started',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 599,
    description: 'Our most popular choice for home transformations',
    features: [
      'Up to 2 rooms (800 sq ft)',
      'Premium paint options',
      '2 coat application',
      'Full prep work',
      'Priming included',
      'Minor wall repairs',
      '2-year warranty',
    ],
    highlighted: true,
    cta: 'Best Value',
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: 999,
    description: 'Complete home makeover experience',
    features: [
      '3+ rooms (1200+ sq ft)',
      'Luxury paint options',
      '2+ coat application',
      'Complete prep work',
      'Priming included',
      'All wall repairs',
      'Color consultation',
      '3-year warranty',
      'Priority scheduling',
    ],
    cta: 'Go Premium',
  },
]

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'BrushStroke Pro transformed our living room! The attention to detail was incredible, and the color consultation helped us choose the perfect shade.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'Professional, efficient, and the results exceeded our expectations. Our office space looks brand new!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    content: 'I recommend BrushStroke Pro to all my clients. Their work quality and reliability are unmatched in the industry.',
    rating: 5,
  },
]

// Gallery Categories
export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'interior', label: 'Interior' },
  { id: 'exterior', label: 'Exterior' },
  { id: 'commercial', label: 'Commercial' },
]
