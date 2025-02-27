import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {createUser, login} from '../../../support/api/accountApi';
import {generateUserData} from '../../../fixtures/userData'

let loginEmail, loginName, loginPassword; 

Given('que tenho a massa para fazer login', () => {
  const userData = generateUserData();
  createUser(userData).then((response) => {
    cy.wrap(response).as('createUserResponse');

    loginEmail = userData.email;
    loginName = userData.loginName;
    loginPassword = userData.password;

    Cypress.env('loginEmail', userData.email);
    Cypress.env('loginName', userData.loginName);
    Cypress.env('loginPassword', userData.password);
  });
});

When('faço a requisição post', () => {
   const credentials = {
    email: loginEmail,
    loginUser: loginName,
    loginPassword: loginPassword
  };

  login(credentials).then((response) => {
    cy.wrap(response).as('loginResponse');
  });
});

Then('vejo o status code {int}', (code) => {
  cy.get('@loginResponse').then((response) => {
    expect(response.status).to.eq(code); 
  });
});

Then('vejo a mensagem de sucesso {string}', (message) => {
  cy.get('@loginResponse').its('body.statusMessage.reason').should('eq', message);

  // cy.get('@loginResponse').then((response) => {
  //   cy.writeFile('cypress/responses/login_success.json', response.body);
  // });
});