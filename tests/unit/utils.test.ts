import { cn, formatCurrency, isValidEmail, isValidPhone, formatPhone, slugify, truncate } from '@/lib/utils'

describe('Utility Functions', () => {
  describe('cn', () => {
    it('merges class names', () => {
      const result = cn('text-red-500', 'bg-blue-500')
      expect(result).toBe('text-red-500 bg-blue-500')
    })

    it('handles conditional classes', () => {
      const result = cn('base', false && 'hidden', 'extra')
      expect(result).toBe('base extra')
    })
  })

  describe('formatCurrency', () => {
    it('formats number as currency', () => {
      expect(formatCurrency(299)).toBe('$299')
    })

    it('formats large numbers', () => {
      expect(formatCurrency(1500)).toBe('$1,500')
    })

    it('formats zero', () => {
      expect(formatCurrency(0)).toBe('$0')
    })
  })

  describe('isValidEmail', () => {
    it('validates correct email format', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
    })

    it('rejects invalid email without @', () => {
      expect(isValidEmail('testexample.com')).toBe(false)
    })

    it('rejects invalid email without domain', () => {
      expect(isValidEmail('test@')).toBe(false)
    })

    it('rejects empty string', () => {
      expect(isValidEmail('')).toBe(false)
    })
  })

  describe('isValidPhone', () => {
    it('validates correct phone format', () => {
      expect(isValidPhone('(555) 123-4567')).toBe(true)
    })

    it('validates phone without formatting', () => {
      expect(isValidPhone('5551234567')).toBe(true)
    })

    it('rejects invalid phone', () => {
      expect(isValidPhone('123')).toBe(false)
    })
  })

  describe('formatPhone', () => {
    it('formats 10 digit phone number', () => {
      expect(formatPhone('5551234567')).toBe('(555) 123-4567')
    })

    it('returns original if not 10 digits', () => {
      expect(formatPhone('123')).toBe('123')
    })
  })

  describe('slugify', () => {
    it('converts text to slug', () => {
      expect(slugify('Hello World')).toBe('hello-world')
    })

    it('removes special characters', () => {
      expect(slugify('Hello! @World#')).toBe('hello-world')
    })

    it('handles multiple spaces', () => {
      expect(slugify('Hello   World')).toBe('hello-world')
    })
  })

  describe('truncate', () => {
    it('returns original text if shorter than max', () => {
      expect(truncate('Hello', 10)).toBe('Hello')
    })

    it('truncates text with ellipsis', () => {
      expect(truncate('Hello World This Is Long', 10)).toBe('Hello Worl...')
    })

    it('handles exact length', () => {
      expect(truncate('Hello', 5)).toBe('Hello')
    })
  })
})
