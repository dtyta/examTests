class MainPage{

    open(){
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/');
    }
    getWelcomePopUp(){
        return cy.get('[id="mat-dialog-0"]');
    }

    getCloseModalWindowButton(){
       return cy.get('[class="mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted"]');
    }
    getAcceptingCookies(){
        return cy.get('[class="cc-btn cc-dismiss"]');
    }

    getAccountButton(){
       return cy.get('[id="navbarAccount"]', {timeout: 5000});
    }

    getLoginButton(){
       return cy.get('[id="navbarLoginButton"]', {timeout: 5000});
    }

    getButtonForRegistrationForm(){
        return cy.get('[class="primary-link"]', {timeout: 5000});
    }

    getAddToBasketButton(){
        return cy.get('[class="mat-button-wrapper"]');
    }

    getVerifyThatGoodsAdded(){
        return cy.get('[class="mat-simple-snack-bar-content"]');
    }
}; 
    export default new MainPage();