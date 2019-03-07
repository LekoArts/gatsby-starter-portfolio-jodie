declare namespace Cypress {
  interface Chainable<Subject> {
    waitForRouteChange(): Chainable<any>
  }
}
