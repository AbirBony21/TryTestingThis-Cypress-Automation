export class TryTestingThisLocators {

    getFirstName() {
        return cy.get('input[type="text"][name="fname"]')
    }

    getLastName() {
        return cy.get('input[type="text"][name="lname"]')
    }

    getMaleRadioBtn() {
        return cy.get('input[type="radio"][value="male"]')
    }

    getFemaleRadioBtn() {
        return cy.get('input[type="radio"][value="female"]')
    }

    getOtherRadioBtn() {
        return cy.get('input[type="radio"][value="other"]')
    }

    getOptionDropdown() {
        return cy.get('#option')
    }

    getCheckboxValue(value) {
        return cy.get(`input[type="checkbox"][value="${value}"]`)
    }

    getFlavorInput() {
        return cy.get('[list="datalists"]')
    }
}