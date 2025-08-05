
it('Assertions Demo', () => {
    
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn')
        .and('be.visible')
        // .should('be.disabled')
        .and('be.enabled')

    expect(true).to.be.true
    //assert.equal(4, 5, 'NOT EQUAL')
    assert.equal(4, 4, 'EQUAL')
    assert.equal(6,'6', 'EQUAL')
    assert.strictEqual(6,'6', 'NOT EQUAL')

  })