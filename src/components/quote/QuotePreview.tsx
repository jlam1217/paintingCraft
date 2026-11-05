'use client'

import { Printer } from 'lucide-react'
import type { QuoteData } from '@/lib/quoteTypes'
import { calculateFloorSubtotal, calculateQuoteTotal } from '@/lib/quoteTypes'
import { formatCurrency } from '@/lib/utils'
import { SERVICE_TYPE_LABELS, PREP_WORK_LABELS } from '@/lib/quoteConstants'

interface QuotePreviewProps {
  data: QuoteData
}

export function QuotePreview({ data }: QuotePreviewProps) {
  const grandTotal = calculateQuoteTotal(data.floors)
  const hasFloors = data.floors.some((f) => f.items.length > 0)

  const handlePrint = () => {
    window.print()
  }

  const prepWorkText = data.prepWork.length > 0
    ? data.prepWork.map((w) => PREP_WORK_LABELS[w]).join(', ')
    : 'None specified'

  const paintSupplyText = data.paintSupply === 'owner' ? 'Owner supply paint' : 'Painter supply paint'

  return (
    <div className="space-y-4">
      {/* Print button */}
      <button
        onClick={handlePrint}
        className="hidden w-full items-center justify-center gap-2 rounded-lg bg-[#FF5A5F] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#E04E52] hover:shadow-lg sm:flex print:hidden"
      >
        <Printer className="h-4 w-4" />
        Print / Save as PDF
      </button>

      {/* Quote document */}
      <div className="quote-print-area rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        {/* Header */}
        <div className="mb-6 border-b-2 border-[#FF5A5F] pb-4">
          <h2 className="text-2xl font-bold text-[#484848]">{data.companyName || 'Your Company'}</h2>
          <p className="mt-1 text-sm text-gray-500">Date: {data.date}</p>
          <p className="text-sm font-semibold text-[#FF5A5F]">{SERVICE_TYPE_LABELS[data.serviceType]}</p>
        </div>

        {/* Client Details */}
        <div className="mb-6 space-y-1">
          {data.clientName && <p className="text-sm text-gray-700"><span className="font-semibold">Name:</span> {data.clientName}</p>}
          {data.address && <p className="text-sm text-gray-700"><span className="font-semibold">Address:</span> {data.address}</p>}
        </div>

        {/* Job Details */}
        <div className="mb-6 rounded-lg bg-gray-50 p-4 space-y-1.5">
          <p className="text-sm text-gray-700"><span className="font-semibold">Includes:</span> {prepWorkText}</p>
          {data.jobDuration && <p className="text-sm text-gray-700"><span className="font-semibold">Job Duration:</span> {data.jobDuration}</p>}
          <p className="text-sm text-gray-700"><span className="font-semibold">Includes:</span> {data.coats} Coat{data.coats > 1 ? 's' : ''} {data.primerWhereNeeded ? '(Primer where needed)' : '(No primer)'}</p>
          {data.startDate && <p className="text-sm text-gray-700"><span className="font-semibold">Start Date:</span> {data.startDate}</p>}
          {data.completeDate && <p className="text-sm text-gray-700"><span className="font-semibold">Complete Date:</span> {data.completeDate}</p>}
          <p className="text-sm text-gray-700">{paintSupplyText}</p>
        </div>

        {/* Line Items by Floor */}
        {hasFloors ? (
          <div className="mb-6 space-y-4">
            {data.floors.filter((f) => f.items.length > 0).map((floor) => (
              <div key={floor.id}>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-[#484848]">
                  ── {floor.name || 'Unnamed Area'} ──
                </h3>
                <div className="space-y-1">
                  {floor.items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b border-gray-100 py-1.5">
                      <span className="text-sm text-gray-700">{item.description || 'Unnamed Room'}</span>
                      <span className="text-sm font-semibold text-[#484848]">{formatCurrency(item.price)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end pt-1">
                  <span className="text-xs font-medium text-gray-400">Subtotal: {formatCurrency(calculateFloorSubtotal(floor))}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-6 py-8 text-center text-sm text-gray-400">
            No rooms added yet. Add rooms and prices on the left to see them here.
          </div>
        )}

        {/* Total */}
        <div className="mb-6 rounded-lg bg-[#FF5A5F]/5 p-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#484848]">Job Quote Total</span>
            <span className="text-2xl font-bold text-[#FF5A5F]">{formatCurrency(grandTotal)}</span>
          </div>
        </div>

        {/* Deposit Terms */}
        {(data.depositAmount > 0 || data.depositTerms) && (
          <div className="mb-6 text-sm text-gray-700">
            {data.depositAmount > 0 && (
              <p>Deposit of <span className="font-bold">{formatCurrency(data.depositAmount)}</span> at END of DAY1,</p>
            )}
            {data.depositTerms && <p>{data.depositTerms}</p>}
          </div>
        )}

        {/* Additional Notes */}
        {data.additionalNotes && (
          <div className="mb-6 text-sm text-gray-600 italic">
            <p>{data.additionalNotes}</p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-gray-200 pt-4 text-sm text-gray-500">
          <p>Thank you very much</p>
          <p className="font-semibold text-[#484848]">
            {data.companyName}{data.companyPhone && ` (${data.companyPhone})`}
          </p>
        </div>
      </div>
    </div>
  )
}
