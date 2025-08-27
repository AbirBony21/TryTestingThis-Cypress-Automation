const { defineConfig } = require("cypress")
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    //defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})
      allureWriter(on, config)
      return config
    },
    env: {
      // turn Allure on by default (you can also pass --env allure=true via CLI)
      allure: true,
      // optional tweaks:
      // allureResultsPath: 'allure-results',
      // allureReuseAfterSpec: true, // if other plugins use after:spec listener
      // allureAddVideoOnPass: true  // attach videos for passed tests too
    }
  },
});
