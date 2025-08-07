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
var qty = 4
var longmsg = 'SQA stands for Software Quality Assurance'

describe('Try Testing This Website', function () {

    // beforeEach(function () {
    //     cy.visit('https://trytestingthis.netlify.app/')
    // })

    it('Form Filling', () => {

        cy.visit('https://trytestingthis.netlify.app/')
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
        cy.wait(2500)
        tryTestingThisActions.setColorByRGB(0, 206, 209)
        cy.wait(2500)
        tryTestingThisActions.setRandomColor()

        tryTestingThisActions.enterDate('2025-08-07')
        tryTestingThisActions.setRangeSlider(63)

        tryTestingThisActions.uploadFile(fileToUpload)
        tryTestingThisActions.setQuantity(qty)
        tryTestingThisActions.clearLongMsgField()
        tryTestingThisActions.enterLongMsg(longmsg)

        tryTestingThisActions.clickOnAlertButton()


    })

})