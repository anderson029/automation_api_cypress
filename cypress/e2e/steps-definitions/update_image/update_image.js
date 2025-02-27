import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import {createUser, login} from '../../../support/api/accountApi';
import {generateUserData} from '../../../fixtures/userData'
import {updateImageAPI} from '../../../support/api/productApi';

let userId;
let userToken;

Given('que estou logado',() =>{
  const userData = generateUserData();

  createUser(userData).then((response) => {
    cy.wrap(response).as('createUserResponse');

    Cypress.env({
      loginEmail: userData.email,
      loginName: userData.loginName,
      loginPassword: userData.password
    });

    const credentials = {
      email: userData.email,
      loginUser: userData.loginName,
      loginPassword: userData.password
    };

    login(credentials).then((loginResponse) => {
      cy.wrap(loginResponse).as('loginResponse');

      userId = loginResponse.body.statusMessage.userId;
      userToken = loginResponse.body.statusMessage.token;

      Cypress.env('userId', userId);
      Cypress.env('userToken', userToken);
    });
  });
});

When('atualizo a imagem do produto',() =>{
  // cy.fixture('update.jpg', 'binary').then((file) => {
  //   const blob = Cypress.Blob.binaryStringToBlob(file);

  //   const formData = new FormData();
  //   formData.append('file', blob, 'update.jpg');

  //   const idProduct = '15';

  //   updateImageAPI(userId, idProduct, userToken, formData).as('responseImage');
  // });

  const URL_UPDATE = `${Cypress.env('BASE_URL')}/catalog/api/v1/product/image/${userId}/source/black`;
    cy.fixture('update.jpg', 'binary').then((file) => {
      const blob = Cypress.Blob.binaryStringToBlob(file);
      const formData = new FormData();
      formData.append('file', blob, 'update.jpg');

      cy.api({
        method: 'POST',
        url: URL_UPDATE,
        headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${userToken}`,
        },
        qs: {
          product_id: '15'
        },
        body: formData,
      }).then((response) => {
        expect(response.status).to.eql(200); 
        cy.log('Resposta da API:', JSON.stringify(response.body));
      });
    });
})

Then('é retornado a confirmação da atualização',() =>{
  //  cy.get('@responseImage').then((response) => {
  //   expect(response.status).to.eql(200);
  //   cy.log('Resposta da API:', JSON.stringify(response.body));
  // });
});