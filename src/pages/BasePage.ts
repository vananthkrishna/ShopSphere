import { Page, Locator } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async visit(url: string) {
    await this.page.goto(url);
  }

  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async type(locator: string, text: string) {
    await this.page.locator(locator).fill(text);
  }

  getLocator(locator: string): Locator {
    return this.page.locator(locator);
  }
}
