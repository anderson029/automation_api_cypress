const { defineConfig } = require('cypress');
const fs = require('fs'); // Importar o módulo fs

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.BASE_URL = 'https://www.advantageonlineshopping.com';
      on('task', {
        saveUserData(data) {
          fs.writeFileSync('userData.json', JSON.stringify(data));
          return null;
        },
        getUserData() {
          return JSON.parse(fs.readFileSync('userData.json', 'utf8'));
        },
      });
      return config;
    },
  },
});