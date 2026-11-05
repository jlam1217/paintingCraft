// Quote line item — a single room or area
export interface QuoteLineItem {
  id: string
  description: string
  price: number
}

// A floor or area grouping
export interface QuoteFloor {
  id: string
  name: string // e.g. "1st Floor", "2nd Floor", "Exterior"
  items: QuoteLineItem[]
}

// Prep work options
export type PrepWorkType =
  | 'buffing'
  | 'sanding'
  | 'patching'
  | 'caulking'
  | 'wallpaper-removal'
  | 'power-washing'
  | 'priming'
  | 'minor-repairs'
  | 'major-repairs'
  | 'scraping'
  | 'rot-repair'

// Paint supply responsibility
export type PaintSupply = 'owner' | 'painter'

// Service type
export type ServiceType =
  | 'interior'
  | 'exterior'
  | 'commercial'
  | 'cabinet'
  | 'deck'
  | 'wallpaper'

// The complete quote data
export interface QuoteData {
  // Company info
  companyName: string
  companyPhone: string
  companyEmail: string

  // Job info
  serviceType: ServiceType
  date: string
  address: string
  clientName: string

  // Job details
  prepWork: PrepWorkType[]
  coats: number
  primerWhereNeeded: boolean
  paintSupply: PaintSupply
  jobDuration: string
  startDate: string
  completeDate: string

  // Line items organized by floor
  floors: QuoteFloor[]

  // Terms
  depositAmount: number
  depositTerms: string
  additionalNotes: string
}

// Default empty quote
export function createEmptyQuote(): QuoteData {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

  return {
    companyName: 'BrushStroke Pro',
    companyPhone: '617.909.0716',
    companyEmail: '',
    serviceType: 'interior',
    date: today,
    address: '',
    clientName: '',
    prepWork: ['buffing', 'sanding', 'patching', 'caulking'],
    coats: 2,
    primerWhereNeeded: true,
    paintSupply: 'owner',
    jobDuration: '',
    startDate: '',
    completeDate: '',
    floors: [
      {
        id: crypto.randomUUID(),
        name: '1st Floor',
        items: [],
      },
    ],
    depositAmount: 0,
    depositTerms: 'Deposit due at the END of DAY1, the rest upon completion',
    additionalNotes: '',
  }
}

// Calculate totals
export function calculateFloorSubtotal(floor: QuoteFloor): number {
  return floor.items.reduce((sum, item) => sum + item.price, 0)
}

export function calculateQuoteTotal(floors: QuoteFloor[]): number {
  return floors.reduce((sum, floor) => sum + calculateFloorSubtotal(floor), 0)
}
