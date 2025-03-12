/// <reference types="cypress" />

describe('Login Attempt With Invalid Credentials', () => {
    beforeEach(function() {
        cy.fixture('example.json').then(function (data) {
          this.data = data;
        })
    })

    it('Should not login user with invalid credentials', function(){
        cy.visit('http://automationexercise.com')
        cy.url().should('include', 'automationexercise.com')
        cy.get('.nav > :nth-child(1) > a').should('have.attr', 'style', 'color: orange;')
        cy.contains('Signup / Login').click()
        cy.get('h2').contains('Login to your account').should('be.visible')
        cy.get('[data-qa="login-email"]').type('incorrect@email.com')
        cy.get('[data-qa="login-password"]').type('incorrectpassword')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')


    })


})