const { defineConfig } = require("cypress");

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
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: "cypress/component/**/*.cy.js",
    supportFile: "cypress/support/component.js",
    setupNodeEvents(on, config) {
      on("before:run", () => {
        console.log("Iniciando os testes Unitários...");
      });
      return config;
    },
  },
  },
);
