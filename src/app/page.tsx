import type { Metadata } from 'next'
import { HomeClient } from '@/app/components/home/HomeClient'

export const metadata: Metadata = {
  title: 'BrushStroke Pro | Professional Painting Services',
  description:
    'Interior and exterior painting since 2009. BrushStroke Pro — interiors and exteriors transformed, one room at a time.',
  keywords: ['painting', 'interior painting', 'exterior painting', 'commercial painting', 'house painting'],
}

export default function Page() {
  return <HomeClient />
}
