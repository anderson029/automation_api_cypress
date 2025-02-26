const { defineConfig } = require('cypress');
const fs = require('fs'); 

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.BASE_URL = 'https://www.advantageonlineshopping.com';
      config.env.BASE_URL_PRODUCT = `${config.env.BASE_URL}/catalog/api/v1/products`;
      config.env.BASE_URL_ACCOUNT = `${config.env.BASE_URL}/accountservice/accountrest/api/v1`;


      on('task', {
        saveUserData(data) {
          fs.writeFileSync('cypress/fixtures/userData.json', JSON.stringify(data));
          return null; 
        },
      });

      on('task', {
        getUserData() {
          try {
            const data = fs.readFileSync('cypress/fixtures/userData.json', 'utf8');
            return JSON.parse(data);
          } catch (error) {
            console.error('Erro ao ler o arquivo userData.json:', error);
            return null;
          }
        },
      });

      on('task', {
        saveResponseLogin(data) {
          fs.writeFileSync('cypress/fixtures/responseLogin.json', JSON.stringify(data));
          return null; 
        },
      });

      on('task', {
        getResponseLogin() {
          try {
            const data = fs.readFileSync('cypress/fixtures/responseLogin.json', 'utf8');
            return JSON.parse(data);
          } catch (error) {
            console.error('Erro ao ler o arquivo userData.json:', error);
            return null;
          }
        },
      });

      return config;
    },
  },
});