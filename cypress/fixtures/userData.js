import { faker } from '@faker-js/faker';

export const generateUserData = () => {
  return {
    accountType: "ADMIN",
    address: faker.address.streetAddress(),  
    allowOffersPromotion: faker.datatype.boolean(),  
    aobUser: faker.datatype.boolean(),
    cityName: faker.address.city(),
    country: "UNITED_STATES_US",
    email: faker.internet.email(),  
    firstName: faker.name.firstName(),  
    lastName: faker.name.lastName(),
    loginName: `Andts${faker.name.lastName()}`,
    password: 'Admin@123',
    phoneNumber: "+55011984848484",
    stateProvince: "NY",
    zipcode: faker.address.zipCode()
  };
};