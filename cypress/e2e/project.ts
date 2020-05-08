/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

describe('project', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.findByLabelText(/view project "breakfast"/i)
      .click({ force: true })
      .waitForRouteChange()
  })

  it('should be linked from the index page', () => {
    cy.assertRoute('/breakfast')
  })
  it('should have a category, title, description', () => {
    cy.findByText(/photography/i)
    cy.findAllByText(/Breakfast - The most important time of the day/i)
    cy.findByText(/The first meal of the day./i)
  })
  it('should have images', () => {
    cy.findByAltText(/projects-breakfast-003/i)
  })
  it('should have a contact button', () => {
    cy.findByText(/contact us/i)
  })
})
