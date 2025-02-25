import 'cypress-file-upload';

import { buildLoginPayload } from '../support/payloadBuilder';

Cypress.Commands.add('login', () => {
  const LOGIN_ENDPOINT = `${Cypress.env('BASE_URL')}/accountservice/accountrest/api/v1/login`;

  // Obtém as credenciais do usuário
  return cy.task('getUserData').then((userData) => {
    cy.log('Dados do usuário:', JSON.stringify(userData));
    const credentials = buildLoginPayload(userData);

    // Faz a requisição de login
    return cy.api({
      url: LOGIN_ENDPOINT,
      method: 'POST',
      body: credentials,
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.statusMessage.reason).to.eql('Login Successful');

      // Armazena o token e userId no Cypress.env()
      Cypress.env('authToken', response.body.statusMessage.token);
      Cypress.env('userId', response.body.statusMessage.userId);
    });
  });
});