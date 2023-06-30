import { faker } from '@faker-js/faker';
import mainPage from './pages/mainPage';
import registrationUserPage from './pages/registrationUserPage';

export function registerUser() {
  const email = faker.internet.email();
  const password = faker.internet.password();

mainPage.open();
cy.clearCookies();
mainPage. getWelcomePopUp().click();
mainPage.getCloseModalWindowButton().click();
mainPage.getAcceptingCookies().click();
mainPage. getAccountButton().click({force:true});
mainPage. getLoginButton().click();
mainPage.getButtonForRegistrationForm().click();
registrationUserPage.getEmail().click().type(email);
registrationUserPage.getPassword().click().type(password);
registrationUserPage.getRepeatPassword().click().type(password);
registrationUserPage.getDropDown().click();
registrationUserPage.getSecurityQuestion().contains(' Your favorite book? ').click();
registrationUserPage.getSecurityAnswer().click().type('JavaScript for Child!');
registrationUserPage.getRegistrationButtonClick().click();

return {
    email: email,
    password: password
  };
}