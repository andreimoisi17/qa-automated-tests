/// <reference types="cypress" />
import HomePage from "../support/pageObjects/HomePage"
import SignUpPage from "../support/pageObjects/SignUpPage"
import CheckoutPage from "../support/pageObjects/CheckoutPage"
import ProductPage from "../support/pageObjects/ProductPage"


describe('View & Cart Brand Products', () => {

    it('ceva', () => {
        cy.visit('http://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('.brands_products').should('be.visible').and('contain', 'Brands')
        cy.get('.brands-name > .nav > :nth-child(2) > a').click()
        cy.get('.title').should('contain', 'Brand - H&M Products')
        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
        cy.get('.title').should('contain', 'Brand - Polo Products')
        cy.get('.features_items').should('be.visible')
        cy.get('.features_items .col-sm-4').should('have.length', 6)



    })


})