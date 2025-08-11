/// <reference types= 'cypress'/>

import { TryTestingThisActions } from "./pages/tryTestingThisActions"
const tryTestingThisActions = new TryTestingThisActions()

var firstname = 'Md. Abir'
var lastname = 'Hossain'
var gender = 'Male'
var optionSelectDropdown = 'Option 3'
var checkboxValue = 'Option 2'
var optionsToCheck = ['Option 1', 'Option 3']
var flavor = 'Banana'
var fileToUpload = 'example.json'
var qty = 3
var longmsg = 'SQA stands for Software Quality Assurance'

var username = 'test'
var password = 'test'

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

        tryTestingThisActions.enterDate('2025-08-11')
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

    it('Login with Valid Credentials', ()=> {

        tryTestingThisActions.enterUsername(username)
        tryTestingThisActions.enterPassword(password)
        tryTestingThisActions.clickOnLoginBtn()
        tryTestingThisActions.clickHomepage()

    })

})