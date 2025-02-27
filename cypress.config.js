const { defineConfig } = require('cypress');
const fs = require('fs');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    excludeSpecPattern: '*.js',
    supportFile: 'cypress/support/e2e.js',

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      config.env.BASE_URL = 'https://www.advantageonlineshopping.com';
      config.env.BASE_URL_PRODUCT = `${config.env.BASE_URL}/catalog/api/v1/products`;
      config.env.BASE_URL_ACCOUNT = `${config.env.BASE_URL}/accountservice/accountrest/api/v1`;

      return config;
    },
  },
});