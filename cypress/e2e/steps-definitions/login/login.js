import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {createUser, login} from '../../../support/api/accountApi';
import {generateUserData} from '../../../fixtures/userData'

let loginEmail, loginName, loginPassword; 

Given('que tenho a massa para fazer login', () => {
  const userData = generateUserData();
  createUser(userData).then((response) => {
    cy.wrap(response).as('createUserResponse');

    Cypress.env('loginEmail', userData.email);
    Cypress.env('loginName', userData.loginName);
    Cypress.env('loginPassword', userData.password);
  });
});

When('faço a requisição post', () => {
  const credentials = {
    email: Cypress.env('loginEmail'),
    loginUser: Cypress.env('loginName'),
    loginPassword: Cypress.env('loginPassword')
  };

  login(credentials).as('loginResponse');
});

Then('vejo o status code {int}', (code) => {
  cy.get('@loginResponse').then((response) => {
    expect(response.status).to.eq(code); 
  });
});

Then('vejo a mensagem de sucesso {string}', (message) => {
  cy.get('@loginResponse').its('body.statusMessage.reason').should('eq', message);
});