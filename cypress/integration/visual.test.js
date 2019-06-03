describe('Cypress Visual Regression', function () {
  it('Visual Test 1', function () {
    cy.visit('https://google.com');
    //cy.get('.gLFyf').type('Test')
    cy.matchScreenshot('Google Home');
  });

  it('Visual Test 2', function () {
    cy.visit('http://www.cic.gc.ca/');
    cy.matchScreenshot('CIC Home');
  });
});
