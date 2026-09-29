import { test } from '@playwright/test';
import products from '../../test-data/products.json';

import { ProductPage } from '../../src/pages/ProductPage';

products.forEach((product) => {
  test(`Search ${product.name}`, async ({ page }) => {
    const productPage = new ProductPage(page);

    await productPage.search(product.name);

    await productPage.verifyResults(product.name);
  });
});
