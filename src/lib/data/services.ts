export interface Service {
  slug: string
  title: string
  shortDescription: string
  longDescription: string
  image: string
  icon: string
  featured: boolean
}

export const SERVICES: Service[] = [
  {
    slug: 'interior-painting',
    title: 'Interior Painting',
    shortDescription: 'Transform your home with professional interior painting, offering precision and quality.',
    longDescription:
      'Our skilled team ensures beautiful, long-lasting results that enhance the ambiance of any room in your house. From walls and ceilings to trim and doors, we handle every surface with care.',
    image: '/assets/painter-paints-a-room-arp.jpg',
    icon: 'home',
    featured: true,
  },
  {
    slug: 'exterior-painting',
    title: 'Exterior Painting',
    shortDescription: 'Transform your home\'s curb appeal with top-quality finishes and long-lasting protection.',
    longDescription:
      'Our exterior painting service enhances beauty and value while enduring various weather conditions. We use premium paints and thorough prep for a finish that lasts.',
    image: '/assets/paint-roller-23956075297.jpg',
    icon: 'building',
    featured: true,
  },
  {
    slug: 'kitchen-and-cabinet-refinishing',
    title: 'Kitchen and Cabinet Refinishing',
    shortDescription: 'Revitalize your kitchen with expert cabinet refinishing — cost-effective transformation.',
    longDescription:
      'Update your space\'s appearance while maintaining its functionality and charm. Our skilled team handles cleaning, sanding, priming, and two coats of durable enamel.',
    image: '/assets/tray-brush-roller-paint-4116925693.jpg',
    icon: 'utensils',
    featured: true,
  },
  {
    slug: 'drywall-repair',
    title: 'Drywall Repair',
    shortDescription: 'Seamless patching and finishing, ensuring perfect surfaces before painting.',
    longDescription:
      'Our expert drywall repair service restores walls with precision, enhancing the beauty and longevity of your home\'s interior. We handle holes, cracks, water damage, and texture matching.',
    image: '/assets/paint-brushes-30804.jpg',
    icon: 'wrench',
    featured: false,
  },
  {
    slug: 'residential-painting',
    title: 'Residential Painting',
    shortDescription: 'Enhance your home\'s beauty with meticulous attention to detail and premium quality paints.',
    longDescription:
      'Our residential painting service delivers a flawless finish that revitalizes every room. Satisfaction guaranteed with professional results and clean, respectful crews.',
    image: '/assets/painter-paints-a-room-arp.jpg',
    icon: 'house',
    featured: false,
  },
  {
    slug: 'commercial-painting',
    title: 'Commercial Painting',
    shortDescription: 'Revitalize your business space with professional craftsmanship and high-quality paints.',
    longDescription:
      'We deliver efficient, high-quality commercial painting for offices, retail, and multi-unit properties. Minimal disruption, maximum impact.',
    image: '/assets/paint-roller-23956075297.jpg',
    icon: 'briefcase',
    featured: false,
  },
  {
    slug: 'deck-staining',
    title: 'Deck Staining',
    shortDescription: 'Protect and beautify your deck with penetrating stains that last.',
    longDescription:
      'Our deck staining process includes cleaning, sanding rough spots, and applying a penetrating stain that protects without peeling. Regular maintenance extends your deck\'s life by years.',
    image: '/assets/paint-brushes-30804.jpg',
    icon: 'sun',
    featured: false,
  },
  {
    slug: 'wallpaper-removal',
    title: 'Wallpaper Removal',
    shortDescription: 'Safe, clean wallpaper removal preparing walls for fresh paint.',
    longDescription:
      'We remove wallpaper without damaging drywall, then prep and prime for a smooth new finish. No mess, no residue.',
    image: '/assets/tray-brush-roller-paint-4116925693.jpg',
    icon: 'layers',
    featured: false,
  },
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getFeaturedServices(): Service[] {
  return SERVICES.filter((s) => s.featured)
}

export function getAllServices(): Service[] {
  return SERVICES
}
