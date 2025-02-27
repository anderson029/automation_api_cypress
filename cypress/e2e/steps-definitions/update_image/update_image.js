import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {generateUserData} from '../../../fixtures/userData'

let userId;
let token;
let URL_PRODUCT;

Given('que estou logado',() =>{
  const userData = generateUserData();
    Cypress.env('userData', userData);
  
    createUser(userData).then((response) => {
      expect(response.status).to.eq(200);
    
      Cypress.env('loginEmail', userData.email);
      Cypress.env('loginName', userData.loginName);
      Cypress.env('loginPassword', userData.password);
  
      loginEmail = Cypress.env('loginEmail');
      loginName = Cypress.env('loginName');
      loginPassword = Cypress.env('loginPassword');

      const credentials = {
        email: loginEmail,
        loginUser: loginName,
        loginPassword: loginPassword
      };
    
      cy.api({
        url: LOGIN_ENDPOINT,
        method: 'POST',
        body: credentials,
      }).as('loginResponse');
    });
});

When('atualizo a imagem do produto',() =>{
  
})

Then('é retornado a confirmação da atualização',() =>{
  
})