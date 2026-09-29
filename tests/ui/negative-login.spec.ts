import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

test('Invalid login credentials show error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();

  await loginPage.login('invalid@test.com', 'WrongPassword123');

  await expect(
    page.getByText('Your email or password is incorrect!', { exact: true })
  ).toBeVisible();
});
