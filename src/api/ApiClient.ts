import { APIRequestContext } from '@playwright/test';

export class ApiClient {

  constructor(private request: APIRequestContext) {}

  async getProducts() {
    return this.request.get(
      'https://automationexercise.com/api/productsList'
    );
  }

}