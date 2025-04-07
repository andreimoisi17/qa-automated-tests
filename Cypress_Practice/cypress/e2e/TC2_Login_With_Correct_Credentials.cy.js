/// <reference types="cypress" />

describe('Login User', () => {
    beforeEach(function() {
        cy.fixture('example.json').then(function (data) {
          this.data = data;
        })
    })

    it('Should login user with correct email and password', function() {
        cy.visit('http://automationexercise.com')
        cy.url().should('include', 'automationexercise.com')
        cy.get('.nav > :nth-child(1) > a').should('have.attr', 'style', 'color: orange;')
        cy.contains('Signup / Login').click()
        cy.get('h2').contains('Login to your account').should('be.visible')
        cy.get('[data-qa="login-email"]').type(this.data.existing_email)
        cy.get('[data-qa="login-password"]').type(this.data.password)
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('contain', this.data.fullName)
      //  cy.contains('Delete Account').click()
      //  cy.get('b').should('contain', 'Account Deleted')






    })
 })
  