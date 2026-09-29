import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountInfoPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  titleMr = '#id_gender1';
  password = '#password';

  day = '#days';
  month = '#months';
  year = '#years';

  firstName = '#first_name';
  lastName = '#last_name';
  company = '#company';

  address = '#address1';
  country = '#country';
  state = '#state';
  city = '#city';
  zipcode = '#zipcode';
  mobile = '#mobile_number';

  createButton = '[data-qa="create-account"]';

  async fillAccountForm(password: string) {

    await this.page.check(this.titleMr);

    await this.page.fill(this.password, password);

    await this.page.selectOption(this.day,'10');
    await this.page.selectOption(this.month,'5');
    await this.page.selectOption(this.year,'1998');

    await this.page.fill(this.firstName,'Ananth');
    await this.page.fill(this.lastName,'V');
    await this.page.fill(this.company,'OpenAI');

    await this.page.fill(this.address,'123 Test Street');

    await this.page.selectOption(this.country,'United States');

    await this.page.fill(this.state,'Illinois');
    await this.page.fill(this.city,'Chicago');
    await this.page.fill(this.zipcode,'60616');
    await this.page.fill(this.mobile,'3125551234');

    await this.page.click(this.createButton);

  }

  async verifyAccountCreated() {

    await expect(
      this.page.locator('h2[data-qa="account-created"]')
    ).toBeVisible();

  }

}