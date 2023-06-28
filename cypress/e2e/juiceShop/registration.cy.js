import mainPage from '../../support/pages/mainPage'
import * as user from '../../fixtures/credentials.json';
import * as helper from '../../support/helper';
import registrationUserPage from '../../support/pages/registrationUserPage';

const fakeNumber = Math.floor(Math.random() * 4) + 1;

beforeEach(() => {
    cy.restoreLocalStorage();
  });
  
  afterEach(() => {
    cy.saveLocalStorage();
  });

let randomString = helper.createRandomString(8);
let mail = `${randomString}${user.email}`;

it('Registration Positive flow', () => {
    mainPage.open();
    mainPage.getCloseModalWindowButton().click();
    mainPage.getAcceptingCookies().click();
    mainPage.getAccountButton().click({force:true});
    mainPage.getLoginButton().click();
    mainPage.getButtonForRegistrationForm().click();
    
    cy.log('Registration user')
    registrationUserPage.getEmail().click().type(mail);
    registrationUserPage.getPassword().click().type(user.passwordValid);
    registrationUserPage.getRepeatPassword().click().type(user.passwordValid);
    registrationUserPage.getDropDown().click();
    registrationUserPage.getSecurityQuestion().contains(' Your favorite book? ').click();
    registrationUserPage.getSecurityAnswer().click().type('JavaScript for Child!');
    registrationUserPage.getRegistrationButtonClick().click()
    registrationUserPage.getAssertion().contains('Registration completed successfully. You can now log in.', {timeout:5000}).should('be.visible');
    
})

it('Registration Negative flow', () => {
    cy.log('Check required fields');
    mainPage.open();
    mainPage.getCloseModalWindowButton().click();
    mainPage.getAcceptingCookies().click();
    mainPage.getAccountButton().click({force:true});
    mainPage.getLoginButton().click();
    mainPage.getButtonForRegistrationForm().click();

    registrationUserPage.getEmail().click().type(mail);
    registrationUserPage.getPassword().click().type(user.passwordValid);
    registrationUserPage.getRepeatPassword().click().type(user.passwordValid);

    cy.log('Check that question field is required');
    registrationUserPage.getDropDown().click().type('{esc}');
    registrationUserPage. getErrorForQuestion().should('have.text', ' Please select a security question. ');

    cy.log('Check that answer field is required');
    registrationUserPage.getSecurityAnswer().click();
    registrationUserPage.getMissClick().click();
    registrationUserPage.getErrorForAnswer().should('have.text', ' Please provide an answer to your security question. ');

    cy.log('Check that Registration button is disable');
    registrationUserPage.getRegisterButton().should('be.disabled');
    
})