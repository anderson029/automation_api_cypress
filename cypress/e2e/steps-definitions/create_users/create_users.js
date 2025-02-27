import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { generateUserData } from '../../../fixtures/userData';
import {createUser} from '../../../support/api/accountApi'

const URL = `${Cypress.env('BASE_URL_ACCOUNT')}/register`;
let userData;

Given('que tenho uma massa válida',() =>{
  userData = generateUserData();
  Cypress.env('userData', userData);
})

When('envio a requisição post para cadastro',() =>{
  createUser(userData).as('createUserResponse');
})

Then('é exibido o status code {int}',(code) =>{
  cy.get('@createUserResponse').then((response) => {
    expect(response.status).to.eq(code);
  });
})

Then('a resposta de confirmação do cadastro',() =>{
  cy.get('@createUserResponse').then((response) => {
    expect(response.body.response.reason).to.eql('New user created successfully.');
    expect(response.body.response.userId).to.not.be.null;
  });
})