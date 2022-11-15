/// <reference types="cypress" />


// POM not implemented here due to it being one single test
// Tests to be run in Electron browser due to this issue - https://github.com/cypress-io/cypress/issues/14175


let targetURLSunglasses = 'https://www.discountedsunglasses.co.uk/brands/sunglasses/bvlgari/bvlgari-bv6149b-sunglasses';
let taregtURLshacket = 'https://www.marksandspencer.com/cotton-blend-check-overshirt/p/clp60553731?color=ECRU&prevPage=srp'
let sunglassesPrice = '#product-price-35715 > span';
let shirtPrice = '<p class="price price--large"> <span class="acc__text">Price</span> <span itemprop="price" content="45"></span>£45.00  </p>';


describe('Checks Price of 2 items', () => {
  it('checks price of glasses', () => {
    cy.visit(targetURLSunglasses)
    cy.get(sunglassesPrice).should('contain.text', '£205.00')
  });
  
  it('checks price of shirt', () => {
    cy.visit(taregtURLshacket)
    cy.get(shirtPrice).should('contain.text', '£45.00')
  });
});
