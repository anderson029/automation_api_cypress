describe('/products GET', () => {
  it('Deve consultar produto por id', { tags: '@get_product' }, () => {
    cy.api({
      url: `${Cypress.env('BASE_URL')}/catalog/api/v1/products/15`,
      method: 'GET'
    }).then(response => {
      expect(response.status).to.eql(200)
    })
  })
})