describe('Advanced Assertions And Selectors', () =>{
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    })

    it('Should different contain vs have.text', () => {
        // 1. Dùng contain (Chứa nội dung là được)
        cy.get('h2').should('contain', 'Login');
        // 2. Dùng have.text (Chứa nội dung đúng 100%)
        cy.get('h2').should('have.text', 'Login Page');
    })

    it('Should check input value using have.value', () => {
        // Gõ vào ô username
        cy.get('#username').type('tomsmith');
        // Kiểm tra ô username có giá trị là 'tomsmith' không ?
        cy.get('#username').should('have.value', 'tomsmith');
    })

    it('Should check element state (enabled)', () => {
        //Kiểm tra nút Login (phải được bật)
        cy.get('.radius').should('be.enabled');
        //Kiểm tra checkbox
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        //Checkbox đầu tiên
        cy.get('input[type="checkbox"]').first().should('not.be.checked');
        //Checkbox cuối
        cy.get('input[type="checkbox"]').last().should('be.checked');
        
    })
})