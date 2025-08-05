/// <reference types= 'cypress'/>

before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read files using Fixture', function () {

    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })

    cy.log(this.test_data.name)

})

it('Read files using readFile()', function () {

    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.body2)
    })

})

it('Write files using writeFile()', function () {

    cy.writeFile('sampleWriteFile.txt','Hello, I am Bony\n')
    cy.writeFile('sampleWriteFile.txt','Currently learning Cypress', {flag: 'a+'})

})