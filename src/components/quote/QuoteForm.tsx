'use client'

import { useState } from 'react'
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react'
import type { QuoteData, QuoteFloor, QuoteLineItem, PrepWorkType, ServiceType } from '@/lib/quoteTypes'
import { calculateFloorSubtotal, calculateQuoteTotal } from '@/lib/quoteTypes'
import { formatCurrency } from '@/lib/utils'
import { SERVICE_TYPE_LABELS, PREP_WORK_OPTIONS, COAT_OPTIONS } from '@/lib/quoteConstants'

interface QuoteFormProps {
  data: QuoteData
  onChange: (data: QuoteData) => void
}

export function QuoteForm({ data, onChange }: QuoteFormProps) {
  const update = (field: keyof QuoteData, value: unknown) => {
    onChange({ ...data, [field]: value })
  }
  const togglePrepWork = (value: PrepWorkType) => {
    const next = data.prepWork.includes(value)
      ? data.prepWork.filter((v) => v !== value) : [...data.prepWork, value]
    update('prepWork', next)
  }
  const grandTotal = calculateQuoteTotal(data.floors)

  return (
    <div className="space-y-8">
      <FormSection title="Company Information" defaultOpen>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InputField label="Company Name" value={data.companyName} onChange={(v) => update('companyName', v)} required />
          <InputField label="Phone" value={data.companyPhone} onChange={(v) => update('companyPhone', v)} />
        </div>
        <InputField label="Email" type="email" value={data.companyEmail} onChange={(v) => update('companyEmail', v)} />
      </FormSection>

      <FormSection title="Client Information" defaultOpen>
        <InputField label="Client Name" value={data.clientName} onChange={(v) => update('clientName', v)} placeholder="e.g. Virginia & Kristian" required />
        <InputField label="Property Address" value={data.address} onChange={(v) => update('address', v)} placeholder="e.g. 277 Rosemary Street, Needham MA" required />
      </FormSection>

      <FormSection title="Service & Job Details" defaultOpen>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SelectField label="Service Type" value={data.serviceType} onChange={(v) => update('serviceType', v as ServiceType)} options={Object.entries(SERVICE_TYPE_LABELS).map(([k, v]) => ({ value: k, label: v }))} />
          <InputField label="Quote Date" type="date" value={data.date} onChange={(v) => update('date', v)} />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <InputField label="Job Duration" value={data.jobDuration} onChange={(v) => update('jobDuration', v)} placeholder="e.g. 4-5 days" />
          <InputField label="Start Date" type="date" value={data.startDate} onChange={(v) => update('startDate', v)} />
          <InputField label="Complete Date" type="date" value={data.completeDate} onChange={(v) => update('completeDate', v)} />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SelectField label="Number of Coats" value={String(data.coats)} onChange={(v) => update('coats', Number(v))} options={COAT_OPTIONS.map((n) => ({ value: String(n), label: `${n} Coat${n > 1 ? 's' : ''}` }))} />
          <SelectField label="Paint Supplied By" value={data.paintSupply} onChange={(v) => update('paintSupply', v)} options={[{ value: 'owner', label: 'Owner / Client' }, { value: 'painter', label: 'Painter (BrushStroke Pro)' }]} />
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" id="primer" checked={data.primerWhereNeeded} onChange={(e) => update('primerWhereNeeded', e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-[#FF5A5F] focus:ring-[#FF5A5F]" />
          <label htmlFor="primer" className="text-sm font-medium text-gray-700">Includes Primer (where needed)</label>
        </div>
      </FormSection>


      <FormSection title="Prep Work Included" defaultOpen>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {PREP_WORK_OPTIONS.map((opt) => (
            <label key={opt.value} className="flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors hover:bg-gray-50" style={{ borderColor: data.prepWork.includes(opt.value) ? '#FF5A5F' : '#e5e7eb', backgroundColor: data.prepWork.includes(opt.value) ? '#FFF5F5' : undefined }}>
              <input type="checkbox" checked={data.prepWork.includes(opt.value)} onChange={() => togglePrepWork(opt.value)} className="h-3.5 w-3.5 rounded border-gray-300 text-[#FF5A5F] focus:ring-[#FF5A5F]" />
              <span className="text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </FormSection>


      <FormSection title="Rooms & Pricing" defaultOpen>
        <div className="space-y-4">
          {data.floors.map((floor, fi) => (
            <FloorSection key={floor.id} floor={floor} floorIndex={fi} totalFloors={data.floors.length}
              onUpdate={(u) => { const f = [...data.floors]; f[fi] = u; update('floors', f) }}
              onRemove={() => update('floors', data.floors.filter((_, i) => i !== fi))} />
          ))}
          <button type="button" onClick={() => update('floors', [...data.floors, { id: crypto.randomUUID(), name: '', items: [] }])} className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 py-3 text-sm font-medium text-gray-500 transition-colors hover:border-[#FF5A5F] hover:text-[#FF5A5F]">
            <Plus className="h-4 w-4" />Add Floor / Area
          </button>
        </div>
        <div className="mt-6 rounded-lg bg-[#FF5A5F]/5 p-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#484848]">Job Quote Total</span>
            <span className="text-2xl font-bold text-[#FF5A5F]">{formatCurrency(grandTotal)}</span>
          </div>
        </div>
      </FormSection>

      <FormSection title="Deposit & Terms">
        <InputField label="Deposit Amount ($)" type="number" value={data.depositAmount} onChange={(v) => update('depositAmount', Number(v))} placeholder="e.g. 4200" />
        <InputField label="Deposit Terms" value={data.depositTerms} onChange={(v) => update('depositTerms', v)} />
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Additional Notes</label>
          <textarea value={data.additionalNotes} onChange={(e) => update('additionalNotes', e.target.value)} rows={2} className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#FF5A5F] focus:outline-none focus:ring-1 focus:ring-[#FF5A5F]" placeholder="Optional notes for the quote" />
        </div>
      </FormSection>
    </div>
  )
}

// ── Reusable helpers ──
function FormSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between px-5 py-4 text-left">
        <h3 className="text-base font-semibold text-[#484848]">{title}</h3>
        {isOpen ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
      </button>
      {isOpen && <div className="space-y-4 border-t border-gray-100 px-5 pb-5 pt-4">{children}</div>}
    </div>
  )
}

function InputField({ label, value, onChange, type = 'text', placeholder = '', required = false }: { label: string; value: string | number; onChange: (v: string) => void; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">{label}{required && <span className="ml-0.5 text-[#FF5A5F]">*</span>}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required={required} className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#FF5A5F] focus:outline-none focus:ring-1 focus:ring-[#FF5A5F]" />
    </div>
  )
}

function SelectField({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-[#FF5A5F] focus:outline-none focus:ring-1 focus:ring-[#FF5A5F]">
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  )
}

function FloorSection({ floor, totalFloors, onUpdate, onRemove }: { floor: QuoteFloor; floorIndex: number; totalFloors: number; onUpdate: (f: QuoteFloor) => void; onRemove: () => void }) {
  const subtotal = calculateFloorSubtotal(floor)
  const addItem = () => onUpdate({ ...floor, items: [...floor.items, { id: crypto.randomUUID(), description: '', price: 0 }] })
  const updateItem = (idx: number, field: keyof QuoteLineItem, val: unknown) => {
    const items = floor.items.map((it, i) => i === idx ? { ...it, [field]: val } : it)
    onUpdate({ ...floor, items })
  }
  const removeItem = (idx: number) => onUpdate({ ...floor, items: floor.items.filter((_, i) => i !== idx) })

  return (
    <div className="rounded-lg border border-gray-200 bg-gray-50/50 p-4">
      <div className="mb-3 flex items-center gap-3">
        <input type="text" value={floor.name} onChange={(e) => onUpdate({ ...floor, name: e.target.value })} placeholder="e.g. 1st Floor, Exterior" className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-[#484848] focus:border-[#FF5A5F] focus:outline-none focus:ring-1 focus:ring-[#FF5A5F]" />
        <button type="button" onClick={addItem} className="inline-flex items-center gap-1 rounded-lg bg-[#FF5A5F] px-3 py-2 text-xs font-medium text-white hover:bg-[#E04E52]">
          <Plus className="h-3.5 w-3.5" />Room
        </button>
        {totalFloors > 1 && (
          <button type="button" onClick={onRemove} className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-500 hover:border-red-300 hover:text-red-500">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      {floor.items.length > 0 && (
        <div className="mb-3 space-y-2">
          {floor.items.map((item, idx) => (
            <div key={item.id} className="flex items-center gap-2">
              <input type="text" value={item.description} onChange={(e) => updateItem(idx, 'description', e.target.value)} placeholder="Room name (e.g. Living Room)" className="flex-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#FF5A5F] focus:outline-none focus:ring-1 focus:ring-[#FF5A5F]" />
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                <input type="number" min="0" value={item.price || ''} onChange={(e) => updateItem(idx, 'price', Number(e.target.value))} className="w-24 rounded-lg border border-gray-200 bg-white py-2 pl-7 pr-3 text-right text-sm focus:border-[#FF5A5F] focus:outline-none focus:ring-1 focus:ring-[#FF5A5F]" />
              </div>
              <button type="button" onClick={() => removeItem(idx)} className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-500">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
      {floor.items.length > 0 && (
        <div className="flex items-center justify-end border-t border-gray-200 pt-2">
          <span className="text-sm font-medium text-gray-500">Subtotal: </span>
          <span className="ml-2 text-sm font-bold text-[#484848]">{formatCurrency(subtotal)}</span>
        </div>
      )}
    </div>
  )
}


