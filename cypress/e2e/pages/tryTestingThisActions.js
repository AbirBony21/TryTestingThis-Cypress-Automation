import { TryTestingThisLocators } from "./tryTestingThisLocators"

export class TryTestingThisActions {

    constructor() {
        this.trytestingthislocators = new TryTestingThisLocators()
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
}
