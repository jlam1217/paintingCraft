import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'BrushStroke Pro | Professional Painting Services',
  description:
    'Interior and exterior painting since 2009. BrushStroke Pro — 500+ projects completed across the region.',
  keywords: ['painting', 'interior painting', 'exterior painting', 'commercial painting', 'house painting'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
