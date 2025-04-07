/// <reference types="cypress" />
import HomePage from "../support/pageObjects/HomePage"
import SignUpPage from "../support/pageObjects/SignUpPage"
import CheckoutPage from "../support/pageObjects/CheckoutPage"
import ProductPage from "../support/pageObjects/ProductPage"

    describe('Verify Category Products', () => {

        it('should display correct products when categories are selected', () => {
            cy.visit('http://automationexercise.com')
            cy.get('#accordian').should('be.visible')
            cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge').click()
            cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
            cy.get('.title').should('contain', 'Women - Dress Products')
            cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa').click()
            cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
            cy.get('.title').should('contain', 'Men - Jeans Products')



        })



    })