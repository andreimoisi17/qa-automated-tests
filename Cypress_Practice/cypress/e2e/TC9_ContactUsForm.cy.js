/// <reference types="cypress" />
import HomePage from "../support/pageObjects/HomePage"
import SignUpPage from "../support/pageObjects/SignUpPage"
import CheckoutPage from "../support/pageObjects/CheckoutPage"

describe('Contact Us Page - Form Submission', function () {
    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

        this.homepage = new HomePage
        this.signup = new SignUpPage
        this.checkout = new CheckoutPage

    })
    it('should fill and submit the contact form successfully', function(){
        cy.visit('http://automationexercise.com')
        this.homepage.validatePage()
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.get('div.contact-form > .title').should('be.visible')
        cy.get('[data-qa="name"]').type(this.data.firstName)
        cy.get('[data-qa="email"]').type(this.data.email)
        cy.get('[data-qa="subject"]').type('Order')
        cy.get('[data-qa="message"]').type('The order is taking too long to arrive. Did something happen?')
        cy.get(':nth-child(6) > .form-control').selectFile('File.txt')
        cy.get('[data-qa="submit-button"]').click()
        cy.get('.status').should('be.visible')
        cy.get('#form-section > .btn').click()
        

    })

})