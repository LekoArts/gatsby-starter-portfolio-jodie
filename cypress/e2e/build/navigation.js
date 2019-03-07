"use strict";
/// <reference types="../support/index" />
describe('navigation', () => {
    it('should have working links', () => {
        cy.visit('/')
            .getByText(/projects/i)
            .click()
            .waitForRouteChange()
            .getByText(/color/i);
    });
});
