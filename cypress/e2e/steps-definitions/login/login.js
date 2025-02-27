import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {createUser} from '../create_users/create_users';
import {generateUserData} from '../../../fixtures/userData'

const LOGIN_ENDPOINT = `${Cypress.env('BASE_URL_ACCOUNT')}/login`;

let loginEmail
let loginName
let loginPassword

Given('que tenho a massa para fazer login', () => {
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
  });

  if (loginEmail || loginName || loginPassword) {
    throw new Error('Credential null');
  }
});

When('faço a requisição post', () => {
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

Then('vejo o status code {int}', (code) => {
  cy.get('@loginResponse').its('status').should('eq', code);
});

Then('vejo a mensagem de sucesso {string}', (message) => {
  cy.get('@loginResponse').its('body.statusMessage.reason').should('eq', message);

  cy.get('@loginResponse').then((response) => {
    cy.writeFile('cypress/responses/login_success.json', response.body);
  });
});