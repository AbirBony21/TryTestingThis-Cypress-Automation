/// <reference types= 'cypress'/>
/// <reference types="cypress-downloadfile"/>

it('File Upload Demo', function(){

    cy.visit('https://trytestingthis.netlify.app/')

    // cy.get('#myfile').attachFile('example.json')
    cy.get('#myfile').attachFile('shinji.jpg')
})

it('File Download Demo', function(){

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

})