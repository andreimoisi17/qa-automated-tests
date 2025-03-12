class HomePage {
    
    validatePage() {
      cy.url().should('include', 'automationexercise.com')
      cy.get('#header').should('be.visible')
      cy.get('.nav > :nth-child(1) > a').should('have.attr', 'style', 'color: orange;')
    }
  
    
  }
  
  export default HomePage;