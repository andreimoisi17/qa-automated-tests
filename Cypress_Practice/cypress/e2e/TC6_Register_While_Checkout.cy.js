/// <reference types="cypress" />
import HomePage from "../support/pageObjects/HomePage"
import SignUpPage from "../support/pageObjects/SignUpPage"
import CheckoutPage from "../support/pageObjects/CheckoutPage"

describe('Complete product purchase with new account registration', function(){
    beforeEach(function(){
      cy.fixture('example').then(function(data){
        this.data = data  
        
     }) 

    this.homepage = new HomePage
    this.signup = new SignUpPage
    this.checkout = new CheckoutPage

  })

  it('Should complete product purchase before new account registration', function(){
    cy.visit('http://automationexercise.com')

    // Validate the homepage
    this.homepage.validatePage()

    //Add item to cart and proceed to checkout
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper').contains('Add to cart').click()
    cy.contains('View Cart').click()
    cy.url().should('include', 'view_cart')
    cy.contains('Proceed To Checkout').click()
    cy.get('.modal-body > :nth-child(2) > a').click()

    // Complete Signup with fullname and email
    cy.get('[data-qa="signup-name"]').type(this.data.fullName)
    cy.get('[data-qa="signup-email"]').type(this.data.email)
    cy.get('[data-qa="signup-button"]').click()

    // Complete form for signup
    this.signup.fillSignUpForm(this.data)
    cy.contains('Create Account').click()

    //Validate created account and continue to next page
    this.signup.validateAccountCreated()
    this.signup.continueToNextPage()

    // Validate user is logged in and correct username is displayed 
    cy.get(':nth-child(10) > a').should('contain', this.data.fullName)

    // Go to cart and proceed to checkout
    cy.get('.shop-menu > .nav > :nth-child(3)').click()
    cy.contains('Proceed To Checkout').click()
   
    // Validate Delivery Adress
    this.checkout.validateAddress(this.data)
    
    // Confirm Order
    this.checkout.confirmOrder()

    // Complete payment details form
    this.checkout.enterPaymentDetails(this.data)

    // Validate successfull order confirmation
    this.checkout.validateOrderConfirmation()

    //Delete Account
    this.checkout.deleteAccount()


  })
})
