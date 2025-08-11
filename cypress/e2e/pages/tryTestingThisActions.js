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

    selectFlavor(flavor) {
        this.trytestingthislocators.getFlavorInput().type(flavor)
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

    setRangeSlider(slidervalue){
        this.trytestingthislocators.getRangeSlider()
            .invoke('val', slidervalue)
            .trigger('input')
            .trigger('change')
    }

    uploadFile(fileToUpload){
        this.trytestingthislocators.getFileUploadOption().attachFile(fileToUpload)
    }

    setQuantity(qty){
        this.trytestingthislocators.getQuantity().type(qty)
    }

    clearLongMsgField(){
        this.trytestingthislocators.getLongMsg().clear()
    }

    enterLongMsg(longmsg){
        this.trytestingthislocators.getLongMsg().type(longmsg)
    }

    clickOnAlertButton(){
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

}
