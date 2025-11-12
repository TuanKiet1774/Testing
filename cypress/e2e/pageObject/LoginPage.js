class LoginPage{
    //Phương thức mở trang visit()
    visit(){
        cy.visit('https://the-internet.herokuapp.com/login');
    }
    //Phương thức nhập username
    fillUsername(username){
        cy.get('#username').type(username);
    }
    //Phương thức nhập pass
    fillPassword(password){
        cy.get('#password').type(password);
    }
    //Phương thức nhấn login
    submit(){
        cy.get('.radius').click();
    }

    login(username, password){
        this.fillUsername(username);
        this.fillPassword(password);
        this.submit();
    }
}

export default new LoginPage();