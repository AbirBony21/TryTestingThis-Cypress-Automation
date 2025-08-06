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

describe('Try Testing This Website', function () {

    // beforeEach(function () {
    //     cy.visit('https://trytestingthis.netlify.app/')
    // })

    it('Form Filling', () => {

        cy.visit('https://trytestingthis.netlify.app/')
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


    })

    // it('asdf', () => {

    // })

})