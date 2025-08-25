/// <reference types= 'cypress'/>

import { Utility } from "./utilities/utility"
import { TryTestingThisActions } from "./pages/tryTestingThisActions"

const utilities = new Utility()
const tryTestingThisActions = new TryTestingThisActions()

var firstname = 'Md. Abir'
var lastname = 'Hossain'
var optionsToCheck = []
var fileToUpload = 'example.json'

var username = 'test'
var password = 'test'

const genderOptions = ['Male', 'Female', 'Other']
const expectedOptions = ['option', 'option 1', 'option 2', 'option 3']
const expectedOptionsCb = ['Option 1', 'Option 2', 'Option 3']
const expectedDatalistOptions = ['Chocolate', 'Vanilla', 'Strawberry', 'Mint', 'Banana']
const expectedTableHeaders = ["Firstname", "Lastname", "Gender", "Age", "Occupation"]

describe('End to End Full Journey', function () {

    beforeEach(function () {
        cy.visit('https://trytestingthis.netlify.app/')
    })

    // it('Form Filling and Submission', () => {

    // })

    it('Successful Login Journey', () => {

        tryTestingThisActions.controlLeftDivScroll('bottom')
        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.clickOnLoginBtn()
        tryTestingThisActions.checkLoggedinURL('https://trytestingthis.netlify.app/login.html?uname=test&pwd=test')
        tryTestingThisActions.getLoginSuccessMessage()
            .should('contains.text', 'Login Successful :)')
        tryTestingThisActions.clickHomepage()
        tryTestingThisActions.checkCurrentURL('https://trytestingthis.netlify.app/')

    })

})