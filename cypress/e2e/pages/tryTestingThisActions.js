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

    checkOption(value) {
        this.trytestingthislocators.getCheckboxValue(value).check()
    }

    uncheckOption(value) {
        this.trytestingthislocators.getCheckboxValue(value).uncheck()
    }

    findFlavor() {
        return this.trytestingthislocators.getFlavorInput()
    }

    selectFlavor(flavor) {
        this.trytestingthislocators.getFlavorInput().type(flavor)
    }

    selectFlavorByPartial(guess) {

        this.trytestingthislocators.getFlavorInput().clear().type(guess);
        this.trytestingthislocators.getDatalistOptions().then(options => {

            const optionValues = [...options].map(o => o.value);
            const match = optionValues.find(val =>
                val.toLowerCase().startsWith(guess.toLowerCase())
            );

            if (match) {
                this.trytestingthislocators.getFlavorInput().clear().type(match);
            } else {
                this.trytestingthislocators.getFlavorInput().clear().type(guess);
            }
        });
    }


    setColorByHex(hexCode) {
        this.trytestingthislocators.getColorInput()
            .invoke('val', hexCode)
            .trigger('change', { force: true });
    }

    setColorByRGB(r, g, b) {
        const hex = this.rgbToHex(r, g, b);
        this.setColorByHex(hex);
    }

    setRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        this.setColorByRGB(r, g, b);
    }

    rgbToHex(r, g, b) {
        const toHex = (val) => {
            const hex = val.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    enterDate(date) {
        this.trytestingthislocators.getDateField(date)
            .invoke('val', date)
            .trigger('input')
            .trigger('change')
    }

    getRangeSliderValue() {
        return this.trytestingthislocators.getRangeSlider().invoke('val')
    }

    setRangeSlider(slidervalue) {
        this.trytestingthislocators.getRangeSlider()
            .invoke('val', slidervalue)
            .trigger('input')
            .trigger('change')
    }

    uploadFile(fileToUpload) {
        this.trytestingthislocators.getFileUploadOption().attachFile(fileToUpload)
    }

    setQuantity(qty) {
        this.trytestingthislocators.getQuantity().type(qty)
    }

    clearLongMsgField() {
        this.trytestingthislocators.getLongMsg().clear()
    }

    enterLongMsg(longmsg) {
        this.trytestingthislocators.getLongMsg().type(longmsg)
    }

    clickOnAlertButton() {
        this.trytestingthislocators.getAlertBtn().click()
    }

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
        this.trytestingthislocators.getImage()
    }

    dragAndDropImg(dropPos) {
        this.trytestingthislocators.dragImage().drag(dropPos)
    }

    enterUsername(username) {
        this.trytestingthislocators.getUsernameInputfield().type(username)
    }

    enterPassword(password) {
        this.trytestingthislocators.getPasswordinputfield().type(password)
    }

    clickOnLoginBtn() {
        this.trytestingthislocators.getLoginButton().click()
    }

    clickOnSubmitBtn() {
        this.trytestingthislocators.getSubmitButton().click()
    }

    stubWindowOpen() {
        cy.window().then(win => {
            cy.stub(win, 'open').as('windowOpen');
        });
    }

    checkWindowOpenCalledWith(url, tab) {
        cy.get('@windowOpen').should('be.calledWith', url, tab)
    }

    checkMaleRadioBtn() {
        return this.trytestingthislocators.getMaleRadioBtn()
    }

    checkFemaleRadioBtn() {
        return this.trytestingthislocators.getFemaleRadioBtn()
    }

    checkOtherRadioBtn() {
        return this.trytestingthislocators.getOtherRadioBtn()
    }

    checkDropdownOptions(expectedOptions) {
        this.trytestingthislocators.getOptionDropdown()
            .find('option')
            .then(options => {
                const actualOptions = [...options].map(o => o.text.trim())
                expect(actualOptions).to.have.members(expectedOptions)
            });
    }

    checkDatalistOptions(expectedDatalistOptions) {
        this.trytestingthislocators.getDatalistOptions()
            .then(options => {
                const actualOptions = [...options].map(o => o.value.trim())
                expect(actualOptions).to.have.members(expectedDatalistOptions)
            });
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

}
