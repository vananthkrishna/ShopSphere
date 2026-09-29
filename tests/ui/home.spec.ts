import { test, expect } from '@playwright/test';
import { HomePage } from '../../src/pages/HomePage';

test('Homepage loads successfully', async ({ page }) => {
  const home = new HomePage(page);

  await home.open();

  await expect(page).toHaveTitle(/Automation Exercise/);
});
