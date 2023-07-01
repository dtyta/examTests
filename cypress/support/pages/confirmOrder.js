class ConfirmOrder{
    getClickReviewButton(){
        return cy.get('[aria-label="Proceed to review"]', {timeout:5000});
    }
    getClickConfirmButton(){
        return cy.get('[id="checkoutButton"]', {timeout:6000});
    }

    getAssertionConfirmingOrder(){
       return cy.get('[class="confirmation"]');
    }

};
export default new ConfirmOrder();