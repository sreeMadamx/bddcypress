import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage'
import '@shelex/cypress-allure-plugin';

Given("user navigates to login page url", () => {
  cy.visit("/");
  cy.wait(2000)
});

When("user login with valid credentials", () => {
    loginPage.fillUsernameOnLoginPage(Cypress.env("username"))
    loginPage.fillPasswordOnLoginPage(Cypress.env("password"))
    loginPage.clickSubmitOnLoginPage()
});

Then("user should see home page", () => {
  cy.url().should("contains", "/inventory.html");
});
