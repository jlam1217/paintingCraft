import { test, expect } from '@playwright/test'

test.describe('Home page', () => {
  test('loads with correct title and main heading', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/BrushStroke Pro/)
    await expect(page.getByText(/Interiors transformed/i)).toBeVisible()
  })

  test('hero section displays navigation and call to action', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /Work/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /Services/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /Contact/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /Get a quote/i })).toBeVisible()
  })

  test('displays hero prints', async ({ page }) => {
    await page.goto('/')
    // Large print only in hero section
    const largePrint = page.locator('img[alt="Finished bathroom"]').first()
    // Small print appears in hero AND CTA — take the first (hero)
    const smallPrint = page.locator('img[alt="Finished bedroom"]').first()
    await expect(async () => {
      const visible = await largePrint.isVisible() || await smallPrint.isVisible()
      expect(visible).toBe(true)
    }).toPass({ timeout: 10000 })
  })

  test('intro section has lone photo and paragraph', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/Every room begins in shadow/i)).toBeVisible()
    await expect(page.getByText(/interiors and exteriors finished in cobalt and sand/i)).toBeVisible()
    await expect(page.locator('img[alt="Room before painting"]')).toBeVisible()
  })

  test('work section lists project names as links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/Selected work/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /Bathroom — Blue Tile/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Hallway/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Bedroom — Vaulted Ceiling/i })).toBeVisible()
  })

  test('services section displays stepping statements', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/Walls that hold light/i)).toBeVisible()
    await expect(page.getByText(/Ceilings that breathe/i)).toBeVisible()
    await expect(page.getByText(/Trim that frames/i)).toBeVisible()
  })

  test('testimonial section displays lead quote and corner quotes', async ({ page }) => {
    await page.goto('/')
    // "Rooms lit from shadow" appears in hero headline AND testimonial — take testimonial one (.last)
    await expect(page.getByText(/Rooms lit from shadow/i).last()).toBeVisible()
    await expect(page.getByText(/The hallway feels like a different house/i)).toBeVisible()
    await expect(page.getByText(/Cobalt on sand\. Exactly the room we pictured/i)).toBeVisible()
  })

  test('proof section displays trusted names', async ({ page }) => {
    await page.goto('/')
    // "Rosemary Needham" appears in testimonial AND proof — take proof one (.last)
    await expect(page.getByText(/Rosemary Needham/i).last()).toBeVisible()
    // "Sarah Johnson" appears in testimonial corner quote AND proof — take proof one (.last)
    await expect(page.getByText(/Sarah Johnson/i).last()).toBeVisible()
    await expect(page.getByText(/Emily Rodriguez/i)).toBeVisible()
  })

  test('CTA section has book a visit button', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/Start a conversation/i).first()).toBeVisible()
    const button = page.getByRole('link', { name: /Book a visit/i })
    await expect(button).toBeVisible()
    await expect(button).toHaveAttribute('href', /mailto:/)
  })

  test('footer displays quiet line with links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/BrushStroke Pro · painting since 2009/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /Work/i }).last()).toBeVisible()
    await expect(page.getByRole('link', { name: /Privacy/i }).last()).toBeVisible()
  })

  test('mobile view renders correctly', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText(/Interiors transformed/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /Get a quote/i })).toBeVisible()
  })
})
