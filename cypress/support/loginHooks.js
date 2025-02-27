// import {generateUserData} from '../fixtures/userData';
// import {createUser} from '../e2e/steps-definitions/create_users/create_users';

// before(() => {
//   const userData = generateUserData();

//   Cypress.env('userData', userData);

//   createUser(userData).then((response) => {
//     expect(response.status).to.eq(200);
//     Cypress.env('loginEmail', userData.email);
//     Cypress.env('loginPassword', userData.password);
//     Cypress.env('loginName', userData.loginName);
//   });
// });
