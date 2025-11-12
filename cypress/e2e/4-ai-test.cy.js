describe('Kiểm tra chức năng Đăng nhập thành công', () => {
  it('Đăng nhập với thông tin hợp lệ', () => {
    // 1. Truy cập trang đăng nhập
    cy.visit('https://the-internet.herokuapp.com/login');

    // 2. Nhập username
    cy.get('#username').type('tomsmith');

    // 3. Nhập password
    cy.get('#password').type('SuperSecretPassword!');

    // 4. Nhấn nút Login
    cy.get('button[type="submit"]').click();

    // 5. Kiểm tra chuyển hướng thành công
    cy.url().should('include', '/secure'); // URL phải chứa "/secure"

    // 6. Kiểm tra banner hiển thị đúng nội dung
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');
  });
});
