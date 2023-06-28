class PaymentOption{
    getCreditCard(){
        return cy.get('#mat-expansion-panel-header-0', {timeout:5000});
    }
    getNameForCreditCard(){
        return cy.get('[id="mat-input-10"]', {timeout:5000});
    }
    getCardNumber(){
        return cy.get('[id="mat-input-11"]', {timeout:5000});
    }
    getValidityMonth(){
        return cy.get('[id="mat-input-12"]', {timeout:5000});
    }
    getValidityYear(){
        return cy.get('[id="mat-input-13"]', {timeout:5000});
    }
    getSubmitButton(){
        return cy.get('[id="submitButton"]', {timeout:5000});
    }
    getChooseCard(){
        return cy.get('[class="mat-radio-inner-circle"]', {timeout:5000});
    }
};
export default new PaymentOption();