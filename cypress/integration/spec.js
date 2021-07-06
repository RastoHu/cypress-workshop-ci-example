/// <reference types="cypress" />

describe('Example site', () => {
  it('should verify that h1 header exist', () => {
    cy.visit('/')
    cy.contains('h1', 'cypress-workshop-ci-example').should('not.be.visible')
  })

  it('navigates to README', () => {
    cy.visit('/')
    cy.contains('a', 'README').click()
    cy.location('pathname').should('equal', '/README/')
  })

  it('goes directly to README', () => {
    cy.visit('/README')
    cy.contains('h2', 'README')
  })

  it('redirects to README/', () => {
    cy.visit('/README/')
    cy.contains('h2', 'README')
  })
})
