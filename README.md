
# TryTestingThis Cypress Automation

Automated testing project built with [Cypress](https://www.cypress.io/) for the [Try Testing This](https://trytestingthis.netlify.app/) demo website.  
This project follows the **Page Object Model (POM)** design pattern, includes **Allure Reporting**, and demonstrates best practices in end-to-end test automation. UI elements were also tested individually.

---

## 📌 Project Overview
The purpose of this repository is to:
- Practice and showcase **Cypress automation** on a demo site.
- Implement **Page Object Model (POM)** for clean and maintainable test code.
- Generate **Allure Reports** for professional test reporting.
- Identify and document functional issues/bugs in the demo site.

---

## 🛠️ Tech Stack
- **Cypress** (v14.4.0) – Test automation framework  
- **JavaScript (ES6)** – Test scripting  
- **Allure Reporter** – Rich test reporting
- **Browser** – Chrome, Edge, Electron, Firefox  
- **Cypress Plugins**:  
  - [cypress-file-upload](https://www.npmjs.com/package/cypress-file-upload)    
  - [@4tw/cypress-drag-drop](https://www.npmjs.com/package/@4tw/cypress-drag-drop)  

---

## 📂 Project Structure
**Page Object Model:** Ensures modular and maintainable code
```
├── cypress
│   ├── downloads
│   ├── e2e
│   │   ├── pages
│   │   │   ├── tryTestingThisLocators.js
│   │   │   ├── tryTestingThisActions.js
│   │   ├── utilities
│   │   │   ├── utility.js
│   ├── fixtures
│   │   ├── example.json
│   │   ├── shinji.jpg
│   │   ├── tableData.json
│   ├── screenshots
│   ├── support
│   │   ├── commands.js
│   │   ├── e2e.js
├── cypress.config.js
├── package-lock.json
├── package.json
├── README.md
```

---

## Test Case Summary

- **Spec Files**: 2
- **Total Test Cases**: 40 (38 + 2 E2E)
- **Passed**: 38
- **Failed**: 2
- **Pass Rate**: 95%

---

## Test Coverage

Automated testing of the "Try Testing This" website using Cypress, JavaScript, Mocha, and Allure Reporter, following POM.

### Element-Level Tests
- **Buttons & Alerts:** OK button, double-click, navigation buttons, invalid input alerts  
- **Images:** presence check, drag-and-drop  
- **Forms:** Username, Password (masked), Firstname, Lastname, Quantity (1–5), Long Message (>255 chars), file upload, form submission, new tab behavior  
- **Authentication:** valid login, invalid login prevention, redirection  
- **Input Controls:**  
  - Radio buttons: single selection  
  - Dropdowns: load options, select option  
  - Checkboxes: single/multiple selection  
  - Datalist: suggestions, partial input, invalid input alert  
  - Color picker: HEX/RGB inputs  
  - Date picker: selection validation  
  - Range slider: default & range values  
- **Tables:** headers, row/column count, cell data, gender & age validation, full row data verification  

### End-to-End (E2E) Journeys
- Full form submission workflow  
- Complete login workflow

---

## 🚀 Installation Guide

### 1. Clone the repository
   ```bash
   git clone https://github.com/AbirBony21/trytestingthis-cypress-automation.git
   cd trytestingthis-cypress-automation
   ```
### 2. Initialize `package.json`
```sh
npm init -y
```
### 3. Install package cypress-file-upload
```sh
npm install --save-dev cypress-file-upload
```
### 4. Install Drag&Drop Plugin
```sh
npm install --save-dev @4tw/cypress-drag-drop
```

## 📊 Allure Report Setup

### 1. Install Allure Reporter
```sh
npm install --save-dev @shelex/cypress-allure-plugin
```
### 2. Install **allure-Commandline** and **rimraf**
```sh
npm i -D allure-commandline rimraf
```
### 3. Add **allure-writer** and **env** to `cypress.config.js`
```js
const { defineConfig } = require("cypress")
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
```
### 4. Import the plugin in your support file `cypress/support/e2e.js`
```js
import '@shelex/cypress-allure-plugin';
```
### 5. Organize `package.json` scripts
```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",

    "allureClear": "rimraf allure-results allure-report",
    "cyRunAllure": "cypress run --env allure=true",
    "allureReport": "allure generate allure-results --clean -o allure-report",
    "allureOpen": "allure open allure-report",

    "testAllure": "npm run allureClear && npm run cyRunAllure && npm run allureReport && npm run allureOpen",
    "cy-test": "cypress run"
  },
```

## ▶️ Only Test Execution

### 1. Launch the Cypress Test Runner GUI
```sh
npx cypress open
```
### 2. Execute Cypress tests directly from the command line
```sh
npx cypress run
```
### 3. Execute Specific Cypress Spec file directly from the command line
```sh
npx cypress run -s elements.cy.js
npx cypress run -s e2eJourneys.cy.js
```

## ▶️📊 Test Execution & Genarate Report

### 1. Clean Results before Test
```sh
npm run allureClear
```
### 2. Run Cypress tests with Allure reporting enabled
```sh
npm run cyRunAllure
```
### 3. Generate Allure report (HTML format) from test results in `allure-results/` folder
```sh
npm run allureReport
```
### 4. Open the generated Allure report in a local browser
```sh
npm run allureOpen
```

# HAPPY TESTING !!! 🔍🐞

