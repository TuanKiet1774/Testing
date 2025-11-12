import LoginPage from "./pageObject/LoginPage";

describe('Login test with Page Object Model', () => {
    beforeEach(() => {
        LoginPage.visit();
    })
    it('Test 2: Should login successfull (POM)', () => {
    LoginPage.login('tomsmith','SuperSecretPassword!')
    // -- PHẦN ASSERTION (Kiểm tra) --
    // Bước 5: Kiểm tra xem có thấy Banner thành công hay không
    cy.get('#flash').should('be.visible');
    // Kiểm tra banner có hiển thị đúng test hay không
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  })
})