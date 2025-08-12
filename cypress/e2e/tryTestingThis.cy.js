/// <reference types= 'cypress'/>

import { Utility } from "./utilities/utility"
import { TryTestingThisActions } from "./pages/tryTestingThisActions"

const utilities = new Utility()
const tryTestingThisActions = new TryTestingThisActions()

var firstname = 'Md. Abir'
var lastname = 'Hossain'
var gender = 'Male'
var optionSelectDropdown = 'Option 3'
var checkboxValue = 'Option 2'
var optionsToCheck = ['Option 1', 'Option 3']
var flavor = 'Banana'
var fileToUpload = 'example.json'
var dateval = '2025-08-11'
var qty = 3
var longmsg = 'SQA stands for Software Quality Assurance'

var username = 'test'
var password = 'test'

const expectedOptions = ['Option', 'Option 1', 'Option 2', 'Option 3']
const expectedOptionsCb = ['Option 1', 'Option 2', 'Option 3']
const expectedDatalistOptions = ['Chocolate', 'Vanilla', 'Strawberry', 'Mint', 'Banana']

describe('End to End Full Journey', function () {

    beforeEach(function () {
        cy.visit('https://trytestingthis.netlify.app/')
    })

    it('Form Filling and Submission', () => {

        tryTestingThisActions.clickContactPage()
        tryTestingThisActions.clickHomepage()
        tryTestingThisActions.enterFirstName(firstname)
        tryTestingThisActions.enterLastname(lastname)
        tryTestingThisActions.selectGender(gender)
        tryTestingThisActions.selectOptionDropdown(optionSelectDropdown)

        //Single option check-uncheck
        tryTestingThisActions.checkOption(checkboxValue)
        cy.wait(3000)
        tryTestingThisActions.uncheckOption(checkboxValue)

        //For Multiple Selections
        optionsToCheck.forEach(checkboxOptionValue => {
            cy.then(() => {
                tryTestingThisActions.checkOption(checkboxOptionValue)
            })
        });

        tryTestingThisActions.selectFlavor(flavor)

        tryTestingThisActions.setColorByHex('#ff5733')
        cy.wait(2000)
        tryTestingThisActions.setColorByRGB(0, 145, 240)
        cy.wait(2000)
        tryTestingThisActions.setRandomColor()

        tryTestingThisActions.enterDate(dateval)
        tryTestingThisActions.setRangeSlider(67)

        tryTestingThisActions.uploadFile(fileToUpload)
        tryTestingThisActions.setQuantity(qty)
        tryTestingThisActions.clearLongMsgField()
        tryTestingThisActions.enterLongMsg(longmsg)

        tryTestingThisActions.clickOnAlertButton()

        tryTestingThisActions.clickOnDblButton()
        tryTestingThisActions.controlLeftDivScroll('top')
        tryTestingThisActions.findPhoto()
        tryTestingThisActions.controlLeftDivScroll('center')
        tryTestingThisActions.dragAndDropImg('#div1')

        tryTestingThisActions.clickOnSubmitBtn()
    })

    it('Successful Login Journey', () => {

        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.clickOnLoginBtn()
        tryTestingThisActions.clickHomepage()

    })

})

describe('Elements test', function () {

    beforeEach(function () {
        cy.visit('https://trytestingthis.netlify.app/')
    })

    // Layout One
    it('Verify OK Button action for Sample Alert Button', () => {
        tryTestingThisActions.clickOnAlertButton()
    })

    // it('Verify Cancel Button action for Sample Alert Button', ()=> {

    // })

    it('Verify that the image is fetched to the webpage', () => {
        tryTestingThisActions.findPhoto()
    })

    it('Verify sample Double Click functionality', () => {
        tryTestingThisActions.clickOnDblButton()
        tryTestingThisActions.controlLeftDivScroll('top')
    })

    it('Verify image drag and drop functionality into specific box', () => {
        tryTestingThisActions.controlLeftDivScroll('center')
        tryTestingThisActions.dragAndDropImg('#div1')
    })

    it('Verify that login section takes Username and Password as input', () => {
        tryTestingThisActions.controlLeftDivScroll('bottom')
        // cy.scrollTo('center')
        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
    })

    it('Verify Login functionality with valid credentials', () => {
        tryTestingThisActions.controlLeftDivScroll('bottom')
        // cy.scrollTo('center')
        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.clickOnLoginBtn()
    })

    it('Verify that invalid credentials prevent login and refreshes page', () => {
        tryTestingThisActions.controlLeftDivScroll('bottom')
        // cy.scrollTo('center')
        tryTestingThisActions.enterUsername('asd')
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.clickOnLoginBtn()

        cy.wait(2500)
        tryTestingThisActions.controlLeftDivScroll('bottom')
        // cy.scrollTo('center')
        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword('qwe')
        tryTestingThisActions.clickOnLoginBtn()

        cy.wait(2500)
        tryTestingThisActions.controlLeftDivScroll('bottom')
        // cy.scrollTo('center')
        tryTestingThisActions.enterUsername('asd12')
        tryTestingThisActions.enterPassword('qwe34')
        tryTestingThisActions.clickOnLoginBtn()
    })

    it('Verify that successful login loads a new page', () => {
        tryTestingThisActions.controlLeftDivScroll('bottom')
        // cy.scrollTo('center')
        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.clickOnLoginBtn()
    })

    it('Verify that clicking "here" link routes back to homepage with an empty form', () => {
        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.clickOnLoginBtn()
        tryTestingThisActions.clickHomepage()
    })

    //Layout Two
    it('Verify that the form takes Firstname and Lastname as input', () => {
        tryTestingThisActions.enterFirstName(firstname)
        tryTestingThisActions.enterLastname(lastname)
    })

    it('Verify radio button functionality for gender selection', () => {
        tryTestingThisActions.selectGender(gender)
    })

    it('Verify that only one gender can be selected from gender options', () => {
        tryTestingThisActions.selectGender('Male')
        tryTestingThisActions.selectGender('Female')
        tryTestingThisActions.checkMaleRadioBtn().should('not.be.checked')
    })

    it('Verify that "Option" dropdown loads valid options', () => {
        tryTestingThisActions.checkDropdownOptions(expectedOptions)
    })

    it('Verify that an option can be selected from dropdown', () => {
        var randomOption = utilities.getRandomValue(expectedOptions);
        tryTestingThisActions.selectOptionDropdown(randomOption)
    })

    it('Verify Checkbox functionality for applicable Options', () => {
        var randomOption = utilities.getRandomValue(expectedOptionsCb);
        tryTestingThisActions.checkOption(randomOption)
    })

    it('Verify that multiple options can be checked for applicable Options', () => {
        optionsToCheck.forEach(checkboxOptionValue => {
            cy.then(() => {
                tryTestingThisActions.checkOption(checkboxOptionValue)
            })
        });
    })

    it('Verify that datalist input dropdown shows valid suggestions', () => {
        tryTestingThisActions.checkDatalistOptions(expectedDatalistOptions)
    })

    it('Verify that partially given input is guessed correctly in Datalist', () => {
        var guess = 'stra'
        tryTestingThisActions.selectFlavorByPartial(guess)
    })

    it('Verify color picking by HEX input', () => {
        tryTestingThisActions.setColorByHex('#ff5733')
    })

    it('Verify that input RGB values are accepted for picking color', () => {
        tryTestingThisActions.setColorByRGB(0, 145, 240)
    })

    it('Verify random color pick functionality', () => {
        tryTestingThisActions.setRandomColor()
    })

    it('Verify Date picker functionality', () => {
        tryTestingThisActions.enterDate(dateval)
    })

    it('Verify that range slider value is set to 50 by default', () => {
        tryTestingThisActions.getRangeSliderValue().should('equal', '50')
    })

    it('Verify that range slider accepts values from 0 to 100', () => {
        var randomNum = utilities.getRandomNumber(0, 100)
        tryTestingThisActions.setRangeSlider(randomNum)
    })

    it('Verify file upload functionality of the form', () => {
        tryTestingThisActions.uploadFile(fileToUpload)
    })

    it('Verify that Quantity input field accepts integer values from 1 to 5', () => {
        // For Later Modification
        tryTestingThisActions.setQuantity(qty)
    })

    it('Verify that long message field can take more than 255 characters as input', () => {
        var msglength = utilities.getRandomNumber(256, 400)
        var longMessage = utilities.generateRandomText(msglength)
        tryTestingThisActions.clearLongMsgField()
        tryTestingThisActions.enterLongMsg(longMessage)
    })

    it('Verify that clicking "Submit" button opens a new google search tab', () => {
        tryTestingThisActions.stubWindowOpen()
        tryTestingThisActions.clickOnSubmitBtn()
        tryTestingThisActions.checkWindowOpenCalledWith('http://google.com','_blank')
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
    it.only('Verify that Date is shown correctly in table description', () => {
        var expectedDate = 'Sep 2, 2017'
        tryTestingThisActions.checkDescriptionDate(expectedDate)
    })
    
    



})