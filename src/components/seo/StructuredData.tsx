import { BUSINESS_NAME, CONTACT_EMAIL, CONTACT_PHONE, BUSINESS_ADDRESS } from '@/lib/constants'

export function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS_NAME,
    description: 'Professional interior and exterior painting services since 2009.',
    image: 'https://brushstrokepro.com/assets/paint-brushes-30804.jpg',
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_ADDRESS,
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '200',
    },
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: BUSINESS_NAME,
    serviceType: ['Interior Painting', 'Exterior Painting', 'Commercial Painting', 'Cabinet Refinishing', 'Deck Staining', 'Wallpaper Removal'],
    areaServed: 'Color City and surrounding region',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  )
}
