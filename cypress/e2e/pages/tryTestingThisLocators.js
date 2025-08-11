export class TryTestingThisLocators {

    getHomePage() {
        return cy.get('[class="button bar-item"][href="/"]')
    }

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

    getColorInput() {
        return cy.get('#favcolor');
    }

    getDateField() {
        return cy.get('input[type="date"][name="day"]')
    }

    getRangeSlider() {
        return cy.get('input[type="range"]')
    }

    getFileUploadOption() {
        return cy.get('input[type="file"][id="myfile"]')
    }

    getQuantity() {
        return cy.get('input[type="number"][id="quantity"]')
    }

    getLongMsg() {
        return cy.get('textarea[name="message"]')
    }

    getAlertBtn() {
        return cy.get('button[onclick="alertfunction()"]')
    }

    getContactPage() {
        return cy.get('[href="/contact"]')
    }

    getDblClickBtn() {
        return cy.get('[ondblclick="myFunction()"]')
    }

    getLeftDivScroll() {
        return cy.get('div.side.ex1')
    }

    getImage() {
        return cy.get('.fakeimg')
    }

    dragImage() {
        return cy.get('#drag1')
    }

    getUsernameInputfield() {
        return cy.get('input[type="text"][id="uname"]')
    }

    getPasswordinputfield() {
        return cy.get('input[type="text"][id="pwd"]')
    }

    getLoginButton() {
        return cy.get('input[type="submit"][value="Login"]')
    }

    getSubmitButton() {
        return cy.get('button[class="btn btn-success"]')
    }

}