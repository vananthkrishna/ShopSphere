import { APIRequestContext } from '@playwright/test';

export class ProductApi{

 constructor(private request:APIRequestContext){}

 async getProducts(){

  return this.request.get(
   'https://automationexercise.com/api/productsList'
  );

 }

}