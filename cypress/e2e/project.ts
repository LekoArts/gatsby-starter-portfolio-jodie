/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="cypress-testing-library/typings" />

describe('project', () => {
  beforeEach(() => {
    cy.visit('/')
      .getByLabelText(/view project "breakfast"/i)
      .click({ force: true })
      .waitForRouteChange()
  })

  it('should be linked from the index page', () => {
    cy.assertRoute('/breakfast')
  })
  it('should have a category, title, description', () => {
    cy.getByText(/photography/i)
      .getByText(/Breakfast - The most important time of the day/i)
      .getByText(/The first meal of the day./i)
  })
  it('should have images', () => {
    cy.getByAltText(/projects-breakfast-003/i)
  })
  it('should have a contact button', () => {
    cy.getByText(/contact us/i)
  })
})
