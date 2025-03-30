const { defineConfig } = require("cypress");
const path = require('path');
const webpackConfig = require("./webpack.config");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: "cypress/integration/**/*.spec.js",
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
      framework: 'react',
      bundler: 'webpack',
      webpackConfig
    },
    supportFile: "cypress/support/component.js",
    specPattern:"cypress/component/**/*.cy.js",
  },
});
