describe('Test page', () => {
  it('passes', () => {
    cy.visit('/');
    cy.contains('Get started by editing src/app/page.tsx');

    cy.get('li:nth-of-type(2)').contains(
      'Save and see your changes instantly.'
    );
  });
});
