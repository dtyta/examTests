import mainPage from '../../support/pages/mainPage'
import authorizationPage from '../../support/pages/authorizationPage'
import searchQuery from '../../support/pages/searchQuery';
import addGoodsToCart from '../../support/pages/addGoodsToCart';
import addressPage from '../../support/pages/addressPage';
import deliveryMethodPage from '../../support/pages/deliveryMethodPage';
import paymentOptionPage from '../../support/pages/paymentOptionPage';
import confirmOrder from '../../support/pages/confirmOrder';
import * as helperAuth from '../../support/helperAuth';

// beforeEach(() => {
//    cy.restoreLocalStorage();
//  });
 
//  afterEach(() => {
//    cy.saveLocalStorage();
//  });

before('Registration before authorization', () => {
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
    
    cy.log('Search goods');
    searchQuery.getSearchQuery().click();
    searchQuery.getTypeAndConfirmQuery().focus().type('Banana Juice').type('{enter}');

    cy.log('Add goods to cart');
    addGoodsToCart.getAddToBasket().click();
    addGoodsToCart.getShoppingCart().click();
    addGoodsToCart.getClickCheckoutButton().click();

    cy.log('Add adress data');
    addressPage.getAddNewAddress().click();
    addressPage.getCountry().click().type('USA');
    addressPage.getName().click().type('Tolik');
    addressPage.getMobileNumber().click().type('0800500609');
    addressPage.getZipCode().click().type('01488');
    addressPage.getAddress().click().type('Baker street, 221 B');
    addressPage.getCity().click().type('Little ROCK');
    addressPage.getState().click().type('ALABAMA!!!');
    addressPage.getClickSubmitButton().click();
    addressPage.getChooseAddress().first().click();
    addressPage.getClickContinueButton().click();

    cy.log('Choose delivery method');
    deliveryMethodPage.getChooseDeliveryMethod().first().click();
    deliveryMethodPage.getClickContinueButton().click();

    cy.log('Choose payment method and add payment instruments');
    paymentOptionPage.getCreditCard().click();
    paymentOptionPage.getNameForCreditCard().click().type('TEST');
    paymentOptionPage.getCardNumber().click().type('5168743360482123');
    paymentOptionPage.getValidityMonth().select(5);
    paymentOptionPage.getValidityYear().select("2080");
    paymentOptionPage.getSubmitButton().click();
    paymentOptionPage.getChooseCard().first().click({force:true});

    cy.log('Confirming order')
    confirmOrder.getClickReviewButton().click();
    confirmOrder.getClickConfirmButton().click();
    confirmOrder.getAssertionConfirmingOrder().should('have.text', 'Thank you for your purchase!');
})

it('Purchase of goods on main page', () => {
    cy.log('Open website');
    mainPage.open();
    mainPage.getCloseModalWindowButton().click();
    mainPage.getAcceptingCookies().click();
    mainPage.getAccountButton().click({force:true});
    mainPage.getLoginButton().click();

    cy.log('Authorization user');
    authorizationPage.getAddEmail().click().type(email);
    authorizationPage.getAddPassword().click().type(password);
    authorizationPage.getLogInButton().click();

    cy.log('Add goods to basket from main page')
    mainPage.getAddToBasketButton().contains('Add to Basket').click({ forse: true });
    mainPage.getVerifyThatGoodsAdded().should('be.visible');

    cy.log('Basket');
    addGoodsToCart.getShoppingCart().click();
    addGoodsToCart.getClickCheckoutButton().click();

    cy.log('Add adress data');
    addressPage.getAddNewAddress().click();
    addressPage.getCountry().click().type('USA');
    addressPage.getName().click().type('Tolik');
    addressPage.getMobileNumber().click().type('0800500609');
    addressPage.getZipCode().click().type('01488');
    addressPage.getAddress().click().type('Baker street, 221 B');
    addressPage.getCity().click().type('Little ROCK');
    addressPage.getState().click().type('ALABAMA!!!');
    addressPage.getClickSubmitButton().click();
    addressPage.getChooseAddress().first().click();
    addressPage.getClickContinueButton().click();

    cy.log('Choose delivery method');
    deliveryMethodPage.getChooseDeliveryMethod().first().click();
    deliveryMethodPage.getClickContinueButton().click();

    cy.log('Choose payment method and add payment instruments')
    paymentOptionPage.getCreditCard().click();
    paymentOptionPage.getNameForCreditCard().click().type('TEST');
    paymentOptionPage.getCardNumber().click().type('5168743360482123');
    paymentOptionPage.getValidityMonth().select(5);
    paymentOptionPage.getValidityYear().select("2080");
    paymentOptionPage.getSubmitButton().click();
    paymentOptionPage.getChooseCard().first().click({force:true});

    cy.log('Confirming order')
    confirmOrder.getClickReviewButton().click();
    confirmOrder.getClickConfirmButton().click({force:true});
    confirmOrder.getAssertionConfirmingOrder().should('have.text', 'Thank you for your purchase!');
})