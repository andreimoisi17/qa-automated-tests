/// <reference types="cypress" />

    describe('Search Product', function(){
      beforeEach(function(){
        cy.fixture('example').then(function(data){
          this.data = data 
       }) 
    })

    it('Should search for a product and display relevant results', function(){
        cy.visit('http://automationexercise.com')
        cy.url().should('include', 'automationexercise.com')
        cy.get('#header').should('be.visible')
        cy.get('.nav > :nth-child(1) > a').should('have.attr', 'style', 'color: orange;')
        cy.contains('Products').click()
        cy.url().should('include', 'products')
        cy.get('#search_product').type('T-shirt')
        cy.get('#submit_search').click()
        cy.contains('Searched Products').should('be.visible')
        cy.get('.product-image-wrapper').should('have.length.greaterThan', 0 )
        
        

    })
})