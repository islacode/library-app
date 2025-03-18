import Button from './Button';

describe('Button Component', () => {
  it('Should render and display expected content', () => {
    cy.mount(<Button title="Submit" />);

    cy.get('button').contains('Submit');
  });

  it('Should trigger onclick as expected', () => {
    const onClickSpy = cy.spy().as('onclickSpy');
    cy.mount(<Button title="Submit" onClick={onClickSpy} />);

    cy.get('button').click();
    cy.get('@onclickSpy').should('be.calledOnce');
  });
});
