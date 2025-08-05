/// <reference types= 'cypress'/>

it('Bing Search', () => {
    cy.visit('https://bing.com')
    //cy.get('#APjFqb', {timeout:5000}).type('Automation Step by Step{Enter}')

    cy.wait(2000)
    cy.get('#sb_form_q', {timeout:5000}).type('Practice Test Automation{Enter}')
    cy.get('.b_topTitle > a').click()
    // cy.contains('Hello')



    // cy.get('#APjFqb').type('Automation Step by Step')
    // cy.contains('Google Search').click()
})