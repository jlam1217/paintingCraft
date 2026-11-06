export interface ServiceArea {
  name: string
  state: string
  slug: string
}

export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'Greater Boston', state: 'MA', slug: 'greater-boston' },
  { name: 'Medford', state: 'MA', slug: 'medford' },
  { name: 'Malden', state: 'MA', slug: 'malden' },
  { name: 'Needham', state: 'MA', slug: 'needham' },
  { name: 'Newton', state: 'MA', slug: 'newton' },
  { name: 'Norwood', state: 'MA', slug: 'norwood' },
  { name: 'North Reading', state: 'MA', slug: 'north-reading' },
  { name: 'Reading', state: 'MA', slug: 'reading' },
  { name: 'Wellesley', state: 'MA', slug: 'wellesley' },
  { name: 'Milton', state: 'MA', slug: 'milton' },
  { name: 'Charlestown', state: 'MA', slug: 'charlestown' },
  { name: 'Danvers', state: 'MA', slug: 'danvers' },
  { name: 'Cambridge', state: 'MA', slug: 'cambridge' },
  { name: 'Brookline', state: 'MA', slug: 'brookline' },
  { name: 'Chestnut Hill', state: 'MA', slug: 'chestnut-hill' },
]

export function getAllServiceAreas(): ServiceArea[] {
  return SERVICE_AREAS
}

export function getServiceArea(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((a) => a.slug === slug)
}
