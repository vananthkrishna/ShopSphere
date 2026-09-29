import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { RegisterPage } from '../../src/pages/RegisterPage';

test.describe('Login Module', () => {

  test('User should register and reach account page', async ({ page }) => {

    const register = new RegisterPage(page);

    const email = `ananth${Date.now()}@test.com`;

    await register.open();

    await register.startSignup('Ananth', email);

    await expect(page).toHaveURL(/signup/);

  });

  test('Invalid user should not login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.openLoginPage();

    await login.login(
      'wrong@test.com',
      'wrongpassword'
    );

    await expect(
      page.locator('.login-form p')
    ).toBeVisible();

  });

});