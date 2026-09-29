import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  cart = 'a[href="/view_cart"]';

  async openCart() {
    await this.click(this.cart);
  }

  async verifyProduct(product: string) {
    await expect(this.page.locator('#cart_info'))
      .toContainText(product);
  }
}