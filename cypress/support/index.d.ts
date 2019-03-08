declare namespace Cypress {
  interface Chainable<Subject> {
    waitForRouteChange(): Chainable<any>
    assertRoute(route: string): Chainable<any>
  }
}
