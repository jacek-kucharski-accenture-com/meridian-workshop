import { test, expect } from '@playwright/test'

test.describe('Restocking', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/restocking')
  })

  test('page loads with budget input', async ({ page }) => {
    await expect(page.locator('.budget-input')).toBeVisible()
    await expect(page.locator('.generate-btn')).toBeVisible()
  })

  test('generate button is enabled when budget is set', async ({ page }) => {
    const btn = page.locator('.generate-btn')
    await expect(btn).not.toBeDisabled()
  })

  test('clicking generate shows recommendations', async ({ page }) => {
    await page.locator('.budget-input').fill('500000')
    await page.locator('.generate-btn').click()
    await page.waitForLoadState('networkidle')
    await expect(page.locator('.stat-card').first()).toBeVisible()
  })

  test('recommendations table renders after generate', async ({ page }) => {
    await page.locator('.budget-input').fill('500000')
    await page.locator('.generate-btn').click()
    await page.waitForLoadState('networkidle')
    await expect(page.locator('table')).toBeVisible()
    expect(await page.locator('tbody tr').count()).toBeGreaterThan(0)
  })

  test('urgency badges are shown', async ({ page }) => {
    await page.locator('.budget-input').fill('500000')
    await page.locator('.generate-btn').click()
    await page.waitForLoadState('networkidle')
    const badges = page.locator('.badge')
    expect(await badges.count()).toBeGreaterThan(0)
  })

  test('budget summary cards show used and remaining', async ({ page }) => {
    await page.locator('.budget-input').fill('50000')
    await page.locator('.generate-btn').click()
    await page.waitForLoadState('networkidle')
    const cards = page.locator('.stat-card')
    expect(await cards.count()).toBeGreaterThanOrEqual(3)
  })

  test('warehouse filter changes recommendations', async ({ page }) => {
    await page.locator('.budget-input').fill('500000')
    await page.locator('.generate-btn').click()
    await page.waitForLoadState('networkidle')
    const allCount = await page.locator('tbody tr').count()

    await page.locator('select').nth(1).selectOption('Tokyo')
    await page.waitForLoadState('networkidle')
    const tokyoCount = await page.locator('tbody tr').count()
    expect(tokyoCount).not.toBe(allCount)
  })

  test('small budget shows fewer recommendations', async ({ page }) => {
    await page.locator('.budget-input').fill('500000')
    await page.locator('.generate-btn').click()
    await page.waitForLoadState('networkidle')
    const bigCount = await page.locator('tbody tr').count()

    await page.locator('.budget-input').fill('1000')
    await page.locator('.generate-btn').click()
    await page.waitForLoadState('networkidle')
    const smallCount = await page.locator('tbody tr').count()
    expect(smallCount).toBeLessThanOrEqual(bigCount)
  })
})
