import { test, expect } from '@playwright/test'

test.describe('Reports', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/reports')
    await page.waitForSelector('tbody tr', { timeout: 10000 })
  })

  test('page loads and shows quarterly table', async ({ page }) => {
    await expect(page.locator('table').first()).toBeVisible()
    expect(await page.locator('table').first().locator('tbody tr').count()).toBeGreaterThan(0)
  })

  test('quarterly table has 4 quarters', async ({ page }) => {
    // Scope to first table only (quarterly), not the month-over-month table
    const rows = page.locator('table').first().locator('tbody tr')
    expect(await rows.count()).toBe(4)
  })

  test('shows fulfillment rate badges', async ({ page }) => {
    expect(await page.locator('.badge').count()).toBeGreaterThan(0)
  })

  test('bar chart renders', async ({ page }) => {
    await expect(page.locator('.bar-chart')).toBeVisible()
    expect(await page.locator('.bar').count()).toBeGreaterThan(0)
  })

  test('shows month-over-month table', async ({ page }) => {
    expect(await page.locator('table').count()).toBeGreaterThanOrEqual(2)
  })

  test('warehouse filter updates quarterly data', async ({ page }) => {
    const beforeText = await page.locator('table').first().locator('tbody tr').first().textContent()
    await page.locator('select').nth(1).selectOption('Tokyo')
    await page.waitForSelector('tbody tr', { timeout: 10000 })
    const afterText = await page.locator('table').first().locator('tbody tr').first().textContent()
    expect(afterText).not.toBe(beforeText)
  })

  test('status filter updates data', async ({ page }) => {
    const beforeText = await page.locator('table').first().locator('tbody tr').first().textContent()
    await page.locator('select').nth(3).selectOption('delivered')
    await page.waitForSelector('tbody tr', { timeout: 10000 })
    const afterText = await page.locator('table').first().locator('tbody tr').first().textContent()
    expect(afterText).not.toBe(beforeText)
  })

  test('summary stat cards are visible', async ({ page }) => {
    await expect(page.locator('.stats-grid').last()).toBeVisible()
    expect(await page.locator('.stats-grid').last().locator('div').count()).toBeGreaterThan(0)
  })
})
