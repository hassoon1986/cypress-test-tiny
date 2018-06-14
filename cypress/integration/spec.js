describe('page', () => {
  it('works', () => {

  cy.visit('https://www.google.com/')

  cy.get('input#lst-ib.gsfi').type('cypress testing {enter}')

  cy.get('[data-hveid="38"] > .rc > .r > a').click()
  })
})
