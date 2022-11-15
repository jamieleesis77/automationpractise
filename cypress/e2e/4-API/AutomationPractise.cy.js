/// <reference types="cypress" />

describe('API Testing', () => {
//  beforeEach(() => {
//    cy.visit(targetURL)
//  });

  it('gets a 200 status', () => {
    let APIrequest = cy.request('https://official-joke-api.appspot.com/random_joke');
    
    APIrequest
    .its('status').should('eq',200)

    cy.log(Response)
  });
  

  //it('gets a response', () => {
    //cy.request('https://official-joke-api.appspot.com/random_joke').then((response => {
      //cy.log(response);
      //console.log(response);
      //expect(response.status).to.equal(200);
      //expect(response.body.data).to.have.length(5);
    //}))

  //});
});
