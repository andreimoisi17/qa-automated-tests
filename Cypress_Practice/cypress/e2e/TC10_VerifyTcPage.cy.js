/// <reference types="cypress" />
import HomePage from "../support/pageObjects/HomePage"
import SignUpPage from "../support/pageObjects/SignUpPage"
import CheckoutPage from "../support/pageObjects/CheckoutPage"

describe('Test Cases Page - Navigation', function () {
    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

        this.homepage = new HomePage
        this.signup = new SignUpPage
        this.checkout = new CheckoutPage

    })
    it('should navigate to the Test Cases page successfully', function(){
        cy.visit('http://automationexercise.com')
        this.homepage.validatePage()
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').click()
        cy.url().should('include', 'test_cases')
        

    })

})