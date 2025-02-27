const BASE_URL_ACCOUNT = Cypress.env('BASE_URL_ACCOUNT');

export const createUser = (userData) => {
  return cy.api({
    url: `${BASE_URL_ACCOUNT}/register`,
    method: 'POST',
    body: userData,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(200);
    cy.writeFile('cypress/responses/create_user_response.json', response.body); 

    return cy.wrap(response);
  });
};

export const login = (credentials) => {
  return cy.api({
    url: `${BASE_URL_ACCOUNT}/login`,
    method: 'POST',
    body: credentials,
  }).then((response) => {
    expect(response.status).to.eq(200); 
    cy.log('Resposta do login:', JSON.stringify(response, null, 2)); 
    cy.writeFile('cypress/responses/login_response.json', response.body); 
    
    return cy.wrap(response); 
  });
};
