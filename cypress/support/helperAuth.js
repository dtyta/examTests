import { faker } from '@faker-js/faker';

export function registerUser() {
  const email = faker.internet.email();
  const password = faker.internet.password();

cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/');
cy.clearCookies();
cy.get('[id="mat-dialog-0"]').click();
cy.get('[class="mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted"]').click();
cy.get('[class="cc-btn cc-dismiss"]').click();
cy.get('[id="navbarAccount"]', {timeout: 5000}).click({force:true});
cy.get('[id="navbarLoginButton"]', {timeout: 5000}).click();
cy.get('[class="primary-link"]', {timeout: 5000}).click();
cy.get('[id="emailControl"]', {timeout:5000}).click().type(email);
cy.get('[id="passwordControl"]', {timeout:5000}).click().type(password);
cy.get('[id="repeatPasswordControl"]', {timeout:5000}).click().type(password);
cy.get('[name="securityQuestion"]', {timeout:5000}).click();
cy.get('[class="mat-option-text"]', {timeout:5000}).contains(' Your favorite book? ').click();
cy.get('[id="securityAnswerControl"]', {timeout:5000}).click().type('JavaScript for Child!');
cy.get('[id="registerButton"]', {timeout:5000}).click();

return {
    email: email,
    password: password
  };
}