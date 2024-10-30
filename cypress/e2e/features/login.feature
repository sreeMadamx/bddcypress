Feature: Login page
    Feature Login page will work depending on the user credentials.

  Background:
    Given user navigates to login page url

  @smoke  
  Scenario: Success Login
    When user login with valid credentials
    Then user should see home page
    Then user verifies list of inventory names

