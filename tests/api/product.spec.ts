import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/api/ApiClient';

test('Products API returns 200', async ({ request }) => {
  const apiClient = new ApiClient(request);

  const response = await apiClient.getProducts();

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.products).toBeDefined();
  expect(body.products.length).toBeGreaterThan(0);
});