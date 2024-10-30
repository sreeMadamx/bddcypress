Feature: Login page
    Feature Login page will work depending on the user credentials.

  Background:
    Given user navigates to login page url

  Scenario: Success Login
    When user login with valid credentials
    Then user should see home page


