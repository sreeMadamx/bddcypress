const fs = require('fs');
const path = require('path');
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // Add Allure plugin
  allureWriter(on, config);

  // Add Cucumber preprocessor plugin for JSON reports
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Set up file bundler for Cucumber preprocessor
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Delete screenshots folder before running tests
  on('before:run', () => {
    const screenshotDir = path.join(config.projectRoot, 'cypress', 'screenshots');
    console.log(`Attempting to delete screenshot folder: ${screenshotDir}`);

    if (fs.existsSync(screenshotDir)) {
      try {
        fs.rmdirSync(screenshotDir, { recursive: true });
        console.log("Screenshots folder deleted successfully.");
      } catch (error) {
        console.error("Error deleting screenshots folder:", error);
      }
    } else {
      console.log("Screenshots folder does not exist.");
    }
  });

  return config;
}

module.exports = defineConfig({
  projectId: 'bn1uf4',
  e2e: {
    setupNodeEvents,
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    specPattern: "cypress/e2e/features/*.feature",
    screenshotsFolder: 'cypress/screenshots',
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },
});