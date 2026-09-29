import { Given, When, Then, Before, After, setDefaultTimeout } from '@cucumber/cucumber';

import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

import { RegisterPage } from '../../../src/pages/RegisterPage';
import { AccountInfoPage } from '../../../src/pages/AccountInfoPage';
import { LoginPage } from '../../../src/pages/LoginPage';

import { createUser } from '../../../utils/userFactory';

setDefaultTimeout(30000);

let user: ReturnType<typeof createUser>;

Before(async function (this: CustomWorld) {
  await this.openBrowser();
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});

Given('the user opens the login page', { timeout: 30000 }, async function (this: CustomWorld) {
  user = createUser();

  const registerPage = new RegisterPage(this.page);

  await registerPage.open();

  await registerPage.signupUser(user.name, user.email);

  const accountPage = new AccountInfoPage(this.page);

  await accountPage.fillAccountForm(user.password);

  // Account creation automatically logs the user in.
  // Logout before testing the login flow.
  await this.page.goto('/');

  await this.page.locator('a[href="/logout"]').click();

  const loginPage = new LoginPage(this.page);

  await loginPage.openLoginPage();

  await expect(this.page.locator('[data-qa="login-email"]')).toBeVisible();
});

When(
  'the user enters valid login credentials',
  { timeout: 30000 },
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);

    await loginPage.login(user.email, user.password);
  }
);

Then('the logout button should be visible', { timeout: 30000 }, async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);

  await loginPage.verifyLoginSuccess();
});
