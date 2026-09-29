import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  async openBrowser() {
    this.browser = await chromium.launch({
      headless: true
    });

    this.context = await this.browser.newContext({
      baseURL: process.env.BASE_URL
    });

    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);
