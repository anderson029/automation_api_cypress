describe('Upload de imagem', () => {
  let userId; 
  let token; 

  before(() => {
    cy.task('getResponseLogin').then((responseLogin) => {
      if (responseLogin) {
        userId = responseLogin.userId; 
        token = responseLogin.token;

        Cypress.env('userId', userId);
        Cypress.env('authToken', token);
      } else {
        throw new Error('Error response login credentials.');
      }
    });
  });

  it('Deve fazer upload de uma imagem', () => {
    const URL_UPDATE = `${Cypress.env('BASE_URL')}/catalog/api/v1/product/image/${userId}/source/black?product_id=15`;
    cy.fixture('update.jpg', 'binary').then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file);
      const formData = new FormData();
      formData.append('file', blob, 'update.jpg');

      cy.api({
        method: 'POST',
        url: URL_UPDATE,
        headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      }).then((response) => {
        expect(response.status).to.eql(200); 
        cy.log('Resposta da API:', JSON.stringify(response.body));
      });
    });
  });
});