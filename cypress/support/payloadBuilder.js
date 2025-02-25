export const buildLoginPayload = () => {
    return {
      email: Cypress.env('email'),
      loginUser: Cypress.env('loginName'),
      loginPassword: Cypress.env('password'),
    };
  };