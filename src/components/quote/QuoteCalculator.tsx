'use client'

import { useState, useMemo } from 'react'

const ROOM_TYPES = [
  { name: 'Bedroom', basePrice: 400, sqft: 120 },
  { name: 'Living Room', basePrice: 600, sqft: 200 },
  { name: 'Kitchen', basePrice: 500, sqft: 150 },
  { name: 'Bathroom', basePrice: 350, sqft: 60 },
  { name: 'Dining Room', basePrice: 450, sqft: 140 },
  { name: 'Hallway', basePrice: 300, sqft: 80 },
  { name: 'Basement', basePrice: 800, sqft: 400 },
  { name: 'Exterior (full)', basePrice: 3500, sqft: 1500 },
]

const ADDONS = [
  { name: 'Ceiling', multiplier: 0.3 },
  { name: 'Trim & Doors', multiplier: 0.25 },
  { name: 'Accent Wall', multiplier: 0.15 },
  { name: 'Cabinet Refinishing', multiplier: 0.4 },
  { name: 'Wallpaper Removal', multiplier: 0.35 },
  { name: 'Drywall Repair', multiplier: 0.2 },
]

export function QuoteCalculator() {
  const [selectedRooms, setSelectedRooms] = useState<string[]>([])
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])
  const [paintQuality, setPaintQuality] = useState<'standard' | 'premium' | 'luxury'>('standard')

  const qualityMultiplier = { standard: 1, premium: 1.35, luxury: 1.7 }[paintQuality]

  const total = useMemo(() => {
    const roomTotal = selectedRooms.reduce((sum, roomName) => {
      const room = ROOM_TYPES.find((r) => r.name === roomName)
      return sum + (room?.basePrice ?? 0)
    }, 0)

    const addonTotal = selectedAddons.reduce((sum, addonName) => {
      const addon = ADDONS.find((a) => a.name === addonName)
      const roomBase = roomTotal || 400
      return sum + Math.round(roomBase * (addon?.multiplier ?? 0))
    }, 0)

    return Math.round((roomTotal + addonTotal) * qualityMultiplier)
  }, [selectedRooms, selectedAddons, qualityMultiplier, paintQuality])

  const toggleRoom = (name: string) => {
    setSelectedRooms((prev) =>
      prev.includes(name) ? prev.filter((r) => r !== name) : [...prev, name]
    )
  }

  const toggleAddon = (name: string) => {
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    )
  }

  return (
    <div style={{ padding: '40px', background: 'var(--color-surface)', borderRadius: '12px', maxWidth: '800px', margin: '0 auto' }}>
      <h3 className="font-display uppercase tracking-tight" style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 500, lineHeight: 1, margin: '0 0 24px', color: 'var(--color-ink)' }}>
        Quote Calculator
      </h3>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Select rooms
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {ROOM_TYPES.map((room) => (
            <button
              key={room.name}
              onClick={() => toggleRoom(room.name)}
              style={{
                padding: '8px 16px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-text)',
                fontSize: '14px',
                background: selectedRooms.includes(room.name) ? 'var(--color-accent)' : 'var(--color-ground)',
                color: selectedRooms.includes(room.name) ? 'var(--color-accent-ink)' : 'var(--color-ink)',
                transition: 'all 0.2s ease',
              }}
            >
              {room.name}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Add-ons
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {ADDONS.map((addon) => (
            <button
              key={addon.name}
              onClick={() => toggleAddon(addon.name)}
              style={{
                padding: '8px 16px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-text)',
                fontSize: '14px',
                background: selectedAddons.includes(addon.name) ? 'var(--color-accent)' : 'var(--color-ground)',
                color: selectedAddons.includes(addon.name) ? 'var(--color-accent-ink)' : 'var(--color-ink)',
                transition: 'all 0.2s ease',
              }}
            >
              {addon.name}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <p style={{ fontSize: '14px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Paint quality
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          {(['standard', 'premium', 'luxury'] as const).map((q) => (
            <button
              key={q}
              onClick={() => setPaintQuality(q)}
              style={{
                padding: '8px 16px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-text)',
                fontSize: '14px',
                background: paintQuality === q ? 'var(--color-accent)' : 'var(--color-ground)',
                color: paintQuality === q ? 'var(--color-accent-ink)' : 'var(--color-ink)',
                transition: 'all 0.2s ease',
                textTransform: 'capitalize',
              }}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--color-ground)', paddingTop: '24px', marginTop: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)' }}>
            Estimated total
          </span>
          <span className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 500, color: 'var(--color-accent)' }}>
            ${total.toLocaleString()}
          </span>
        </div>
        <p style={{ fontSize: '13px', fontFamily: 'var(--font-text)', color: 'var(--color-muted)', marginTop: '8px' }}>
          *Estimate only. Final price determined after on-site consultation. Free estimates available.
        </p>
        <a href="mailto:info@brushstrokepro.com?subject=Quote Request&body=I'd like a free quote for my painting project." className="btn" style={{ display: 'inline-block', marginTop: '16px', padding: '12px 28px', fontSize: '14px' }}>
          Get exact quote
        </a>
      </div>
    </div>
  )
}
