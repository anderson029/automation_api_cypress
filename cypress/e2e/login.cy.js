import { buildLoginPayload } from '../support/payloadBuilder';
const LOGIN_ENDPOINT = `${Cypress.env('BASE_URL')}/accountservice/accountrest/api/v1/login`;

describe('Login de usuário', () => {
  const getUserCredentials = () => {
    return cy.task('getUserData').then((userData) => {
      Cypress.env('loginName', userData.loginName);
      Cypress.env('password', userData.password);
      Cypress.env('email', userData.email);
    });
  };

  before(() => {
    getUserCredentials();
  });

  it('Deve fazer login com o usuário criado', () => {
    const credentials = buildLoginPayload();

    cy.api({
      url: LOGIN_ENDPOINT,
      method: 'POST',
      body: credentials,
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.statusMessage.reason).to.eql('Login Successful');

      const token = response.body.statusMessage.token;
      const userId = response.body.statusMessage.userId;
      Cypress.env('authToken', token);
      Cypress.env('userId', userId);

      cy.task('saveResponseLogin', { token, userId});
    });
  });
});