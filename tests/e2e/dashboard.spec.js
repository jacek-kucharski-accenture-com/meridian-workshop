import { test, expect } from '@playwright/test'

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('.kpi-card', { timeout: 10000 })
  })

  test('page loads without critical errors', async ({ page }) => {
    const criticalErrors = []
    page.on('console', msg => {
      if (msg.type() === 'error') {
        const text = msg.text()
        if (!text.includes('tasks') && !text.includes('404')) {
          criticalErrors.push(text)
        }
      }
    })
    await page.reload()
    await page.waitForSelector('.kpi-card', { timeout: 10000 })
    expect(criticalErrors).toHaveLength(0)
  })

  test('shows page title', async ({ page }) => {
    await expect(page.locator('h2').first()).toBeVisible()
  })

  test('shows KPI cards', async ({ page }) => {
    expect(await page.locator('.kpi-card').count()).toBeGreaterThan(0)
  })

  test('filter bar is visible', async ({ page }) => {
    await expect(page.locator('.filters-bar')).toBeVisible()
    await expect(page.locator('select').first()).toBeVisible()
  })

  test('warehouse filter updates page', async ({ page }) => {
    await page.locator('select').nth(1).selectOption('Tokyo')
    await page.waitForSelector('.kpi-card', { timeout: 10000 })
    expect(await page.locator('.kpi-card').count()).toBeGreaterThan(0)
  })

  test('nav links are present', async ({ page }) => {
    expect(await page.locator('.nav-tabs a').count()).toBeGreaterThanOrEqual(6)
  })
})
