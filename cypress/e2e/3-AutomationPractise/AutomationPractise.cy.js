/// <reference types="cypress" />


// POM not implemented here due to it being one single test
// Tests to be run in Electron browser due to this issue - https://github.com/cypress-io/cypress/issues/14175


let targetURL = 'http://automationpractice.com/index.php';
let dressesLink = '#block_top_menu > ul > li:nth-child(2) > a';
let addToCartButton = '#center_column > ul > li:nth-child(2) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span';
let popUpText = '#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2';


describe('Automation Practise App', () => {
  beforeEach(() => {
    cy.visit(targetURL)
  });

  it('adds the highest priced product to cart and verifies pop up text', () => {
    cy.get(dressesLink).click()
    cy.get(addToCartButton).click()
    cy.get(popUpText).should('contain.text', 'Product successfully added to your shopping cart')


  });
  
});
