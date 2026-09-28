import { Page } from '@playwright/test';

export class HomePage {

  constructor(private page: Page) {}

  products = 'a[href="/products"]';
  cart = 'a[href="/view_cart"]';

  async open() {
    await this.page.goto('/');
  }

  async openProducts() {
    await this.page.click(this.products);
  }

  async openCart() {
    await this.page.click(this.cart);
  }

}