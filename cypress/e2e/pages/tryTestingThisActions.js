import { TryTestingThisLocators } from "./tryTestingThisLocators"

export class TryTestingThisActions {

    constructor() {
        this.trytestingthislocators = new TryTestingThisLocators()
    }

    clickHomepage() {
        this.trytestingthislocators.getHomePage().click()
    }

    enterFirstName(firstname) {
        this.trytestingthislocators.getFirstName().type(firstname)
    }

    enterLastname(lastname) {
        this.trytestingthislocators.getLastName().type(lastname)
    }

    getFirstNameInputText() {
        return this.trytestingthislocators.getFirstName()
    }

    getLasttNameInputText() {
        return this.trytestingthislocators.getLastName()
    }

    selectGender(gender) {
        if (gender === 'Male') {
            this.trytestingthislocators.getMaleRadioBtn().check()
        } else if (gender === 'Female') {
            this.trytestingthislocators.getFemaleRadioBtn().check()
        } else {
            this.trytestingthislocators.getOtherRadioBtn().check()
        }
    }

    selectOptionDropdown(optionDropdownValue) {
        this.trytestingthislocators.getOptionDropdown().select(optionDropdownValue)
    }

    getSelectedDropdownOpt() {
        return this.trytestingthislocators.getOptionDropdown()
    }

    checkOption(value) {
        this.trytestingthislocators.getCheckboxValue(value).check()
    }

    uncheckOption(value) {
        this.trytestingthislocators.getCheckboxValue(value).uncheck()
    }

    assertCheckboxIsChecked(value) {
        this.trytestingthislocators.getCheckboxValue(value).should('be.checked')
    }

    checkMultipleOptions(values) {
        values.forEach(option => {
            this.checkOption(option)
            this.assertCheckboxIsChecked(option)
        })
    }

    findFlavor() {
        return this.trytestingthislocators.getFlavorInput()
    }

    selectFlavor(flavor) {
        this.trytestingthislocators.getFlavorInput().type(flavor)
    }

    selectFlavorByPartial() {

        this.trytestingthislocators.getDatalistOptions().then($options => {
            var optionValues = Cypress._.map($options, 'value')
            var randomOption = Cypress._.sample(optionValues)
            var guess = randomOption.substring(0, 4)
            this.trytestingthislocators.getFlavorInput().clear().type(guess)

            const match = optionValues.find(val =>
                val.toLowerCase().startsWith(guess.toLowerCase())
            )

            if (match) {
                this.trytestingthislocators.getFlavorInput().clear().type(match)
                this.trytestingthislocators.getFlavorInput()
                    .should('have.value', match)
            } else {
                this.trytestingthislocators.getFlavorInput()
                    .should('have.value', guess)
            }
        })
    }


    setColorByHex(hexCode) {
        this.trytestingthislocators.getColorInput()
            .invoke('val', hexCode)
            .trigger('change', { force: true })

        this.trytestingthislocators.getColorInput()
            .should('have.value', hexCode.toLowerCase())
    }

    setColorByRGB(r, g, b) {
        var hex = this.rgbToHex(r, g, b)
        this.setColorByHex(hex)
    }

    setRandomColor() {
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        this.setColorByRGB(r, g, b)
    }

    rgbToHex(r, g, b) {
        var toHex = c => c.toString(16).padStart(2, '0')
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`
    }

    enterRandomDate() {
        var start = new Date(1947, 0, 1)
        var end = new Date(2050, 11, 31)
        var randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
            .toISOString().split('T')[0]

        this.trytestingthislocators.getDateField()
            .invoke('val', randomDate)
            .trigger('input')
            .trigger('change')

        return randomDate
    }

    getDateFieldValue() {
        return this.trytestingthislocators.getDateField()
    }

    getRangeSliderValue() {
        return this.trytestingthislocators.getRangeSlider().invoke('val')
    }

    setRangeSlider(slidervalue) {
        this.trytestingthislocators.getRangeSlider()
            .invoke('val', slidervalue)
            .trigger('input')
            .trigger('change')

        return this.getRangeSliderValue()
    }

    uploadFile(fileToUpload) {
        this.trytestingthislocators.getFileUploadOption().attachFile(fileToUpload)
        return this.trytestingthislocators.getFileUploadOption()
    }

    setQuantity(qty) {
        this.trytestingthislocators.getQuantity().clear().type(qty)
        return this.trytestingthislocators.getQuantity()
    }

    clearLongMsgField() {
        this.trytestingthislocators.getLongMsg().clear()
    }

    enterLongMsg(longmsg) {
        this.trytestingthislocators.getLongMsg().type(longmsg)
    }

    assertLongMsgField(expectedMsg) {
        this.trytestingthislocators.getLongMsg().should('have.value', expectedMsg)
    }

    assertLongMsgLength(minLength) {
        this.trytestingthislocators.getLongMsg()
            .invoke('val')
            .then(text => {
                expect(text.length).to.be.greaterThan(minLength)
            })
    }

    clickOnAlertButton() {
        this.trytestingthislocators.getAlertBtn().click()
    }

    handleAlertPopup() {
        cy.on('window:alert', (txt) => {
            expect(txt).to.equal('Press a button!')
        });
    }

    getAlertMessage() {
        return this.trytestingthislocators.getAlertMsg()
    }

    // wrongCredAlertPopUp() {
    //     cy.on('window:alert', (txt) => {
    //         expect(txt).to.equal('Wrong Credentials! Try again!')
    //     });
    // }

    clickContactPage() {
        this.trytestingthislocators.getContactPage().click()
    }

    clickOnDblButton() {
        this.trytestingthislocators.getDblClickBtn().dblclick()
    }

    controlLeftDivScroll(position) {
        this.trytestingthislocators.getLeftDivScroll().scrollTo(position)
    }

    findPhoto() {
        return this.trytestingthislocators.getImage()
    }

    dragAndDropImg(dropPos) {
        this.trytestingthislocators.getdragImage().drag(dropPos)
    }

    dropboxState() {
        return this.trytestingthislocators.getdropbox()
    }

    enterUsername(username) {
        this.trytestingthislocators.getUsernameInputfield().type(username)
    }

    enterPassword(password) {
        this.trytestingthislocators.getPasswordinputfield().type(password)
    }

    getUsernameInputText() {
        return this.trytestingthislocators.getUsernameInputfield()
    }

    getPasswordInputText() {
        return this.trytestingthislocators.getPasswordinputfield()
    }

    clickOnLoginBtn() {
        this.trytestingthislocators.getLoginButton().click()
    }

    getLoginSuccessMessage() {
        return this.trytestingthislocators.getLoginSuccessMsg()
    }

    checkLoggedinURL(expectedURL) {
        this.trytestingthislocators.getCurrentURL().should('equal', expectedURL)
    }

    clickOnSubmitBtn() {
        this.trytestingthislocators.getSubmitButton().click()
    }

    stubWindowOpen() {
        cy.window().then(win => {
            cy.stub(win, 'open').as('windowOpen');
        })
    }

    checkWindowOpenCalledWith(url, tab) {
        cy.get('@windowOpen').should('be.calledWith', url, tab)
    }

    assertGenderSelected(gender) {
        if (gender === 'Male') {
            this.trytestingthislocators.getMaleRadioBtn().should('be.checked')
        } else if (gender === 'Female') {
            this.trytestingthislocators.getFemaleRadioBtn().should('be.checked')
        } else {
            this.trytestingthislocators.getOtherRadioBtn().should('be.checked')
        }
    }

    assertGenderNotSelected(gender) {
        if (gender === 'Male') {
            this.trytestingthislocators.getMaleRadioBtn().should('not.be.checked')
        } else if (gender === 'Female') {
            this.trytestingthislocators.getFemaleRadioBtn().should('not.be.checked')
        } else {
            this.trytestingthislocators.getOtherRadioBtn().should('not.be.checked')
        }
    }

    checkDropdownOptions(expectedOptions) {
        this.trytestingthislocators.getOptionDropdown()
            .find('option')
            .then($options => {
                var actualOptions = Cypress._.map($options, 'value')
                expect(actualOptions).to.have.members(expectedOptions)
            })
    }

    checkDatalistOptions(expectedDatalistOptions) {
        this.trytestingthislocators.getDatalistOptions()
            .then($options => {
                var actualOptions = Cypress._.map($options, 'value')
                expect(actualOptions).to.have.members(expectedDatalistOptions)
            })
    }

    checkCurrentURL(expectedURL) {
        this.trytestingthislocators.getCurrentURL().should('equal', expectedURL)
    }

    checkDescriptionDate(expectedDate) {
        this.trytestingthislocators.getTableDescription()
            .invoke('text')
            .then(text => {
                const datePart = text.split(',').slice(1).join(',').trim();
                expect(datePart).to.equal(expectedDate);
            })
    }

    checkHeaders(expectedHeaders) {
        this.trytestingthislocators.getTableHeaders().then($headers => {
            const actualHeaders = [...$headers].map(h => h.innerText.trim())
            expect(actualHeaders).to.deep.equal(expectedHeaders)
        })
    }

    checkRowCount(expectedCount) {
        this.trytestingthislocators.getTableRows().should('have.length', expectedCount + 1)
    }

    checkColumnCount(expectedCount) {
        this.trytestingthislocators.getTableHeaders().should('have.length', expectedCount)
    }

    checkGenderValues() {
        this.trytestingthislocators.getTableRows().each(($row, index) => {
            if (index === 0) return
            cy.wrap($row).find('td').eq(2).invoke('text').then(gender => {
                expect(['M', 'F', 'O']).to.include(gender.trim())
            })
        })
    }

    checkAgeRange(min, max) {
        this.trytestingthislocators.getTableRows().each(($row, index) => {
            if (index === 0) return
            cy.wrap($row).find('td').eq(3).invoke('text').then(age => {
                const ageNum = parseInt(age.trim(), 10)
                expect(ageNum).to.be.within(min, max)
            })
        })
    }

    checkRowData(expectedData) {
    this.trytestingthislocators.getTableRows().each(($row, index) => {
        if (index === 0) return

        cy.wrap($row).find('td').eq(0).invoke('text').then(firstname => {
            if (firstname.trim() === expectedData.firstname) {
                cy.wrap($row).find('td').eq(1).invoke('text').should('eq', expectedData.lastname)
                cy.wrap($row).find('td').eq(2).invoke('text').should('eq', expectedData.gender)
                cy.wrap($row).find('td').eq(3).invoke('text').should('eq', expectedData.age.toString())
                cy.wrap($row).find('td').eq(4).invoke('text').should('eq', expectedData.occupation)
            }
        })
    })
}

}
