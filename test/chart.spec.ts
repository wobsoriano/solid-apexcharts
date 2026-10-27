import { expect, test } from '@playwright/test'

test('renders a chart and keeps it after a type change', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => {
    errors.push(error.message)
  })

  await page.goto('/')
  const canvas = page.locator('.apexcharts-canvas')
  await expect(canvas).toBeVisible()
  await page.getByRole('button', { name: 'Change type' }).click()
  await expect(canvas).toBeVisible()
  expect(errors).toEqual([])
})
