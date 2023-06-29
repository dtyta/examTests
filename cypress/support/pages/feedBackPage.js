class feedBackPage{
    getSidenav(){
        return cy.get('[aria-label="Open Sidenav"]', {timeout:5000});

    }

    getCustomerFeeback(){
        return cy.get('[class="menu-text truncate"]', {timeout:5000});
    }

    getComment(){
        return cy.get('[id="comment"]');
    }

    getRating(){
        return cy.get('[id="rating"]');
    }

    getCaptcha(){
        return cy.get("code#captcha");
    }





};
export default new feedBackPage();