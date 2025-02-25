import { faker } from '@faker-js/faker'

const URL = `${Cypress.env('BASE_URL')}/accountservice/accountrest/api/v1/register`;

describe('/account service POST', () => {
  let loginName;
  let password;
  let email;

  before(() => {
    loginName = `Anderson${faker.name.lastName()}`;
    password  = 'Admin@123'
    email = 'admin@yopmail.com'
    Cypress.env('loginName', loginName);
    Cypress.env('password', password);
    Cypress.env('email', email);
  });

  it('Deve criar um conta de usuário', () => {
    const user = {
      "accountType": "ADMIN",
      "address": "Rua Setenta e Seis",
      "allowOffersPromotion": true,
      "aobUser": false,
      "cityName": "Florida",
      "country": "UNITED_STATES_US",
      "email": email,
      "firstName": "Admin",
      "lastName": "last",
      "loginName": loginName,
      "password": password,
      "phoneNumber": "+55011984848484",
      "stateProvince": "NY",
      "zipcode": "78058482"
    };

    cy.api({
      url: URL,
      method: 'POST',
      body: user,
    }).then(response => {
      expect(response.status).to.eql(200)

      expect(response.body.response.reason).to.eql('New user created successfully.');
      expect(response.body.response.userId).to.not.be.null
      cy.log(JSON.stringify(response.body))

      cy.task('saveUserData', { loginName, password, email });
    })
  })

  it('Não deve criar um conta de usuário duplicado', () => {
    const user = {
      "accountType": "ADMIN",
      "address": "Rua Setenta e Seis",
      "allowOffersPromotion": true,
      "aobUser": false,
      "cityName": "Florida",
      "country": "UNITED_STATES_US",
      "email": email,
      "firstName": "Admin",
      "lastName": "last",
      "loginName": loginName,
      "password": password,
      "phoneNumber": "+55011984848484",
      "stateProvince": "NY",
      "zipcode": "78058482"
    };

    cy.api({
      url: URL,
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eql(403)

      expect(response.body.response.reason).to.eql('User name already exists');
      cy.log(JSON.stringify(response.body))
    })
  })
})