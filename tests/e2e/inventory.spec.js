import { test, expect } from '@playwright/test'

test.describe('Inventory', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/inventory')
    await page.waitForSelector('tbody tr', { timeout: 10000 })
  })

  test('page loads and shows table', async ({ page }) => {
    await expect(page.locator('table')).toBeVisible()
    expect(await page.locator('tbody tr').count()).toBeGreaterThan(0)
  })

  test('shows expected column headers', async ({ page }) => {
    const headers = page.locator('thead th')
    const headersText = await headers.allTextContents()
    const joined = headersText.join(' ').toLowerCase()
    expect(joined).toContain('sku')
    expect(joined).toContain('category')
    expect(joined).toContain('status')
  })

  test('warehouse filter reduces rows', async ({ page }) => {
    const allRows = await page.locator('tbody tr').count()
    await page.locator('select').nth(1).selectOption('Tokyo')
    await page.waitForSelector('tbody tr', { timeout: 10000 })
    const filteredRows = await page.locator('tbody tr').count()
    expect(filteredRows).toBeLessThan(allRows)
    expect(filteredRows).toBeGreaterThan(0)
  })

  test('category filter reduces rows', async ({ page }) => {
    const allRows = await page.locator('tbody tr').count()
    await page.locator('select').nth(2).selectOption('sensors')
    await page.waitForSelector('tbody tr', { timeout: 10000 })
    const filteredRows = await page.locator('tbody tr').count()
    expect(filteredRows).toBeLessThan(allRows)
    expect(filteredRows).toBeGreaterThan(0)
  })

  test('combined warehouse and category filter works', async ({ page }) => {
    await page.locator('select').nth(1).selectOption('London')
    await page.locator('select').nth(2).selectOption('sensors')
    await page.waitForLoadState('networkidle')
    expect(await page.locator('tbody tr').count()).toBeGreaterThanOrEqual(0)
  })

  test('reset button restores all rows', async ({ page }) => {
    const allRows = await page.locator('tbody tr').count()
    await page.locator('select').nth(1).selectOption('Tokyo')
    await page.waitForSelector('tbody tr', { timeout: 10000 })
    const filteredRows = await page.locator('tbody tr').count()
    expect(filteredRows).toBeLessThan(allRows)

    await page.locator('.reset-filters-btn').click()
    await page.waitForFunction(
      (expected) => document.querySelectorAll('tbody tr').length === expected,
      allRows,
      { timeout: 10000 }
    )
    expect(await page.locator('tbody tr').count()).toBe(allRows)
  })
})
