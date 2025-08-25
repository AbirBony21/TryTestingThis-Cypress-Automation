/// <reference types= 'cypress'/>

import { Utility } from "./utilities/utility"
import { TryTestingThisActions } from "./pages/tryTestingThisActions"

const utilities = new Utility()
const tryTestingThisActions = new TryTestingThisActions()

var firstname = 'Md. Abir'
var lastname = 'Hossain'
// var gender = 'Male'
var optionSelectDropdown = 'Option 3'
var checkboxValue = 'Option 2'
// var optionsToCheck = ['Option 1', 'Option 3']
var optionsToCheck = []
var flavor = 'Banana'
var fileToUpload = 'example.json'
// var dateval = '2025-08-11'
// var qty = 3
var longmsg = 'SQA stands for Software Quality Assurance'

var username = 'test'
var password = 'test'

const genderOptions = ['Male', 'Female', 'Other']
const expectedOptions = ['option', 'option 1', 'option 2', 'option 3']
const expectedOptionsCb = ['Option 1', 'Option 2', 'Option 3']
const expectedDatalistOptions = ['Chocolate', 'Vanilla', 'Strawberry', 'Mint', 'Banana']

// describe('End to End Full Journey', function () {

//     beforeEach(function () {
//         cy.visit('https://trytestingthis.netlify.app/')
//     })

//     it('Form Filling and Submission', () => {

//         tryTestingThisActions.clickContactPage()
//         tryTestingThisActions.clickHomepage()
//         tryTestingThisActions.enterFirstName(firstname)
//         tryTestingThisActions.enterLastname(lastname)
//         tryTestingThisActions.selectGender(gender)
//         tryTestingThisActions.selectOptionDropdown(optionSelectDropdown)

//         //Single option check-uncheck
//         tryTestingThisActions.checkOption(checkboxValue)
//         cy.wait(3000)
//         tryTestingThisActions.uncheckOption(checkboxValue)

//         //For Multiple Selections
//         optionsToCheck.forEach(checkboxOptionValue => {
//             cy.then(() => {
//                 tryTestingThisActions.checkOption(checkboxOptionValue)
//             })
//         });

//         tryTestingThisActions.selectFlavor(flavor)

//         tryTestingThisActions.setColorByHex('#ff5733')
//         cy.wait(2000)
//         tryTestingThisActions.setColorByRGB(0, 145, 240)
//         cy.wait(2000)
//         tryTestingThisActions.setRandomColor()

//         tryTestingThisActions.enterDate(dateval)
//         tryTestingThisActions.setRangeSlider(67)

//         tryTestingThisActions.uploadFile(fileToUpload)
//         tryTestingThisActions.setQuantity(qty)
//         tryTestingThisActions.clearLongMsgField()
//         tryTestingThisActions.enterLongMsg(longmsg)

//         tryTestingThisActions.clickOnAlertButton()

//         tryTestingThisActions.clickOnDblButton()
//         tryTestingThisActions.controlLeftDivScroll('top')
//         tryTestingThisActions.findPhoto()
//         tryTestingThisActions.controlLeftDivScroll('center')
//         tryTestingThisActions.dragAndDropImg('#div1')

//         tryTestingThisActions.clickOnSubmitBtn()
//     })

//     it('Successful Login Journey', () => {

//         tryTestingThisActions.enterUsername(username)
//         tryTestingThisActions.enterPassword(password)
//         tryTestingThisActions.clickOnLoginBtn()
//         tryTestingThisActions.clickHomepage()

//     })

// })

describe('Elements test', function () {

    beforeEach(function () {
        cy.visit('https://trytestingthis.netlify.app/')
    })

    // Layout One
    it('Verify OK Button action for Sample Alert Button', () => {
        tryTestingThisActions.clickOnAlertButton()
        tryTestingThisActions.getAlertMessage().should('have.text', 'You Pressed the OK Button!')
    })

    // it('Verify Cancel Button action for Sample Alert Button', ()=> {

    // })

    it('Verify that the image is fetched to the webpage', () => {
        tryTestingThisActions.findPhoto()
            .should('be.visible')
            .and('contains.text', 'Image')
    })

    it('Verify sample Double Click functionality', () => {
        tryTestingThisActions.clickOnDblButton()
        tryTestingThisActions.controlLeftDivScroll('top')
        tryTestingThisActions.getAlertMessage().should('have.text', 'Your Sample Double Click worked!')
    })

    it('Validate image drag and drop functionality into specific box', () => {
        tryTestingThisActions.controlLeftDivScroll('center')
        tryTestingThisActions.dragAndDropImg('#div1')

        tryTestingThisActions.dropboxState()
            .find('#drag1')
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'src', 'pizza.gif')
    })

    it('Verify that login section takes Username and Password as input', () => {
        tryTestingThisActions.controlLeftDivScroll('bottom')
        // cy.scrollTo('center')
        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.getUsernameInputText()
            .should('have.value', username)
        tryTestingThisActions.getPasswordInputText()
            .should('have.value', password)
    })

    it('Verify Successful Login with valid credentials', () => {
        tryTestingThisActions.controlLeftDivScroll('bottom')
        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.clickOnLoginBtn()
        tryTestingThisActions.getLoginSuccessMessage()
            .should('contains.text', 'Login Successful :)')
    })

    it('Verify that invalid credentials prevent login and refreshes page', () => {

        tryTestingThisActions.controlLeftDivScroll('bottom')
        const invalidCred = [
            { uname: 'asd', pass: password },
            { uname: username, pass: 'qwe' },
            { uname: 'asd12', pass: 'qwe34' }
        ]

        invalidCred.forEach(cred => {
            tryTestingThisActions.enterUsername(cred.uname)
            tryTestingThisActions.enterPassword(cred.pass)
            tryTestingThisActions.clickOnLoginBtn()

            tryTestingThisActions.getUsernameInputText().should('have.value', '')
            tryTestingThisActions.getPasswordInputText().should('have.value', '')
        })
    })

    it('Verify that successful login loads a new page', () => {
        tryTestingThisActions.controlLeftDivScroll('bottom')
        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.clickOnLoginBtn()
        tryTestingThisActions.checkLoggedinURL('https://trytestingthis.netlify.app/login.html?uname=test&pwd=test')
    })

    it('Verify that clicking "here" link redirects to homepage with an empty form', () => {
        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.clickOnLoginBtn()
        tryTestingThisActions.clickHomepage()
        tryTestingThisActions.checkCurrentURL('https://trytestingthis.netlify.app/')
    })

    //Layout Two
    it('Verify that the form takes Firstname and Lastname as input', () => {
        tryTestingThisActions.enterFirstName(firstname)
        tryTestingThisActions.enterLastname(lastname)
        tryTestingThisActions.getFirstNameInputText()
            .should('have.value', firstname)
        tryTestingThisActions.getLasttNameInputText()
            .should('have.value', lastname)
    })

    it('Validate radio button functionality for gender selection', () => {
        var gender = utilities.getRandomValue(genderOptions)
        tryTestingThisActions.selectGender(gender)
        tryTestingThisActions.assertGenderSelected(gender)
    })

    it('Verify that only one gender can be selected at a time from gender options', () => {
        var gender = utilities.getRandomValue(genderOptions)
        tryTestingThisActions.selectGender(gender)

        const firstGender = utilities.getRandomValue(genderOptions)
        tryTestingThisActions.selectGender(firstGender)
        tryTestingThisActions.assertGenderSelected(firstGender)

        const remainingGenders = genderOptions.filter(g => g !== firstGender)
        const secondGender = utilities.getRandomValue(remainingGenders)
        tryTestingThisActions.selectGender(secondGender)
        tryTestingThisActions.assertGenderSelected(secondGender)
        tryTestingThisActions.assertGenderNotSelected(firstGender)

        const thirdGender = remainingGenders.filter(g => g !== secondGender)[0]
        tryTestingThisActions.assertGenderNotSelected(thirdGender)
    })

    it('Verify that "Option" dropdown loads valid options', () => {
        tryTestingThisActions.checkDropdownOptions(expectedOptions)
    })

    it('Verify that an option can be selected from dropdown', () => {
        var randomOption = utilities.getRandomValue(expectedOptions)
        tryTestingThisActions.selectOptionDropdown(randomOption)
        tryTestingThisActions.getSelectedDropdownOpt().should('have.value', randomOption)
    })

    it('Verify Checkbox functionality for applicable Options', () => {
        var randomOption = utilities.getRandomValue(expectedOptionsCb)
        tryTestingThisActions.checkOption(randomOption)
        tryTestingThisActions.assertCheckboxIsChecked(randomOption)
    })

    it('Verify that multiple options can be checked for applicable Options', () => {

        var twoOrThree = utilities.getRandomNumber(2, 3)
        if (twoOrThree == 2) {
            optionsToCheck = Cypress._.sampleSize(expectedOptionsCb, 2)
        } else {
            optionsToCheck = [...expectedOptionsCb]
        }

        tryTestingThisActions.checkMultipleOptions(optionsToCheck)
    })

    it('Verify that datalist input dropdown shows valid suggestions', () => {
        tryTestingThisActions.checkDatalistOptions(expectedDatalistOptions)
    })

    it('Verify that partially given input is guessed correctly in Datalist', () => {
        tryTestingThisActions.selectFlavorByPartial()
    })

    it('Verify color picking by HEX input', () => {
        var hexCode = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        tryTestingThisActions.setColorByHex(hexCode);
    })

    it('Verify that input RGB values are accepted for picking color', () => {
        var red = utilities.getRandomNumber(0, 255)
        var green = utilities.getRandomNumber(0, 255)
        var blue = utilities.getRandomNumber(0, 255)
        tryTestingThisActions.setColorByRGB(red, green, blue)
    })

    // it('Verify random color pick functionality', () => {
    //     tryTestingThisActions.setRandomColor()
    // })

    it('Verify Date picker functionality', () => {
        var randomDate = tryTestingThisActions.enterRandomDate()
        tryTestingThisActions.getDateFieldValue()
            .should('have.value', randomDate)
    })

    it('Verify that range slider value is set to 50 by default', () => {
        tryTestingThisActions.getRangeSliderValue().should('equal', '50')
    })

    it('Verify that range slider accepts values from 0 to 100', () => {
        var randomNum = utilities.getRandomNumber(0, 100)
        var valSlider = tryTestingThisActions.setRangeSlider(randomNum)
        tryTestingThisActions.getRangeSliderValue().should('equal', String(randomNum))
    })

    it('Verify file upload functionality of the form', () => {
        tryTestingThisActions.uploadFile(fileToUpload)
            .should('have.value', `C:\\fakepath\\${fileToUpload}`)
    })

    it('Verify that Quantity input field accepts integer values from 1 to 5', () => {

        var qty = utilities.getRandomNumber(1, 5)
        tryTestingThisActions.setQuantity(qty)
            .should('have.value', String(qty))
    })

    //continue from here

    it('Verify that long message field can take more than 255 characters as input', () => {
        var msglength = utilities.getRandomNumber(256, 400)
        var longMessage = utilities.generateRandomText(msglength)
        tryTestingThisActions.clearLongMsgField()
        tryTestingThisActions.enterLongMsg(longMessage)
        tryTestingThisActions.assertLongMsgField(longMessage)
        tryTestingThisActions.assertLongMsgLength(255)
    })

    it('Verify that clicking "Submit" button opens a new google search tab', () => {
        tryTestingThisActions.stubWindowOpen()
        tryTestingThisActions.clickOnSubmitBtn()
        tryTestingThisActions.checkWindowOpenCalledWith('http://google.com', '_blank')
    })

    it('Verify that "Home" button in navbar routes to homepage upon clicking', () => {
        tryTestingThisActions.clickHomepage()
        tryTestingThisActions.checkCurrentURL('https://trytestingthis.netlify.app/')
    })

    it('Verify that "Contact" button in navbar routes to contacts page upon clicking', () => {
        tryTestingThisActions.clickContactPage()
        tryTestingThisActions.checkCurrentURL('https://trytestingthis.netlify.app/contact')
    })

    //Layout Three
    it('Verify that Date is shown correctly in table description', () => {
        var expectedDate = 'Sep 2, 2017'
        tryTestingThisActions.checkDescriptionDate(expectedDate)
    })





})