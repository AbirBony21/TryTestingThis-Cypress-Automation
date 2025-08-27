const { defineConfig } = require("cypress")
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    //defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {

      on('task', {downloadFile})
      allureWriter(on, config)
      return config
    },
    env: {
      allure: true,

    }
  },
});
