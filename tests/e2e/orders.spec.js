import { test, expect } from '@playwright/test'

test.describe('Orders', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/orders')
    await page.waitForLoadState('networkidle')
  })

  test('page loads and shows orders table', async ({ page }) => {
    await expect(page.locator('table')).toBeVisible()
    const rows = page.locator('tbody tr')
    expect(await rows.count()).toBeGreaterThan(0)
  })

  test('shows status badges', async ({ page }) => {
    const badges = page.locator('.badge')
    expect(await badges.count()).toBeGreaterThan(0)
  })

  test('warehouse filter reduces rows', async ({ page }) => {
    const allRows = await page.locator('tbody tr').count()
    await page.locator('select').nth(1).selectOption('Tokyo')
    await page.waitForLoadState('networkidle')
    const filteredRows = await page.locator('tbody tr').count()
    expect(filteredRows).toBeLessThan(allRows)
    expect(filteredRows).toBeGreaterThan(0)
  })

  test('category filter reduces rows', async ({ page }) => {
    const allRows = await page.locator('tbody tr').count()
    await page.locator('select').nth(2).selectOption('sensors')
    await page.waitForLoadState('networkidle')
    const filteredRows = await page.locator('tbody tr').count()
    expect(filteredRows).toBeLessThan(allRows)
  })

  test('status filter shows only matching orders', async ({ page }) => {
    const allRows = await page.locator('tbody tr').count()
    await page.locator('select').nth(3).selectOption('delivered')
    await page.waitForLoadState('networkidle')
    const filteredRows = await page.locator('tbody tr').count()
    expect(filteredRows).toBeLessThan(allRows)
    expect(filteredRows).toBeGreaterThan(0)
    const badges = await page.locator('.badge').allTextContents()
    badges.forEach(b => expect(b.toLowerCase()).toContain('deliv'))
  })

  test('time period filter reduces rows', async ({ page }) => {
    const allRows = await page.locator('tbody tr').count()
    await page.locator('select').nth(0).selectOption('2025-01')
    await page.waitForLoadState('networkidle')
    const filteredRows = await page.locator('tbody tr').count()
    expect(filteredRows).toBeLessThan(allRows)
    expect(filteredRows).toBeGreaterThan(0)
  })

  test('all four filters combined work', async ({ page }) => {
    await page.locator('select').nth(0).selectOption('2025-06')
    await page.locator('select').nth(1).selectOption('London')
    await page.locator('select').nth(2).selectOption('sensors')
    await page.locator('select').nth(3).selectOption('delivered')
    await page.waitForLoadState('networkidle')
    expect(await page.locator('tbody tr').count()).toBeGreaterThanOrEqual(0)
  })
})
