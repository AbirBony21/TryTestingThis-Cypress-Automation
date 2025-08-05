import { LoginPage } from "./pages/login_page"
const loginPage = new LoginPage()

var username = 'Admin'
var password = 'admin123'

beforeEach(function () {
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
        timeout: 120000
    })
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input', { timeout: 30000 }).should('be.visible')
})

describe('All Login Tests', function () {

    it('Login Test with Valid credentials', () => {

        loginPage.enterUsername(username)
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        cy.wait(3000)
        cy.get('.oxd-userdropdown-name').click()

    })

    it('Login Test with Invalid Username', () => {

        loginPage.enterUsername('admin123')
        loginPage.enterPassword(password)
        loginPage.clickLogin()
        cy.wait(3000)
        cy.get('.oxd-userdropdown-name').click()
        // cy.get('.oxd-alert-content > .oxd-text')
    })

})

it('Login Test with Invalid Password', () => {

    loginPage.enterUsername(username)
    loginPage.enterPassword('admin1234')
    loginPage.clickLogin()
    cy.wait(3000)
    cy.get('.oxd-userdropdown-name').click()
    // cy.get('.oxd-alert-content > .oxd-text')
})

