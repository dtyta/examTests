class feedBackPage{
    getSidenav(){
        return cy.get('[aria-label="Open Sidenav"]', {timeout:5000});

    }

    getCustomerFeeback(){
        return cy.get('[class="menu-text truncate"]', {timeout:5000});
    }

    getComment(){
        return cy.get('[id="comment"]', {timeout:5000});
    }

    getRating(){
        return cy.get('[id="rating"]', {timeout:5000});
    }

    getCaptcha(){
        return cy.get("code#captcha", {timeout:5000});
    }

    getCaptchacontrol(){
        return cy.get("#captchaControl", {timeout:5000});
    }

    getSubmitButton(){
        return cy.get('button[type="submit"]', {timeout:5000});
    }

    getAssertion(){
       return cy.get(".mat-simple-snack-bar-content", {timeout:5000});
    }






};
export default new feedBackPage();