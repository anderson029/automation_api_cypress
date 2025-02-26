describe('/products GET', () => {
  it('Deve consultar produto por id', { tags: '@get_product_id' }, () => {
    cy.api({
      url: `${Cypress.env('BASE_URL_PRODUCT')}/15`,
      method: 'GET'
    }).then(response => {
      expect(response.status).to.eql(200)
      cy.writeFile('cypress/responses/get_products.json', response.body);
    })
  })

  it('Deve consultar produto por nome', { tags: '@get_product_param' }, () => {
    cy.api({
      url: `${Cypress.env('BASE_URL_PRODUCT')}/search`,
      method: 'GET',
      qs: {
        name: 'Beats Studio 2 Over-Ear Matte Black Headphones',
        quantityPerEachCategory: 2
      }
    }).then(response => {
      expect(response.status).to.eql(200)
      cy.writeFile('cypress/responses/get_products_param.json', response.body);
    })
  })
})