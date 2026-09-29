import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  signupLogin='a[href="/login"]';

  name='[data-qa="signup-name"]';

  email='[data-qa="signup-email"]';

  signup='[data-qa="signup-button"]';

  async open(){

    await this.visit('/');

    await this.click(this.signupLogin);

  }

  async signupUser(name:string,email:string){

    await this.type(this.name,name);

    await this.type(this.email,email);

    await this.click(this.signup);

  }

}