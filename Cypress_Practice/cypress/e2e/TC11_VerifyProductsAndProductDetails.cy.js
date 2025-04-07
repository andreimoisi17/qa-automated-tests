/// <reference types="cypress" />
import HomePage from "../support/pageObjects/HomePage"
import SignUpPage from "../support/pageObjects/SignUpPage"
import CheckoutPage from "../support/pageObjects/CheckoutPage"
import ProductPage from "../support/pageObjects/ProductPage"


describe('Contact Us Page - Form Submission', function () {
    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

        this.homepage = new HomePage
        this.signup = new SignUpPage
        this.checkout = new CheckoutPage
        this.productpage = new ProductPage

    })
    it('should fill and submit the contact form successfully', function(){
        cy.visit('http://automationexercise.com')
        this.homepage.validatePage()
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.url().should('include', 'products')
        cy.get('.features_items').should('be.visible')
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.url().should('include', 'product_details', '1')
        this.productpage.validateProductDetails()
        
    })
   

})