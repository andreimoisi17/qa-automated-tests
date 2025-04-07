/// <reference types="cypress" />
import HomePage from "../support/pageObjects/HomePage"
import SignUpPage from "../support/pageObjects/SignUpPage"
import CheckoutPage from "../support/pageObjects/CheckoutPage"

describe('Register and complete product purchase', function(){
    beforeEach(function(){
      cy.fixture('example').then(function(data){
        this.data = data  
        
     }) 

    this.homepage = new HomePage
    this.signup = new SignUpPage
    this.checkout = new CheckoutPage

  })

  it('Should complete new account registration before purchase', function(){
    cy.visit('http://automationexercise.com')
    this.homepage.validatePage()
    
    cy.contains('Login').click()
    cy.get('[data-qa="login-email"]').type(this.data.existing_email)
    cy.get('[data-qa="login-password"]').type(this.data.password)
    cy.get('[data-qa="login-button"]').click()

    cy.get(':nth-child(10) > a').should('contain', this.data.fullName)

    cy.get('.features_items > :nth-child(3) > .product-image-wrapper').contains('Add to cart').click()
    cy.contains('View Cart').click()

    cy.url().should('include', 'view_cart')
    cy.contains('Proceed To Checkout').click()
    this.checkout.validateAddress(this.data)
    this.checkout.confirmOrder()
    this.checkout.enterPaymentDetails(this.data)
    this.checkout.validateOrderConfirmation()
    cy.get('[data-qa="continue-button"]').click()










  })
})
