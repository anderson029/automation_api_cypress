const BASE_URL_PRODUCT = Cypress.env('BASE_URL_PRODUCT');

export const getProductAPI = (nameProduct) => {
  return cy.api({
    url: `${BASE_URL_PRODUCT}/search`,
    method: 'GET',
    failOnStatusCode: false,
    qs: {
      name: nameProduct
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    cy.writeFile('cypress/responses/get_product.json', response.body); 

    return cy.wrap(response);
  });
};

export const updateImageAPI = (userId, idProduct, userToken, formData) => {
   
   cy.log('URL:', `${BASE_URL_PRODUCT}/image/${userId}/source/blue/`);
   cy.log('Query Params:', `product_id=${idProduct}`);
   cy.log('Headers:', JSON.stringify({
     'Authorization': `Bearer ${userToken}`
   }));
 
   cy.log('FormData está sendo enviado...');
   cy.log('Arquivo sendo enviado:', formData.get('file').name);

  return cy.api({
    url: `${BASE_URL_PRODUCT}/image/${userId}/source/blue`,
    method: 'POST',
    failOnStatusCode: false,
    headers: {
      'accept': '*/*',
      'Authorization': `Bearer ${userToken}`
    },
    qs: {
      product_id: idProduct
    },
    body: formData,
  }).then((response) => {
    expect(response.status).to.eql(200); 
     
     cy.log('Status da resposta:', response.status);
     cy.log('Corpo da resposta:', JSON.stringify(response.body));

    cy.log('Resposta da API:', JSON.stringify(response.body));

    return cy.wrap(response);
  });
};



 