describe('/account service POST', () => {
  it('Deve criar um conta de usuário', () => {
    const user = {
      "accountType": "ADMIN",
      "address": "Rua Setenta e Seis",
      "allowOffersPromotion": true,
      "aobUser": false,
      "cityName": "Florida",
      "country": "UNITED_STATES_US",
      "email": "admin@yopmail.com",
      "firstName": "Admin",
      "lastName": "last",
      "loginName": "AndeeOliveira",
      "password": "Admin@1234",
      "phoneNumber": "+55011984848484",
      "stateProvince": "NY",
      "zipcode": "78058482"
    };

    cy.api({
      url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/register',
      method: 'POST',
      body: user,
    }).then(response => {
      expect(response.status).to.eql(200)
      expect(response.body.response.reason).to.eql('New user created successfully.');
    })
  })
})