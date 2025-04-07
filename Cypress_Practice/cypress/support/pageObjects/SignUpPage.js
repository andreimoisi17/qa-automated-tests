class SignUpPage {

    fillSignUpForm(data) {
      cy.get('#id_gender1').click()
      cy.get('[data-qa="name"]').should('have.value', data.fullName)
      cy.get('[data-qa="email"]').should('have.value', data.email)
      cy.get('[data-qa="password"]').type('parolaputernica')
      cy.get('[data-qa="days"]').select('17')
      cy.get('[data-qa="months"]').select('February')
      cy.get('[data-qa="years"]').select('1994')
      cy.get('#newsletter').click()
      cy.get('#optin').click()
      cy.get('[data-qa="first_name"]').type(data.firstName)
      cy.get('[data-qa="last_name"]').type(data.lastName)
      cy.get('[data-qa="company"]').type(data.company)
      cy.get('[data-qa="address"]').type(data.address)
      cy.get('[data-qa="country"]').select('United States')
      cy.get('[data-qa="state"]').type(data.state)
      cy.get('[data-qa="city"]').type(data.city)
      cy.get('[data-qa="zipcode"]').type(data.zipcode)
      cy.get('[data-qa="mobile_number"]').type(data.mobile_number)
      
    }
  
    validateAccountCreated() {
      cy.get('[data-qa="account-created"]').should('contain', 'Account Created!')
    }
  
    continueToNextPage() {
      cy.get('[data-qa="continue-button"]').click()
    }
  }
  export default SignUpPage;