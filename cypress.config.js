const { defineConfig } = require("cypress");
const webpackConfig = require('./webpack.config.js');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: "cypress/e2e/**/*.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      on("before:run", () => {
        console.log("Iniciando os testes E2E...");
      });
      return config;
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig, 
    },
    specPattern: "cypress/component/**/*.cy.js",
    supportFile: "cypress/support/component.js",
  },
});
