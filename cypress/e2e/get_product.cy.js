describe('/products GET', () => {
  it('Deve consultar produto por id', () => {
    cy.api({
      url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/15',
      method: 'GET'
    }).then(response => {
      expect(response.status).to.eql(200)
    })
  })
})