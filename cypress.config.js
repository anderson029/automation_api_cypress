const { defineConfig } = require('cypress');
const fs = require('fs'); // Importar o módulo fs

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.BASE_URL = 'https://www.advantageonlineshopping.com';

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