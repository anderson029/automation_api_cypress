import { faker } from '@faker-js/faker';

export const generateUserData = () => {
  return {
    accountType: "ADMIN",
    address: "Rua Setenta e Seis",
    allowOffersPromotion: true,
    aobUser: false,
    cityName: "Florida",
    country: "UNITED_STATES_US",
    email: `admin@yopmail.com`,
    firstName: "Admin",
    lastName: "teste",
    loginName: `Anderts${faker.name.lastName()}`,
    password: 'Admin@123',
    phoneNumber: "+55011984848484",
    stateProvince: "NY",
    zipcode: "78058482"
  };
};