describe('Login de usuário', () => {
    const url = `${Cypress.env('BASE_URL')}/accountservice/accountrest/api/v1/login`;
  
    it('Deve fazer login com o usuário criado', () => {
      const loginName = Cypress.env('loginName');
      const password = Cypress.env('password');
      const email = Cypress.env('email');

      cy.log(`LoginName criado no teste anterior: ${loginName}`);
      cy.log(`LoginName: ${loginName}`);
      cy.log(`Password: ${password}`);
      cy.log(`Email: ${email}`);
  
      const credentials = {
        email: email,
        loginName: loginName,
        password: password,
      };
  
      cy.api({
        url: url,
        method: 'POST',
        body: credentials,
      }).then((response) => {
        expect(response.status).to.eql(200);
        expect(response.body.response.reason).to.eql('Login successful');
        cy.log(JSON.stringify(response.body));
      });
    });
  });