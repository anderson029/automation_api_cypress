import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {getProductAPI} from '../../../support/api/productApi'

let BASE_URL_PRODUCT;

Given('que tenho a URL disponível para consultas de produtos', () => {
  BASE_URL_PRODUCT = `${Cypress.env('BASE_URL_PRODUCT')}/search`;
});

When('faço a requisição do produto {string}', (nameProduct) => {
  getProductAPI(nameProduct).as("productResponse");
});

Then('o produto retornado deve ser {string}', (nameProduct) => {
  cy.get('@productResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body[0].products[0].productName).to.eq(nameProduct);
  });
});
