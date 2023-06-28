class ConfirmOrder{
    getClickReviewButton(){
        return cy.get('[aria-label="Proceed to review"]', {timeout:5000});
    }
    getClickConfirmButton(){
        return cy.get('[id="checkoutButton"]', {timeout:5000});
    }

    getAssertionConfirmingOrder(){
        cy.get('[class="confirmation"]');
    }

};
export default new ConfirmOrder();