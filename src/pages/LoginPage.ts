import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private loginSignupBtn = 'a[href="/login"]';

  private emailInput = '[data-qa="login-email"]';

  private passwordInput = '[data-qa="login-password"]';

  private loginButton = '[data-qa="login-button"]';

  private logoutButton = 'a[href="/logout"]';

  async openLoginPage() {
    await this.visit('/');
    await this.click(this.loginSignupBtn);
  }

  async login(email: string, password: string) {
    await this.type(this.emailInput, email);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async verifyLoginSuccess() {
    await expect(this.getLocator(this.logoutButton)).toBeVisible();
  }
}