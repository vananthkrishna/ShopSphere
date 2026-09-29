import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  searchBox = '#search_product';
  searchButton = '#submit_search';
  firstProduct = '.productinfo';
  addToCart = '.add-to-cart';

  async search(product: string) {
    await this.visit('/products');

    await this.type(this.searchBox, product);

    await this.click(this.searchButton);
  }

  async verifyResults(product: string) {
    await expect(this.page.locator('.features_items')).toContainText(product);
  }

  async addFirstItem() {
    await this.page.locator(this.firstProduct).first().hover();

    await this.page.locator(this.addToCart).first().click();
  }
}
