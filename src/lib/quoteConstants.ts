import type { PrepWorkType, ServiceType } from './quoteTypes'

export const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {
  interior: 'Interior Painting',
  exterior: 'Exterior Painting',
  commercial: 'Commercial Painting',
  cabinet: 'Cabinet Refinishing',
  deck: 'Deck Staining',
  wallpaper: 'Wallpaper Removal',
}

export const PREP_WORK_OPTIONS: { value: PrepWorkType; label: string }[] = [
  { value: 'buffing', label: 'Minor Buffing' },
  { value: 'sanding', label: 'Sanding' },
  { value: 'patching', label: 'Patching' },
  { value: 'caulking', label: 'Caulking' },
  { value: 'wallpaper-removal', label: 'Wallpaper Removal' },
  { value: 'power-washing', label: 'Power Washing' },
  { value: 'priming', label: 'Priming' },
  { value: 'minor-repairs', label: 'Minor Wall Repairs' },
  { value: 'major-repairs', label: 'Major Wall Repairs' },
  { value: 'scraping', label: 'Scraping' },
  { value: 'rot-repair', label: 'Rot Repair' },
]

export const PREP_WORK_LABELS: Record<PrepWorkType, string> = {
  buffing: 'minor buffing',
  sanding: 'sanding',
  patching: 'patching',
  caulking: 'caulking',
  'wallpaper-removal': 'wallpaper removal',
  'power-washing': 'power washing',
  priming: 'priming',
  'minor-repairs': 'minor wall repairs',
  'major-repairs': 'major wall repairs',
  scraping: 'scraping',
  'rot-repair': 'rot repair',
}

export const COAT_OPTIONS = [1, 2, 3, 4]

export const COMMON_ROOM_NAMES = [
  'Living Room',
  'Dining Room',
  'Kitchen',
  'Master Bedroom',
  'Master Bath',
  'Bedroom A',
  'Bedroom B',
  'Bedroom C',
  'Office Room',
  'Family Room',
  'Half Bath',
  'Full Bath',
  'Hallway',
  'Staircase',
  'Laundry Room',
  'Garage',
  'Foyer / Entryway',
  'Closet',
  'Basement',
  'Den / Bonus Room',
]

export const COMMON_FLOOR_NAMES = [
  'Basement',
  '1st Floor',
  '2nd Floor',
  '3rd Floor',
  'Exterior',
  'Garage',
]
