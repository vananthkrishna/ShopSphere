import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private loginSignup = 'a[href="/login"]';
  private nameInput = '[data-qa="signup-name"]';
  private emailInput = '[data-qa="signup-email"]';
  private signupButton = '[data-qa="signup-button"]';

  async open() {
    await this.visit('/');
    await this.click(this.loginSignup);
  }

  async startSignup(name: string, email: string) {
    await this.type(this.nameInput, name);
    await this.type(this.emailInput, email);
    await this.click(this.signupButton);
  }
}