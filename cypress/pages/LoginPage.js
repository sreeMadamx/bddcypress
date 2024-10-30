class LoginPage{

  fillUsernameOnLoginPage(username){
    cy.getElementWithTimeOut("#user-name").type(username)
  }
  fillPasswordOnLoginPage(password){
    cy.getElementWithTimeOut("#password").type(password)
  }
  clickSubmitOnLoginPage(){
    cy.getElementWithTimeOut("#login-button").click()
  }
}
export const loginPage = new LoginPage();