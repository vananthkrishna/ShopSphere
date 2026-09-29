import { test } from '@playwright/test';

import { RegisterPage } from '../../src/pages/RegisterPage';

import { AccountInfoPage } from '../../src/pages/AccountInfoPage';

import { createUser } from '../../utils/userFactory';

test('Complete user registration', async({page})=>{

 const user=createUser();

 const register=new RegisterPage(page);

 const account=new AccountInfoPage(page);

 await register.open();

 await register.signupUser(
  user.name,
  user.email
 );

 await account.fillAccountForm();

 await account.verifyAccountCreated();

});