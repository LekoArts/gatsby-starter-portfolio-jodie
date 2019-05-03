/// <reference types="../support/index" />
/// <reference types="cypress" />
/// <reference types="cypress-testing-library/typings" />

describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('link to projects works', () => {
    cy.get('nav').within(() => {
      cy.getByText(/projects/i)
        .click({ force: true })
        .waitForRouteChange()
    })
    cy.getByLabelText(/view project "Color"/i).assertRoute('/projects')
  })
  it('link to instagram works', () => {
    cy.get('nav').within(() => {
      cy.getByText(/instagram/i)
        .click({ force: true })
        .waitForRouteChange()
    })
    cy.assertRoute('/instagram')
  })
  it('link to about works', () => {
    cy.get('nav').within(() => {
      cy.getByText(/about/i)
        .click({ force: true })
        .waitForRouteChange()
    })
    cy.getByText(/Hi. I'm LekoArts!/i).assertRoute('/about')
  })
  it('link to home works', () => {
    cy.get('nav').within(() => {
      cy.getByText(/about/i)
        .click({ force: true })
        .waitForRouteChange()
    })
    cy.getByText(/Hi. I'm LekoArts!/i)
      .assertRoute('/about')
      .getByLabelText(/LekoArts, Back to home/i)
      .click({ force: true })
      .waitForRouteChange()
      .assertRoute('/')
  })
})
