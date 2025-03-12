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

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type(this.data.fullName)
    cy.get('[data-qa="signup-email"]').type(this.data.email)
    cy.get('[data-qa="signup-button"]').click()

    this.signup.fillSignUpForm(this.data)
    cy.contains('Create Account').click()

    this.signup.validateAccountCreated()
    this.signup.continueToNextPage()

    cy.get(':nth-child(10) > a').should('contain', this.data.fullName)
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper').contains('Add to cart').click()
    cy.contains('View Cart').click()
    cy.url().should('include', 'view_cart')
    cy.contains('Proceed To Checkout').click()

    this.checkout.validateAddress(this.data)
    this.checkout.confirmOrder()
    this.checkout.enterPaymentDetails(this.data)
    this.checkout.validateOrderConfirmation()
    this.checkout.deleteAccount()




  })
})