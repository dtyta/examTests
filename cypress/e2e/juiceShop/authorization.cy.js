import mainPage from '../../support/pages/mainPage'
import * as user from '../../fixtures/credentials.json';
import authorizationPage from '../../support/pages/authorizationPage';
import * as helper from '../../support/helper';
import * as helperAuth from '../../support/helperAuth';
import { beforeEach } from 'mocha';


let email;
let password;

beforeEach('Registration before authorization', () => {
  const userData = helperAuth.registerUser();
  email = userData.email;
  password = userData.password;
});

it.skip('Authorization positive Flow', () => {
  mainPage.open();
  mainPage.getAccountButton().click({ force: true });
  mainPage.getLoginButton().click();
  authorizationPage.getAddEmail().click().type(email);
  authorizationPage.getAddPassword().click().type(password);
  authorizationPage.getLogInButton().click();
});



let randomString = helper.createRandomString(8);
let mail = `${randomString}${user.email}`;

it.only('Authorization negative flow', () => {
    mainPage.open();
    mainPage.getCloseModalWindowButton().click();
    mainPage.getAcceptingCookies().click();
    mainPage.getAccountButton().click({force:true});
    mainPage.getLoginButton().click();
   authorizationPage.getAddEmail().click().type(mail);
   authorizationPage.getAddPassword().click().type(randomString);
   authorizationPage.getLogInButton().click();
   authorizationPage.getAssertion().should('have.text', 'Invalid email or password.')
})
