import { test, expect } from '@playwright/test';

test.beforeAll(() => undefined)

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await page.getByRole('link', { name: 'Mock APIs' }).click();

  await expect(page.getByRole('heading', { name: 'Mock API requests' })).toBeVisible();
});
