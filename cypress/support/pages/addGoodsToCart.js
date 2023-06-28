class AddGoodsToCart{
    getAddToBasket(){
        return cy.get('[aria-label="Add to Basket"]', {timeout:5000});
    }
    getShoppingCart(){
        return cy.get('[aria-label="Show the shopping cart"]', {timeout:5000});
    }
    getClickCheckoutButton(){
        return cy.get('[id="checkoutButton"]', {timeout:5000});
    }


};
export default new AddGoodsToCart(); 