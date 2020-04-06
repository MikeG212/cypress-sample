describe('Webscraper Actions', () => {
    // it('should load books website', () => {
    //     cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
    //     cy.url().should('include', 'index.html')
    // })

    // it('should click on Travel Category', () => {
    //     cy.get('a')
    //         .contains('Travel')
    //         .click()
    //     cy.get('h1').contains('Travel')
    // })

    // it('should display correct number of books', () => {
    //     cy.get('.product_pod')
    //         .its('length')
    //         .should('eq', 11)
    // })

    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html')
        cy.url().should('include', 'index.html')
    })

    it('should go to to the poetry section', () => {
        cy.get('a').contains('Poetry').click()
        cy.get('h1').contains('Poetry')
    })

    it('should go to Olio\'s page', () => {
        cy.get('a').contains('Olio').click()
        cy.url().should('include', 'olio')
    })

    it('should have the proper price for Olio', () => {
        cy.get('.price_color').contains('£23.88');
    })
})

//click on poetry
//click on olio
//it's price should be
