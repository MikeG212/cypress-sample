// describe('My First Test!', function() {
//     it('can put two and two together', function() {
//         expect(2 + 2).to.equal(4);
//     })
//     it("chills to the max", function() {
//         expect(3).to.equal(3);
//     });
// })

// describe("interacts with Kitchensink", function() {
//   it("clicks on kitchensink", function() {
//     cy.visit("https://example.cypress.io");
//     cy.contains('type').click();

//     cy.url()
//         .should('include', '/commands/actions');

//     cy.get('.action-email')
//         .type('mike@mail.com')
//         .should('have.value', 'mike@mail.com')
//   });
// });

describe('Github navigation test', function() {
    it('visits my Github and navigates to BeatIt Repository', function() {
        cy.visit('https://github.com/mikeg212');
        cy.url()
            .should('include', 'mikeg212');

        cy.contains('Repositories').click();
        cy.url()
            .should('include', '?tab=repositories');

        cy.get('#your-repos-filter')
            .type('beat it{enter}');
        cy.contains('BeatIt').click() //find a better way to select the element
        cy.url()
            .should('include', 'https://github.com/MikeG212/BeatIt');
    })
})

describe('BeatIt drumming test', function() {
    it('visits beat it and plays the drums', function() {
        cy.visit('https://mikeg212.github.io/BeatIt/');
        cy.get('body').type('a')
            .wait(500).type('h')
            .wait(500).type('d')
            .wait(500).type('s')
            .wait(500).type('l');
    })
})
