import { faker } from '@faker-js/faker';

const URL = `${Cypress.env('BASE_URL')}/accountservice/accountrest/api/v1/register`;

describe('Account users', () => {
  let userData;

  before(() => {
    userData = generateUserData();
    Cypress.env('userData', userData);
  });

  it('Deve criar uma conta de usuário', () => {
    createUser(userData).then(response => {
      expect(response.status).to.eql(200);
      expect(response.body.response.reason).to.eql('New user created successfully.');
      expect(response.body.response.userId).to.not.be.null;
      cy.writeFile('cypress/responses/create_account.json', response.body);
    });
  });

  it('Não deve criar uma conta de usuário duplicado', () => {
    createUser(userData).then(response => {
      expect(response.status).to.eql(403);
      expect(response.body.response.reason).to.eql('User name already exists');
      cy.writeFile('cypress/responses/create_account_fail.json', response.body);
    });
  });

  const createUser = (userData) => {
    return cy.api({
      url: URL,
      method: 'POST',
      body: userData,
      failOnStatusCode: false
    });
  };
  
  const generateUserData = () => {
    return {
      accountType: "ADMIN",
      address: "Rua Setenta e Seis",
      allowOffersPromotion: true,
      aobUser: false,
      cityName: "Florida",
      country: "UNITED_STATES_US",
      email: `admin@yopmail.com`,
      firstName: "Admin",
      lastName: "last",
      loginName: `Anderson${faker.name.lastName()}`,
      password: 'Admin@123',
      phoneNumber: "+55011984848484",
      stateProvince: "NY",
      zipcode: "78058482"
    };
  };
});