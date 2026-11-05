import type { Metadata } from 'next'
import { Red_Hat_Display, Red_Hat_Text } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import { SkipLink } from '@/components/a11y/SkipLink'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import './globals.css'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: '900',
  variable: '--font-red-hat-display',
})

const redHatText = Red_Hat_Text({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-red-hat-text',
})

export const metadata: Metadata = {
  title: 'BrushStroke Pro | Professional Painting Services',
  description:
    'Interior and exterior painting since 2009. BrushStroke Pro — 500+ projects completed across the region.',
  keywords: ['painting', 'interior painting', 'exterior painting', 'commercial painting', 'house painting'],
  authors: [{ name: 'BrushStroke Pro' }],
  publisher: 'BrushStroke Pro',
  openGraph: {
    title: 'BrushStroke Pro | Professional Painting Services',
    description:
      'Interior and exterior painting since 2009. BrushStroke Pro — 500+ projects completed across the region.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BrushStroke Pro',
    images: [
      {
        url: '/assets/paint-brushes-30804.jpg',
        width: 1200,
        height: 630,
        alt: 'BrushStroke Pro professional painting services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrushStroke Pro | Professional Painting Services',
    description:
      'Interior and exterior painting since 2009. BrushStroke Pro — 500+ projects completed across the region.',
    images: ['/assets/paint-brushes-30804.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${redHatDisplay.variable} ${redHatText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <StructuredData />
          <SkipLink />
          <Header />
          <main id="main-content" aria-label="Main content" className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
