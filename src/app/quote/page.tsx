'use client'

import { useState } from 'react'
import type { QuoteData } from '@/lib/quoteTypes'
import { createEmptyQuote } from '@/lib/quoteTypes'
import { QuoteForm } from '@/components/quote/QuoteForm'
import { QuotePreview } from '@/components/quote/QuotePreview'
import { Printer, FileText } from 'lucide-react'

export default function QuotePage() {
  const [quoteData, setQuoteData] = useState<QuoteData>(createEmptyQuote)
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-gradient-to-r from-[#484848] to-[#2d2d2d] px-4 py-8 text-white sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-[#FF5A5F]" />
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">Quote Generator</h1>
              <p className="mt-1 text-sm text-gray-300">Build a professional quote for your client</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile tab switcher */}
      <div className="sticky top-0 z-20 border-b border-gray-200 bg-white px-4 sm:hidden print:hidden">
        <div className="flex">
          <button
            onClick={() => setActiveTab('form')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === 'form'
                ? 'border-b-2 border-[#FF5A5F] text-[#FF5A5F]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Edit Quote
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === 'preview'
                ? 'border-b-2 border-[#FF5A5F] text-[#FF5A5F]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Preview
          </button>
        </div>
      </div>

      {/* Mobile print button */}
      <div className="px-4 py-3 sm:hidden print:hidden">
        <button
          onClick={() => window.print()}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF5A5F] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#E04E52]"
        >
          <Printer className="h-4 w-4" />
          Print / Save as PDF
        </button>
      </div>

      {/* Two-column layout */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: Form */}
          <div className={activeTab === 'form' ? '' : 'hidden sm:block'}>
            <QuoteForm data={quoteData} onChange={setQuoteData} />
          </div>

          {/* Right: Preview */}
          <div className={activeTab === 'preview' ? '' : 'hidden sm:block'}>
            <div className="sticky top-24">
              <QuotePreview data={quoteData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
