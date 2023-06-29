///<reference types="cypress"/>
import mainPage from '../support/pages/mainPage';
import authorizationPage from '../support/pages/authorizationPage';
import * as helperAuth from '../support/helperAuth';
import user from '../fixtures/user.json'
import feedBackPage from '../support/pages/feedBackPage';



beforeEach('Registration before authorization', () => {
    const userData = helperAuth.registerUser();
    email = userData.email;
    password = userData.password;
  });

    let email;
    let password;

it('Purchase of goods via search field', () => {    
    cy.log('Open website');
    mainPage.open();
    mainPage.getAccountButton().click({force:true});
    mainPage.getLoginButton().click();

    cy.log('Authorization user');
    authorizationPage.getAddEmail().click().type(email);
    authorizationPage.getAddPassword().click().type(password);
    authorizationPage.getLogInButton().click();

    feedBackPage.getSidenav().click();
    feedBackPage.getCustomerFeeback().contains(' Customer Feedback ').click();
    feedBackPage.getComment().click().type(user.feedback);
    feedBackPage.getRating().click();
    feedBackPage.getCaptcha().invoke("text").then((captchaText) => {
      const captchaResult = eval(captchaText);
      cy.get("#captchaControl").type(captchaResult);
      cy.get('button[type="submit"]').click();
      cy.get(".mat-simple-snack-bar-content")
        .contains("Thank you for your feedback.")
        .should("be.visible");
  });

})
