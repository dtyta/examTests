class AuthorizationPage{
    getAddEmail(){
        return cy.get('[id="email"]', {timeout:5000});
    }

    getAddPassword(){
        return cy.get('[id="password"]', {timeout:5000});
    }

    getLogInButton(){
        return cy.get('[id="loginButton"]', {timeout:5000});
    }

    getAssertion(){
        return cy.get('.error',);
    }
};
export default new AuthorizationPage();