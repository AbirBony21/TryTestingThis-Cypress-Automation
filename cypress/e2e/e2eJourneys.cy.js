/// <reference types= 'cypress'/>

import { Utility } from "./utilities/utility"
import { TryTestingThisActions } from "./pages/tryTestingThisActions"

const utilities = new Utility()
const tryTestingThisActions = new TryTestingThisActions()

var firstname = 'Md. Abir'
var lastname = 'Hossain'
// var optionsToCheck = []
var fileToUpload = 'example.json'

var username = 'test'
var password = 'test'

const genderOptions = ['Male', 'Female', 'Other']
const expectedOptions = ['option', 'option 1', 'option 2', 'option 3']
const expectedOptionsCb = ['Option 1', 'Option 2', 'Option 3']
// const expectedDatalistOptions = ['Chocolate', 'Vanilla', 'Strawberry', 'Mint', 'Banana']
// const expectedTableHeaders = ["Firstname", "Lastname", "Gender", "Age", "Occupation"]

describe('End to End Full Journeys', function () {

    beforeEach(function () {
        cy.visit('https://trytestingthis.netlify.app/')
    })

    it('Verify successful form submission journey', () => {
        tryTestingThisActions.enterFirstName(firstname)
        tryTestingThisActions.enterLastname(lastname)

        var gender = utilities.getRandomValue(genderOptions)
        tryTestingThisActions.selectGender(gender)

        var randomOption = utilities.getRandomValue(expectedOptions)
        tryTestingThisActions.selectOptionDropdown(randomOption)

        var randomOption = utilities.getRandomValue(expectedOptionsCb)
        tryTestingThisActions.checkOption(randomOption)

        tryTestingThisActions.selectFlavorByPartial()
        tryTestingThisActions.setRandomColor()
        tryTestingThisActions.enterRandomDate()

        var randomNum = utilities.getRandomNumber(0, 100)
        var valSlider = tryTestingThisActions.setRangeSlider(randomNum)

        tryTestingThisActions.uploadFile(fileToUpload)

        var qty = utilities.getRandomNumber(1, 5)
        tryTestingThisActions.setQuantity(qty)

        var msglength = utilities.getRandomNumber(256, 400)
        var longMessage = utilities.generateRandomText(msglength)
        tryTestingThisActions.clearLongMsgField()
        tryTestingThisActions.enterLongMsg(longMessage)

        tryTestingThisActions.clickOnAlertButton()
        tryTestingThisActions.clickOnDblButton()
        tryTestingThisActions.controlLeftDivScroll('top')

        tryTestingThisActions.controlLeftDivScroll('center')
        tryTestingThisActions.dragAndDropImg('#div1')

        tryTestingThisActions.stubWindowOpen()
        tryTestingThisActions.clickOnSubmitBtn()
        tryTestingThisActions.checkWindowOpenCalledWith('http://google.com', '_blank')

    })

    it('Validate successful login journey', () => {

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