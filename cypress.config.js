const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.BASE_URL = 'https://www.advantageonlineshopping.com';
      return config;
    },
  },
});