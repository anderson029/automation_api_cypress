import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
// import { buildLoginPayload } from '../../../support/payloadBuilder';

const LOGIN_ENDPOINT = `${Cypress.env('BASE_URL_ACCOUNT')}/login`;

Given('que tenho a massa para fazer login', () => {
  const users = {
    email: "admin@yopmail.com",
    loginUser: "AndersonMooreee",
    loginPassword: "Admin@123"
  };

  Cypress.env('email', users.email);
  Cypress.env('loginUser', users.loginUser);
  Cypress.env('loginPassword', users.loginPassword);
});

When('faço a requisição post', () => {
  // // Constrói o payload de login usando a função importada
  // const credentials = buildLoginPayload();
   const credentials = {
    email: Cypress.env('email'),
    loginUser: Cypress.env('loginUser'),
    loginPassword: Cypress.env('loginPassword')
  };

  cy.api({
    url: LOGIN_ENDPOINT,
    method: 'POST',
    body: credentials,
  }).as('loginResponse');
});

Then('vejo o status code 200', () => {
  cy.get('@loginResponse').its('status').should('eq', 200);
});


Then('vejo a mensagem de sucesso {string}', (message) => {
  cy.get('@loginResponse').its('body.statusMessage.reason').should('eq', message);

  cy.get('@loginResponse').then((response) => {
    const token = response.body.statusMessage.token;
    const userId = response.body.statusMessage.userId;

    Cypress.env('authToken', token);
    Cypress.env('userId', userId);


    cy.task('saveResponseLogin', { token, userId });
    cy.writeFile('cypress/responses/login_success.json', response.body);
  });
});