/// <reference types="cypress" />

describe('Logout User', () => {
    beforeEach(function() {
        cy.fixture('example.json').then(function (data) {
          this.data = data;
        })
    })
  

    it('Should verify if user is redirected to login page after logout', function() {
        cy.visit('http://automationexercise.com')
        cy.url().should('include', 'automationexercise.com')
        cy.get('.nav > :nth-child(1) > a').should('have.attr', 'style', 'color: orange;')
        cy.contains('Signup / Login').click()
        cy.get('h2').contains('Login to your account').should('be.visible')
        cy.get('[data-qa="login-email"]').type(this.data.existing_email)
        cy.get('[data-qa="login-password"]').type(this.data.password)
        cy.get('[data-qa="login-button"]').click()
        cy.get(':nth-child(10) > a').should('contain', this.data.fullName)
        cy.contains('Logout').click()
        cy.url().should('include', 'login')
    })

  })