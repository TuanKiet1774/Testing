// describe: Định nghĩa một "Bộ kich bản" (Test Suite)
describe('Login Page Test Suite', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  })
  // it: Định nghĩa một "Kịch bản" (Test Case cụ thể)
  it('Test 1: Visit page and find elements', () => {
    // Bước 1: Dùng lênh cy.visit() để truy cập trang web
    // cy.visit('https://the-internet.herokuapp.com/login');

    // Bước 2: Dùng lệnh cy.get() để tìm phần tử (element)
    // Chúng ta tìm bằng "selector". Selector đơn giản nhất là ID (dấu #)

    // Tìm ô username
    cy.get('#username');
    //cy.get('input[name="username"]');

    // Tìm ô password
    cy.get('#password');
    //cy.get('input[name="password"]');

    // Tìm nút Login (nút này có class là 'radius')
    cy.get('.radius');
    //cy.get('button[type="submit"]');
  });

  //Tc 2: Kịch bản đăng nhập 
  it('Test 2: Should login successfull', () => {
    // Bước 1: Dùng lênh cy.visit() để truy cập trang web
    // cy.visit('https://the-internet.herokuapp.com/login');

    // Bước 2: Tìm ô Username và gõ vào đó
    cy.get('#username').type('tomsmith');
    // Bước 3:  Tìm ô Pass và gõ vào đó
    cy.get('#password').type('SuperSecretPassword!');
    // Bước 4: Tìm nút Login và nhấn vào
    cy.get('.radius').click();
    // -- PHẦN ASSERTION (Kiểm tra) --
    // Bước 5: Kiểm tra xem có thấy Banner thành công hay không
    cy.get('#flash').should('be.visible');
    // Kiểm tra banner có hiển thị đúng test hay không
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  })

  //Tc 3: Lỗi đăng nhập 
  it('Test 3: Should fail login with wrong password', () => {
    // Bước 1: Dùng lênh cy.visit() để truy cập trang web
    // cy.visit('https://the-internet.herokuapp.com/login');

    // Bước 2: Tìm ô Username và gõ vào đó
    cy.get('#username').type('tomsmith');
    // Bước 3:  Tìm ô Pass và gõ vào đó sai mật khẩu
    cy.get('#password').type('WrongPassword!');
    // Bước 4: Tìm nút Login và nhấn vào
    cy.get('.radius').click();
    // -- PHẦN ASSERTION (Kiểm tra) --
    // Bước 5: Kiểm tra xem có thấy Banner thành công hay không
    cy.get('#flash').should('be.visible');
    // Kiểm tra banner có hiển thị đúng test hay không
    cy.get('#flash').should('contain', 'Your password is invalid!');
  })
});