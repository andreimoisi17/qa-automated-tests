class CheckoutPage {
    validateAddress(data) {
      cy.get('#address_delivery').should('be.visible')
      cy.get('#address_delivery > .address_firstname').should('contain', data.fullName)
      cy.get('#address_delivery > :nth-child(3)').should('contain', data.company)
      cy.get('#address_delivery > :nth-child(4)').should('contain', data.address)
      cy.get('#address_delivery > .address_city').should('contain', data.city)
      cy.get('#address_delivery > .address_city').should('contain', data.state)
      cy.get('#address_delivery > .address_city').should('contain', data.zipcode)
      cy.get('#address_delivery > .address_country_name').should('contain', data.country)
      cy.get('#address_delivery > .address_phone').should('contain', data.mobile_number)
    }
  
    confirmOrder() {
      cy.get('.cart_description').should('contain', 'Blue Top')
      cy.get('.cart_price').should('contain', 'Rs. 500')
      cy.get('.disabled').should('contain', 1)
      cy.get('.cart_total').should('contain', 'Rs. 500')
      cy.get('.form-control').type('Thank You!')
      cy.get(':nth-child(7) > .btn').click()
    }
  
    enterPaymentDetails(data) {
      cy.get('[data-qa="name-on-card"]').type(data.fullName)
      cy.get('[data-qa="card-number"]').type(data.card_number)
      cy.get('[data-qa="cvc"]').type(data.cvc)
      cy.get('[data-qa="expiry-month"]').type('11')
      cy.get('[data-qa="expiry-year"]').type('2028')
      cy.get('[data-qa="pay-button"]').click()
    }
  
    validateOrderConfirmation() {
      cy.get('.col-sm-9 > p').should('contain', 'Congratulations! Your order has been confirmed!')
    }
  
    deleteAccount() {
      cy.contains('Delete Account').click()
      cy.get('.col-sm-9').should('contain', 'Account Deleted!')
      cy.get('[data-qa="continue-button"]').click()
    }
  }
  export default CheckoutPage;