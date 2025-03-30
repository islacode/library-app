describe('Test page', () => {
  it('passes loading home and books page route', () => {
    cy.visit('/');
    cy.contains('Home');

    cy.visit('/books');
    cy.contains('Books');
  });
});
