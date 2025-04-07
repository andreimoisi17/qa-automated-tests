/// <reference types="cypress" />


describe('User Registration', () => {
  beforeEach(function() {
    cy.fixture('example.json').then(function (data) {
      this.data = data;
    });
  })

  it('Should register a new user and delete the account ', function() {
    cy.visit('http://automationexercise.com')
    cy.url().should('include', 'automationexercise.com')
    cy.get('#header').should('be.visible')
    cy.get('.nav > :nth-child(1) > a').should('have.attr', 'style', 'color: orange;')
    cy.contains('Signup / Login').click()
    cy.contains('New User Signup').should('be.visible')
    cy.get('[data-qa="signup-name"]').type(this.data.fullName)
    cy.get('[data-qa="signup-email"]').type(this.data.email)
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="name"]').should('have.value', this.data.fullName)
    cy.get('[data-qa="email"]').should('have.value',this.data.email)
    cy.get('[data-qa="password"]').type(this.data.password)
    cy.get('[data-qa="days"]').select('17')
    cy.get('[data-qa="months"]').select('February')
    cy.get('[data-qa="years"]').select('1994')
    cy.get('#newsletter').click()
    cy.get('#optin').click()
    cy.get('[data-qa="first_name"]').type(this.data.firstName)
    cy.get('[data-qa="last_name"]').type(this.data.lastName)
    cy.get('[data-qa="company"]').type(this.data.company)
    cy.get('[data-qa="address"]').type(this.data.address)
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type(this.data.state)
    cy.get('[data-qa="city"]').type(this.data.city)
    cy.get('[data-qa="zipcode"]').type(this.data.zipcode)
    cy.get('[data-qa="mobile_number"]').type(this.data.mobile_number)
    cy.contains('Create Account').click()
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    cy.get(':nth-child(10) > a').should('contain', this.data.fullName)
    cy.contains('Delete Account').click()
    cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!')


  })
})